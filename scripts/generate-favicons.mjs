/**
 * Generate the complete favicon set from the official traced vector mark.
 *
 * Source of truth is `src/assets/antutive-logo-layered.svg` (the separated
 * vector layers of the brand logo). This script composes the short mark —
 * blue arrow + black "a" + blue rectangle, the official compact logo — on a
 * square white canvas and emits every icon a browser or crawler asks for:
 *
 *   public/favicon.svg          vector, modern browsers
 *   public/favicon.ico          16 + 32 + 48 px (PNG-compressed ICO)
 *   public/favicon-96.png       square 96 px — Google's preferred format
 *   public/apple-touch-icon.png 180 px
 *   public/icon-192.png         Android / PWA
 *   public/icon-512.png         Android / PWA
 *
 * Run with:  node scripts/generate-favicons.mjs
 * (uses @resvg/resvg-js, already a devDependency)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const layered = fs.readFileSync(path.join(root, "src/assets/antutive-logo-layered.svg"), "utf8");

/* ---------------------------------------------------------------- */
/* Compose the square mark SVG from the traced layers                */
/* ---------------------------------------------------------------- */

// Pull one <g id="..."> layer (each is exactly two nested <g> deep).
function layer(id) {
  const m = layered.match(new RegExp(`<g id="${id}">[\\s\\S]*?</g></g>`));
  if (!m) throw new Error(`layer ${id} not found in layered SVG`);
  return m[0];
}

const arrow = layer("arrow");
const letterA = layer("letter_a").replace('fill="#7E93C8"', 'fill="#000000"'); // mark's "a" is black
// Rectangle moved from its full-logo slot (x=351) to the mark slot (x=81),
// in the layered SVG's pre-scale units (design px × 8).
const rect = `<g transform="translate(${8 * (81 - 351)},0)">${layer("cursor_rect")}</g>`;

// Mark content in design space: x 1…117, y 3…94. Center it on a square
// 128-unit canvas with balanced padding. White background — the mark's
// black "a" must stay legible on dark browser chrome.
const CONTENT = { x: 1, y: 3, w: 116, h: 91 };
const CANVAS = 128;
const s = (CANVAS - 20) / CONTENT.w; // ~10 units padding left/right
const tx = (CANVAS - CONTENT.w * s) / 2 - CONTENT.x * s;
const ty = (CANVAS - CONTENT.h * s) / 2 - CONTENT.y * s;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS} ${CANVAS}">
<rect width="${CANVAS}" height="${CANVAS}" fill="#FFFFFF"/>
<g transform="translate(${tx.toFixed(3)},${ty.toFixed(3)}) scale(${s.toFixed(5)})"><g transform="scale(0.125)">${arrow}${letterA}${rect}</g></g>
</svg>`;

/* ---------------------------------------------------------------- */
/* Rasterize                                                         */
/* ---------------------------------------------------------------- */

function png(size) {
  return new Resvg(faviconSvg, { fitTo: { mode: "width", value: size } }).render().asPng();
}

/** Minimal ICO container with PNG-compressed images (supported everywhere
 *  that matters since Windows Vista). */
function ico(sizes) {
  const images = sizes.map((sz) => ({ sz, buf: png(sz) }));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = [];
  for (const { sz, buf } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(sz >= 256 ? 0 : sz, 0); // width  (0 = 256)
    e.writeUInt8(sz >= 256 ? 0 : sz, 1); // height
    e.writeUInt8(0, 2);  // palette
    e.writeUInt8(0, 3);  // reserved
    e.writeUInt16LE(1, 4);  // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buf.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.buf)]);
}

const pub = path.join(root, "public");
const out = (name, data) => {
  fs.writeFileSync(path.join(pub, name), data);
  console.log(`  public/${name}  (${data.length} bytes)`);
};

console.log("Generating favicon set from the vector mark:");
out("favicon.svg", faviconSvg);
out("favicon.ico", ico([16, 32, 48]));
out("favicon-96.png", png(96));
out("apple-touch-icon.png", png(180));
out("icon-192.png", png(192));
out("icon-512.png", png(512));
