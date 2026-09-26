import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight, Play, Layers } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const PROFILE_URL = "https://www.instagram.com/netrex.official";
const POST_COUNT = 10;
const SPEED = 38; // px per second at full speed

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
];

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Infinite marquee of the latest Instagram posts.
 * - Moves continuously and eases to a stop while the pointer is over it (or a card has focus).
 * - Cards fade, shrink and soften as they travel toward either edge, and the strip dissolves
 *   into the page through an edge mask, so posts appear and disappear smoothly.
 * - Pauses while off screen or in a background tab; becomes a swipeable row with
 *   prefers-reduced-motion.
 */
function Marquee({ items, viewLabel }: { items: FeedItem[]; viewLabel: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches || navigator.webdriver === true);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || reduced) return;

    let offset = 0;
    let speed = SPEED;
    let target = SPEED;
    let last = performance.now();
    let raf = 0;
    let visible = true;

    const cards = () => Array.from(track.children) as HTMLElement[];

    const paint = () => {
      const vp = viewport.getBoundingClientRect();
      const center = vp.left + vp.width / 2;
      const half = vp.width / 2;
      for (const card of cards()) {
        const r = card.getBoundingClientRect();
        // 0 at the centre, 1 when the card has fully left the strip (scales with card size,
        // so phones show neighbouring posts too)
        const d = Math.abs(r.left + r.width / 2 - center) / (half + r.width / 2);
        const fade = smoothstep(0.5, 0.98, d);
        card.style.opacity = String(1 - fade * 0.85);
        card.style.transform = `scale(${1 - smoothstep(0.15, 0.95, d) * 0.1})`;
        card.style.filter = fade > 0.02 ? `saturate(${1 - fade * 0.6})` : "";
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      speed += (target - speed) * Math.min(1, dt * 4); // ease in and out of pauses
      if (Math.abs(target - speed) < 0.5) speed = target;
      const loop = track.scrollWidth / 2; // the list is rendered twice
      if (loop > 0) {
        offset = (offset + speed * dt) % loop;
        track.style.transform = `translate3d(${-offset}px,0,0)`;
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

    const slow = () => (target = 0);
    const go = () => (target = SPEED);
    viewport.addEventListener("pointerenter", slow);
    viewport.addEventListener("pointerleave", go);
    viewport.addEventListener("focusin", slow);
    viewport.addEventListener("focusout", go);

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
    };
  }, [reduced, items]);

  const loop = reduced ? items : [...items, ...items];
  const edgeMask =
    "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)";

  return (
    <div
      ref={viewportRef}
      className={reduced ? "overflow-x-auto snap-x snap-mandatory pb-2" : "overflow-hidden"}
      style={{ WebkitMaskImage: edgeMask, maskImage: edgeMask }}
      aria-label="Latest Instagram posts"
    >
      <div ref={trackRef} className="flex w-max gap-4 py-4 will-change-transform md:gap-5">
        {loop.map((item, index) => {
          const duplicate = !reduced && index >= items.length;
          const date = formatDate(item.timestamp);
          const TypeIcon =
            item.mediaType === "VIDEO" ? Play : item.mediaType === "CAROUSEL_ALBUM" ? Layers : null;
          return (
            <a
              key={`${item.id}-${index}`}
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={duplicate || undefined}
              tabIndex={duplicate ? -1 : undefined}
              className="group relative block aspect-[4/5] w-48 shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-muted shadow-sm transition-shadow duration-300 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-64 lg:w-72"
            >
              <img
                src={item.image}
                alt={item.caption ? item.caption.slice(0, 110) : `NETREX Instagram post ${(index % items.length) + 1}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {TypeIcon && (
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
                  <TypeIcon className="h-4 w-4" fill={item.mediaType === "VIDEO" ? "currentColor" : "none"} />
                </span>
              )}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.caption && (
                  <p className="line-clamp-3 text-sm leading-snug text-white/95">{item.caption}</p>
                )}
                <span className="mt-3 flex items-center justify-between text-xs font-medium text-white/80">
                  <span>{date}</span>
                  <span className="inline-flex items-center gap-1 text-white">
                    {viewLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </span>
              </div>
            </a>
          );
        })}
      </div>
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
      try {
        const { data, error } = await supabase.functions.invoke("instagram-feed");
        if (error || !active) return;
        if (data?.connected && Array.isArray(data.items) && data.items.length) {
          setItems(data.items.slice(0, POST_COUNT));
          setConnected(true);
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[1600px]"
      >
        <Marquee items={tiles} viewLabel={t("instagram.view")} />
      </motion.div>
    </section>
  );
}
