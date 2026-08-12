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

