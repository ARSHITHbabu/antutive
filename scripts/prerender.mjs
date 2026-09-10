/**
 * Build-time prerender step.
 *
 * Runs after `vite build` (client → dist/) and `vite build --ssr` (server
 * renderer → dist-ssr/). For every public route it renders the React tree to
 * static HTML and writes dist/<route>/index.html with the route's own
 * <title>, meta description, canonical and social tags baked in.
 *
 * Result: crawlers and any client that does not execute JavaScript receive
 * the full page content and correct per-page metadata directly in the HTML
 * response. The browser hydrates the same markup (src/main.tsx), so nothing
 * changes visually for human visitors.
 *
 * It also writes dist/404.html: the branded not-found page, prerendered and
 * marked noindex. Because every real route has its own file on disk, the
 * host serves that file — with a real HTTP 404 — for any unknown path, so
 * unknown URLs are no longer soft 404s. See vercel.json (no catch-all
 * rewrite).
 */
import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

/* Ensure externalized react/react-dom resolve their production builds when
   the SSR bundle is imported below (CJS entry points switch on NODE_ENV). */
process.env.NODE_ENV ??= "production";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE_URL = "https://antutive.com";

const { render, ROUTE_META } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const template = readFileSync(path.join(dist, "index.html"), "utf8");

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** Replace one occurrence; fail the build if the pattern is missing.
    (Presence is checked separately: the replacement can legitimately equal
    the existing text, e.g. the home route's title.) */
function replaceOne(html, pattern, replacement, what, route) {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) {
    throw new Error(`prerender: could not update ${what} for ${route}`);
  }
  return html.replace(pattern, replacement);
}

/** Route-scoped structured data, injected next to the site-wide
    Organization node that already lives in the template's <head>.
    Mirrors what usePageMeta writes during client-side navigation. */
function withRouteJsonLd(html, jsonLd) {
  if (!jsonLd) return html;
  const json = JSON.stringify(jsonLd, null, 2).replace(/</g, "\\u003c");
  return html.replace(
    "</head>",
    `  <script type="application/ld+json" id="route-jsonld">\n${json}\n    </script>\n  </head>`
  );
}

for (const { path: route, title, description, jsonLd } of ROUTE_META) {
  const appHtml = render(route);
  if (!appHtml || appHtml.length < 2000) {
    throw new Error(
      `prerender: suspiciously small output for ${route} (${appHtml?.length ?? 0} chars)`
    );
  }

  const canonical = SITE_URL + (route === "/" ? "/" : route);
  const t = escapeText(title);
  const d = escapeAttr(description);

  let html = template;
  html = replaceOne(html, /<title>[^<]*<\/title>/, `<title>${t}</title>`, "title", route);
  html = replaceOne(html, /(<meta name="description" content=")[^"]*(")/, `$1${d}$2`, "description", route);
  html = replaceOne(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`, "og:title", route);
  html = replaceOne(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`, "og:description", route);
  html = replaceOne(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`, "og:url", route);
  html = replaceOne(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`, "twitter:title", route);
  html = replaceOne(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`, "twitter:description", route);
  html = replaceOne(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`, "canonical", route);
  html = replaceOne(html, '<div id="root"></div>', `<div id="root">${appHtml}</div>`, "root markup", route);
  html = withRouteJsonLd(html, jsonLd);

  const outFile =
    route === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, ...route.slice(1).split("/"), "index.html");
  mkdirSync(path.dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  console.log(`prerendered ${route.padEnd(12)} → ${path.relative(root, outFile)} (${(appHtml.length / 1024).toFixed(0)} kB body)`);
}

/* ── dist/404.html ──
   The host serves this file for any path that does not exist on disk, with
   a real HTTP 404 status. It renders the app's own NotFound page (route
   "/404" falls through to the "*" route), so a wrong URL looks like the
   rest of the site instead of a bare host error page.

   It is deliberately noindex and carries no canonical link: a canonical
   would invite indexing of a page that does not exist, and src/main.tsx
   uses the canonical to decide whether the served document matches the
   requested route — with none present it re-renders instead of trying to
   hydrate the 404 markup against some other URL. */
{
  const appHtml = render("/404");
  if (!appHtml || appHtml.length < 2000) {
    throw new Error(`prerender: suspiciously small output for /404 (${appHtml?.length ?? 0} chars)`);
  }

  const title = "Page not found | Antutive";
  const description = "The page you were looking for doesn't exist.";

  let html = template;
  html = replaceOne(html, /<title>[^<]*<\/title>/, `<title>${escapeText(title)}</title>`, "title", "/404");
  html = replaceOne(html, /(<meta name="description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`, "description", "/404");
  html = replaceOne(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`, "og:title", "/404");
  html = replaceOne(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`, "og:description", "/404");
  html = replaceOne(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${SITE_URL}/$2`, "og:url", "/404");
  html = replaceOne(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`, "twitter:title", "/404");
  html = replaceOne(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`, "twitter:description", "/404");
  html = replaceOne(html, /\s*<link rel="canonical" href="[^"]*"\s*\/?>/, `\n    <meta name="robots" content="noindex" />`, "canonical→noindex", "/404");
  html = replaceOne(html, '<div id="root"></div>', `<div id="root">${appHtml}</div>`, "root markup", "/404");

  writeFileSync(path.join(dist, "404.html"), html);
  console.log(`prerendered /404         → dist\\404.html (${(appHtml.length / 1024).toFixed(0)} kB body, noindex)`);
}

/* The SSR bundle is only needed during this step. */
rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerendered ${ROUTE_META.length} routes + 404.html.`);
