/**
 * Antutive brand intro — a terminal-style reveal of the official logo.
 *
 * Sequence: the blue arrow fades in, the blue rectangle appears as a typing
 * cursor, "antutive" is typed out in the official letterforms, the tagline
 * fades in, then Backspace shrinks the wordmark while the composition
 * glides to center, ending on the official short mark (arrow + black "a" +
 * rectangle) before the overlay dissolves into the page.
 *
 * Rendering is the traced vector artwork (`antutive-logo-layered.svg`,
 * separated layers of the original logo — never re-typeset), inlined so
 * every frame is resolution independent and razor sharp on any display.
 * All motion is opacity + translate on SVG groups, driven by a single GSAP
 * timeline. Plays once per browser session (see `shouldPlayIntro`).
 */
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import logoLayers from "../../../assets/antutive-logo-layered.svg?raw";
import {
  STAGE,
  SVG_UNIT,
  GLYPHS,
  LETTERS,
  CURSOR_SLOTS,
  RECENTER,
  MARK_A_FILL,
  TYPE_DELAYS,
  DELETE_DELAYS,
  BLINK,
} from "./introGeometry";

const SESSION_KEY = "antutive.intro.played";

/** True when the intro should run: first load this session, motion allowed. */
export function shouldPlayIntro(): boolean {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return sessionStorage.getItem(SESSION_KEY) === null;
  } catch {
    return false;
  }
}

interface Props {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const shifterRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // useLayoutEffect: initial layer states must be applied before first paint
  // so the fully-assembled logo never flashes.
  useLayoutEffect(() => {
    const overlay = overlayRef.current!;
    const stage = stageRef.current!;
    const shifter = shifterRef.current!;

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* private mode — intro simply replays next load */
    }

    // Freeze the page behind the overlay so nothing can scroll mid-intro.
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    // The inline gate script in index.html hid the prerendered page so it
    // could not flash before the intro; the opaque overlay now covers the
    // viewport, so reveal the page beneath it.
    document.documentElement.removeAttribute("data-intro-pending");

    // Fit the 387 × 123 design grid to the viewport with a single transform.
    const fit = () => {
      const target = Math.min(372, window.innerWidth * 0.78);
      gsap.set(stage, { xPercent: -50, yPercent: -50, scale: target / STAGE.w });
    };
    fit();
    window.addEventListener("resize", fit);

    const q = gsap.utils.selector(stage);
    const cursor = q<SVGGElement>("#cursor_rect");
    const arrow = q<SVGGElement>("#arrow");
    const tagline = q<SVGGElement>("#tagline");
    const letter = (k: string) => q<SVGGElement>(`#letter_${k}`);

    /** Cursor x for a slot, as a translate from its resting position (351).
     *  Layer transforms live inside the SVG's scale(0.125) wrapper, hence
     *  SVG_UNIT. */
    const slotX = (slot: number) => SVG_UNIT * (slot - GLYPHS.rect.x);

    const ctx = gsap.context(() => {
      gsap.set([arrow, cursor, tagline, ...LETTERS.map(letter)], { opacity: 0 });
      gsap.set(cursor, { x: slotX(CURSOR_SLOTS[0]) });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => onCompleteRef.current(),
      });

      // Soft-edged blink — a hard cut strobes at 60 fps.
      const blink = (at: number, times: number) => {
        let t = at;
        for (let n = 0; n < times; n++) {
          tl.to(cursor, { opacity: 0, duration: BLINK.edge, ease: "power1.inOut" }, t);
          tl.to(cursor, { opacity: 1, duration: BLINK.edge, ease: "power1.inOut" }, t + BLINK.off);
          t += BLINK.period;
        }
        return t;
      };

      // Phase 1 — arrow fades in on white. Opacity only.
      tl.to(arrow, { opacity: 1, duration: 0.18 }, 0);

      // Phase 2 — the rectangle appears beside it as a cursor and blinks once.
      tl.to(cursor, { opacity: 1, duration: 0.06 }, 0.2);
      let t = blink(0.34, 1);

      // Phase 3 — type "antutive". Each keystroke reveals the official glyph
      // beneath the cursor as it glides into the next slot. A live cursor
      // stays solid while keys are pressed, so no blinking here.
      t += 0.1;
      LETTERS.forEach((key, i) => {
        t += TYPE_DELAYS[i];
        tl.to(letter(key), { opacity: 1, duration: 0.05 }, t);
        tl.to(cursor, { x: slotX(CURSOR_SLOTS[i + 1]), duration: 0.09 }, t);
      });

      // Phase 4 — cursor rests in the rectangle's official logo position;
      // blink twice.
      t = blink(t + 0.28, 2);

      // Phase 5 — tagline fades in. Opacity only, no movement.
      tl.to(tagline, { opacity: 1, duration: 0.28 }, (t += 0.12));

      // Phase 6 — hold the completed logo. Nothing moves.
      t += 0.28 + 0.5;

      // Phase 7 — Backspace. Letters vanish right-to-left, the cursor slides
      // back one slot per press, the tagline slips away, and the whole
      // composition glides so the surviving short logo ends dead-center.
      tl.to(tagline, { opacity: 0, duration: 0.2 }, t);
      const backspaceTime = DELETE_DELAYS.reduce((a, b) => a + b, 0);
      tl.to(shifter, {
        x: RECENTER.x,
        y: RECENTER.y,
        duration: backspaceTime + 0.3,
        ease: "power2.inOut",
      }, t);
      for (let i = LETTERS.length - 1; i >= 1; i--) {
        t += DELETE_DELAYS[LETTERS.length - 1 - i];
        tl.set(letter(LETTERS[i]), { opacity: 0 }, t);
        tl.to(cursor, { x: slotX(CURSOR_SLOTS[i]), duration: 0.08 }, t);
      }

      // Phase 8 — the cursor now sits exactly where the short logo puts its
      // rectangle, so all that separates this frame from the official mark
      // is the "a": in the short logo it is black. Settle it.
      t += 0.3;
      tl.to(q("#letter_a g[fill]"), { fill: MARK_A_FILL, duration: 0.3, ease: "power1.inOut" }, t);

      // Phase 9 — hold the short logo. Stillness.
      t += 0.3 + 0.45;

      // Phase 10 — the overlay dissolves and the homepage is simply there.
      tl.to(overlay, { opacity: 0, duration: 0.55, ease: "power2.inOut" }, t);
    }, stage);

    return () => {
      window.removeEventListener("resize", fit);
      document.documentElement.style.overflow = prevOverflow;
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#FFFFFF",
        pointerEvents: "auto",
        touchAction: "none",
      }}
    >
      <div
        ref={stageRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: STAGE.w,
          height: STAGE.h,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* The traced vector layers of the official logo, animated in place. */}
        <div
          ref={shifterRef}
          style={{ width: "100%", height: "100%", willChange: "transform" }}
          dangerouslySetInnerHTML={{ __html: logoLayers }}
        />
      </div>
    </div>
  );
}
