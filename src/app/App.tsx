import { useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { IntroAnimation, shouldPlayIntro } from "./components/intro/IntroAnimation";

export default function App() {
  // Decided once, before first paint: the overlay mounts in the same commit
  // as the page, so the site is never visible before the intro (no flash,
  // no layout shift). Plays once per browser session; in-site navigation
  // never remounts App, so it can never replay.
  const [intro, setIntro] = useState(shouldPlayIntro);

  return (
    <>
      <RouterProvider router={router} />
      {intro && <IntroAnimation onComplete={() => setIntro(false)} />}
    </>
  );
}
