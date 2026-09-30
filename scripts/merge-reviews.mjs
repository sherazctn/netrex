// Merge newly collected reviews into the site's review data without duplicates.
//
// Usage (used by the monthly update):
//   node scripts/merge-reviews.mjs fiverr new-fiverr.json
//   node scripts/merge-reviews.mjs google new-google.json
//   node scripts/merge-reviews.mjs clutch new-clutch.json
//
// Input file:
//   {
//     "rating": 4.9, "reviewCount": 313,                       // optional totals for the source
//     "breakdown": { "5": 299, "4": 9, "3": 3, "2": 0, "1": 2 }, // optional (Fiverr)
//     "reviews": [
//       { "user": "name", "country": "United States", "countryCode": "US", "rating": 5,
//         "relative": "2 weeks ago" | "date": "2026-09-01", "repeatClient": false,
//         "text": "Full review text",
//         // optional: "role": "Creative Director, Company", "project": "...", "summary": "...",
//         //           "location": "Dubai", "translatedFrom": "French" }
//     ]
//   }
//
// Rules: only 5-star reviews with text are kept; a review's id is a hash of the source, username
// and the start of its text, so the same review is never added twice; newest first; at most
// MAX_KEEP per source.

import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const FILES = {
  fiverr: "../src/data/fiverrReviews.json",
  google: "../src/data/googleReviews.json",
  clutch: "../src/data/clutchReviews.json",
};
const MAX_KEEP = 40;

const [source, input] = process.argv.slice(2);
if (!FILES[source] || !input) {
  console.error("Usage: node scripts/merge-reviews.mjs <fiverr|google|clutch> new-reviews.json");
  process.exit(1);
}
const FILE = new URL(FILES[source], import.meta.url);

const normalise = (t) => String(t || "").replace(/\s*(See less|… More)\s*$/, "").replace(/\s*…$/, "").trim();
// Fiverr ids keep their original formula so reviews stored earlier still match.
const idFor = (user, text) => {
  const key = `${user}|${normalise(text).split(/\s+/).join(" ").slice(0, 80)}`;
  return createHash("sha1").update(source === "fiverr" ? key : `${source}|${key}`).digest("hex").slice(0, 12);
};

function dateFromRelative(rel, today = new Date()) {
  const s = String(rel || "").toLowerCase();
  const d = new Date(today);
  const m = s.match(/(\d+|a|an)\s+(day|week|month|year)s?\s+ago/);
  if (!m) return d.toISOString().slice(0, 10);
  const n = /^\d+$/.test(m[1]) ? Number(m[1]) : 1;
  const days = { day: 1, week: 7, month: 30, year: 365 }[m[2]];
  d.setDate(d.getDate() - n * days);
  return d.toISOString().slice(0, 10);
}

const current = JSON.parse(await readFile(FILE, "utf8"));
const incoming = JSON.parse(await readFile(input, "utf8"));
const known = new Set(current.reviews.map((r) => r.id));

const added = [];
for (const r of incoming.reviews || []) {
  const text = normalise(r.text);
  if (Number(r.rating) !== 5 || !r.user || !text) continue;
  const id = idFor(r.user, text);
  if (known.has(id)) continue;
  known.add(id);
  const review = {
    id,
    user: r.user,
    rating: 5,
    date: r.date || dateFromRelative(r.relative),
    text,
  };
  for (const k of ["country", "countryCode", "role", "project", "summary", "location", "translatedFrom"]) {
    if (r[k]) review[k] = k === "countryCode" ? String(r[k]).toUpperCase() : r[k];
  }
  if (r.repeatClient) review.repeatClient = true;
  added.push(review);
}

current.reviews = [...added, ...current.reviews]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, MAX_KEEP);
for (const k of ["rating", "reviewCount", "breakdown"]) if (incoming[k] != null) current[k] = incoming[k];
current.fetchedAt = new Date().toISOString().slice(0, 10);

await writeFile(FILE, JSON.stringify(current, null, 2) + "\n");
console.log(`${source}: added ${added.length} new 5-star review(s); ${current.reviews.length} kept.`);
