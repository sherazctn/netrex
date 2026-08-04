import type { SyntheticEvent } from "react";

/**
 * Brand logo resolution.
 *
 * The Clearbit Logo API (logo.clearbit.com) was retired and now fails to resolve,
 * which showed up as broken brand logos on the published site. We resolve logos
 * through a chain of live providers instead:
 *   1. DuckDuckGo icon service (fast, permissive CORS, stable)
 *   2. Google favicon service
 *   3. Local placeholder
 */
export const getBrandLogo = (domain: string) => `https://icons.duckduckgo.com/ip3/${domain}.ico`;

export const getBrandLogoFallback = (domain: string) =>
  `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

/** Chained <img onError> handler: primary -> fallback -> placeholder. */
export const handleBrandLogoError = (event: SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  const fallback = image.dataset.fallback;

  if (fallback && !image.src.includes("s2/favicons")) {
    image.src = fallback;
    return;
  }

  if (image.src.endsWith("/placeholder.svg")) return;
  image.src = "/placeholder.svg";
};
