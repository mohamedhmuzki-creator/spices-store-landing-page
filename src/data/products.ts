export const CONTACT = {
  shop: "M.R Traders",
  phoneDisplay: "078 756 9596",
  phoneHref: "tel:+94787569596",
  waNumber: "94787569596",
  waDisplay: "078 756 9596",
  email: "mrspices2006@gmail.com",
  address: "96, Kandy Road, Mawathagama, Sri Lanka",
  mapUrl: "https://maps.app.goo.gl/iGruwYs1Kn3RV9JB8?g_st=iwb",
  hours: "Tuesday – Sunday · 8:00 AM – 6:00 PM",
  closed: "Closed on Mondays",
};

export const waLink = (message?: string) =>
  `https://wa.me/${CONTACT.waNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const WA_GENERAL = waLink(
  "Hello M.R Traders, I found you online. I would like to know today's wholesale rates."
);

export const WA_FARMER = waLink(
  "Hello M.R Traders, I am a local farmer/collector. I have produce to offer — can we discuss rates?"
);

export type CategoryId = "spices" | "pepper" | "grains" | "agro" | "rubber";

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "spices", label: "Spices" },
  { id: "pepper", label: "Pepper" },
  { id: "grains", label: "Nuts & Grains" },
  { id: "agro", label: "Plantation & Agro" },
  { id: "rubber", label: "Rubber" },
];

export type Product = {
  id: string;
  no: string;
  name: string;
  alt?: string;
  category: CategoryId;
  desc: string;
  grade: string;
  packing: string;
  season: string;
  image: string;
  /** Descriptive, keyword-rich alt text for the product photo (SEO + accessibility). */
  imageAlt: string;
  flagship?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "cinnamon",
    imageAlt: "Wholesale Ceylon Cinnamon sticks bulk supplier in Mawathagama Sri Lanka - M.R Traders",
    no: "01",
    name: "Ceylon Cinnamon",
    alt: "Kurundu · True Cinnamon",
    category: "spices",
    desc: "Hand-peeled true Ceylon cinnamon quills from Kurunegala and Matale growers — sweet, delicate and naturally low in coumarin.",
    grade: "Alba · C5 Special · Quills & chips",
    packing: "10 / 25 kg bales",
    season: "Year-round",
    image:
      "https://images.pexels.com/photos/5498005/pexels-photo-5498005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    flagship: true,
  },
  {
    id: "black-pepper",
    imageAlt: "Bulk wholesale Black Pepper whole peppercorns supplier in Sri Lanka - M.R Traders Mawathagama",
    no: "02",
    name: "Black Pepper",
    alt: "Gammiris · Whole",
    category: "pepper",
    desc: "Sun-dried bold whole pepper from Matale and Kegalle vines — hand-winnowed, machine-graded and free of spent berries.",
    grade: "Bold · 4.5 mm+ · 500 g/L",
    packing: "25 / 50 kg sacks",
    season: "Jan – Jun main crop",
    image:
      "https://images.pexels.com/photos/8559086/pexels-photo-8559086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "white-pepper",
    imageAlt: "Wholesale White Pepper whole peppercorns bulk supplier Sri Lanka - M.R Traders Mawathagama",
    no: "03",
    name: "White Pepper",
    alt: "Whole · Water-retted",
    category: "pepper",
    desc: "Fully ripened berries, water-retted and slow sun-dried to a clean cream finish — mellow heat with an earthy aroma.",
    grade: "Creamy whole · 550 g/L",
    packing: "10 / 25 kg bags",
    season: "Year-round",
    image:
      "https://images.pexels.com/photos/10902536/pexels-photo-10902536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "green-pepper",
    imageAlt: "Fresh Green Pepper on vine for bulk wholesale in Sri Lanka - M.R Traders Mawathagama",
    no: "04",
    name: "Green Pepper",
    alt: "Fresh vine spikes",
    category: "pepper",
    desc: "Vine-fresh green pepper spikes, packed the same day they are cut — bright, citrusy heat for pickles, sauces and curries.",
    grade: "Fresh spikes · farm-day packed",
    packing: "5 / 10 kg crates",
    season: "Oct – Mar",
    image:
      "https://images.pexels.com/photos/36292687/pexels-photo-36292687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "mixed-peppercorn",
    imageAlt: "Wholesale Mixed Peppercorns black white green blend bulk spices Sri Lanka - M.R Traders",
    no: "05",
    name: "Mixed Peppercorn",
    alt: "Tri-colour blend",
    category: "pepper",
    desc: "A miller's blend of black, white and green corns balanced for grinders, marinades and gourmet packing.",
    grade: "3-way blend · sorted lots",
    packing: "10 / 25 kg bags",
    season: "Year-round",
    image:
      "https://images.pexels.com/photos/33948998/pexels-photo-33948998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "cardamom",
    imageAlt: "Wholesale Ceylon Green Cardamom pods bulk spices supplier Sri Lanka - M.R Traders Mawathagama",
    no: "06",
    name: "Cardamom",
    alt: "Enasal · Green",
    category: "spices",
    desc: "Small green cardamom from wet-zone home gardens — whole pods, heavy seed and high essential-oil content.",
    grade: "Whole green · 7–8 mm",
    packing: "5 / 10 kg cartons",
    season: "Aug – Feb",
    image:
      "https://images.pexels.com/photos/6086300/pexels-photo-6086300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "cloves",
    imageAlt: "Wholesale Ceylon Cloves whole dried spice bulk supplier Sri Lanka - M.R Traders Mawathagama",
    no: "07",
    name: "Cloves",
    alt: "Kabu · Whole",
    category: "spices",
    desc: "Hand-picked whole cloves, sun-dried to a deep aromatic brown — intact heads and high oil for milling and distilling.",
    grade: "Whole AB · stem-free",
    packing: "10 / 25 kg bags",
    season: "Jun – Sep",
    image:
      "https://images.pexels.com/photos/6087276/pexels-photo-6087276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "nutmeg",
    imageAlt: "Wholesale Ceylon Nutmeg whole seeds bulk supplier Sri Lanka - M.R Traders Mawathagama",
    no: "08",
    name: "Nutmeg",
    alt: "Sadikka · Whole",
    category: "spices",
    desc: "Whole nutmeg from Matale and Matara estates, size-graded and smoke-free — clean shells, dark oily kernels.",
    grade: "60 / 80 count per lb",
    packing: "25 kg sacks",
    season: "Year-round",
    image:
      "https://images.pexels.com/photos/35339664/pexels-photo-35339664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "mace",
    imageAlt: "Wholesale Ceylon Mace spice from nutmeg fruit bulk supplier Sri Lanka - M.R Traders",
    no: "09",
    name: "Mace",
    alt: "Whole blades",
    category: "spices",
    desc: "The crimson aril of our nutmeg lots, separated by hand and shade-dried slowly to hold colour and fragrance.",
    grade: "Whole pale-orange blades",
    packing: "5 / 10 kg cartons",
    season: "With nutmeg crop",
    image:
      "https://images.pexels.com/photos/13093699/pexels-photo-13093699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "goraka",
    imageAlt: "Wholesale Goraka Garcinia dried fruit bulk spice supplier Sri Lanka - M.R Traders Mawathagama",
    no: "10",
    name: "Goraka",
    alt: "Gambooge · Garcinia",
    category: "spices",
    desc: "Sun-dried goraka rind — the souring backbone of Sri Lankan fish curries. Clean, export-ready dried fruit.",
    grade: "Sun-dried rind · moisture-low",
    packing: "10 / 25 kg bags",
    season: "Apr – Aug",
    image: "images/goraka.jpg",
  },
  {
    id: "coffee",
    imageAlt: "Wholesale Sri Lankan Coffee beans bulk supplier Mawathagama - M.R Traders",
    no: "11",
    name: "Coffee",
    alt: "Robusta · Parchment",
    category: "grains",
    desc: "Locally grown robusta cherry and parchment, sun-dried on estate yards — smallholder lots for roasters and cafés.",
    grade: "Parchment & cherry",
    packing: "30 / 60 kg bags",
    season: "Apr – Jul",
    image:
      "https://images.pexels.com/photos/9623564/pexels-photo-9623564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "cashew",
    imageAlt: "Wholesale Raw Cashew Nuts in shell bulk supplier Sri Lanka - M.R Traders Mawathagama",
    no: "12",
    name: "Raw Cashew Nuts",
    alt: "Kaju · In-shell",
    category: "grains",
    desc: "Raw cashew in shell from Puttalam and dry-zone orchards — sun-dried, sound kernels for processors and roasters.",
    grade: "46–50 lbs KOR range",
    packing: "80 kg jute sacks",
    season: "Mar – Jun",
    image: "https://i.postimg.cc/vH1dYxPm/IMG-4266.jpg",
  },
  {
    id: "copra",
    imageAlt: "Wholesale Copra dried coconut bulk supplier Kurunegala Sri Lanka - M.R Traders",
    no: "13",
    name: "Copra",
    alt: "Dried coconut kernel",
    category: "grains",
    desc: "Sun-dried coconut kernel from Kurunegala estates — mill-ready for oil extraction with controlled moisture.",
    grade: "Edible grade · ≤ 6% moisture",
    packing: "75 kg sacks",
    season: "Year-round",
    image:
      "https://images.pexels.com/photos/11865861/pexels-photo-11865861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "arecanut",
    imageAlt: "Wholesale Arecanut Betel Nut sliced bulk supplier Sri Lanka - M.R Traders Mawathagama",
    no: "14",
    name: "Arecanut",
    alt: "Puwak · Betel nut",
    category: "grains",
    desc: "Whole dried arecanut — ripe round and split lots, graded by cut, colour and maturity for trade buyers.",
    grade: "Ripe whole & split",
    packing: "40 / 75 kg sacks",
    season: "Jul – Dec",
    image:
      "https://images.pexels.com/photos/7263993/pexels-photo-7263993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "paddy",
    imageAlt: "Wholesale Paddy Rice sacks bulk supplier Mawathagama Sri Lanka - M.R Traders",
    no: "15",
    name: "Paddy",
    alt: "Nel · New season",
    category: "grains",
    desc: "New-season paddy from paddy lands around Mawathagama — Samba and Nadu lots bought and sold at harvest.",
    grade: "New season · sun-dried",
    packing: "100 kg bags",
    season: "Maha & Yala harvests",
    image:
      "https://images.pexels.com/photos/32630924/pexels-photo-32630924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "ekel",
    imageAlt: "Wholesale Coconut Ekel sticks bundles bulk supplier Sri Lanka - M.R Traders Mawathagama",
    no: "16",
    name: "Ekel",
    alt: "Ekek · Coconut midribs",
    category: "agro",
    desc: "Sun-dried coconut leaf midribs, stripped and bundled tight — steady supply for broom makers and craft buyers.",
    grade: "Dry · straight ribs",
    packing: "Bundles of 100",
    season: "Year-round",
    image: "https://i.postimg.cc/WzCCFS9Z/IMG-4265.jpg",
  },
  {
    id: "charcoal",
    imageAlt: "Wholesale Charcoal hardwood lump bulk fuel supplier Sri Lanka - M.R Traders",
    no: "17",
    name: "Charcoal",
    alt: "Hardwood lump",
    category: "agro",
    desc: "Kiln-fired hardwood lump charcoal — long-burning, low-smoke fuel for restaurants, BBQs and export orders.",
    grade: "Lump · low dust",
    packing: "10 / 20 kg bags",
    season: "Year-round",
    image:
      "https://images.pexels.com/photos/10709388/pexels-photo-10709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "rss",
    imageAlt: "Wholesale Ribbed Smoked Sheet RSS Rubber bulk supplier Sri Lanka - M.R Traders Mawathagama",
    no: "18",
    name: "RSS — Ribbed Smoked Sheet",
    alt: "Plantation rubber",
    category: "rubber",
    desc: "Grade 1–3 ribbed smoked sheet from smallholder rubber around Mawathagama — clean, well-smoked, bale-packed.",
    grade: "RSS 1 · 2 · 3",
    packing: "33.33 kg bales",
    season: "Year-round",
    image: "images/rss.jpg",
  },
  {
    id: "scrap-rubber",
    imageAlt: "Wholesale Scrap Rubber natural bulk supplier Sri Lanka - M.R Traders Mawathagama",
    no: "19",
    name: "Scrap Rubber",
    alt: "Field scrap · Cup lump",
    category: "rubber",
    desc: "Clean field scrap and cup lump collected weekly from local tappers — honest DRC-tested lots at fair weight.",
    grade: "Field scrap · DRC checked",
    packing: "Bagged by weight",
    season: "Year-round",
    image: "images/scrap-rubber.jpg",
  },
];

export const FEATURED_IDS = ["cinnamon", "black-pepper", "cardamom", "nutmeg"];

export const categoryLabel = (id: CategoryId) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;

export const enquireLink = (p: Product) =>
  waLink(
    `Hello M.R Traders, I would like today's wholesale rate for ${p.name} (${p.grade}). Please share bulk pricing and availability.`
  );
