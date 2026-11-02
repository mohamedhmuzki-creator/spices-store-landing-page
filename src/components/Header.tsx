import { useState, type MouseEvent } from "react";
import { CONTACT, WA_GENERAL } from "../data/products";
import { pathForPage, type Page } from "../router";
import { ClockIcon, CloseIcon, MenuIcon, Monogram, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export type { Page };

type HeaderProps = {
  page: Page;
  onNavigate: (page: Page, anchor?: string) => void;
};

export default function Header({ page, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const go = (p: Page, anchor?: string) => {
    setOpen(false);
    onNavigate(p, anchor);
  };

  /* let ctrl/cmd/middle click open a real new tab, otherwise route in-page */
  const handle =
    (p: Page, anchor?: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      go(p, anchor);
    };

  const href = (p: Page, anchor?: string) => `${pathForPage(p)}${anchor ? `#${anchor}` : ""}`;

  const linkClass = (active: boolean) =>
    `navlink text-sm font-semibold tracking-wide ${
      active ? "active text-clay" : "text-ink hover:text-clay"
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* utility strip */}
      <div className="bg-espresso text-cream/75 text-[11px] sm:text-xs">
        <div className="max-w-6xl mx-auto px-5 h-8 flex items-center justify-between gap-4">
          <a
            href={CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 truncate hover:text-cream transition-colors"
          >
            <PinIcon className="w-3.5 h-3.5 shrink-0 text-blush" />
            <span className="truncate">{CONTACT.address}</span>
          </a>
          <div className="hidden sm:flex items-center gap-5 shrink-0">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5 text-blush" />
              Tue – Sun · 8.00 AM – 6.00 PM
            </span>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-1.5 hover:text-cream transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-blush" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="bg-ivory/90 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-5 h-16 sm:h-[72px] flex items-center justify-between gap-4">
          <a
            href={href("home")}
            onClick={handle("home")}
            className="flex items-center gap-3 text-left group"
            aria-label="M.R Traders — home"
          >
            <span className="text-espresso transition-transform duration-300 group-hover:-rotate-3">
              <Monogram className="w-10 h-10 sm:w-11 sm:h-11" />
            </span>
            <span className="leading-none">
              <span className="block font-display font-bold text-lg sm:text-xl tracking-tight text-espresso">
                M.R TRADERS
              </span>
              <span className="block mt-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-fawn">
                Wholesale Merchants · Est. 1987
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            <a
              href={href("home")}
              onClick={handle("home")}
              aria-current={page === "home" ? "page" : undefined}
              className={linkClass(page === "home")}
            >
              Home
            </a>
            <a
              href={href("products")}
              onClick={handle("products")}
              aria-current={page === "products" ? "page" : undefined}
              className={linkClass(page === "products")}
            >
              Products
            </a>
            <a
              href={href("home", "contact")}
              onClick={handle("home", "contact")}
              className="navlink text-sm font-semibold tracking-wide text-ink hover:text-clay"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wa text-cream pl-4 pr-5 py-2.5 text-sm font-bold shadow-sm hover:bg-[#178f45] transition-all duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4.5 h-4.5" />
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-espresso"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden border-t border-line bg-cream">
            <div className="px-5 py-4 flex flex-col gap-1">
              <a
                href={href("home")}
                onClick={handle("home")}
                className={`text-left py-2.5 font-display text-xl ${page === "home" ? "text-clay" : "text-ink"}`}
              >
                Home
              </a>
              <a
                href={href("products")}
                onClick={handle("products")}
                className={`text-left py-2.5 font-display text-xl ${page === "products" ? "text-clay" : "text-ink"}`}
              >
                Products
              </a>
              <a
                href={href("home", "contact")}
                onClick={handle("home", "contact")}
                className="text-left py-2.5 font-display text-xl text-ink"
              >
                Contact
              </a>
              <div className="mt-3 pt-3 border-t border-line flex flex-wrap gap-2.5">
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-wa text-cream px-5 py-2.5 text-sm font-bold"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-bold text-ink"
                >
                  <PhoneIcon className="w-4 h-4" /> {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
