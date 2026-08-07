import { Link } from "react-router";
import {
  ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Scale, FlaskConical, Layers, Cpu,
  User, Eye, BrainCircuit, MessageSquareText, Check, X, MonitorSmartphone, Boxes, Database,
} from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, AuroraOrb, RingDecor, HatchAccent } from "../components/Decor";
import { usePageMeta } from "../lib/seo";
import { capabilities, WAITLIST_URL } from "../content/famant";
import { StatusBadge } from "./Home";

/*
 * EDITORIAL RULE for this page (from the approved positioning strategy):
 * publish only what is verified. The intended model/cloud architecture
 * (which providers, which models, which services) is NOT yet documented
 * and confirmed by the technical lead, so no provider, model or platform
 * is named anywhere on this page. Every diagram below visualizes only
 * statements the approved copy already makes, labelled as design intent.
 */

const principles = [
  {
    Icon: Cpu,
    n: "01",
    title: "The intelligence is the product",
    desc: "An Antutive product is model-driven behaviour, not a rule engine with an AI sticker. Take the AI out of Famant, for example, and there is no product left — only another shared calendar and list app. That dependency is the test every product must pass.",
  },
  {
    Icon: ShieldCheck,
    n: "02",
    title: "Confirmation before action",
    desc: "Our products read, reason and propose — a person confirms before anything changes. A wrong proposal costs one tap to correct or dismiss; because nothing happens before confirmation, a misreading never becomes a real-world mistake.",
  },
  {
    Icon: Layers,
    n: "03",
    title: "Grounded in the user's own context",
    desc: "A proposal is only useful if it understands this user's world. Our products work from the user's own data — and only theirs. In Famant that means the household's calendars, people, documents and history, kept strictly to that household.",
  },
  {
    Icon: FlaskConical,
    n: "04",
    title: "Evaluation over adjectives",
    desc: "Capabilities are judged against fixed test scenarios before they move from development to testing to release. We publish accuracy or quality figures only when we have measured them — never before.",
  },
];

/* ── hero visual: the intelligence loop, node by node ── */
const flowSteps = [
  { Icon: User,              label: "Your context",  desc: "Calendars, documents, requests — the user's own world" },
  { Icon: Eye,               label: "Understanding", desc: "The model reads what things mean" },
  { Icon: BrainCircuit,      label: "Reasoning",     desc: "What clashes, what matters, what's next" },
  { Icon: MessageSquareText, label: "Proposal",      desc: "A concrete suggested action" },
  { Icon: ShieldCheck,       label: "You confirm",   desc: "Nothing happens until a person says so" },
];

function FlowConnector() {
  return (
    <div className="flex justify-center" aria-hidden="true" style={{ height: 26, marginLeft: 21 }}>
      <svg width="2" height="26" style={{ overflow: "visible", alignSelf: "center" }}>
        <line x1="1" y1="0" x2="1" y2="26" stroke="#7C92C7" strokeWidth="2" className="flow-dash" />
      </svg>
    </div>
  );
}

function IntelligenceFlowVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0 select-none">
      <div className="absolute -inset-8 rounded-[40px] pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(circle at 50% 30%, rgba(124,146,199,0.16), transparent 70%)", filter: "blur(30px)" }} />
      <div className="relative p-6 rounded-3xl border"
        style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)", borderColor: "rgba(124,146,199,0.35)", boxShadow: "0 20px 50px rgba(70,88,159,0.14)" }}>
        <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest mb-5">The intelligence loop</p>
        {flowSteps.map(({ Icon, label, desc }, i) => (
          <div key={label}>
            <div className="flex items-center gap-4" style={{ animation: `fadeUp 0.6s ease ${0.15 + i * 0.14}s both` }}>
              <div className="relative flex-shrink-0">
                {i === flowSteps.length - 1 && (
                  <span className="absolute inset-0 rounded-2xl glow-breathe" aria-hidden="true"
                    style={{ boxShadow: "0 0 24px 6px rgba(70,88,159,0.35)" }} />
                )}
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center relative"
                  style={{ background: i === flowSteps.length - 1 ? "linear-gradient(135deg,#2E3B72,#46589F)" : "linear-gradient(135deg,#46589F,#7C92C7)" }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#0f172a]">{label}</p>
                <p className="text-xs text-[#64748b] leading-snug">{desc}</p>
              </div>
            </div>
            {i < flowSteps.length - 1 && <FlowConnector />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── architecture diagram: layers the approved copy already describes ── */
const archLayers = [
  { Icon: MonitorSmartphone, title: "Product experience",       sub: "What the user sees — proposals, confirmations, one shared view" },
  { Icon: Boxes,             title: "Assistant orchestration",  sub: "Turning understanding into proposed actions, tool by tool" },
  { Icon: BrainCircuit,      title: "Foundation models",        sub: "The reasoning and understanding layer, on a managed cloud platform" },
  { Icon: Database,          title: "The user's own data",      sub: "Grounding — each household's context, kept strictly to that household" },
];

function ArchitectureDiagram() {
  return (
    <div className="relative max-w-md mx-auto lg:mx-0 w-full select-none">
      {archLayers.map(({ Icon, title, sub }, i) => (
        <Reveal key={title} variant="right" delay={i * 110}>
          <div>
            <div className="flex items-center gap-4 p-4 rounded-2xl"
              style={{
                background: `rgba(124,146,199,${0.10 + i * 0.02})`,
                border: "1px solid rgba(169,184,220,0.30)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)", boxShadow: "0 6px 18px rgba(70,88,159,0.45)" }}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold" style={{ color: "#F3F6FC" }}>{title}</p>
                <p className="text-xs leading-snug" style={{ color: "rgba(199,210,236,0.65)" }}>{sub}</p>
              </div>
            </div>
            {i < archLayers.length - 1 && (
              <div className="flex justify-center py-1" aria-hidden="true">
                <svg width="2" height="18" style={{ overflow: "visible" }}>
                  <line x1="1" y1="0" x2="1" y2="18" stroke="#A9B8DC" strokeWidth="2" className="flow-dash" />
                </svg>
              </div>
            )}
          </div>
        </Reveal>
      ))}
      <p className="text-xs mt-4 text-center lg:text-left" style={{ color: "rgba(199,210,236,0.5)" }}>
        Design intent — published concretely, with names, once the plan is confirmed.
      </p>
    </div>
  );
}

export function Technology() {
  usePageMeta({
    title: "Technology — how Antutive builds AI-first products",
    description:
      "How Antutive builds AI-first products: intelligence as the product, confirmation before action, evaluation over adjectives. Famant, the first flagship product, is the working example — with the full architecture published as it is confirmed.",
    path: "/technology",
  });

  return (
    <div>
      {/* ── HERO — text + animated intelligence loop ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(72vh, 780px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-50" />
        <Noise />
        <AuroraOrb size={420} color="rgba(70,88,159,0.15)" style={{ top: -140, right: -110 }} />
        <AuroraOrb size={340} color="rgba(124,146,199,0.16)" delay={5} style={{ bottom: -110, left: -90 }} />
        <RingDecor spin size={380} style={{ top: -120, right: "8%", opacity: 0.7 }} />
        <DotMatrix style={{ bottom: 26, left: 18 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm mb-6"
                style={{ borderColor: "rgba(124,146,199,0.50)", background: "rgba(124,146,199,0.14)", animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: "#46589F" }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#46589F" }}>AI & Technology</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                How Antutive builds<br /><span className="grad-text-animated">AI-first products</span>
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

            <IntelligenceFlowVisual />
          </div>
        </div>
      </section>

      {/* ── DESIGN PRINCIPLES — numbered, on a tinted band ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#eef2fa 0%,#f4f6fb 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-60" />
        <HatchAccent style={{ top: 50, right: 30 }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)", filter: "blur(60px)" }} />
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
            {principles.map(({ Icon, n, title, desc }, i) => (
              <Reveal key={title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="relative p-7 rounded-3xl border h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <span className="absolute -top-3 -right-1 text-[80px] font-bold leading-none select-none" aria-hidden="true"
                    style={{ color: "rgba(124,146,199,0.12)", fontFamily: "Sora, sans-serif" }}>{n}</span>
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
      </section>

      {/* ── MECHANISM TABLE — iconized worked example ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />
        <AuroraOrb size={340} color="rgba(124,146,199,0.12)" style={{ top: -60, right: -70 }} />
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
            <div className="overflow-x-auto rounded-3xl border shadow-lg" style={{ borderColor: "rgba(124,146,199,0.28)", background: "#ffffff" }}>
              <table className="w-full min-w-[680px]">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#2E3B72,#46589F)" }}>
                    <th className="text-left px-6 py-4 text-sm font-bold text-white whitespace-nowrap" colSpan={2}>Capability</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-white">Mechanism</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-white whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilities.map(({ Icon, title, mechanism, status }, i) => (
                    <tr key={title} style={{ background: i % 2 === 0 ? "#ffffff" : "#f8fafc", borderTop: "1px solid rgba(124,146,199,0.16)" }}>
                      <td className="pl-6 pr-0 py-4 align-top" style={{ width: 48 }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-[#0f172a] align-top whitespace-nowrap">{title}</td>
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

      {/* ── ARCHITECTURE — dark band with layer diagram ── */}
      <section className="dark-band py-24 relative overflow-hidden">
        <Noise />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(rgba(169,184,220,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <RingDecor size={400} style={{ top: -150, right: -130, borderColor: "rgba(169,184,220,0.14)", opacity: 0.8 }} />
        <RingDecor spin size={300} style={{ bottom: -120, left: -100, borderColor: "rgba(169,184,220,0.12)", opacity: 0.7 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal variant="left">
              <span className="section-eyebrow" style={{ color: "#A9B8DC", borderColor: "rgba(169,184,220,0.35)", background: "rgba(124,146,199,0.12)" }}>
                Architecture
              </span>
              <h2 className="section-h2 mt-4 mb-5" style={{ fontWeight: 700, color: "#F3F6FC" }}>
                The full architecture,<br /><span className="grad-text-light">published when it's confirmed.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(199,210,236,0.75)" }}>
                Antutive's products will run on a managed cloud platform, with modern
                foundation models providing the reasoning and understanding layer. We are
                finalising that architecture now for Famant: which models power which
                capability, how the assistant is orchestrated and grounded on the user's own
                data, how quality is evaluated, and where data lives.
              </p>
              <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(199,210,236,0.75)" }}>
                We publish infrastructure and model choices here once the plan is confirmed —
                concretely, honestly labelled as planned until built. No name-dropping before
                it's real.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
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
            </Reveal>

            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* ── QUALITY & HONESTY — check / cross cards ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <DotMatrix style={{ top: 50, right: 26 }} />
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
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl"
                style={{ background: "rgba(124,146,199,0.10)", border: "1px solid rgba(124,146,199,0.30)" }}>
                <Scale className="w-4 h-4 flex-shrink-0" style={{ color: "#46589F" }} />
                <p className="text-xs font-semibold" style={{ color: "#46589F" }}>
                  "We'll publish results when we've measured them."
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-4">
                <div className="p-6 rounded-3xl border" style={{ background: "rgba(124,146,199,0.08)", borderColor: "rgba(70,88,159,0.35)" }}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#46589F" }}>Will claim</p>
                  {[
                    "Capability mechanisms with honest status labels",
                    "Design principles we are building to",
                    "Verifiable company facts",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2.5 mb-2 last:mb-0">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#46589F" }}>
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <p className="text-xs text-[#475569] leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-3xl border" style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)" }}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#94a3b8" }}>Won't claim</p>
                  {[
                    "Accuracy or benchmark figures we haven't measured",
                    "Integrations that aren't built",
                    "Autonomy the product doesn't have",
                    "Compliance badges without reviewed policies behind them",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2.5 mb-2 last:mb-0">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(148,163,184,0.25)" }}>
                        <X className="w-3 h-3" style={{ color: "#64748b" }} />
                      </span>
                      <p className="text-xs text-[#64748b] leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="flip">
            <div className="cta-card">
              <div className="cta-orb cta-orb-1"/><div className="cta-orb cta-orb-2"/><div className="cta-orb cta-orb-3"/>
              <div className="relative z-10 text-center">
                <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>See what all of this is for</h2>
                <p className="text-sm text-[#64748b] mb-8 max-w-md mx-auto leading-relaxed">
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
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
