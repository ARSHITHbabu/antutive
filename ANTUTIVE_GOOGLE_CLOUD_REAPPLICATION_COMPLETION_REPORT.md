# Antutive — Google Cloud for Startups Re-Application Completion Report

**Repository:** Antutive corporate website (`antutive.com`)
**Branch:** `arshith`
**Audit date:** 2026-09-10
**Scope:** Workstream B (Antutive corporate website) only. The Famant product website lives in a separate repository and is covered by `FAMANT_GOOGLE_CLOUD_REAPPLICATION_COMPLETION_REPORT.md`.

---

## 1. Executive Summary

### Verdict: **READY WITH MANUAL ITEMS**

The Antutive website portion of the re-application is technically and editorially complete. Every safe, verifiable improvement identified in the audit has been implemented and tested against a real build.

What a reviewer can now verify from this website alone:

- Antutive presents unambiguously as an **AI-first product company** — there is no consulting, agency, outsourcing or services language anywhere in the built output (verified: 0 matches).
- **Famant is evidenced as a real, working, downloadable product**: six real in-app screenshots, a working Google Play link, and a direct pathway to the dedicated product site `famant.com`.
- The **Antutive → Famant** relationship is now explicit and machine-readable. Before this audit, `famant.com` was referenced only incidentally inside legal prose and the URL constant was defined but never used. It is now linked from the footer of **every page**, from the Home spotlight, the Products portfolio card, the Famant hero, the Famant download section, and from structured data.
- **Company identity is verifiable**: ANTUTIVE AB, org.nr 559576-7228, Gothenburg — in the footer of every page, on About, on Contact, and in `Organization` JSON-LD.
- **Founder identity is verifiable**: Vinayak Panchaman, Founder & CEO, with a real photo, a working LinkedIn link, and now a `founder` node in site-wide structured data.
- **The soft-404 defect is fixed and tested.** Unknown URLs previously returned HTTP 200; they now return a real HTTP 404 with a branded, `noindex` not-found page.

Five items cannot be resolved from inside this repository and are flagged for human decision. **None of them blocks the website implementation**, and none is a fabricated or hidden gap:

| # | Item | Status |
|---|------|--------|
| 1 | Google Play distribution track (open testing vs production) | **MANUAL CONFIRMATION REQUIRED** |
| 2 | Famant pricing / business model | **BUSINESS DECISION REQUIRED** |
| 3 | Gemini / AI architecture disclosure | **APPLICATION/TECHNICAL DECISION REQUIRED** |
| 4 | Privacy / Terms / Cookies counsel review | **LEGAL REVIEW REQUIRED** |
| 5 | Google Search Console verification + sitemap submission | **MANUAL SEO ACTION** |

Because the product's Play track could not be confirmed from any file in this repository, the site continues to describe Famant's release stage as **beta**. This is deliberate. A truthful "beta, available on Google Play" is stronger evidence of a real product than an unverified claim of general availability, and it protects the application from a contradiction if a reviewer opens the Play listing.

---

## 2. Changes Implemented

All changes were made directly in this repository, built, and verified. 14 source files changed (+251 / −54 lines).

### 2.1 Antutive → Famant cross-linking (the critical gap)

| File | Change |
|------|--------|
| `src/app/content/famant.ts` | `FAMANT_SITE_URL` was defined but **never used anywhere**. Documented it as the single source of the product-site URL and added `FAMANT_SITE_LABEL` (`famant.com`) for consistent link text. |
| `src/app/components/RootLayout.tsx` | Footer "Products" column now carries **`famant.com ↗`** and **`Famant on Google Play ↗`** as real external links, so every page on the site has an outbound path to the product. |
| `src/app/pages/Famant.tsx` | Added a **"Visit famant.com"** link in the hero CTA row and a **"Go to famant.com"** button beside the Google Play button in the download section; the closing line now states the product has its own site. |
| `src/app/pages/Home.tsx` | Famant spotlight section now links to **famant.com** below the CTA row. |
| `src/app/pages/Products.tsx` | Famant flagship portfolio card now links to **famant.com**. |
| `src/app/pages/Legal.tsx` | The three existing `famant.com` prose mentions (Privacy, Cookies) are now **real anchors**, and Terms now explicitly scopes itself to the website and links out to the product site. |
| `index.html` | `Organization` JSON-LD gained a `brand` node pointing at `https://www.famant.com/en`. |

**Result:** every prerendered page (including `404.html`) now contains at least two `famant.com` references; the Famant page contains six.

### 2.2 Soft-404 fix (HTTP status behaviour)

| File | Change |
|------|--------|
| `vercel.json` | **Removed the catch-all rewrite** `{"source": "/(.*)", "destination": "/index.html"}`. This rewrite was the cause of the soft 404: it served the home shell with HTTP 200 for every nonexistent URL. The two legacy 301 redirects (`/custom-platform`, `/growth-marketing`) are preserved unchanged. |
| `scripts/prerender.mjs` | Now also emits **`dist/404.html`** — the app's own branded NotFound page, prerendered, marked `noindex`, and deliberately **without a canonical link**. |

**Why this is safe for SPA routing:** every public route is already prerendered to its own file on disk (`dist/famant/index.html`, etc.), so the host resolves real routes from the filesystem without any rewrite. The only paths that now fall through to `404.html` are paths that genuinely do not exist. Client-side routing within the app is untouched — React Router still handles in-app navigation, including the `*` → NotFound route.

The canonical link is deliberately omitted from `404.html` for two reasons: a canonical would invite indexing of a page that does not exist, and `src/main.tsx` uses the canonical to decide whether the served document matches the requested route — with none present it re-renders cleanly instead of attempting to hydrate 404 markup against a different URL.

### 2.3 Product-stage language (B3b)

Wording that read as *pre-launch access requests* was replaced with wording that reads as *downloading a shipped app*. The release stage itself ("beta") was **not** removed, because it is true and unverified-otherwise.

| Before | After | Location |
|--------|-------|----------|
| `Get beta access` | `Get the beta on Google Play` | Famant screenshots section |
| `Try the Famant Beta` | `Get the Famant beta` | Famant hero CTA |
| `Try the beta` | `Get the beta` | Contact CTA, Home spotlight, footer |
| `Try Famant Beta` | `Get the Famant beta` | Products portfolio card |

Verified in the built output: **0** occurrences of `get beta access`, `request access`, `join the waitlist`, `try the beta`, `waitlist` (as copy), `coming soon`, `early access` or `pre-launch`.

### 2.4 Metadata and structured data

| File | Change |
|------|--------|
| `src/app/lib/routeMeta.ts` | Famant title changed from `Famant: AI-powered family management app, now in beta \| Antutive` to **`Famant: AI-powered family app, beta on Google Play \| Antutive`** — shorter for SERP, still truthful about stage, and now surfaces the real distribution channel. Famant description now names ANTUTIVE AB and `famant.com`. Products description now names Google Play. Added an optional `jsonLd` field to `RouteMeta`. |
| `src/app/lib/routeMeta.ts` | Added `SoftwareApplication` JSON-LD for `/famant`: name, category, `operatingSystem: Android`, `url` → famant.com, `downloadUrl`/`installUrl` → the real Play listing, `softwareVersion: "beta"`, and a `publisher` node carrying ANTUTIVE AB + org.nr. **No `offers`/price node was added** — pricing is unverified (see §4.1). |
| `src/app/lib/seo.ts` | `usePageMeta` now manages the route-scoped JSON-LD block during client-side navigation, mirroring what the prerenderer bakes in. |
| `scripts/prerender.mjs` | Injects route-scoped JSON-LD into `<head>` at build time, with `<` escaped. |
| `index.html` | Site-wide `Organization` JSON-LD gained `legalName`, a `founder` node (Vinayak Panchaman, Founder & CEO, LinkedIn `sameAs`) and a `brand` node (Famant → famant.com). *Note: a `vatID` field was considered and deliberately not added — a Swedish organisation number is not a VAT number, and asserting one would have been a fabricated identifier.* |
| `public/sitemap.xml` | `lastmod` refreshed to `2026-09-10` on all nine URLs. Route set unchanged and still matches `routes.tsx` and `ROUTE_META` exactly. |

### 2.5 Stale services-era content removed

| File | Change |
|------|--------|
| `public/site.webmanifest` | Description was still the retired services-era strapline: *"AI Solutions, Human Impact. Swedish product engineering company in Gothenburg."* Replaced with the current canonical company description. This was the **only** surviving services-era positioning string in shipped output. |

### 2.6 Legal accuracy corrections

| File | Change |
|------|--------|
| `src/app/pages/Legal.tsx` (Terms) | Removed a statement that had become factually wrong: *"descriptions of product capabilities carry status labels"*. Per-capability status labels were removed from the site in commit `eb57e5a9`; the Terms text still promised them. Replaced with an accurate description ("described as they work in the current beta"). |
| `src/app/pages/Legal.tsx` (Privacy) | Clarified that Famant app/product data is governed by the notices at signup **and inside the app**, and linked famant.com. |
| `src/app/pages/Legal.tsx` (Cookies) | Third-party section now names Google Play alongside famant.com, matching the outbound links the site actually has. |
| `src/app/pages/Legal.tsx` (file header) | The source comment instructed that counsel-reviewed versions "must replace this copy **before any Famant beta ships**" — the beta has shipped, so the instruction was stale and misleading to future editors. Rewritten to state the real condition: the notice stays until reviewed documents exist in the repository. |
| `src/app/content/famant.ts` (file header) | Added an explicit editorial rule that the Google Play distribution track is undocumented and the site must not claim general availability without written evidence. |

**The visible "interim / pending legal review" notice was NOT removed.** No counsel-reviewed document exists in this repository, and removing the notice would imply a legal review that has not happened. See §4.4.

---

## 3. Workstream B Status

| Item | Requirement | Before | Action Taken | Verification | Final Status |
|------|-------------|--------|--------------|--------------|--------------|
| **B1** | Product-company positioning | Already strong across all pages; one stale services-era string survived in `site.webmanifest` ("product engineering company") | Replaced the manifest description with the canonical company description | Built-output scan for `consulting\|consultanc\|agency\|outsourc\|our services\|hire us` → **0 matches**; `AI-first product company` present in title, description, OG, Twitter, JSON-LD, header chip and footer bar | **COMPLETE** |
| **B2** | Famant product evidence | 6 real screenshots present; Google Play link working; **no link to famant.com anywhere** | Added famant.com links on Famant page (×2), Home, Products, footer (all pages) and in `brand` + `SoftwareApplication` JSON-LD; strengthened download CTA wording | Famant page: 6 famant.com refs, 5 Play refs; all 6 screenshot files exist and are served (HTTP 200 each); ownership line renders on Home, Products, Famant | **COMPLETE** |
| **B3a** | SSR / prerendering | Already fully prerendered (9 routes) | Preserved architecture unchanged; extended it to also emit `404.html` | Build output: 9 routes prerendered, 13–56 kB of real markup each; titles/descriptions/canonicals baked per route; content visible without JS (the intro gate is JS-only, so crawlers never see it) | **COMPLETE** |
| **B3b** | Product-stage language | "Try the beta", "Get beta access", "now in beta" in title metadata | Replaced access-request phrasing with download phrasing site-wide; rewrote the Famant title to surface Google Play; kept "beta" as the truthful release stage | 0 occurrences of `get beta access` / `try the beta` / `waitlist` (copy) / `coming soon` / `early access` / `pre-launch` in built HTML | **PARTIALLY COMPLETE** — see §4.2 (**MANUAL CONFIRMATION REQUIRED — GOOGLE PLAY DISTRIBUTION TRACK**) |
| **B3c** | Founder / team | Vinayak Panchaman, Founder & CEO, real photo, LinkedIn link — all present | Preserved exactly; added a `founder` node to site-wide JSON-LD so the identity is machine-readable on every page | `dist/about/index.html` contains the name (×2 visible), photo `alt`, LinkedIn `aria-label`, and `https://www.linkedin.com/in/vinayak-panchaman/`; `public/brand/vinayak-panchaman.jpg` exists and serves (HTTP 200) | **COMPLETE** (one sub-item flagged — see §6.1, draft founder quote) |
| **B3d** | Entity / company block | ANTUTIVE AB + org.nr 559576-7228 in footer, About registration card, Contact, Privacy, Terms, Home company strip, JSON-LD | Preserved; added `legalName` to JSON-LD | Org.nr present in every one of the 10 prerendered files; About shows a dedicated registration card (Company Name / Organisation No. / Registered) | **COMPLETE** |
| **B3e** | Legal pages | Privacy / Terms / Cookies exist; all three carry an "interim … prepared with legal counsel" notice; Terms contained a claim that no longer matched the site | Corrected the inaccurate Terms clause; linked famant.com; clarified app-data scope; named Google Play in Cookies; corrected a stale source-level instruction. **Interim notice deliberately retained.** | Policies verified consistent with actual behaviour: repo-wide scan confirms **no analytics, no tag manager, no tracking pixels, no form backend** — matching exactly what the policies claim. Only browser storage is `antutive.intro.played` (session), which Cookies documents | **LEGAL REVIEW REQUIRED** — see §4.4 |
| **B3f** | Technical / 404 | Vercel catch-all rewrite returned **HTTP 200** for every unknown URL (soft 404) | Removed the catch-all rewrite; prerenderer now emits a branded `noindex` `dist/404.html` | Served `dist/` locally through a server replicating Vercel's static resolution order: 9 routes + 6 asset paths → **200**; `/this-page-does-not-exist`, `/famant/nope`, `/admin` → **404** with the branded page, `noindex` present, no canonical | **COMPLETE** (production re-verification listed in §6.2) |
| **B4** | Minimum page set | Home, Products, Famant, Technology, About, Contact, Privacy, Terms, Cookies all present | No new pages created — the required set already existed | All 9 routes return 200 with unique titles/descriptions/canonicals; every internal `href` in built HTML resolves to a real route (**0 broken internal links**); all 17 referenced assets exist on disk | **COMPLETE** |
| **B5** | Antutive ↔ Famant cross-linking | **Failing.** `FAMANT_SITE_URL` defined but unused; only incidental prose mentions in Privacy/Cookies | Added real links from footer (site-wide), Famant hero, Famant download section, Home spotlight, Products card, all three legal pages, plus `brand` and `SoftwareApplication` structured data | Every prerendered page ≥ 2 famant.com references; Famant page = 6; links are `target="_blank" rel="noopener noreferrer"` with screen-reader "(opens in a new tab)" text | **COMPLETE** (Antutive → Famant direction; the return direction is the Famant repository's responsibility — see §5) |

---

## 4. Additional Audit Items

### 4.1 Pricing / business model — **BUSINESS DECISION REQUIRED**

**Finding:** the website displays no pricing. This is correct and was left unchanged.

Searched for approved pricing across the repository. The only pricing figures found are in `ANTUTIVE_AB_Strategic_Business_Plan_v2.docx`, which:

1. is **listed in `.gitignore`** and therefore explicitly treated as non-shipping internal material;
2. is the **services-era plan** (consultancy pillars, "3× the speed of traditional Nordic consultancies") that the current product-company positioning replaced;
3. describes Famant pricing as a *projection* — "Freemium SaaS: free tier … premium subscription (79–129 SEK/month)" — not an approved public price;
4. explicitly states **"ANTUTIVE does not publish prices."**

That is a forecast, not approved product pricing. No price, plan, tier or subscription claim was added to the site, and no `offers` node was added to the Famant `SoftwareApplication` JSON-LD.

> **BUSINESS DECISION REQUIRED — PRICING.** Decide whether Famant's business model (free during beta? freemium? price points?) is final and public. If it is, it can be added to the Famant product experience. Until then, showing nothing is correct — and it must match whatever the Famant site says.

### 4.2 Google Play / iOS — **MANUAL CONFIRMATION REQUIRED**

**Google Play — verified present and working.**
The link `https://play.google.com/store/apps/details?id=com.famant.app&hl=en_IN` is a real public Play Store listing URL, lives in exactly one place (`src/app/content/famant.ts`), and is reachable from the Famant hero, the download section, and the footer of every page.

**Distribution track — not determinable from this repository.**
Nothing in the repository records whether the Play listing is on the **production track** or an **open-testing (beta) track**. The repository's own editorial rule states Famant is "ready for beta testing (2026-08)" and every page says "beta". Because a Play listing URL looks identical for both tracks, the track cannot be inferred from the URL.

> **MANUAL CONFIRMATION REQUIRED — GOOGLE PLAY DISTRIBUTION TRACK.** Open Play Console → Famant → Release overview. If the app is on the **production** track and publicly installable without joining a testing programme, the word "beta" should be removed site-wide. Everything needed to do that is centralised: `STAGE_LINE` and the file header in `src/app/content/famant.ts`, plus the `/famant` and `/products` entries in `src/app/lib/routeMeta.ts`. If it is on **open testing**, the current wording is already correct and nothing changes.

**iOS / App Store — correctly absent, by documented decision.**
`FAMANT_IOS_APP_STORE_LINK.docx` (2026-09-07) states the App Store link is *"Temporarily removed from the Antutive website until the App Store description is updated."* That is a newer explicit decision to keep iOS **off** the site, so no iOS CTA was added.

Verified: **0 occurrences** of `apps.apple.com`, `App Store`, `TestFlight` or `app-store` anywhere in the built output — including the JavaScript bundle. The `FAMANT_IOS_BETA_URL` constant is retained in source for internal recovery (as the docx instructs) but is unused, and tree-shaking removes it entirely from `dist/assets/*.js` (confirmed: 0 matches).

### 4.3 Gemini / AI architecture — **APPLICATION/TECHNICAL DECISION REQUIRED**

The Technology page carries an explicit editorial rule in source: *"publish only what is verified. The intended model/cloud architecture … is NOT yet documented and confirmed by the technical lead, so no provider, model or platform is named anywhere on this page."*

The public copy is correspondingly generic — "managed cloud infrastructure", "modern foundation models", "The full architecture, published when it's confirmed", "which models power which capability". No provider or model is named.

**No approved architecture documentation exists in this repository**, so nothing was invented. No Gemini, Vertex AI, Google Cloud or any other provider reference was added. The only Gemini mentions found anywhere in the repository are in the gitignored services-era business plan, where Gemini appears in a list of third-party APIs for an unrelated client-facing platform — not as a statement about Famant.

> **APPLICATION/TECHNICAL DECISION REQUIRED — GEMINI ARCHITECTURE.** This is the item most likely to matter to the AI-track application, because the application form may ask for evidence of Google Cloud / Gemini usage. **The website copy and the application answers must not contradict each other.** Two coherent options:
>
> - **(a)** If Famant genuinely runs on Google Cloud / Gemini today, confirm the specifics and publish them concretely on the Technology page. The page is already written to receive them — the "published when it's confirmed" section is a placeholder shaped for exactly this.
> - **(b)** If the model/cloud decision is genuinely unresolved, leave the website as is and ensure the application answer describes intent rather than a deployed architecture.
>
> What must **not** happen is claiming Gemini in the application while the website says the architecture is unconfirmed, or vice versa.

### 4.4 Risky / unverifiable claims — **NONE FOUND, NONE ADDED**

Full scan of the built output for: performance multipliers, "3× faster", guaranteed savings, customer counts, SLA, GDPR compliance claims, ISO certification, EU AI Act compliance, security certifications, data residency guarantees, encryption guarantees, funding, revenue, unsupported AI claims.

**Result: 0 matches.** The site was already disciplined here and nothing was added. Specifically:

- **`SLA`** — 1 source-comment match only (`Contact.tsx`: "what happens to your message — honest, no SLA claims"). The other 29 raw matches are the CSS strings `translate` / `translateX` / `translateY`. No SLA is offered anywhere.
- **`GDPR`** — 2 matches, both legitimate and **not** compliance claims: the Contact form's consent checkbox (`id="gdpr"`, describing how the message will be processed) and the Privacy page's statement of the *visitor's rights* under the GDPR, including the right to complain to IMY. Stating that a person has rights under a law is not a claim of certification.
- **`ISO`, `EU AI Act`, `certif*`, `SOC 2`, `data residency`** — 0 matches.
- The Technology page's explicit "Won't claim" list includes *"Compliance badges without reviewed policies behind them"*, and the Famant page states security/privacy practices are published *"as they are implemented and reviewed: implemented controls only, no compliance badges."* Both remain accurate.

### 4.5 Google Search Console — **MANUAL SEO ACTION**

No verification is configured. Scanned for `google-site-verification` meta tags, DNS-TXT verification notes and Search Console HTML verification files: **none exist**. No token was invented.

> **MANUAL SEO ACTION — ADD DOMAIN TO GOOGLE SEARCH CONSOLE AND SUBMIT SITEMAP.** Add `antutive.com` as a Domain property (DNS TXT record — preferable to the meta-tag method, since it covers the apex and all subdomains at once), then submit `https://antutive.com/sitemap.xml`.

**This is not an official Google Cloud for Startups eligibility requirement.** It improves indexing and makes the company easier for a reviewer to find in search, and it lets you confirm the new 404 behaviour in the Coverage report. It should not be represented in the application as a programme prerequisite.

### 4.6 SEO / indexability

| Check | Result |
|-------|--------|
| Prerendering | ✅ All 9 public routes prerendered with full markup (13–56 kB body each) |
| Titles | ✅ 9 unique, descriptive titles; verified in built HTML |
| Descriptions | ✅ 9 unique descriptions; verified in built HTML |
| Canonical URLs | ✅ Correct absolute canonical per route; deliberately absent on 404 |
| `robots.txt` | ✅ `User-agent: * / Allow: /` + sitemap reference; serves 200 |
| `sitemap.xml` | ✅ 9 URLs, exactly matching `routes.tsx` and `ROUTE_META`; `lastmod` refreshed |
| JSON-LD | ✅ `Organization` (with `legalName`, `identifier`, `address`, `founder`, `brand`) site-wide + `SoftwareApplication` scoped to `/famant` only (verified: present on `/famant`, absent on the other 9 files) |
| Open Graph | ✅ Per-route `og:title` / `og:description` / `og:url` + 1200×630 `og-image.png` (verified 200, correct positioning text) |
| Twitter metadata | ✅ `summary_large_image` with per-route title/description |
| Crawlability | ✅ Content present in initial HTML; the intro overlay gate is JS-only and never hides content from crawlers or no-JS clients |
| Redirects | ✅ Both legacy 301s preserved in `vercel.json`; client-side equivalents preserved in `routes.tsx` |
| Production `noindex` | ✅ Present only on `404.html`; **0** production pages carry a robots meta |
| Broken links | ✅ 0 broken internal links; all 17 referenced assets exist |
| 404 behaviour | ✅ Fixed and tested (see §7.4) |
| www / apex behaviour | ⚠️ Not determinable from the repository — see §6.2 |

---

## 5. Cross-Site Requirements

This repository establishes the **Antutive → Famant** direction. For the combined audit to close, the Famant completion report must confirm the following, and any disagreement between the two reports is itself a finding:

1. **Return link — Famant → Antutive.** `famant.com` must link back to `antutive.com`, identifying ANTUTIVE AB as the operating company. This report has verified the outbound direction only.
2. **Identical product-stage wording.** This site says Famant is **in beta, available on Google Play**. If the Famant site says "launched", "generally available", or conversely "coming soon" / "join the waitlist", the two sites contradict each other and a reviewer will notice.
3. **Same Google Play link and same distribution track.** This site links `https://play.google.com/store/apps/details?id=com.famant.app`. The Famant site must use the same listing, and both reports must state the same track answer (§4.2).
4. **No iOS/App Store CTA on either site** until the App Store description is updated and the 2026-09-07 decision in `FAMANT_IOS_APP_STORE_LINK.docx` is formally reversed. If the Famant site currently shows an App Store button, that is a live cross-site inconsistency.
5. **Same business-model position.** This site shows no pricing. If the Famant site shows prices, plans or tiers, they must be approved and this site must be updated to match — or they must be removed there.
6. **Same company and founder facts.** ANTUTIVE AB · org.nr **559576-7228** · Gothenburg, Västra Götalands län, Sweden; founder Vinayak Panchaman, Founder & CEO. Any different organisation number, address or title on the Famant site is a defect on that side.
7. **Consistent legal posture.** This site's legal pages are marked interim/pending counsel review, and explicitly state that Famant product/app data is governed by the notices on famant.com and inside the app. The Famant site must actually carry those product-level notices — this site now points at them.
8. **Same AI-architecture disclosure level.** If the Famant site names Gemini, Vertex AI or Google Cloud while this site says the architecture is unconfirmed, one of the two is wrong (§4.3).

---

## 6. Remaining Manual Actions

### 6.1 Founder / business actions

1. **Confirm the Google Play distribution track** (§4.2). This is the single highest-value item: it determines whether "beta" stays on the website. *Owner: founder. Source of truth: Play Console → Release overview.*
2. **Decide Famant's public business model** (§4.1) — free during beta, freemium, or priced. *Owner: founder.*
3. **Approve or retire the founder quote.** `src/app/pages/About.tsx` renders a blockquote attributed to Vinayak Panchaman, and the source marks it: *"DRAFT founder statement — website copy pending Vinayak Panchaman's approval before it may be treated as an attributed quote."* It is currently published as an attributed statement. It should either be explicitly approved (and the DRAFT comment removed) or replaced with wording that has been approved. *Owner: Vinayak Panchaman.* This was left in place rather than removed, because deleting published founder content is a judgement call that belongs to the founder.

### 6.2 Technical / backend actions

1. **Confirm the 404 fix on the deployed domain after the next deploy.** The fix is verified locally against Vercel's static resolution order, but the production status code should be confirmed once: `curl -I https://antutive.com/this-page-does-not-exist` must return `HTTP/2 404`, and `curl -I https://antutive.com/famant` must still return `200`. Spot-check all nine routes.
2. **Confirm www / apex behaviour.** Not determinable from the repository — no domain configuration is stored here. In the Vercel dashboard, verify that exactly one of `antutive.com` / `www.antutive.com` is primary and the other 301-redirects to it. Canonical tags already point at the apex (`https://antutive.com`), so the apex should be primary.
3. **Optional — add a type-check gate.** This repository has **no** TypeScript compiler, no `tsconfig.json`, no linter and no test runner (verified: `node_modules/.bin` contains none of `tsc`, `eslint`, `vitest`, `jest`). Vite/esbuild strips types without checking them, so the production build is currently the only automated gate. Adding `typescript` + a `tsconfig.json` + a `"typecheck": "tsc --noEmit"` script would catch type regressions before deploy. Not done here: it adds dependencies and was outside the audit's safe-change boundary.
4. **Minor housekeeping.** `dist/index.html` is the only file under `dist/` tracked by git, while the rest of `dist/` is gitignored. It is a stray build artifact that every build re-dirties. Consider `git rm --cached dist/index.html`. Left in place to avoid changing anything a deployment might depend on.

### 6.3 Legal actions

1. **Commission counsel review of Privacy, Terms and Cookies** (§4.4 / B3e). Until reviewed documents exist, the visible interim notice must stay — removing it would assert a review that has not occurred.
2. **Confirm Famant's product-level privacy notice actually exists** at signup on famant.com and inside the app. This site's Privacy Policy now points users there, so that notice must be real.
3. **Re-open the Cookies page if analytics is ever added.** The Cookies page currently states — accurately, and verified by repository scan — that the site sets no analytics or tracking cookies. If analytics is introduced, the Cookies page and a consent mechanism must land *before* the tag does, exactly as that page promises.

### 6.4 Google Cloud application actions

1. **Align the application's AI-architecture answer with the Technology page** (§4.3). Choose option (a) or (b) and make both artefacts say the same thing.
2. **Use the verification path in §8** when the application asks for evidence of a real product.
3. **Cite ANTUTIVE AB, org.nr 559576-7228** as the applying entity — it matches the website footer, the About registration card and the site-wide structured data, so a reviewer can cross-check it against the Bolagsverket registry.
4. **Do not cite Search Console verification as a programme prerequisite** (§4.5).

### 6.5 SEO / Search Console actions

1. **Add `antutive.com` to Google Search Console** and **submit the sitemap** (§4.5).
2. After deploying, **request indexing for `/famant`** — it is the page that carries the product evidence and the new `SoftwareApplication` structured data.
3. **Validate the structured data** with Google's Rich Results Test for `/` (Organization) and `/famant` (SoftwareApplication) once live.

---

## 7. Verification Results

All results below were produced by actually running the commands described. Nothing in this section is asserted without having been executed.

### 7.1 Build

`npm run build` — **passed**, twice (baseline before changes, and final after changes).

```
✓ 1632 modules transformed.
dist/index.html                   4.66 kB │ gzip:   1.58 kB
dist/assets/index-DM9NrL6p.css  139.83 kB │ gzip:  24.44 kB
dist/assets/index-nLo9NYFv.js   491.87 kB │ gzip: 151.77 kB
✓ built in 3.40s
vite v6.3.5 building SSR bundle for production...
dist-ssr/entry-server.js  217.57 kB
✓ built in 415ms
prerendered /            → dist\index.html (56 kB body)
prerendered /products    → dist\products\index.html (40 kB body)
prerendered /famant      → dist\famant\index.html (54 kB body)
prerendered /technology  → dist\technology\index.html (56 kB body)
prerendered /about       → dist\about\index.html (33 kB body)
prerendered /contact     → dist\contact\index.html (30 kB body)
prerendered /privacy     → dist\privacy\index.html (14 kB body)
prerendered /terms       → dist\terms\index.html (13 kB body)
prerendered /cookies     → dist\cookies\index.html (13 kB body)
prerendered /404         → dist\404.html (13 kB body, noindex)
prerendered 9 routes + 404.html.
```

The prerenderer fails the build if any route's markup is under 2 kB or if any metadata pattern is missing, so a passing build is itself a per-route prerender assertion.

### 7.2 Lint / type-check / tests

**Not run — none exist in this repository.** No `tsconfig.json`, no `typescript`, no ESLint, no test runner (verified against `package.json` and `node_modules/.bin`). The build is the only automated gate available, and it passes. This is reported as an absence, not a pass. See §6.2 item 3.

### 7.3 Route verification (served from `dist/`)

Served through a local server replicating Vercel's static resolution order (exact file → `<path>.html` → `<path>/index.html` → `404.html`):

```
/                                        200  61718 bytes
/products                                200  46008 bytes
/famant                                  200  61082 bytes
/technology                              200  61743 bytes
/about                                   200  38489 bytes
/contact                                 200  35116 bytes
/privacy                                 200  18070 bytes
/terms                                   200  17287 bytes
/cookies                                 200  17021 bytes
/sitemap.xml                             200  1056 bytes
/robots.txt                              200  66 bytes
/site.webmanifest                        200  552 bytes
/og-image.png                            200  61192 bytes
/brand/vinayak-panchaman.jpg             200  150436 bytes
/media/famant/famant-home-phone.jpg      200  164646 bytes
/this-page-does-not-exist                404
/famant/nope                             404
/admin                                   404
```

### 7.4 Nonexistent-route behaviour (B3f)

```
status:          404
has noindex:     True
has 404 heading: True
has canonical:   False
title:           Page not found | Antutive
```

The deliberately nonexistent route returns a real HTTP 404, serving the branded not-found page with `noindex` and no canonical. Before this change it returned HTTP 200 with the home page shell.

### 7.5 Metadata verification (from built HTML)

| Route | Title | Canonical |
|-------|-------|-----------|
| `/` | Antutive \| AI-first product company | `https://antutive.com/` |
| `/products` | Products built and operated by Antutive | `https://antutive.com/products` |
| `/famant` | Famant: AI-powered family app, beta on Google Play \| Antutive | `https://antutive.com/famant` |
| `/technology` | Technology: how Antutive builds AI-first products | `https://antutive.com/technology` |
| `/about` | About Antutive, an AI-first product company | `https://antutive.com/about` |
| `/contact` | Contact Antutive | `https://antutive.com/contact` |
| `/privacy` | Privacy Policy \| Antutive | `https://antutive.com/privacy` |
| `/terms` | Terms of Service \| Antutive | `https://antutive.com/terms` |
| `/cookies` | Cookies \| Antutive | `https://antutive.com/cookies` |
| `404.html` | Page not found \| Antutive | *(none — intentional)* |

All 9 descriptions unique and present. Robots meta present on `404.html` only.

### 7.6 JSON-LD verification

`SoftwareApplication` scoping — present on `/famant`, absent on all other pages:

```
index.html: 0   products: 0   famant: 1   technology: 0   about: 0
contact: 0      privacy: 0    terms: 0    cookies: 0      404: 0
```

Baked into `dist/famant/index.html`:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Famant",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Android",
  "url": "https://www.famant.com/en",
  "sameAs": ["https://www.famant.com/en", "https://play.google.com/store/apps/details?id=com.famant.app&hl=en_IN"],
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.famant.app&hl=en_IN",
  "installUrl": "https://play.google.com/store/apps/details?id=com.famant.app&hl=en_IN",
  "softwareVersion": "beta",
  "description": "Famant is an AI-powered family management and household coordination platform…",
  "publisher": { "@type": "Organization", "name": "ANTUTIVE AB", "url": "https://antutive.com/", "identifier": "559576-7228" }
}
```

Site-wide `Organization` JSON-LD verified present in all 10 files, now including the `founder` and `brand` nodes.

### 7.7 Founder, company and product-link verification

| Check | Result |
|-------|--------|
| Founder name in structured data | ✅ all 10 prerendered files |
| Founder name, photo `alt`, LinkedIn link visible on About | ✅ `https://www.linkedin.com/in/vinayak-panchaman/` present; photo serves 200 |
| Founder placeholder branch rendered? | ✅ No — real photo present, so the placeholder never renders (0 `placeholder` matches in `dist/about/index.html`) |
| Org.nr `559576-7228` | ✅ present in all 10 prerendered files |
| `famant.com` links | ✅ index 3, products 3, famant 6, technology 2, about 2, contact 2, privacy 3, terms 3, cookies 3, 404 2 |
| Google Play links | ✅ present on all 10 files (famant: 5) |
| Broken internal links | ✅ 0 |
| Missing assets | ✅ 0 of 17 |

### 7.8 Final keyword re-scan

Scan of `src/`, `index.html` and `public/` (excluding vendored `components/ui/`). Every remaining occurrence is explained:

| Term | Count | Explanation |
|------|-------|-------------|
| `beta` | 86 | Famant's **true** release stage. Retained deliberately pending §4.2. All CTA phrasing now reads as download, not access-request. |
| `waitlist` | 2 | A single `<span id="waitlist" aria-hidden="true" />` legacy anchor on the Famant page (so old `/famant#waitlist` links still land correctly) plus its explanatory comment. **Not user-visible copy** — no waitlist exists or is offered. |
| `early access` / `coming soon` / `pre-launch` | 0 | None. |
| `interim` | 2 | The deliberate "interim version … pending legal review" notice on the legal pages, plus the source comment governing it. See §4.4/§6.3. |
| `legal counsel` | 1 | Same notice. |
| `TODO` / `FIXME` | 0 | None. |
| `placeholder` | 9 | 6 are HTML form `placeholder` attributes on the Contact form; the rest are code comments and the About founder-photo fallback branch (which does not render, because the real photo exists) and the Products "future slots" comment. |
| `consulting` / `agency` / `outsourc` | 0 | None in source or output. |
| `services` | 0 in copy | Only the CSS class name `.services-grid-bg` (a background-pattern utility) — an internal identifier, not visible text. |
| `SLA` | 1 real | Source comment "honest, no SLA claims". Other raw matches are `translate`/`translateX`/`translateY`. No SLA offered. |
| `GDPR` | 2 | Contact consent checkbox + Privacy statement of the visitor's statutory rights. Neither is a compliance claim. |
| `ISO` / `EU AI Act` / `certif*` | 0 | None. |
| `pricing` | 1 | The editorial rule comment in `famant.ts` **forbidding** pricing claims. No price appears on the site. |
| `subscription` | 0 | None. |
| `App Store` / `iOS` | 9 in source, **0 in output** | Source comments documenting the 2026-09-07 withdrawal decision, the retained-but-unused `FAMANT_IOS_BETA_URL`, and an `"iOS" \| "Android"` type union. Tree-shaken out: **0** occurrences of `apps.apple.com` in `dist/` including the JS bundle. |
| `TestFlight` | 0 | None. |

### 7.9 Analytics integrity

Repository-wide scan for `gtag`, `googletagmanager`, `analytics`, `plausible`, `posthog`, `mixpanel`, `hotjar`, `fbq`: **no tracking of any kind is installed**, and none was added or removed. The only client storage is `sessionStorage["antutive.intro.played"]`, which the Cookies page documents accurately. The Contact form still composes a `mailto:` in the visitor's own mail client and sends nothing to a backend — matching what the Privacy Policy states.

### 7.10 What was explicitly preserved

Analytics posture · contact form behaviour · responsive layout · accessibility affordances (skip link, ARIA labels, keyboard-navigable lightbox, focus management) · prerendering architecture · `robots.txt` · sitemap route set · both legacy 301 redirects · the Google Play link · founder photo, name, title and LinkedIn · org.nr and registered address · the interim legal notices · the intro animation and its no-JS/crawler-safe gate · production deployment configuration (only the soft-404 rewrite was removed).

---

## 8. Google Cloud Reviewer Journey

What a reviewer now encounters, step by step:

**1 — `antutive.com` (Home).**
Title and H1 establish an AI-first product company: *"We build products where AI does the heavy lifting."* Four fact chips sit above the fold: **Products · Built in-house**, **Famant · First flagship product**, **Gothenburg · Registered in Sweden**, **Org.nr · 559576-7228**. No services, no consulting, no client work. Full content is in the initial HTML — the reviewer's crawler or a JS-disabled browser sees everything.

**2 — Company verification.**
A dedicated company strip on Home shows *"ANTUTIVE AB · Org.nr 559576-7228 · Gothenburg, Sweden — A registry-verifiable company."* The same identity is in the footer of every page and in `Organization` JSON-LD with `legalName`, `identifier` and a Swedish `PostalAddress`. The organisation number can be checked directly against Bolagsverket.

**3 — `/about` → founder verification.**
A registration card lists Company Name, Organisation No. and registered location. The founder section shows a real photograph of **Vinayak Panchaman, Founder & CEO**, with a working link to his LinkedIn profile. The same person now appears as a `founder` node in structured data on every page, so it is machine-verifiable as well as human-readable.

**4 — `/famant` → real product evidence.**
The product page opens with Famant as "Antutive's First Flagship Product" and states its stage plainly. Then it shows **six real screenshots of the working application** — phone and tablet captures of the family home screen with the Liv assistant, the categories screen (tasks, lists, events, documents, budgeting, meal planner), and the profile screen — each expandable in a keyboard-navigable lightbox. Six capabilities are described as mechanisms, not adjectives, and one end-to-end flow is walked through concretely (photograph an invitation → the assistant reads it → it proposes an event, a gift reminder and an RSVP task → nothing happens until a person confirms). This is the AI evidence, and it is described as behaviour rather than as a claim.

**5 — `/famant` → the dedicated Famant website.**
From the hero the reviewer can **"Visit famant.com"**, and from the download section **"Go to famant.com"**. The footer of every page carries the same link. The relationship is also asserted in structured data (`Organization.brand` → famant.com; `SoftwareApplication.url` → famant.com; `SoftwareApplication.publisher` → ANTUTIVE AB with org.nr). *(The return link famant.com → antutive.com is the Famant repository's responsibility — §5.)*

**6 — Google Play.**
A store-badge button reads **"Get the Famant beta on Google Play"** and opens the real listing (`com.famant.app`). The footer carries **"Famant on Google Play"** on every page. Structured data supplies the same URL as `downloadUrl` and `installUrl`. The reviewer can install the app and see the product for themselves — which is what makes this a genuine verification path rather than a marketing claim.

**7 — Corroboration.**
`/technology` explains how the products are built and openly states which architectural details are not yet published — a reviewer sees discipline rather than name-dropping. `/products` shows one real product and two visibly empty slots labelled "announced when real". `/contact` gives a working email, business hours and the registration details again. The legal pages state honestly that they are interim and pending counsel review.

**8 — Anything else.**
Any URL that does not exist now returns a real HTTP 404 with a branded page offering routes back into the site — not a 200 that makes the site look larger than it is.

**Net effect:** the chain **Antutive AB → founder → Famant → famant.com → Google Play → installable app** is complete and independently checkable at every link. Nothing in it depends on trusting the website's own claims.

---

## 9. Final Readiness Verdict

### **READY WITH MANUAL ITEMS**

The Antutive corporate website is ready for the Google Cloud for Startups / AI re-application. It presents Antutive credibly as an AI-first product company operating a real, downloadable product, and every claim on it is verifiable or truthfully stage-labelled.

**Fully resolved in this repository:** product-company positioning (B1) · Famant product evidence (B2) · SSR/prerendering (B3a) · founder and team (B3c) · entity and company block (B3d) · soft-404 / technical behaviour (B3f) · minimum corporate page set (B4) · Antutive → Famant cross-linking (B5) · stale services-era content · risky-claim scan · iOS/App Store hygiene · SEO and structured data.

**Open, flagged, and not hidden:**

| Item | Status | Blocks the website? |
|------|--------|---------------------|
| Google Play distribution track | MANUAL CONFIRMATION REQUIRED | No — current wording is truthful either way |
| Famant pricing / business model | BUSINESS DECISION REQUIRED | No — showing no price is correct while undecided |
| Gemini / AI architecture | APPLICATION/TECHNICAL DECISION REQUIRED | No — but it **must** be aligned with the application answers |
| Legal pages counsel review | LEGAL REVIEW REQUIRED | No — the interim notice is honest and must stay until review happens |
| Search Console verification | MANUAL SEO ACTION | No — and it is not a programme eligibility requirement |
| Production 404 / www-apex spot-check | MANUAL VERIFICATION | No — verified locally; confirm once after deploy |
| Founder quote approval | FOUNDER DECISION | No — but it is currently published as an attributed quote marked DRAFT in source |

**The single most consequential open item is the Gemini / AI architecture decision (§4.3)** — not because the website is wrong, but because the website and the application form must tell the same story. The site currently says the architecture will be published when confirmed; if the application claims a deployed Gemini architecture, a reviewer comparing the two will find a contradiction.

**Nothing was fabricated.** No pricing, customers, funding, metrics, certifications, compliance status, security guarantees, SLAs, model names, cloud providers, iOS availability or product maturity was invented to strengthen the application. Where evidence was missing, the gap is flagged above rather than filled.

Once this report is combined with `FAMANT_GOOGLE_CLOUD_REAPPLICATION_COMPLETION_REPORT.md`, the cross-site checks in §5 will determine whether the website-related portion of the audit (A1–A10 + B1–B5) is fully closed.

---

*Report generated 2026-09-10. All verification results in §7 were produced by executing the described commands against this repository; no result is reported as passing that was not actually run.*
