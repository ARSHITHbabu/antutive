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
  { value: "80%", label: "Video Cost Reduction" },
  { value: "3×",  label: "Pipeline Velocity"    },
  { value: "GEO", label: "AI Search Visibility" },
  { value: "EU",  label: "Compliant"            },
];

function GrowthServiceGrid() {
  const items = [
    { Icon: Search,    label: "GEO Strategy",    sub: "AI search visibility",  color: "#1CB7B4" },
    { Icon: Video,     label: "AI Video",         sub: "Script → screen fast",  color: "#168AB0" },
    { Icon: Zap,       label: "Sales Automation", sub: "AI-powered pipeline",   color: "#0D9488" },
    { Icon: BarChart3, label: "Growth Analytics", sub: "Revenue intelligence",  color: "#1CB7B4" },
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
  { Icon: Search,    title: "GEO Audit",                       desc: "Comprehensive analysis of how your brand currently appears in AI model responses, benchmarked against competitors for the same query categories." },
  { Icon: Code2,     title: "Structured Data Implementation",  desc: "Schema.org Organisation, Service, Product, and FAQ markup deployed across your website to make content machine-readable for AI knowledge graphs." },
  { Icon: FileText,  title: "AI-Optimised Content Strategy",  desc: "Creation of authoritative long-form content designed to be cited by AI models. Factual density, entity-rich writing, and citation-worthy formatting." },
  { Icon: Globe,     title: "Entity Consistency Management",  desc: "Ensuring your brand appears with identical name, description, and attributes across Google Business Profile, LinkedIn, industry directories, and relevant databases." },
  { Icon: BarChart3, title: "Ongoing Monitoring",             desc: "Monthly tracking of your visibility in AI model responses, with strategy adjustments based on algorithm changes and competitive movements." },
];

const videoDeliverables = [
  { Icon: FileText,      title: "AI Script Generation",      desc: "From a brief or product description, generate compelling video scripts optimised for LinkedIn, YouTube, Instagram, and website landing pages." },
  { Icon: Video,         title: "AI Video Production",       desc: "Using tools like Synthesia, HeyGen, RunwayML, and Pika, produce professional-quality videos with AI presenters, motion graphics, and product demonstrations." },
  { Icon: MessageSquare, title: "Multilingual Localisation", desc: "Automatic translation and voice dubbing for Nordic and EU markets — Swedish, English, German, French — from a single source video." },
  { Icon: BarChart3,     title: "Brand Video Libraries",     desc: "A reusable library of AI-generated brand assets (intro sequences, explainers, testimonial formats) that can be rapidly customised for new campaigns." },
];

const automationServices = [
  { Icon: Zap,           title: "AI Lead Scoring",                  desc: "Machine learning models that analyse prospect behaviour, engagement patterns, and firmographic data to prioritise sales efforts on the highest-probability leads." },
  { Icon: MessageSquare, title: "Automated Outreach Systems",        desc: "AI-powered email and LinkedIn outreach sequences that personalise messaging at scale while maintaining authentic, non-spammy communication." },
  { Icon: Search,        title: "Conversational Lead Qualification", desc: "AI chat interfaces embedded on your website that qualify visitors, answer product questions, and route qualified leads to the sales team in real-time." },
  { Icon: BarChart3,     title: "Sales Intelligence Dashboards",     desc: "Power BI integrations giving sales teams real-time visibility into pipeline health, conversion rates, and revenue forecasting." },
  { Icon: FileText,      title: "AI Content Engines",               desc: "Automated generation of blog posts, social media content, case studies, and thought leadership pieces calibrated to your brand voice and target audience." },
];

const targetClients = [
  { type: "SME (10–50 employees)",       pain: "No marketing team, founder doing everything",       entry: "GEO audit + 3 AI videos",          expansion: "Full growth stack with lead automation" },
  { type: "Scale-up (50–250 employees)", pain: "Marketing team exists but no AI capabilities",      entry: "AI content engine + GEO",          expansion: "Sales intelligence + automated outreach" },
  { type: "E-commerce",                  pain: "High ad costs, low organic visibility",              entry: "GEO + product video library",      expansion: "AI lead scoring + conversion optimisation" },
  { type: "Professional Services",       pain: "Reputation-dependent, no content strategy",         entry: "Thought leadership content engine", expansion: "GEO + AI video for recruitment" },
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
                Visibility, Leads &<br />Revenue — AI-Native
              </h1>

              <p className="text-base max-w-lg leading-relaxed mb-8"
                style={{ color: "#64748b", animation: "fadeUp 0.8s ease 0.25s both" }}>
                GEO strategy, AI video production, and sales automation that keeps you visible in a market
                increasingly mediated by AI search engines and generative content.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["GEO Strategy", "AI Video Production", "Lead Scoring", "Sales Automation", "Content Engines"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ border: `1px solid rgba(28,183,180,0.25)`, background: "rgba(28,183,180,0.08)", color: A }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary">Get a GEO Audit</Link>
                <Link to="#geo" className="hero-btn-secondary">Explore Solutions</Link>
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
                GEO Strategy
              </span>
              <h2 className="section-h2 mt-3 mb-5" style={{ fontWeight: 700, color: "#0f172a" }}>
                Generative Engine Optimisation
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                GEO is the 2026 evolution of SEO. Instead of optimising for Google's link-based algorithm alone,
                GEO ensures that AI models — ChatGPT, Gemini, Perplexity, Claude, Copilot — recommend your brand
                when users ask for services in your niche.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                As AI search becomes the primary discovery channel for B2B buyers, companies without GEO become
                invisible to the fastest-growing segment of qualified traffic. Available as a monthly subscription.
              </p>
              <div className="p-4 rounded-2xl border"
                style={{ background: `rgba(28,183,180,0.06)`, borderColor: `${A}28` }}>
                <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: A }}>
                  ANTUTIVE uses GEO for its own brand
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                  We demonstrate the capability by using it — creating a live portfolio of AI-native growth work
                  alongside our own marketing content.
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
              AI Marketing Video Production
            </h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Video is the highest-converting marketing format. Traditional production is expensive and slow.
              ANTUTIVE delivers professional-quality video at a fraction of the time and cost.
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
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: A }}>Cost Advantage</p>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Traditional video production: <span className="font-bold" style={{ color: "#334155" }}>€3,000–15,000 per video.</span><br />
                ANTUTIVE AI video production: <span className="font-bold" style={{ color: A }}>€300–800 per video.</span>
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
              AI Sales & Growth Automation
            </h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Beyond marketing content, ANTUTIVE builds AI systems that directly accelerate your
              sales pipeline and customer acquisition process.
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
              Who We Serve
            </span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#0f172a" }}>Target Clients</h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Each client type has a distinct entry point and natural expansion path through the growth stack.
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
                    <span className="font-semibold" style={{ color: "#64748b" }}>Typical pain: </span>{client.pain}
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
                Get a Free GEO Audit
              </h2>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: "#64748b" }}>
                Discover how your brand currently appears in AI model responses and how to improve it.
                Free diagnostic for qualified prospects — no commitment required.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: `linear-gradient(135deg,${A},${A2})`, color: "#ffffff" }}>
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ border: `1.5px solid ${A}40`, color: A, background: `${A}08` }}>
                  Explore Products
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
