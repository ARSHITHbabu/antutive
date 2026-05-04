import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Mic, Calendar, Zap, FileText, ShoppingCart, Shield, Globe, Package, Star, Sparkles } from "lucide-react";
import { Reveal } from "../lib/scroll";

const A = "#6F3CC3";

const heroMetrics = [
  { value: "Q3",   label: "2026 MVP Launch" },
  { value: "3",    label: "Pricing Tiers"   },
  { value: "EU",   label: "Data Residency"  },
  { value: "Free", label: "Start Forever"   },
];

function FAMANTGrid() {
  const items = [
    { Icon: Calendar, label: "Family Calendar", sub: "Unified scheduling"      },
    { Icon: Mic,      label: "Voice-First",     sub: "Swedish & English"       },
    { Icon: Shield,   label: "GDPR Native",     sub: "EU infrastructure"       },
    { Icon: Zap,      label: "Agentic Tasks",   sub: "AI-powered coordination" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {items.map(({ Icon, label, sub }, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "#ffffff",
            border: `1px solid rgba(111,60,195,0.18)`,
            boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
            animation: `fadeUp 0.7s ease ${i * 120}ms both`,
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            style={{ background: `linear-gradient(135deg,${A}80,${A}30)`, border: `1px solid ${A}50` }}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-bold mb-1" style={{ color: "#0f172a" }}>{label}</p>
          <p className="text-xs" style={{ color: "#94a3b8" }}>{sub}</p>
        </div>
      ))}
    </div>
  );
}

const capabilities = [
  { icon: Calendar,     title: "Unified Family Calendar",    desc: "Aggregates Google, Outlook, and Apple calendars into a shared family view with intelligent conflict detection and voice-based event creation." },
  { icon: Zap,          title: "Agentic Task Management",    desc: "Tasks assigned, tracked, and completed through voice commands — with proactive reminders and adaptation based on completion patterns." },
  { icon: ShoppingCart, title: "Meal Planning Engine",       desc: "Weekly meal planning with recipe management, dietary tracking, automatic grocery list generation, and delivery service integration." },
  { icon: FileText,     title: "Document Vault",             desc: "Secure storage and intelligent retrieval of family documents — school forms, medical records, insurance — with OCR and natural language search." },
  { icon: Mic,          title: "Voice-First Interface",      desc: "Every function accessible through conversational voice in Swedish and English, reducing screen dependency for the whole family." },
  { icon: Shield,       title: "Privacy-First Architecture", desc: "All AI processing on EU infrastructure. Family data never leaves your control. Fully GDPR compliant by design." },
];

const roadmap = [
  { version: "MVP",  quarter: "Q3 2026", milestone: "Core calendar, basic task management, Swedish voice interface",                   status: "upcoming" },
  { version: "V1.0", quarter: "Q4 2026", milestone: "Full feature set, 6-member seats, grocery delivery integration",                  status: "upcoming" },
  { version: "V1.5", quarter: "Q1 2027", milestone: "Smart home connectors, German/English expansion, family analytics",               status: "future"   },
  { version: "V2.0", quarter: "Q2 2027", milestone: "AI-driven predictions, enterprise family plans, API ecosystem",                   status: "future"   },
];

const pricingTiers = [
  { name: "Freemium",      price: "0 SEK",  period: "/month",                items: ["Unified family calendar", "Basic task management", "Swedish & English voice", "Up to 2 family members"],                                                featured: false },
  { name: "Premium",       price: "99 SEK", period: "/month",                items: ["Everything in Freemium", "Meal planning + grocery lists", "Document Vault with OCR", "Up to 6 family members", "Priority support"],                    featured: true  },
  { name: "Family Annual", price: "79 SEK", period: "/month, billed annually", items: ["Everything in Premium", "Smart home connectors", "Family analytics dashboard", "Early access to new features"],                                     featured: false },
];

const saasEvaluation = [
  { criterion: "Proven Product-Market Fit",     detail: "Active customer base with demonstrated retention — not pre-revenue concepts" },
  { criterion: "GDPR-Compatible Architecture",  detail: "Data model allowing EU-hosted deployment without fundamental re-engineering" },
  { criterion: "True SaaS Model",               detail: "Cloud-native architecture; desktop or on-premise-first products are excluded" },
  { criterion: "B2B or Prosumer Target Market", detail: "Business-oriented products where EU regulatory compliance is a buying criterion" },
  { criterion: "EU Market Addressable",         detail: "Clear demand signal in Sweden, Germany, Netherlands, France or other EU markets" },
  { criterion: "Non-Competitive",               detail: "Does not directly compete with ANTUTIVE Engineering solution areas" },
];

export function Products() {
  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#f8fafc 0%,#faf5ff 50%,#eff6ff 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-20" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(111,60,195,0.10),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.08),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(111,60,195,0.08),transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A}30`, background: `${A}10`, animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>ANTUTIVE Products</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both", color: "#0f172a" }}>
                FAMANT &<br />EU SaaS Portfolio
              </h1>

              <p className="text-base max-w-lg leading-relaxed mb-8"
                style={{ color: "#64748b", animation: "fadeUp 0.8s ease 0.25s both" }}>
                A voice-first AI home OS for families and a curated portfolio of EU-distributed SaaS products. Scalable recurring revenue alongside our core platform portfolio.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["FAMANT Home OS", "Voice-First", "EU Data Residency", "SaaS Distribution", "Freemium Model"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ border: `1px solid rgba(111,60,195,0.22)`, background: "rgba(111,60,195,0.07)", color: "#6F3CC3" }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary">Request Early Access</Link>
                <Link to="#saas" className="hero-btn-secondary">EU SaaS Partnership</Link>
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
              <FAMANTGrid />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMANT OVERVIEW ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#faf5ff 50%,#f5f3ff 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(111,60,195,0.08),transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.07),transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light"
                style={{ borderColor: `${A}40`, background: `${A}12`, color: A }}>
                FAMANT Home OS
              </span>
              <h2 className="section-h2 mt-3 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>FAMANT</h2>
              <p className="text-sm font-semibold mb-4" style={{ color: A }}>Voice-First Agentic Home OS for Families</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                FAMANT unifies calendar management, task coordination, meal planning, and document management
                into a single AI-powered platform. Conversational voice is the primary interaction mode —
                reducing screen dependency for the whole family.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                Unlike fragmented apps, FAMANT connects every aspect of family logistics in one place.
                It proactively manages schedules, coordinates tasks across family members, plans meals with
                automatic grocery ordering, and makes your important documents instantly searchable by voice.
                Launching MVP in Q3 2026 — Swedish and English, EU-hosted.
              </p>
              <div className="p-4 rounded-2xl border"
                style={{ background: `rgba(111,60,195,0.05)`, borderColor: `${A}25` }}>
                <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: A }}>EU Privacy Guarantee</p>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>All AI processing on EU infrastructure. Swedish legal entity. Your family data never leaves European borders — fully GDPR compliant by design.</p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="grid grid-cols-1 gap-3">
                {capabilities.map(({ icon: Icon, title, desc }, i) => (
                  <Reveal key={i} variant="right" delay={i * 60}>
                    <div className="p-4 rounded-2xl border flex gap-3 items-start transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "#ffffff", borderColor: `${A}18`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(135deg,${A}55,${A}22)`, border: `1px solid ${A}40` }}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-1" style={{ color: "#0f172a" }}>{title}</h4>
                        <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f8fafc 0%,#faf5ff 50%,#f0f9ff 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(111,60,195,0.07),transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.07),transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>Pricing</span>
              <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>Simple, Transparent Pricing</h2>
              <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>Start free. Upgrade when your family is ready. All tiers include GDPR-compliant EU-hosted infrastructure.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-7 rounded-3xl border h-full flex flex-col relative transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: tier.featured ? A : `${A}22`,
                    background: tier.featured ? `linear-gradient(135deg,#160D2B,#6F3CC3,#F36D4F)` : "#ffffff",
                    boxShadow: tier.featured ? `0 24px 60px ${A}30` : "0 4px 20px rgba(0,0,0,0.08)",
                  }}>
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: A }}>
                        <Star className="w-3 h-3" /> Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-sm font-bold mb-1" style={{ color: tier.featured ? "#ffffff" : "#0f172a" }}>{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="text-3xl font-bold" style={{ color: tier.featured ? "#ffffff" : "#0f172a" }}>{tier.price}</span>
                    <span className="text-xs" style={{ color: tier.featured ? "rgba(255,209,213,0.85)" : "#94a3b8" }}>{tier.period}</span>
                  </div>
                  <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                    {tier.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: tier.featured ? "#f9a8d4" : A }} />
                        <span className="text-xs" style={{ color: tier.featured ? "rgba(255,240,246,0.90)" : "#475569" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block text-center py-2.5 rounded-2xl text-xs font-bold transition-all hover:scale-105"
                    style={{
                      background: tier.featured ? "rgba(255,255,255,0.15)" : `${A}12`,
                      color: tier.featured ? "white" : A,
                      border: `1px solid ${tier.featured ? "rgba(255,255,255,0.25)" : `${A}30`}`,
                    }}>
                    Get Started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f5f3ff 50%,#faf5ff 100%)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(111,60,195,0.08),transparent 70%)`, filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Development Roadmap</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>FAMANT Launch Timeline</h2>
            <p className="text-sm mt-3 max-w-lg mx-auto" style={{ color: "#64748b" }}>MVP launching Q3 2026. Built with EU-native infrastructure, GDPR compliance by design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {roadmap.map((item, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", border: `1px solid rgba(111,60,195,0.15)`, boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: `${A}15`, color: A }}>{item.version}</span>
                    <span className="text-xs font-semibold" style={{ color: A }}>{item.quarter}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{item.milestone}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EU SAAS DISTRIBUTION ── */}
      <section id="saas" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f8fafc 0%,#eff6ff 50%,#faf5ff 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(111,60,195,0.08),transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.07),transparent 70%)", filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>EU SaaS Distribution</span>
              <h2 className="section-h2 mt-3 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>EU SaaS Distribution</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                ANTUTIVE identifies proven SaaS products built by development partners that serve validated
                business needs but lack EU market presence. We acquire exclusive EU distribution rights,
                ensure GDPR and EU AI Act compliance, provide localisation, and handle all EU sales and billing.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                Commercial structure: ANTUTIVE receives 20–40% revenue share on EU subscriptions — generating
                recurring licence revenue alongside the engineering solution areas. Partners
                gain EU market access without entity setup cost.
              </p>
              <div className="p-4 rounded-2xl border" style={{ background: "#ffffff", borderColor: `${A}22`, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4" style={{ color: A }} />
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: A }}>Commercial Model</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>Exclusive EU distribution rights. Localisation (EN + SV) within 4 weeks. All EU billing in SEK/EUR through ANTUTIVE AB. GDPR compliance guaranteed.</p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="p-6 rounded-3xl border" style={{ borderColor: `${A}22`, background: "#ffffff", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <Globe className="w-4 h-4" style={{ color: A }} />
                  <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: A }}>Partner Evaluation Criteria</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {saasEvaluation.map((item, i) => (
                    <Reveal key={i} variant="right" delay={i * 60}>
                      <div className="p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: "#f8fafc", borderColor: `${A}14` }}>
                        <p className="text-xs font-bold mb-1" style={{ color: A }}>{item.criterion}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{item.detail}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f5f3ff 0%,#faf5ff 50%,#eff6ff 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(111,60,195,0.10),transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.08),transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A}30`, background: `${A}10` }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Join the Waitlist</span>
              </div>
              <h2 className="section-h2 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>Join the FAMANT Waitlist</h2>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: "#64748b" }}>MVP launching Q3 2026. Be among the first Swedish families to access FAMANT — voice-first, EU-hosted, GDPR compliant.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary" style={{ background: `linear-gradient(135deg,#F5C84C,#1CB7B4,${A})` }}>
                  Request Early Access <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="cta-btn-secondary" style={{ borderColor: `${A}40`, color: A }}>
                  Explore SaaS Partnership
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
