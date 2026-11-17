# Project Architecture Rules

- Keep solution catalog content in `src/data/solutions.ts` and render listing/detail pages from it so product information stays consistent.
- Extend shared compliance content through the policy lookup helper so every detail page receives the same jurisdiction and review safeguards.
- Keep future blog publication-date gating in shared blog-data utilities used by listings and article pages, so scheduled posts do not appear early.
