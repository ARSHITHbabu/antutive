# ANTUTIVE — Brand Intro Animation (Parked Feature)

**Status:** Parked on 16 September 2026. Removed from the live website, preserved in the codebase.

**Nothing was deleted.** Every line of the animation still exists and still works; it is simply no longer wired into the app.

---

## 1. What the feature was

A full-screen brand intro that played over the site on first load, before the visitor saw any page.

**The sequence** — a terminal-style reveal of the official Antutive logo, in ten phases on a single GSAP timeline:

| Phase | What happened |
|-------|---------------|
| 1 | The blue arrow fades in on a white field |
| 2 | The blue rectangle appears beside it as a typing cursor, and blinks once |
| 3 | `antutive` is typed out letter by letter — each keystroke reveals the official glyph as the cursor glides to the next slot |
| 4 | The cursor rests in the rectangle's official logo position and blinks twice |
| 5 | The tagline fades in |
| 6 | The completed full logo holds, perfectly still |
| 7 | Backspace: letters vanish right-to-left, the cursor slides back one slot per press, the tagline slips away, and the whole composition glides so what survives ends dead-centre |
| 8 | The surviving `a` settles from blue to black — the difference between the wordmark and the official short mark |
| 9 | The short mark (arrow + black `a` + rectangle) holds |
| 10 | The overlay dissolves and the page is simply there |

Total runtime was roughly five seconds.

**How it was built**

- **Artwork:** the traced vector layers of the official logo (`src/assets/antutive-logo-layered.svg`), inlined as raw SVG so every frame is resolution-independent. The letterforms are the real logo artwork, separated into layers — never re-typeset in a web font.
- **Motion:** opacity and translate on SVG groups only, driven by one GSAP timeline. No layout thrash.
- **Geometry:** all the numbers — the 387 × 123 design grid, per-glyph cursor slots, typing and backspace cadence, blink timing, the recentre offset — live in `introGeometry.ts`, separate from the animation logic.
- **Frequency:** once per browser session. A `sessionStorage` key, `antutive.intro.played`, recorded that it had run, so in-site navigation and page refreshes never replayed it.
- **Accessibility:** skipped entirely under `prefers-reduced-motion: reduce`.
- **No-flash gate:** because every page is prerendered to static HTML, the page would otherwise have appeared for a moment before the overlay could mount. An inline script in `index.html` set `data-intro-pending` on `<html>`, which hid `#root` via CSS until the overlay mounted and revealed it. A 4-second `setTimeout` failsafe removed the attribute if the app failed to boot, so the page could never stay hidden. Crawlers and no-JS clients never ran the script, so the prerendered content stayed fully visible to them.

---

## 2. Why it was parked

The site should open directly on the page the visitor asked for. The intro delayed first content on every new session and stood between the visitor and the site. It is being set aside, not abandoned — the work is intact and can come back unchanged, or serve as the basis for a shorter version later.

---

## 3. What is preserved (do not delete)

| Path | What it is |
|------|------------|
| `src/app/components/intro/IntroAnimation.tsx` | The overlay component, the full GSAP timeline, and `shouldPlayIntro()` |
| `src/app/components/intro/introGeometry.ts` | The design grid, glyph slots and all motion timings |
| `src/assets/antutive-logo-layered.svg` | The layered logo artwork the animation drives |
| `antutive_intro_pipeline/` | The original vectorisation / render / audio pipeline and its `DELIVERY_NOTES.md` |
| `gsap` in `package.json` | Kept as a dependency so the parked code stays restorable as-is |

Nothing imports `IntroAnimation.tsx` any more, so Vite tree-shakes it out — it costs the production bundle nothing while it sits parked.

---

## 4. Everything that was changed

### `src/app/App.tsx`

The component was reduced to the router alone.

**Removed:**

```tsx
import { useEffect, useState } from "react";
import { IntroAnimation, shouldPlayIntro } from "./components/intro/IntroAnimation";

// ...inside App():
const [intro, setIntro] = useState(false);
useEffect(() => {
  if (shouldPlayIntro()) {
    setIntro(true);
  } else {
    document.documentElement.removeAttribute("data-intro-pending");
  }
}, []);

return (
  <>
    <RouterProvider router={router} />
    {intro && <IntroAnimation onComplete={() => setIntro(false)} />}
  </>
);
```

**Now:**

```tsx
export default function App() {
  return <RouterProvider router={router} />;
}
```

### `index.html`

The entire intro gate was removed from `<head>` — the explanatory comment, the inline `<script>` that set `data-intro-pending` (including its 4-second failsafe), and the `<style>` rule that hid `#root`:

```html
<!-- REMOVED -->
<script>
  (function () {
    try {
      if (
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        sessionStorage.getItem("antutive.intro.played") === null
      ) {
        document.documentElement.setAttribute("data-intro-pending", "");
        setTimeout(function () {
          document.documentElement.removeAttribute("data-intro-pending");
        }, 4000);
      }
    } catch (e) { /* private mode etc.: show the page normally */ }
  })();
</script>
<style>html[data-intro-pending] #root { visibility: hidden; }</style>
```

The general `<style>html, body { height: 100%; ... }</style>` line above it stays.

### `src/app/lib/scroll.tsx`

`paintedInViewport()` consulted the gate attribute to know that nothing had been painted yet. With no gate, that check is dead and was removed:

```tsx
// REMOVED from paintedInViewport():
if (document.documentElement.hasAttribute("data-intro-pending")) return false;
```

The module comment was trimmed to match (it no longer mentions elements behind the intro overlay). Scroll-reveal behaviour itself is unchanged.

### `src/app/pages/Legal.tsx` — the Cookies page

The "What the site does store" section described the one `sessionStorage` item the intro wrote. With the intro parked the site stores nothing at all, so the copy was corrected:

**Was:** "One item of browser session storage (`antutive.intro.played`) remembers, for the duration of your browser session only, that the opening logo animation has already played…"

**Now:** "Nothing. This site sets no cookies and writes no local or session storage in your browser at all."

### `src/entry-server.tsx`

Comment only. The note explaining that the server renders the route tree rather than `<App/>` "so the session-gated intro overlay never appears in static HTML" now simply says that `<App/>`'s only job is to own the browser router. No code change — prerendering already excluded the intro.

### `src/app/components/intro/IntroAnimation.tsx`

Comment only. A `PARKED` banner was added at the top of the file header pointing back at this document. The animation code is untouched.

---

## 5. How to restore it

1. **`src/app/App.tsx`** — put back the import, the `useState`/`useEffect` gate and the fragment shown in section 4.
2. **`index.html`** — restore the inline gate script and the `html[data-intro-pending] #root { visibility: hidden; }` style block, immediately after the existing `<style>html, body { ... }</style>` line in `<head>`. **Without this the prerendered page flashes before the overlay mounts.**
3. **`src/app/lib/scroll.tsx`** — restore the `data-intro-pending` early return in `paintedInViewport()`, so reveal animations are still armed for content hidden behind the overlay.
4. **`src/app/pages/Legal.tsx`** — restore the Cookies page wording about `antutive.intro.played`. This is a legal disclosure, not decoration: if the site writes session storage again, the page must say so.
5. **`src/app/components/intro/IntroAnimation.tsx`** — remove the `PARKED` banner from the file header.
6. Confirm `gsap` is still in `package.json`, then run `npm run build`.

**Verifying a restore:** open the site in a fresh browser session (or clear session storage) — the intro should play once, and not again on navigation or refresh. With OS-level "reduce motion" on, it should not play at all. View source on a built page in `dist/` — the prerendered HTML must still contain the full page content, with no overlay markup.

---

## 6. Related documents

- `PILLARS_RESTORATION_GUIDE.md` — the same treatment for the two parked business-pillar pages.
- `antutive_intro_pipeline/DELIVERY_NOTES.md` — how the layered logo vectors were produced.
