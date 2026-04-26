import { Link } from "react-router";
import {
  ArrowRight, Shield, Zap, Globe, Lock, Database, Server,
  Cpu, BarChart3, GitMerge, CheckCircle2, Sparkles,
  TrendingUp, Layers, Code2, GitBranch, Users, Search,
} from "lucide-react";
import { Reveal } from "../lib/scroll";
import { DeliveryMethod } from "../components/DeliveryMethod";

const A  = "#0891b2";
const A2 = "#0369a1";

const heroMetrics = [
  { value: "4",   label: "Practice Areas"  },
  { value: "3×",  label: "Faster Delivery" },
  { value: "24h", label: "Critical SLA"    },
  { value: "EU",  label: "Compliant"       },
];

/* ── practice area grid (hero right side) ── */
function PracticeAreaGrid() {
  const areas = [
    { Icon: Cpu,        label: "Generative AI",    sub: "Agents · RAG · Knowledge",  color: "#0891b2" },
    { Icon: BarChart3,  label: "Data Engineering", sub: "ETL · Power BI · Predict",  color: "#0369a1" },
    { Icon: TrendingUp, label: "AI Growth",         sub: "GEO · Video · Automation",  color: "#6366f1" },
    { Icon: Lock,       label: "Custom Platform",   sub: "Sovereign · Private · EU",  color: "#8b5cf6" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {areas.map((area, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            animation: `fadeUp 0.7s ease ${i * 120}ms both`,
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            style={{ background: `linear-gradient(135deg,${area.color}80,${area.color}30)`, border: `1px solid ${area.color}50` }}
          >
            <area.Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-bold text-white mb-1">{area.label}</p>
          <p className="text-xs text-white/50">{area.sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ── data ── */
const genAIItems = [
  { Icon: Cpu,      title: "Agentic AI Systems",           desc: "Autonomous agents that execute multi-step business processes — invoice matching, support ticket resolution, document classification, approval workflows — without human intervention." },
  { Icon: Database, title: "Sovereign RAG",                desc: "Private knowledge systems deployed on your infrastructure or EU-hosted cloud. Corporate documents, policies, manuals, and historical data become queryable through natural language, including Swedish." },
  { Icon: Layers,   title: "Knowledge Graphs & Second Brain", desc: "Structured representation of organisational knowledge connecting entities, relationships, and context. Built using Neo4j or Apache Jena depending on scale." },
  { Icon: Code2,    title: "Conversational AI Interfaces", desc: "Voice-first and chat-based interfaces for internal tools and customer-facing applications, powered by open-weight models (LLaMA, Mistral) or commercial APIs (Claude, GPT) based on compliance needs." },
];

const genAICases = [
  { industry: "Logistics / 3PL",      problem: "Manual shipment tracking and exception handling",  solution: "Agentic system that monitors, detects delays, and autonomously notifies stakeholders" },
  { industry: "Professional Services", problem: "Knowledge locked in individual consultants",       solution: "Sovereign RAG making firm-wide expertise searchable" },
  { industry: "Manufacturing",         problem: "Quality documentation scattered across systems",    solution: "Knowledge graph connecting specs, defect reports, and supplier data" },
  { industry: "E-commerce",           problem: "Customer support cannot scale with orders",         solution: "Conversational AI with full order system integration for autonomous resolution" },
];

const analyticsSvcs = [
  { Icon: Database,   title: "ETL Pipeline Design",              desc: "Extracting data from ERP systems (Fortnox, Visma, SAP Business One), CRM platforms (HubSpot, Salesforce, Lime), banking feeds, and operational databases into unified, analysis-ready data warehouses." },
  { Icon: BarChart3,  title: "Power BI Dashboard Engineering",   desc: "Custom-engineered analytical environments with automated refresh, role-based access, and embedded business logic. Designed for board presentations, operational management, and regulatory reporting." },
  { Icon: TrendingUp, title: "Predictive Analytics & Modelling", desc: "Financial forecasting compliant with K3/K4 Swedish accounting standards, demand prediction, churn analysis, and resource planning models." },
  { Icon: Shield,     title: "Data Quality & Governance",        desc: "Automated data validation frameworks, lineage tracking for audit compliance, and master data management across fragmented source systems." },
];

const analyticsLevels = [
  { level: "Fragmented", state: "Data in Excel, manual reporting, no single source of truth",  eng: "ETL pipeline + unified warehouse",  dur: "4–6 wks" },
  { level: "Structured",  state: "Central database exists but reporting is static or manual",   eng: "Power BI with automated refresh",   dur: "3–4 wks" },
  { level: "Analytical",  state: "Dashboards exist but no predictive capability",               eng: "Predictive models & analytics",    dur: "6–8 wks" },
  { level: "Intelligent", state: "Analytics mature, ready for AI-driven automation",            eng: "Agentic AI and knowledge systems",  dur: "8–12 wks" },
];

const growthHighlights = [
  { Icon: Search,      label: "GEO Strategy",       desc: "Brand visibility in AI-generated search results — ChatGPT, Perplexity, Gemini — through structured content optimisation." },
  { Icon: Zap,         label: "AI Video Ads",        desc: "Script-to-screen AI video production for social campaigns at 80% cost reduction vs traditional video production." },
  { Icon: Users,       label: "Lead Scoring",        desc: "ML models scoring and prioritising leads from CRM data, predicting conversion probability and optimal outreach timing." },
  { Icon: GitBranch,   label: "Outreach Automation", desc: "Personalised multi-channel sequences — email, LinkedIn, ad retargeting — triggered by AI-detected behavioural signals." },
];

const platformFeatures = [
  { Icon: Lock,    label: "100% Private",        desc: "Your data never leaves your environment or EU-hosted infrastructure." },
  { Icon: Layers,  label: "Model-Agnostic",      desc: "Switch between Claude, GPT, LLaMA, Mistral without re-engineering your stack." },
  { Icon: Server,  label: "EU Data Residency",   desc: "Full sovereignty compliance with GDPR and EU AI Act requirements." },
  { Icon: Code2,   label: "Custom Integrations", desc: "Native connectors to your ERP, CRM, and operational systems." },
];

const integrations = [
  { start: "Power BI Dashboards", exp: "ETL Pipelines → Sovereign RAG",              logic: "Clean data enables AI; AI makes dashboards intelligent." },
  { start: "GEO Audit",           exp: "AI Content Engine → AI Video → Web Engine",   logic: "Visibility requires content; content requires automation." },
  { start: "Custom AI Platform",  exp: "Sovereign RAG → Agentic AI",                  logic: "Private AI workspace becomes the foundation for automation." },
  { start: "IT Consulting",       exp: "Managed Dev Team → Project Delivery",          logic: "Strategy engagements convert to execution contracts." },
];

export function Services() {
  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#0c4a6e 0%,#0369a1 50%,#0891b2 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.08),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(8,145,178,0.18),transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                <span className="text-xs font-bold tracking-widest uppercase">ANTUTIVE · Engineering Services</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                AI, Data &<br />Growth Solutions
              </h1>

              <p className="text-base text-white/80 max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Four interconnected practice areas delivered as problem-solving engagements. Every solution begins with your operational context — not a technology demo.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Generative AI", "Data Engineering", "AI Growth & Marketing", "Custom AI Platforms"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border border-white/20 bg-white/08 text-white/75 text-xs font-medium backdrop-blur-sm">{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary" style={{ color: A2 }}>Book a Discovery Call</Link>
                <Link to="#genai" className="hero-btn-secondary">Explore Services</Link>
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
              <PracticeAreaGrid />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE 01: GENERATIVE AI ── */}
      <section id="genai" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0a1628 0%,#0c2040 50%,#091525 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(8,145,178,0.14),transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(3,105,161,0.1),transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light"
                style={{ borderColor: `${A}40`, background: `${A}18`, color: "#67e8f9" }}>
                Generative AI
              </span>
              <h2 className="section-h2 text-white mt-3 mb-5" style={{ fontWeight: 700 }}>Generative AI Solutions</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Custom AI product development that begins with deep business problem understanding. ANTUTIVE does not sell
                "AI tools" — it engineers intelligent systems that solve specific operational bottlenecks. Every solution
                is built with your data sovereignty as a non-negotiable requirement.
              </p>
              <div className="flex flex-col gap-3">
                {genAIItems.map((item, i) => (
                  <Reveal key={i} variant="left" delay={i * 80}>
                    <div className="p-4 rounded-2xl border flex gap-3 items-start transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30"
                      style={{ background: "rgba(255,255,255,0.04)", borderColor: `${A}28` }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(135deg,${A}55,${A}22)`, border: `1px solid ${A}45` }}>
                        <item.Icon className="w-4 h-4 text-cyan-300" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                        <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="lg:sticky lg:top-28 p-6 rounded-3xl border"
                style={{ background: `rgba(8,145,178,0.06)`, borderColor: `${A}28` }}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#67e8f9" }}>
                  Target Use Cases
                </h3>
                {genAICases.map((uc, i) => (
                  <div key={i} className="p-4 rounded-2xl border mb-3 last:mb-0 transition-all duration-300 hover:border-cyan-500/30"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: `${A}22` }}>
                    <p className="text-xs font-bold mb-1 text-cyan-400">{uc.industry}</p>
                    <p className="text-xs text-white/50 mb-2">
                      <span className="font-semibold text-white/70">Pain: </span>{uc.problem}
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-cyan-400" />
                      <p className="text-xs text-white/60">{uc.solution}</p>
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
        style={{ background: "linear-gradient(160deg,#eff6ff 0%,#e0f2fe 60%,#dbeafe 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}28,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}20,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>
              Data & Analytics
            </span>
            <h2 className="section-h2 text-[#0c4a6e] mt-3" style={{ fontWeight: 700 }}>Data Engineering & Analytics</h2>
            <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto">
              The foundation every AI initiative requires. Most companies approaching ANTUTIVE for AI discover
              their data infrastructure is the real bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {analyticsSvcs.map((s, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl border bg-white h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: `${A}18`, boxShadow: `0 4px 20px ${A}08` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 6px 18px ${A}35` }}>
                    <s.Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0c4a6e] mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Maturity Path — visual step cards */}
          <Reveal variant="scale">
            <div className="rounded-3xl p-8 border bg-white shadow-sm" style={{ borderColor: `${A}20` }}>
              <h3 className="text-sm font-bold text-[#0c4a6e] mb-8 text-center uppercase tracking-wide">
                Analytics Maturity Path — Where Do You Sit?
              </h3>
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* horizontal connector */}
                <div className="hidden md:block absolute pointer-events-none"
                  style={{
                    top: "2.5rem", left: "calc(12.5% + 1rem)", right: "calc(12.5% + 1rem)",
                    height: 2,
                    background: `linear-gradient(90deg,${A}20,${A}70,${A}20)`,
                  }} />
                {analyticsLevels.map((l, i) => (
                  <div key={i} className="relative p-5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ borderColor: `${A}20`, background: i === 3 ? `${A}10` : `${A}05` }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xs font-bold relative z-10"
                      style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 4px 12px ${A}40` }}>
                      {i + 1}
                    </div>
                    <span className="inline-block text-xs font-bold text-white mb-3 px-2.5 py-0.5 rounded-full"
                      style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                      {l.level}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">{l.state}</p>
                    <div className="border-t pt-3" style={{ borderColor: `${A}15` }}>
                      <p className="text-xs font-semibold mb-1" style={{ color: A }}>{l.eng}</p>
                      <p className="text-xs text-slate-400 font-medium">{l.dur}</p>
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
        style={{ background: "linear-gradient(135deg,#0c4a6e 0%,#0369a1 55%,#0891b2 100%)" }}>
        <div className="absolute inset-0 hero-mesh-overlay opacity-25" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.08),transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left">
              <span className="section-eyebrow-light">AI Growth & Marketing</span>
              <h2 className="section-h2 text-white mt-3 mb-5" style={{ fontWeight: 700 }}>AI Growth & Marketing</h2>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                AI-powered systems that replace manual growth activities with automated, intelligent pipelines — from GEO strategy
                and AI video production to precision lead scoring and outreach automation.
              </p>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                Reach buyers searching AI platforms (ChatGPT, Perplexity, Gemini) rather than traditional search engines.
                ANTUTIVE builds the infrastructure to make your brand discoverable in the AI-native web.
              </p>
              <Link
                to="/growth-marketing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: "rgba(255,255,255,0.95)", color: A2 }}
              >
                Explore AI Growth Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {growthHighlights.map((item, i) => (
                <Reveal key={i} variant={i % 2 === 0 ? "up" : "scale"} delay={i * 90}>
                  <div className="p-5 rounded-2xl border backdrop-blur-sm h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.22)" }}>
                      <item.Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm font-bold text-white mb-1.5">{item.label}</p>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE 04: CUSTOM AI PLATFORM ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 55%,#dbeafe 100%)" }}>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}22,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platformFeatures.map((item, i) => (
                <Reveal key={i} variant={i % 2 === 0 ? "left" : "up"} delay={i * 80}>
                  <div className="p-5 rounded-2xl border bg-white h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ borderColor: `${A}18`, boxShadow: `0 2px 12px ${A}08` }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 4px 14px ${A}30` }}>
                      <item.Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm font-bold text-[#0c4a6e] mb-1.5">{item.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="right" delay={100}>
              <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>
                Custom AI Platform
              </span>
              <h2 className="section-h2 text-[#0c4a6e] mt-3 mb-5" style={{ fontWeight: 700 }}>Custom AI Platform</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                A private, model-agnostic AI workspace where your team collaborates with AI on your data — without that
                data ever leaving your control. Built for European SMEs who cannot afford public-cloud data risk.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Supports multiple AI models simultaneously, integrates with your existing tools, and scales from a single
                team to your entire organisation — all within EU data residency boundaries.
              </p>
              <Link
                to="/custom-platform"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 8px 24px ${A}35` }}
              >
                Explore Custom Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICE INTEGRATION MAP ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0c4a6e 0%,#0891b2 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.1),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Service Ecosystem</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Service Integration Map</h2>
            <p className="text-sm text-white/55 mt-3 max-w-lg mx-auto">
              Practice areas form an interconnected ecosystem — each engagement naturally leads to the next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {integrations.map((item, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <GitMerge className="w-4 h-4 text-white/45" />
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wide">Starting point</span>
                  </div>
                  <p className="text-base font-bold text-white mb-3">{item.start}</p>
                  <div className="flex items-center gap-2 mb-3 p-2.5 rounded-xl"
                    style={{ background: "rgba(8,145,178,0.2)", border: "1px solid rgba(103,232,249,0.2)" }}>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-300 flex-shrink-0" />
                    <p className="text-xs font-semibold text-cyan-300">{item.exp}</p>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">{item.logic}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DeliveryMethod accentColor={A} />

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#eff6ff 0%,#e0f2fe 55%,#dbeafe 100%)" }}>
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
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Start the Conversation</span>
              </div>
              <h2 className="section-h2 text-[#0c4a6e] mb-4" style={{ fontWeight: 700 }}>
                Start with a Free Diagnostic
              </h2>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                The Business Understanding session is the first step of the ANTUTIVE Delivery Method —
                offered free for qualified prospects. We diagnose before we prescribe.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary"
                  style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="cta-btn-secondary"
                  style={{ borderColor: `${A}40`, color: A }}>
                  View All Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
