// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver and others) which URLs exist or changed, so they
// crawl them without waiting. Google does not use IndexNow; use Search Console for Google.
//
// Run it AFTER a deploy, because the engines fetch the key file from the live site to verify ownership:
//   npm run indexnow                    submits every URL in the live sitemap
//   npm run indexnow -- --dry           prints what would be sent and sends nothing
//   npm run indexnow -- <url> <url>     submits only those URLs
//
// It is deliberately not part of "npm run build": a local or preview build must not ping search engines.
const HOST = "m-umar.vercel.app";
const KEY = "1154ec9514b1ed68d5eceac354ad042c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const explicit = args.filter((a) => a.startsWith("https://"));

const sitemapUrls = async () => {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not read the live sitemap (HTTP ${res.status}).`);
  return [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
};

const urls = (explicit.length ? explicit : await sitemapUrls()).filter((u) => new URL(u).host === HOST);
if (urls.length === 0) {
  console.error("No URLs to submit.");
  process.exit(1);
}
console.log(`${dry ? "[dry run] " : ""}Submitting ${urls.length} URLs for ${HOST}`);
if (dry) {
  urls.forEach((u) => console.log("  " + u));
  process.exit(0);
}

const keyCheck = await fetch(KEY_LOCATION);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  console.error(`Key file not live at ${KEY_LOCATION} (HTTP ${keyCheck.status}). Deploy first, then run again.`);
  process.exit(1);
}
const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
});
// 200 = received, 202 = received and key validation pending. Anything else is a problem.
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
