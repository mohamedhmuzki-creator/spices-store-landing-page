/**
 * Static Site Generation (pre-render) script.
 *
 * Usage:
 *   node scripts/ssg.mjs            # bake home HTML into index.html (source)
 *   node scripts/ssg.mjs --dist     # additionally write dist/products/index.html
 *                                   # and dist/contact/index.html (run after build)
 *
 * How it works:
 *  1. esbuild bundles src/ssg-entry.tsx for Node (no config changes needed).
 *  2. renderToString produces full HTML per route (home / products / contact).
 *  3. The home markup is injected into the `<div id="root">` of index.html, so
 *     every `vite build` emits dist/index.html with all content already present.
 *  4. With --dist, per-route HTML files are written into dist/ as well.
 *
 * The app then hydrates (hydrateRoot in main.tsx) — markup stays, JS attaches.
 */
import { buildSync } from "esbuild";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = path.join(root, "node_modules", ".cache");
fs.mkdirSync(cacheDir, { recursive: true });
const bundle = path.join(cacheDir, "ssg-entry.cjs");

buildSync({
  entryPoints: [path.join(root, "src", "ssg-entry.tsx")],
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  outfile: bundle,
  define: { "process.env.NODE_ENV": '"production"' },
  logLevel: "silent",
});

const require = createRequire(import.meta.url);
const { renderPage, SEO } = require(bundle);

/** Replace whatever is inside <div id="root">...</div> (up to the next <script). */
const ROOT_RE = /<div id="root">[\s\S]*?(?=\s*<script)/;
const setRoot = (html, markup) =>
  html.replace(ROOT_RE, `<div id="root">${markup}</div>`);

const setTitle = (html, title) =>
  html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

const setDescription = (html, desc) =>
  html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${desc.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}$2`
  );

/* ---- 1. Bake the home page into the source index.html (idempotent) ---- */
const indexPath = path.join(root, "index.html");
const homeHtml = renderPage("home");
let tpl = fs.readFileSync(indexPath, "utf8");
if (!ROOT_RE.test(tpl)) throw new Error("could not find <div id=\"root\"> in index.html");
tpl = setRoot(tpl, homeHtml);
fs.writeFileSync(indexPath, tpl);
console.log(`ssg: baked home page (${homeHtml.length} chars) into index.html`);

/* ---- 2. Optionally emit per-route HTML into dist/ ---- */
if (process.argv.includes("--dist")) {
  const distIndex = path.join(root, "dist", "index.html");
  if (!fs.existsSync(distIndex)) {
    console.error("ssg: dist/index.html not found — run `npm run build` first");
    process.exit(1);
  }
  const built = fs.readFileSync(distIndex, "utf8");
  for (const page of ["products", "contact"]) {
    let h = setRoot(built, renderPage(page));
    h = setTitle(h, SEO[page].title);
    h = setDescription(h, SEO[page].description);
    const dir = path.join(root, "dist", page);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), h);
    console.log(`ssg: wrote dist/${page}/index.html`);
  }
}
