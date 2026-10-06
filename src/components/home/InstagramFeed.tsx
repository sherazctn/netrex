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

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
};

function PostCard({ item, index, viewLabel }: { item: FeedItem; index: number; viewLabel: string }) {
  const date = formatDate(item.timestamp);
  const TypeIcon =
    item.mediaType === "VIDEO" ? Play : item.mediaType === "CAROUSEL_ALBUM" ? Layers : null;
  return (
    <motion.a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -10, rotate: index % 2 === 0 ? -1 : 1, transition: { duration: 0.25 } }}
      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted shadow-sm transition-shadow duration-300 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
    </motion.a>
  );
}

/**
 * Animated carousel of the latest Instagram posts, four per row.
 * Auto-advances every few seconds, pauses on hover/focus, and supports
 * arrows and dot navigation. Respects prefers-reduced-motion.
 */
function PostCarousel({ items, viewLabel }: { items: FeedItem[]; viewLabel: string }) {
  const pageCount = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const [[page, dir], setPage] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const goTo = useCallback(
    (next: number, direction?: number) => {
      setPage(([current]) => {
        const target = ((next % pageCount) + pageCount) % pageCount;
        return [target, direction ?? (target > current ? 1 : -1)];
      });
    },
    [pageCount]
  );

  useEffect(() => {
    if (paused || reduced || pageCount < 2) return;
    timer.current = setInterval(() => goTo(page + 1, 1), AUTO_ADVANCE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduced, page, pageCount, goTo]);

  const visible = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={page}
            custom={dir}
            variants={reduced ? undefined : slideVariants}
            initial={reduced ? false : "enter"}
            animate="center"
            exit={reduced ? undefined : "exit"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4"
          >
            {visible.map((item, i) => (
              <PostCard key={item.id} item={item} index={i} viewLabel={viewLabel} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(page - 1, -1)}
            aria-label="Previous posts"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:scale-110 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to posts page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(page + 1, 1)}
            aria-label="Next posts"
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
          <PostCarousel items={tiles} viewLabel={t("instagram.view")} />
        </motion.div>
      </div>
    </section>
  );
}
