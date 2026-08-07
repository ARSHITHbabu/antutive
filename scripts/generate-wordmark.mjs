/**
 * Regenerate public/brand/antutive-logo-full.png from the traced vector
 * layers — wordmark only, WITHOUT the tagline layer. The "AI Solutions,
 * Human Impact" strapline was retired in the 2026 repositioning, so the
 * shipped logo asset must no longer carry it.
 *
 * Run with:  node scripts/generate-wordmark.mjs
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

const ids = ["arrow", "letter_a", "letter_n", "letter_t1", "letter_u", "letter_t2", "letter_i", "letter_v", "letter_e", "cursor_rect"];
const wordmark = ids.map(layer).join("");

/* Full-logo design space is 387×123; the tagline sits below y≈97.
   Crop the canvas to the wordmark rows only. */
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="387" height="97" viewBox="0 0 387 97"><g transform="scale(0.125)">${wordmark}</g></svg>`;

const png = new Resvg(svg, { fitTo: { mode: "width", value: 1548 } }).render().asPng();
fs.writeFileSync(path.join(root, "public/brand/antutive-logo-full.png"), png);
console.log(`public/brand/antutive-logo-full.png  (${png.length} bytes)`);
