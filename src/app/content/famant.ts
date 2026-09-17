import {
  CalendarCheck2,
  ClipboardList,
  ListChecks,
  ScanText,
  UtensilsCrossed,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 * Single source of truth for how Famant is described on antutive.com.
 *
 * Editorial rules (from the approved positioning strategy):
 *  - Famant is a functional mobile app, publicly available on Google
 *    Play and on the Apple App Store (the iOS listing went public in
 *    2026-09). The public message is exactly that: "Famant is available
 *    on Google Play and the App Store." The site does not describe a
 *    release stage, a testing programme, gated or signup-dependent
 *    access, or any launch date, and Famant is never called a beta.
 *    Keep STAGE_LINE and routeMeta in step with this. Both store
 *    listings are promoted equally, side by side, wherever a download
 *    action appears. The capabilities below all exist in the app today
 *    and are described as mechanisms in present tense, never with
 *    individual status labels.
 *  - No integration, pricing, launch-date, user-count or accuracy claim
 *    may be added here without documented verification.
 *  - All screenshots referenced below are real captures of the working
 *    Famant application, never illustrations or mockups.
 * ------------------------------------------------------------------ */

/* ── Famant's own product site (run by Antutive). ──
   This is the Antutive → Famant hand-off used across the site: the header,
   the footer, the Famant product page, the portfolio card and the Home
   spotlight all link here, so a reviewer can follow
   antutive.com → famant.com → the store listings without guessing. Keep
   this the single place the product-site URL is written. */
export const FAMANT_SITE_URL = "https://www.famant.com/en";

/* What the link is labelled as in the UI (host only, no scheme/path). */
export const FAMANT_SITE_LABEL = "famant.com";

/* ── Store links: the ONLY place platform URLs live. ──
   Android: the official Famant Google Play listing (supplied 2026-08-24).
   iOS: the official Famant Apple App Store listing, public since 2026-09
   (reference copy: FAMANT_IOS_APP_STORE_LINK.docx in the project root).
   Every "Get Famant on Google Play" / "Get Famant on the App Store"
   action on the site resolves to one of these two URLs. While a URL is
   empty, UI components fall back to an email request (see the *Href
   exports below) so no button ever navigates nowhere.
   (The identifiers keep their historical *Beta* names; they are internal
   and never rendered.) */
export const FAMANT_IOS_BETA_URL = "https://apps.apple.com/in/app/famant/id6789982653";
export const FAMANT_ANDROID_BETA_URL = "https://play.google.com/store/apps/details?id=com.famant.app&hl=en_IN";

/* Safe hrefs for the platform buttons: the real link once provided,
   otherwise a working email request. */
const ACCESS_REQUEST_MAILTO = (platform: "iOS" | "Android") =>
  `mailto:vinayak@antutive.com?subject=${encodeURIComponent(`Famant ${platform} access request`)}`;
export const androidBetaHref = FAMANT_ANDROID_BETA_URL || ACCESS_REQUEST_MAILTO("Android");
export const iosBetaHref = FAMANT_IOS_BETA_URL || ACCESS_REQUEST_MAILTO("iOS");

/* Used identically wherever the relationship is stated. */
export const OWNERSHIP_LINE =
  "Famant is the flagship product of Antutive (ANTUTIVE AB), built and operated in Gothenburg, Sweden.";

/* The single public availability message. */
export const STAGE_LINE = "Famant is available on Google Play and the App Store.";

export interface Capability {
  Icon: LucideIcon;
  title: string;
  mechanism: string;
  outcome: string;
}

export const capabilities: Capability[] = [
  {
    Icon: CalendarCheck2,
    title: "Family scheduling & events",
    mechanism:
      "Personal and family calendars live in one shared view. The assistant reasons over the whole household's commitments, spots what overlaps and proposes a resolution.",
    outcome: "One shared calendar the family can actually trust.",
  },
  {
    Icon: ListChecks,
    title: "Tasks & chore delegation",
    mechanism:
      "A request in plain language, typed or spoken, becomes a task with an owner and a reminder. Chores are assigned across the family, and the assistant acts only when a member confirms.",
    outcome: "Follow-through without one person carrying the whole list in their head.",
  },
  {
    Icon: ClipboardList,
    title: "Shared lists & reminders",
    mechanism:
      "Groceries, errands and everything in between live on collaborative lists any family member can update, with reminders timed to when they matter.",
    outcome: "One list everyone sees instead of five versions in five chats.",
  },
  {
    Icon: ScanText,
    title: "Document understanding",
    mechanism:
      "School forms, invitations and receipts are read with OCR and natural-language understanding, turned into proposed actions (an event, a reminder, a list entry) and stored so they can be found again by asking.",
    outcome: "Paper becomes follow-through instead of a pile in a drawer.",
  },
  {
    Icon: Wallet,
    title: "Expenses & budgeting",
    mechanism:
      "Household expenses and shared financial activity are tracked in one place, so the family sees where money goes without a spreadsheet ritual.",
    outcome: "A clear view of household spending, shared by default.",
  },
  {
    Icon: UtensilsCrossed,
    title: "Meal & household planning",
    mechanism:
      "Weekly meal plans grounded in the household's own preferences and history, with grocery lists generated straight from the plan.",
    outcome: "Dinner stops being a nightly negotiation.",
  },
];

/* ── Real screenshots of the working Famant app (public/media/famant).
   Copied from the product team's capture set; each entry is captioned by
   what is actually visible on that screen. ── */
export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
  device: "Phone" | "Tablet";
  /* intrinsic dimensions, so the browser reserves space before load */
  width: number;
  height: number;
}

export const famantScreenshots: Screenshot[] = [
  /* ordered as topic pairs (phone + tablet of the same screen); the
     gallery groups consecutive entries that share a caption */
  {
    src: "/media/famant/famant-home-phone.jpg",
    alt: "Famant family home screen on a phone: the Svensson family's members, a mood check-in, and Liv, the family assistant, offering to help",
    caption: "Family home & assistant",
    device: "Phone",
    width: 740,
    height: 1600,
  },
  {
    src: "/media/famant/famant-home-tablet.jpg",
    alt: "Famant family home screen on a tablet: family members, mood check-in and the Liv family assistant",
    caption: "Family home & assistant",
    device: "Tablet",
    width: 992,
    height: 1586,
  },
  {
    src: "/media/famant/famant-categories-phone.jpg",
    alt: "Famant categories screen on a phone: tasks, lists, events, documents, budgeting and meal planner",
    caption: "Tasks, lists, events & more",
    device: "Phone",
    width: 738,
    height: 1600,
  },
  {
    src: "/media/famant/famant-categories-tablet.jpg",
    alt: "Famant on a tablet showing the family's categories: tasks, lists, events, documents, budgeting and meal planner",
    caption: "Tasks, lists, events & more",
    device: "Tablet",
    width: 992,
    height: 1586,
  },
  {
    src: "/media/famant/famant-profile-phone.jpg",
    alt: "Famant profile screen on a phone with a member's tasks, lists and events counts plus language, notification and preference settings",
    caption: "Profile & preferences",
    device: "Phone",
    width: 740,
    height: 1600,
  },
  {
    src: "/media/famant/famant-profile-tablet.jpg",
    alt: "Famant profile screen on a tablet showing profile stats and personal settings",
    caption: "Profile & preferences",
    device: "Tablet",
    width: 1086,
    height: 1448,
  },
];

