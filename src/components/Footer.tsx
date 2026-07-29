import { CONTACT, PRODUCTS, WA_GENERAL, categoryLabel } from "../data/products";
import type { Page } from "./Header";
import { ClockIcon, Monogram, WhatsAppIcon } from "./Icons";

type FooterProps = {
  onNavigate: (page: Page, anchor?: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-cream/90">
                <Monogram className="w-11 h-11" />
              </span>
              <div className="leading-none">
                <p className="font-display font-bold text-xl text-cream tracking-tight">M.R TRADERS</p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/50">
                  Wholesale Merchants · Est. 1987
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream/60 max-w-xs">
              Family-run wholesale trade house on Kandy Road, Mawathagama. Founded by
              M.&nbsp;R.&nbsp;M.&nbsp;Musthakeen, now trading in its second generation — bulk
              supply and fair local buying, straight from the farm.
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-wa text-cream px-5 py-2.5 text-sm font-bold hover:bg-[#178f45] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>

          {/* explore */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blush">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate("home")} className="hover:text-cream transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("products")} className="hover:text-cream transition-colors">
                  All Products ({PRODUCTS.length})
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", "contact")} className="hover:text-cream transition-colors">
                  Contact &amp; Directions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("home", "buying")} className="hover:text-cream transition-colors">
                  Sell Your Harvest to Us
                </button>
              </li>
            </ul>
          </div>

          {/* hours */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-blush">Opening Hours</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-cream/60">Tue – Sun</span>
                <span className="font-semibold text-cream">8.00 AM – 6.00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-cream/60">Monday</span>
                <span className="font-semibold text-[#d98b5f]">Closed</span>
              </li>
            </ul>
            <div className="mt-5 flex items-start gap-2.5 text-sm text-cream/60">
              <ClockIcon className="w-4 h-4 mt-0.5 shrink-0 text-blush" />
              <p>Harvest deliveries welcome any open day — we weigh and pay on the spot.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/45">
          <p>
            © {new Date().getFullYear()} M.R Traders · {CONTACT.address}
          </p>
          <p>
            19 product lines — {["spices", "pepper", "grains", "agro", "rubber"]
              .map((c) => categoryLabel(c as never))
              .join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
