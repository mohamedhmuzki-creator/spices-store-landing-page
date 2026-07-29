import { WA_GENERAL } from "../data/products";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with M.R Traders on WhatsApp"
      className="group fixed right-0 bottom-24 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-50 flex items-center gap-0 rounded-l-full bg-wa text-cream shadow-lg shadow-wa/30 pr-2.5 pl-3 py-2.5 sm:py-3 hover:bg-[#178f45] hover:pr-4 transition-all duration-300"
    >
      <span className="wa-pulse inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cream/15">
        <WhatsAppIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
      </span>
      <span className="ml-2 font-body text-xs sm:text-[13px] font-extrabold tracking-wide [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">
        WhatsApp
      </span>
    </a>
  );
}
