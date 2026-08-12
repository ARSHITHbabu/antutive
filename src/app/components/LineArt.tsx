import { useEffect, useId, useRef, useState } from "react";

/*
 * Antutive continuous-line illustration system, v2 — line art with depth.
 *
 * Every scene is one hand-authored stroke that travels left to right and
 * draws the section's signature motif on the way. Depth comes from layered
 * elements, back to front:
 *   washes  — soft blurred color fields (brand blue / violet / warm apricot)
 *   ghost   — faint pencil-guide duplicate of the line
 *   extra   — dotted strokes for what does not exist yet (future, branches)
 *   main    — the continuous ink line, drawn on scroll
 *   accent  — one small warm flourish (heart, sun) the illustrator adds last
 *   halos/nodes/sparks — glow, emphasis dots and drifting particles
 */

type Scene = "company" | "portfolio" | "family" | "intelligence" | "journey" | "contact" | "legal" | "lost";

type LineArtProps = {
  scene: Scene;
  className?: string;
  tone?: "brand" | "light" | "famant";
  animate?: boolean;
  meaningful?: boolean;
};

type SceneLabel = { text: string; x: number; anchor?: "start" | "middle" | "end" };
type Wash = { cx: number; cy: number; rx: number; ry: number; tone: "blue" | "violet" | "warm" };

type SceneDef = {
  viewBox: string;
  /** The single continuous line. */
  d: string;
  /** Dotted companion strokes — future paths, branches, orbits. */
  extra?: string;
  /** One small warm accent stroke, drawn after the main line. */
  accent?: string;
  /** Soft blurred color fields behind the drawing. */
  washes?: Wash[];
  /** [x, y, r?] emphasis dots placed on the line. */
  nodes: Array<[number, number] | [number, number, number]>;
  /** [x, y, r] soft glow circles behind focal points. */
  halos?: Array<[number, number, number]>;
  /** [x, y] drifting particles near the line. */
  sparks?: Array<[number, number]>;
  labels?: SceneLabel[];
  labelY?: number;
  /** Accessible title used when the scene is rendered as meaningful. */
  title?: string;
};

const scenes: Record<Scene, SceneDef> = {
  /* Home hero — a flowing line gathers into an orbit (the company core), then ascends. */
  company: {
    viewBox: "0 0 560 200",
    d: "M18 156 C70 156 84 122 132 122 C176 122 186 152 232 152 C268 152 282 148 302 132 C322 116 330 64 390 64 C414 64 434 84 434 108 C434 132 414 152 390 152 C366 152 346 132 346 108 C346 84 366 64 390 64 C438 40 474 52 542 28",
    extra: "M316 96 C330 150 462 138 466 84",
    washes: [
      { cx: 390, cy: 108, rx: 80, ry: 60, tone: "blue" },
      { cx: 150, cy: 140, rx: 70, ry: 30, tone: "violet" },
    ],
    nodes: [[132, 122], [390, 108], [542, 28]],
    halos: [[390, 108, 20]],
    sparks: [[250, 140], [330, 90], [470, 46]],
  },

  /* Products — the line leaves the Antutive origin, draws the Famant tile, then opens into future loops. */
  portfolio: {
    viewBox: "0 0 560 200",
    d: "M16 130 C24 130 28 130 31 130 C31 114 55 114 55 130 C55 146 31 146 31 130 C60 130 76 128 96 126 C118 124 130 120 142 120 L142 96 C142 82 142 82 156 82 L204 82 C218 82 218 82 218 96 L218 144 C218 158 218 158 204 158 L156 158 C142 158 142 158 142 144 L142 120 C170 104 192 136 218 120 C250 102 260 90 288 90 C314 90 326 106 322 122 C317 142 288 140 288 120 C288 104 306 96 322 100 C356 110 368 130 396 130 C420 130 428 116 448 110 C466 104 478 106 492 104",
    extra: "M430 120 C470 120 480 96 506 88 C520 84 532 84 544 86",
    washes: [
      { cx: 180, cy: 120, rx: 62, ry: 52, tone: "blue" },
      { cx: 470, cy: 100, rx: 60, ry: 36, tone: "warm" },
    ],
    nodes: [[43, 130], [180, 120], [306, 112]],
    halos: [[180, 120, 18]],
    sparks: [[254, 96], [352, 112], [508, 84]],
    labels: [
      { text: "ANTUTIVE", x: 20, anchor: "start" },
      { text: "FAMANT", x: 180, anchor: "middle" },
      { text: "FUTURE", x: 544, anchor: "end" },
    ],
    labelY: 188,
  },

  /* Famant — one line draws the home, becomes a voice waveform, resolves into a confirmed check.
     A warm heart lives inside the house. */
  family: {
    viewBox: "0 0 560 200",
    d: "M16 150 C56 150 76 150 100 150 L100 96 L145 62 L190 96 L190 150 C214 150 226 144 244 136 L262 118 L276 146 L290 108 L304 142 L316 122 C330 106 340 132 358 130 L378 148 L420 96 C448 62 484 94 544 82",
    accent: "M145 132 C126 114 131 94 145 106 C159 94 164 114 145 132",
    washes: [
      { cx: 145, cy: 115, rx: 52, ry: 40, tone: "warm" },
      { cx: 300, cy: 125, rx: 70, ry: 34, tone: "blue" },
    ],
    nodes: [[145, 62], [290, 108, 3.5], [420, 96]],
    halos: [[145, 118, 16]],
    sparks: [[228, 122], [336, 98], [452, 70], [500, 92]],
  },

  /* Technology — the line passes through every stage and ends inside a human confirmation. */
  intelligence: {
    viewBox: "0 0 560 200",
    d: "M14 120 L44 120 L34 111 L44 120 L34 129 L44 120 C50 120 53 120 56 120 C56 106 78 106 78 120 C78 134 56 134 56 120 C56 106 78 106 78 120 C96 120 118 120 138 120 C152 118 154 104 168 104 L198 104 C210 104 210 118 198 118 L168 118 C156 118 156 132 168 132 L198 132 C214 132 222 124 234 120 C254 116 248 90 272 86 C292 82 294 110 274 112 C256 114 260 142 282 140 C302 138 298 112 318 108 C332 105 336 122 348 122 L366 98 L382 126 L398 94 L410 120 C420 136 430 126 444 122 C452 122 460 120 466 118 C466 84 524 84 524 118 C524 152 466 152 466 118 C472 120 478 126 484 132 L514 98",
    washes: [
      { cx: 280, cy: 112, rx: 70, ry: 44, tone: "violet" },
      { cx: 495, cy: 118, rx: 48, ry: 40, tone: "warm" },
    ],
    nodes: [[67, 120, 3.5], [183, 118, 3.5], [286, 112, 3.5], [514, 98]],
    halos: [[286, 112, 18], [495, 118, 22]],
    sparks: [[126, 110], [230, 100], [428, 106]],
    labels: [
      { text: "INPUT", x: 67 },
      { text: "CONTEXT", x: 183 },
      { text: "INTELLIGENCE", x: 286 },
      { text: "ACTION", x: 388 },
      { text: "CONFIRM", x: 495 },
    ],
    labelY: 180,
    title: "One continuous flow from input through context and intelligence to action, ending in human confirmation",
  },

  /* About — a mountain ridge the company line climbs; a dotted path winds to the lit summit. */
  journey: {
    viewBox: "0 0 560 200",
    d: "M16 168 C60 168 74 162 92 152 C116 138 124 112 146 112 C160 112 164 130 178 130 C196 130 216 84 244 84 C260 84 264 104 280 104 C300 104 326 40 366 40 C384 40 390 60 404 60 C424 60 448 100 480 116 C504 128 524 132 544 132",
    extra: "M60 160 C120 150 130 128 180 124 C230 120 224 96 274 92 C310 88 330 64 358 48",
    accent: "M370 16 a8.5 8.5 0 1 1 17 0 a8.5 8.5 0 1 1 -17 0",
    washes: [
      { cx: 375, cy: 34, rx: 44, ry: 30, tone: "warm" },
      { cx: 180, cy: 140, rx: 110, ry: 34, tone: "blue" },
    ],
    nodes: [[146, 112, 3.5], [244, 84, 3.5], [366, 40]],
    halos: [[378, 18, 16]],
    sparks: [[205, 120], [298, 86], [340, 58]],
  },

  /* Contact — two people drawn by the same line, meeting in a warm spark. */
  contact: {
    viewBox: "0 0 560 200",
    d: "M84 42 C106 44 114 62 113 78 C112 88 120 96 122 102 C123 106 117 107 117 110 C117 114 122 115 121 119 C120 124 114 124 112 128 C110 134 104 140 96 144 C90 147 84 152 82 160 C80 172 96 172 116 168 C170 158 190 130 240 130 C268 130 276 152 300 152 C324 152 332 130 360 130 C410 130 430 158 462 166 C476 169 480 164 478 156 C477 150 472 147 466 144 C458 140 452 134 450 128 C448 124 442 124 441 119 C440 115 445 114 445 110 C445 107 439 106 440 102 C442 96 450 88 449 78 C448 62 456 44 478 42",
    accent: "M300 146 C291 137 294 127 300 132 C306 127 309 137 300 146",
    washes: [
      { cx: 100, cy: 90, rx: 52, ry: 56, tone: "violet" },
      { cx: 460, cy: 90, rx: 52, ry: 56, tone: "blue" },
      { cx: 300, cy: 138, rx: 40, ry: 26, tone: "warm" },
    ],
    nodes: [[84, 42, 3.5], [478, 42, 3.5]],
    halos: [[300, 139, 14]],
    sparks: [[210, 134], [390, 134]],
  },

  /* Legal — a quiet wave that simply resolves into a check. */
  legal: {
    viewBox: "0 0 560 120",
    d: "M16 70 C90 70 90 44 160 44 C230 44 230 78 300 78 C360 78 366 52 420 52 C450 52 462 56 474 56 L490 70 L522 32",
    nodes: [[522, 32, 3.5]],
  },

  /* 404 — the line wanders, ties itself in a knot, then points back home. */
  lost: {
    viewBox: "0 0 560 200",
    d: "M16 120 C60 120 70 84 116 84 C160 84 160 140 208 140 C240 140 244 102 266 92 C282 60 336 64 328 96 C321 124 280 116 290 84 C298 58 344 68 336 100 C330 124 298 130 294 108 C296 140 340 150 380 140 C420 130 452 108 496 84 L522 72 L508 62 L522 72 L512 86",
    washes: [{ cx: 310, cy: 96, rx: 60, ry: 44, tone: "blue" }],
    nodes: [[310, 94], [522, 72]],
    halos: [[310, 94, 18]],
    labels: [{ text: "YOU ARE HERE", x: 310 }],
    labelY: 188,
  },
};

export function LineArtScene({ scene, className = "", tone = "brand", animate = true, meaningful = false }: LineArtProps) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [visible, setVisible] = useState(!animate);
  const def = scenes[scene];

  useEffect(() => {
    if (!animate || !ref.current) return;
    // With reduced motion there is nothing to stage — show the finished drawing.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setVisible(true), { threshold: 0.18 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animate]);

  const labelled = meaningful && def.title;

  return (
    <div ref={ref} className={`line-art line-art--${tone} ${visible ? "is-visible" : ""} ${className}`} aria-hidden={meaningful ? undefined : true}>
      <svg viewBox={def.viewBox} role={labelled ? "img" : undefined} aria-labelledby={labelled ? titleId : undefined}>
        {labelled && <title id={titleId}>{def.title}</title>}
        {def.washes?.map((w, index) => (
          <ellipse key={index} className={`line-art__wash line-art__wash--${w.tone}`} cx={w.cx} cy={w.cy} rx={w.rx} ry={w.ry} />
        ))}
        {def.halos?.map(([x, y, r]) => (
          <circle key={`h${x}-${y}`} className="line-art__halo" cx={x} cy={y} r={r} />
        ))}
        <path className="line-art__ghost" d={def.d} />
        {def.extra && <path className="line-art__extra" d={def.extra} />}
        <path className="line-art__path" pathLength="1" d={def.d} />
        {def.accent && <path className="line-art__accent" pathLength="1" d={def.accent} />}
        {def.sparks?.map(([x, y], index) => (
          <circle key={`s${x}-${y}`} className={`line-art__spark line-art__spark--${(index % 4) + 1}`} cx={x} cy={y} r="1.7" />
        ))}
        {def.nodes.map(([x, y, r], index) => (
          <circle key={`${x}-${y}`} className={`line-art__node line-art__node--${index + 1}`} cx={x} cy={y} r={r ?? 4} />
        ))}
        <circle className="line-art__tracer" r="3.5">
          <animateMotion dur="9s" repeatCount="indefinite" path={def.d} />
        </circle>
        {def.labels?.map(({ text, x, anchor = "middle" }) => (
          <text key={text} x={x} y={def.labelY ?? 188} textAnchor={anchor}>{text}</text>
        ))}
      </svg>
    </div>
  );
}

export function LineArtCorner({ tone = "brand" }: { tone?: "brand" | "light" }) {
  return (
    <svg className={`line-art-corner line-art-corner--${tone}`} viewBox="0 0 180 180" aria-hidden="true">
      <path pathLength="1" d="M178 10 C108 10 164 78 99 78 C40 78 83 139 17 139 C8 139 6 154 16 166" />
    </svg>
  );
}

/* A short hand-drawn swash that sits under a hero heading — the illustrator's
   line meeting the typography. */
export function LineArtFlourish({ tone = "brand", className = "" }: { tone?: "brand" | "light" | "famant"; className?: string }) {
  return (
    <svg className={`line-art-flourish line-art-flourish--${tone} ${className}`} viewBox="0 0 220 24" aria-hidden="true">
      <path pathLength="1" d="M4 16 C50 5 92 21 132 12 C162 5 192 11 216 7" />
      <circle cx="216" cy="7" r="2.5" />
    </svg>
  );
}
