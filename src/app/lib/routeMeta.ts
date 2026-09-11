import { COMPANY_DESCRIPTION, PRODUCT_DESCRIPTION } from "./seo";
import { FAMANT_ANDROID_BETA_URL, FAMANT_SITE_URL } from "../content/famant";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /* Optional route-scoped JSON-LD, injected into <head> as a second
     structured-data block alongside the site-wide Organization node in
     index.html. Prerendered at build time and kept in sync during SPA
     navigation by usePageMeta. Only verifiable facts belong here. */
  jsonLd?: Record<string, unknown>;
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
    title: "Antutive | AI-first product company",
    description: COMPANY_DESCRIPTION,
  },
  {
    path: "/products",
    title: "Products built and operated by Antutive",
    description:
      "The Antutive product portfolio: AI-first products imagined, built and operated in-house. Famant, the AI-powered family management platform, is the first flagship product and is available on Google Play.",
  },
  {
    path: "/famant",
    title: "Famant: AI-powered family app on Google Play | Antutive",
    description: `${PRODUCT_DESCRIPTION} Built and operated by ANTUTIVE AB; available on Google Play, with its own site at famant.com.`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Famant",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android",
      url: FAMANT_SITE_URL,
      sameAs: [FAMANT_SITE_URL, FAMANT_ANDROID_BETA_URL],
      downloadUrl: FAMANT_ANDROID_BETA_URL,
      installUrl: FAMANT_ANDROID_BETA_URL,
      description: PRODUCT_DESCRIPTION,
      publisher: {
        "@type": "Organization",
        name: "ANTUTIVE AB",
        url: "https://antutive.com/",
        identifier: "559576-7228",
      },
    },
  },
  {
    path: "/technology",
    title: "Technology: how Antutive builds AI-first products",
    description:
      "How Antutive builds AI-first products: intelligence as the product, confirmation before action, evaluation over adjectives. Famant, the first flagship product, is the working example, with the full architecture published as it is confirmed.",
  },
  {
    path: "/about",
    title: "About Antutive, an AI-first product company",
    description: COMPANY_DESCRIPTION,
  },
  {
    path: "/contact",
    title: "Contact Antutive",
    description:
      "Contact Antutive (ANTUTIVE AB) in Gothenburg, Sweden with questions about Famant, press, partnerships or general enquiries. Email contact@antutive.com.",
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
