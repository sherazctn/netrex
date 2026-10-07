// Fetches the latest Instagram posts at deploy time and bakes them into the site.
//
// Runs in the GitHub Actions deploy after `vite build` and before pre-rendering. It reads the
// token from the INSTAGRAM_ACCESS_TOKEN environment variable, which the workflow fills from the
// repository secret of the same name. The token is never written to any file or printed.
//
// Output (all inside dist/, so it ships with the site):
//   dist/instagram/feed.json      { updatedAt, items: [{ id, caption, permalink, timestamp, mediaType, image }] }
//   dist/instagram/<id>.jpg       the post image (or video cover), downloaded so it never expires
//
// If the token is missing or Instagram fails, nothing is written and the deploy carries on;
// the homepage then falls back to its placeholder images.

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const OUT = join(DIST, "instagram");
const LIMIT = 16;
const API = process.env.INSTAGRAM_API_BASE || "https://graph.instagram.com";

async function main() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    console.log("Instagram: no INSTAGRAM_ACCESS_TOKEN secret set, skipping (placeholders will show).");
    return;
  }

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const url = `${API}/me/media?fields=${fields}&limit=${LIMIT}&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url);
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = body?.error || {};
    // Only log Instagram's error type and message, never the request URL (it contains the token).
    console.log(`Instagram: API error ${res.status} ${err.type || ""} ${err.message || ""}`.trim());
    if (err.code === 190) console.log("Instagram: the token is invalid or expired. Generate a new one and update the repository secret.");
    return;
  }

  await mkdir(OUT, { recursive: true });
  const items = [];
  for (const m of (body.data || []).slice(0, LIMIT)) {
    const src = m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url;
    if (!src || !m.permalink) continue;
    try {
      const img = await fetch(src);
      if (!img.ok) continue;
      const file = `${String(m.id).replace(/[^0-9A-Za-z_-]/g, "")}.jpg`;
      await writeFile(join(OUT, file), Buffer.from(await img.arrayBuffer()));
      items.push({
        id: String(m.id),
        caption: m.caption || "",
        permalink: m.permalink,
        timestamp: m.timestamp,
        mediaType: m.media_type,
        image: `/instagram/${file}`,
      });
    } catch {
      /* skip this post */
    }
  }

  if (!items.length) {
    console.log("Instagram: no posts could be downloaded, keeping placeholders.");
    return;
  }
  await writeFile(join(OUT, "feed.json"), JSON.stringify({ updatedAt: new Date().toISOString(), items }));
  console.log(`Instagram: saved ${items.length} latest posts.`);
}

main().catch((err) => {
  console.log("Instagram: skipped,", err?.message || "unknown error");
  process.exit(0);
});
