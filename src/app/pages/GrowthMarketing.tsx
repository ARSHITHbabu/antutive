import { Link } from "react-router";
import {
  ArrowRight, Search, Video, Zap, BarChart3,
  MessageSquare, FileText, Globe, Sparkles, Users, Code2,
} from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb, HatchAccent } from "../components/Decor";

const A  = "#46589F";
const A2 = "#7C92C7";

const heroMetrics = [
  { value: "EU",   label: "Based"        },
  { value: "B2B",  label: "Focus"        },
  { value: "3×",   label: "Faster Delivery" },
  { value: "100%", label: "IP Ownership" },
];

function GrowthServiceGrid() {
  const items = [
    { Icon: Search,    label: "Discovery",   sub: "Requirements analysis", color: "#7C92C7" },
    { Icon: Video,     label: "Design",      sub: "UX & UI prototyping",   color: "#5F74B4" },
    { Icon: Zap,       label: "Engineering", sub: "Full-stack build",      color: "#46589F" },
    { Icon: BarChart3, label: "Delivery",    sub: "Launch & support",      color: "#2E3B72" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {items.map((s, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "#ffffff",
            border: `1px solid rgba(124,146,199,0.24)`,
            boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
            animation: `fadeUp 0.7s ease ${i * 120}ms both`,
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            style={{ background: `linear-gradient(135deg,${s.color},${s.color}99)`, boxShadow: `0 6px 16px ${s.color}40` }}>
            <s.Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-bold mb-1" style={{ color: "#0f172a" }}>{s.label}</p>
          <p className="text-xs" style={{ color: "#94a3b8" }}>{s.sub}</p>
        </div>
      ))}
    </div>
  );
}

const geoDeliverables = [
  { Icon: Search,    title: "Business Requirements Workshop", desc: "A structured session that captures your business goals, user journeys, competitive context, and success metrics. You leave with a clear problem statement and product brief." },
  { Icon: Code2,     title: "Technical Feasibility Assessment",desc: "An honest evaluation of technical options, integration requirements, infrastructure needs, and the technology choices that fit your context." },
  { Icon: FileText,  title: "Product Requirements Document",  desc: "A complete written specification covering features, user flows, data models, non-functional requirements, and acceptance criteria." },
  { Icon: Globe,     title: "Scope & Timeline Estimate",      desc: "A detailed breakdown of engineering effort, sprint plan, milestones, and delivery timeline, all grounded in the requirements document." },
  { Icon: BarChart3, title: "Commercial Proposal",            desc: "Fixed-scope pricing with a milestone payment schedule, or a retainer structure for ongoing development. Delivered within one week of Discovery." },
];

const videoDeliverables = [
  { Icon: FileText,      title: "Wireframe Design",         desc: "Low-fidelity wireframes that map user flows and screen structures, reviewed and approved before any detailed design begins." },
  { Icon: Video,         title: "UI Design",                desc: "High-fidelity visual design in Figma. A complete interface covering components, states, responsive layouts, and your brand." },
  { Icon: MessageSquare, title: "Interactive Prototypes",   desc: "Clickable prototypes for stakeholder review and user testing before engineering starts. Catching changes here is far cheaper than catching them mid-build." },
  { Icon: BarChart3,     title: "Design System",            desc: "A reusable component library and style guide delivered with the product, so future development stays consistent and efficient." },
];

const automationServices = [
  { Icon: Zap,           title: "Agile Sprint Delivery",    desc: "Development runs in 1–2 week sprints with weekly demos. You see progress early, give feedback often, and never get surprised at delivery." },
  { Icon: MessageSquare, title: "Continuous Integration",   desc: "Automated build and test pipelines validate every code change before it merges. Broken builds never reach staging or production." },
  { Icon: Search,        title: "QA & Testing",             desc: "Manual and automated testing across unit, integration, and end-to-end layers. Every feature is tested against its acceptance criteria before delivery." },
  { Icon: BarChart3,     title: "Performance Monitoring",   desc: "Production monitoring, error tracking, and performance dashboards are in place before launch, giving you full visibility from day one." },
  { Icon: FileText,      title: "Technical Documentation",  desc: "Complete developer documentation, API references, deployment guides, and runbooks ship with every product, so your team can maintain and extend it independently." },
];

const targetClients = [
  { type: "SME (10–50 employees)",       pain: "Needs a digital product but has no in-house engineering team",         entry: "Discovery + MVP build",            expansion: "Full product + ongoing development" },
  { type: "Scale-up (50–250 employees)", pain: "An existing product needs rebuilding or significant new features",     entry: "Architecture review + build",      expansion: "Dedicated engineering retainer" },
  { type: "Enterprise (250+ employees)", pain: "Requires a custom internal tool or enterprise platform",               entry: "Discovery workshop + specification",expansion: "Full enterprise product build" },
  { type: "Product Founder",             pain: "Has a validated idea but needs engineers to build the product",        entry: "MVP build + launch support",        expansion: "Ongoing product development" },
];

export function GrowthMarketing() {
  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(56vh, 640px)", background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#eef2fa 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-20" />
        <Noise />
        <AuroraOrb size={420} color="rgba(124,146,199,0.18)" style={{ top: -140, right: -110 }} />
        <AuroraOrb size={300} color="rgba(70,88,159,0.13)" delay={4} style={{ bottom: -90, left: -80 }} />
        <RingDecor spin size={340} style={{ top: -100, right: "14%", opacity: 0.7 }} />
        <DotMatrix style={{ bottom: 24, left: 16 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A2}50`, background: `${A2}14`, animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>How We Work</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both", color: "#0f172a" }}>
                From idea to<br /><span className="grad-text">live product. Fast.</span>
              </h1>

              <p className="text-base max-w-lg leading-relaxed mb-8"
                style={{ color: "#64748b", animation: "fadeUp 0.8s ease 0.25s both" }}>
                No fifty-page proposals. No six-month silences. We take your idea through
                discovery, design, and engineering in the open, with a working demo in
                your inbox every week and your name on everything we ship.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Product Discovery", "UX Design", "Engineering", "EU-Based", "IP Ownership"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ border: `1px solid rgba(124,146,199,0.35)`, background: "rgba(124,146,199,0.10)", color: A }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary">Book a Discovery Session</Link>
                <Link to="#geo" className="hero-btn-secondary">Explore the Process</Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroMetrics.map((m, i) => (
                  <div key={m.label} className="metric-chip" style={{ animation: `fadeUp 0.6s ease ${0.55 + i * 0.1}s both` }}>
                    <span className="block text-xl font-bold">{m.value}</span>
                    <span className="block text-xs mt-0.5 leading-tight" style={{ color: "#94a3b8" }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <GrowthServiceGrid />
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOVERY ── */}
      <section id="geo" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#eef2fa 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <HatchAccent style={{ top: 60, right: 40 }} />
        <AuroraOrb size={340} color="rgba(124,146,199,0.13)" style={{ top: 60, right: -80 }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light">Step 1 · Discovery</span>
              <h2 className="section-h2 mt-3 mb-5" style={{ fontWeight: 700, color: "#0f172a" }}>
                Great Products Start<br/>with Clear Requirements
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                Before we write a single line of code, Antutive runs a structured Discovery
                session to understand your business goals, your users, your technical
                constraints, and your market.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                Discovery produces a Product Requirements Document. It's the foundation for
                accurate scoping, realistic timelines, and a proposal that reflects your
                actual project instead of a generic estimate.
              </p>
              <div className="p-4 rounded-2xl border"
                style={{ background: `rgba(124,146,199,0.08)`, borderColor: `${A2}45` }}>
                <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: A }}>
                  Every project starts with Discovery
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                  No exceptions. It protects both of us, making sure we build the right
                  product at the right scope and the right price.
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-3">
                {geoDeliverables.map((item, i) => (
                  <Reveal key={i} variant="right" delay={i * 70}>
                    <div className="p-4 rounded-2xl border flex gap-3 items-start transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "#ffffff", borderColor: `${A2}30`, boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                        <item.Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-1" style={{ color: "#0f172a" }}>{item.title}</h4>
                        <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DESIGN ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f8fafc 0%,#eef2fa 60%,#f8fafc 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(124,146,199,0.12),transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Step 2 · Design</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>
              Designed Before It's Built
            </h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Visual design and user experience work bridge the gap between requirements and
              engineering. Every Antutive product is fully designed before a sprint begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {videoDeliverables.map(({ Icon, title, desc }, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: `${A2}30`, boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 6px 18px ${A}30` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#0f172a" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={200}>
            <div className="mt-10 max-w-lg mx-auto p-5 rounded-2xl border text-center"
              style={{ background: `rgba(124,146,199,0.08)`, borderColor: `${A2}35` }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: A }}>Why Design First?</p>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Products designed before engineering are delivered faster, with fewer changes, at lower total cost.
                <span className="font-bold" style={{ color: A }}> That's why every Antutive project includes full design before build.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ENGINEERING (dark band) ── */}
      <section className="dark-band py-24 relative overflow-hidden">
        <Noise />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(rgba(169,184,220,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <RingDecor size={420} style={{ top: -160, right: -140, borderColor: "rgba(169,184,220,0.14)", opacity: 0.8 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: "#A9B8DC", borderColor: "rgba(169,184,220,0.35)", background: "rgba(124,146,199,0.12)" }}>Step 3 · Engineering</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#F3F6FC" }}>
              How We Engineer Products
            </h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "rgba(199,210,236,0.7)" }}>
              Agile, sprint-based engineering with weekly demos and regular client reviews.
              Every product follows the Antutive Delivery Method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {automationServices.map(({ Icon, title, desc }, i) => (
              <Reveal key={i} variant="scale" delay={i * 80}>
                <div className="dark-band-card">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)", boxShadow: "0 8px 20px rgba(70,88,159,0.45)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#F3F6FC" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(199,210,236,0.68)" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARGET CLIENTS ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f8fafc 0%,#eef2fa 55%,#f8fafc 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(124,146,199,0.10),transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(70,88,159,0.08),transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Who We Build For</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>Sound Like You?</h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Different businesses have different product needs. Antutive works across industries and company sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {targetClients.map((client, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: `${A2}30`, boxShadow: "0 4px 16px rgba(15,23,42,0.05)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 flex-shrink-0" style={{ color: A }} />
                    <h3 className="text-sm font-bold" style={{ color: "#0f172a" }}>{client.type}</h3>
                  </div>
                  <p className="text-xs mb-4 pl-6" style={{ color: "#94a3b8" }}>
                    <span className="font-semibold" style={{ color: "#64748b" }}>Typical need: </span>{client.pain}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl"
                      style={{ background: `rgba(124,146,199,0.10)`, border: `1px solid ${A2}35` }}>
                      <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: A }}>Entry Point</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>{client.entry}</p>
                    </div>
                    <div className="p-3 rounded-xl" style={{ background: "#f8fafc", border: "1px solid rgba(100,116,139,0.12)" }}>
                      <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: "#94a3b8" }}>Expansion Path</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{client.expansion}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 hero-mesh-overlay opacity-15" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(124,146,199,0.12),transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A2}50`, background: `${A2}14` }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Free Discovery</span>
              </div>
              <h2 className="section-h2 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>
                Start with a Free Discovery Session
              </h2>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: "#64748b" }}>
                Tell us what you want to build. We'll scope it, design it, and deliver it,
                starting with a free Discovery session to understand your requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary">
                  Book a Discovery Session <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/products" className="cta-btn-secondary">
                  Explore Our Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
