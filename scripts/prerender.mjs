// Runs after `vite build` and `vite build --ssr`: bakes every route into static HTML (rendered app,
// page-specific head tags, JSON-LD) plus the crawler files (sitemap, llms.txt), so bots and AI
// crawlers get real content without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const ssr = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("prerender: #root placeholder not found");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const swap = (html, re, replacement, label) => {
  if (!re.test(html)) throw new Error(`prerender: ${label} not found in template`);
  return html.replace(re, replacement);
};

const warnings = [];
for (const p of ssr.routePaths) {
  const meta = ssr.metaFor(p);
  if (!meta) throw new Error(`prerender: no metadata for ${p}`);
  if (meta.title.length > 60) warnings.push(`${p}: title is ${meta.title.length} chars`);
  if (meta.description.length > 160) warnings.push(`${p}: description is ${meta.description.length} chars`);

  let html = template;
  html = swap(html, /<title>.*?<\/title>/s, `<title>${esc(meta.title)}</title>`, "title");
  html = swap(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(meta.description)}" />`, "description");
  html = swap(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${meta.canonical}" />`, "canonical");
  html = swap(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(meta.title)}" />`, "og:title");
  html = swap(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(meta.description)}" />`, "og:description");
  html = swap(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${meta.canonical}" />`, "og:url");
  html = swap(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(meta.title)}" />`, "twitter:title");
  html = swap(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(meta.description)}" />`, "twitter:description");

  const jsonLd = JSON.stringify(ssr.buildJsonLd(p)).replace(/</g, "\\u003c");
  html = html
    .replace('<div id="root"></div>', () => `<div id="root">${ssr.render(p)}</div>`)
    .replace("</head>", () => `    <script type="application/ld+json">${jsonLd}</script>\n  </head>`);

  const out = p === "/" ? path.join(dist, "index.html") : path.join(dist, p.slice(1), "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

fs.writeFileSync(path.join(dist, "sitemap.xml"), ssr.buildSitemap());
fs.writeFileSync(path.join(dist, "llms.txt"), ssr.buildLlmsTxt());
fs.writeFileSync(path.join(dist, "llms-full.txt"), ssr.buildLlmsFullTxt());

console.log(`prerender: ${ssr.routePaths.length} pages (${ssr.routePaths.join(", ")}), sitemap.xml, llms.txt, llms-full.txt`);
if (warnings.length) console.warn("prerender warnings:\n  " + warnings.join("\n  "));
