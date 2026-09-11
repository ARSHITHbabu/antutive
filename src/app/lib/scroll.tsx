import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ── Scroll reveal, progressively enhanced ──────────────────────────────
   Every reveal target renders in its SHOWN state by default. That is what
   the build-time prerender writes to disk and what the browser paints
   before (or without) JavaScript, so no page content ever ships hidden.

   After the client commits, useVisible arms eligible elements: it switches
   them to the hidden state in a layout effect (before the next paint) and
   hands them to an IntersectionObserver that reveals them when they scroll
   into view. Arming is skipped when it would either be pointless or
   harmful:

   - no IntersectionObserver, or "?reveal=all" (debug/print utility);
   - prefers-reduced-motion: content simply stays visible;
   - during hydration of prerendered HTML, an element the browser has
     already painted on screen keeps its shown state so it never flashes
     off and back on. Elements below the fold, elements mounted by client-
     side navigation, and everything behind the intro overlay (the page is
     invisible then) still get the full entrance animation.

   The [data-reveal-arming] attribute suppresses transitions for the single
   frame in which the hidden state is applied (see theme.css), so arming is
   instant instead of a visible fade-out. */

const isBrowser = typeof window !== "undefined";

/* "?reveal=all" keeps every reveal on — full-page captures and print. */
const forceReveal = isBrowser && window.location.search.includes("reveal=all");

/* True when the client boots on top of prerendered markup the browser has
   already painted (src/main.tsx hydrates in that case). Evaluated at module
   load, i.e. before React renders anything. */
const hydratingPaintedHtml =
  isBrowser && !!document.getElementById("root")?.hasChildNodes();

/* Flips after the first client commit; later mounts are client-side
   navigations whose markup has never been painted, so they can always be
   armed without any flash. */
let firstCommitDone = false;

/* useLayoutEffect warns during server rendering; the server never arms. */
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

function canAnimate(): boolean {
  if (!isBrowser || forceReveal) return false;
  if (typeof IntersectionObserver === "undefined") return false;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return false;
  return true;
}

/* Has this element already been painted inside the viewport? While the
   intro gate hides the app root nothing has been painted yet. */
function paintedInViewport(el: Element): boolean {
  if (document.documentElement.hasAttribute("data-intro-pending")) return false;
  const r = el.getBoundingClientRect();
  return r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth;
}

export function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  /* Shown by default: matches the prerendered HTML (no hydration mismatch)
     and is the final state for no-JS, reduced-motion and reveal=all. */
  const [on, setOn] = useState(true);
  const armed = useRef(false);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || !canAnimate()) return;
    if (hydratingPaintedHtml && !firstCommitDone && paintedInViewport(el)) return;
    el.setAttribute("data-reveal-arming", "");
    armed.current = true;
    setOn(false); // flushed synchronously, before the browser paints
  }, []);

  useEffect(() => {
    firstCommitDone = true;
    const el = ref.current;
    if (!el || !armed.current) return;

    /* Lift the no-transition guard once the hidden state has been painted
       (two frames guarantees at least one paint in between). */
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => el.removeAttribute("data-reveal-arming"));
    });

    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      io.disconnect();
    };
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
