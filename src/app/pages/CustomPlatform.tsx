import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Lock, Shield, Cpu, Server, Users, Settings, FileText, Database, Layers, Globe, Code2, Sparkles } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb, HatchAccent } from "../components/Decor";

const A  = "#46589F";
const A2 = "#7C92C7";

const heroMetrics = [
  { value: "4",    label: "Delivery Models" },
  { value: "EU",   label: "Infrastructure"  },
  { value: "100%", label: "IP Ownership"    },
  { value: "Custom",label: "By Design"      },
];

function PlatformGrid() {
  const items = [
    { icon: Server, label: "Fixed Scope",   sub: "Defined deliverable"      },
    { icon: Globe,  label: "Retainer",      sub: "Ongoing development"      },
    { icon: Layers, label: "Co-Build",      sub: "Joint engineering team"   },
    { icon: Code2,  label: "MVP First",     sub: "Validate then scale"      },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {items.map(({ icon: Icon, label, sub }, i) => (
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
            style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 6px 16px ${A}35` }}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-bold mb-1" style={{ color: "#0f172a" }}>{label}</p>
          <p className="text-xs" style={{ color: "#94a3b8" }}>{sub}</p>
        </div>
      ))}
    </div>
  );
}

const principles = [
  { icon: Shield,   title: "Requirements First",             desc: "Every custom build starts with a structured Discovery session. We understand your business goals, user needs, and technical constraints before proposing anything. No guessing and no assumptions. The right product starts with the right brief." },
  { icon: Cpu,      title: "Purpose-Built Engineering",      desc: "Your product is built from the ground up for your specific use case, never adapted from a template or a generic platform. Architecture, tech stack, and features are all chosen to fit your requirements." },
  { icon: Settings, title: "Complete Ownership Transfer",    desc: "On delivery you receive full intellectual property ownership: all source code, design assets, documentation, and deployment configurations. No vendor lock-in and no ongoing licence dependency." },
];

const capabilities = [
  { icon: Users,    title: "Requirements Specification",  desc: "A detailed product requirements document covering features, user flows, data models, integrations, and acceptance criteria. It's our contract and the standard we deliver against." },
  { icon: FileText, title: "UX & UI Design",              desc: "Full product design in Figma: wireframes, visual design, component library, and an interactive prototype, reviewed and approved before engineering begins." },
  { icon: Lock,     title: "Production Engineering",      desc: "Full-stack development across frontend, backend, and infrastructure, using the technology stack that best fits your product's requirements and scale." },
  { icon: Settings, title: "System Integrations",         desc: "Native connections to your existing business systems: ERP, CRM, payments, logistics, authentication, and any third-party services your product requires." },
  { icon: Shield,   title: "QA & Testing",                desc: "Comprehensive quality assurance including automated testing, manual review, performance testing, and security assessment before delivery." },
  { icon: Database, title: "Deployment & Handover",       desc: "Production deployment on EU infrastructure, technical documentation, source code handover, and a defined support SLA for the post-launch period." },
];

const deploymentModels = [
  { model: "Fixed-Scope Build",    infra: "Defined deliverables, agreed timeline", models: "Milestone-based payments",            residency: "Full IP transfer on delivery",         bestFor: "Well-defined products" },
  { model: "Agile Retainer",       infra: "Monthly engineering capacity",          models: "Monthly retainer fee",                residency: "IP transfers incrementally",           bestFor: "Evolving products" },
  { model: "Co-Build Partnership", infra: "Antutive team + client team",           models: "Resource-based pricing",              residency: "Joint or full client ownership",       bestFor: "Clients with in-house capability" },
  { model: "MVP Programme",        infra: "Core feature set only",                 models: "Fixed MVP pricing",                   residency: "Full IP transfer on delivery",         bestFor: "New product validation" },
];

const competitors = [
  { them: "Off-the-Shelf SaaS Products",  weakness: "Built for generic use cases, so they never quite fit your business logic or workflow",            advantage: "Antutive builds to your exact specification. Every feature, flow, and integration has a purpose" },
  { them: "No-Code / Low-Code Platforms", weakness: "Limited customisation, vendor lock-in, and performance ceilings as you scale",                  advantage: "Custom-engineered products scale without limits. You own the code, with no platform dependency" },
  { them: "In-House Development",         weakness: "Hiring, managing, and retaining engineering talent means high overhead and long timelines", advantage: "Antutive delivers a senior engineering team on demand: faster start, predictable cost, no overhead" },
  { them: "Generic Dev Agencies",         weakness: "Template-based approaches, junior teams, and no long-term support",                              advantage: "Purpose-built for each client, senior engineers throughout, and ongoing maintenance included" },
];

export function CustomPlatform() {
  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(56vh, 640px)", background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#eef2fa 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-20" />
        <Noise />
        <AuroraOrb size={430} color="rgba(70,88,159,0.16)" style={{ top: -150, right: -120 }} />
        <AuroraOrb size={310} color="rgba(124,146,199,0.14)" delay={5} style={{ bottom: -90, left: -80 }} />
        <RingDecor spin size={350} style={{ bottom: -120, right: "10%", opacity: 0.7 }} />
        <DotMatrix style={{ top: 90, left: 14 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A2}50`, background: `${A2}14`, animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Custom Product Engineering</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both", color: "#0f172a" }}>
                Your product.<br />Your requirements.<br /><span className="grad-text">Our engineering.</span>
              </h1>

              <p className="text-base max-w-lg leading-relaxed mb-8"
                style={{ color: "#64748b", animation: "fadeUp 0.8s ease 0.25s both" }}>
                Off-the-shelf software makes you work its way. Custom software works yours.
                Tell us how your business actually runs, and we'll engineer a product
                around it, delivered with the code and IP fully in your name.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Custom Build", "Full IP Ownership", "EU Hosted", "Fixed-Scope Pricing"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ border: `1px solid rgba(124,146,199,0.35)`, background: "rgba(124,146,199,0.10)", color: A }}>{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary">Discuss Your Product</Link>
                <Link to="#deployment" className="hero-btn-secondary">View Delivery Models</Link>
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
              <PlatformGrid />
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN PRINCIPLES ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#eef2fa 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(124,146,199,0.10),transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Core Design Principles</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>How We Approach Custom Builds</h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>Not a template. A product engineered from the ground up for your exact requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: `${A2}30`, boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 6px 18px ${A}30` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#0f172a" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 75% 60% at 50% 100%, #e6ebf7 0%, #f0f3fa 50%, #f8fafc 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />
        <HatchAccent style={{ top: 50, left: 30 }} />
        <AuroraOrb size={360} color="rgba(70,88,159,0.12)" style={{ top: -70, right: -70 }} />
        <DotMatrix style={{ bottom: 40, right: 24 }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">What's Included</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>What Every Custom Product Includes</h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>Six deliverables come standard with every Antutive custom build, from requirements to production deployment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant="scale" delay={i * 70}>
                <div className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: `${A2}28`, boxShadow: "0 4px 16px rgba(15,23,42,0.05)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg,${A},#2E3B72)` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#0f172a" }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section id="deployment" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#ffffff 0%,#eef2fa 60%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(70,88,159,0.12),transparent 70%)", filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Ways to Engage</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>Pick the Model That Fits</h2>
            <p className="text-sm mt-3 max-w-lg mx-auto" style={{ color: "#64748b" }}>Choose the engagement that matches your product requirement, your timeline, and your budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {deploymentModels.map((dm, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", border: `1px solid rgba(124,146,199,0.22)`, boxShadow: "0 4px 16px rgba(15,23,42,0.05)" }}>
                  <h3 className="text-sm font-bold mb-4" style={{ color: "#0f172a" }}>{dm.model}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[["Scope", dm.infra], ["Pricing", dm.models], ["IP Transfer", dm.residency], ["Best For", dm.bestFor]].map(([label, val]) => (
                      <div key={label}>
                        <p className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: "#94a3b8" }}>{label}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "#334155" }}>{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPETITIVE DIFFERENTIATION (dark band) ── */}
      <section className="dark-band py-24 relative overflow-hidden">
        <Noise />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(rgba(169,184,220,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <RingDecor size={400} style={{ bottom: -150, left: -130, borderColor: "rgba(169,184,220,0.14)", opacity: 0.8 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: "#A9B8DC", borderColor: "rgba(169,184,220,0.35)", background: "rgba(124,146,199,0.12)" }}>Why Custom</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#F3F6FC" }}>Why Custom Beats Off-the-Shelf</h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "rgba(199,210,236,0.7)" }}>How custom product development compares against the alternatives your business may already be considering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {competitors.map((c, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="dark-band-card">
                  <p className="text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "rgba(169,184,220,0.75)" }}>{c.them}</p>
                  <p className="text-xs mb-3" style={{ color: "#F0B45C" }}><span className="font-semibold">Their limitation: </span>{c.weakness}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#A9B8DC" }} />
                    <p className="text-xs font-medium leading-relaxed" style={{ color: "rgba(226,233,248,0.85)" }}>{c.advantage}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(70,88,159,0.12),transparent 70%)", filter: "blur(40px)" }} />
        <Reveal variant="flip">
          <div className="max-w-2xl mx-auto px-4 text-center relative">
            <h2 className="section-h2 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>Build Your Custom Product</h2>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: "#64748b" }}>Every engagement starts with a Discovery session. Tell us your requirements and we will scope, design, and build the product, then hand over full IP ownership on delivery.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="cta-btn-primary">
                Start a Discovery Session <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="#deployment" className="cta-btn-secondary">
                View Engagement Models
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
