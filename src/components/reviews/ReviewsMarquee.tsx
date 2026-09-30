import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewCard, ReviewDialog } from "@/components/reviews/ReviewCard";
import type { Review } from "@/lib/reviews";

const SPEED = 34; // px per second while drifting
const GAP = 24;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const smoothstep = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

/**
 * Infinite review marquee: three cards across on desktop (two on tablets, one on phones).
 * - Drifts continuously and eases to a stop on hover or keyboard focus.
 * - Drag or swipe to scrub, with momentum; arrow buttons glide one card at a time.
 * - Cards tilt slightly in 3D and soften towards the edges, so the row feels like it turns.
 * - Pauses off screen and in background tabs; a plain swipeable row with reduced motion.
 */
export function ReviewsMarquee({ reviews }: { reviews: Review[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(360);
  const [reduced, setReduced] = useState(false);
  const [open, setOpen] = useState<Review | null>(null);
  const nudgeRef = useRef<(dir: 1 | -1) => void>(() => {});
  const draggedRef = useRef(false);

  // Three cards per row on desktop.
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const measure = () => {
      const w = vp.clientWidth;
      const perRow = w >= 1024 ? 3 : w >= 640 ? 2 : 1.12;
      setCardWidth(Math.floor((w - GAP * (Math.ceil(perRow) - 1)) / perRow));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(vp);
    return () => ro.disconnect();
  }, []);

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
    let velocity = SPEED; // current px/s
    let target = SPEED; // resting drift speed
    let glide: { from: number; to: number; t: number } | null = null;
    let dragging = false;
    let lastX = 0;
    let dragVel = 0;
    let last = performance.now();
    let raf = 0;
    let visible = true;
    const step = cardWidth + GAP;

    const loopWidth = () => track.scrollWidth / 2;
    const wrap = (v: number) => {
      const L = loopWidth();
      return L > 0 ? ((v % L) + L) % L : 0;
    };

    const paint = () => {
      track.style.transform = `translate3d(${-offset}px,0,0)`;
      const vp = viewport.getBoundingClientRect();
      const center = vp.left + vp.width / 2;
      const half = vp.width / 2;
      for (const el of Array.from(track.children) as HTMLElement[]) {
        const r = el.getBoundingClientRect();
        const signed = (r.left + r.width / 2 - center) / (half + r.width / 2); // -1 .. 1
        const d = Math.abs(signed);
        const fade = smoothstep(0.55, 1, d);
        el.style.opacity = String(1 - fade * 0.75);
        el.style.transform = `perspective(1200px) rotateY(${(-signed * 7).toFixed(2)}deg) scale(${(1 - smoothstep(0.2, 1, d) * 0.07).toFixed(3)})`;
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (glide) {
        glide.t = Math.min(1, glide.t + dt / 0.6);
        const e = 1 - Math.pow(1 - glide.t, 3); // ease-out cubic
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
      velocity = clamp(dragVel, -1600, 1600); // momentum, then eases back to the drift
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
  }, [reduced, cardWidth, reviews]);

  const loop = reduced ? reviews : [...reviews, ...reviews];
  const edgeMask = "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)";

  return (
    <div className="relative">
      <div
        ref={viewportRef}
        className={
          reduced
            ? "overflow-x-auto snap-x snap-mandatory pb-4"
            : "cursor-grab overflow-hidden py-4 active:cursor-grabbing [touch-action:pan-y]"
        }
        style={reduced ? undefined : { WebkitMaskImage: edgeMask, maskImage: edgeMask }}
        aria-roledescription="carousel"
        aria-label="Recent client reviews"
      >
        <div ref={trackRef} className="flex w-max will-change-transform" style={{ gap: GAP }}>
          {loop.map((review, i) => {
            const duplicate = !reduced && i >= reviews.length;
            return (
              <div
                key={`${review.id}-${i}`}
                className="shrink-0 snap-start [transform-style:preserve-3d]"
                style={{ width: cardWidth }}
                aria-hidden={duplicate || undefined}
              >
                <ReviewCard
                  review={review}
                  className="select-none"
                  onOpen={() => {
                    if (!draggedRef.current) setOpen(review);
                  }}
                  tabIndex={duplicate ? -1 : 0}
                />
              </div>
            );
          })}
        </div>
      </div>

      {!reduced && (
        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => nudgeRef.current(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => nudgeRef.current(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      <ReviewDialog review={open} onClose={() => setOpen(null)} />
    </div>
  );
}
