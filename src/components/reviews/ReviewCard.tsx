import { useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { Star, Quote, Repeat, BadgeCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { flagEmoji, monthYear, SOURCE_LABEL, type Review, type ReviewSource } from "@/lib/reviews";

export function Stars({ n, className = "h-4 w-4" }: { n: number; className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`${className} ${i < n ? "fill-primary text-primary" : "text-border"}`} />
      ))}
    </div>
  );
}

function GoogleMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

/** Small source mark: Fiverr, Google or Clutch. */
export function SourceMark({ source, className = "h-4 w-4" }: { source: ReviewSource; className?: string }) {
  if (source === "google") return <GoogleMark className={className} />;
  const style = source === "fiverr" ? "bg-[#1dbf73] text-white" : "bg-[#17313b] text-[#ff3d2e]";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex ${className} items-center justify-center rounded-full text-[9px] font-black leading-none ${style}`}
    >
      {source === "fiverr" ? "fi" : "C"}
    </span>
  );
}

/** Non-clickable label naming where the review was left. */
export function SourceLabel({ review }: { review: Review }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <SourceMark source={review.source} className="h-3.5 w-3.5" />
      {review.source === "clutch" ? "Verified on Clutch" : review.source === "google" ? "Google review" : "Verified on Fiverr"}
    </span>
  );
}

function subline(review: Review) {
  if (review.role) return review.role;
  if (review.country) return review.country;
  if (review.location) return `NETREX ${review.location}`;
  return SOURCE_LABEL[review.source];
}

/**
 * Equal-height review card. The whole card opens the full review in a dialog on this site
 * (nothing links away to Fiverr, Google or Clutch).
 */
export function ReviewCard({
  review,
  onOpen,
  className = "",
  tabIndex = 0,
}: {
  review: Review;
  onOpen: () => void;
  className?: string;
  tabIndex?: number;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [clamped, setClamped] = useState(false);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 2);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [review.text]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      role="button"
      tabIndex={tabIndex}
      onClick={onOpen}
      onKeyDown={onKey}
      aria-label={`Read ${review.user}'s review`}
      className={`flex h-[340px] cursor-pointer flex-col rounded-3xl border border-border bg-card p-6 text-left transition-[box-shadow,border-color] hover:border-primary/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      <header className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold uppercase text-primary">
            {review.user.charAt(0)}
            <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-card p-0.5">
              <SourceMark source={review.source} className="h-4 w-4" />
            </span>
          </span>
          <div className="min-w-0">
            <div className="truncate font-semibold">{review.user}</div>
            <div className="flex min-w-0 items-center gap-1.5 text-sm text-muted-foreground">
              {review.countryCode && (
                <span className="text-base leading-none" aria-hidden="true">{flagEmoji(review.countryCode)}</span>
              )}
              <span className="truncate">{subline(review)}</span>
            </div>
          </div>
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">{monthYear(review.date)}</span>
      </header>

      <div className="mb-3 flex items-center gap-3">
        <Stars n={review.rating} />
        {review.repeatClient && (
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/70">
            <Repeat className="h-3 w-3" /> Repeat client
          </span>
        )}
      </div>

      <div className="relative min-h-0 flex-1">
        <Quote className="pointer-events-none absolute -top-1 right-0 h-9 w-9 text-primary/10" aria-hidden="true" />
        <p ref={textRef} className="relative z-10 line-clamp-6 whitespace-pre-line text-[15px] leading-relaxed text-muted-foreground">
          {review.source === "clutch" ? `“${review.text}”` : review.text}
        </p>
      </div>

      <footer className="mt-4 flex items-center justify-between border-t border-border pt-4">
        {clamped || review.summary ? (
          <span className="text-sm font-semibold text-primary">Read more</span>
        ) : (
          <span />
        )}
        <SourceLabel review={review} />
      </footer>
    </article>
  );
}

export function ReviewDialog({ review, onClose }: { review: Review | null; onClose: () => void }) {
  return (
    <Dialog open={!!review} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg rounded-3xl">
        {review && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {review.countryCode && <span aria-hidden="true">{flagEmoji(review.countryCode)}</span>}
                {review.user}
              </DialogTitle>
              <DialogDescription>
                {[subline(review), monthYear(review.date)].filter(Boolean).join(" · ")}
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-between gap-3">
              <Stars n={review.rating} />
              <SourceLabel review={review} />
            </div>
            <div className="max-h-[55vh] space-y-4 overflow-y-auto">
              {review.project && <p className="text-sm font-semibold text-foreground">{review.project}</p>}
              <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
                {review.source === "clutch" ? `“${review.text}”` : review.text}
              </p>
              {review.translatedFrom && (
                <p className="text-xs text-muted-foreground">Translated from {review.translatedFrom}.</p>
              )}
              {review.summary && (
                <div className="rounded-2xl bg-secondary/60 p-4 text-sm leading-relaxed text-muted-foreground">
                  <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground">
                    <BadgeCheck className="h-3.5 w-3.5 text-primary" /> Clutch project summary
                  </div>
                  {review.summary}
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
