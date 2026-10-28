// Runs after `vite build` and `vite build --ssr`: bakes the rendered app, JSON-LD and
// crawler files (sitemap, llms.txt) into dist so bots get real content without running JS.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const ssr = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

const indexPath = path.join(dist, "index.html");
let html = fs.readFileSync(indexPath, "utf8");

if (!html.includes('<div id="root"></div>')) throw new Error("prerender: #root placeholder not found");

const jsonLd = JSON.stringify(ssr.buildJsonLd()).replace(/</g, "\\u003c");
html = html
  .replace('<div id="root"></div>', `<div id="root">${ssr.render()}</div>`)
  .replace("</head>", `    <script type="application/ld+json">${jsonLd}</script>\n  </head>`);
fs.writeFileSync(indexPath, html);

fs.writeFileSync(path.join(dist, "sitemap.xml"), ssr.buildSitemap());
fs.writeFileSync(path.join(dist, "llms.txt"), ssr.buildLlmsTxt());
fs.writeFileSync(path.join(dist, "llms-full.txt"), ssr.buildLlmsFullTxt());

console.log(`prerender: index.html ${(html.length / 1024).toFixed(1)} kB, sitemap.xml, llms.txt, llms-full.txt written`);
