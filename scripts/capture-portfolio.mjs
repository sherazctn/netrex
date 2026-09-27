// Capture sharp, full-page screenshots of live client websites for the portfolio.
// Runs in GitHub Actions (.github/workflows/portfolio-shots.yml), which has open internet access.
//
// For every entry in scripts/portfolio-shots.json it writes:
//   public/portfolio/hd/<slug>.webp       900px wide  (portfolio cards and service pages)
//   public/portfolio/hd/<slug>-full.webp  1440px wide (lightbox preview)
// Pages are captured at a 1440px desktop viewport with device scale 1, after scrolling the whole
// page so lazy-loaded images and animations have rendered. Cookie banners are hidden with CSS
// (nothing is clicked or accepted).

import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const list = JSON.parse(await readFile(new URL("./portfolio-shots.json", import.meta.url), "utf8"));
const OUT = new URL("../public/portfolio/hd/", import.meta.url);
const MAX_HEIGHT = 9000; // keep files reasonable for very long pages
await mkdir(OUT, { recursive: true });

const HIDE_BANNERS = `
  [id*="cookie" i], [class*="cookie" i], [id*="consent" i], [class*="consent" i],
  [id*="gdpr" i], [class*="gdpr" i], #onetrust-banner-sdk, .cc-window, [data-hook="consent-banner-root"],
  [id*="chat-widget" i], iframe[title*="chat" i] { display: none !important; }
`;

const browser = await chromium.launch();
const results = [];

for (const item of list) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  try {
    await page.goto(item.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {});
    await page.addStyleTag({ content: HIDE_BANNERS }).catch(() => {});

    // Scroll through the page to trigger lazy loading and scroll animations.
    await page.evaluate(async () => {
      const step = 600;
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 250));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(2500);

    const png = await page.screenshot({ fullPage: true, type: "png" });
    const meta = await sharp(png).metadata();
    const height = Math.min(meta.height, MAX_HEIGHT);
    const base = sharp(png).extract({ left: 0, top: 0, width: meta.width, height });

    await base.clone().resize({ width: 1440 }).webp({ quality: 80 }).toFile(new URL(`${item.slug}-full.webp`, OUT).pathname);
    await base.clone().resize({ width: 900 }).webp({ quality: 78 }).toFile(new URL(`${item.slug}.webp`, OUT).pathname);
    results.push({ ...item, ok: true, width: meta.width, height });
    console.log(`ok   ${item.slug} ${meta.width}x${height}`);
  } catch (err) {
    results.push({ ...item, ok: false, error: String(err).slice(0, 200) });
    console.log(`fail ${item.slug}: ${String(err).slice(0, 200)}`);
  } finally {
    await page.close();
  }
}

await browser.close();
await writeFile(new URL("results.json", OUT).pathname, JSON.stringify(results, null, 2) + "\n");
