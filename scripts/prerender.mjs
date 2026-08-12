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

for (const { path: route, title, description } of ROUTE_META) {
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

  const outFile =
    route === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, ...route.slice(1).split("/"), "index.html");
  mkdirSync(path.dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  console.log(`prerendered ${route.padEnd(12)} → ${path.relative(root, outFile)} (${(appHtml.length / 1024).toFixed(0)} kB body)`);
}

/* The SSR bundle is only needed during this step. */
rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerendered ${ROUTE_META.length} routes.`);
