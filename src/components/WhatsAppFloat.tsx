import { WA_GENERAL } from "../data/products";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with M.R Traders on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed z-50 right-4 bottom-5 sm:right-5 sm:bottom-auto sm:top-[62%] sm:-translate-y-1/2 flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-wa text-cream shadow-lg shadow-wa/30 hover:bg-[#178f45] hover:scale-105 transition-all duration-300"
    >
      <span className="wa-pulse absolute inset-0 rounded-full" aria-hidden="true" />
      <WhatsAppIcon className="relative w-7 h-7 sm:w-[30px] sm:h-[30px]" />
      <span className="pointer-events-none absolute right-full mr-3 hidden lg:block whitespace-nowrap rounded-full bg-espresso text-cream text-xs font-bold px-3.5 py-2 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Chat on WhatsApp
      </span>
    </a>
  );
}
