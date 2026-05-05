import { Link } from "react-router";
import {
  ArrowRight, CheckCircle2, Search, Video, Zap, BarChart3,
  MessageSquare, FileText, TrendingUp, Globe, Sparkles,
  Shield, Users, Code2,
} from "lucide-react";
import { Reveal } from "../lib/scroll";

const A  = "#1CB7B4";
const A2 = "#168AB0";
const D  = "#134E4A";

const heroMetrics = [
  { value: "EU",   label: "Based"        },
  { value: "B2B",  label: "Focus"        },
  { value: "3×",   label: "Faster Delivery" },
  { value: "100%", label: "IP Ownership" },
];

function GrowthServiceGrid() {
  const items = [
    { Icon: Search,    label: "Discovery",   sub: "Requirements analysis", color: "#1CB7B4" },
    { Icon: Video,     label: "Design",      sub: "UX & UI prototyping",   color: "#168AB0" },
    { Icon: Zap,       label: "Engineering", sub: "Full-stack build",      color: "#0D9488" },
    { Icon: BarChart3, label: "Delivery",    sub: "Launch & support",      color: "#1CB7B4" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {items.map((s, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "#ffffff",
            border: `1px solid rgba(28,183,180,0.18)`,
            boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
            animation: `fadeUp 0.7s ease ${i * 120}ms both`,
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            style={{ background: `linear-gradient(135deg,${s.color}80,${s.color}30)`, border: `1px solid ${s.color}50` }}>
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
  { Icon: Search,    title: "Business Requirements Workshop", desc: "A structured session to capture your business goals, user journeys, competitive context, and success metrics. Output: a clear problem statement and product brief." },
  { Icon: Code2,     title: "Technical Feasibility Assessment",desc: "Evaluation of technical approach options, integration requirements, infrastructure needs, and technology choices appropriate to your context." },
  { Icon: FileText,  title: "Product Requirements Document",  desc: "A complete written specification covering features, user flows, data models, non-functional requirements, and acceptance criteria." },
  { Icon: Globe,     title: "Scope & Timeline Estimate",      desc: "Detailed breakdown of engineering effort, sprint plan, milestones, and delivery timeline based on the requirements document." },
  { Icon: BarChart3, title: "Commercial Proposal",            desc: "Fixed-scope pricing with milestone payment schedule, or retainer structure for ongoing development. Delivered within one week of Discovery." },
];

const videoDeliverables = [
  { Icon: FileText,      title: "Wireframe Design",         desc: "Low-fidelity wireframes mapping user flows and screen structures — reviewed and approved before detailed design begins." },
  { Icon: Video,         title: "UI Design",                desc: "High-fidelity visual design in Figma — complete interface design including components, states, responsive layouts, and brand integration." },
  { Icon: MessageSquare, title: "Interactive Prototypes",   desc: "Clickable prototypes for stakeholder review and user testing before the engineering phase begins — reducing costly scope changes during build." },
  { Icon: BarChart3,     title: "Design System",            desc: "Reusable component library and style guide delivered with the product — enabling consistent, efficient ongoing development." },
];

const automationServices = [
  { Icon: Zap,           title: "Agile Sprint Delivery",    desc: "1–2 week development sprints with weekly demos to the client. Clear visibility into progress, early feedback, and no surprises at delivery." },
  { Icon: MessageSquare, title: "Continuous Integration",   desc: "Automated build and test pipelines ensuring every code change is validated before merging. No broken builds reach staging or production." },
  { Icon: Search,        title: "QA & Testing",             desc: "Manual and automated testing across unit, integration, and end-to-end layers. Every feature tested against acceptance criteria before delivery." },
  { Icon: BarChart3,     title: "Performance Monitoring",   desc: "Production monitoring, error tracking, and performance dashboards set up before launch — giving clients full visibility from day one." },
  { Icon: FileText,      title: "Technical Documentation",  desc: "Complete developer documentation, API references, deployment guides, and runbooks delivered with every product — enabling client teams to maintain and extend independently." },
];

const targetClients = [
  { type: "SME (10–50 employees)",       pain: "Need a digital product but have no in-house engineering team",         entry: "Discovery + MVP build",            expansion: "Full product + ongoing development" },
  { type: "Scale-up (50–250 employees)", pain: "Existing product needs rebuilding or significant new features",         entry: "Architecture review + build",      expansion: "Dedicated engineering retainer" },
  { type: "Enterprise (250+ employees)", pain: "Custom internal tool or enterprise platform required",                  entry: "Discovery workshop + specification",expansion: "Full enterprise product build" },
  { type: "Product Founder",             pain: "Has a validated idea but needs engineers to build the product",         entry: "MVP build + launch support",        expansion: "Ongoing product development" },
];

export function GrowthMarketing() {
  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#f0fdfa 0%,#f8fafc 50%,#ecfeff 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-20" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.12),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(22,138,176,0.09),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(28,183,180,0.10),transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A}30`, background: `${A}10`, animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>AI Growth & Marketing</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both", color: "#0f172a" }}>
                From Idea to<br />Live Product — Fast
              </h1>

              <p className="text-base max-w-lg leading-relaxed mb-8"
                style={{ color: "#64748b", animation: "fadeUp 0.8s ease 0.25s both" }}>
                Requirements gathering, product design, engineering, and delivery. ANTUTIVE takes your idea
                from brief to production — fast, European, and entirely yours.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Product Discovery", "UX Design", "Engineering", "EU-Based", "IP Ownership"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ border: `1px solid rgba(28,183,180,0.25)`, background: "rgba(28,183,180,0.08)", color: A }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary">Book a Discovery Session</Link>
                <Link to="#geo" className="hero-btn-secondary">Explore Process</Link>
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

      {/* ── GEO ── */}
      <section id="geo" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f0fdfa 50%,#ecfeff 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(28,183,180,0.10),transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(22,138,176,0.08),transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light"
                style={{ borderColor: `${A}40`, background: `${A}12`, color: A }}>
                Product Discovery
              </span>
              <h2 className="section-h2 mt-3 mb-5" style={{ fontWeight: 700, color: "#0f172a" }}>
                Product Discovery & Scoping
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                Great products start with clear requirements. Before we write a single line of code, ANTUTIVE
                runs a structured Discovery session to understand your business goals, user needs, technical
                constraints, and market context.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                The Discovery session produces a Product Requirements Document — the foundation for accurate
                scoping, realistic timelines, and commercial proposals that reflect the real project, not
                a generic estimate.
              </p>
              <div className="p-4 rounded-2xl border"
                style={{ background: `rgba(28,183,180,0.06)`, borderColor: `${A}28` }}>
                <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: A }}>
                  ANTUTIVE uses Discovery for all projects
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                  No project starts without a proper Discovery phase. This protects both parties — ensuring
                  we build the right product at the right scope and price.
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-3">
                {geoDeliverables.map((item, i) => (
                  <Reveal key={i} variant="right" delay={i * 70}>
                    <div className="p-4 rounded-2xl border flex gap-3 items-start transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "#ffffff", borderColor: `${A}18`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(135deg,${A}55,${A}22)`, border: `1px solid ${A}40` }}>
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

      {/* ── AI VIDEO PRODUCTION ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f8fafc 0%,#ecfeff 60%,#f0fdfa 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(28,183,180,0.10),transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(22,138,176,0.08),transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>
              AI Video Production
            </span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>
              Product Design & Prototyping
            </h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Visual design and user experience work that bridges requirements and engineering.
              Every ANTUTIVE product is designed before it is built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {videoDeliverables.map(({ Icon, title, desc }, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: `${A}22`, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
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
              style={{ background: `rgba(28,183,180,0.06)`, borderColor: `${A}22` }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: A }}>Why Design First?</p>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Products designed before engineering begins are delivered faster, with fewer changes, and at lower total cost.
                <span className="font-bold" style={{ color: A }}> Every ANTUTIVE project includes full design before build.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SALES AUTOMATION ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f0fdfa 55%,#ecfeff 100%)" }}>
        <div className="absolute inset-0 hero-mesh-overlay opacity-15" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.09),transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(22,138,176,0.07),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Sales Automation</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>
              How We Engineer Products
            </h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Agile, sprint-based engineering with weekly demos and regular client reviews.
              Every product follows the ANTUTIVE Delivery Method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {automationServices.map(({ Icon, title, desc }, i) => (
              <Reveal key={i} variant="scale" delay={i * 80}>
                <div className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", border: `1px solid rgba(28,183,180,0.16)`, boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg,${A}20,${A}10)`, border: `1px solid ${A}30` }}>
                    <Icon className="w-5 h-5" style={{ color: A }} />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#0f172a" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARGET CLIENTS ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f8fafc 0%,#ecfeff 55%,#f0fdfa 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(28,183,180,0.09),transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(22,138,176,0.07),transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>
              Who We Build For
            </span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>Types of Clients We Work With</h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Different businesses have different product needs. ANTUTIVE works across industries and company sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {targetClients.map((client, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: `${A}20`, boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 flex-shrink-0" style={{ color: A }} />
                    <h3 className="text-sm font-bold" style={{ color: "#0f172a" }}>{client.type}</h3>
                  </div>
                  <p className="text-xs mb-4 pl-6" style={{ color: "#94a3b8" }}>
                    <span className="font-semibold" style={{ color: "#64748b" }}>Typical need:</span>{client.pain}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl"
                      style={{ background: `rgba(28,183,180,0.07)`, border: `1px solid ${A}22` }}>
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
        style={{ background: "linear-gradient(135deg,#ecfeff 0%,#f0fdfa 55%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 hero-mesh-overlay opacity-15" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.10),transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(22,138,176,0.08),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A}30`, background: `${A}10` }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Free Diagnostic</span>
              </div>
              <h2 className="section-h2 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>
                Start with a Free Discovery Session
              </h2>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: "#64748b" }}>
                Tell us what you want to build. We'll scope it, design it, and deliver it — starting
                with a free Discovery session to understand your requirements.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: `linear-gradient(135deg,${A},${A2})`, color: "#ffffff" }}>
                  Book a Discovery Session <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ border: `1.5px solid ${A}40`, color: A, background: `${A}08` }}>
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
