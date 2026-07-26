#!/usr/bin/env bash
set -e
B=/home/claude/build
O=/mnt/user-data/outputs
mkdir -p "$O"
L="$B/frames_1080p/f%04d.png"
S="$B/frames_social/f%04d.png"

# 1. 1920x1080 H.264 delivery master, composited over white
ffmpeg -y -loglevel error -framerate 60 -i "$L" \
  -filter_complex "color=c=white:s=1920x1080:r=60[bg];[bg][0:v]overlay=shortest=1,format=yuv420p" \
  -c:v libx264 -preset veryslow -crf 16 -profile:v high -level 4.2 \
  -x264-params "keyint=60:min-keyint=1" -movflags +faststart -r 60 \
  "$O/antutive_intro_1920x1080_h264.mp4"

# 2. 1920x1080 ProRes 4444 master with alpha
ffmpeg -y -loglevel error -framerate 60 -i "$L" \
  -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -alpha_bits 16 \
  -vendor apl0 -qscale:v 5 -r 60 \
  "$O/antutive_intro_1920x1080_prores4444_alpha.mov"

# 3. 1080x1920 social
ffmpeg -y -loglevel error -framerate 60 -i "$S" \
  -filter_complex "color=c=white:s=1080x1920:r=60[bg];[bg][0:v]overlay=shortest=1,format=yuv420p" \
  -c:v libx264 -preset veryslow -crf 16 -profile:v high -level 4.2 \
  -movflags +faststart -r 60 \
  "$O/antutive_intro_1080x1920_social.mp4"

# 4. Transparent web version (VP9 + alpha)
ffmpeg -y -loglevel error -framerate 60 -i "$L" \
  -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 22 -row-mt 1 -r 60 \
  "$O/antutive_intro_1920x1080_transparent.webm"

# 5. Optional: 1920x1080 with the soft keystroke audio bed
ffmpeg -y -loglevel error -framerate 60 -i "$L" -i "$B/clicks.wav" \
  -filter_complex "color=c=white:s=1920x1080:r=60[bg];[bg][0:v]overlay=shortest=1,format=yuv420p" \
  -c:v libx264 -preset veryslow -crf 16 -profile:v high -level 4.2 \
  -c:a aac -b:a 192k -movflags +faststart -r 60 -shortest \
  "$O/antutive_intro_1920x1080_with_audio.mp4"

# 6. Still of the final lockup
ffmpeg -y -loglevel error -i "$B/frames_1080p/f0239.png" \
  -filter_complex "color=c=white:s=1920x1080[bg];[bg][0:v]overlay" \
  -frames:v 1 -update 1 "$O/antutive_final_lockup_1920x1080.png"

ls -la "$O"
