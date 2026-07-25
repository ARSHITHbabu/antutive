/* Shared decorative background elements. All are aria-hidden and pointer-events:none;
   they add atmosphere without touching layout or accessibility. */

export function Noise() {
  return <div className="noise-overlay" aria-hidden="true" />;
}

export function DotMatrix({ style }: { style?: React.CSSProperties }) {
  return <div className="dot-matrix" aria-hidden="true" style={style} />;
}

export function RingDecor({ size = 320, spin = false, style }: { size?: number; spin?: boolean; style?: React.CSSProperties }) {
  return <div className={`ring-decor ${spin ? "ring-decor--spin" : ""}`} aria-hidden="true" style={{ width: size, height: size, ...style }} />;
}

export function AuroraOrb({ size = 340, color = "rgba(124,146,199,0.16)", delay = 0, style }: { size?: number; color?: string; delay?: number; style?: React.CSSProperties }) {
  return (
    <div className="aurora-orb" aria-hidden="true"
      style={{ width: size, height: size, background: `radial-gradient(circle, ${color}, transparent 70%)`, animationDelay: `${delay}s`, ...style }} />
  );
}

export function HatchAccent({ style }: { style?: React.CSSProperties }) {
  return <div className="hatch-accent" aria-hidden="true" style={{ width: 260, height: 180, ...style }} />;
}

/* Smooth curve between a light section and whatever follows.
   `fill` is the color of the section ABOVE the divider. */
export function WaveDivider({ fill = "#f8fafc", flip = false }: { fill?: string; flip?: boolean }) {
  return (
    <svg className="wave-divider" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}>
      <path d="M0,0 L0,34 C240,64 480,64 720,44 C960,24 1200,24 1440,44 L1440,0 Z" fill={fill} />
    </svg>
  );
}
