import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { applySeo, currentPage, pushPath, type Page } from "./router";

/** The contact "page" is the contact section of the home page. */
const anchorFor = (page: Page, anchor?: string) =>
  anchor ?? (page === "contact" ? "contact" : undefined);

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

  /* on direct load of a hashed URL or /contact, jump to the right section */
  useEffect(() => {
    const id = window.location.hash.slice(1) || (page === "contact" ? "contact" : "");
    if (!id) return;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    }, 80);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useCallback((next: Page, anchor?: string) => {
    const target = anchorFor(next, anchor);
    pushPath(next, anchor);
    setPage(next);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      if (target) {
        document
          .getElementById(target)
          ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }, 60);
  }, []);

  return (
    <div className="noise min-h-screen flex flex-col bg-ivory text-ink">
      <Header page={page} onNavigate={navigate} />
      <div className="flex-1">
        {page === "products" ? <Products /> : <Home onNavigate={navigate} />}
      </div>
      <Footer onNavigate={navigate} />
      <WhatsAppFloat />
    </div>
  );
}
