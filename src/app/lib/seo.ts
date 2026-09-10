import { useEffect } from "react";

export const SITE_URL = "https://antutive.com";

/* Canonical descriptions — used identically in metadata, footer and About
   (one source of truth). The company line is company-first: Antutive is the
   parent product company; Famant is its first flagship product, not its
   whole identity. */
export const COMPANY_DESCRIPTION =
  "Antutive is an AI-first product company in Gothenburg, Sweden, building and operating its own products. Its first flagship product is Famant, an AI-powered family management and household coordination platform.";

/* Short form for tight spots (footer bar, chips). */
export const COMPANY_TAGLINE = "AI-first product company · Gothenburg, Sweden";

export const PRODUCT_DESCRIPTION =
  "Famant is an AI-powered family management and household coordination platform: one shared context for a family's schedules, tasks and documents, with an assistant that proposes actions and acts on your confirmation.";

/* Id of the route-scoped JSON-LD block. The site-wide Organization node
   lives in index.html and is never touched; this one is added, replaced or
   removed as the visitor moves between routes, and is baked into the
   prerendered HTML at build time by scripts/prerender.mjs. */
export const ROUTE_JSONLD_ID = "route-jsonld";

/* Per-route document metadata for the SPA. Each page calls this once; it
   keeps title, description, canonical, social tags and route-scoped
   structured data in sync with the route instead of the single site-wide
   set the old site shipped. */
export function usePageMeta({
  title,
  description,
  path,
  noindex = false,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", SITE_URL + path);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL + path;

    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noindex) {
      setMeta("name", "robots", "noindex");
    } else if (robots) {
      robots.remove();
    }

    const existing = document.getElementById(ROUTE_JSONLD_ID);
    if (jsonLd) {
      const el = existing ?? document.createElement("script");
      if (!existing) {
        el.id = ROUTE_JSONLD_ID;
        (el as HTMLScriptElement).type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(jsonLd);
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, path, noindex, jsonLd]);
}
