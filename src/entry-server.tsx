/**
 * Build-time prerendering entry (no server runtime involved).
 *
 * Built with `vite build --ssr src/entry-server.tsx` and then invoked by
 * scripts/prerender.mjs, which renders every public route to static HTML in
 * dist/. The client entry (src/main.tsx) hydrates that markup in the
 * browser, so the page works identically with and without JavaScript.
 *
 * Note: this intentionally renders the route tree only — not <App/> — so the
 * session-gated intro overlay never appears in static HTML.
 */
import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "./app/routes";

export { ROUTE_META } from "./app/lib/routeMeta";

export function render(path: string): string {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return renderToString(<RouterProvider router={router} />);
}
