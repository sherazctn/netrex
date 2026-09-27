// Tells IndexNow search engines (Bing, which powers ChatGPT search and Copilot, plus Yandex,
// Seznam, Naver and others) which pages changed, right after each deploy.
// The key below is public by design: it is also served at https://www.netrexinc.com/925edbce31bc019013a8fcf9b6e40231.txt
// so the engines can confirm the site owns it.
//
// Push deploys and manual runs submit every URL in the sitemap; the daily scheduled
// refresh (Instagram posts) submits only the homepage.

import { readFile } from "node:fs/promises";

const KEY = "925edbce31bc019013a8fcf9b6e40231";
const HOST = "www.netrexinc.com";

async function main() {
  const sitemap = await readFile(new URL("../dist/sitemap.xml", import.meta.url), "utf8");
  let urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (process.env.GITHUB_EVENT_NAME === "schedule") urls = ["https://www.netrexinc.com/"];
  if (!urls.length) return console.log("IndexNow: no URLs to submit.");

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
  });
  console.log(`IndexNow: submitted ${urls.length} URLs, response ${res.status}`);
}

main().catch((err) => {
  console.log("IndexNow: skipped,", err?.message || "unknown error");
  process.exit(0);
});
