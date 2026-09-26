// Build-time pre-rendering for the NETREX site.
//
// Runs after `vite build` (in the GitHub Actions deploy only; Lovable's own builds are untouched).
// It serves dist/ locally, opens every URL from public/sitemap.xml in headless Chromium, scrolls
// the page so animated counters and lazy sections finish, and saves the rendered HTML as
// dist/<path>.html. Search engines and AI crawlers that do not run JavaScript then get the full
// page content and the page's own title, description, canonical and schema. The untouched app
// shell is kept as dist/spa.html for routes that are not pre-rendered (see public/.htaccess).
//
// If anything fails, the step logs it and exits 0 so a deploy is never blocked; affected pages
// simply fall back to the normal client-side app.

import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, dirname } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const PORT = 4179;
const ORIGIN = "https://www.netrexinc.com";

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon", ".xml": "application/xml",
  ".txt": "text/plain", ".woff2": "font/woff2", ".mp4": "video/mp4",
};

function startServer() {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const file = join(DIST, path);
    try {
      if (extname(path)) {
        const body = await readFile(file);
        res.writeHead(200, { "content-type": TYPES[extname(path)] || "application/octet-stream" });
        return res.end(body);
      }
    } catch { /* fall through to the app shell */ }
    const shell = await readFile(join(DIST, "spa.html"));
    res.writeHead(200, { "content-type": TYPES[".html"] });
    res.end(shell);
  });
  return new Promise((resolve) => server.listen(PORT, "127.0.0.1", () => resolve(server)));
}

async function main() {
  const sitemap = await readFile(join(DIST, "sitemap.xml"), "utf8");
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname.replace(/\/+$/, "") || "/");

  await copyFile(join(DIST, "index.html"), join(DIST, "spa.html"));
  const server = await startServer();

  const { chromium } = await import("playwright");
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 }, locale: "en-US" });
  // Keep the default English UI regardless of the build machine's locale.
  await context.addInitScript(() => {
    try { localStorage.setItem("netrex-language", "en"); } catch { /* ignore */ }
  });

  // Start from the sitemap, then follow internal links so new pages and blog posts are
  // pre-rendered (and added to the sitemap) without anyone editing sitemap.xml by hand.
  const queue = [...new Set(["/", ...paths])];
  const seen = new Set(queue);
  const rendered = [];
  const fallback = [];
  const skipped = [];
  const failed = [];
  const isPagePath = (p) =>
    p.startsWith("/") && !p.startsWith("//") && !p.startsWith("/admin") && !/\.[a-z0-9]{2,5}$/i.test(p);

  while (queue.length) {
    const path = queue.shift();
    const page = await context.newPage();
    try {
      await page.goto(`http://127.0.0.1:${PORT}${path}`, { waitUntil: "networkidle", timeout: 45000 });
      // Scroll through the page so in-view animations and number counters run to their final values.
      await page.evaluate(async () => {
        const step = Math.max(400, Math.floor(window.innerHeight * 0.8));
        for (let y = 0; y <= document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(2600);

      const check = await page.evaluate(() => ({
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
        noindex: /noindex/i.test(document.querySelector('meta[name="robots"]')?.getAttribute("content") || ""),
        h1: document.querySelectorAll("h1").length,
        text: (document.querySelector("main") || document.body).innerText.trim().length,
        links: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
      }));

      for (const href of check.links) {
        if (!href) continue;
        const clean = href.split("#")[0].split("?")[0].replace(/\/+$/, "") || "/";
        if (isPagePath(clean) && !seen.has(clean)) {
          seen.add(clean);
          queue.push(clean);
        }
      }

      // Not-found and other noindex pages are left to the app (and the 404 handler).
      if (check.noindex) {
        skipped.push(path);
        continue;
      }

      const out = path === "/" ? join(DIST, "index.html") : join(DIST, `${path.slice(1)}.html`);
      await mkdir(dirname(out), { recursive: true });
      const expected = ORIGIN + (path === "/" ? "/" : path);
      if (check.canonical !== expected || check.h1 === 0 || check.text < 200) {
        // Keep the page reachable with a 200 status by serving the app shell for it.
        if (path !== "/") await copyFile(join(DIST, "spa.html"), out);
        fallback.push(path);
        failed.push(`${path}: render check failed (canonical=${check.canonical}, h1=${check.h1}, text=${check.text})`);
        continue;
      }

      let html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
      // Replace the local build-server origin (e.g. in share links built from window.location) with the live one.
      html = html
        .split(`http://127.0.0.1:${PORT}`).join(ORIGIN)
        .split(encodeURIComponent(`http://127.0.0.1:${PORT}`)).join(encodeURIComponent(ORIGIN));
      await writeFile(out, html);
      rendered.push(path);
    } catch (err) {
      if (path !== "/") {
        const out = join(DIST, `${path.slice(1)}.html`);
        await mkdir(dirname(out), { recursive: true });
        await copyFile(join(DIST, "spa.html"), out).catch(() => {});
        fallback.push(path);
      }
      failed.push(`${path}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  // Rebuild sitemap.xml from every real page found, as long as the crawl looks healthy.
  const pages = [...rendered, ...fallback].sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
  if (pages.length >= paths.length * 0.9) {
    const today = new Date().toISOString().slice(0, 10);
    const priority = (p) =>
      p === "/" ? "1.0"
      : ["/services", "/contact", "/portfolio", "/blog", "/about"].includes(p) || p.startsWith("/services/") ? "0.9"
      : p.startsWith("/blog/") || p.startsWith("/tools/") || p === "/industries" ? "0.7"
      : p.startsWith("/policies") || ["/legal", "/privacy", "/terms"].includes(p) ? "0.3"
      : "0.6";
    const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
      .concat(pages.map((p) => `  <url>\n    <loc>${ORIGIN}${p === "/" ? "/" : p}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(p)}</priority>\n  </url>`))
      .concat(["</urlset>", ""]).join("\n");
    await writeFile(join(DIST, "sitemap.xml"), xml);
    console.log(`sitemap.xml written with ${pages.length} pages.`);
  }

  const added = pages.filter((p) => !paths.includes(p));
  console.log(`Pre-rendered ${rendered.length} pages; ${fallback.length} served by the app; ${skipped.length} noindex skipped.`);
  if (added.length) console.log("New pages found and added:\n  " + added.join("\n  "));
  if (skipped.length) console.log("Linked but not found / noindex:\n  " + skipped.join("\n  "));
  if (failed.length) console.log("Problems:\n  " + failed.join("\n  "));
}

main().catch((err) => {
  console.log("Pre-rendering skipped:", err.message);
  process.exit(0);
});
