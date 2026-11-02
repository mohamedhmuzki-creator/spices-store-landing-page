import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import Process from "../components/Process";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ClockIcon,
  LeafIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SackIcon,
  ScaleIcon,
  TruckIcon,
  WhatsAppIcon,
} from "../components/Icons";
import {
  CONTACT,
  FEATURED_IDS,
  PRODUCTS,
  WA_FARMER,
  WA_GENERAL,
  waLink,
  type Product,
} from "../data/products";
import type { Page } from "../components/Header";

type HomeProps = {
  onNavigate: (page: Page, anchor?: string) => void;
};

const HERO_IMG =
  "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg?auto=compress&cs=tinysrgb&w=1920";

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[11px] sm:text-xs font-extrabold tracking-[0.24em] uppercase ${
        light ? "text-blush" : "text-clay"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-blush/70" : "bg-clay/60"}`} />
      {children}
    </p>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  const featured = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
    Boolean
  ) as Product[];

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative bg-espresso text-cream overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Baskets of whole spices — cinnamon, pepper, cloves and chilli"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/75 to-espresso/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-espresso/40" />

        <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-extrabold tracking-[0.26em] uppercase text-blush">
              <span className="h-px w-10 bg-blush/80" />
              Est. 1987 · Mawathagama · Sri Lanka
            </p>

            <h1 className="mt-6 font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] tracking-tight text-cream">
              Connecting Sri Lankan Spice Farmers
              <span className="block italic font-normal text-blush mt-2">
                with Global Bulk Buyers
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-cream/80 max-w-xl">
              M.R Traders is a family wholesale spice supplier in Mawathagama, Kurunegala —
              selling Ceylon cinnamon, black pepper, cardamom, cloves, nutmeg, copra, rubber and
              more in bulk across Sri Lanka, while buying the harvest of local farmers at fair,
              on-the-spot rates.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate("products")}
                className="inline-flex items-center gap-2.5 rounded-full bg-clay hover:bg-clay-deep text-cream px-7 py-3.5 text-sm font-extrabold tracking-wide shadow-lg shadow-clay/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                View All Products
                <ArrowRightIcon className="w-4 h-4" />
              </button>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-cream/40 text-cream hover:bg-cream hover:text-espresso px-7 py-3.5 text-sm font-extrabold tracking-wide transition-all duration-300"
              >
                <WhatsAppIcon className="w-4.5 h-4.5" />
                Contact on WhatsApp
              </a>
            </div>
          </div>

          {/* facts strip */}
          <div className="mt-14 sm:mt-20 border-t border-cream/15 pt-6 grid gap-5 sm:grid-cols-3 text-sm">
            <div className="flex items-center gap-3 text-cream/85">
              <ClockIcon className="w-5 h-5 text-blush shrink-0" />
              <p>
                Open <span className="font-bold text-cream">Tue – Sun</span>
                <span className="block text-xs text-cream/60">8.00 AM – 6.00 PM · Mondays closed</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-cream/85">
              <SackIcon className="w-5 h-5 text-blush shrink-0" />
              <p>
                <span className="font-bold text-cream">Bulk supply</span> &amp; local buying
                <span className="block text-xs text-cream/60">Farm-fresh lots, weighed on the spot</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-cream/85">
              <PhoneIcon className="w-5 h-5 text-blush shrink-0" />
              <p>
                <a href={CONTACT.phoneHref} className="font-bold text-cream hover:text-blush transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
                <span className="block text-xs text-cream/60">Call or WhatsApp — we reply fast</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS LEDGER ============ */}
      <section className="border-b border-line bg-cream">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4">
          {[
            { n: "1987", l: "Founded in Mawathagama", s: "by M. R. M. Musthakeen" },
            { n: "19", l: "Product lines traded", s: "Spices to rubber" },
            { n: "6", l: "Days open a week", s: "8.00 AM – 6.00 PM" },
            { n: "2nd", l: "Generation at the counter", s: "Mohamed Muzki, proprietor" },
          ].map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 90}
              className={`py-8 sm:py-10 px-4 sm:px-8 border-line [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              }`}
            >
              <p className="font-display font-bold text-4xl sm:text-5xl text-clay tracking-tight">{s.n}</p>
              <p className="mt-2 text-sm font-bold text-ink">{s.l}</p>
              <p className="text-xs text-fawn mt-0.5">{s.s}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ HERITAGE ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-32 self-start">
            <Reveal>
              <Kicker>Our story — since 1987</Kicker>
              <h2 className="mt-5 font-display font-semibold text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.12] tracking-tight text-espresso">
                <span className="mask-line"><span>A family spice business</span></span>
                <span className="mask-line"><span className="italic text-clay">in Mawathagama, Kurunegala.</span></span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-bark leading-relaxed">
                M.R Traders was started in <strong className="text-ink">1987</strong> by{" "}
                <strong className="text-ink">M.&nbsp;R.&nbsp;M.&nbsp;Musthakeen</strong> at 96, Kandy
                Road, <strong className="text-ink">Mawathagama</strong> in the Kurunegala District —
                buying spices and produce from farmers across the North Western Province and selling
                them in bulk.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 divide-y divide-line border border-line rounded-lg bg-paper overflow-hidden">
                <div className="flex items-center gap-4 p-5">
                  <span className="font-display italic text-3xl text-clay w-14">’87</span>
                  <div>
                    <p className="font-bold text-ink">M. R. M. Musthakeen</p>
                    <p className="text-sm text-fawn">Founder — started the business in 1987</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5">
                  <span className="font-display italic text-3xl text-leaf w-14">Now</span>
                  <div>
                    <p className="font-bold text-ink">Mohamed Muzki</p>
                    <p className="text-sm text-fawn">Second generation — runs the shop today</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <figure className="rounded-xl overflow-hidden border border-line shadow-[0_24px_60px_-30px_rgba(42,29,17,0.45)]">
                <div className="overflow-hidden aspect-[5/4]">
                  <img
                    src="images/heritage.jpg"
                    alt="Inside the old M.R Traders spice shop — jute sacks on wooden shelves"
                    className="kenburns w-full h-full object-cover"
                  />
                </div>
                <figcaption className="bg-espresso text-cream/75 text-xs px-5 py-3 flex items-center justify-between gap-4">
                  <span>Our shop at 96, Kandy Road, Mawathagama — the same address since 1987.</span>
                  <span className="font-display italic text-blush shrink-0">Kurunegala</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-8 text-bark leading-relaxed">
                Today the shop is run by his son, <strong className="text-ink">Mohamed Muzki</strong>.
                We do the same two things we always have: supply spices and produce in bulk, and buy
                the harvest of local farmers at fair rates.
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ============ TWO SIDES OF THE COUNTER ============ */}
      <section className="py-20 sm:py-24 bg-cream border-y border-line">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="max-w-2xl">
            <Kicker>What we do</Kicker>
            <h2 className="mt-5 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-espresso">
              Two sides of the same counter.
            </h2>
            <p className="mt-4 text-bark leading-relaxed">
              We fill bulk orders for businesses — and we buy the harvest of local farmers. One
              WhatsApp number handles both sides of the trade.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* supply */}
            <Reveal>
              <div className="h-full rounded-xl border border-line border-t-4 border-t-clay bg-paper p-7 sm:p-9 flex flex-col">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-lg bg-clay/10 text-clay flex items-center justify-center">
                    <TruckIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-clay">For buyers &amp; businesses</p>
                    <h3 className="font-display font-semibold text-2xl text-espresso mt-1">We supply in bulk</h3>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-bark">
                  {[
                    "Wholesale rates on all 19 product lines",
                    "Graded, cleaned, farm-fresh lots — no mixed bottoms",
                    "Packed to order: sacks, bags, bales or crates",
                    "Island-wide delivery arranged from Mawathagama",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <CheckIcon className="w-4.5 h-4.5 mt-0.5 shrink-0 text-clay" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink("Hello M.R Traders, I would like to place a bulk order. Please share today's wholesale rates.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-clay hover:bg-clay-deep text-cream px-6 py-3 text-sm font-extrabold transition-colors duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Request bulk pricing
                </a>
              </div>
            </Reveal>

            {/* buying */}
            <Reveal delay={120}>
              <div id="buying" className="h-full rounded-xl border border-line border-t-4 border-t-leaf bg-paper p-7 sm:p-9 flex flex-col scroll-mt-28">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-lg bg-leaf/10 text-leaf flex items-center justify-center">
                    <LeafIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-leaf">For farmers &amp; collectors</p>
                    <h3 className="font-display font-semibold text-2xl text-espresso mt-1">We buy from local farmers</h3>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-bark">
                  {[
                    "Fair daily market rates — told to you before weighing",
                    "Weighed on the spot at the shop, paid on delivery",
                    "Copra, pepper, nutmeg, cashew, paddy, rubber & more",
                    "Bring a sample to the counter for a same-day quote",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <CheckIcon className="w-4.5 h-4.5 mt-0.5 shrink-0 text-leaf" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_FARMER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-leaf hover:bg-leaf-deep text-cream px-6 py-3 text-sm font-extrabold transition-colors duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Offer your harvest
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Kicker>From the racks</Kicker>
              <h2 className="mt-5 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-espresso">
                This season at the counter.
              </h2>
            </div>
            <a
              href="/products"
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                onNavigate("products");
              }}
              className="group inline-flex items-center gap-2 text-sm font-extrabold text-clay hover:text-clay-deep"
            >
              View all 19 products
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-clay/40 group-hover:bg-clay group-hover:text-cream transition-colors duration-300">
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <ProductCard product={p} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="max-w-2xl">
            <Kicker>Why choose us</Kicker>
            <h2 className="mt-5 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-espresso">
              Why buyers and farmers come to us.
            </h2>
            <p className="mt-4 text-bark leading-relaxed">
              We have traded from the same shop in Mawathagama, Kurunegala since 1987. The stock
              comes straight from Sri Lankan farms, the weight is honest, and you can get a price on
              WhatsApp the same day.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <LeafIcon className="w-6 h-6" />,
                title: "Direct from farms",
                text: "We buy from local growers around Mawathagama, so the stock is fresh and not held in storage for months.",
              },
              {
                icon: <ScaleIcon className="w-6 h-6" />,
                title: "Honest weight & grading",
                text: "Every lot is graded by hand and weighed in front of you, with the rate agreed before anything is loaded.",
              },
              {
                icon: <SackIcon className="w-6 h-6" />,
                title: "Bulk quantities",
                text: "Sacks, bales and crates packed to your order — small trade loads or full bulk orders are both fine.",
              },
              {
                icon: <WhatsAppIcon className="w-6 h-6" />,
                title: "Easy to reach",
                text: "Message us on WhatsApp for today's rate. Mohamed Muzki answers himself, usually within the hour.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="h-full rounded-xl border border-line bg-paper p-6 sm:p-7 hover:border-clay/50 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(42,29,17,0.3)] transition-all duration-500">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-clay/10 text-clay">
                    {c.icon}
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-xl text-espresso leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-bark leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* ============ CONTACT ============ */}
      <section id="contact" className="bg-espresso text-cream scroll-mt-24">
        <div className="max-w-6xl mx-auto px-5 py-20 sm:py-28 grid lg:grid-cols-2 gap-14">
          <div>
            <Reveal>
              <Kicker light>Visit or message us</Kicker>
              <h2 className="mt-5 font-display font-semibold text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.12] tracking-tight">
                The counter is open —{" "}
                <span className="italic text-blush">come weigh with us.</span>
              </h2>
              <p className="mt-5 text-cream/70 leading-relaxed max-w-md">
                Walk in for a sample and a rate, or message us on WhatsApp and we’ll reply with
                today’s prices — usually within the hour.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-9 space-y-5 text-sm">
                <li className="flex gap-4">
                  <span className="w-10 h-10 rounded-lg bg-cream/10 text-blush flex items-center justify-center shrink-0">
                    <PinIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-cream/50">Address</p>
                    <a
                      href={CONTACT.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-semibold text-cream hover:text-blush transition-colors"
                    >
                      {CONTACT.address}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-10 h-10 rounded-lg bg-cream/10 text-blush flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-cream/50">Phone / WhatsApp</p>
                    <a href={CONTACT.phoneHref} className="mt-1 block font-semibold text-cream hover:text-blush transition-colors">
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-10 h-10 rounded-lg bg-cream/10 text-blush flex items-center justify-center shrink-0">
                    <MailIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-cream/50">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="mt-1 block font-semibold text-cream hover:text-blush transition-colors break-all">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-10 h-10 rounded-lg bg-cream/10 text-blush flex items-center justify-center shrink-0">
                    <ClockIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-cream/50">Opening hours</p>
                    <p className="mt-1 font-semibold text-cream">Tuesday – Sunday · 8.00 AM – 6.00 PM</p>
                    <p className="text-xs text-cream/50">Closed on Mondays</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-wa hover:bg-[#178f45] text-cream px-7 py-3.5 text-sm font-extrabold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4.5 h-4.5" />
                  Chat on WhatsApp
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full border border-cream/35 text-cream hover:bg-cream hover:text-espresso px-7 py-3.5 text-sm font-extrabold transition-colors duration-300"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call {CONTACT.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="flex">
            <div className="w-full rounded-xl overflow-hidden border border-cream/15 bg-cream/5 min-h-[340px] lg:min-h-[520px] flex flex-col">
              <iframe
                title="M.R Traders — 96, Kandy Road, Mawathagama"
                src="https://www.google.com/maps?q=M.R+Traders,+96+Kandy+Road,+Mawathagama,+Sri+Lanka&z=16&output=embed"
                className="w-full flex-1 min-h-[280px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="px-5 py-4 flex items-center justify-between gap-4 text-xs text-cream/70 bg-espresso border-t border-cream/10">
                <span className="flex items-center gap-2">
                  <ScaleIcon className="w-4 h-4 text-blush" />
                  On the main Kandy Road, Mawathagama — easy truck access for loading
                </span>
                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-blush hover:text-cream transition-colors flex items-center gap-1 shrink-0"
                >
                  Directions <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
