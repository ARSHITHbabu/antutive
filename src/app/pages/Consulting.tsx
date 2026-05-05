import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Users, Briefcase, Code2, Server, Database, Cpu, Globe, Layers, Sparkles } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { DeliveryMethod } from "../components/DeliveryMethod";

const A  = "#1CB7B4";
const A2 = "#168AB0";
const D  = "#134E4A";

const heroMetrics = [
  { value: "3",   label: "Engagement Models" },
  { value: "3×",  label: "Faster Delivery"   },
  { value: "EU",  label: "Compliant Entity"  },
  { value: "SEK", label: "Local Invoicing"   },
];

/* ── hero right: service model grid ── */
function ConsultingServiceGrid() {
  const items = [
    { Icon: Briefcase, label: "Model A",  sub: "Product Strategy & Discovery", color: "#1CB7B4" },
    { Icon: Users,     label: "Model B",  sub: "Managed Build Teams",          color: "#168AB0" },
    { Icon: Code2,     label: "Model C",  sub: "Fixed-Scope Delivery",         color: "#0D9488" },
    { Icon: Globe,     label: "EU First", sub: "Swedish AB · SEK/EUR",         color: "#1CB7B4" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {items.map((s, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", animation: `fadeUp 0.7s ease ${i * 120}ms both` }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            style={{ background: `linear-gradient(135deg,${s.color}80,${s.color}30)`, border: `1px solid ${s.color}50` }}>
            <s.Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-bold text-white mb-1">{s.label}</p>
          <p className="text-xs text-white/50">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ── data ── */
const serviceModels = [
  {
    model: "Model A",
    title: "Product Strategy & Discovery",
    billing: "Time & Materials — billed in SEK or EUR through ANTUTIVE AB",
    desc: "Senior-level product strategy for businesses that have a requirement but are unsure where to start. We run discovery workshops, define requirements, produce a PRD, and deliver a scoped commercial proposal before any engineering begins.",
    items: ["Requirements workshops and stakeholder interviews", "Product scope and technical feasibility", "Product Requirements Document (PRD)", "Architecture planning and technology selection", "Commercial proposal with timeline and cost"],
  },
  {
    model: "Model B",
    title: "Managed Build Teams",
    billing: "Monthly retainer per team member or fixed-scope project pricing",
    desc: "Dedicated product teams for businesses that need ongoing engineering capacity. The client contracts exclusively with ANTUTIVE AB. Team composition, sprint management, QA, and delivery cadence are all handled by ANTUTIVE.",
    items: ["Dedicated team assembled by ANTUTIVE", "Single point of contact for the client", "Regular sprint reviews and live demos", "Full IP ownership transferred to client", "QA and deployment managed internally"],
  },
  {
    model: "Model C",
    title: "Fixed-Scope Build",
    billing: "Fixed-scope quotation with milestone-based payments",
    desc: "End-to-end product builds with defined scope, timeline, and cost. Web applications, mobile apps, enterprise platforms, API development, and system integrations. Every project follows the ANTUTIVE Delivery Method from discovery to handover.",
    items: ["Web and mobile product development", "Enterprise platform and system builds", "API development and third-party integrations", "Cloud infrastructure and deployment", "Full handover with documentation and IP transfer"],
  },
];

const techStack = [
  { domain: "Frontend",        tech: "React, Next.js, Vue.js, React Native, Flutter",              icon: Code2   },
  { domain: "Backend",         tech: "Python, Node.js, Java, .NET, Go",                            icon: Server  },
  { domain: "Cloud & DevOps",  tech: "AWS, Azure, GCP, Kubernetes, Terraform, CI/CD",             icon: Globe   },
  { domain: "Data & Storage",  tech: "PostgreSQL, MongoDB, Snowflake, Redis, Elasticsearch, dbt",  icon: Database },
  { domain: "Quality & Test",  tech: "Jest, Cypress, Playwright, Selenium, k6, SonarQube",         icon: Cpu     },
  { domain: "Enterprise",      tech: "SAP Integration, Salesforce, Microsoft 365, Fortnox, Visma", icon: Layers  },
];

const positioning = [
  { never: "We build what you spec without input",      always: "We partner from discovery to delivery"           },
  { never: "Template-based or no-code solutions",       always: "Custom-engineered for your exact requirements"   },
  { never: "You retain partial ownership of the code",  always: "Full IP transferred to you on final delivery"    },
  { never: "Black-box offshore delivery",               always: "Transparent EU-governed product engineering"     },
  { never: "Vendor lock-in to our infrastructure",      always: "Open architecture you own and can host anywhere" },
];

export function Consulting() {
  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#030608 0%,#06091a 50%,#0a0618 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.12),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(245,200,76,0.10),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}20,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-xs font-bold tracking-widest uppercase">ANTUTIVE · Product Engineering</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                Product Engineering<br />for European Businesses
              </h1>

              <p className="text-base text-white/80 max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                We build software products for businesses. From discovery and scoping through to design, engineering, and full handover — contracted through ANTUTIVE AB with EU compliance and local invoicing in SEK/EUR.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Product Strategy", "Managed Build Teams", "Fixed-Scope Delivery", "Architecture Design", "Full IP Transfer"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border border-white/20 bg-white/08 text-white/75 text-xs font-medium backdrop-blur-sm">{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary" style={{ color: D }}>Start a Discovery</Link>
                <Link to="#models" className="hero-btn-secondary">View Engagement Models</Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroMetrics.map((m, i) => (
                  <div key={m.label} className="metric-chip" style={{ animation: `fadeUp 0.6s ease ${0.55 + i * 0.1}s both` }}>
                    <span className="block text-xl font-bold">{m.value}</span>
                    <span className="block text-xs text-white/65 mt-0.5 leading-tight">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <ConsultingServiceGrid />
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE SERVICE MODELS ── */}
      <section id="models" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}16,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}12,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light"
              style={{ borderColor: `${A}40`, background: `${A}18`, color: "#fcd34d" }}>
              Engagement Models
            </span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Three Ways to Work With Us</h2>
            <p className="text-sm text-white/50 mt-3 max-w-xl mx-auto">
              Choose the model that fits your requirement. All work is contracted with ANTUTIVE AB — giving you EU compliance, full IP ownership, and a single accountable partner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceModels.map((sm, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-7 rounded-3xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${A}25`, backdropFilter: "blur(12px)" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: `linear-gradient(135deg,${A},${A2})` }}>{sm.model}</span>
                    <Briefcase className="w-4 h-4" style={{ color: A }} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{sm.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#fcd34d" }}>{sm.billing}</p>
                  <p className="text-xs text-white/55 leading-relaxed mb-5">{sm.desc}</p>
                  <ul className="flex flex-col gap-2 mt-auto">
                    {sm.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: A }} />
                        <span className="text-xs text-white/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH COVERAGE ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#050810 0%,#07091a 60%,#080c1a 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}25,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}18,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>
              Technology Coverage
            </span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Full-Stack Product Engineering</h2>
            <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">
              ANTUTIVE covers the complete technology stack — from user-facing applications to backend infrastructure, data systems, and enterprise integrations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techStack.map(({ domain, tech, icon: Icon }, i) => (
              <Reveal key={i} variant="scale" delay={i * 70}>
                <div className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)", borderColor: `${A}28`, boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 4px 14px ${A}30` }}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{domain}</h3>
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed">{tech}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY MODEL / POSITIONING ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 55%,#060c18 100%)" }}>
        <div className="absolute inset-0 hero-mesh-overlay opacity-25" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.08),transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Our Principles</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>What Sets Us Apart</h2>
            <p className="text-sm text-white/55 mt-3 max-w-xl mx-auto">
              We are not a generic agency. ANTUTIVE is a product engineering company — purpose-built to deliver software products for businesses from requirement to ownership transfer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {positioning.map((p, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 70}>
                <div className="grid grid-cols-2 gap-3 p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}>
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-400/20">
                    <p className="text-xs font-bold text-red-300 mb-1 uppercase tracking-wide">Not this</p>
                    <p className="text-xs text-white/70">{p.never}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-green-500/10 border border-green-400/20">
                    <p className="text-xs font-bold text-green-300 mb-1 uppercase tracking-wide">But this</p>
                    <p className="text-xs text-white/80">{p.always}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DeliveryMethod accentColor={A} />

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 55%,#080c18 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}22,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}18,transparent 70%)`, filter: "blur(50px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A}30`, background: `${A}10` }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Start Building</span>
              </div>
              <h2 className="section-h2 text-white mb-4" style={{ fontWeight: 700 }}>
                Ready to Build Your Product?
              </h2>
              <p className="text-sm text-white/55 mb-8 leading-relaxed">
                Whether you have a clear requirement or just an idea — start with a free Discovery session. We will scope it, design it, and build it. Full IP ownership guaranteed.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary"
                  style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                  Start a Free Discovery <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="cta-btn-secondary"
                  style={{ borderColor: `${A}40`, color: A }}>
                  View Our Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
