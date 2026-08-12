import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { IntroAnimation, shouldPlayIntro } from "./components/intro/IntroAnimation";

/* Client-only: entry-server.tsx builds its own memory router from the same
   route table, so the browser router must live here, not in routes.tsx. */
const router = createBrowserRouter(routes);

export default function App() {
  // The intro decision happens after mount: pages are prerendered to static
  // HTML without the overlay, so deciding during the first render would
  // break hydration. Until the overlay mounts, the inline gate script in
  // index.html keeps #root hidden, so the site is still never visible
  // before the intro (no flash, no layout shift). Plays once per browser
  // session; in-site navigation never remounts App, so it can never replay.
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    if (shouldPlayIntro()) {
      setIntro(true);
    } else {
      // Defensive: if the gate was set but the intro won't run, reveal the page.
      document.documentElement.removeAttribute("data-intro-pending");
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      {intro && <IntroAnimation onComplete={() => setIntro(false)} />}
    </>
  );
}
