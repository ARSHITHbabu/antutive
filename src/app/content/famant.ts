import { CalendarCheck2, ListChecks, ScanText, UtensilsCrossed, type LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ *
 * Single source of truth for how Famant is described on antutive.com.
 *
 * Editorial rules (from the approved positioning strategy):
 *  - Every capability is described as a mechanism, carries an honest
 *    status label, and is never presented as live or complete.
 *  - No integration, pricing, launch-date, user-count or accuracy claim
 *    may be added here without documented verification.
 *  - Statuses below are deliberately conservative pending a per-capability
 *    audit from the product team; refine them only from that audit.
 * ------------------------------------------------------------------ */

export const WAITLIST_URL = "https://www.famant.com/en";

/* Used identically wherever the relationship is stated. */
export const OWNERSHIP_LINE =
  "Famant is the flagship product of Antutive (ANTUTIVE AB), built and operated in Gothenburg, Sweden.";

export const STAGE_LINE = "Famant is in development and pre-launch. The waitlist is open.";

export type CapabilityStatus = "Planned" | "In development" | "In private testing" | "Released";

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
    title: "Family-aware scheduling",
    mechanism:
      "The assistant reasons over the whole household's commitments, not rule-based alarms, to spot conflicts, explain what overlaps and propose a resolution.",
    outcome: "One shared calendar view the family can actually trust.",
    status: "In development",
  },
  {
    Icon: ListChecks,
    title: "Task creation & delegation",
    mechanism:
      "A request in plain language, typed or spoken, becomes a task with a suggested owner and a reminder timed to context. The assistant acts only when a family member confirms.",
    outcome: "Follow-through without one person carrying the whole list in their head.",
    status: "In development",
  },
  {
    Icon: ScanText,
    title: "Document understanding",
    mechanism:
      "Photographed school forms, invitations and receipts are read with OCR and natural-language understanding, then turned into proposed actions such as an event, a reminder or a list entry, and stored so they can be found again by asking.",
    outcome: "Paper becomes follow-through instead of a pile in a drawer.",
    status: "In development",
  },
  {
    Icon: UtensilsCrossed,
    title: "Meal & household planning",
    mechanism:
      "Weekly plans grounded in the household's own preferences and history, with grocery lists generated from the plan.",
    outcome: "Dinner stops being a nightly negotiation.",
    status: "In development",
  },
];
