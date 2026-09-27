// Merge newly collected Fiverr reviews into src/data/fiverrReviews.json without duplicates.
//
// Usage (used by the monthly update):
//   node scripts/merge-fiverr-reviews.mjs new-reviews.json
//
// new-reviews.json:
//   {
//     "rating": 4.9, "reviewCount": 312,
//     "breakdown": { "5": 299, "4": 8, "3": 3, "2": 0, "1": 2 },
//     "reviews": [
//       { "user": "name", "country": "United States", "countryCode": "US", "rating": 5,
//         "relative": "2 weeks ago", "repeatClient": false, "text": "Full review text" }
//     ]
//   }
//
// Rules: only 5-star reviews are kept; a review's id is a hash of the username and the start
// of its text, so the same review is never added twice; newest first; at most MAX_KEEP kept.

import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const FILE = new URL("../src/data/fiverrReviews.json", import.meta.url);
const MAX_KEEP = 12;

const normalise = (t) => String(t || "").replace(/\s*See less\s*$/i, "").trim();
const idFor = (user, text) =>
  createHash("sha1").update(`${user}|${normalise(text).split(/\s+/).join(" ").slice(0, 80)}`).digest("hex").slice(0, 12);

function dateFromRelative(rel, today = new Date()) {
  const m = String(rel || "").match(/(\d+)\s+(day|week|month|year)s?\s+ago/i);
  const d = new Date(today);
  if (!m) return d.toISOString().slice(0, 10);
  const n = Number(m[1]);
  const days = { day: 1, week: 7, month: 30, year: 365 }[m[2].toLowerCase()];
  d.setDate(d.getDate() - n * days);
  return d.toISOString().slice(0, 10);
}

const input = process.argv[2];
if (!input) {
  console.error("Usage: node scripts/merge-fiverr-reviews.mjs new-reviews.json");
  process.exit(1);
}

const current = JSON.parse(await readFile(FILE, "utf8"));
const incoming = JSON.parse(await readFile(input, "utf8"));
const known = new Set(current.reviews.map((r) => r.id));

const added = [];
for (const r of incoming.reviews || []) {
  if (Number(r.rating) !== 5 || !r.user || !normalise(r.text)) continue;
  const id = idFor(r.user, r.text);
  if (known.has(id)) continue;
  known.add(id);
  added.push({
    id,
    user: r.user,
    country: r.country,
    countryCode: String(r.countryCode || "").toUpperCase(),
    rating: 5,
    date: r.date || dateFromRelative(r.relative),
    repeatClient: !!r.repeatClient,
    text: normalise(r.text),
  });
}

current.reviews = [...added, ...current.reviews]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, MAX_KEEP);
if (incoming.rating) current.rating = incoming.rating;
if (incoming.reviewCount) current.reviewCount = incoming.reviewCount;
if (incoming.breakdown) current.breakdown = incoming.breakdown;
current.fetchedAt = new Date().toISOString().slice(0, 10);

await writeFile(FILE, JSON.stringify(current, null, 2) + "\n");
console.log(`Added ${added.length} new 5-star review(s); ${current.reviews.length} kept.`);
