import { describe, expect, it } from "vitest";
import { getPostByIdOrSlug, getPublishedBlogPosts, getSortedBlogPosts } from "@/data/blogData";

describe("scheduled blog publication dates", () => {
  it("keeps the five November 20 to December 5 articles hidden before publication", () => {
    const beforeSchedule = new Date("2026-11-14T23:59:00Z");
    const scheduledSlugs = [
      "local-seo-multi-location-business-guide",
      "wix-seo-checklist-step-by-step",
      "ai-search-visibility-audit-business-guide",
      "ecommerce-website-launch-checklist",
      "small-business-website-maintenance-checklist",
    ];

    for (const slug of scheduledSlugs) {
      expect(getPostByIdOrSlug(slug, beforeSchedule)).toBeUndefined();
      expect(getSortedBlogPosts(beforeSchedule).some((post) => post.slug === slug)).toBe(false);
    }
  });

  it("publishes the scheduled article on its stated date", () => {
    expect(
      getPostByIdOrSlug("local-seo-multi-location-business-guide", new Date("2026-11-20T00:00:00Z"))?.date,
    ).toBe("Nov 20, 2026");
    expect(
      getPostByIdOrSlug("small-business-website-maintenance-checklist", new Date("2026-12-05T00:00:00Z"))?.date,
    ).toBe("Dec 5, 2026");
  });

  it("contains five published articles dated October 13 through November 14", () => {
    const slugs = [
      "ecommerce-website-development-cost-budget-planner",
      "shopify-seo-checklist-product-collection-pages",
      "small-business-website-seo-30-day-plan",
      "choose-web-design-agency-questions-contract",
      "website-accessibility-checklist-small-business",
    ];
    const published = getPublishedBlogPosts(new Date("2026-11-14T23:59:00Z"));

    expect(slugs.every((slug) => published.some((post) => post.slug === slug))).toBe(true);
  });
});