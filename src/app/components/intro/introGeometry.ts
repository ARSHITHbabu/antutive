/**
 * Geometry and timing for the Antutive intro animation.
 *
 * All coordinates are in the pixel grid of the official full logo
 * (387 × 123) — the same viewBox used by `antutive-logo-layered.svg`, which
 * was traced from the original artwork (never re-typeset; see
 * antutive_intro_pipeline/DELIVERY_NOTES.md). The intro renders that SVG's
 * layers directly, so letterforms, kerning and colours are the brand
 * originals and stay crisp at any resolution.
 *
 * Glyph boxes were measured programmatically from the artwork
 * (column/row ink profiles); re-derive them if the logo ever changes.
 */

export interface GlyphBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Design-space canvas = the full logo's viewBox. */
export const STAGE = { w: 387, h: 123 } as const;

/**
 * The layered SVG wraps all layers in a `scale(0.125)` group (the trace was
 * done at 8× resolution), so a transform applied to a layer is expressed in
 * pre-scale units: multiply design-space pixels by this factor.
 */
export const SVG_UNIT = 8;

/** Bounding boxes of each layer, in design space. */
export const GLYPHS = {
  arrow:   { x: 1,   y: 22,  w: 33,  h: 55 },
  a:       { x: 38,  y: 37,  w: 39,  h: 40 },
  n:       { x: 81,  y: 37,  w: 43,  h: 40 },
  t1:      { x: 125, y: 25,  w: 38,  h: 52 },
  u:       { x: 167, y: 37,  w: 39,  h: 40 },
  t2:      { x: 210, y: 25,  w: 38,  h: 52 },
  i:       { x: 252, y: 21,  w: 9,   h: 56 },
  v:       { x: 265, y: 37,  w: 39,  h: 40 },
  e:       { x: 305, y: 37,  w: 42,  h: 40 },
  rect:    { x: 351, y: 3,   w: 36,  h: 91 },
  tagline: { x: 73,  y: 104, w: 236, h: 18 },
} as const satisfies Record<string, GlyphBox>;

/** The word typed out, in order. Keys into GLYPHS / `#letter_*` SVG ids. */
export const LETTERS = ["a", "n", "t1", "u", "t2", "i", "v", "e"] as const;
export type LetterKey = (typeof LETTERS)[number];

/**
 * Cursor "slots": left edge of the cell the cursor occupies while waiting
 * for the next character — each letter's own x, and finally the official
 * resting position of the blue rectangle (351). The official inter-glyph
 * gap (≈4 px) is baked into these values, so the cursor always sits exactly
 * where the finished logo puts the rectangle.
 *
 * The short logo's rectangle maps to x ≈ 80.7 in this grid (measured from
 * `antutive-logo-mark.png`) — the "n" slot. Backspacing down to "a"
 * therefore leaves the cursor in the short logo's exact layout.
 */
export const CURSOR_SLOTS = [
  GLYPHS.a.x,   // before "a"  (right after the arrow — "> █")
  GLYPHS.n.x,
  GLYPHS.t1.x,
  GLYPHS.u.x,
  GLYPHS.t2.x,
  GLYPHS.i.x,
  GLYPHS.v.x,
  GLYPHS.e.x,
  GLYPHS.rect.x, // after "e" — the rectangle's official logo position
] as const;

/**
 * How far the whole composition must drift so the ending short logo
 * (arrow + a + rectangle at the "n" slot) sits optically centered where the
 * full logo was. Applied as one eased glide across the backspace phase.
 */
export const RECENTER = {
  x: STAGE.w / 2 - (GLYPHS.arrow.x + GLYPHS.n.x + GLYPHS.rect.w) / 2,
  y: STAGE.h / 2 - (GLYPHS.rect.y + GLYPHS.rect.h / 2),
} as const;

/** Official short-logo "a" colour — the mark's "a" is black, not blue. */
export const MARK_A_FILL = "#000000";

/* ------------------------------------------------------------------ */
/* Timing                                                              */
/* ------------------------------------------------------------------ */

/**
 * Slightly uneven per-keystroke delays (seconds) so the typing feels human,
 * never metronomic. Deterministic on purpose — the intro should feel
 * identical (and equally polished) on every visit.
 */
export const TYPE_DELAYS = [0.148, 0.126, 0.142, 0.131, 0.152, 0.128, 0.139, 0.133] as const;

/** Per-backspace delays (seconds), same idea. 7 deletions: e → n. */
export const DELETE_DELAYS = [0.104, 0.096, 0.108, 0.094, 0.101, 0.098, 0.106] as const;

/**
 * One cursor blink: `off` is how long it stays hidden, `period` the full
 * cycle. `edge` softens each transition — at 60 fps a hard cut strobes; a
 * 75 ms eased edge still reads as a blink but sits better with the
 * premium direction.
 */
export const BLINK = { off: 0.16, period: 0.38, edge: 0.075 } as const;
