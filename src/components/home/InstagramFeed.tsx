import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight, Play, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const PROFILE_URL = "https://www.instagram.com/netrex.official";
const POST_COUNT = 12;
const STEP_PAUSE_MS = 2800; // rest time between one-item steps
const STEP_DURATION_MS = 900; // slide time for each one-item step

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

function PostCard({ item, viewLabel, duplicate }: { item: FeedItem; viewLabel: string; duplicate?: boolean }) {
  const date = formatDate(item.timestamp);
  const TypeIcon =
    item.mediaType === "VIDEO" ? Play : item.mediaType === "CAROUSEL_ALBUM" ? Layers : null;
  return (
    <a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={duplicate || undefined}
      tabIndex={duplicate ? -1 : undefined}
      className="group relative block aspect-[4/5] w-[calc(50%-0.5rem)] shrink-0 overflow-hidden rounded-3xl border border-border bg-muted shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-[calc(25%-0.95rem)] lg:w-[calc(20%-1rem)]"
    >
      <img
        src={item.image}
        alt={item.caption ? item.caption.slice(0, 110) : "NETREX Instagram post"}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
      />
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
 * Step marquee of the latest Instagram posts.
 * - Shows ~5 posts on desktop, 4 on small screens and 2 on phones.
 * - Slides exactly one post at a time, then rests, so posts fade in on one edge
 *   and fade out on the other through the edge mask.
 * - Pauses while hovered/focused, off screen or in a background tab;
 *   becomes a swipeable row with prefers-reduced-motion.
 */
function StepMarquee({ items, viewLabel }: { items: FeedItem[]; viewLabel: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches || navigator.webdriver === true);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const stepOnce = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;
    const first = track.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const step = first.getBoundingClientRect().width + gap;
    const loop = track.scrollWidth / 2; // the list is rendered twice

    const current = parseFloat(track.dataset.offset || "0");
    let next = current + step * direction;

    // Wrap seamlessly: jump by one loop with no transition, then animate the step.
    track.style.transition = "none";
    if (next >= loop) {
      track.style.transform = `translate3d(${-(current - loop)}px,0,0)`;
      next -= loop;
    } else if (next < 0) {
      track.style.transform = `translate3d(${-(current + loop)}px,0,0)`;
      next += loop;
    } else {
      track.style.transform = `translate3d(${-current}px,0,0)`;
    }
    // Force reflow so the jump applies before the animated step.
    void track.offsetWidth;
    track.style.transition = `transform ${STEP_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    track.style.transform = `translate3d(${-next}px,0,0)`;
    track.dataset.offset = String(next);
  }, []);

  useEffect(() => {
    if (reduced || paused || items.length < 2) return;
    const id = setInterval(() => stepOnce(1), STEP_PAUSE_MS + STEP_DURATION_MS);
    return () => clearInterval(id);
  }, [reduced, paused, items.length, stepOnce]);

  const loop = reduced ? items : [...items, ...items];
  const edgeMask =
    "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)";

  return (
    <div
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        className={reduced ? "overflow-x-auto snap-x snap-mandatory pb-2" : "overflow-hidden"}
        style={{ WebkitMaskImage: edgeMask, maskImage: edgeMask }}
        aria-label="Latest Instagram posts"
      >
        <div
          ref={trackRef}
          data-offset="0"
          className="flex w-max gap-4 py-4 will-change-transform md:gap-5"
        >
          {loop.map((item, index) => (
            <PostCard
              key={`${item.id}-${index}`}
              item={item}
              viewLabel={viewLabel}
              duplicate={!reduced && index >= items.length}
            />
          ))}
        </div>
      </div>

      {!reduced && items.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => stepOnce(-1)}
            aria-label="Previous post"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:scale-110 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => stepOnce(1)}
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
      // 1. Live server function (latest posts, cached ~2 minutes).
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
          <StepMarquee items={tiles} viewLabel={t("instagram.view")} />
        </motion.div>
      </div>
    </section>
  );
}
