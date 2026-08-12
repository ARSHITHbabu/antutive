import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Sparkles, Building2, Cpu, Hammer, User, Linkedin } from "lucide-react";
import { Reveal, useVisible } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb } from "../components/Decor";
import { usePageMeta, COMPANY_DESCRIPTION } from "../lib/seo";
import { metaFor } from "../lib/routeMeta";
import { OWNERSHIP_LINE } from "../content/famant";
import { LineArtScene, LineArtFlourish } from "../components/LineArt";

const A = "#46589F";
const P = "#7C92C7";

/* ── company journey — factual milestones only, no dates that are hopes ── */
function CompanyJourney() {
  const { ref, on } = useVisible(0.3);
  const nodes = [
    { x: 40,  y: 252, r: 7,  color: "#A9B8DC", name: "Founded",     sub: "ANTUTIVE AB · Gothenburg · 2026" },
    { x: 178, y: 196, r: 8,  color: "#7C92C7", name: "Famant",      sub: "development begins" },
    { x: 310, y: 122, r: 9,  color: "#46589F", name: "Waitlist",    sub: "open on famant.com" },
    { x: 446, y: 48,  r: 10, color: "#2E3B72", name: "Launch",      sub: "when it's ready" },
  ];
  const curve = "M40,252 C 96,244 130,214 178,196 C 236,174 262,142 310,122 C 366,99 398,65 446,48";
  return (
    <div ref={ref} className="w-full select-none">
      <svg viewBox="0 0 490 310" className="w-full" aria-hidden="true" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="jArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C92C7" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#7C92C7" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="jLine" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#A9B8DC"/>
            <stop offset="100%" stopColor="#2E3B72"/>
          </linearGradient>
        </defs>
        <g opacity=".5">{[70, 140, 210, 280].map(y => <line key={y} x1="20" y1={y} x2="470" y2={y} stroke="rgba(70,88,159,0.08)" strokeWidth="1" strokeDasharray="3 7"/>)}</g>
        <path d={`${curve} L446,296 L40,296 Z`} fill="url(#jArea)" opacity={on ? 1 : 0} style={{ transition: "opacity 1.2s ease 0.9s" }}/>
        <path d={curve} fill="none" stroke="url(#jLine)" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className={`journey-line ${on ? "drawn" : ""}`}/>
        {nodes.map((n, i) => (
          <g key={n.name} className={`journey-node ${on ? "drawn" : ""}`} style={{ transitionDelay: `${0.5 + i * 0.35}s` }}>
            {i === nodes.length - 1 && (
              <circle cx={n.x} cy={n.y} r={n.r + 10} fill="none" stroke={n.color} strokeWidth="1.5" opacity="0.5" className="journey-halo"/>
            )}
            <circle cx={n.x} cy={n.y} r={n.r + 5} fill={`${n.color}22`} stroke={`${n.color}66`} strokeWidth="1"/>
            <circle cx={n.x} cy={n.y} r={n.r - 2} fill={n.color}/>
            <text x={n.x} y={n.y - n.r - 12} textAnchor={i === nodes.length - 1 ? "end" : "middle"} fontSize="12" fontWeight="700" fill="#0f172a" fontFamily="Sora, sans-serif">{n.name}</text>
            <text x={n.x} y={n.y + n.r + 22} textAnchor={i === 0 ? "start" : "middle"} fontSize="10" fontWeight="600" fill="#94a3b8" fontFamily="Inter, sans-serif">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Founder profile ─────────────────────────────────────────────────────
   Photo: drop the final portrait (recommended 800×1000px, 4:5) into
   public/brand/ — e.g. public/brand/vinayak-panchaman.jpg — and set
   FOUNDER_PHOTO to "/brand/vinayak-panchaman.jpg". The placeholder below
   renders until then; nothing else needs to change. */
const FOUNDER_PHOTO: string | null = null;

const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/vinayak-panchaman/";

/* DRAFT founder statement — website copy pending Vinayak Panchaman's
   approval before it may be treated as an attributed quote. */
const FOUNDER_QUOTE =
  "Good technology feels like someone actually thought about your day. That's what we're trying to build here, products that earn their place in people's lives.";

/* Single canonical registration card — registry-checkable facts only. */
const companyFacts = [
  { label: "Company Name",     value: "ANTUTIVE AB"                      },
  { label: "Organisation No.", value: "559576-7228"                      },
  { label: "Registered",       value: "Gothenburg, Västra Götalands län" },
];

export function About() {
  usePageMeta(metaFor("/about"));

  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(56vh, 640px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <LineArtScene scene="journey" className="line-art--hero-edge" />
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
                A company built<br /><span className="grad-text">to build products</span>
              </h1>
              <LineArtFlourish />

              <p className="text-base text-[#334155] max-w-lg leading-relaxed mb-4"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                {COMPANY_DESCRIPTION}
              </p>
              <p className="text-sm text-[#64748b] max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.3s both" }}>
                Antutive was founded in Gothenburg in 2026 to build and operate its own
                products, not to build software for hire.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Org.nr 559576-7228", "Gothenburg, Sweden"].map(c => (
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
            <div className="hidden lg:block relative" style={{ animation: "fadeUp 0.8s ease 0.3s both" }}>
              <div className="absolute -inset-6 rounded-[36px] pointer-events-none" aria-hidden="true"
                style={{ background: "radial-gradient(circle at 50% 40%, rgba(124,146,199,0.20), transparent 70%)", filter: "blur(28px)" }} />
              <div className="relative p-7 rounded-3xl border" style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.35)", boxShadow: "0 20px 50px rgba(70,88,159,0.16)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)", boxShadow: "0 8px 20px rgba(70,88,159,0.30)" }}>
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: A }}>Company Registration</p>
                    <p className="text-xs text-[#94a3b8]">registry-verifiable facts</p>
                  </div>
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
                Antutive exists to create, launch and operate its own AI-first products:
                software designed around intelligence from the first sketch, aimed at the
                interpretation, coordination and follow-through that today's tools still
                leave to people. That is the company's purpose; each product is one
                expression of it.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                The first expression is Famant. It started as our own frustration: calendars
                in three places, school forms lost in a drawer, dinner a nightly negotiation.
                So we began building the product we wanted in our own homes. {OWNERSHIP_LINE}
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Our long-term ambition is a company that keeps doing this: products imagined,
                built and run in-house as durable intellectual property. Future products will
                be introduced as they are developed, announced when real, never before.
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
                    assistant out of Famant and only another calendar and list app remains.
                    That dependency is deliberate, and the company's strategy, architecture
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
                    developed with the discipline of a long-lived product: tested, documented
                    and evaluated. Honesty about stage is a visible brand behaviour, so what
                    works today is labelled, and what's coming is labelled too.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VISION — dark statement band ── */}
      <section className="dark-band py-24 relative overflow-hidden">
        <Noise />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(rgba(169,184,220,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <RingDecor spin size={380} style={{ top: -140, right: -120, borderColor: "rgba(169,184,220,0.14)", opacity: 0.8 }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal variant="up">
            <span className="section-eyebrow" style={{ color: "#A9B8DC", borderColor: "rgba(169,184,220,0.35)", background: "rgba(124,146,199,0.12)" }}>
              The Long Term
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold leading-snug mt-5 mb-6" style={{ color: "#F3F6FC", fontFamily: "Sora, sans-serif" }}>
              Products imagined, built and operated in-house <br className="hidden sm:block" />
              <span className="grad-text-light">as durable intellectual property.</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(199,210,236,0.7)" }}>
              Not a portfolio of promises. A company structured so each real product, starting
              with Famant, is designed, shipped and run for the long term, with honesty about
              stage as visible brand behaviour.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── JOURNEY — the road so far, drawn ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(124,146,199,0.12),transparent 70%)", filter: "blur(80px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left">
              <span className="section-eyebrow">The Journey</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-4" style={{ fontWeight: 700 }}>
                Young company.<br />Deliberate path.
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                Antutive was incorporated in Gothenburg in 2026 and went straight to work on
                its first product. The path is short so far, and every step on it is real:
                the company is registry-verifiable, Famant is in development, and its waitlist
                is open today.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                The next milestone is launch. It gets a date when it has one. We don't plot
                hopes on this curve.
              </p>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <div className="p-8 rounded-3xl border" style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.28)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest mb-6">The road so far</p>
                <CompanyJourney />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOUNDER — the person behind the company ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#eef2fa 0%,#f8fafc 60%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <LineArtScene scene="contact" className="line-art--section" />

          <Reveal variant="up">
            <div className="text-center mb-10">
              <span className="section-eyebrow">The People</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-4" style={{ fontWeight: 700 }}>
                The people behind Antutive
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed max-w-xl mx-auto">
                Antutive is a small founding team in Gothenburg, building Famant out of its
                own households' coordination pain.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="relative p-7 sm:p-10 rounded-3xl border overflow-hidden"
              style={{ background: "#ffffff", borderColor: `${P}35`, boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" aria-hidden="true" />

              <div className="relative grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-10 items-center">

                {/* portrait — 4:5, swaps from placeholder to photo via FOUNDER_PHOTO */}
                <div className="w-full max-w-[240px] mx-auto md:mx-0">
                  <div className="relative rounded-2xl overflow-hidden"
                    style={{ aspectRatio: "4 / 5", boxShadow: "0 12px 32px rgba(70,88,159,0.14)" }}>
                    {FOUNDER_PHOTO ? (
                      <img
                        src={FOUNDER_PHOTO}
                        alt="Vinayak Panchaman, Founder & CEO of Antutive"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label="Placeholder for the portrait of Vinayak Panchaman, Founder & CEO of Antutive"
                        className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl"
                        style={{
                          background: "linear-gradient(160deg, rgba(70,88,159,0.08), rgba(124,146,199,0.18))",
                          border: `1.5px dashed ${P}60`,
                        }}
                      >
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg,${A},${P})`, boxShadow: "0 10px 26px rgba(70,88,159,0.30)" }}>
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[11px] font-semibold text-[#64748b] text-center leading-relaxed px-4">
                          Founder image<br />Vinayak Panchaman
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* profile */}
                <div className="text-center md:text-left">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: A }}>Founder</p>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                    Vinayak Panchaman
                  </h3>
                  <p className="text-sm font-semibold text-[#64748b] mb-5">Founder &amp; CEO</p>

                  <a
                    href={FOUNDER_LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Vinayak Panchaman on LinkedIn (opens in a new tab)"
                    className="inline-flex items-center gap-2 text-sm font-semibold group"
                    style={{ color: A }}
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    LinkedIn
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>

                  {/* Draft founder statement — pending approval (see FOUNDER_QUOTE note) */}
                  <blockquote className="mt-6 pt-6 border-t" style={{ borderColor: `${P}30` }}>
                    <p className="text-sm italic leading-relaxed text-[#334155]">
                      &ldquo;{FOUNDER_QUOTE}&rdquo;
                    </p>
                  </blockquote>
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
                The product portfolio is where the company's philosophy becomes concrete,
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
