import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ReviewCard, ReviewDialog, SourceMark } from "@/components/reviews/ReviewCard";
import { ALL_REVIEWS, SOURCE_LABEL, type Review, type ReviewSource } from "@/lib/reviews";

const PAGE = 21;

/** All stored five-star reviews with source filters; cards open the full review in a dialog. */
export function ReviewsGrid() {
  const [filter, setFilter] = useState<ReviewSource | "all">("all");
  const [shown, setShown] = useState(PAGE);
  const [open, setOpen] = useState<Review | null>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: ALL_REVIEWS.length };
    for (const r of ALL_REVIEWS) c[r.source] = (c[r.source] ?? 0) + 1;
    return c;
  }, []);
  const list = filter === "all" ? ALL_REVIEWS : ALL_REVIEWS.filter((r) => r.source === filter);

  const tabs: (ReviewSource | "all")[] = ["all", "fiverr", "google", "clutch"];

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter reviews by source">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={filter === t}
            onClick={() => {
              setFilter(t);
              setShown(PAGE);
            }}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary hover:text-primary"
            }`}
          >
            {t !== "all" && <SourceMark source={t} className="h-4 w-4" />}
            {t === "all" ? "All reviews" : SOURCE_LABEL[t]}
            <span className="tabular-nums opacity-70">{counts[t] ?? 0}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, shown).map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
          >
            <ReviewCard review={review} onOpen={() => setOpen(review)} />
          </motion.div>
        ))}
      </div>

      {shown < list.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShown((n) => n + PAGE)}
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Show more reviews
          </button>
        </div>
      )}

      <ReviewDialog review={open} onClose={() => setOpen(null)} />
    </>
  );
}
