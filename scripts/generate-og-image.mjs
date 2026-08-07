/**
 * Generate public/og-image.png (1200×630) — the social preview card.
 *
 * Composes the official wordmark (all traced layers except the retired
 * tagline) from `src/assets/antutive-logo-layered.svg` on a light brand
 * canvas, with the current positioning line as text.
 *
 * Run with:  node scripts/generate-og-image.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const layered = fs.readFileSync(path.join(root, "src/assets/antutive-logo-layered.svg"), "utf8");

function layer(id) {
  const m = layered.match(new RegExp(`<g id="${id}">[\\s\\S]*?</g></g>`));
  if (!m) throw new Error(`layer ${id} not found in layered SVG`);
  return m[0];
}

/* Wordmark = arrow + letters + rectangle. The tagline layer is excluded:
   the strapline it carries has been retired from the positioning. */
const ids = ["arrow", "letter_a", "letter_n", "letter_t1", "letter_u", "letter_t2", "letter_i", "letter_v", "letter_e", "cursor_rect"];
const wordmark = ids.map(layer).join("");

/* Wordmark occupies ~387×95 design units (pre-scale ×8 inside the SVG). */
const W = 1200, H = 630;
const CONTENT = { w: 387, h: 95 };
const scale = 640 / CONTENT.w;
const tx = (W - CONTENT.w * scale) / 2;
const ty = 170;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#eef2fa"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1080" cy="90" r="240" fill="#7C92C7" opacity="0.10"/>
  <circle cx="120" cy="560" r="200" fill="#46589F" opacity="0.08"/>
  <g transform="translate(${tx},${ty}) scale(${scale})"><g transform="scale(0.125)">${wordmark}</g></g>
  <text x="600" y="430" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="bold" fill="#46589F">AI-first product company</text>
  <text x="600" y="478" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#64748b">Gothenburg, Sweden · antutive.com</text>
</svg>`;

const png = new Resvg(svg, { fitTo: { mode: "width", value: W } }).render().asPng();
fs.writeFileSync(path.join(root, "public/og-image.png"), png);
console.log(`public/og-image.png  (${png.length} bytes)`);
