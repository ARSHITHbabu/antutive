#!/usr/bin/env python3
"""Split full_logo.png into individual vector letter layers (SVG) sharing one coordinate space."""
import os, subprocess, numpy as np
from PIL import Image

SRC = '/mnt/user-data/uploads/full_logo.png'
OUT = '/home/claude/build/layers'
os.makedirs(OUT, exist_ok=True)

UP = 8  # upscale before tracing

im = Image.open(SRC).convert('RGBA')
W, H = im.size
alpha = np.array(im)[..., 3].astype(np.float32) / 255.0

BLUE = '#7E93C8'
BLACK = '#000000'
GREY = '#2B2B2D'

# (name, x0, x1, y0, y1, colour, threshold)
LAYERS = [
    ('00_arrow', 1, 33, 0, 99, BLUE, 0.50),
    ('01_a', 38, 76, 0, 99, BLUE, 0.50),
    ('02_n', 81, 123, 0, 99, BLUE, 0.50),
    ('03_t', 126, 162, 0, 99, BLUE, 0.50),
    ('04_u', 167, 205, 0, 99, BLACK, 0.50),
    ('05_t', 210, 247, 0, 99, BLACK, 0.50),
    ('06_i', 252, 260, 0, 99, BLACK, 0.50),
    ('07_v', 265, 302, 0, 99, BLACK, 0.50),
    ('08_e', 306, 345, 0, 99, BLACK, 0.50),
    ('09_cursor', 351, 386, 0, 99, BLUE, 0.50),
    ('10_tagline', 0, 386, 100, 122, GREY, 0.42),
]

meta = {}
for name, x0, x1, y0, y1, colour, thr in LAYERS:
    m = np.zeros_like(alpha)
    m[y0:y1 + 1, x0:x1 + 1] = alpha[y0:y1 + 1, x0:x1 + 1]

    big = Image.fromarray((m * 255).astype(np.uint8), 'L').resize(
        (W * UP, H * UP), Image.LANCZOS)
    bw = (np.array(big).astype(np.float32) / 255.0 >= thr)

    pbm = f'{OUT}/{name}.pbm'
    Image.fromarray((~bw).astype(np.uint8) * 255, 'L').convert('1').save(pbm)

    svg = f'{OUT}/{name}.svg'
    subprocess.run(['potrace', '-s', '-o', svg, pbm,
                    '-x', str(1.0 / UP), '-a', '1.0', '-O', '0.2',
                    '-u', '20', '--flat'], check=True)

    # recolour + normalise the document to the shared 387x123 space
    s = open(svg).read()
    s = s.replace('fill="#000000"', f'fill="{colour}"')
    open(svg, 'w').write(s)

    ys, xs = np.where(bw)
    meta[name] = dict(colour=colour,
                      bbox=[xs.min() / UP, ys.min() / UP, xs.max() / UP, ys.max() / UP])
    print(f'{name:12s} {colour}  bbox x[{xs.min()/UP:7.2f},{xs.max()/UP:7.2f}] '
          f'y[{ys.min()/UP:6.2f},{ys.max()/UP:6.2f}]  {os.path.getsize(svg)/1024:5.1f} KB')

print('\ncanvas', W, H)
