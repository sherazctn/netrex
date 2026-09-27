import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight, Repeat } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import reviewsData from "@/data/fiverrReviews.json";

export interface FiverrReview {
  id: string;
  user: string;
  country: string;
  countryCode: string;
  rating: number;
  date: string;
  repeatClient?: boolean;
  text: string;
}

export const fiverrData = reviewsData as {
  gigUrl: string;
  profileUrl: string;
  rating: number;
  reviewCount: number;
  breakdown: Record<string, number>;
  reviews: FiverrReview[];
};

/** "US" -> 🇺🇸 */
export function flagEmoji(code: string) {
  return code
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

function monthYear(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-primary text-primary" : "text-border"}`} />
      ))}
    </div>
  );
}

function ReviewCard({ review, index, onOpen }: { review: FiverrReview; index: number; onOpen: () => void }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [clamped, setClamped] = useState(false);

  // Only offer "Read more" when the text is actually cut off.
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 2);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [review.text]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      className="flex h-[340px] flex-col rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
    >
      <header className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold uppercase text-primary">
            {review.user.charAt(0)}
          </span>
          <div className="min-w-0">
            <div className="truncate font-semibold">{review.user}</div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span className="text-base leading-none" aria-hidden="true">{flagEmoji(review.countryCode)}</span>
              {review.country}
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
          {review.text}
        </p>
      </div>

      <footer className="mt-4 flex items-center justify-between border-t border-border pt-4">
        {clamped ? (
          <button
            type="button"
            onClick={onOpen}
            className="text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Read more
          </button>
        ) : (
          <span />
        )}
        <a
          href={fiverrData.gigUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
        >
          Verified on Fiverr <ArrowUpRight className="h-3 w-3" />
        </a>
      </footer>
    </motion.article>
  );
}

/** Real 5-star client reviews from the NETREX Fiverr profile (src/data/fiverrReviews.json, refreshed monthly). */
export function FiverrReviews({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<FiverrReview | null>(null);
  const reviews = fiverrData.reviews
    .filter((r) => r.rating === 5)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit ?? undefined);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <ReviewCard key={review.id} review={review} index={index} onOpen={() => setOpen(review)} />
        ))}
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-lg rounded-3xl">
          {open && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span aria-hidden="true">{flagEmoji(open.countryCode)}</span>
                  {open.user}
                </DialogTitle>
                <DialogDescription>
                  {open.country} · {monthYear(open.date)} · Verified Fiverr review
                </DialogDescription>
              </DialogHeader>
              <Stars n={open.rating} />
              <p className="max-h-[55vh] overflow-y-auto whitespace-pre-line leading-relaxed text-muted-foreground">
                {open.text}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
