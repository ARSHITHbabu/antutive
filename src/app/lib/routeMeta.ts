import { COMPANY_DESCRIPTION, PRODUCT_DESCRIPTION } from "./seo";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

/* Single source of truth for per-route document metadata.
   - Pages pass their entry to usePageMeta at runtime (SPA navigation).
   - scripts/prerender.mjs bakes the same values into each prerendered HTML
     file at build time, so crawlers that never execute JavaScript still see
     the correct title / description / canonical for every route.
   Every path listed here is prerendered to dist/<path>/index.html and must
   exist as a route in routes.tsx and as a URL in public/sitemap.xml. */
export const ROUTE_META: RouteMeta[] = [
  {
    path: "/",
    title: "Antutive — AI-first product company",
    description: COMPANY_DESCRIPTION,
  },
  {
    path: "/products",
    title: "Products — built and operated by Antutive",
    description:
      "The Antutive product portfolio: AI-first products imagined, built and operated in-house. Famant, the AI-powered family management platform, is the first flagship product.",
  },
  {
    path: "/famant",
    title: "Famant — AI-powered family management platform | Antutive",
    description: PRODUCT_DESCRIPTION,
  },
  {
    path: "/technology",
    title: "Technology — how Antutive builds AI-first products",
    description:
      "How Antutive builds AI-first products: intelligence as the product, confirmation before action, evaluation over adjectives. Famant, the first flagship product, is the working example — with the full architecture published as it is confirmed.",
  },
  {
    path: "/about",
    title: "About Antutive — an AI-first product company",
    description: COMPANY_DESCRIPTION,
  },
  {
    path: "/contact",
    title: "Contact Antutive",
    description:
      "Contact Antutive (ANTUTIVE AB), Gothenburg, Sweden — questions about Famant, press, partnerships or general enquiries. Email contact@antutive.com.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Antutive",
    description: "How ANTUTIVE AB handles personal data on antutive.com.",
  },
  {
    path: "/terms",
    title: "Terms of Service | Antutive",
    description: "Terms of use for the antutive.com website, operated by ANTUTIVE AB.",
  },
  {
    path: "/cookies",
    title: "Cookies | Antutive",
    description: "Cookie and local-storage information for antutive.com.",
  },
];

export function metaFor(path: string): RouteMeta {
  const meta = ROUTE_META.find((m) => m.path === path);
  if (!meta) throw new Error(`No route metadata defined for "${path}"`);
  return meta;
}
