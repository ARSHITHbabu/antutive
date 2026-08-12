import { Navigate, type RouteObject } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Famant } from "./pages/Famant";
import { Technology } from "./pages/Technology";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Privacy, Terms, Cookies } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";

/* Route table only — shared by the browser router (App.tsx) and the
   build-time prerenderer (entry-server.tsx), so it must not create a
   browser router at module scope. */
export const routes: RouteObject[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "famant", Component: Famant },
      { path: "technology", Component: Technology },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "cookies", Component: Cookies },

      /* Legacy routes from the services-era site. Server-side 301s live in
         vercel.json; these client-side redirects cover in-app navigation
         and non-Vercel hosting. */
      { path: "custom-platform", element: <Navigate to="/famant" replace /> },
      { path: "growth-marketing", element: <Navigate to="/about" replace /> },

      { path: "*", Component: NotFound },
    ],
  },
];
