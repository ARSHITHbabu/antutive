import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ROUTE_META } from "./app/lib/routeMeta";
import { SITE_URL } from "./app/lib/seo";
import "./styles/index.css";

const container = document.getElementById("root")!;

/* Public routes are prerendered to static HTML at build time (see
   scripts/prerender.mjs), so the server response already contains the page
   markup — hydrate it instead of rebuilding the DOM.

   Hydrate only when the served document really is this route's prerendered
   file: hosts serve the home shell as the SPA fallback for unknown paths
   (and some static servers use it for nested paths too), and hydrating
   against the wrong markup would fail. The canonical link is baked into
   each prerendered file, so it identifies the served route reliably. */
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const prerendered = ROUTE_META.some((m) => m.path === path);
const canonicalHref =
  document.head.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "";
const servedPath = canonicalHref.replace(SITE_URL, "").replace(/\/+$/, "") || "/";

if (prerendered && servedPath === path && container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  container.innerHTML = "";
  createRoot(container).render(<App />);
}
