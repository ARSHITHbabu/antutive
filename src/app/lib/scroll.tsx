import { useEffect, useRef, useState } from "react";

/* "?reveal=all" forces every reveal on immediately — used for full-page captures and print */
const forceReveal = typeof window !== "undefined" && window.location.search.includes("reveal=all");

export function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(forceReveal);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fallback: never leave content invisible when IntersectionObserver is absent
    if (typeof IntersectionObserver === "undefined") {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, on };
}

export type Variant = "up" | "left" | "right" | "scale" | "clip" | "flip";

const hidden = (v: Variant): React.CSSProperties => ({
  up:    { opacity: 0, transform: "translateY(36px)" },
  left:  { opacity: 0, transform: "translateX(-48px)" },
  right: { opacity: 0, transform: "translateX(48px)" },
  scale: { opacity: 0, transform: "scale(0.88)" },
  clip:  { opacity: 0, clipPath: "inset(0 0 100% 0 round 8px)" },
  flip:  { opacity: 0, transform: "perspective(700px) rotateX(20deg)", transformOrigin: "top center" },
}[v]);

const shown = (v: Variant): React.CSSProperties => ({
  up:    { opacity: 1, transform: "translateY(0)" },
  left:  { opacity: 1, transform: "translateX(0)" },
  right: { opacity: 1, transform: "translateX(0)" },
  scale: { opacity: 1, transform: "scale(1)" },
  clip:  { opacity: 1, clipPath: "inset(0 0 0% 0 round 8px)" },
  flip:  { opacity: 1, transform: "perspective(700px) rotateX(0deg)", transformOrigin: "top center" },
}[v]);

export function Reveal({
  children, variant = "up", delay = 0, className = "",
}: {
  children: React.ReactNode; variant?: Variant; delay?: number; className?: string;
}) {
  const { ref, on } = useVisible();
  return (
    <div ref={ref} className={className}
      style={{ ...(on ? shown(variant) : hidden(variant)),
        transition: `all 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "transform,opacity" }}>
      {children}
    </div>
  );
}
