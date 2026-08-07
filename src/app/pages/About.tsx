import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Sparkles, Building2, Cpu, Hammer, Users, Database, Rocket } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb } from "../components/Decor";
import { usePageMeta, COMPANY_DESCRIPTION } from "../lib/seo";
import { OWNERSHIP_LINE } from "../content/famant";

const A = "#46589F";
const P = "#7C92C7";

/* Single canonical registration card — registry-checkable facts only. */
const companyFacts = [
  { label: "Company Name",     value: "ANTUTIVE AB"                      },
  { label: "Organisation No.", value: "559576-7228"                      },
  { label: "Legal Form",       value: "Swedish Aktiebolag (AB)"          },
  { label: "Share Capital",    value: "25,000 SEK"                       },
  { label: "Registered",       value: "Gothenburg, Västra Götalands län" },
  { label: "Founded",          value: "2026"                             },
  { label: "Invoicing",        value: "SEK / EUR (VAT-registered)"       },
];

export function About() {
  usePageMeta({
    title: "About Antutive — an AI-first product company",
    description: COMPANY_DESCRIPTION,
    path: "/about",
  });

  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(56vh, 640px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <Noise />
        <AuroraOrb size={420} color="rgba(70,88,159,0.15)" style={{ top: -140, right: -110 }} />
        <AuroraOrb size={320} color="rgba(124,146,199,0.15)" delay={6} style={{ bottom: -100, left: -80 }} />
        <RingDecor spin size={340} style={{ top: -90, right: "12%", opacity: 0.7 }} />
        <DotMatrix style={{ bottom: 26, left: 18 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-[#0f172a]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm mb-6"
                style={{ borderColor: `${P}50`, background: `${P}14`, animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>About Antutive</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                The company<br /><span className="grad-text">building Famant</span>
              </h1>

              <p className="text-base text-[#334155] max-w-lg leading-relaxed mb-4"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                {COMPANY_DESCRIPTION}
              </p>
              <p className="text-sm text-[#64748b] max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.3s both" }}>
                Antutive was founded in Gothenburg in 2026 to build and operate its own
                products — not to build software for hire.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Org.nr 559576-7228", "Gothenburg", "Swedish AB", "Founded 2026"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border text-xs font-medium"
                    style={{ borderColor: "rgba(124,146,199,0.32)", background: "rgba(124,146,199,0.08)", color: "#475569" }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/products" className="hero-btn-primary">Explore our products</Link>
                <Link to="/contact" className="hero-btn-secondary">Contact Antutive</Link>
              </div>
            </div>

            {/* Registration card — the site's most verifiable content */}
            <div className="hidden lg:block" style={{ animation: "fadeUp 0.8s ease 0.3s both" }}>
              <div className="p-6 rounded-3xl" style={{ background: "rgba(124,146,199,0.08)", border: "1px solid rgba(124,146,199,0.30)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <Building2 className="w-4 h-4" style={{ color: A }} />
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: A }}>Company Registration</p>
                </div>
                <div className="flex flex-col gap-0">
                  {companyFacts.map(({ label, value }, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b last:border-0"
                      style={{ borderColor: "rgba(124,146,199,0.20)", animation: `fadeUp 0.5s ease ${i * 80}ms both` }}>
                      <span className="text-xs text-[#94a3b8] uppercase tracking-wide font-semibold">{label}</span>
                      <span className="text-xs font-bold text-[#0f172a]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & STORY ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-5" style={{ fontWeight: 700 }}>
                Build products where intelligence<br />carries the everyday work.
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                Antutive exists to create, launch and operate its own AI-first products —
                software designed around intelligence from the first sketch, aimed at the
                interpretation, coordination and follow-through that today's tools still
                leave to people. That is the company's purpose; each product is one
                expression of it.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                The first expression is Famant. It started as our own frustration — calendars
                in three places, school forms lost in a drawer, dinner a nightly negotiation —
                so we began building the product we wanted in our own homes. {OWNERSHIP_LINE}
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Our long-term ambition is a company that keeps doing this: products imagined,
                built and run in-house as durable intellectual property. Future products will
                be introduced as they are developed — announced when real, never before.
              </p>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-5">
                <div className="p-6 rounded-3xl border" style={{ borderColor: `${P}35`, background: "#ffffff", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-4 h-4" style={{ color: A }} />
                    <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: A }}>Why AI-first</h3>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    AI-first is a structural statement, not a slogan: an Antutive product is
                    one where removing the intelligence removes the product. Take the
                    assistant out of Famant and only another calendar and list app remains —
                    that dependency is deliberate, and the company's strategy, architecture
                    and product bar are organised around it.
                  </p>
                </div>
                <div className="p-6 rounded-3xl border" style={{ borderColor: `${P}35`, background: "#ffffff", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Hammer className="w-4 h-4" style={{ color: A }} />
                    <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: A }}>How we build</h3>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    We build the Swedish way: carefully, transparently, and to last. Famant is
                    developed with the discipline of a long-lived product — tested,
                    documented, evaluated — and with honesty about stage as a visible brand
                    behaviour: what works today is labelled, and what's coming is labelled too.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TEAM — structure present, profiles pending publication consent ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#eef2fa 0%,#f8fafc 60%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="p-8 rounded-3xl border text-center" style={{ background: "#ffffff", borderColor: `${P}35`, boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: `linear-gradient(135deg,${A},${P})` }}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-[#0f172a] mb-3" style={{ fontFamily: "Sora, sans-serif" }}>The people behind Antutive</h2>
              <p className="text-sm text-[#64748b] leading-relaxed max-w-xl mx-auto">
                Antutive is a small founding team in Gothenburg, building Famant out of its
                own households' coordination pain. Founder and team profiles are being
                prepared for this page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ECOSYSTEM — Antutive × Data Delimited ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#eef2fa 0%,#f8fafc 60%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="eco-highlight relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center">
                <div className="flex items-center gap-3" aria-hidden="true">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#334155,#64748b)" }}>
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <svg viewBox="0 0 48 24" className="w-12 h-6" style={{ overflow: "visible" }}>
                    <line x1="0" y1="12" x2="48" y2="12" className="eco-connector-line" />
                    <circle cx="24" cy="12" r="4" fill={A} className="eco-pulse-dot" />
                  </svg>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg,${A},${P})` }}>
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: A }}>The Ecosystem · Antutive × Data Delimited</p>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    Antutive works alongside its sister company Data Delimited, which builds
                    data, analytics, AI and cloud foundations. The two companies are separate
                    and complementary: Data Delimited strengthens the intelligence and data
                    side; Antutive turns that capability into user-facing products — starting
                    with Famant.
                  </p>
                  <a href="https://datadelimited.com/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold mt-3 group" style={{ color: A }}>
                    Visit datadelimited.com <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>See what we're building</h2>
              <p className="text-sm text-[#64748b] mb-8 leading-relaxed">
                The product portfolio is where the company's philosophy becomes concrete —
                starting with Famant, our first flagship product.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/products" className="cta-btn-primary">
                  Explore our products <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/technology" className="cta-btn-secondary">
                  Our technology
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
