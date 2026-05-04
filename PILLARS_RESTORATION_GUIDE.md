# ANTUTIVE — Three-Pillar Strategy & Restoration Guide

---

## 1. The Original Three-Pillar Structure

The ANTUTIVE website was architected around **three core business pillars**. Every section of the site — the homepage scroll animation, navigation, footer, CTAs, and individual pages — was built to reflect this three-pillar model.

| # | Pillar | Page Route | Brand Colour | Tag Line |
|---|--------|------------|--------------|----------|
| 01 | **AI Solutions Suite** | `/services` | `#F5C84C` (Gold) | AI, Data & Growth Platforms |
| 02 | **Strategic Consulting** | `/consulting` | `#1CB7B4` (Teal) | IT Consulting & Distributed Engineering |
| 03 | **Products** | `/products` | `#6F3CC3` (Purple) | Enterprise SaaS Portfolio |

### What each pillar covered

**Pillar 01 — AI Solutions Suite (`/services`)**
Four practice areas, each with its own detailed section on the page:
- **Generative AI** — Agentic systems, Sovereign RAG, Knowledge Graphs, Conversational AI
- **Data Engineering** — ETL Pipelines, Power BI Dashboards, Predictive Analytics, Data Governance
- **AI Growth & Marketing** — GEO Strategy, AI Video Ads, Lead Scoring, Outreach Automation
- **Custom AI Platform** — Private model-agnostic AI workspaces, EU-hosted, GDPR-compliant

Also included: an AI maturity assessment tool, a cross-service integration pathway table, and a full delivery method component.

**Pillar 02 — Strategic Consulting (`/consulting`)**
Three engagement models:
- **Model A — Strategic IT Consulting** — Senior advisory, architecture reviews, AI readiness assessments, digital transformation (T&M billing in SEK/EUR)
- **Model B — Managed Engineering Teams** — Dedicated dev teams, single point of contact, sprint reviews, full client IP ownership
- **Model C — Project-Based Delivery** — Fixed-scope web/mobile/enterprise builds, milestone billing, ANTUTIVE Delivery Method

Also included: full tech stack table (React, Python, Node.js, AWS, PyTorch, SAP integrations, etc.), a language/terminology positioning guide (what ANTUTIVE says vs. what it avoids), and engagement flow.

**Pillar 03 — Products (`/products`)**
- **FAMANT** — AI-powered home OS product
- **EU SaaS Distribution** — White-label/rebrand programme for non-EU SaaS companies entering the European market (20–40% revenue share model)
- Partner qualification criteria (proven PMF, GDPR architecture, B2B focus, EU addressable market)

---

## 2. What Was Temporarily Removed and Why

**Removed:** Pillar 01 (AI Solutions Suite / `/services`) and Pillar 02 (Strategic Consulting / `/consulting`)

**Reason:** These two pillars are temporarily hidden from the public-facing website while the offerings, pricing, and positioning are being refined. Only **Pillar 03 (Products)** remains visible. The source files (`Services.tsx` and `Consulting.tsx`) have been **preserved in the codebase** and are not deleted — they are simply disconnected from routing and navigation.

---

## 3. Everything That Was Changed

The following is a complete technical record of every change made, file by file.

---

### `src/app/routes.tsx`

**Removed the import:**
```tsx
// REMOVED:
import { Services } from "./pages/Services";
import { Consulting } from "./pages/Consulting";
```

**Removed the routes:**
```tsx
// REMOVED from children array:
{ path: "services",    Component: Services    },
{ path: "consulting",  Component: Consulting  },
```

**Current state — only these routes remain:**
```tsx
{ index: true,               Component: Home         },
{ path: "growth-marketing",  Component: GrowthMarketing },
{ path: "custom-platform",   Component: CustomPlatform  },
{ path: "products",          Component: Products        },
{ path: "about",             Component: About           },
{ path: "contact",           Component: Contact         },
```

---

### `src/app/components/RootLayout.tsx`

**Removed from the top navigation array:**
```tsx
// REMOVED:
{ name: "Solutions",   href: "/services"   },
{ name: "Consulting",  href: "/consulting" },
```

**Removed from the footer links array:**
```tsx
// REMOVED:
["AI & Data Solutions",  "/services"   ],
["Consulting",           "/consulting" ],
```

---

### `src/app/pages/Home.tsx` — The Pillar Scroll Animation

This is the most significant change. The homepage featured a **scroll-driven animation section** where:
- The ANTUTIVE logo rotated as the user scrolled
- Two glowing concentric rings changed colour to match the active pillar
- Pillar content (number, title, tag, description, arrow link) cross-faded in and out
- Progress dots at the bottom tracked which pillar was active
- Ambient background glow shifted colour with each pillar

**How it worked technically:**
```tsx
// scroll progress (0 → 1) drives everything
const idx = Math.min(PILLARS.length - 1, Math.floor(prog * PILLARS.length));
const rot  = prog * 360;         // logo rotation in degrees
const col  = PILLARS[idx].color; // active pillar's brand colour

// outer container height = number of pillars × 120vh
// sticky inner panel stays at 100vh while content scrolls
<div ref={outerRef} style={{ height: "360vh" }}>   // was 3 × 120vh
  <div className="sticky top-0" style={{ height: "100vh" }}>
    ...
  </div>
</div>
```

**What was removed from `PILLARS`:**
```tsx
// REMOVED — Pillar 01:
{ n: "01", title: "AI Solutions Suite",   tag: "AI, Data & Growth Platforms",
  desc: "Generative AI, data analytics, growth automation, and custom AI platforms...",
  href: "/services",  color: "#F5C84C" },

// REMOVED — Pillar 02:
{ n: "02", title: "Strategic Consulting", tag: "IT Consulting & Distributed Engineering",
  desc: "Senior advisory, architecture reviews, managed engineering teams...",
  href: "/consulting", color: "#1CB7B4" },
```

**Current state — only Products remains:**
```tsx
const PILLARS = [
  { n: "01", title: "Products", tag: "Enterprise SaaS Portfolio",
    desc: "FAMANT home OS and EU-rebranded SaaS products generating recurring licence revenue.",
    href: "/products", color: "#6F3CC3" },
];
```

**Height reduced:**
```tsx
// Was: height: "360vh"  (3 pillars × 120vh)
// Now: height: "120vh"  (1 pillar × 120vh)
```

**Section heading updated:**
```tsx
// Was:  "Three Ways to Work With Us"
// Now:  "Our Products"

// Subtitle was: "AI-powered systems, strategic advisory, and scalable SaaS products..."
// Now:          "Scalable SaaS products engineered for European businesses."
```

**Practices grid — removed two entries that linked to `/services`:**
```tsx
// REMOVED:
{ icon: Cpu,      title: "Generative AI",    href: "/services#genai", desc: "..." },
{ icon: Database, title: "Data Engineering", href: "/services#data",  desc: "..." },
```

**Unused icon imports removed:**
```tsx
// REMOVED from lucide-react import: Users, Cpu, Database
```

**CTA buttons updated:**
```tsx
// Was:  <Link to="/services">Explore Solutions</Link>  (×2)
// Now:  <Link to="/products">Explore Products</Link>   (×2)
```

---

### `src/app/pages/Services.tsx`
- Removed the "IT Consulting" row from the cross-service integration pathway table

### `src/app/pages/About.tsx`
- Removed "strategic consulting" from the company description paragraph
- Changed secondary CTA from `/services` "Explore Solutions" → `/products` "Explore Products"

### `src/app/pages/Contact.tsx`
- Removed three consulting options from the enquiry type dropdown:
  - "Strategic IT Consulting (Model A)"
  - "Managed Engineering Team (Model B)"
  - "Project-Based Delivery (Model C)"
- Changed secondary CTA from `/services` "Explore Solutions" → `/products` "Explore Products"

### `src/app/pages/Products.tsx`
- Updated "Non-Competitive" criterion: removed "or Consulting" reference
- Updated revenue share paragraph: removed "and consulting" reference

### `src/app/pages/GrowthMarketing.tsx`
- Changed secondary CTA from `/services` "Explore Solutions" → `/products` "Explore Products"

---

## 4. How to Re-Add the Two Pillars

When ready to restore Services and Consulting, follow these steps in order.

---

### Step 1 — Restore routes (`src/app/routes.tsx`)

Add back the two imports at the top:
```tsx
import { Services }   from "./pages/Services";
import { Consulting } from "./pages/Consulting";
```

Add back the two routes inside `children`:
```tsx
{ path: "services",   Component: Services   },
{ path: "consulting", Component: Consulting },
```

---

### Step 2 — Restore navigation (`src/app/components/RootLayout.tsx`)

In the `nav` array, add back (order matters for display):
```tsx
{ name: "Solutions",  href: "/services"   },
// insert before "Growth & Marketing"

{ name: "Consulting", href: "/consulting" },
// insert after "AI Platform"
```

In the footer links array, add back:
```tsx
["AI & Data Solutions",  "/services"   ],
["Consulting",           "/consulting" ],
```

---

### Step 3 — Restore the Pillar Scroll Animation (`src/app/pages/Home.tsx`)

**Restore the PILLARS array** (replace the current single-item array):
```tsx
const PILLARS = [
  { n: "01", title: "AI Solutions Suite",   tag: "AI, Data & Growth Platforms",
    desc: "Generative AI, data analytics, growth automation, and custom AI platforms — engineered and deployed for your specific environment.",
    href: "/services",   color: "#F5C84C" },
  { n: "02", title: "Strategic Consulting", tag: "IT Consulting & Distributed Engineering",
    desc: "Senior advisory, architecture reviews, managed engineering teams, and end-to-end project delivery.",
    href: "/consulting", color: "#1CB7B4" },
  { n: "03", title: "Products",             tag: "Enterprise SaaS Portfolio",
    desc: "FAMANT home OS and EU-rebranded SaaS products generating recurring licence revenue.",
    href: "/products",   color: "#6F3CC3" },
];
```

**Restore the scroll container height:**
```tsx
// Change:  height: "120vh"
// Back to: height: "360vh"
```

The `idx` calculation is already dynamic (`PILLARS.length - 1`) so it will automatically handle 3 pillars with no changes needed.

**Restore the section heading and subtitle:**
```tsx
// Change heading:  "Our Products"
// Back to:         "Three Ways to Work With Us"

// Change subtitle: "Scalable SaaS products engineered for European businesses."
// Back to:         "AI-powered systems, strategic advisory, and scalable SaaS products — each available independently or combined."
```

**Restore the practices grid entries** (add back at the top of the `practices` array):
```tsx
{ icon: Cpu,      title: "Generative AI",    href: "/services#genai",
  desc: "Agentic systems, Sovereign RAG, knowledge graphs, conversational AI." },
{ icon: Database, title: "Data Engineering", href: "/services#data",
  desc: "ETL pipelines, Power BI dashboards, predictive analytics, governance." },
```

**Restore the icon imports** (add `Cpu`, `Database` back to the lucide-react import line):
```tsx
import { Database, TrendingUp, Lock, Cpu, Shield, Globe, Code2, BarChart3, Zap,
         Server, Layers, Cloud, ArrowRight, Sparkles, CheckCircle2, GitBranch } from "lucide-react";
```

**Restore the CTA buttons:**
```tsx
// Change both instances of:
<Link to="/products">Explore Products</Link>
// Back to:
<Link to="/services">Explore Solutions</Link>
```

---

### Step 4 — Restore supporting page content

**`src/app/pages/Services.tsx`** — Add back the IT Consulting row in the `integrations` array:
```tsx
{ start: "IT Consulting", exp: "Managed Dev Team → Project Delivery",
  logic: "Strategy engagements convert to execution contracts." },
```

**`src/app/pages/About.tsx`**
- Restore company description:
  ```
  "...delivering AI engineering, strategic consulting, and sovereign SaaS products..."
  ```
- Change CTA back to: `<Link to="/services">Explore Solutions</Link>`

**`src/app/pages/Contact.tsx`**
- Add back the three consulting dropdown options:
  ```tsx
  <option value="consulting-model-a">Strategic IT Consulting (Model A)</option>
  <option value="consulting-model-b">Managed Engineering Team (Model B)</option>
  <option value="consulting-model-c">Project-Based Delivery (Model C)</option>
  ```
- Change CTA back to: `<Link to="/services">Explore Solutions</Link>`

**`src/app/pages/Products.tsx`**
- Restore "Non-Competitive" criterion:
  ```
  "Does not directly compete with ANTUTIVE Engineering or Consulting solution areas"
  ```
- Restore revenue share text:
  ```
  "...recurring licence revenue alongside the engineering and consulting solution areas."
  ```

**`src/app/pages/GrowthMarketing.tsx`**
- Change CTA back to: `<Link to="/services">Explore Solutions</Link>`

---

## 5. Files That Were NOT Changed (Safe to Use As-Is)

| File | Status |
|------|--------|
| `src/app/pages/Services.tsx` | Complete, untouched page — ready to reconnect |
| `src/app/pages/Consulting.tsx` | Complete, untouched page — ready to reconnect |
| All CSS / animation styles | Unchanged — scroll animation will work immediately on restore |
| `DeliveryMethod` component | Unchanged — used by both Services and Consulting pages |

---

## 6. Quick Restoration Checklist

When the time comes, work through this list top to bottom:

- [ ] `routes.tsx` — add Services and Consulting imports + routes
- [ ] `RootLayout.tsx` — add "Solutions" and "Consulting" to nav array
- [ ] `RootLayout.tsx` — add both entries back to footer links array
- [ ] `Home.tsx` — restore full 3-item PILLARS array
- [ ] `Home.tsx` — change scroll container height back to `"360vh"`
- [ ] `Home.tsx` — restore heading "Three Ways to Work With Us" and subtitle
- [ ] `Home.tsx` — add `Cpu` and `Database` back to lucide-react import
- [ ] `Home.tsx` — add Generative AI and Data Engineering back to practices array
- [ ] `Home.tsx` — change both CTA buttons back to `/services` "Explore Solutions"
- [ ] `Services.tsx` — add IT Consulting row back to integrations table
- [ ] `About.tsx` — restore description and CTA
- [ ] `Contact.tsx` — add three consulting dropdown options back
- [ ] `Products.tsx` — restore Non-Competitive criterion and revenue text
- [ ] `GrowthMarketing.tsx` — restore CTA to `/services`
- [ ] Verify the scroll animation cycles through all three pillars correctly
- [ ] Test all navigation links in desktop and mobile menu

---

*Document created: 2026-05-04*
*Current branch: arshith*
