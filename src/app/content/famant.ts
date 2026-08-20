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
 *  - Every capability is described as a mechanism and carries an honest
 *    status label. As of 2026-08, Famant is a functional mobile app in
 *    beta on iOS and Android; capabilities are described in present
 *    tense and labelled "In beta".
 *  - No integration, pricing, launch-date, user-count or accuracy claim
 *    may be added here without documented verification.
 *  - All screenshots referenced below are real captures of the working
 *    Famant application — never illustrations or mockups.
 * ------------------------------------------------------------------ */

/* Famant's own product site (run by Antutive). */
export const FAMANT_SITE_URL = "https://www.famant.com/en";

/* ── Beta access links — the ONLY place platform URLs live. ──
   TODO: Replace with final Famant iOS beta link
   TODO: Replace with final Famant Android beta link
   While a URL is empty, UI components fall back to a beta-access email
   request (see betaHref below) so no button ever navigates nowhere. */
export const FAMANT_IOS_BETA_URL = "";
export const FAMANT_ANDROID_BETA_URL = "";

/* Safe hrefs for the platform buttons: the real link once provided,
   otherwise a working email request for beta access. */
const BETA_REQUEST_MAILTO = (platform: "iOS" | "Android") =>
  `mailto:contact@antutive.com?subject=${encodeURIComponent(`Famant ${platform} beta access request`)}`;
export const iosBetaHref = FAMANT_IOS_BETA_URL || BETA_REQUEST_MAILTO("iOS");
export const androidBetaHref = FAMANT_ANDROID_BETA_URL || BETA_REQUEST_MAILTO("Android");

/* Used identically wherever the relationship is stated. */
export const OWNERSHIP_LINE =
  "Famant is the flagship product of Antutive (ANTUTIVE AB), built and operated in Gothenburg, Sweden.";

export const STAGE_LINE = "Famant is now ready for beta testing on iOS and Android.";

export type CapabilityStatus = "Planned" | "In development" | "In beta" | "In private testing" | "Released";

export interface Capability {
  Icon: LucideIcon;
  title: string;
  mechanism: string;
  outcome: string;
  status: CapabilityStatus;
}

export const capabilities: Capability[] = [
  {
    Icon: CalendarCheck2,
    title: "Family scheduling & events",
    mechanism:
      "Personal and family calendars live in one shared view. The assistant reasons over the whole household's commitments, spots what overlaps and proposes a resolution.",
    outcome: "One shared calendar the family can actually trust.",
    status: "In beta",
  },
  {
    Icon: ListChecks,
    title: "Tasks & chore delegation",
    mechanism:
      "A request in plain language, typed or spoken, becomes a task with an owner and a reminder. Chores are assigned across the family, and the assistant acts only when a member confirms.",
    outcome: "Follow-through without one person carrying the whole list in their head.",
    status: "In beta",
  },
  {
    Icon: ClipboardList,
    title: "Shared lists & reminders",
    mechanism:
      "Groceries, errands and everything in between live on collaborative lists any family member can update, with reminders timed to when they matter.",
    outcome: "One list everyone sees instead of five versions in five chats.",
    status: "In beta",
  },
  {
    Icon: ScanText,
    title: "Document understanding",
    mechanism:
      "School forms, invitations and receipts are read with OCR and natural-language understanding, turned into proposed actions — an event, a reminder, a list entry — and stored so they can be found again by asking.",
    outcome: "Paper becomes follow-through instead of a pile in a drawer.",
    status: "In beta",
  },
  {
    Icon: Wallet,
    title: "Expenses & budgeting",
    mechanism:
      "Household expenses and shared financial activity are tracked in one place, so the family sees where money goes without a spreadsheet ritual.",
    outcome: "A clear view of household spending, shared by default.",
    status: "In beta",
  },
  {
    Icon: UtensilsCrossed,
    title: "Meal & household planning",
    mechanism:
      "Weekly meal plans grounded in the household's own preferences and history, with grocery lists generated straight from the plan.",
    outcome: "Dinner stops being a nightly negotiation.",
    status: "In beta",
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

