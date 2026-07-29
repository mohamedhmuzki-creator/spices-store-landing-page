import { categoryLabel, enquireLink, type Product } from "../data/products";
import { ArrowUpRightIcon, WhatsAppIcon } from "./Icons";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col rounded-lg overflow-hidden bg-paper border border-line hover:border-clay/50 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(42,29,17,0.35)] transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden bg-espresso/10">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-70" />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-cream/92 backdrop-blur-sm px-3 py-1 text-[10px] font-extrabold tracking-[0.14em] uppercase text-bark">
          {categoryLabel(product.category)}
        </span>
        {product.flagship && (
          <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-clay px-3 py-1 text-[10px] font-extrabold tracking-[0.14em] uppercase text-cream">
            Flagship
          </span>
        )}
        <span className="absolute bottom-3 left-3 font-display italic text-cream/90 text-sm">
          № {product.no}
        </span>
      </div>

      <div className={`flex flex-col flex-1 p-5 ${compact ? "" : "sm:p-6"}`}>
        <h3 className="font-display font-semibold text-xl text-espresso leading-snug">
          {product.name}
        </h3>
        {product.alt && (
          <p className="mt-0.5 text-xs font-semibold tracking-wide text-fawn uppercase">{product.alt}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-bark">{product.desc}</p>

        <dl className="mt-4 mb-5 grid grid-cols-1 gap-1.5 text-xs">
          <div className="flex gap-2">
            <dt className="shrink-0 w-16 font-extrabold tracking-wider uppercase text-fawn">Grade</dt>
            <dd className="text-ink font-medium">{product.grade}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 w-16 font-extrabold tracking-wider uppercase text-fawn">Packing</dt>
            <dd className="text-ink font-medium">{product.packing}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 w-16 font-extrabold tracking-wider uppercase text-fawn">Season</dt>
            <dd className="text-ink font-medium">{product.season}</dd>
          </div>
        </dl>

        <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-linesoft">
          <span className="text-[11px] font-bold tracking-wider uppercase text-fawn">
            Bulk &amp; lot orders
          </span>
          <a
            href={enquireLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-wa/50 text-wa hover:bg-wa hover:text-cream hover:border-wa px-3.5 py-1.5 text-xs font-extrabold transition-colors duration-300"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Enquire
            <ArrowUpRightIcon className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
