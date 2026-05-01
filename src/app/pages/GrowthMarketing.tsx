import { Link } from "react-router";
import {
  ArrowRight, CheckCircle2, Search, Video, Zap, BarChart3,
  MessageSquare, FileText, TrendingUp, Globe, Sparkles,
  Shield, Users, Code2,
} from "lucide-react";
import { Reveal } from "../lib/scroll";

const A  = "#10b981";
const A2 = "#059669";
const D  = "#064e3b";

const heroMetrics = [
  { value: "80%", label: "Video Cost Reduction" },
  { value: "3×",  label: "Pipeline Velocity"    },
  { value: "GEO", label: "AI Search Visibility" },
  { value: "EU",  label: "Compliant"            },
];

/* ── hero right: 4-service grid ── */
function GrowthServiceGrid() {
  const items = [
    { Icon: Search,    label: "GEO Strategy",    sub: "AI search visibility",  color: "#10b981" },
    { Icon: Video,     label: "AI Video",         sub: "Script → screen fast",  color: "#059669" },
    { Icon: Zap,       label: "Sales Automation", sub: "AI-powered pipeline",   color: "#047857" },
    { Icon: BarChart3, label: "Growth Analytics", sub: "Revenue intelligence",  color: "#10b981" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {items.map((s, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            animation: `fadeUp 0.7s ease ${i * 120}ms both`,
          }}
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
const geoDeliverables = [
  { Icon: Search,    title: "GEO Audit",                        desc: "Comprehensive analysis of how your brand currently appears in AI model responses, benchmarked against competitors for the same query categories." },
  { Icon: Code2,     title: "Structured Data Implementation",   desc: "Schema.org Organisation, Service, Product, and FAQ markup deployed across your website to make content machine-readable for AI knowledge graphs." },
  { Icon: FileText,  title: "AI-Optimised Content Strategy",   desc: "Creation of authoritative long-form content designed to be cited by AI models. Factual density, entity-rich writing, and citation-worthy formatting." },
  { Icon: Globe,     title: "Entity Consistency Management",   desc: "Ensuring your brand appears with identical name, description, and attributes across Google Business Profile, LinkedIn, industry directories, and relevant databases." },
  { Icon: BarChart3, title: "Ongoing Monitoring",              desc: "Monthly tracking of your visibility in AI model responses, with strategy adjustments based on algorithm changes and competitive movements." },
];

const videoDeliverables = [
  { Icon: FileText,       title: "AI Script Generation",       desc: "From a brief or product description, generate compelling video scripts optimised for LinkedIn, YouTube, Instagram, and website landing pages." },
  { Icon: Video,          title: "AI Video Production",        desc: "Using tools like Synthesia, HeyGen, RunwayML, and Pika, produce professional-quality videos with AI presenters, motion graphics, and product demonstrations." },
  { Icon: MessageSquare,  title: "Multilingual Localisation",  desc: "Automatic translation and voice dubbing for Nordic and EU markets — Swedish, English, German, French — from a single source video." },
  { Icon: BarChart3,      title: "Brand Video Libraries",      desc: "A reusable library of AI-generated brand assets (intro sequences, explainers, testimonial formats) that can be rapidly customised for new campaigns." },
];

const automationServices = [
  { Icon: Zap,          title: "AI Lead Scoring",                  desc: "Machine learning models that analyse prospect behaviour, engagement patterns, and firmographic data to prioritise sales efforts on the highest-probability leads." },
  { Icon: MessageSquare,title: "Automated Outreach Systems",        desc: "AI-powered email and LinkedIn outreach sequences that personalise messaging at scale while maintaining authentic, non-spammy communication." },
  { Icon: Search,       title: "Conversational Lead Qualification", desc: "AI chat interfaces embedded on your website that qualify visitors, answer product questions, and route qualified leads to the sales team in real-time." },
  { Icon: BarChart3,    title: "Sales Intelligence Dashboards",    desc: "Power BI integrations giving sales teams real-time visibility into pipeline health, conversion rates, and revenue forecasting." },
  { Icon: FileText,     title: "AI Content Engines",               desc: "Automated generation of blog posts, social media content, case studies, and thought leadership pieces calibrated to your brand voice and target audience." },
];

const targetClients = [
  { type: "SME (10–50 employees)",       pain: "No marketing team, founder doing everything",       entry: "GEO audit + 3 AI videos",         expansion: "Full growth stack with lead automation" },
  { type: "Scale-up (50–250 employees)", pain: "Marketing team exists but no AI capabilities",      entry: "AI content engine + GEO",         expansion: "Sales intelligence + automated outreach" },
  { type: "E-commerce",                  pain: "High ad costs, low organic visibility",              entry: "GEO + product video library",     expansion: "AI lead scoring + conversion optimisation" },
  { type: "Professional Services",       pain: "Reputation-dependent, no content strategy",        entry: "Thought leadership content engine",expansion: "GEO + AI video for recruitment" },
];

export function GrowthMarketing() {
  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#030608 0%,#06091a 50%,#0a0618 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.08),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}25,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                <span className="text-xs font-bold tracking-widest uppercase">AI Growth & Marketing</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                Visibility, Leads &<br />Revenue — AI-Native
              </h1>

              <p className="text-base text-white/80 max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                GEO strategy, AI video production, and sales automation that keeps you visible in a market
                increasingly mediated by AI search engines and generative content.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["GEO Strategy", "AI Video Production", "Lead Scoring", "Sales Automation", "Content Engines"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border border-white/20 bg-white/08 text-white/75 text-xs font-medium backdrop-blur-sm">{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary" style={{ color: D }}>Get a GEO Audit</Link>
                <Link to="#geo" className="hero-btn-secondary">Explore Solutions</Link>
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
              <GrowthServiceGrid />
            </div>
          </div>
        </div>
      </section>

      {/* ── GEO ── */}
      <section id="geo" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}18,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}12,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light"
                style={{ borderColor: `${A}40`, background: `${A}18`, color: "#6ee7b7" }}>
                GEO Strategy
              </span>
              <h2 className="section-h2 text-white mt-3 mb-5" style={{ fontWeight: 700 }}>
                Generative Engine Optimisation
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                GEO is the 2026 evolution of SEO. Instead of optimising for Google's link-based algorithm alone,
                GEO ensures that AI models — ChatGPT, Gemini, Perplexity, Claude, Copilot — recommend your brand
                when users ask for services in your niche.
              </p>
              <p className="text-sm text-white/55 leading-relaxed mb-6">
                As AI search becomes the primary discovery channel for B2B buyers, companies without GEO become
                invisible to the fastest-growing segment of qualified traffic. Available as a monthly subscription.
              </p>
              <div className="p-4 rounded-2xl border"
                style={{ background: `${A}10`, borderColor: `${A}30` }}>
                <p className="text-xs font-bold text-emerald-300 mb-1 uppercase tracking-wide">
                  ANTUTIVE uses GEO for its own brand
                </p>
                <p className="text-xs text-white/55 leading-relaxed">
                  We demonstrate the capability by using it — creating a live portfolio of AI-native growth work
                  alongside our own marketing content.
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-3">
                {geoDeliverables.map((item, i) => (
                  <Reveal key={i} variant="right" delay={i * 70}>
                    <div className="p-4 rounded-2xl border flex gap-3 items-start transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30"
                      style={{ background: "rgba(255,255,255,0.04)", borderColor: `${A}22` }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `linear-gradient(135deg,${A}55,${A}22)`, border: `1px solid ${A}40` }}>
                        <item.Icon className="w-4 h-4 text-emerald-300" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
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
        style={{ background: "linear-gradient(160deg,#050810 0%,#07091a 60%,#080c1a 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}20,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}15,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>
              AI Video Production
            </span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>
              AI Marketing Video Production
            </h2>
            <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">
              Video is the highest-converting marketing format. Traditional production is expensive and slow.
              ANTUTIVE delivers professional-quality video at a fraction of the time and cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {videoDeliverables.map(({ Icon, title, desc }, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)", borderColor: `${A}30`, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 6px 18px ${A}35` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* cost comparison pill */}
          <Reveal variant="up" delay={200}>
            <div className="mt-10 max-w-lg mx-auto p-5 rounded-2xl border text-center"
              style={{ background: `${A}08`, borderColor: `${A}25` }}>
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-2">Cost Advantage</p>
              <p className="text-sm text-white/60 leading-relaxed">
                Traditional video production: <span className="font-bold text-white/80">€3,000–15,000 per video.</span><br />
                ANTUTIVE AI video production: <span className="font-bold" style={{ color: A }}>€300–800 per video.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SALES AUTOMATION ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 55%,#060c18 100%)" }}>
        <div className="absolute inset-0 hero-mesh-overlay opacity-25" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.08),transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Sales Automation</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>
              AI Sales & Growth Automation
            </h2>
            <p className="text-sm text-white/55 mt-3 max-w-xl mx-auto">
              Beyond marketing content, ANTUTIVE builds AI systems that directly accelerate your
              sales pipeline and customer acquisition process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {automationServices.map(({ Icon, title, desc }, i) => (
              <Reveal key={i} variant="scale" delay={i * 80}>
                <div className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-white/65 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TARGET CLIENTS ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#050810 0%,#07091a 55%,#080c1a 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}18,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}12,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-35" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>
              Who We Serve
            </span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Target Clients</h2>
            <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">
              Each client type has a distinct entry point and natural expansion path through the growth stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {targetClients.map((client, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)", borderColor: `${A}28`, boxShadow: "0 2px 16px rgba(0,0,0,0.2)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 flex-shrink-0" style={{ color: A }} />
                    <h3 className="text-sm font-bold text-white">{client.type}</h3>
                  </div>
                  <p className="text-xs text-white/50 mb-4 pl-6">
                    <span className="font-semibold text-white/70">Typical pain: </span>{client.pain}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl"
                      style={{ background: "rgba(16,185,129,0.1)", border: `1px solid ${A}28` }}>
                      <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: A }}>Entry Point</p>
                      <p className="text-xs text-white/60 leading-relaxed">{client.entry}</p>
                    </div>
                    <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <p className="text-xs font-bold text-white/45 mb-1 uppercase tracking-wide">Expansion Path</p>
                      <p className="text-xs text-white/45 leading-relaxed">{client.expansion}</p>
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
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 55%,#080c18 100%)" }}>
        <div className="absolute inset-0 hero-mesh-overlay opacity-20" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.08),transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(255,255,255,0.06),transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                <span className="text-xs font-bold tracking-widest text-white/80 uppercase">Free Diagnostic</span>
              </div>
              <h2 className="section-h2 text-white mb-4" style={{ fontWeight: 700 }}>
                Get a Free GEO Audit
              </h2>
              <p className="text-sm text-white/70 mb-8 leading-relaxed">
                Discover how your brand currently appears in AI model responses and how to improve it.
                Free diagnostic for qualified prospects — no commitment required.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: "rgba(255,255,255,0.95)", color: D }}>
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm border border-white/30 text-white bg-white/08 transition-all duration-300 hover:bg-white/15">
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
