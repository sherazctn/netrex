import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight, Play, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const PROFILE_URL = "https://www.instagram.com/netrex.official";
const POST_COUNT = 16;

interface FeedItem {
  id: string;
  caption: string;
  permalink: string;
  timestamp?: string;
  image: string;
  mediaType?: string;
}

// Shown until the Instagram connection is live, so the section never looks broken.
const placeholders = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop&sat=-40",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=750&fit=crop&sat=-40",
];

function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function PostCard({
  item,
  viewLabel,
  duplicate,
  width,
}: {
  item: FeedItem;
  viewLabel: string;
  duplicate?: boolean;
  width: number;
}) {
  const date = formatDate(item.timestamp);
  const [broken, setBroken] = useState(false);
  const TypeIcon =
    item.mediaType === "VIDEO" ? Play : item.mediaType === "CAROUSEL_ALBUM" ? Layers : null;
  return (
    <a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
      style={{ width }}
      className="group relative block aspect-[4/5] shrink-0 overflow-hidden rounded-3xl border border-border bg-muted shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {broken ? (
        // Instagram image links expire; show a branded tile instead of a broken image.
        <span className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#833ab4] via-[#e1306c] to-[#fcaf45] p-4 text-center text-white">
          <Instagram className="h-10 w-10" />
          <span className="text-sm font-semibold">@netrex.official</span>
        </span>
      ) : (
        <img
          src={item.image}
          alt={item.caption ? item.caption.slice(0, 110) : "NETREX Instagram post"}
          loading="lazy"
          decoding="async"
          draggable={false}
          referrerPolicy="no-referrer"
          onError={() => setBroken(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
      )}
      {TypeIcon && (
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
          <TypeIcon className="h-4 w-4" fill={item.mediaType === "VIDEO" ? "currentColor" : "none"} />
        </span>
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {item.caption && (
          <p className="line-clamp-3 translate-y-3 text-sm leading-snug text-white/95 transition-transform duration-300 group-hover:translate-y-0">
            {item.caption}
          </p>
        )}
        <span className="mt-3 flex items-center justify-between text-xs font-medium text-white/80">
          <span>{date}</span>
          <span className="inline-flex items-center gap-1 text-white">
            {viewLabel}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </span>
      </div>
    </a>
  );
}

/**
 * Continuous marquee of the latest Instagram posts.
 * - Five posts across on desktop (4 on laptops, 3 on tablets, 2 on phones).
 * - Drifts smoothly and eases to a stop on hover or keyboard focus; drag or swipe to scrub.
 * - Arrow buttons glide exactly one post; posts fade in and out through the edge mask.
 * - Pauses off screen and in background tabs; a swipeable row with prefers-reduced-motion.
 */
const SPEED = 42; // px per second while drifting

function PostMarquee({ items, viewLabel }: { items: FeedItem[]; viewLabel: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [cardWidth, setCardWidth] = useState(240);
  const [gap, setGap] = useState(20);
  const nudgeRef = useRef<(dir: 1 | -1) => void>(() => {});
  const draggedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches || navigator.webdriver === true);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Card width comes from the visible row (not the doubled track), so posts keep a real size.
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const measure = () => {
      const w = vp.clientWidth;
      const perRow = w >= 1100 ? 5 : w >= 860 ? 4 : w >= 600 ? 3 : 2;
      const g = w >= 768 ? 20 : 14;
      setGap(g);
      setCardWidth(Math.max(120, Math.floor((w - g * (perRow - 1)) / perRow)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(vp);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || reduced || items.length < 2) return;

    let offset = 0;
    let velocity = SPEED;
    let target = SPEED;
    let glide: { from: number; to: number; t: number } | null = null;
    let dragging = false;
    let lastX = 0;
    let dragVel = 0;
    let last = performance.now();
    let raf = 0;
    let visible = true;
    const step = cardWidth + gap;

    const wrap = (v: number) => {
      const L = track.scrollWidth / 2;
      return L > 0 ? ((v % L) + L) % L : 0;
    };
    const paint = () => {
      track.style.transform = `translate3d(${-offset}px,0,0)`;
    };
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (glide) {
        glide.t = Math.min(1, glide.t + dt / 0.6);
        const e = 1 - Math.pow(1 - glide.t, 3);
        offset = wrap(glide.from + (glide.to - glide.from) * e);
        if (glide.t >= 1) glide = null;
      } else if (!dragging) {
        velocity += (target - velocity) * Math.min(1, dt * 3);
        offset = wrap(offset + velocity * dt);
      }
      paint();
      raf = visible ? requestAnimationFrame(tick) : 0;
    };
    const start = () => {
      if (!raf && visible && document.visibilityState === "visible") {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    nudgeRef.current = (dir) => {
      const from = glide ? glide.to : offset;
      glide = { from: offset, to: Math.round((from + dir * step) / step) * step, t: 0 };
      velocity = 0;
    };

    const slow = () => (target = 0);
    const go = () => {
      if (!dragging) target = SPEED;
    };
    const onDown = (e: PointerEvent) => {
      dragging = true;
      draggedRef.current = false;
      glide = null;
      lastX = e.clientX;
      dragVel = 0;
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      if (Math.abs(dx) > 2) draggedRef.current = true;
      offset = wrap(offset - dx);
      dragVel = -dx * 60;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      velocity = Math.max(-1600, Math.min(1600, dragVel));
      target = viewport.matches(":hover") ? 0 : SPEED;
    };

    viewport.addEventListener("pointerenter", slow);
    viewport.addEventListener("pointerleave", go);
    viewport.addEventListener("focusin", slow);
    viewport.addEventListener("focusout", go);
    viewport.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(viewport);
    const onVisibility = () => (document.visibilityState === "visible" ? start() : stop());
    document.addEventListener("visibilitychange", onVisibility);

    paint();
    start();
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      viewport.removeEventListener("pointerenter", slow);
      viewport.removeEventListener("pointerleave", go);
      viewport.removeEventListener("focusin", slow);
      viewport.removeEventListener("focusout", go);
      viewport.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [reduced, cardWidth, gap, items]);

  const loop = reduced ? items : [...items, ...items];
  const edgeMask = "linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%)";

  return (
    <div>
      <div
        ref={viewportRef}
        className={
          reduced
            ? "overflow-x-auto snap-x snap-mandatory pb-2"
            : "cursor-grab overflow-hidden active:cursor-grabbing [touch-action:pan-y]"
        }
        style={reduced ? undefined : { WebkitMaskImage: edgeMask, maskImage: edgeMask }}
        aria-roledescription="carousel"
        aria-label="Latest Instagram posts"
        onClickCapture={(e) => {
          // A drag should scrub the row, not open the post.
          if (draggedRef.current) {
            e.preventDefault();
            e.stopPropagation();
            draggedRef.current = false;
          }
        }}
      >
        <div ref={trackRef} className="flex w-max py-4 will-change-transform" style={{ gap }}>
          {loop.map((item, index) => (
            <PostCard
              key={`${item.id}-${index}`}
              item={item}
              viewLabel={viewLabel}
              duplicate={!reduced && index >= items.length}
              width={cardWidth}
            />
          ))}
        </div>
      </div>

      {!reduced && items.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => nudgeRef.current(-1)}
            aria-label="Previous post"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:scale-110 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => nudgeRef.current(1)}
            aria-label="Next post"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:scale-110 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export function InstagramFeed() {
  const { t } = useLanguage();
  const [items, setItems] = useState<FeedItem[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      // 1. Live server function (latest 16 posts, cached ~2 minutes).
      try {
        const { data, error } = await supabase.functions.invoke("instagram-feed");
        if (!active) return;
        if (!error && data?.connected && Array.isArray(data.items) && data.items.length) {
          setItems(data.items.slice(0, POST_COUNT));
          setConnected(true);
          return;
        }
      } catch {
        /* try the deploy-time copy next */
      }
      // 2. Fallback: posts baked into the site at deploy time (scripts/fetch-instagram.mjs).
      try {
        const res = await fetch("/instagram/feed.json", { cache: "no-cache" });
        if (res.ok) {
          const data = await res.json();
          if (active && Array.isArray(data?.items) && data.items.length) {
            setItems(data.items.slice(0, POST_COUNT));
            setConnected(true);
          }
        }
      } catch {
        /* fall back to placeholders */
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const tiles: FeedItem[] = connected
    ? items
    : placeholders.map((image, i) => ({
        id: `ph-${i}`,
        caption: "",
        permalink: PROFILE_URL,
        image,
      }));

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 -left-24 w-[380px] h-[380px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              <Instagram className="h-4 w-4" />
              {t("instagram.badge")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("instagram.title")}{" "}
              <span className="text-primary">@netrex.official</span>
            </h2>
            <p className="text-lg text-muted-foreground">{t("instagram.desc")}</p>
          </div>

          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            {t("instagram.follow")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PostMarquee items={tiles} viewLabel={t("instagram.view")} />
        </motion.div>
      </div>
    </section>
  );
}
