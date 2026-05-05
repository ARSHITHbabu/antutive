import { Link } from "react-router";
import {
  ArrowRight, Shield, Zap, Globe, Lock, Database, Server,
  Cpu, BarChart3, GitMerge, CheckCircle2, Sparkles,
  TrendingUp, Layers, Code2, GitBranch, Users, Search,
} from "lucide-react";
import { Reveal } from "../lib/scroll";
import { DeliveryMethod } from "../components/DeliveryMethod";

const A  = "#F5C84C";
const A2 = "#F36D4F";

const heroMetrics = [
  { value: "4",   label: "Practice Areas"  },
  { value: "3×",  label: "Faster Delivery" },
  { value: "24h", label: "Critical SLA"    },
  { value: "EU",  label: "Compliant"       },
];

/* ── practice area grid (hero right side) ── */
function PracticeAreaGrid() {
  const areas = [
    { Icon: Cpu,        label: "Product Strategy", sub: "Discovery · Design · Scope", color: "#F5C84C" },
    { Icon: BarChart3,  label: "Engineering",      sub: "Build · Test · Deploy",      color: "#C2410C" },
    { Icon: TrendingUp, label: "Product Launch",    sub: "Go-to-Market · Growth",      color: "#6F3CC3" },
    { Icon: Lock,       label: "Enterprise Build",  sub: "Custom · Scoped · EU",       color: "#6F3CC3" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {areas.map((area, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(111,60,195,0.14)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            animation: `fadeUp 0.7s ease ${i * 120}ms both`,
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            style={{ background: `linear-gradient(135deg,${area.color}80,${area.color}30)`, border: `1px solid ${area.color}50` }}
          >
            <area.Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-bold text-[#0f172a] mb-1">{area.label}</p>
          <p className="text-xs text-[#64748b]">{area.sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ── data ── */
const genAIItems = [
  { Icon: Cpu,      title: "Product Discovery",         desc: "Structured requirements workshops that map your business goals, user needs, technical constraints, and market context into a clear product specification." },
  { Icon: Database, title: "UX & UI Design",            desc: "User experience design and interface development — wireframes, prototypes, design systems, and visual design aligned to your brand and user expectations." },
  { Icon: Layers,   title: "Technical Architecture",    desc: "System design and technology selection appropriate to your product's scale, performance requirements, and future growth. Stack decisions driven by your context, not trend." },
  { Icon: Code2,    title: "MVP Planning",              desc: "Scope definition for minimum viable products — identifying the core features needed to validate the concept before building the full product." },
];

const genAICases = [
  { industry: "Retail & E-commerce",   problem: "No customer portal or order management system",                      solution: "Custom web platform with inventory, orders, and customer accounts" },
  { industry: "Professional Services", problem: "Manual client onboarding and document management",                   solution: "Client portal with automated onboarding, document vault, and reporting" },
  { industry: "Logistics",             problem: "Tracking and fleet management done in spreadsheets",                  solution: "Operations platform with real-time tracking, route planning, and driver app" },
  { industry: "Healthcare / MedTech",  problem: "Patient communication and appointment management is fragmented",      solution: "GDPR-compliant patient platform with booking, messaging, and records" },
];

const analyticsSvcs = [
  { Icon: Database,   title: "Frontend Development",   desc: "Web application development using React, Next.js, and Vue.js. Mobile development with React Native and Flutter. Responsive, accessible, performant interfaces across all devices." },
  { Icon: BarChart3,  title: "Backend Engineering",    desc: "Server-side development in Python, Node.js, Java, and .NET. RESTful APIs, GraphQL services, microservices, and monolithic architectures — fit to your product's scale." },
  { Icon: TrendingUp, title: "Cloud & DevOps",         desc: "Deployment on EU cloud infrastructure (AWS, Azure, GCP). CI/CD pipelines, containerisation with Docker and Kubernetes, infrastructure-as-code." },
  { Icon: Shield,     title: "Quality Assurance",      desc: "Automated testing, manual QA, performance testing, and security reviews. Every product delivered with test coverage and documented handover." },
];

const analyticsLevels = [
  { level: "Discovery", state: "Requirements gathered, scope defined, commercial agreement",      eng: "Discovery session + proposal",    dur: "1–2 wks" },
  { level: "Design",    state: "UX designed, architecture planned, development environment ready", eng: "UX/UI + architecture",            dur: "1–3 wks" },
  { level: "Build",     state: "Product engineered, tested, staged for client review",            eng: "Agile sprints + QA",              dur: "4–10 wks" },
  { level: "Launch",    state: "Product live, clients onboarded, support SLA active",             eng: "Deploy + handover",               dur: "1–2 wks" },
];

const growthHighlights = [
  { Icon: Search,      label: "Launch Strategy",         desc: "Go-to-market planning for new products — target audience, launch channels, messaging, and early adopter acquisition." },
  { Icon: Zap,         label: "Performance Optimisation",desc: "Post-launch performance analysis, load testing, caching strategies, and infrastructure scaling for growing products." },
  { Icon: Users,       label: "Analytics Integration",   desc: "User analytics, conversion tracking, and product metrics setup — giving product owners visibility into how users interact with their product." },
  { Icon: GitBranch,   label: "Iterative Development",   desc: "Post-launch feature development based on user feedback — monthly sprints, continuous delivery, and product evolution." },
];

const platformFeatures = [
  { Icon: Lock,    label: "100% IP Ownership",   desc: "All code and product assets belong entirely to the client on delivery." },
  { Icon: Layers,  label: "Custom Architecture", desc: "Purpose-built for your specific needs — not adapted from a template." },
  { Icon: Server,  label: "EU Data Residency",   desc: "All products deployed on EU infrastructure, GDPR compliant by design." },
  { Icon: Code2,   label: "System Integration",  desc: "Native connectors to your ERP, CRM, and operational systems." },
];

const integrations = [
  { start: "Discovery Session",   exp: "Technical Architecture → UX Design → Engineering",   logic: "Good products start with clear requirements; clear requirements enable better design and faster engineering." },
  { start: "MVP Launch",          exp: "User Analytics → Feature Development → Scale",        logic: "A live product generates real feedback; real feedback drives better product decisions." },
  { start: "Enterprise Build",    exp: "Integration Layer → Custom API → Operational Tools",  logic: "Enterprise products expand — each system integration opens new automation and efficiency opportunities." },
];

export function Services() {
  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#f8fafc 0%,#fffbeb 50%,#fff7ed 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(245,200,76,0.12),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(243,109,79,0.08),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.10),transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-[#0f172a]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1CB7B4]/25 bg-[#1CB7B4]/06 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-[#1CB7B4]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#1CB7B4]">ANTUTIVE · AI Solutions</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                Product Engineering<br />Services
              </h1>

              <p className="text-base text-[#334155] max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Four interconnected service areas — each built around your product requirement, not a technology demo.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Product Strategy", "Web Engineering", "Mobile Development", "Enterprise Build"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border text-xs font-medium"
                    style={{ borderColor: "rgba(245,200,76,0.35)", background: "rgba(245,200,76,0.08)", color: "#475569" }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary">Book a Discovery Call</Link>
                <Link to="#genai" className="hero-btn-secondary">Explore Services</Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroMetrics.map((m, i) => (
                  <div key={m.label} className="metric-chip" style={{ animation: `fadeUp 0.6s ease ${0.55 + i * 0.1}s both` }}>
                    <span className="block text-xl font-bold">{m.value}</span>
                    <span className="block text-xs text-[#64748b] mt-0.5 leading-tight">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <PracticeAreaGrid />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE 01: GENERATIVE AI ── */}
      <section id="genai" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#f1f5f9 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.08),transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(111,60,195,0.07),transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow"
                style={{ borderColor: `${A}40`, background: `${A}10`, color: "#0369a1" }}>
                Product Strategy
              </span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-5" style={{ fontWeight: 700 }}>Product Strategy & Design</h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                Custom product development begins with deep business problem understanding. ANTUTIVE does not
                sell pre-built templates — we engineer products that solve specific business needs. Every
                product is scoped and designed around your exact requirements.
              </p>
              <div className="flex flex-col gap-3">
                {genAIItems.map((item, i) => (
                  <Reveal key={i} variant="left" delay={i * 80}>
                    <div className="p-4 rounded-2xl border flex gap-3 items-start transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1CB7B4]/30"
                      style={{ background: "#ffffff", borderColor: `${A}22`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(135deg,${A}55,${A}22)`, border: `1px solid ${A}45` }}>
                        <item.Icon className="w-4 h-4 text-[#1CB7B4]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0f172a] mb-1.5">{item.title}</h4>
                        <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="lg:sticky lg:top-28 p-6 rounded-3xl border"
                style={{ background: "rgba(28,183,180,0.04)", borderColor: `${A}22`, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-[#0369a1]">
                  Example Products We Build
                </h3>
                {genAICases.map((uc, i) => (
                  <div key={i} className="p-4 rounded-2xl border mb-3 last:mb-0 transition-all duration-300 hover:border-[#1CB7B4]/30"
                    style={{ background: "#ffffff", borderColor: `${A}18`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    <p className="text-xs font-bold mb-1 text-[#1CB7B4]">{uc.industry}</p>
                    <p className="text-xs text-[#64748b] mb-2">
                      <span className="font-semibold text-[#475569]">Need: </span>{uc.problem}
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#1CB7B4]" />
                      <p className="text-xs text-[#64748b]">{uc.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRACTICE 02: DATA ENGINEERING ── */}
      <section id="data" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#fffbeb 0%,#fff7ed 60%,#fef3c7 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}18,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}12,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: "#92400e", borderColor: `${A}33`, background: `${A}10` }}>
              Engineering
            </span>
            <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>Product Engineering</h2>
            <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">
              The foundation every product requires. Full-stack engineering from frontend to backend,
              deployed to production on EU infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {analyticsSvcs.map((s, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", backdropFilter: "blur(10px)", borderColor: `${A}28`, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 6px 18px ${A}35` }}>
                    <s.Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0f172a] mb-2">{s.title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Maturity Path — visual step cards */}
          <Reveal variant="scale">
            <div className="rounded-3xl p-8 border" style={{ background: "#ffffff", backdropFilter: "blur(10px)", borderColor: `${A}22`, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <h3 className="text-sm font-bold text-[#0f172a] mb-8 text-center uppercase tracking-wide">
                Product Delivery Stages — Where Are You?
              </h3>
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* horizontal connector */}
                <div className="hidden md:block absolute pointer-events-none"
                  style={{
                    top: "2.5rem", left: "calc(12.5% + 1rem)", right: "calc(12.5% + 1rem)",
                    height: 2,
                    background: `linear-gradient(90deg,${A}20,${A}60,${A}20)`,
                  }} />
                {analyticsLevels.map((l, i) => (
                  <div key={i} className="relative p-5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1"
                    style={{ borderColor: `${A}28`, background: i === 3 ? "rgba(28,183,180,0.06)" : "#f8fafc", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xs font-bold relative z-10"
                      style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 4px 12px ${A}40` }}>
                      {i + 1}
                    </div>
                    <span className="inline-block text-xs font-bold text-white mb-3 px-2.5 py-0.5 rounded-full"
                      style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                      {l.level}
                    </span>
                    <p className="text-xs text-[#64748b] leading-relaxed mb-3">{l.state}</p>
                    <div className="border-t pt-3" style={{ borderColor: `${A}22` }}>
                      <p className="text-xs font-semibold mb-1 text-[#0369a1]">{l.eng}</p>
                      <p className="text-xs text-[#94a3b8] font-medium">{l.dur}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRACTICE 03: AI GROWTH & MARKETING ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f0fdfa 0%,#f8fafc 55%,#faf5ff 100%)" }}>
        <div className="absolute inset-0 hero-mesh-overlay opacity-25" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.08),transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(111,60,195,0.07),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left">
              <span className="section-eyebrow-light">Product Launch</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-5" style={{ fontWeight: 700 }}>Product Launch & Growth</h2>
              <p className="text-sm text-[#475569] leading-relaxed mb-5">
                Delivering the product to production is the beginning. ANTUTIVE supports product launch,
                market entry, and early growth — from deployment to user acquisition strategies.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-8">
                From SEO-ready architecture and performance optimisation to analytics setup and iterative
                feature development, we support products beyond the initial build phase.
              </p>
              <Link
                to="/growth-marketing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg,#1CB7B4,#6F3CC3)" }}
              >
                Explore Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {growthHighlights.map((item, i) => (
                <Reveal key={i} variant={i % 2 === 0 ? "up" : "scale"} delay={i * 90}>
                  <div className="p-5 rounded-2xl border backdrop-blur-sm h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "#ffffff", border: "1px solid rgba(28,183,180,0.18)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(28,183,180,0.10)", border: "1px solid rgba(28,183,180,0.22)" }}>
                      <item.Icon className="w-4 h-4 text-[#1CB7B4]" />
                    </div>
                    <p className="text-sm font-bold text-[#0f172a] mb-1.5">{item.label}</p>
                    <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE 04: CUSTOM AI PLATFORM ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#faf5ff 0%,#f5f3ff 55%,#eff6ff 100%)" }}>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}14,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(111,60,195,0.08),transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platformFeatures.map((item, i) => (
                <Reveal key={i} variant={i % 2 === 0 ? "left" : "up"} delay={i * 80}>
                  <div className="p-5 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "#ffffff", backdropFilter: "blur(10px)", borderColor: `${A}22`, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 4px 14px ${A}30` }}>
                      <item.Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm font-bold text-[#0f172a] mb-1.5">{item.label}</p>
                    <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="right" delay={100}>
              <span className="section-eyebrow" style={{ color: "#92400e", borderColor: `${A}33`, background: `${A}10` }}>
                Enterprise Products
              </span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-5" style={{ fontWeight: 700 }}>Enterprise Products</h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-5">
                Complex enterprise software demands more than standard development. ANTUTIVE builds custom
                enterprise products — internal platforms, B2B tools, and mission-critical systems —
                engineered to exact specifications.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-8">
                Enterprise builds include full documentation, role-based access control, audit logging,
                performance SLAs, and dedicated deployment infrastructure — everything an enterprise product requires.
              </p>
              <Link
                to="/custom-platform"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 8px 24px ${A}35` }}
              >
                Explore Custom Build <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICE INTEGRATION MAP ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f8fafc 0%,#ffffff 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(111,60,195,0.07),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.07),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Solution Ecosystem</span>
            <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>How Our Services Work Together</h2>
            <p className="text-sm text-[#64748b] mt-3 max-w-lg mx-auto">
              Product development is not linear — each phase naturally leads into the next, building on what came before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {integrations.map((item, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: "#ffffff", border: "1px solid rgba(111,60,195,0.14)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <GitMerge className="w-4 h-4 text-[#94a3b8]" />
                    <span className="text-xs font-bold text-[#94a3b8] uppercase tracking-wide">Starting point</span>
                  </div>
                  <p className="text-base font-bold text-[#0f172a] mb-3">{item.start}</p>
                  <div className="flex items-center gap-2 mb-3 p-2.5 rounded-xl"
                    style={{ background: "rgba(28,183,180,0.08)", border: "1px solid rgba(28,183,180,0.20)" }}>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1CB7B4] flex-shrink-0" />
                    <p className="text-xs font-semibold text-[#1CB7B4]">{item.exp}</p>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed">{item.logic}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DeliveryMethod accentColor={A} />

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#fffbeb 0%,#f5f3ff 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}14,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}10,transparent 70%)`, filter: "blur(50px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A}30`, background: `${A}10` }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: "#92400e" }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#92400e" }}>Start the Conversation</span>
              </div>
              <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
                Start with a Free Discovery
              </h2>
              <p className="text-sm text-[#64748b] mb-8 leading-relaxed">
                The Discovery session is the first step of the ANTUTIVE Delivery Method —
                offered free for qualified projects. We scope before we build.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary"
                  style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="cta-btn-secondary"
                  style={{ borderColor: `${A}40`, color: "#92400e" }}>
                  Explore Solutions
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
