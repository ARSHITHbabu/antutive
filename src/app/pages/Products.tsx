import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Sparkles, Boxes, Lightbulb, Workflow, ShieldCheck } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb } from "../components/Decor";
import { usePageMeta, PRODUCT_DESCRIPTION } from "../lib/seo";
import { WAITLIST_URL, OWNERSHIP_LINE } from "../content/famant";

/*
 * Antutive product portfolio. One product exists today (Famant); the page is
 * structured so future products slot in as more entries in `portfolio` — and
 * per the positioning rules, a product is added here only once it is real.
 * No invented names, cards, dates or categories.
 */

const principles = [
  {
    Icon: Lightbulb,
    title: "AI-native, or not at all",
    desc: "A product qualifies when the intelligence is the product. If removing the AI leaves something that still works, it isn't an Antutive product.",
  },
  {
    Icon: Workflow,
    title: "Real problems, real work",
    desc: "We build for burdens people actually carry — interpretation, coordination, follow-through — not for demos.",
  },
  {
    Icon: ShieldCheck,
    title: "Honest about stage",
    desc: "Every capability of every product carries a status label. Screenshots are of working screens. Results are published when measured.",
  },
  {
    Icon: Boxes,
    title: "Operated for the long term",
    desc: "We don't hand products over — we run them. Each product is durable intellectual property the company builds and keeps improving.",
  },
];

export function Products() {
  usePageMeta({
    title: "Products — built and operated by Antutive",
    description:
      "The Antutive product portfolio: AI-first products imagined, built and operated in-house. Famant, the AI-powered family management platform, is the first flagship product.",
    path: "/products",
  });

  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO — portfolio framing ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(48vh, 560px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <Noise />
        <AuroraOrb size={420} color="rgba(124,146,199,0.18)" style={{ top: -140, right: -120 }} />
        <RingDecor spin size={360} style={{ top: -110, right: "16%", opacity: 0.7 }} />
        <DotMatrix style={{ bottom: 30, left: 20 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
              style={{ borderColor: "rgba(124,146,199,0.50)", background: "rgba(124,146,199,0.14)", animation: "fadeUp 0.6s ease both" }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#46589F" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#46589F" }}>Antutive Products</span>
            </div>

            <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both", color: "#0f172a" }}>
              Our own products.<br /><span className="grad-text">Built here, run here.</span>
            </h1>

            <p className="text-base max-w-xl leading-relaxed mb-4"
              style={{ color: "#64748b", animation: "fadeUp 0.8s ease 0.25s both" }}>
              Antutive creates and operates its own AI-first products — that's the whole
              company. The portfolio starts with Famant, our first flagship product, and is
              structured to grow as new products become real.
            </p>
            <p className="text-sm max-w-xl leading-relaxed"
              style={{ color: "#94a3b8", animation: "fadeUp 0.8s ease 0.32s both" }}>
              What you see here is what exists. We don't announce products before they're real.
            </p>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#ffffff 0%,#f8fafc 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-lg font-bold text-[#0f172a]" style={{ fontFamily: "Sora, sans-serif" }}>Current</h2>
              <span className="text-xs text-[#94a3b8]">1 product · pre-launch</span>
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
                      In development · waitlist open
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
                    <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="famant-cta-ghost"
                      style={{ borderColor: "rgba(201,197,255,0.45)", color: "#C9C5FF", background: "rgba(107,98,241,0.12)" }}>
                      Join the waitlist <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {["Family-aware scheduling", "Task creation & delegation", "Document understanding", "Meal & household planning"].map((cap) => (
                    <div key={cap} className="flex items-center justify-between gap-3 p-3.5 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(107,98,241,0.30)" }}>
                      <span className="text-sm font-semibold text-white">{cap}</span>
                      <span className="text-xs flex-shrink-0" style={{ color: "rgba(226,229,255,0.55)" }}>In development</span>
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
            <div className="p-8 rounded-3xl border flex flex-col sm:flex-row items-start gap-6"
              style={{ background: "rgba(124,146,199,0.06)", borderColor: "rgba(124,146,199,0.35)", borderStyle: "dashed" }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>
                <Boxes className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0f172a] mb-2">Additional products will be introduced as they are developed.</h3>
                <p className="text-xs text-[#64748b] leading-relaxed max-w-2xl">
                  Antutive is structured around long-term product creation: the same company,
                  design system, AI approach and operating discipline are built to support
                  more than one product. Until a new product is real, this space stays
                  honest — and empty.
                </p>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0f172a] mb-3">{title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
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
                Famant is where Antutive's product philosophy is becoming real — mechanisms,
                statuses and all.
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
