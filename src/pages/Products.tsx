import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import {
  ArrowRightIcon,
  LeafIcon,
  PhoneIcon,
  SackIcon,
  ScaleIcon,
  WhatsAppIcon,
} from "../components/Icons";
import {
  CATEGORIES,
  CONTACT,
  PRODUCTS,
  WA_FARMER,
  WA_GENERAL,
  waLink,
  type CategoryId,
} from "../data/products";

type Filter = CategoryId | "all";

const BUY_LINES = [
  "Copra",
  "Black pepper",
  "Nutmeg & mace",
  "Raw cashew",
  "Paddy",
  "Arecanut",
  "Cloves",
  "RSS & scrap rubber",
  "Green pepper",
  "Coffee",
];

export default function Products() {
  const [active, setActive] = useState<Filter>("all");

  const list = useMemo(
    () => (active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  const countFor = (f: Filter) =>
    f === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === f).length;

  return (
    <main>
      {/* page intro */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-6xl mx-auto px-5 pt-14 sm:pt-20 pb-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-extrabold tracking-[0.24em] uppercase text-clay">
              <span className="h-px w-8 bg-clay/60" />
              Wholesale list · Direct from farm
            </p>
            <h1 className="mt-5 font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-espresso">
              Our Complete Wholesale
              <span className="block italic font-normal text-clay mt-1.5">
                Spice &amp; Produce Catalog
              </span>
            </h1>
            <p className="mt-5 text-bark leading-relaxed max-w-xl">
              All 19 wholesale lines we trade at our shop in Mawathagama, Kurunegala — from Ceylon
              cinnamon, black pepper and cardamom to copra, paddy and rubber. Every lot is bought at
              the farm gate or the shop counter, graded by hand and weighed in front of you. Rates
              move with the harvest — message us on WhatsApp for today’s price before you load the
              truck.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-3">
              <a
                href={waLink("Hello M.R Traders, please send me today's wholesale price list for your products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-wa hover:bg-[#178f45] text-cream px-7 py-3.5 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
                WhatsApp for today’s rates
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-paper text-ink hover:border-clay hover:text-clay px-7 py-3.5 text-sm font-extrabold transition-colors duration-300"
              >
                <PhoneIcon className="w-4 h-4" />
                Call {CONTACT.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        {/* trust chips */}
        <div className="max-w-6xl mx-auto px-5 pb-10">
          <Reveal delay={160}>
            <div className="flex flex-wrap gap-3 text-xs font-bold text-bark">
              {[
                { icon: <LeafIcon className="w-4 h-4 text-leaf" />, t: "Farm-fresh lots, no old stock" },
                { icon: <ScaleIcon className="w-4 h-4 text-clay" />, t: "Weighed on the spot at the shop" },
                { icon: <SackIcon className="w-4 h-4 text-bark" />, t: "Bulk sacks, bales & crate packing" },
              ].map((c) => (
                <span
                  key={c.t}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2"
                >
                  {c.icon}
                  {c.t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* sticky filter */}
      <div className="sticky top-[96px] sm:top-[104px] z-30 bg-ivory/95 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center gap-2.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setActive("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-extrabold tracking-wide transition-colors duration-300 ${
              active === "all"
                ? "bg-espresso text-cream"
                : "border border-line bg-paper text-bark hover:border-clay hover:text-clay"
            }`}
          >
            All · {countFor("all")}
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-extrabold tracking-wide transition-colors duration-300 ${
                active === c.id
                  ? "bg-espresso text-cream"
                  : "border border-line bg-paper text-bark hover:border-clay hover:text-clay"
              }`}
            >
              {c.label} · {countFor(c.id)}
            </button>
          ))}
          <span className="shrink-0 ml-auto hidden md:block text-[11px] font-bold tracking-wider uppercase text-fawn">
            Showing {list.length} of {PRODUCTS.length} lines
          </span>
        </div>
      </div>

      {/* product grid */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          {/* farmer banner */}
          <Reveal className="mt-16">
            <div className="relative overflow-hidden rounded-xl bg-leaf text-cream p-8 sm:p-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
              <LeafIcon className="absolute -right-8 -top-8 w-56 h-56 text-cream/10 rotate-12" />
              <div className="relative">
                <p className="text-[11px] font-extrabold tracking-[0.24em] uppercase text-cream/70">
                  Farmers &amp; collectors — we buy from you too
                </p>
                <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-tight">
                  Bring your harvest to the counter. We weigh fairly and pay on the spot.
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {BUY_LINES.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-cream/30 bg-cream/10 px-3.5 py-1.5 text-xs font-bold"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative flex flex-col items-start lg:items-end gap-4">
                <p className="text-sm text-cream/80 max-w-xs lg:text-right">
                  Send a photo of your stock and the quantity on WhatsApp — you’ll get a same-day
                  rate from Mohamed Muzki himself.
                </p>
                <a
                  href={WA_FARMER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-cream text-leaf-deep hover:bg-blush hover:text-espresso px-7 py-3.5 text-sm font-extrabold transition-colors duration-300"
                >
                  <WhatsAppIcon className="w-4.5 h-4.5" />
                  Offer your harvest
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* sourcing note */}
          <Reveal className="mt-14">
            <div className="rounded-xl border border-dashed border-clay/50 bg-clay/5 px-8 py-8 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <div>
                <h3 className="font-display font-semibold text-2xl text-espresso">
                  Don’t see your line on the list?
                </h3>
                <p className="mt-2 text-sm text-bark max-w-lg">
                  We source on request through our grower network — tell us the product, grade and
                  quantity, and we’ll quote it within a day.
                </p>
              </div>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-clay hover:bg-clay-deep text-cream px-7 py-3.5 text-sm font-extrabold transition-colors duration-300"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
