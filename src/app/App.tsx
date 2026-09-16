import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";

/* Client-only: entry-server.tsx builds its own memory router from the same
   route table, so the browser router must live here, not in routes.tsx. */
const router = createBrowserRouter(routes);

/* The brand intro overlay is parked: the site opens straight on the
   requested page. Its source is preserved, unwired, in
   src/app/components/intro/ — see INTRO_ANIMATION_PARKED.md to restore. */
export default function App() {
  return <RouterProvider router={router} />;
}
