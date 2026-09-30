import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReviewsMarquee } from "@/components/reviews/ReviewsMarquee";
import { SourceMark } from "@/components/reviews/ReviewCard";
import { recentReviews, REVIEW_TOTALS } from "@/lib/reviews";

const HOME_REVIEWS = recentReviews(15);

/** Home page testimonials: the 15 most recent five-star reviews from Fiverr, Google and Clutch. */
export function Testimonials() {
  const chips = [
    { source: "fiverr" as const, text: `${REVIEW_TOTALS.fiverr.fiveStar} five-star reviews on Fiverr` },
    { source: "google" as const, text: `5.0 on Google (Dubai & London)` },
    { source: "clutch" as const, text: `5.0 on Clutch` },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="absolute -right-24 top-10 -z-10 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Client reviews
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
              What clients say about <span className="text-primary">NETREX</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c.source}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  <SourceMark source={c.source} className="h-4 w-4" />
                  {c.text}
                </span>
              ))}
            </div>
          </div>
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent md:self-auto"
          >
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <ReviewsMarquee reviews={HOME_REVIEWS} />
      </div>
    </section>
  );
}
