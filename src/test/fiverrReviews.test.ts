import { describe, expect, it } from "vitest";
import fiverr from "@/data/fiverrReviews.json";

describe("public Fiverr review snapshot", () => {
  it("retains Fiverr's public 4.9 rating and 342-review total checked November 14, 2026", () => {
    expect(fiverr.rating).toBe(4.9);
    expect(fiverr.reviewCount).toBe(342);
    expect(fiverr.fetchedAt).toBe("2026-11-14");
  });

  it("marks all five newly collected public excerpts instead of presenting them as full reviews", () => {
    const recent = fiverr.reviews.filter((review) => review.id.startsWith("fiverr-live-2026-11-"));

    expect(recent).toHaveLength(5);
    expect(recent.every((review) => review.rating === 5 && review.excerpt === true)).toBe(true);
    expect(recent.map((review) => review.user)).toEqual([
      "aalhamdani531",
      "tee_onifade",
      "steverogger1",
      "lr_coaching",
      "flammiaw",
    ]);
  });
});