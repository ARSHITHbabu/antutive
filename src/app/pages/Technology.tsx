import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Scale, FlaskConical, Layers, Cpu } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, AuroraOrb, RingDecor } from "../components/Decor";
import { usePageMeta } from "../lib/seo";
import { capabilities, WAITLIST_URL } from "../content/famant";
import { StatusBadge } from "./Home";

/*
 * EDITORIAL RULE for this page (from the approved positioning strategy):
 * publish only what is verified. The intended model/cloud architecture
 * (which providers, which models, which services) is NOT yet documented
 * and confirmed by the technical lead, so no provider, model or platform
 * is named anywhere on this page. Once the architecture plan is confirmed,
 * the "Architecture" section below is where it is published — described
 * concretely, labelled as planned until built, with exact current product
 * names verified on the day of publication.
 */

const principles = [
  {
    Icon: Cpu,
    title: "The intelligence is the product",
    desc: "An Antutive product is model-driven behaviour, not a rule engine with an AI sticker. Take the AI out of Famant, for example, and there is no product left — only another shared calendar and list app. That dependency is the test every product must pass.",
  },
  {
    Icon: ShieldCheck,
    title: "Confirmation before action",
    desc: "Our products read, reason and propose — a person confirms before anything changes. A wrong proposal costs one tap to correct or dismiss; because nothing happens before confirmation, a misreading never becomes a real-world mistake.",
  },
  {
    Icon: Layers,
    title: "Grounded in the user's own context",
    desc: "A proposal is only useful if it understands this user's world. Our products work from the user's own data — and only theirs. In Famant that means the household's calendars, people, documents and history, kept strictly to that household.",
  },
  {
    Icon: FlaskConical,
    title: "Evaluation over adjectives",
    desc: "Capabilities are judged against fixed test scenarios before they move from development to testing to release. We publish accuracy or quality figures only when we have measured them — never before.",
  },
];

export function Technology() {
  usePageMeta({
    title: "Technology — how Antutive builds AI-first products",
    description:
      "How Antutive builds AI-first products: intelligence as the product, confirmation before action, evaluation over adjectives. Famant, the first flagship product, is the working example — with the full architecture published as it is confirmed.",
    path: "/technology",
  });

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(52vh, 600px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <Noise />
        <AuroraOrb size={420} color="rgba(70,88,159,0.15)" style={{ top: -140, right: -110 }} />
        <RingDecor spin size={340} style={{ top: -90, right: "12%", opacity: 0.7 }} />
        <DotMatrix style={{ bottom: 26, left: 18 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm mb-6"
              style={{ borderColor: "rgba(124,146,199,0.50)", background: "rgba(124,146,199,0.14)", animation: "fadeUp 0.6s ease both" }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: "#46589F" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#46589F" }}>AI & Technology</span>
            </div>

            <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
              How Antutive builds<br /><span className="grad-text">AI-first products</span>
            </h1>

            <p className="text-base text-[#334155] max-w-xl leading-relaxed mb-4"
              style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
              AI-first is a way of designing products, not a feature list: the intelligence is
              the interface and the mechanism, with a person confirming every action. This
              page describes how Antutive builds — the principles apply to every product we
              make, and Famant, our first flagship product, is the working example throughout.
            </p>
            <p className="text-sm text-[#64748b] max-w-xl leading-relaxed"
              style={{ animation: "fadeUp 0.8s ease 0.32s both" }}>
              Famant is in development. Everything here describes design and intent, labelled
              honestly — we update this page as the architecture is confirmed and capabilities
              become real.
            </p>
          </div>
        </div>
      </section>

      {/* ── DESIGN PRINCIPLES ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#ffffff 0%,#f8fafc 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="section-eyebrow-light">Design Principles</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>
                Mechanism, not magic.
              </h2>
              <p className="text-sm text-[#64748b] mt-3">
                Four principles govern every capability every Antutive product ships. They
                are commitments about how we build — not claims about what is already live.
              </p>
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

      {/* ── MECHANISM TABLE ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light">Worked Example · Famant</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>
                What the model has to do, per capability
              </h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">
                Every AI sentence on this site has to describe a mechanism a technical
                reviewer could interrogate. Here is Famant — the first product built this
                way — capability by capability, in those terms.
              </p>
            </div>
          </Reveal>
          <Reveal variant="scale">
            <div className="overflow-x-auto rounded-2xl border shadow-sm" style={{ borderColor: "rgba(124,146,199,0.28)", background: "#ffffff" }}>
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr style={{ background: "#f8fafc" }}>
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#0f172a] whitespace-nowrap">Capability</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#0f172a]">Mechanism</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#0f172a] whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilities.map(({ title, mechanism, status }, i) => (
                    <tr key={title} style={{ background: i % 2 === 0 ? "#ffffff" : "#f8fafc", borderTop: "1px solid rgba(124,146,199,0.16)" }}>
                      <td className="px-6 py-4 text-sm font-semibold text-[#0f172a] align-top whitespace-nowrap">{title}</td>
                      <td className="px-6 py-4 text-xs text-[#64748b] leading-relaxed align-top">{mechanism}</td>
                      <td className="px-6 py-4 align-top"><StatusBadge status={status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARCHITECTURE — honest placeholder until the plan is verified ── */}
      <section className="dark-band py-24 relative overflow-hidden">
        <Noise />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(rgba(169,184,220,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <RingDecor size={400} style={{ top: -150, right: -130, borderColor: "rgba(169,184,220,0.14)", opacity: 0.8 }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal variant="up">
            <span className="section-eyebrow" style={{ color: "#A9B8DC", borderColor: "rgba(169,184,220,0.35)", background: "rgba(124,146,199,0.12)" }}>
              Architecture
            </span>
            <h2 className="section-h2 mt-4 mb-5" style={{ fontWeight: 700, color: "#F3F6FC" }}>
              The full architecture,<br /><span className="grad-text-light">published when it's confirmed.</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto mb-4" style={{ color: "rgba(199,210,236,0.75)" }}>
              Antutive's products will run on a managed cloud platform, with modern
              foundation models providing the reasoning and understanding layer. We are
              finalising that architecture now for Famant: which models power which
              capability, how the assistant is orchestrated and grounded on the user's own
              data, how quality is evaluated, and where data lives.
            </p>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "rgba(199,210,236,0.75)" }}>
              We publish infrastructure and model choices here once the plan is confirmed —
              concretely, honestly labelled as planned until built. No name-dropping before
              it's real.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {[
                "Assistant orchestration",
                "Grounding on family data",
                "Evaluation against fixed test sets",
                "Cost-aware model routing",
                "Environment separation",
              ].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ border: "1px solid rgba(169,184,220,0.35)", color: "#C7D2EC", background: "rgba(124,146,199,0.10)" }}>
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs" style={{ color: "rgba(199,210,236,0.5)" }}>
              These are the design workstreams the architecture must answer — stated as
              intent, not as operating claims.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── QUALITY & HONESTY ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light">Quality Discipline</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-4" style={{ fontWeight: 700 }}>
                What we will and won't claim
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                Products that touch people's real lives have to earn trust the slow way. Our
                rule is simple: this website describes mechanisms and statuses, not
                adjectives — and a claim appears only when the evidence behind it exists.
              </p>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" style={{ color: "#46589F" }} />
                <p className="text-xs font-semibold" style={{ color: "#46589F" }}>
                  "We'll publish results when we've measured them."
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-3">
                {[
                  ["Will claim",  "Capability mechanisms with honest status labels; design principles we are building to; verifiable company facts."],
                  ["Won't claim", "Accuracy or benchmark figures we haven't measured; integrations that aren't built; autonomy the product doesn't have; compliance badges without reviewed policies behind them."],
                ].map(([label, text], i) => (
                  <div key={label} className="p-5 rounded-2xl border"
                    style={{ background: i === 0 ? "rgba(124,146,199,0.08)" : "#ffffff", borderColor: "rgba(124,146,199,0.30)" }}>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: "#46589F" }}>{label}</p>
                    <p className="text-xs text-[#64748b] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>See what all of this is for</h2>
              <p className="text-sm text-[#64748b] mb-8 leading-relaxed">
                The approach only matters in the products it produces. Explore the portfolio,
                or go straight to Famant — the first product built this way.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/products" className="cta-btn-primary">
                  Explore our products <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                  Join the Famant waitlist <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
