import { useCallback, useState } from "react";
import Header, { type Page } from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = useCallback((next: Page, anchor?: string) => {
    setPage(next);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      if (anchor) {
        document
          .getElementById(anchor)
          ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }, 60);
  }, []);

  return (
    <div className="noise min-h-screen flex flex-col bg-ivory text-ink">
      <Header page={page} onNavigate={navigate} />
      <div className="flex-1">{page === "home" ? <Home onNavigate={navigate} /> : <Products />}</div>
      <Footer onNavigate={navigate} />
      <WhatsAppFloat />
    </div>
  );
}
