import { Link } from "react-router";
import { ArrowRight, Check, Sparkles, Boxes, Lightbulb, Workflow, ShieldCheck, Plus } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb, HatchAccent } from "../components/Decor";
import { usePageMeta, PRODUCT_DESCRIPTION } from "../lib/seo";
import { metaFor } from "../lib/routeMeta";
import { capabilities, OWNERSHIP_LINE } from "../content/famant";
import { LineArtScene, LineArtFlourish } from "../components/LineArt";

/*
 * Antutive product portfolio. One product exists today (Famant); the page is
 * structured so future products slot in as more entries in `portfolio` — and
 * per the positioning rules, a product is added here only once it is real.
 * No invented names, cards, dates or categories.
 */

/* ── hero visual: the portfolio as a constellation ──
   Antutive at the centre; Famant the one real, lit node; two dashed
   slots that read unmistakably as "room", not as announced products. */
function PortfolioConstellation() {
  return (
    <div className="hero-visual-stage select-none">
      <svg viewBox="0 0 420 420" aria-hidden="true" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="pcGlow"><stop offset="0%" stopColor="#46589F" stopOpacity=".35"/><stop offset="100%" stopColor="#46589F" stopOpacity="0"/></radialGradient>
          <radialGradient id="pcFam"><stop offset="0%" stopColor="#6B62F1" stopOpacity=".45"/><stop offset="100%" stopColor="#6B62F1" stopOpacity="0"/></radialGradient>
          <linearGradient id="pcNode" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#46589F"/><stop offset="100%" stopColor="#7C92C7"/></linearGradient>
          <linearGradient id="pcFamNode" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6B62F1"/><stop offset="100%" stopColor="#8B7CF8"/></linearGradient>
        </defs>

        {/* orbit rings */}
        <circle cx="210" cy="210" r="150" fill="none" stroke="rgba(124,146,199,0.30)" strokeWidth="1.4" strokeDasharray="6 10" className="logo-ring-spin" style={{ transformOrigin: "210px 210px" }}/>
        <circle cx="210" cy="210" r="105" fill="none" stroke="rgba(70,88,159,0.18)" strokeWidth="1"/>

        {/* connectors */}
        <line x1="210" y1="168" x2="210" y2="98"  stroke="#6B62F1" strokeWidth="2" className="flow-dash"/>
        <line x1="242" y1="238" x2="318" y2="292" stroke="rgba(124,146,199,0.55)" strokeWidth="1.5" className="flow-dash" style={{ animationDelay: ".5s" }}/>
        <line x1="178" y1="238" x2="102" y2="292" stroke="rgba(124,146,199,0.55)" strokeWidth="1.5" className="flow-dash" style={{ animationDelay: "1s" }}/>

        {/* Antutive centre node */}
        <circle cx="210" cy="210" r="66" fill="url(#pcGlow)"/>
        <circle cx="210" cy="210" r="42" fill="#ffffff" stroke="rgba(70,88,159,0.35)" strokeWidth="1.5"/>
        <circle cx="210" cy="210" r="42" fill="none" stroke="rgba(70,88,159,0.25)" strokeWidth="1" className="dn-ping"/>
        <circle cx="210" cy="210" r="14" fill="url(#pcNode)"/>
        <text x="210" y="272" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a" fontFamily="Sora, sans-serif">Antutive</text>
        <text x="210" y="288" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#94a3b8" fontFamily="Inter, sans-serif">the company</text>

        {/* Famant node — the one lit product */}
        <circle cx="210" cy="72" r="44" fill="url(#pcFam)"/>
        <circle cx="210" cy="72" r="26" fill="url(#pcFamNode)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <circle cx="210" cy="72" r="34" fill="none" stroke="rgba(107,98,241,0.4)" strokeWidth="1" className="dn-ping" style={{ animationDelay: ".9s" }}/>
        <text x="210" y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fontFamily="Sora, sans-serif">F</text>
        <text x="210" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a" fontFamily="Sora, sans-serif">Famant</text>
        <text x="210" y="38" textAnchor="middle" fontSize="9.5" fontWeight="600" fill="#6B62F1" fontFamily="Inter, sans-serif">flagship · in beta</text>

        {/* future slots — dashed, unmistakably placeholders */}
        {[{ x: 336, y: 305, d: "0s" }, { x: 84, y: 305, d: "1.4s" }].map(({ x, y, d }) => (
          <g key={`${x}${y}`} className="slow-float" style={{ animationDelay: d }}>
            <circle cx={x} cy={y} r="24" fill="rgba(124,146,199,0.06)" stroke="rgba(124,146,199,0.45)" strokeWidth="1.5" strokeDasharray="4 5"/>
            <line x1={x - 7} y1={y} x2={x + 7} y2={y} stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
            <line x1={x} y1={y - 7} x2={x} y2={y + 7} stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
            <text x={x} y={y + 44} textAnchor="middle" fontSize="9" fontWeight="600" fill="#94a3b8" fontFamily="Inter, sans-serif">announced when real</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* future-portfolio primitives: an animated connector and an honest empty slot */
function FutureConnector({ delay = 0 }: { delay?: number }) {
  return (
    <div className="hidden md:flex items-center justify-center" aria-hidden="true">
      <svg height="2" style={{ overflow: "visible", width: "2.5rem" }}>
        <line x1="0" y1="1" x2="100%" y2="1" stroke="#7C92C7" strokeWidth="2" className="flow-dash" style={{ animationDelay: `${delay}s` }} />
      </svg>
    </div>
  );
}

function FutureSlot({ delay = 0 }: { delay?: number }) {
  return (
    <div className="p-5 rounded-3xl flex items-center gap-4"
      style={{ background: "rgba(124,146,199,0.06)", border: "1.5px dashed rgba(124,146,199,0.45)" }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 slow-float"
        style={{ border: "1.5px dashed rgba(124,146,199,0.55)", animationDelay: `${delay}s` }}>
        <Plus className="w-4 h-4" style={{ color: "#94a3b8" }} />
      </div>
      <div>
        <p className="text-sm font-bold text-[#64748b]">Open slot</p>
        <p className="text-xs text-[#94a3b8]">announced when real</p>
      </div>
    </div>
  );
}

const principles = [
  {
    Icon: Lightbulb,
    title: "AI-native, or not at all",
    desc: "A product qualifies when the intelligence is the product. If removing the AI leaves something that still works, it isn't an Antutive product.",
  },
  {
    Icon: Workflow,
    title: "Real problems, real work",
    desc: "We build for burdens people actually carry: interpretation, coordination and follow-through, not demos.",
  },
  {
    Icon: ShieldCheck,
    title: "Honest about stage",
    desc: "Every product carries an honest release-stage label. Screenshots are of working screens. Results are published when measured.",
  },
  {
    Icon: Boxes,
    title: "Operated for the long term",
    desc: "We don't hand products over; we run them. Each product is durable intellectual property the company builds and keeps improving.",
  },
];

export function Products() {
  usePageMeta(metaFor("/products"));

  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO — portfolio framing ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(48vh, 560px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <LineArtScene scene="portfolio" className="line-art--hero-edge" />
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <Noise />
        <AuroraOrb size={420} color="rgba(124,146,199,0.18)" style={{ top: "-8.75rem", right: "-7.5rem" }} />
        <RingDecor spin size={360} style={{ top: "-6.875rem", right: "16%", opacity: 0.7 }} />
        <DotMatrix style={{ bottom: "1.875rem", left: "1.25rem" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: "rgba(124,146,199,0.50)", background: "rgba(124,146,199,0.14)", animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: "#46589F" }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#46589F" }}>Antutive Products</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both", color: "#0f172a" }}>
                Our own products.<br /><span className="grad-text">Built here, run here.</span>
              </h1>
              <LineArtFlourish />

              <p className="text-base max-w-xl leading-relaxed mb-4"
                style={{ color: "#64748b", animation: "fadeUp 0.8s ease 0.25s both" }}>
                Antutive creates and operates its own AI-first products. That's the whole
                company. The portfolio starts with Famant, our first flagship product, and is
                structured to grow as new products become real.
              </p>
              <p className="text-sm max-w-xl leading-relaxed"
                style={{ color: "#94a3b8", animation: "fadeUp 0.8s ease 0.32s both" }}>
                What you see here is what exists. We don't announce products before they're real.
              </p>
            </div>

            <div style={{ animation: "fadeUp 0.9s ease 0.3s both" }}>
              <PortfolioConstellation />
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#ffffff 0%,#f8fafc 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <LineArtScene scene="portfolio" className="line-art--section" />
          <Reveal variant="up">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-lg font-bold text-[#0f172a]" style={{ fontFamily: "Sora, sans-serif" }}>Current</h2>
              <span className="text-xs text-[#94a3b8]">1 product · in beta</span>
            </div>
          </Reveal>

          {/* Famant — flagship card */}
          <Reveal variant="scale">
            <div className="famant-hero-panel p-8 sm:p-12 mb-16">
              <Noise />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                      style={{ border: "1px solid rgba(107,98,241,0.5)", background: "rgba(107,98,241,0.18)", color: "#C9C5FF" }}>
                      <Sparkles className="w-3.5 h-3.5" style={{ color: "#2EC4B6" }} /> Flagship · First product
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(107,98,241,0.20)", border: "1px solid rgba(107,98,241,0.45)", color: "#C9C5FF" }}>
                      Ready for beta testing · iOS &amp; Android
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold mb-3 text-white" style={{ fontFamily: "Sora, sans-serif" }}>Famant</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(226,229,255,0.78)" }}>
                    {PRODUCT_DESCRIPTION}
                  </p>
                  <p className="text-xs mb-7" style={{ color: "rgba(226,229,255,0.55)" }}>{OWNERSHIP_LINE}</p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/famant" className="famant-cta-brand" style={{ textDecoration: "none" }}>
                      Explore Famant <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/famant#beta" className="famant-cta-ghost"
                      style={{ borderColor: "rgba(201,197,255,0.45)", color: "#C9C5FF", background: "rgba(107,98,241,0.12)" }}>
                      Try Famant Beta <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {capabilities.map(({ title }) => (
                    <div key={title} className="flex items-center justify-between gap-3 p-3 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(107,98,241,0.30)" }}>
                      <span className="text-sm font-semibold text-white">{title}</span>
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#2EC4B6" }} aria-label="Available in beta" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Future — honest, no fake cards */}
          <Reveal variant="up" delay={60}>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-lg font-bold text-[#0f172a]" style={{ fontFamily: "Sora, sans-serif" }}>Future</h2>
              <span className="text-xs text-[#94a3b8]">announced when real</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch mb-6">
              {/* Famant seed node */}
              <div className="p-5 rounded-3xl border flex items-center gap-4"
                style={{ background: "linear-gradient(150deg,#181A4D 0%,#242767 100%)", borderColor: "rgba(107,98,241,0.45)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#6B62F1,#8B7CF8)" }}>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white" style={{ fontFamily: "Sora, sans-serif" }}>Famant</p>
                  <p className="text-xs" style={{ color: "rgba(226,229,255,0.6)" }}>the portfolio's first node</p>
                </div>
              </div>
              <FutureConnector />
              <FutureSlot delay={0} />
              <FutureConnector delay={0.5} />
              <FutureSlot delay={1.2} />
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>
                <Boxes className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs text-[#64748b] leading-relaxed max-w-2xl">
                Antutive is structured around long-term product creation: the same company,
                design system, AI approach and operating discipline are built to support more
                than one product. Until a new product is real, these slots stay honest, and
                empty.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT MAKES AN ANTUTIVE PRODUCT ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 60%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="section-eyebrow-light">The Bar</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>What makes something<br />an Antutive product</h2>
            </div>
          </Reveal>
          <div className="relative max-w-5xl mx-auto">
            {/* connecting spine behind the criteria cards (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 pointer-events-none" aria-hidden="true">
              <svg width="2" height="100%" style={{ overflow: "visible" }}>
                <line x1="1" y1="0" x2="1" y2="100%" stroke="rgba(124,146,199,0.4)" strokeWidth="2" strokeDasharray="4 8" />
              </svg>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map(({ Icon, title, desc }, i) => (
                <Reveal key={title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                  <div className="relative p-7 rounded-3xl border h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                    <span className="absolute -top-3 -right-1 text-[4.75rem] font-bold leading-none select-none" aria-hidden="true"
                      style={{ color: "rgba(124,146,199,0.12)", fontFamily: "Sora, sans-serif" }}>{`0${i + 1}`}</span>
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)", boxShadow: "0 8px 20px rgba(70,88,159,0.30)" }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0f172a] mb-3">{title}</h3>
                    <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>Start with the flagship.</h2>
              <p className="text-sm text-[#64748b] mb-8 leading-relaxed">
                Famant is where Antutive's product philosophy is real: a working app,
                mechanisms and all — ready for beta testing on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/famant" className="cta-btn-primary">
                  Meet Famant <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/technology" className="cta-btn-secondary">How we build</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
