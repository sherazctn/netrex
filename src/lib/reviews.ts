import fiverr from "@/data/fiverrReviews.json";
import google from "@/data/googleReviews.json";
import clutch from "@/data/clutchReviews.json";

export type ReviewSource = "fiverr" | "google" | "clutch";

export interface Review {
  id: string;
  source: ReviewSource;
  user: string;
  country?: string;
  countryCode?: string;
  rating: number;
  date: string;
  repeatClient?: boolean;
  text: string;
  /** Reviewer's job title and company (Clutch). */
  role?: string;
  /** Project name (Clutch). */
  project?: string;
  /** Clutch's own write-up of the project. */
  summary?: string;
  /** NETREX office the review was left for (Google). */
  location?: string;
  translatedFrom?: string;
}

type Raw = Omit<Review, "source">;

const fiverrData = fiverr as { rating: number; reviewCount: number; breakdown: Record<string, number>; reviews: Raw[] };
const googleData = google as { profiles: { name: string; rating: number; reviewCount: number }[]; reviews: Raw[] };
const clutchData = clutch as { rating: number; reviewCount: number; reviews: Raw[] };

export const SOURCE_LABEL: Record<ReviewSource, string> = {
  fiverr: "Fiverr",
  google: "Google",
  clutch: "Clutch",
};

/** Reviews too short to be useful on the site (e.g. "Good") are stored but not shown. */
const MIN_TEXT = 15;

/** Every five-star review from Fiverr, Google and Clutch, newest first. */
export const ALL_REVIEWS: Review[] = [
  ...fiverrData.reviews.map((r) => ({ ...r, source: "fiverr" as const })),
  ...googleData.reviews.map((r) => ({ ...r, source: "google" as const })),
  ...clutchData.reviews.map((r) => ({ ...r, source: "clutch" as const })),
]
  .filter((r) => r.rating === 5 && r.text.trim().length >= MIN_TEXT)
  .sort((a, b) => b.date.localeCompare(a.date));

/**
 * The most recent reviews for the home page, making sure Google and Clutch are represented
 * (their newest reviews are included even when Fiverr reviews are more recent).
 */
export function recentReviews(count: number, perOtherSource = 2): Review[] {
  const others = (["google", "clutch"] as const).flatMap((s) =>
    ALL_REVIEWS.filter((r) => r.source === s).slice(0, perOtherSource),
  );
  const rest = ALL_REVIEWS.filter((r) => !others.includes(r)).slice(0, Math.max(0, count - others.length));
  return [...rest, ...others].sort((a, b) => b.date.localeCompare(a.date));
}

export const REVIEW_TOTALS = {
  fiverr: { rating: fiverrData.rating, count: fiverrData.reviewCount, fiveStar: fiverrData.breakdown["5"] ?? 0, breakdown: fiverrData.breakdown },
  google: {
    count: googleData.profiles.reduce((n, p) => n + p.reviewCount, 0),
    profiles: googleData.profiles,
  },
  clutch: { rating: clutchData.rating, count: clutchData.reviewCount },
};

/** "US" -> 🇺🇸 */
export function flagEmoji(code?: string) {
  if (!code) return "";
  return code
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

export function monthYear(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}
