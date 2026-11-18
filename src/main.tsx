import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// The markup inside #root is pre-rendered at build time (see scripts/ssg.mjs),
// so we hydrate instead of createRoot — the existing HTML is kept and React
// just attaches event handlers and state.
hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>
);
