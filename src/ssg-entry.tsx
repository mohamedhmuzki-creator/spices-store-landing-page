/**
 * Build-time entry for static pre-rendering (SSG).
 *
 * Bundled by scripts/ssg.mjs with esbuild (platform=node) and executed in Node,
 * where `window`/`document` don't exist — every component is written defensively
 * (`typeof window === "undefined"` guards), so `renderToString` produces the full
 * markup for a given route. The result is baked into index.html, so the initial
 * raw HTML already contains all text, headings and the H1 before JS runs.
 */
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { SEO, type Page } from "./router";

export function renderPage(page: Page): string {
  return renderToString(createElement(App, { initialPage: page }));
}

export { SEO };
export type { Page };
