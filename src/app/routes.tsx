import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { GrowthMarketing } from "./pages/GrowthMarketing";
import { CustomPlatform } from "./pages/CustomPlatform";
import { Consulting } from "./pages/Consulting";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "growth-marketing", Component: GrowthMarketing },
      { path: "custom-platform", Component: CustomPlatform },
      { path: "consulting", Component: Consulting },
      { path: "products", Component: Products },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
