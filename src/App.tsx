import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { applySeo, currentPage, pushPath, type Page } from "./router";

export default function App() {
  const [page, setPage] = useState<Page>(() => currentPage());

  /* keep the browser back / forward buttons working */
  useEffect(() => {
    const onPop = () => setPage(currentPage());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  /* give each URL its own title, meta description, canonical and social tags */
  useEffect(() => {
    applySeo(page);
  }, [page]);

  /* honour a #anchor present on first load (e.g. /#contact) */
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    }, 80);
  }, []);

  const navigate = useCallback((next: Page, anchor?: string) => {
    pushPath(next, anchor);
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
