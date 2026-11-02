export type Page = "home" | "products" | "contact";

/** URL path for each page of the site. */
export const pathForPage = (page: Page) =>
  page === "products" ? "/products" : page === "contact" ? "/contact" : "/";

/** Work out which page a URL path belongs to. */
export const pageForPath = (path: string): Page => {
  const clean = path.replace(/index\.html$/i, "").replace(/\/+$/, "").toLowerCase();
  if (clean.endsWith("/products")) return "products";
  if (clean.endsWith("/contact")) return "contact";
  return "home";
};

/** On-page SEO: title tag + meta description for each URL. */
export const SEO: Record<Page, { title: string; description: string }> = {
  home: {
    title: "Wholesale Spices Sri Lanka | Mr. Traders Mawathagama",
    description:
      "Leading wholesale spice supplier & buyer in Mawathagama, Kurunegala. Mr. Traders buys & sells bulk Ceylon cinnamon, black pepper, cardamom & local produce.",
  },
  products: {
    title: "Wholesale Ceylon Spices & Bulk Products | Mr. Traders",
    description:
      "Browse our full catalog of 19+ wholesale spices and produce at Mr. Traders in Sri Lanka. High-quality bulk Ceylon cinnamon, black pepper, cardamom, and cloves.",
  },
  contact: {
    title: "Contact M.R Traders — Wholesale Spice Buyer & Supplier, Mawathagama",
    description:
      "Call or WhatsApp M.R Traders on 078 756 9596. Visit 96, Kandy Road, Mawathagama, Sri Lanka. Open Tuesday–Sunday, 8.00 AM–6.00 PM. We buy from local farmers and supply spices in bulk.",
  },
};

export const titleForPage = (page: Page) => SEO[page].title;
export const descriptionForPage = (page: Page) => SEO[page].description;

/** Current page from the browser URL (safe during SSR / file:// previews). */
export const currentPage = (): Page => {
  if (typeof window === "undefined") return "home";
  return pageForPath(window.location.pathname);
};

/** Push a new URL without reloading. Silently ignored if the History API is unavailable. */
export const pushPath = (page: Page, anchor?: string) => {
  if (typeof window === "undefined") return;
  const url = `${pathForPage(page)}${anchor ? `#${anchor}` : ""}`;
  const current = `${window.location.pathname}${window.location.hash}`;
  if (current === url) return;
  try {
    window.history.pushState({ page }, "", url);
  } catch {
    /* file:// or sandboxed preview — keep in-memory navigation only */
  }
};

/** Create or update a <meta> / <link> tag in <head>. */
const setTag = (
  selector: string,
  create: () => HTMLElement,
  attr: string,
  value: string
) => {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

/** Apply title, description, canonical and social tags for the active page. */
export const applySeo = (page: Page) => {
  if (typeof document === "undefined") return;
  const { title, description } = SEO[page];
  const url = `${window.location.origin}${pathForPage(page)}`;

  document.title = title;

  setTag(
    'meta[name="description"]',
    () => Object.assign(document.createElement("meta"), { name: "description" }),
    "content",
    description
  );

  setTag(
    'link[rel="canonical"]',
    () => Object.assign(document.createElement("link"), { rel: "canonical" }),
    "href",
    url
  );

  const og: [string, string][] = [
    ["og:title", title],
    ["og:description", description],
    ["og:url", url],
    ["og:type", "website"],
    ["og:site_name", "M.R Traders"],
  ];
  og.forEach(([property, content]) =>
    setTag(
      `meta[property="${property}"]`,
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", property);
        return m;
      },
      "content",
      content
    )
  );

  const twitter: [string, string][] = [
    ["twitter:card", "summary_large_image"],
    ["twitter:title", title],
    ["twitter:description", description],
  ];
  twitter.forEach(([name, content]) =>
    setTag(
      `meta[name="${name}"]`,
      () => Object.assign(document.createElement("meta"), { name }),
      "content",
      content
    )
  );
};
