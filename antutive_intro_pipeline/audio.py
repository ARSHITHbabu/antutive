#!/usr/bin/env python3
"""Optional audio bed: one very soft mechanical click per character,
plus a single gentle confirmation click as the tagline resolves."""
import numpy as np
from scipy import signal
import wave

SR = 48000
DUR = 4.00
rng = np.random.default_rng(7)


def click(peak_db=-26.0, decay=0.0075, lo=1800, hi=6500, thump=170, thump_db=-38.0):
    n = int(SR * 0.06)
    t = np.arange(n) / SR
    noise = rng.standard_normal(n)
    b, a = signal.butter(4, [lo / (SR / 2), hi / (SR / 2)], btype='band')
    body = signal.lfilter(b, a, noise) * np.exp(-t / decay)
    lowb, lowa = signal.butter(2, 400 / (SR / 2), btype='low')
    low = signal.lfilter(lowb, lowa, noise) * np.exp(-t / 0.018)
    low *= 10 ** (thump_db / 20) / (np.abs(low).max() + 1e-9)
    body *= 10 ** (peak_db / 20) / (np.abs(body).max() + 1e-9)
    sig = body + low
    sig *= np.minimum(1.0, t / 0.0004)          # de-click the attack
    return sig


KEY_TIMES = [0.450 + i * 0.140 for i in range(8)]
CONFIRM_TIME = 2.600

track = np.zeros(int(SR * (DUR + 0.2)))
for i, kt in enumerate(KEY_TIMES):
    c = click(peak_db=-26.0 + rng.uniform(-1.5, 1.5),
              decay=0.0075 * rng.uniform(0.88, 1.12),
              lo=1800 * rng.uniform(0.92, 1.08),
              hi=6500 * rng.uniform(0.92, 1.08))
    s = int(kt * SR)
    track[s:s + len(c)] += c

c = click(peak_db=-30.0, decay=0.014, lo=900, hi=3200, thump_db=-34.0)
s = int(CONFIRM_TIME * SR)
track[s:s + len(c)] += c

track = track[:int(SR * DUR)]
track = np.clip(track, -1, 1)
stereo = np.stack([track, track], 1)
pcm = (stereo * 32767).astype('<i2')

with wave.open('/home/claude/build/clicks.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm.tobytes())

print(f'clicks.wav  peak {20*np.log10(np.abs(track).max()):.1f} dBFS  '
      f'{len(KEY_TIMES)} key clicks + 1 confirmation')
