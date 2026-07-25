import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2, Mic, Calendar, Zap, FileText, ShoppingCart, Shield, Globe, Package, Star, Sparkles, UtensilsCrossed, FolderLock } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb } from "../components/Decor";
import famantVideo from "../../assets/video_cutted-Picsart-BackgroundRemover.webm";

const A  = "#46589F";
const A2 = "#7C92C7";

const heroMetrics = [
  { value: "B2B",    label: "Focus"         },
  { value: "EU",     label: "Infrastructure"},
  { value: "100%",   label: "IP Ownership"  },
  { value: "Custom", label: "By Design"     },
];

function FAMANTGrid() {
  const items = [
    { Icon: Calendar, label: "Web Products",   sub: "Scalable platforms"    },
    { Icon: Mic,      label: "Mobile Apps",    sub: "iOS & Android"         },
    { Icon: Shield,   label: "EU Compliant",   sub: "GDPR by design"        },
    { Icon: Zap,      label: "Fast Delivery",  sub: "End-to-end built"      },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {items.map(({ Icon, label, sub }, i) => (
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

const famantFeatures = [
  { Icon: Calendar,        title: "Unified Family Calendar",  desc: "Brings Google, Outlook, and Apple calendars into one shared family view, with conflict detection, scheduling suggestions, and voice-based event creation." },
  { Icon: Zap,             title: "Agentic Task Management",  desc: "Assign, track, and complete tasks by voice. Proactive reminders, escalation alerts, and smart adaptation to your family's patterns." },
  { Icon: UtensilsCrossed, title: "Meal Planning Engine",     desc: "Weekly meal planning with recipe management, dietary preference tracking, automatic grocery list generation, and delivery service integration." },
  { Icon: FolderLock,      title: "Document Vault",           desc: "Secure storage and intelligent retrieval of family documents, from school forms to medical records, with OCR and natural language search." },
];

const famantHighlights = [
  "Works with Google, Outlook, and Apple calendars, so no migration is needed",
  "Voice commands in Swedish and English",
  "Automatically generates grocery lists from your meal plan",
  "Finds any family document instantly using natural language search",
  "Family plans support 2–6 members across all devices",
  "GDPR compliant and hosted entirely on EU infrastructure",
];

const capabilities = [
  { icon: Calendar,     title: "Web Applications",      desc: "Full-stack web products: customer portals, SaaS platforms, B2B tools, e-commerce systems, and internal management dashboards." },
  { icon: Zap,          title: "Mobile Applications",   desc: "Native iOS and Android apps, plus cross-platform React Native and Flutter builds, from MVP to full-featured mobile products." },
  { icon: ShoppingCart, title: "Enterprise Platforms",  desc: "Internal business tools, ERP integrations, workflow automation systems, and complex B2B platforms engineered to exact specifications." },
  { icon: FileText,     title: "API & Integration",     desc: "Backend services, REST APIs, data pipelines, and integration layers that connect your existing business systems." },
  { icon: Mic,          title: "Consumer Products",     desc: "B2C applications, marketplaces, content platforms, and consumer-facing tools designed for scale from day one." },
  { icon: Shield,       title: "Regulated Products",    desc: "Products for regulated industries like finance, health, and logistics, built with EU compliance, audit trails, and sector-specific requirements by design." },
];

const roadmap = [
  { version: "Week 1–2",  quarter: "Discovery",   milestone: "Requirements workshop, scoping, technical architecture, commercial proposal",       status: "upcoming" },
  { version: "Week 2–4",  quarter: "Design",      milestone: "UX wireframes, UI design, interactive prototype, design review and sign-off",       status: "upcoming" },
  { version: "Week 4–12", quarter: "Build",       milestone: "Agile engineering sprints, weekly demos, QA and acceptance testing",                status: "future"   },
  { version: "Week 12+",  quarter: "Launch",      milestone: "Production deployment, IP handover, documentation, support SLA begins",             status: "future"   },
];

const pricingTiers = [
  { name: "MVP Build",      price: "Fixed",   period: "project pricing",    items: ["Requirements workshop", "UX/UI design", "Core feature development", "QA and testing", "Deployment to production", "30-day post-launch support"],           featured: false },
  { name: "Full Product",   price: "Scoped",  period: "milestone payments", items: ["Everything in MVP Build", "Full feature set", "Multiple integrations", "Performance optimisation", "Documentation", "90-day support package"],            featured: true  },
  { name: "Ongoing Build",  price: "Retainer",period: "/month",             items: ["Dedicated engineering capacity", "Monthly sprints", "Continuous delivery", "Priority support SLA", "Quarterly roadmap reviews"],                         featured: false },
];

const saasEvaluation = [
  { criterion: "Clear Business Requirement",   detail: "A defined need, whether it's a product to build, a system to replace, or a market gap to fill" },
  { criterion: "Validated Market Demand",      detail: "The product addresses a real business need with identifiable users or customers" },
  { criterion: "Reasonable Timeline",          detail: "Projects with realistic scope and timeline expectations for the desired outcome" },
  { criterion: "EU Market Focus",              detail: "Products intended for European markets, where our regulatory and market expertise is strongest" },
  { criterion: "Long-Term Vision",             detail: "Clients who want to build and grow a product over time, not just ship a one-off deliverable" },
  { criterion: "Non-Conflicting Product",      detail: "The product does not directly conflict with anything Antutive is already building for other clients" },
];

export function Products() {
  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(56vh, 640px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-20" />
        <Noise />
        <AuroraOrb size={420} color="rgba(124,146,199,0.18)" style={{ top: -140, right: -120 }} />
        <AuroraOrb size={320} color="rgba(70,88,159,0.14)" delay={5} style={{ bottom: -100, left: -90 }} />
        <RingDecor spin size={360} style={{ top: -110, right: "16%", opacity: 0.7 }} />
        <DotMatrix style={{ bottom: 30, left: 20 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A2}50`, background: `${A2}14`, animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Antutive Products</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both", color: "#0f172a" }}>
                Products built<br /><span className="grad-text">for businesses</span>
              </h1>

              <p className="text-base max-w-lg leading-relaxed mb-8"
                style={{ color: "#64748b", animation: "fadeUp 0.8s ease 0.25s both" }}>
                Most of what we build is for clients. One product we built for ourselves.
                Every single one ships under the same rule: whoever it's for owns it
                completely.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Web Products", "Mobile Apps", "Enterprise Software", "B2B Platforms", "EU Compliant"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ border: `1px solid rgba(124,146,199,0.35)`, background: "rgba(124,146,199,0.10)", color: A }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary">Discuss Your Product</Link>
                <Link to="#saas" className="hero-btn-secondary">Product Partnership</Link>
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

      {/* ── FAMANT BRAND SHOWCASE ── */}
      <section className="famant-section py-24 relative overflow-hidden">
        <Noise />
        <div className="famant-orbit" style={{ width: 420, height: 420, top: -140, right: -120, background: "radial-gradient(circle, rgba(107,98,241,0.20), transparent 70%)" }} />
        <div className="famant-orbit" style={{ width: 340, height: 340, bottom: -100, left: -100, background: "radial-gradient(circle, rgba(46,196,182,0.16), transparent 70%)", animationDelay: "4s" }} />
        <DotMatrix style={{ bottom: 40, right: 30, backgroundImage: "radial-gradient(rgba(107,98,241,0.4) 1.5px, transparent 1.5px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Dark indigo hero panel — entering the FAMANT world */}
          <Reveal variant="scale">
            <div className="famant-hero-panel p-8 sm:p-12 lg:p-14 mb-14">
              <Noise />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                    style={{ border: "1px solid rgba(107,98,241,0.5)", background: "rgba(107,98,241,0.18)" }}>
                    <Sparkles className="w-3.5 h-3.5" style={{ color: "#2EC4B6" }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#C9C5FF" }}>Built In-House at Antutive</span>
                  </div>
                  <h2 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight text-white" style={{ fontFamily: "Sora, sans-serif" }}>FAMANT</h2>
                  <p className="text-xl font-semibold mb-5" style={{ color: "#A9A3FF" }}>The Voice-First Home Operating System</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(226,229,255,0.78)" }}>
                    FAMANT started as our own frustration. Calendars in three places, school
                    forms lost in a drawer, dinner a nightly negotiation. So we built the
                    product we wanted in our own homes: one system for the whole household,
                    run by voice.
                  </p>
                  <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(226,229,255,0.78)" }}>
                    Calendar, tasks, meals, and documents, all managed through natural
                    conversation. No switching between apps. Just talk.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Calendar", "Task Management", "Meal Planning", "Document Vault"].map((tag) => (
                      <span key={tag} className="famant-chip">{tag}</span>
                    ))}
                  </div>
                  <a href="https://www.famant.com/en" target="_blank" rel="noopener noreferrer" className="famant-cta-brand">
                    Join the waitlist at famant.com <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex justify-center lg:justify-end relative">
                  <div className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(107,98,241,0.35), transparent 65%)", filter: "blur(40px)" }} />
                  <video src={famantVideo} autoPlay loop muted playsInline style={{ width: "100%", maxWidth: 320, height: 320, objectFit: "contain", position: "relative", zIndex: 1 }} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {famantFeatures.map(({ Icon, title, desc }, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="famant-card">
                  <div className="flex items-start gap-4">
                    <div className="famant-icon">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-2" style={{ color: "#1A1C59" }}>{title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#5A5E8C" }}>{desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Highlights + Pricing row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">

            {/* Platform Highlights */}
            <Reveal variant="left" delay={100}>
              <div className="famant-card" style={{ padding: 28, borderRadius: 24 }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#6B62F1" }}>Platform Highlights</p>
                <p className="text-sm font-bold mb-5" style={{ color: "#1A1C59" }}>Everything your family needs, in one place</p>
                <div className="flex flex-col gap-3">
                  {famantHighlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#2EC4B6" }} />
                      <p className="text-xs leading-relaxed" style={{ color: "#454A78" }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Pricing */}
            <Reveal variant="right" delay={100}>
              <div className="famant-card" style={{ padding: 28, borderRadius: 24 }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#6B62F1" }}>Pricing</p>
                <div className="flex flex-col gap-3 mb-5">
                  <div className="p-4 rounded-2xl" style={{ background: "#F2F4FF", border: "1px solid rgba(107,98,241,0.16)" }}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-bold" style={{ color: "#1A1C59" }}>Free</p>
                      <span className="text-xs font-bold" style={{ color: "#6B62F1" }}>0 SEK / month</span>
                    </div>
                    <p className="text-xs" style={{ color: "#8286B0" }}>Basic calendar and task management, free forever.</p>
                  </div>
                  <div className="p-4 rounded-2xl" style={{ background: "rgba(107,98,241,0.08)", border: "1px solid rgba(107,98,241,0.35)" }}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-bold" style={{ color: "#1A1C59" }}>Premium</p>
                      <span className="text-xs font-bold" style={{ color: "#6B4CFF" }}>79–129 SEK / month</span>
                    </div>
                    <p className="text-xs" style={{ color: "#5A5E8C" }}>Full AI capabilities, Document Vault, Meal Planning, multi-device. Family plans for 2–6 members.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {["Voice-first conversational interface", "Swedish & English language support", "GDPR compliant · EU hosted", "Family plans up to 6 members"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#2EC4B6" }} />
                      <span className="text-xs" style={{ color: "#5A5E8C" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Waitlist CTA */}
          <Reveal variant="up">
            <div className="famant-hero-panel text-center p-10">
              <Noise />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "Sora, sans-serif" }}>FAMANT launches Q3 2026</h3>
                <p className="text-sm mb-7 max-w-lg mx-auto" style={{ color: "rgba(226,229,255,0.75)" }}>The waitlist is open now. Early members get first access to the MVP and a say in what we build next.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://www.famant.com/en" target="_blank" rel="noopener noreferrer" className="famant-cta-brand">
                    Join the FAMANT waitlist <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <Link to="/contact" className="famant-cta-ghost" style={{ borderColor: "rgba(201,197,255,0.45)", color: "#C9C5FF", background: "rgba(107,98,241,0.12)" }}>
                    Ask us about FAMANT
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#eef2fa 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(124,146,199,0.10),transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light">What We Build</span>
              <h2 className="section-h2 mt-3 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>Product Categories</h2>
              <p className="text-sm font-semibold mb-4" style={{ color: A }}>End-to-End Software Product Engineering</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                Antutive builds software products across many categories: web applications,
                mobile apps, enterprise platforms, internal tools, and API-driven services.
                If your business needs a product built, we build it.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                Every product begins with a Discovery session to scope requirements, validate
                the concept, and agree the technical approach. Then we engineer, test, and
                deliver, handing over full ownership to you.
              </p>
              <div className="p-4 rounded-2xl border"
                style={{ background: `rgba(124,146,199,0.08)`, borderColor: `${A2}40` }}>
                <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: A }}>EU Product Guarantee</p>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>All products built by Antutive are EU-hosted, GDPR compliant by design, and delivered with full intellectual property ownership transfer to the client.</p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="grid grid-cols-1 gap-3">
                {capabilities.map(({ icon: Icon, title, desc }, i) => (
                  <Reveal key={i} variant="right" delay={i * 60}>
                    <div className="p-4 rounded-2xl border flex gap-3 items-start transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "#ffffff", borderColor: `${A2}30`, boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
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
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, #eef2fa 0%, #f8fafc 55%, #eef2fa 100%)" }}>
        <AuroraOrb size={380} color="rgba(70,88,159,0.12)" style={{ top: -80, right: -60 }} />
        <AuroraOrb size={300} color="rgba(124,146,199,0.14)" delay={6} style={{ bottom: -70, left: -50 }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />
        <RingDecor size={280} style={{ bottom: -90, right: "8%", opacity: 0.6 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light">Pricing</span>
              <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>Product Engagement Models</h2>
              <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>Choose the engagement model that fits your product requirement and timeline. All builds include GDPR-compliant EU infrastructure.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-7 rounded-3xl border h-full flex flex-col relative transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: tier.featured ? A : `${A2}35`,
                    background: tier.featured ? `linear-gradient(150deg,#1B2440 0%,#2E3B72 55%,#46589F 100%)` : "#ffffff",
                    boxShadow: tier.featured ? `0 24px 60px ${A}35` : "0 4px 20px rgba(15,23,42,0.06)",
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
                    <span className="text-xs" style={{ color: tier.featured ? "rgba(214,224,245,0.85)" : "#94a3b8" }}>{tier.period}</span>
                  </div>
                  <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                    {tier.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: tier.featured ? "#A9B8DC" : A }} />
                        <span className="text-xs" style={{ color: tier.featured ? "rgba(235,240,250,0.92)" : "#475569" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="block text-center py-2.5 rounded-2xl text-xs font-bold transition-all hover:scale-105"
                    style={{
                      background: tier.featured ? "rgba(255,255,255,0.15)" : `${A2}1c`,
                      color: tier.featured ? "white" : A,
                      border: `1px solid ${tier.featured ? "rgba(255,255,255,0.25)" : `${A2}45`}`,
                    }}>
                    Get Started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY ROADMAP ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#eef2fa 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)`, filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Delivery Roadmap</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>Typical Product Delivery</h2>
            <p className="text-sm mt-3 max-w-lg mx-auto" style={{ color: "#64748b" }}>From requirements to live product. The timeline varies by scope, but every project follows the Antutive Delivery Method.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {roadmap.map((item, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", border: `1px solid rgba(124,146,199,0.22)`, boxShadow: "0 4px 16px rgba(15,23,42,0.05)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: `${A2}20`, color: A }}>{item.version}</span>
                    <span className="text-xs font-semibold" style={{ color: A }}>{item.quarter}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{item.milestone}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT PARTNERSHIP ── */}
      <section id="saas" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(124,146,199,0.10),transparent 70%)", filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light">Product Partnership</span>
              <h2 className="section-h2 mt-3 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>Build Together</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                Have a product idea but need an engineering partner to build it? That's what
                Antutive is for. We take your requirements, design the product, and deliver
                it to production with full IP ownership transferring to you.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                We work with businesses across Europe on product development partnerships:
                fixed-scope builds, ongoing development retainers, and co-development
                arrangements. Every engagement is structured for clarity, transparency,
                and client ownership.
              </p>
              <div className="p-4 rounded-2xl border" style={{ background: "#ffffff", borderColor: `${A2}35`, boxShadow: "0 4px 16px rgba(15,23,42,0.05)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4" style={{ color: A }} />
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: A }}>Commercial Model</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>Fixed-scope project pricing or monthly retainer. Milestone-based payments. Full IP transfer on delivery. GDPR-compliant, EU-based development.</p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="p-6 rounded-3xl border" style={{ borderColor: `${A2}35`, background: "#ffffff", boxShadow: "0 8px 32px rgba(15,23,42,0.06)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <Globe className="w-4 h-4" style={{ color: A }} />
                  <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: A }}>What Makes a Good Partnership</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {saasEvaluation.map((item, i) => (
                    <Reveal key={i} variant="right" delay={i * 60}>
                      <div className="p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: "#f8fafc", borderColor: `${A2}22` }}>
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
        style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,rgba(70,88,159,0.12),transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(124,146,199,0.10),transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-20" />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A2}50`, background: `${A2}14` }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Start the Conversation</span>
              </div>
              <h2 className="section-h2 mb-4" style={{ fontWeight: 700, color: "#0f172a" }}>Ready to Build Your Product?</h2>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: "#64748b" }}>Tell us your requirements. We'll scope the project, propose a timeline, and deliver the product you need, on EU infrastructure and with full IP ownership.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary">
                  Discuss Your Product <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/growth-marketing" className="cta-btn-secondary">
                  View Our Process
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
