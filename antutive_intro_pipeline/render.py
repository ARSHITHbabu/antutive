#!/usr/bin/env python3
"""Antutive logo intro — frame renderer.

Composites the traced vector letter layers according to the production timeline.
Outputs RGBA PNG frames (transparent background) ready for encoding.
"""
import os, re, io, sys, math, argparse
import numpy as np
from PIL import Image
import cairosvg

LAYER_DIR = '/home/claude/build/layers'
SRC_W, SRC_H = 387.0, 123.0
U = 8.0  # potrace SVG units per source pixel

# ---------------------------------------------------------------- timeline ---
FPS = 60
DURATION = 4.00

ARROW_FADE_END = 0.18          # arrow fades in 0.00 -> 0.18, ease out
CURSOR_IN = 0.20               # cursor appears
# cursor visibility segments: (start, end, opacity)
#  one blink before typing | solid while typing | blink twice | permanent on
CURSOR_SEGMENTS = [
    (0.000, 0.200, 0.0),
    (0.200, 0.325, 1.0),   # appears, on
    (0.325, 0.450, 0.0),   # blink once
    (0.450, 1.570, 1.0),   # solid through typing
    (1.570, 1.820, 0.0),
    (1.820, 2.070, 1.0),   # blink twice at rest
    (2.070, 2.320, 0.0),
    (2.320, 9.999, 1.0),   # permanent - now part of the lockup
]

TYPE_START = 0.45
LETTER_INTERVAL = 0.140        # spec: 130-140 ms
GLIDE = 0.090                  # cursor travel per keystroke

TAGLINE_IN, TAGLINE_OUT = 2.60, 2.88               # 280 ms fade, ease out
BLINK_FADE = 0.075                                 # soft edge on blink transitions

# cursor slot = x position of the character about to be typed; final slot = the
# rectangle's true position in the finished lockup.
SLOTS = [38.75, 81.50, 126.25, 167.62, 211.00, 252.50, 266.00, 306.38, 351.25]
LETTERS = ['01_a', '02_n', '03_t', '04_u', '05_t', '06_i', '07_v', '08_e']


def ease_out(t):
    t = max(0.0, min(1.0, t))
    return 1 - (1 - t) ** 3


def ease_in_out(t):
    t = max(0.0, min(1.0, t))
    return 4 * t ** 3 if t < 0.5 else 1 - (-2 * t + 2) ** 3 / 2


# ------------------------------------------------------------- rasterising ---
def inner(path):
    s = open(path).read()
    return re.search(r'(<g transform=.*?</g>)', s, re.S).group(1)


def raster(body, vb, px_w, px_h, tx=0.0):
    """Rasterise SVG body over source-space viewBox vb=(x,y,w,h) at px_w x px_h."""
    doc = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{px_w}" height="{px_h}" '
           f'viewBox="{vb[0]*U} {vb[1]*U} {vb[2]*U} {vb[3]*U}">'
           f'<g transform="translate({tx*U},0)">{body}</g></svg>')
    png = cairosvg.svg2png(bytestring=doc.encode(), output_width=px_w, output_height=px_h)
    return np.asarray(Image.open(io.BytesIO(png)).convert('RGBA')).astype(np.float32) / 255.0


def over(dst, src):
    sa = src[..., 3:4]
    dst[..., :3] = src[..., :3] * sa + dst[..., :3] * dst[..., 3:4] * (1 - sa)
    dst[..., 3:4] = sa + dst[..., 3:4] * (1 - sa)
    nz = dst[..., 3:4] > 1e-6
    dst[..., :3] = np.where(nz, dst[..., :3] / np.where(nz, dst[..., 3:4], 1), 0)
    return dst


# -------------------------------------------------------------- animation ----
def blink_opacity(t):
    """Cursor opacity, with a soft 75 ms edge on every transition."""
    h = BLINK_FADE / 2
    val = CURSOR_SEGMENTS[-1][2]
    for a, b, v in CURSOR_SEGMENTS:
        if a <= t < b:
            val = v
            break
    for i in range(1, len(CURSOR_SEGMENTS)):
        b = CURSOR_SEGMENTS[i][0]
        if abs(t - b) < h:
            prev, nxt = CURSOR_SEGMENTS[i - 1][2], CURSOR_SEGMENTS[i][2]
            return prev + (nxt - prev) * ease_in_out((t - (b - h)) / (2 * h))
    return val


def cursor_x(t):
    """Cursor slot with eased glide after each keystroke."""
    if t < TYPE_START:
        return SLOTS[0]
    k = int((t - TYPE_START) / LETTER_INTERVAL + 1e-6)
    k = min(k, len(LETTERS) - 1)
    key_t = TYPE_START + k * LETTER_INTERVAL
    p = ease_in_out((t - key_t) / GLIDE)
    return SLOTS[k] + (SLOTS[k + 1] - SLOTS[k]) * p


def letters_visible(t):
    if t < TYPE_START:
        return 0
    return min(len(LETTERS), int((t - TYPE_START) / LETTER_INTERVAL + 1e-6) + 1)


# ------------------------------------------------------------------ build ----
def build(out_dir, canvas_w, canvas_h, logo_px_w, label):
    os.makedirs(out_dir, exist_ok=True)

    art = (1.75, 3.25, 386.88 - 1.75, 121.50 - 3.25)       # full artwork bbox
    scale = logo_px_w / (386.88 - 1.75)
    dw, dh = int(round(art[2] * scale)), int(round(art[3] * scale))
    ox, oy = (canvas_w - dw) // 2, (canvas_h - dh) // 2

    # static layers, rendered once at the destination size
    static = {}
    for name in ['00_arrow'] + LETTERS + ['10_tagline']:
        static[name] = raster(inner(f'{LAYER_DIR}/{name}.svg'), art, dw, dh)

    # cursor: tight crop, 16 sub-pixel phases for perfectly smooth travel
    cx0, cy0, cx1, cy1 = 351.25, 3.25, 386.88, 93.62
    pad = 1.0
    cvb = (cx0 - pad, cy0 - pad, (cx1 - cx0) + 2 * pad, (cy1 - cy0) + 2 * pad)
    cw, ch = int(round(cvb[2] * scale)), int(round(cvb[3] * scale))
    PHASES = 16
    cbody = inner(f'{LAYER_DIR}/09_cursor.svg')
    phases = [raster(cbody, cvb, cw, ch, tx=(i / PHASES) / scale) for i in range(PHASES)]

    n_frames = int(round(DURATION * FPS))
    for f in range(n_frames):
        t = f / FPS
        canvas = np.zeros((canvas_h, canvas_w, 4), np.float32)
        layer = np.zeros((dh, dw, 4), np.float32)

        a = ease_out(t / ARROW_FADE_END) if t < ARROW_FADE_END else 1.0
        if a > 0:
            s = static['00_arrow'].copy(); s[..., 3] *= a; over(layer, s)

        for i in range(letters_visible(t)):
            over(layer, static[LETTERS[i]])

        tg = ease_out((t - TAGLINE_IN) / (TAGLINE_OUT - TAGLINE_IN)) if t >= TAGLINE_IN else 0.0
        if tg > 0:
            s = static['10_tagline'].copy(); s[..., 3] *= min(tg, 1.0); over(layer, s)

        canvas[oy:oy + dh, ox:ox + dw] = layer

        co = blink_opacity(t)
        if co > 0.001:
            px = ox + (cursor_x(t) - pad - art[0]) * scale
            py = oy + (cy0 - pad - art[1]) * scale
            ix, iy = int(math.floor(px)), int(round(py))
            ph = phases[int(round((px - ix) * PHASES)) % PHASES]
            if int(round((px - ix) * PHASES)) == PHASES:
                ix += 1
            sub = ph.copy(); sub[..., 3] *= co
            x0, y0 = max(ix, 0), max(iy, 0)
            x1, y1 = min(ix + cw, canvas_w), min(iy + ch, canvas_h)
            if x1 > x0 and y1 > y0:
                region = canvas[y0:y1, x0:x1].copy()
                over(region, sub[y0 - iy:y1 - iy, x0 - ix:x1 - ix])
                canvas[y0:y1, x0:x1] = region

        img = (np.clip(canvas, 0, 1) * 255).astype(np.uint8)
        Image.fromarray(img, 'RGBA').save(f'{out_dir}/f{f:04d}.png', compress_level=1)
        if f % 30 == 0:
            print(f'  {label} frame {f}/{n_frames}  t={t:.3f}s', flush=True)
    print(f'  {label}: {n_frames} frames -> {out_dir}')


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--preset', default='landscape')
    a = ap.parse_args()
    if a.preset == 'landscape':
        build('/home/claude/build/frames_1080p', 1920, 1080, 1000, '1920x1080')
    else:
        build('/home/claude/build/frames_social', 1080, 1920, 820, '1080x1920')
