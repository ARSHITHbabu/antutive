# ANTUTIVE INDEPENDENT APPLICATION READINESS AUDIT

**Subject:** antutive.com (ANTUTIVE AB, Gothenburg, Sweden) and its public presentation of the Famant product
**Audit date:** 11 September 2026
**Audited state:** repository branch `arshith` at commit `775a8d9a`, local production build, and the live deployment at `https://antutive.com` (live HTML byte-identical to the local build output for every route, same asset hashes)
**Auditor role:** independent technical website audit, Google Cloud startup / AI program application readiness review

---

## 1. FINAL VERDICT

### READY FOR APPLICATION WITH MINOR NON-BLOCKING ITEMS

The live website at `https://antutive.com` is a production-quality, HTTPS-only, fully prerendered company site. Every public route returns HTTP 200 with complete page content, per-page metadata and structured data in the raw HTML response, and unknown URLs return a real HTTP 404 with a noindexed branded error page. The site identifies the legal entity (ANTUTIVE AB, org.nr 559576-7228, Gothenburg), a named founder with photograph and a working LinkedIn link, and one product, Famant, with six real application screenshots, a clear AI mechanism narrative, and outbound links to famant.com and a publicly reachable Google Play listing published by "Antutive AB". The reverse relationship is confirmed on famant.com, which states that Famant is a product of Antutive AB and links back to antutive.com. No blocking defects were found. The remaining items are cosmetic or business-side (interim legal copy, screenshot device framing, optional security headers), and none prevent an external reviewer from verifying the company, the founder or the product.

---

## 2. EXECUTIVE SUMMARY

Antutive presents itself, consistently across every page, metadata field and structured-data node, as an AI-first product company that builds and operates its own products. The copy explicitly excludes client work ("not to build software for hire", "not client delivery"). There is no consultancy, agency or services language anywhere in rendered output.

The company identity is complete and consistent: legal name ANTUTIVE AB, organisation number 559576-7228, Gothenburg, Västra Götalands län, Sweden, email contact@antutive.com. These facts appear in the homepage hero, the About page, the Contact page, all three legal pages, the footer of every page and the Organization JSON-LD.

The founder, Vinayak Panchaman (Founder & CEO), is named on the About page with a photograph, a quotation and a LinkedIn link, and is declared as `founder` in the Organization schema. The LinkedIn URL resolves publicly and the profile page references Antutive AB.

Famant is presented as the first flagship product: an AI-powered family management and household coordination platform. The Famant page contains a problem statement, six capability descriptions written as mechanisms, a worked end-to-end flow, a privacy section, six real screenshots (phone and tablet) of the running app, and a SoftwareApplication schema naming ANTUTIVE AB as publisher. The product stage is stated plainly and consistently everywhere as "beta, currently available on Google Play". The Google Play listing exists publicly, is titled "Famant: Share the Mental Load", and is published by "Antutive AB".

Technically, the site is a Vite/React application prerendered at build time to static HTML for nine routes plus a 404 page, hosted on Vercel with HSTS. Robots, sitemap, canonicals, Open Graph and Twitter metadata are all correct and consistent with the production domain. The production build succeeds. No lint, typecheck or test tooling is configured in the repository.

---

## 3. VERIFICATION METHODOLOGY

**Code inspection (repository):**
- Read `package.json`, `vite.config.ts`, `vercel.json`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/site.webmanifest`, `scripts/prerender.mjs`, `src/entry-server.tsx`, `src/main.tsx`, `src/app/routes.tsx`, `src/app/lib/routeMeta.ts`, `src/app/lib/seo.ts`, `src/app/lib/scroll.tsx`, `src/app/content/famant.ts`, `src/app/components/RootLayout.tsx`, `src/app/App.tsx`, and targeted sections of every page component.
- Confirmed `git status` shows no source modifications during the audit.

**Production build (local):**
- Ran `npm run build` (Vite client build, Vite SSR build, prerender script) with Node v22.23.2 / npm 10.9.8. Exit code 0.
- Enumerated `dist/` and confirmed nine route directories plus `404.html`.

**Generated HTML inspection:**
- Wrote a script that parses every `dist/**/index.html` and `dist/404.html` and extracts title, description, canonical, robots, Open Graph URL/title/image, all JSON-LD blocks (parsed with `JSON.parse`), all headings, all anchor hrefs, all `<img>` src/alt, `<video>` sources, and the tag-stripped visible text.
- Ran a term scan over the extracted visible text and reviewed every hit in context.
- Verified that every same-origin asset referenced by the HTML exists in `dist/`.

**Live verification (https://antutive.com):**
- Fetched all nine public routes, `robots.txt`, `sitemap.xml`, two invalid URLs, two legacy redirect paths, `/404.html`, `/index.html`, a trailing-slash variant, and representative image/manifest assets with `curl`, recording status codes, content types and headers.
- Diffed live HTML for `/`, `/products`, `/famant`, `/about`, `/contact`, `/privacy` and the live 404 response against the local build output (only asset hashes normalised): identical.
- Checked all four scheme/host variants for redirect behaviour and HSTS.
- Rendered `/`, `/famant`, `/about` in headless Chrome with `--dump-dom` to confirm hydration keeps the content (founder name and org number still present after JavaScript runs; all scroll-reveal wrappers reach the shown state in a tall viewport).

**Responsive rendering:**
- Headless Chrome screenshots of `/`, `/famant`, `/about`, `/contact`, `/products`, `/technology`, `/cookies` and an invalid URL at 390 px (mobile), 820 px (tablet) and 1440 px (desktop) widths, viewed as images.

**Image inspection:**
- Opened and viewed three of the six Famant screenshots, the founder photograph and the Open Graph image. Read intrinsic dimensions of all image assets.

**External destinations:**
- Fetched `https://www.famant.com/en`, `https://famant.com`, the Google Play listing (both with and without the `hl` parameter) and the founder LinkedIn URL with a browser user agent and inspected the returned HTML for identity evidence.

**Not performed (by policy):** no forms were submitted, no production data was written, no `.env` was created or modified, no penetration testing.

---

## 4. READINESS SCORECARD

| Area | Status | Evidence | Blocking? |
| --- | --- | --- | --- |
| Company positioning | PASS | "AI-first product company" in title, hero, footer, schema; explicit "not for hire" / "not client delivery"; zero consultancy/agency/services hits in rendered text | No |
| Company identity | PASS | ANTUTIVE AB, org.nr 559576-7228, Gothenburg on Home, About, Contact, legal pages, footer, Organization JSON-LD | No |
| Founder/team | PASS | Name, title, photo, quote, LinkedIn link on About; `founder` node in Organization schema; LinkedIn URL resolves (HTTP 200) | No |
| Famant product credibility | PASS | Dedicated page with problem, capabilities, flow, privacy, screenshots, CTAs; ownership line repeated; SoftwareApplication schema | No |
| Product screenshots | PASS | Six real app captures (phone + tablet), all load (HTTP 200), descriptive alt text, lightbox gallery | No |
| Google Play evidence | PASS | Listing reachable (HTTP 200), app "Famant: Share the Mental Load", developer "Antutive AB", package `com.famant.app` | No |
| Antutive ↔ Famant relationship | PASS | Antutive links to famant.com from header/footer/product pages; famant.com states "Famant is a product of Antutive AB" and links back | No |
| Initial HTML/crawlability | PASS | 13–56 kB of prerendered body markup per route; headings, copy, org number, founder present in raw HTML; live = build | No |
| Public routes | PASS | All nine routes HTTP 200 live, no auth or staging gate | No |
| HTTPS/domain | PASS | http→https 308, www→apex 308, HSTS max-age 63072000, no loops | No |
| 404 behaviour | PASS | Unknown URLs return HTTP 404, branded page, `noindex`, no canonical | No |
| Robots/indexability | PASS | `Allow: /`, sitemap declared, no `noindex` on public pages, no X-Robots-Tag | No |
| Sitemap | PASS | Nine https://antutive.com URLs, valid XML, valid lastmod, no 404/redirect URLs | No |
| Internal linking | PASS | Header, footer and in-page CTAs reach every public page; no orphans | No |
| Technical SEO | PASS | Unique titles/descriptions, self-referencing canonicals, OG/Twitter tags, one H1 per page, absolute OG image | No |
| Structured data | PASS | Valid Organization (site-wide) and SoftwareApplication (/famant) JSON-LD; consistent identifiers | No |
| Content completeness | PASS | No placeholder, lorem, TODO, draft or template text in rendered output; all sections populated | No |
| Product-stage communication | PASS | Single consistent stage statement ("beta, currently available on Google Play") across all pages, metadata and schema | No |
| Legal/trust | REVIEW RECOMMENDED | Privacy, Terms, Cookies present with company identity and contact; self-described as interim pending counsel review | No |
| Contact | PASS | contact@antutive.com on Contact page, footer-adjacent, schema; mailto form; no server-side dependency | No |
| Security sanity | PASS | No secrets, no source maps, no localhost/staging URLs in dist; all external links `rel="noopener noreferrer"`; only HSTS header present | No |
| AI credibility | PASS | Technology page explains mechanism (understanding → reasoning → proposal → confirmation), per-capability model role, explicit will/won't-claim list | No |
| Commercial consistency | NON-BLOCKING BUSINESS ITEM | No pricing, free, subscription or billing claims anywhere; nothing contradictory | No |
| Responsive UX | PASS | Mobile, tablet, desktop layouts render without overflow; header collapses to menu button; footer and legal readable at 390 px | No |
| Build quality | PASS | `npm run build` exit 0, nine routes + 404 prerendered; lint/typecheck/tests NOT CONFIGURED | No |

---

## 5. COMPANY AND FOUNDER CREDIBILITY

**Positioning.** The `<title>` of the homepage is "Antutive | AI-first product company". The hero H1 reads "We build products where AI does the heavy lifting." The homepage principles section states "Owning the product end-to-end is the company's model, not client delivery." The About page states "Antutive was founded in Gothenburg in 2026 to build and operate its own products, not to build software for hire." The Products page states "Antutive creates and operates its own AI-first products. That's the whole company." A scan of the rendered text of all ten HTML files found zero occurrences of "consult", "agency" or "services" (the only "service" hit is the footer link "Terms of Service").

**Identity.** The following appear in rendered text:

| Fact | Where |
| --- | --- |
| Legal name ANTUTIVE AB | Home hero band, About registration card (desktop) and chips (mobile), Contact, Privacy, Terms, Cookies, footer on every page, Organization and SoftwareApplication JSON-LD |
| Org.nr 559576-7228 | Same locations as above |
| Gothenburg, Västra Götalands län, Sweden | About, Contact, Privacy, footer, JSON-LD `address` |
| contact@antutive.com | Contact, all legal pages, JSON-LD `email` |
| Founding year 2026 | About ("founded in Gothenburg in 2026", "incorporated in Gothenburg in 2026") |

All occurrences use the same values. No inconsistent spellings or numbers were found.

**Founder.** The About page "The people behind Antutive" section renders: photograph (`/brand/vinayak-panchaman.jpg`, 1600×1433, HTTP 200 live, alt "Vinayak Panchaman, Founder & CEO of Antutive"), the label "Founder", the name "Vinayak Panchaman", the title "Founder & CEO", a LinkedIn button linking to `https://www.linkedin.com/in/vinayak-panchaman/` with `target="_blank" rel="noopener noreferrer"`, and a quotation. The Organization JSON-LD contains `founder: { @type: Person, name: "Vinayak Panchaman", jobTitle: "Founder & CEO", sameAs: <LinkedIn URL> }`.

**LinkedIn verification.** LINK PRESENT AND VALID: the URL returned HTTP 200 with the page title "VINAYAK PANCHAMAN - IKEA | LinkedIn", and the returned HTML contains "Antutive AB" entity references and Antutive AB company-page post links. PROFILE CONTENT EXTERNALLY VERIFIED: partial only; the full profile is behind LinkedIn's login wall and was not inspected. The profile headline as returned shows "IKEA" rather than Antutive; this is a third-party profile matter, not a website defect (see Business / Founder Confirmation).

The photograph is a real portrait. It incidentally shows a coffee mug with a different brand mark and a laptop sticker; this is cosmetic and noted under non-blocking items.

---

## 6. FAMANT PRODUCT EVIDENCE

From antutive.com alone a reviewer can establish:

- **What it is.** "Famant is an AI-powered family management and household coordination platform: one shared context for a family's schedules, tasks and documents, with an assistant that proposes actions and acts on your confirmation." (Home, Products, Famant, metadata, schema.)
- **What problem it solves.** The Famant page "Coordination is interpretation, not storage" section describes fragmented family logistics and frames the AI as handling interpretation, prioritisation and follow-through with a person confirming.
- **What users can do.** Six capabilities, each described as mechanism plus outcome: family scheduling and events, tasks and chore delegation, shared lists and reminders, document understanding (OCR and natural-language understanding), expenses and budgeting, meal and household planning. A four-step worked flow (photograph invitation → assistant reads it → proposes event/reminder/task → family confirms).
- **Who it is for.** Parents and partners, busy households, multi-generation households.
- **That it belongs to Antutive.** The line "Famant is the flagship product of Antutive (ANTUTIVE AB), built and operated in Gothenburg, Sweden." appears on Home, Products, Famant and About. The Famant page eyebrow reads "Antutive's First Flagship Product". The SoftwareApplication schema sets `publisher` to ANTUTIVE AB with the org number.
- **That a real app exists.** The "Real screens from the Famant beta" section shows six screenshots in phone and tablet frames with captions "Family home & assistant", "Tasks, lists, events & more", "Profile & preferences", plus a "Get the beta on Google Play" link. A hero video (`/media/famant.webm`) is explicitly captioned "Brand illustration. Real screenshots of the app are just below." so it cannot be mistaken for product UI.

**Screenshot inspection.** Three of the six files were opened and viewed. They show a functioning application UI: a family home screen with member avatars, mood check-in and an assistant chat prompt; a categories screen with Tasks, List, Events, Documents, Budgeting and Meal Planner tiles; and a profile screen with task/list/event counts and settings rows. These are genuine application captures with real chrome (status bars, navigation bars), not illustrations. Alt text on all six images accurately describes what is visible. Intrinsic dimensions are declared in the markup (740×1600, 992×1586, 1086×1448 etc.), so layout is reserved before load.

**Observation (non-blocking).** The three phone captures are framed in an iPhone-style device (notch, iOS status bar) while the three tablet captures are Android (Samsung navigation bar). The website links only to Google Play. The alt text says "on a phone" and "on a tablet" without naming a platform, so nothing false is stated, but a careful reviewer may notice the framing. The Google Play listing's own description mentions "beta testing on iOS and Android", so the captures are consistent with the product's actual platforms.

---

## 7. PRODUCT AVAILABILITY / STORE EVIDENCE

**What the website claims.** Every stage statement is the same sentence or a close variant: "Famant is now ready for beta testing, and the beta is currently available on Google Play." It appears in the Home hero, the Products card, the Famant hero and final CTA section, the Technology intro, the About journey section, the Contact page, the `/famant` title and description, and `softwareVersion: "beta"` in the schema. The final Famant section adds "Install it on a supported Android device to start testing". The Terms page states "Famant, the product, is in beta and not yet generally available". No "launch", "generally available", "download now" or "coming soon" claims exist; the About page says "The next milestone is launch. It gets a date when it has one."

**Store links.** The Google Play URL `https://play.google.com/store/apps/details?id=com.famant.app&hl=en_IN` is used in the header-adjacent CTAs, the Famant hero, the screenshot section, the final CTA, the footer of every page, and `downloadUrl`/`installUrl`/`sameAs` in the schema. It is the single source of truth in `src/app/content/famant.ts`.

**Live store verification (external).** The listing returned HTTP 200 (with and without the `hl` parameter). The returned HTML contains `itemprop="name">Famant: Share the Mental Load<`, the developer name "Antutive AB" with a developer-page id, the app description "Family organiser to capture tasks by voice and share the mental load", a content rating "Rated for 12+", and a description sentence containing "beta testing on iOS and Android". The package id `com.famant.app` matches the website's link.

**What cannot be established from the website or listing HTML.** The Google Play distribution track (open testing versus production) is not visible in the fetched HTML and is not claimed by the website. The website's "beta" wording is therefore not contradicted by anything observed. Install counts were not present in the fetched HTML.

**iOS.** No App Store link, badge or iOS claim is rendered anywhere on antutive.com. The source file `src/app/content/famant.ts` holds an App Store URL as an exported constant with a comment that it is intentionally not exposed; a scan of the production JavaScript bundle confirmed the string `apps.apple.com` is absent (tree-shaken). The only rendered "iOS" occurrence is on the Technology page inside a sentence about "…iOS…"; on inspection this is the word "scenarios" matching the substring, not a platform claim.

**Status: PASS.** The website makes exactly one availability claim, it is stated consistently, and the public store listing exists under the company's name.

---

## 8. ANTUTIVE ↔ FAMANT RELATIONSHIP

**Forward chain (antutive.com → famant.com → store):**

| Link | Where on antutive.com | Destination | Attributes |
| --- | --- | --- | --- |
| famant.com | Footer "Products" column on every page; Home spotlight "Visit famant.com"; Products card; Famant hero and final section | `https://www.famant.com/en` | `target="_blank" rel="noopener noreferrer"`, screen-reader "(opens in a new tab)" |
| Google Play | Footer on every page; Home "Get the beta"; Products; Famant (three places); Contact; Technology CTA | `https://play.google.com/store/apps/details?id=com.famant.app&hl=en_IN` | same |
| Schema | `/famant` SoftwareApplication `url`, `sameAs`, `downloadUrl`, `installUrl`; Organization `brand.url` | famant.com and Play | n/a |

Relationship wording is explicit and repeated: "Famant is the flagship product of Antutive (ANTUTIVE AB)…", "Famant is built and operated by Antutive in Gothenburg, Sweden. The product has its own site at famant.com."

**Reverse chain (famant.com → antutive.com), verified externally:** `https://www.famant.com/en` returned HTTP 200 with the title "Famant: The Family Organiser That Shares the Mental Load". Its HTML contains the sentence "Famant is a product of Antutive AB, Sweden.", an anchor to `https://antutive.com` with `rel="noopener noreferrer"`, the footer "© 2026 Famant · by Antutive. All rights reserved.", and an Organization JSON-LD node with `"legalName":"Antutive AB"` and `"sameAs":["https://antutive.com"]`.

**Store → company:** the Google Play developer name is "Antutive AB".

**Status: PASS.** A reviewer can traverse Antutive AB → Famant → famant.com → Google Play and back without guessing, and each hop names the same legal entity.

---

## 9. CRAWLER / INITIAL HTML RESULTS

Method: raw HTTP response bodies from the live site (no JavaScript executed), confirmed identical to the local `dist/` output. Body size is the prerendered markup inside `<div id="root">`. "Text chars" is the tag-stripped visible text length.

| Route | Meaningful Initial HTML | Metadata | Indexable | Result |
| --- | --- | --- | --- | --- |
| `/` | Yes: 56 kB body, 5,045 text chars, H1 + 6 H2, org number, Famant description | Title, description, canonical `https://antutive.com/`, OG, Twitter, Organization JSON-LD | Yes | PASS |
| `/products` | Yes: 40 kB, 2,800 chars, H1 + 4 H2 | Unique title/description, canonical, OG | Yes | PASS |
| `/famant` | Yes: 54 kB, 6,671 chars, H1 + 8 H2, six `<img>` with alt, capability copy | Unique title/description, canonical, OG, Organization + SoftwareApplication JSON-LD | Yes | PASS |
| `/technology` | Yes: 56 kB, 5,945 chars, H1 + 5 H2, capability/mechanism table | Unique title/description, canonical, OG | Yes | PASS |
| `/about` | Yes: 33 kB, 4,039 chars, founder name/title/photo/LinkedIn, org number | Unique title, canonical, OG | Yes | PASS |
| `/contact` | Yes: 30 kB, 2,158 chars, email, address, org number, form markup | Unique title/description, canonical, OG | Yes | PASS |
| `/privacy` | Yes: 14 kB, 2,610 chars | Unique title/description, canonical | Yes | PASS |
| `/terms` | Yes: 13 kB, 1,954 chars | Unique title/description, canonical | Yes | PASS |
| `/cookies` | Yes: 13 kB, 1,763 chars | Unique title/description, canonical | Yes | PASS |
| unknown URL | Yes: 13 kB branded 404 with nav links | Title "Page not found", `<meta name="robots" content="noindex">`, no canonical | No (intended) | PASS |

Every page has exactly one `<h1>`, `<html lang="en">` and a viewport meta.

**Scroll-reveal sections ship visible.** Sections wrapped in the scroll-reveal component are prerendered in their shown state (inline `opacity:1`, identity transform): 12 wrappers on `/`, 26 on `/famant`, 8 on `/about`, 9 on `/products`, 15 on `/technology`. A scan of every prerendered file found zero occurrences of `opacity:0`, `visibility:hidden` or `display:none`. With scripts blocked (Content-Security-Policy `script-src 'none'`), every page renders completely, including all cards, the founder block and the company journey graphic. With JavaScript enabled the entrance animation is applied progressively after hydration and verified in a real browser session (below-fold elements animate in on scroll, client-side navigation animates, `prefers-reduced-motion` leaves content static, `?reveal=all` remains a debug utility), with no console errors or hydration warnings.

---

## 10. ROUTE / HTTP RESULTS

Live results from `https://antutive.com` on 11 September 2026:

| Route | Loads | Initial HTML | Indexable | Notes |
| --- | --- | --- | --- | --- |
| `/` | 200 | Yes | Yes | `text/html; charset=utf-8`, 61,718 bytes, HSTS |
| `/products` | 200 | Yes | Yes | |
| `/famant` | 200 | Yes | Yes | |
| `/technology` | 200 | Yes | Yes | |
| `/about` | 200 | Yes | Yes | |
| `/contact` | 200 | Yes | Yes | |
| `/privacy` | 200 | Yes | Yes | |
| `/terms` | 200 | Yes | Yes | |
| `/cookies` | 200 | Yes | Yes | |
| `/robots.txt` | 200 | n/a | n/a | `text/plain` |
| `/sitemap.xml` | 200 | n/a | n/a | `application/xml`, identical to repo file |
| `/this-page-does-not-exist-xyz` | **404** | Branded 404 | noindex | Correct hard 404 |
| `/famant/nested-nope` | **404** | Branded 404 | noindex | Nested unknown path also 404 |
| `/products/foo` | **404** | | noindex | HEAD check |
| `/custom-platform` | 308 → `/famant` | | | Legacy path, permanent redirect from `vercel.json` |
| `/growth-marketing` | 308 → `/about` | | | Legacy path, permanent redirect |
| `/about/` (trailing slash) | 200 | Yes | canonical `/about` | Served without redirect; canonical resolves duplication |
| `/index.html` | 200 | Yes | canonical `/` | Physical file reachable; canonical resolves duplication |
| `/404.html` | 200 | Branded 404 | noindex | Physical file reachable directly; harmless because noindexed |
| `/brand/vinayak-panchaman.jpg` | 200 | | | `image/jpeg` |
| `/media/famant/famant-home-phone.jpg` | 200 | | | `image/jpeg` |
| `/og-image.png` | 200 | | | `image/png`, 1200×630 |
| `/site.webmanifest` | 200 | | | `application/manifest+json` |
| `/favicon.ico` | 200 | | | |

No route is behind authentication, password protection or a staging banner. No 5xx responses were observed.

**Domain behaviour:**

| Request | Result |
| --- | --- |
| `https://antutive.com` | 200 directly, `Strict-Transport-Security: max-age=63072000` |
| `http://antutive.com` | 308 → `https://antutive.com/` |
| `https://www.antutive.com` | 308 → `https://antutive.com/` |
| `http://www.antutive.com` | 308 → `https://www.antutive.com/` → 308 → `https://antutive.com/` (two hops, no loop) |

Canonical host is the apex `antutive.com` over HTTPS, matching every canonical tag, the sitemap and the schema.

---

## 11. TECHNICAL SEO / INDEXABILITY

**robots.txt (live and repo identical):** `User-agent: *`, `Allow: /`, `Sitemap: https://antutive.com/sitemap.xml`. No disallows. No `X-Robots-Tag` header on any route. No `noindex` meta on any public page; `noindex` only on the 404 page.

**Sitemap:** valid XML, nine `<loc>` entries, all `https://antutive.com/...`, one per public route, `lastmod` 2026-09-10 (a valid date matching the live `Last-Modified` header of 10 Sep 2026), priorities 1.0 → 0.3. No redirecting, 404 or staging URLs. Route metadata, the route table, the prerender list and the sitemap are consistent by construction (`routeMeta.ts` comment enforces this, and the prerender step throws if a route's output is too small).

**Canonicals:** every public page carries a self-referencing absolute canonical on the apex domain. The 404 page deliberately carries none. The `og:url` matches the canonical on every page.

**Titles and descriptions:** all nine are unique. Titles: "Antutive | AI-first product company"; "Products built and operated by Antutive"; "Famant: AI-powered family app, beta on Google Play | Antutive"; "Technology: how Antutive builds AI-first products"; "About Antutive, an AI-first product company"; "Contact Antutive"; "Privacy Policy | Antutive"; "Terms of Service | Antutive"; "Cookies | Antutive". The Home and About pages share the same description sentence (the canonical company description); titles differ, so this is acceptable and not a duplicate-page signal.

**Social metadata:** `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` (absolute, 1200×630, HTTP 200, `og:image:width/height` set), `twitter:card summary_large_image`, `twitter:title/description/image` on every page. The OG image was viewed: Antutive wordmark, "AI-first product company", "Gothenburg, Sweden · antutive.com".

**Heading structure:** one H1 per page, descriptive H2/H3 hierarchy, footer H4s.

**Structured data:** see section 17 summary below. Both blocks parse as valid JSON on every page where present.

**Internal linking:** header (Products, Technology, About, Contact, "Meet Famant" CTA); footer on every page (All products, Famant, Get the beta, famant.com, Famant on Google Play, About, Technology, Contact, Privacy Policy, Terms of Service, Cookies); in-page CTAs (Home → Products/About/Famant/Technology/Contact; Products → Famant/Technology; Famant → Technology/Contact; Technology → Products/Famant; About → Products/Technology/Contact; Contact → Famant/Privacy; legal pages cross-link each other). No orphaned public page. The 404 page links to Home, Products, Famant, Technology, About, Contact.

**Favicons / PWA:** `.ico`, `.svg`, 96 px PNG, Apple touch icon, 192/512 PNG icons and a web manifest are present and load.

**Indexability vs indexed:** the website is technically indexable on every public route. Whether Google has currently indexed each page was not verified (no Search Console access from the repository, and live index status was not queried).

---

## 12. CONTENT / PRODUCT MATURITY

The rendered text of all ten HTML files was scanned. Results:

| Term | Rendered occurrences | Assessment |
| --- | --- | --- |
| TODO, FIXME, lorem, placeholder, draft, temporary, staging, localhost, 127.0.0.1, under construction, coming soon, waitlist, early access | 0 | None reach output. (Source contains an invisible legacy `id="waitlist"` anchor on the Famant page and input `placeholder` attributes on the contact form, both legitimate.) |
| demo | 1 (Products) | "…not demos" — a statement of principle, not a demo offer |
| beta / testing | Many | Consistent product-stage language (section 7) |
| launch | 2 (About) | "create, launch and operate" and "The next milestone is launch. It gets a date when it has one." Honest, non-committal |
| install / download | 1 / 0 | "Install it on a supported Android device to start testing" |
| free, pricing, subscription, premium, paid, revenue, funding, customer | 0 (except "freely" in Terms) | No commercial claims |
| GDPR, ISO, SOC, SLA, certif | 0 | No compliance badges claimed; Technology page explicitly lists "Compliance badges without reviewed policies behind them" under "Won't claim"; Privacy page mentions rights under the EU General Data Protection Regulation factually |
| partner | 3 | "Parents and partners" (audience) and "partnerships" as a contact topic; no partnership claims |
| interim | 3 | Legal pages self-describe as interim (section 14) |
| iOS, App Store, TestFlight, Apple | 0 rendered claims | See section 7 |

Every page has fully populated sections; no empty containers were observed in screenshots. All 15 same-origin assets referenced by the HTML exist and return HTTP 200. The Products page intentionally shows two "Open slot · announced when real" placeholders for future products; this is a deliberate design statement ("Until a new product is real, these slots stay honest, and empty") and reads as intentional, not unfinished.

The site reads as a complete, deliberately written company website with a single real product, not a template or prototype.

---

## 13. AI PRODUCT CREDIBILITY

**Why Famant uses AI.** The Famant page frames the problem as "interpretation, prioritisation and follow-through: exactly the class of work modern AI is suited to carry, with a person staying in charge of every decision."

**What AI contributes.** Each of the six capabilities is written as a model-driven mechanism: reasoning over the whole household's calendar to spot overlaps; turning plain-language (typed or spoken) requests into owned tasks; OCR plus natural-language understanding of school forms, invitations and receipts into proposed events/reminders/list entries; meal plans grounded in household preferences and history. The Technology page repeats these as a "Capability → Mechanism" table titled "What the model has to do, per capability".

**Design principles.** Technology page: "The intelligence is the product" (dependency test: remove the AI and no product remains), "Confirmation before action", "Grounded in the user's own context", "Evaluation over adjectives" (capabilities judged against fixed test scenarios; accuracy figures published only when measured). A five-stage "intelligence loop" (context → understanding → reasoning → proposal → confirmation) is rendered as a visual and repeated as the four-step worked flow on Home and Famant.

**Infrastructure disclosure.** The Technology page states "Antutive's products run on managed cloud infrastructure, with modern foundation models providing the reasoning and understanding layer" and that specific model and infrastructure choices will be published "once they are confirmed… No name-dropping." No cloud provider, model vendor or model name is disclosed. This is reported neutrally: the absence of provider names is not a defect and nothing on the site is contradicted by it.

**Claims discipline.** The page includes an explicit "Will claim / Won't claim" list; the won't-claim list covers unmeasured accuracy, unbuilt integrations, autonomy the product lacks and unbacked compliance badges. No performance, accuracy, user-count or benchmark numbers appear anywhere.

**Status: PASS.** The AI positioning is substantive and mechanism-based rather than decorative. A technical reviewer can understand what the model does in each capability and what the human-in-the-loop boundary is.

---

## 14. LEGAL / TRUST / CONTACT

**Privacy Policy (`/privacy`).** Identifies ANTUTIVE AB (org.nr, Gothenburg, Västra Götalands län) as data controller; states the site is static with no analytics, advertising or tracking cookies and no accounts; explains the contact form composes an email locally; covers email handling, Famant signup being hosted on famant.com under its own notice, GDPR rights, and the Swedish supervisory authority (IMY). "Last updated: 7 August 2026" (a valid date, in the past relative to the audit date).

**Terms of Service (`/terms`).** Scope (website only, not the Famant product), permitted use, intellectual property, no-warranties, contact. Same date.

**Cookies (`/cookies`).** States no advertising/analytics/tracking cookies; discloses the single session-storage key used for the intro animation; covers third-party links; commits to a consent mechanism before any future change. Same date. Code inspection confirms the claims: the production bundle references no analytics host (external hosts in the bundle are w3.org, schema.org, fonts.googleapis.com, famant.com, play.google.com, linkedin.com and library documentation URLs), and the only storage write is `sessionStorage` `antutive.intro.played`.

**Interim notice.** All three legal pages carry a visible banner: "This is an interim version, published for transparency while a full document is prepared with legal counsel. It describes what this website actually does today." This is honest and accurate to the site's actual behaviour. Technically the pages are complete (identity, contact, dates, no placeholders, no broken links). A counsel-reviewed version remains prudent and is recorded under LEGAL REVIEW, not as a technical blocker.

**Contact (`/contact`).** Email `contact@antutive.com` (as text, as a `mailto:` button and inside the form explanation), headquarters "Gothenburg, Sweden · Västra Götalands län", business hours, "ANTUTIVE AB · Org.nr 559576-7228", and a contact form. Code inspection: the form's submit handler builds a `mailto:` URL and sets `window.location.href`; there is no fetch, no backend and nothing is stored. The Privacy Policy describes exactly this. Domain consistency: every email address on the site is `@antutive.com`. LIVE FUNCTIONAL VERIFICATION NOT PERFORMED for form submission (by policy); behaviour verified by code inspection.

**Status:** Legal: REVIEW RECOMMENDED (professional review only). Contact: PASS.

---

## 15. SECURITY / PRODUCTION SANITY

- **Secrets:** no `.env*` files present in the working tree; git tracks no `.env`, key, pem, token or credential files. Pattern scan of the production JavaScript bundle for AWS/Stripe/Google API key formats, `api_key`, `secret` and `console.log(` found nothing.
- **Source maps:** none emitted in `dist/`; no `sourceMappingURL` comment in the bundle.
- **Development / staging URLs:** no `localhost`, `127.0.0.1`, or staging/dev hostnames in `dist/`. The only `http://` string in the HTML is the SVG namespace `http://www.w3.org/2000/svg`.
- **Mixed content:** all resource and link URLs are HTTPS or same-origin.
- **External links:** every `target="_blank"` anchor in the built HTML carries `rel="noopener noreferrer"` (zero exceptions found).
- **Transport:** HSTS `max-age=63072000` on HTTPS responses; HTTP and www variants redirect with 308.
- **Other security headers:** `X-Content-Type-Options`, `X-Frame-Options` / CSP `frame-ancestors`, `Referrer-Policy` and `Permissions-Policy` are not set. For a static informational site with no forms posting to a backend and no cookies this is a hardening opportunity, not a defect. Listed under non-blocking items.
- **Debug output:** none in rendered HTML; the inline intro-gate script in `<head>` is intentional, wrapped in try/catch and has a 4-second failsafe that always reveals the page.
- **Repository hygiene (not website-facing):** the git history tracks several internal business documents (four PDFs, two `.docx`, one desktop screenshot PNG) at the repository root. They are not deployed (Vite only publishes `public/` and the bundle). Repository visibility on GitHub was not verified from this environment (`gh` not installed). If the repository is public, these files are unnecessarily exposed; see Technical Confirmation.

**Status: PASS** (no findings requiring remediation before application).

---

## 16. RESPONSIVE / UX RESULTS

Headless Chrome (reduced-motion forced so the one-time intro overlay does not run; `?reveal=all` used for full-page captures as documented in `src/app/lib/scroll.tsx`).

| Page | 390 px mobile | 820 px tablet | 1440 px desktop |
| --- | --- | --- | --- |
| `/` | Hero, three principle cards, Famant card, spotlight, flow, footer all render; header collapses to logo + menu button; no horizontal overflow | Two-column cards, spotlight and flow render correctly | Full layout with floating chips, hero visual, nav, CTAs |
| `/famant` | Hero (illustration honestly captioned), problem, screenshots (phone frame visible, captions, "Get the beta on Google Play"), audience cards, capabilities stacked | Hero and gallery in two columns; screenshots visible | Six-screenshot gallery in three pairs; capabilities grid; flow; privacy section |
| `/about` | Hero with org chips; mission; long-term band; journey; founder card with photo, name, title, LinkedIn, quote; footer | not captured | Registration card in hero (desktop-only element; mobile shows the same facts as chips); all sections |
| `/contact` | Contact info cards, "What happens to your message", registration block readable | not captured | Two-column info + form |
| `/products` | Hero, Famant card with capabilities, "Future" slots | not captured | not captured |
| `/technology` | not captured | not captured | Intelligence loop, principles, capability table, architecture band, will/won't claim, CTA, footer |
| `/cookies` | Legal tab bar, interim banner, body copy, full footer with all four columns and org line | not captured | not captured |
| invalid URL | not captured | not captured | Branded 404 with six navigation pills and "meet Famant" link |

**Findings:** no overflow, no clipped controls, no broken images, no unreadable text at any captured width. Mobile navigation is a toggle button with `aria-expanded`, `aria-controls`, Escape-to-close and route-change auto-close (verified by code inspection; the open state was not captured because headless screenshots cannot click). A "Skip to content" link is present.

**Capture artefact (not a site defect):** in several 1440 px full-page captures the last card of a grid (third principle on Home, sixth capability on Famant, founder card on About, fourth principle on Technology) painted blank even though `--dump-dom` of the same URL reports those wrappers at `opacity: 1`, and the same elements paint correctly at 390 px and 820 px. The mobile About capture shows the founder card fully. This is attributed to headless compositing of `will-change: transform` layers far down a very tall virtual viewport. A quick manual scroll-through in a normal browser is recommended as a sanity check but no code issue was identified.

**Status: PASS.**

---

## 17. BUILD / AUTOMATED CHECK RESULTS

| Check | Command | Result |
| --- | --- | --- |
| Production build (client) | `npm run build` → `vite build` | PASS — 1,632 modules, `dist/index.html` 4.66 kB, CSS 139.83 kB, JS 491.89 kB (gzip 151.77 kB), 3.27 s |
| SSR bundle | `vite build --ssr src/entry-server.tsx --outDir dist-ssr` | PASS — 17 modules, 217.57 kB |
| Prerender | `node scripts/prerender.mjs` | PASS — 9 routes + `404.html` written; body sizes 13–56 kB; SSR bundle cleaned up |
| Typecheck | — | NOT CONFIGURED (no `tsconfig.json`, no `typescript` dependency, no script) |
| Lint | — | NOT CONFIGURED (no ESLint config or dependency) |
| Unit / e2e tests | — | NOT CONFIGURED (no test runner, no test files) |
| Route/link verification | — | NOT CONFIGURED as a script; performed manually in this audit (all internal hrefs resolve to prerendered routes or anchors; all asset references exist) |
| JSON-LD validity | audit script `JSON.parse` on every block | PASS — 10 Organization blocks + 1 SoftwareApplication block parse cleanly |
| Sitemap validity | audit script | PASS — 9 URLs, valid lastmod, apex HTTPS host |

Node v22.23.2 / npm 10.9.8 (fnm-managed). Exit code of the full build: 0.

**Structured data summary (section 17 of the brief):**

*Organization (every page, from `index.html` template):* `name`/`legalName` "ANTUTIVE AB", `alternateName` "Antutive", `url` `https://antutive.com/`, `logo` (absolute, HTTP 200), `email`, `identifier` "559576-7228", `address` (Gothenburg, Västra Götalands län, SE), `founder` Person (name, jobTitle, LinkedIn `sameAs`), `brand` Brand "Famant" with famant.com URL, `description`. All values match rendered page text. No unsupported properties observed.

*SoftwareApplication (`/famant` only):* `name` "Famant", `applicationCategory` "LifestyleApplication", `operatingSystem` "Android", `url` famant.com, `sameAs` [famant.com, Play], `downloadUrl`/`installUrl` Play, `softwareVersion` "beta", `description`, `publisher` Organization (ANTUTIVE AB, antutive.com, identifier). Consistent with the page and with the Play listing. No `offers`, `aggregateRating` or review data is claimed (correct, since none exists publicly). Note: `operatingSystem: "Android"` reflects the only publicly linked platform; it is accurate to what the website offers.

---

## 18. EXTERNAL VERIFICATION

### VERIFIED EXTERNALLY

- `https://antutive.com` and all nine routes: HTTP 200, HTML identical to the local build.
- `http://antutive.com`, `https://www.antutive.com`, `http://www.antutive.com`: redirect to the apex HTTPS host.
- Invalid URLs: HTTP 404 with noindexed branded page.
- `https://www.famant.com/en` and `https://famant.com`: HTTP 200; title "Famant: The Family Organiser That Shares the Mental Load"; contains "Famant is a product of Antutive AB, Sweden.", a link to `https://antutive.com`, footer "© 2026 Famant · by Antutive", and Organization JSON-LD with `legalName` "Antutive AB" and `sameAs` antutive.com.
- Google Play `com.famant.app`: HTTP 200; app name "Famant: Share the Mental Load"; developer "Antutive AB"; content rating 12+; description mentions voice task capture and beta testing on iOS and Android.
- Founder LinkedIn URL: HTTP 200; page title carries the founder's name; page HTML references "Antutive AB".

### COULD NOT BE VERIFIED EXTERNALLY

- Full LinkedIn profile content (experience entries, current role text) is behind LinkedIn's login wall; only the public shell was inspected. The public headline shows "IKEA".
- Google Play distribution track (open testing vs production) and install counts: not exposed in the fetched listing HTML.
- Swedish company registry (Bolagsverket) entry for 559576-7228: not queried in this audit.
- Google Search index status of each page: not queried.
- GitHub repository visibility: `gh` CLI not available in this environment.

### NOT TESTED FOR SAFETY

- Contact form submission (mailto-based, no backend; verified by code only).
- Installing the Famant beta from Google Play.
- Any signup on famant.com.

---

## 19. REVIEWER JOURNEY

A reviewer opening `https://antutive.com` receives, before any JavaScript runs, a page titled "Antutive | AI-first product company" whose hero says the company builds products where AI does the heavy lifting, that it is a Swedish product company operating its own AI-first products, and that its first flagship product is Famant, currently in beta on Google Play. The hero band shows "Org.nr 559576-7228" and "Registered in Sweden". Scrolling reveals three build principles (including "not client delivery"), a portfolio card for Famant, a product spotlight with six capability outcomes and links to the Famant page, the beta and famant.com, and a "How we build" section with the four-step confirmation flow. The footer on this and every page repeats the company description, product links, company links, legal links and "© 2026 ANTUTIVE AB · Gothenburg, Sweden · Org.nr 559576-7228".

Clicking **About** gives the founding statement (founded in Gothenburg in 2026 to build its own products, not software for hire), a registration card with company name, organisation number and registered location, the mission, the long-term model, the journey, and the founder: photograph, "Vinayak Panchaman, Founder & CEO", LinkedIn button, quote.

Clicking **Products** shows one current product (Famant, "Ready for beta testing · Google Play") with its six capabilities and explicit empty "announced when real" slots for future products.

Clicking **Famant** (or "Meet Famant" in the header) gives the product definition, the problem framing, the origin story with the ownership line, six real screenshots in phone and tablet frames with a Google Play link, audiences, six mechanism-level capabilities, the worked flow, a privacy-by-design section, and a final "Famant is ready for beta testing" section with Google Play, famant.com and contact links.

Clicking **Technology** explains the intelligence loop, four design principles, a per-capability model-role table, an honest architecture statement (managed cloud, foundation models, details published when confirmed), and a will/won't-claim list.

Clicking **Contact** gives the email, location, hours, org number and a mailto form. **Privacy**, **Terms** and **Cookies** each identify ANTUTIVE AB, carry a date and an interim notice, and describe exactly what the site does.

Following **famant.com** lands on Famant's own site, which states "Famant is a product of Antutive AB, Sweden" and links back. Following **Google Play** opens "Famant: Share the Mental Load" by Antutive AB. Following **LinkedIn** opens a public profile for the named founder that references Antutive AB.

Typing a wrong URL gives a branded "This page doesn't exist" page with HTTP 404 and links back into the site.

**Overall impression:** a small, young, honest Swedish product company with one real, installable AI product, a clearly identified founder and a fully verifiable identity chain. Nothing on the site overclaims; the stage is stated as beta everywhere. The site behaves like a finished production website.

---

## 20. CURRENT FINDINGS

### BLOCKING

**None identified.**

### NON-BLOCKING

1. **Optional security headers absent.** Only HSTS is set. Adding `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy` and a CSP `frame-ancestors` directive via `vercel.json` `headers` would harden the site at no functional cost.
2. **Google Play link carries a locale parameter** (`hl=en_IN`). The listing loads with or without it; the parameter merely pins the store UI language/region for visitors. Cosmetic; removing it would let Play pick the visitor's locale.
3. **Phone screenshots use an iPhone-style frame** while the only linked store is Google Play (tablet captures are Android). Nothing false is stated and alt text is platform-neutral, but a reviewer may notice. See Business / Founder Confirmation.
4. **Founder photograph shows third-party branding** (a mug with another brand's mark and a laptop sticker). Cosmetic.
5. **Duplicate-URL variants are served rather than redirected** (`/about/`, `/index.html`, `/404.html` all return 200). Canonical tags and the 404 page's `noindex` fully resolve this for search engines. No action required.

### BUSINESS / FOUNDER CONFIRMATION

1. Whether the phone screenshots should remain iPhone-framed or be replaced with Android captures while only Google Play is linked.
2. Whether the founder's public LinkedIn headline (currently showing "IKEA") should reflect Antutive, so the external link reinforces rather than complicates the founder narrative. This is outside the website.
3. The Google Play distribution track (open testing vs production) is not stated on the site and does not need to be; confirm that "beta, currently available on Google Play" remains the wording the company wants to stand behind at application time.
4. Whether to publish any commercial model information. Nothing is claimed today, which is coherent; no action required unless the company wants to state one.

### TECHNICAL CONFIRMATION

1. Confirm whether the GitHub repository is public. If it is, consider removing the tracked internal PDFs/DOCX/PPTX and the desktop screenshot from git history; they are not deployed but are unnecessary in a public repository.
2. Consider adding a typecheck (`tsc --noEmit`) and a link/route verification script as build gates; currently the prerender step's size guard is the only automated content check.

### LEGAL REVIEW

1. Privacy Policy, Terms of Service and Cookies pages are self-described interim versions dated 7 August 2026 pending counsel review. They are technically complete and accurate to observed site behaviour; a counsel-reviewed replacement remains prudent before or after application.

### SEO / INDEXING FOLLOW-UP

1. Submit or re-submit `https://antutive.com/sitemap.xml` in Google Search Console and request indexing of the nine URLs if not already done; index status could not be verified from the repository.
2. Optionally validate the Organization and SoftwareApplication JSON-LD in Google's Rich Results Test; both parse and are internally consistent, but the tool was not run in this audit.

---

## 21. CODE CHANGES DURING AUDIT

The audit itself required no code changes. Following the audit, one follow-up change was made on request so that scroll-reveal sections no longer ship hidden in the prerendered HTML:

- `src/app/lib/scroll.tsx`: reveal targets now render in their shown state by default (server and hydration); JavaScript arms the entrance animation after the first client commit and only for elements not already painted on screen, honouring `prefers-reduced-motion`, missing `IntersectionObserver` and `?reveal=all`.
- `src/styles/theme.css`: added a `[data-reveal-arming]` rule that suppresses transitions for the single frame in which the hidden state is applied.

The production site was rebuilt and re-verified after the change (zero hidden inline styles in any prerendered file; complete rendering with scripts blocked; animation preserved with scripts enabled; no hydration warnings in a React development-build test).

---

## 22. FINAL APPLICATION CHECKLIST

- [x] Public HTTPS website — `https://antutive.com` HTTP 200, HSTS, HTTP/www redirect
- [x] Meaningful initial HTML — 13–56 kB prerendered body per route, verified live and in build; no content ships hidden
- [x] Crawlable public routes — nine routes, all 200, no auth, no `noindex`
- [x] Correct robots configuration — `Allow: /`, sitemap declared, no X-Robots-Tag
- [x] Valid sitemap — 9 apex-HTTPS URLs, valid XML and dates, live = repo
- [x] Canonical URLs — self-referencing absolute canonicals on all public pages; none on 404
- [x] Company identity — ANTUTIVE AB, 559576-7228, Gothenburg, on pages, footer and schema
- [x] Founder identity — Vinayak Panchaman, Founder & CEO, photo, quote, schema `founder`
- [x] External founder verification link — LinkedIn URL present, resolves HTTP 200, references Antutive AB
- [x] Product-company positioning — explicit and consistent; no services/consultancy language
- [x] Famant clearly identified as Antutive product — ownership line on four pages; schema `publisher`; famant.com reciprocates
- [x] Real product screenshots — six genuine app captures, viewed, all load
- [x] Public product/store evidence — Google Play listing live under "Antutive AB", package `com.famant.app`
- [x] Antutive ↔ Famant cross-linking — famant.com and Play linked on every page; famant.com links back and names Antutive AB
- [x] Contact information — contact@antutive.com, address, hours, org number, mailto form
- [x] Privacy Policy — present, identifies controller, dated (interim, counsel review recommended)
- [x] Terms — present, dated (interim)
- [x] Cookies — present, accurate to actual storage use (interim)
- [x] No material public placeholders — zero placeholder/lorem/TODO/draft text in rendered output
- [x] No material broken routes — all routes, assets and internal links resolve
- [x] Correct invalid-route behaviour — HTTP 404, branded, `noindex`, no canonical
- [x] Credible AI-product narrative — mechanism-level capability descriptions, design principles, will/won't-claim list
- [x] Production build successful — `npm run build` exit 0, 9 routes + 404 prerendered
- [x] Mobile/tablet/desktop usable — verified at 390/820/1440 px, no overflow or broken layout

---

# FINAL GO / NO-GO

### GO — WEBSITE IS READY; MINOR NON-BLOCKING ITEMS REMAIN

**Reasoning.** Every check that a Google Cloud startup-program reviewer, an automated crawler or a technical reviewer would run against the current website passes on evidence gathered from the live deployment and the reproduced production build: the site is HTTPS-only on a single canonical host, every public route delivers its full content and metadata in the raw HTML, invalid URLs return a real 404, robots and sitemap are correct, and structured data validly describes ANTUTIVE AB, its founder and its product. The company's legal identity, location, organisation number and contact email are stated consistently on every page. The founder is named, pictured and linked to a resolving public LinkedIn profile. Famant is presented with real screenshots, a mechanism-level AI explanation, a single honest stage statement, and a publicly reachable Google Play listing published by Antutive AB, and famant.com independently confirms it is a product of Antutive AB. The open items (interim legal copy awaiting counsel, iPhone-framed phone screenshots alongside a Play-only link, optional security headers, repository hygiene) are real but do not affect a reviewer's ability to verify the company, the founder or the product, and none of them requires a code change before the application is submitted.
