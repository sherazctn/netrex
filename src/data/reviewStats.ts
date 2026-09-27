import reviews from "@/data/fiverrReviews.json";

/** Number of five-star Fiverr reviews (updated by the monthly review refresh). */
export const FIVE_STAR_REVIEWS: number = (reviews as { breakdown: Record<string, number> }).breakdown["5"] ?? 0;
