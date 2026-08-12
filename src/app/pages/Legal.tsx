import { Link } from "react-router";
import { Scale } from "lucide-react";
import { usePageMeta } from "../lib/seo";
import { metaFor } from "../lib/routeMeta";
import { LineArtScene } from "../components/LineArt";

/* ------------------------------------------------------------------ *
 * Legal pages.
 *
 * STATUS: interim versions, written factually from what the website
 * actually does today (no analytics, no tracking cookies, no form
 * backend). Each page carries a visible "pending legal review" notice.
 * Final, counsel-reviewed versions must replace this copy before any
 * Famant beta or data-collecting feature ships — do not remove the
 * review notice until that has happened.
 * ------------------------------------------------------------------ */

const LAST_UPDATED = "7 August 2026";

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  const pages = [
    ["Privacy", "/privacy"],
    ["Terms",   "/terms"],
    ["Cookies", "/cookies"],
  ];
  return (
    <div style={{ background: "linear-gradient(160deg,#eef2fa 0%,#f8fafc 40%,#eef2fa 100%)" }}>
      <section className="pt-16 pb-10 relative overflow-hidden">
        <LineArtScene scene="legal" className="line-art--legal" />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle,rgba(124,146,199,0.14),transparent 70%)", filter: "blur(60px)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)", boxShadow: "0 10px 26px rgba(70,88,159,0.30)" }}>
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#46589F" }}>Legal · ANTUTIVE AB</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a]" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h1>
            </div>
          </div>
          {/* sibling-page pills */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {pages.map(([label, href]) => (
              <Link key={href} to={href}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={title.toLowerCase().startsWith(label.toLowerCase().slice(0, 4))
                  ? { background: "#46589F", color: "#ffffff" }
                  : { border: "1px solid rgba(124,146,199,0.40)", color: "#64748b", background: "#ffffff" }}>
                {label}
              </Link>
            ))}
            <span className="text-xs text-[#94a3b8] ml-2">Last updated: {LAST_UPDATED}</span>
          </div>
          <div className="p-4 rounded-2xl border text-xs leading-relaxed"
            style={{ borderColor: "rgba(124,146,199,0.35)", background: "rgba(255,255,255,0.85)", color: "#64748b" }}>
            This is an interim version, published for transparency while a full document is
            prepared with legal counsel. It describes what this website actually does today.
            The reviewed version will replace it here, with its effective date, before any
            Famant beta opens.
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-body p-8 sm:p-10 rounded-3xl border"
            style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.28)", boxShadow: "0 4px 20px rgba(15,23,42,0.05)" }}>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold text-[#0f172a] mt-10 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-[#475569] leading-relaxed mb-3">{children}</p>;
}

export function Privacy() {
  usePageMeta(metaFor("/privacy"));
  return (
    <LegalShell title="Privacy Policy">
      <H2>Who we are</H2>
      <P>
        This website, antutive.com, is operated by ANTUTIVE AB, org.nr 559576-7228,
        registered in Gothenburg, Västra Götalands län, Sweden. ANTUTIVE AB is the data
        controller for personal data described in this policy. You can reach us at{" "}
        <a href="mailto:contact@antutive.com" className="underline" style={{ color: "#46589F" }}>contact@antutive.com</a>.
      </P>

      <H2>What this website collects</H2>
      <P>
        This website is a static informational site. It does not use analytics, advertising
        or tracking cookies, and it has no accounts or sign-ups. The contact form on this
        site does not send or store anything itself: it composes an email in your own email
        app, which you then choose to send.
      </P>

      <H2>Email you send us</H2>
      <P>
        If you email contact@antutive.com, we receive your email address, your name if you
        include it, and the content of your message. We use this information solely to
        respond to your enquiry. We do not sell it or share it with third parties for
        marketing.
      </P>

      <H2>The Famant waitlist</H2>
      <P>
        The Famant waitlist is hosted on famant.com, Famant's product site, which is also
        operated by ANTUTIVE AB. Data you submit there is governed by the notice presented
        on that site at the point of signup.
      </P>

      <H2>Your rights</H2>
      <P>
        Under the EU General Data Protection Regulation you have rights over personal data
        we hold about you — including access, correction and erasure. To exercise them,
        email contact@antutive.com. You also have the right to lodge a complaint with the
        Swedish data protection authority (Integritetsskyddsmyndigheten, IMY).
      </P>

      <H2>Changes</H2>
      <P>
        We will update this policy as the website and Famant evolve, and each version will
        state its date. A counsel-reviewed policy covering Famant's product data practices
        will be published before any public beta.
      </P>
    </LegalShell>
  );
}

export function Terms() {
  usePageMeta(metaFor("/terms"));
  return (
    <LegalShell title="Terms of Service">
      <H2>About these terms</H2>
      <P>
        These terms cover the use of the antutive.com website, operated by ANTUTIVE AB,
        org.nr 559576-7228, Gothenburg, Sweden. Famant, the product, is not yet generally
        available; product-specific terms will be published before access opens.
      </P>

      <H2>Use of this website</H2>
      <P>
        The content of this website is provided for information about Antutive and Famant.
        You may browse and link to it freely. You may not misrepresent its content or
        present it as your own.
      </P>

      <H2>Intellectual property</H2>
      <P>
        The Antutive and Famant names, logos, and the content of this website are the
        property of ANTUTIVE AB unless otherwise stated.
      </P>

      <H2>No warranties</H2>
      <P>
        The website is provided as-is. Famant is in development; descriptions of product
        capabilities carry status labels and describe design intent, not commitments that a
        feature exists or will exist by a given date.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about these terms:{" "}
        <a href="mailto:contact@antutive.com" className="underline" style={{ color: "#46589F" }}>contact@antutive.com</a>.
      </P>
    </LegalShell>
  );
}

export function Cookies() {
  usePageMeta(metaFor("/cookies"));
  return (
    <LegalShell title="Cookies">
      <H2>The short version</H2>
      <P>This website sets no advertising, analytics or tracking cookies.</P>

      <H2>What the site does store</H2>
      <P>
        One item of browser session storage (<code>antutive.intro.played</code>) remembers,
        for the duration of your browser session only, that the opening logo animation has
        already played — so it doesn't replay on every page. It contains no personal data,
        is never sent anywhere, and disappears when you close your browser.
      </P>

      <H2>Third-party content</H2>
      <P>
        Links to famant.com and other external sites lead to properties with their own
        cookie practices. Following a link is your choice; nothing on this site sets
        third-party cookies.
      </P>

      <H2>If this changes</H2>
      <P>
        If we ever add analytics or any technology requiring consent, this page will be
        updated first and a consent mechanism added before anything is set. Questions:{" "}
        <a href="mailto:contact@antutive.com" className="underline" style={{ color: "#46589F" }}>contact@antutive.com</a>.
      </P>

      <p className="text-sm mt-10">
        <Link to="/privacy" className="underline font-semibold" style={{ color: "#46589F" }}>Read the Privacy Policy</Link>
      </p>
    </LegalShell>
  );
}
