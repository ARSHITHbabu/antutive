# Antutive Logo Intro — Delivery Notes

Built from `full_logo.png`. No font substitution: the supplied artwork was traced to
vector and split into eleven independently animated layers (arrow, eight letters,
cursor rectangle, tagline). Kerning, letterforms, and colours are the brand originals.

Brand blue sampled from artwork: **#7E93C8** · letters **#000000** · tagline **#2B2B2D**

---

## Final timing sheet (4.000 s · 60 fps · 240 frames)

| Time | Event |
|---|---|
| 0.000 – 0.180 | Arrow fades in — 180 ms, ease-out cubic |
| 0.200 | Cursor appears in the first character slot |
| 0.200 – 0.325 | Cursor on |
| 0.325 – 0.450 | Cursor off — one blink |
| 0.450 – 1.570 | Typing: 8 letters at 140 ms intervals; cursor glides 90 ms per keystroke, ease-in-out |
| 1.570 – 1.820 | Cursor off |
| 1.820 – 2.070 | Cursor on |
| 2.070 – 2.320 | Cursor off — two blinks complete |
| 2.320 → end | Cursor permanently on; now the logo's rectangle |
| 2.600 – 2.880 | Tagline fades in — 280 ms, ease-out, opacity only |
| 2.880 – 4.000 | Hold. Nothing moves. |

Cursor travel path (source units): 38.75 → 81.50 → 126.25 → 167.62 → 211.00 →
252.50 → 266.00 → 306.38 → **351.25** (the rectangle's exact position in the
finished lockup). The cursor occupies the slot of the character about to be typed,
so each new letter is revealed from beneath the block as it slides right — terminal
behaviour, no jump, no scale, no stretch.

Blink transitions carry a 75 ms eased edge rather than a hard cut. At 60 fps a hard
cut strobes; the soft edge reads as a blink but sits better with the "premium,
intentional" direction. Set `BLINK_FADE = 0.0` in `render.py` for hard cuts.

---

## Five points where the brief was self-contradictory

1. **Tagline copy.** The artwork reads *"AI Solutions, Human Impact"*; the spec asks
   for *"AI Solutions, Platform & Impact."* I used the artwork, since the spec also
   requires the original vector artwork be preserved. Confirm which is correct — if
   it's the new copy, I need the updated logo file or the tagline typeface.

2. **Letter case.** The spec's ASCII mock-up shows `>ANTUTIVE`, the logo is lowercase
   `antutive`. Artwork wins.

3. **Typing window vs. letter interval.** 0.45–2.20 s is 1.75 s, but 8 letters at
   130–140 ms is 1.12 s. I held the letter interval (140 ms) because that governs the
   feel, and let the two rest-blinks fill the remainder — typing plus settle lands at
   2.32 s, leaving a clean beat before the tagline at 2.60 s. Everything downstream
   hits its marked time. If you want typing to genuinely run to 2.20 s, the interval
   must go to ~218 ms, which reads noticeably slower.

4. **Opening blink.** "Blink once, 250 ms on / 250 ms off" is 500 ms inside a 250 ms
   window. Compressed to 125/125 to preserve the 0.45 s typing start.

5. **Blinking during typing.** The cursor stays solid through the type phase. At a
   140 ms interval a blink is a ~7 Hz strobe, which fights every other instruction in
   the brief. Solid-while-typing is also what real terminals do. Blinks are intact
   before and after.

---

## Deliverables

| File | Notes |
|---|---|
| `antutive_intro_1920x1080_h264.mp4` | Primary delivery. CRF 16, white background |
| `antutive_intro_1920x1080_prores4444_alpha.mov` | Master. ProRes 4444, 12-bit, straight alpha |
| `antutive_intro_1080x1920_social.mp4` | Vertical social cut |
| `antutive_intro_1920x1080_transparent.webm` | VP9 + alpha, for web overlay |
| `antutive_intro_1920x1080_with_audio.mp4` | Optional audio: 8 keystroke clicks + one confirmation click at 2.60 s, peak −24.7 dBFS |
| `antutive_final_lockup_1920x1080.png` | Final frame still |
| `antutive_logo_vector_layers.zip` | 11 separated SVG layers + one combined layered SVG for After Effects / Figma |
| `antutive_intro_pipeline.zip` | Build scripts, for revisions |

Loop-safe: first and last frames differ (empty vs. full lockup), so this is a one-shot
sting, not a loop. If a loop is needed, say the word and I'll add a hold-and-reset tail.

## Re-rendering

```
python3 vectorize.py            # artwork -> vector layers
python3 render.py --preset landscape
python3 render.py --preset social
python3 audio.py
bash encode.sh
```

All timing lives in the constants block at the top of `render.py`.
