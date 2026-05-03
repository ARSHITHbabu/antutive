import { Link } from "react-router";
import { Database, TrendingUp, Lock, Users, Cpu, Shield, Globe, Code2, BarChart3, Zap, Server, Layers, Cloud, ArrowRight, Sparkles, CheckCircle2, GitBranch } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../lib/scroll";
import symbolImg from "../../assets/symbol-removebg-preview.png";

function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold });
    io.observe(el); return () => io.disconnect();
  }, [threshold]);
  return { ref, on };
}

/* ── floating chips ── */
const chips = [
  { Icon: Shield,    label: "GDPR Ready",        top: "13%", left: "3.5%",  cls: "fi-a", d: 0 },
  { Icon: Globe,     label: "EU Compliant",       top: "66%", left: "1.5%",  cls: "fi-b", d: 1.4 },
  { Icon: Code2,     label: "Custom Build",       top: "84%", left: "5%",    cls: "fi-c", d: 0.7 },
  { Icon: Zap,       label: "3× Speed",           top: "7%",  left: "28%",   cls: "fi-b", d: 1.9 },
  { Icon: BarChart3, label: "Analytics",          top: "5%",  right: "28%",  cls: "fi-a", d: 0.4 },
  { Icon: Server,    label: "Sovereign Data",     top: "10%", right: "5%",   cls: "fi-c", d: 1.1 },
  { Icon: Layers,    label: "Model-Agnostic",     top: "72%", right: "3%",   cls: "fi-a", d: 1.7 },
  { Icon: Cloud,     label: "EU Data Residency",  top: "88%", right: "22%",  cls: "fi-b", d: 0.5 },
];

const marqueeItems = [
  "GDPR Compliant", "EU AI Act Ready", "Swedish Aktiebolag", "3× Faster Delivery",
  "Sovereign Data", "24h Critical SLA", "Model-Agnostic AI", "Org.nr 559576-7228",
  "Agentic Workflows", "Power BI Analytics", "GEO Strategy", "Custom AI Platforms",
];

/* ── data network svg ── */
function DataNetworkVisual() {
  return (
    <div className="relative w-full flex items-center justify-center select-none" style={{ height: 400 }}>
      <svg viewBox="0 0 420 420" className="w-full max-w-[400px]" aria-hidden="true" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="cG"><stop offset="0%" stopColor="#fff" stopOpacity=".95"/><stop offset="45%" stopColor="#D7CCFF" stopOpacity=".6"/><stop offset="100%" stopColor="#5A32A3" stopOpacity="0"/></radialGradient>
          <radialGradient id="gG"><stop offset="0%" stopColor="#1CB7B4" stopOpacity=".32"/><stop offset="100%" stopColor="#6F3CC3" stopOpacity="0"/></radialGradient>
          <filter id="f4"><feGaussianBlur stdDeviation="4"/></filter>
          <filter id="f2"><feGaussianBlur stdDeviation="2"/></filter>
        </defs>
        <circle cx="210" cy="210" r="170" fill="url(#gG)" filter="url(#f4)" className="dn-pulse"/>
        <circle cx="210" cy="210" r="155" fill="none" stroke="rgba(255,255,255,.1)"  strokeWidth="1" strokeDasharray="6 10" className="dn-ring-1"/>
        <circle cx="210" cy="210" r="105" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1" strokeDasharray="5 7"  className="dn-ring-2"/>
        <circle cx="210" cy="210" r="58"  fill="none" stroke="rgba(255,255,255,.2)"  strokeWidth="1" className="dn-ring-3"/>
        <g opacity=".07">{[0,42,84,126,168,210,252,294,336,378,420].map(x=><line key={`v${x}`} x1={x} y1="0" x2={x} y2="420" stroke="white" strokeWidth=".5"/>)}{[0,42,84,126,168,210,252,294,336,378,420].map(y=><line key={`h${y}`} x1="0" y1={y} x2="420" y2={y} stroke="white" strokeWidth=".5"/>)}</g>
        {([[210,210,365,100],[210,210,55,115],[210,210,375,310],[210,210,50,305],[210,210,210,30],[210,210,210,395],[365,100,55,115],[365,100,375,310],[55,115,50,305],[375,310,50,305]] as number[][]).map(([x1,y1,x2,y2],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,.13)" strokeWidth=".7" className={`dn-line dn-line-${(i%3)+1}`}/>)}
        {([{cx:365,cy:100,r:9,cls:"dn-node-o1"},{cx:55,cy:115,r:8,cls:"dn-node-o2"},{cx:375,cy:310,r:11,cls:"dn-node-o3"},{cx:50,cy:305,r:7,cls:"dn-node-o4"},{cx:210,cy:30,r:9,cls:"dn-node-o5"},{cx:210,cy:395,r:7,cls:"dn-node-o6"}]).map(({cx,cy,r,cls})=><g key={cls} className={cls}><circle cx={cx} cy={cy} r={r+9} fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="1" className="dn-ping"/><circle cx={cx} cy={cy} r={r+4} fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.35)" strokeWidth="1"/><circle cx={cx} cy={cy} r={r/2} fill="rgba(255,255,255,.95)"/></g>)}
        <g className="dn-mid-1"><circle cx="315" cy="210" r="6" fill="rgba(28,183,180,.25)" stroke="rgba(28,183,180,.8)" strokeWidth="1"/><circle cx="315" cy="210" r="3" fill="#1CB7B4"/></g>
        <g className="dn-mid-2"><circle cx="105" cy="210" r="6" fill="rgba(111,60,195,.25)" stroke="rgba(111,60,195,.8)" strokeWidth="1"/><circle cx="105" cy="210" r="3" fill="#6F3CC3"/></g>
        <g className="dn-mid-3"><circle cx="210" cy="105" r="5" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.6)" strokeWidth="1"/><circle cx="210" cy="105" r="2.5" fill="white"/></g>
        <g className="dn-mid-4"><circle cx="210" cy="315" r="5" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.6)" strokeWidth="1"/><circle cx="210" cy="315" r="2.5" fill="white"/></g>
        {([[155,88],[275,145],[135,260],[295,320],[240,72],[115,180],[305,175],[170,345]] as number[][]).map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="1.5" fill="rgba(255,255,255,.45)" className={`dn-particle dn-particle-${(i%4)+1}`}/>)}
        <circle cx="210" cy="210" r="42" fill="url(#cG)" filter="url(#f2)" className="dn-pulse"/>
        <circle cx="210" cy="210" r="26" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.45)" strokeWidth="1.5"/>
        <circle cx="210" cy="210" r="17" fill="rgba(255,255,255,.25)" stroke="rgba(255,255,255,.65)" strokeWidth="1"/>
        <circle cx="210" cy="210" r="9" fill="rgba(255,255,255,.95)"/>
      </svg>
    </div>
  );
}

const COLS = ["Data & Analytics", "Agentic AI", "Custom AI Platform", "AI Growth"];
const COL_COLORS = ["#F5C84C", "#1CB7B4", "#6F3CC3", "#F36D4F"];

const frictionRows = [
  { pain: "Manual Reporting",  context: "Finance teams spending 2+ days/week exporting spreadsheets and rebuilding the same reports. No single source of truth.", solutions: ["Auto-Dashboards",    "Drafting Agents",   "Query Interface",    "Content Engine"]   },
  { pain: "Customer Scaling",  context: "Support volume growing faster than headcount — tickets pile up, response times worsen, team burns out.", solutions: ["Ticket Analytics",   "Action Agents",     "Support Platform",   "Lead Scoring"]     },
  { pain: "Financial Recon",   context: "Invoice matching and bank reconciliation done manually, causing month-end delays and costly reconciliation errors.", solutions: ["ETL Sync",           "Auto-Matching",     "Audit Vault",        "Fin-Analyst"]      },
  { pain: "Low Visibility",    context: "Competitors appearing in AI search results and social feeds. Your brand is invisible to the fastest-growing segment of qualified buyers.", solutions: ["GEO Analytics",      "AI Video Ads",      "Brand Platform",     "GEO Optimisation"] },
  { pain: "Knowledge Silos",   context: "Expertise locked in individual employees — when they leave or are unavailable, institutional knowledge disappears.", solutions: ["Data Warehouse",     "Sovereign RAG",     "Knowledge Graph",    "AI Content Engine"] },
  { pain: "Compliance Risk",   context: "EU AI Act and GDPR creating audit obligations most SMEs lack the tooling to satisfy before enforcement deadlines.", solutions: ["Data Governance",    "Audit Logging",     "Privacy Controls",   "GDPR Automation"]  },
];

const maturityLevels = [
  { name: "Fragmented", color: "#ef4444", weeks: 5,  desc: "Data in Excel, manual reporting, no single source of truth." },
  { name: "Structured",  color: "#f59e0b", weeks: 4,  desc: "Central database exists but reporting is static or manual." },
  { name: "Analytical",  color: "#3b82f6", weeks: 7,  desc: "Dashboards exist but no predictive or AI capability." },
  { name: "Intelligent", color: "#10b981", weeks: 10, desc: "AI-driven automation, agentic workflows, continuous optimisation." },
];

const PILLARS = [
  { n: "01", title: "AI Solutions Suite",   tag: "AI, Data & Growth Platforms",            desc: "Generative AI, data analytics, growth automation, and custom AI platforms — engineered and deployed for your specific environment.", href: "/services",   color: "#F5C84C" },
  { n: "02", title: "Strategic Consulting", tag: "IT Consulting & Distributed Engineering", desc: "Senior advisory, architecture reviews, managed engineering teams, and end-to-end project delivery.",                                  href: "/consulting", color: "#1CB7B4" },
  { n: "03", title: "Products",             tag: "Enterprise SaaS Portfolio",               desc: "FAMANT home OS and EU-rebranded SaaS products generating recurring licence revenue.",                                                href: "/products",   color: "#6F3CC3" },
];

function PillarScrollSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);

  const idx = Math.min(2, Math.floor(prog * 3));
  const rot = prog * 360;
  const col = PILLARS[idx].color;

  useEffect(() => {
    const tick = () => {
      const el = outerRef.current;
      if (!el) return;
      const { top } = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      setProg(Math.min(1, Math.max(0, -top / scrollable)));
    };
    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <div ref={outerRef} style={{ position: "relative", height: "360vh" }}>
      <div
        className="sticky top-0 overflow-hidden flex flex-col"
        style={{ height: "100vh", background: "linear-gradient(135deg,#071018 0%,#10242B 48%,#160D2B 100%)" }}
      >
        {/* Ambient colour glow that shifts with active pillar */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 70% at 28% 60%, ${col}1c, transparent 68%)`, transition: "background 0.9s" }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${col}14,transparent 70%)`, filter: "blur(60px)", transition: "background 0.9s" }}
        />

        {/* Header */}
        <div className="relative z-10 text-center px-4 pt-10 pb-5 flex-shrink-0">
          <span className="section-eyebrow-light">What We Offer</span>
          <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Three Ways to Work With Us</h2>
          <p className="text-sm text-white/50 mt-3 max-w-xl mx-auto leading-relaxed">
            AI-powered systems, strategic advisory, and scalable SaaS products — each available independently or combined.
          </p>
        </div>

        {/* Logo + content */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-24 max-w-5xl mx-auto w-full px-6 lg:px-8">
          {/* Rotating logo */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            <div
              className="absolute rounded-full"
              style={{ width: 236, height: 236, border: `1.5px solid ${col}44`, boxShadow: `0 0 44px ${col}22`, transition: "border-color 0.9s, box-shadow 0.9s" }}
            />
            <div
              className="absolute rounded-full"
              style={{ width: 192, height: 192, border: `1px solid ${col}22`, transition: "border-color 0.9s" }}
            />
            <img
              src={symbolImg}
              alt="ANTUTIVE symbol"
              style={{
                width: 148,
                height: 148,
                objectFit: "contain",
                transform: `rotate(${rot}deg)`,
                filter: `drop-shadow(0 0 18px ${col}cc) drop-shadow(0 0 36px ${col}66)`,
                transition: "filter 0.9s",
                willChange: "transform",
              }}
            />
          </div>

          {/* Active pillar content */}
          <div className="flex-1" style={{ position: "relative", minHeight: 260 }}>
            {PILLARS.map((p, i) => (
              <div
                key={p.n}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  opacity: i === idx ? 1 : 0,
                  transform: i === idx ? "translateY(0)" : i < idx ? "translateY(-24px)" : "translateY(24px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  pointerEvents: i === idx ? "auto" : "none",
                }}
              >
                <span style={{ fontFamily: "Orbitron, sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", marginBottom: "1.1rem", display: "block" }}>
                  {p.n}
                </span>
                <h3 style={{ fontFamily: "Orbitron, sans-serif", fontSize: "clamp(1.3rem, 2.8vw, 2.1rem)", fontWeight: 700, color: "white", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.78rem", fontWeight: 600, color: p.color, marginBottom: "1rem", letterSpacing: "0.03em" }}>
                  {p.tag}
                </p>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: 420 }}>
                  {p.desc}
                </p>
                <Link
                  to={p.href}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 12, border: `1.5px solid ${p.color}55`, color: p.color, background: `${p.color}11`, textDecoration: "none" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots + scroll hint */}
        <div className="relative z-10 flex flex-col items-center gap-3 pb-7 flex-shrink-0">
          <div className="flex gap-2.5">
            {PILLARS.map((p, i) => (
              <div
                key={i}
                style={{
                  width: i === idx ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === idx ? p.color : "rgba(255,255,255,0.22)",
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>
          {prog < 0.03 && (
            <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", animation: "fadeUp 0.8s ease both" }}>
              Scroll to explore
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Home() {

  const practices = [
    { icon: Cpu,        title: "Generative AI",        href: "/services#genai",   desc: "Agentic systems, Sovereign RAG, knowledge graphs, conversational AI." },
    { icon: Database,   title: "Data Engineering",     href: "/services#data",    desc: "ETL pipelines, Power BI dashboards, predictive analytics, governance." },
    { icon: TrendingUp, title: "AI Growth & Marketing",href: "/growth-marketing", desc: "GEO strategy, AI video production, lead scoring, outreach automation." },
    { icon: Lock,       title: "Custom AI Platforms",  href: "/custom-platform",  desc: "Private, model-agnostic AI workspaces — your data never leaves your environment." },
    { icon: Users,      title: "IT Consulting",        href: "/consulting",       desc: "Strategic advisory, managed teams, and project delivery across the full stack." },
  ];

  const features = [
    { icon: Shield,    stat: "100%", label: "EU Data Sovereignty",  desc: "Data never leaves European jurisdiction. GDPR and EU AI Act compliant." },
    { icon: Zap,       stat: "3×",   label: "Faster Delivery",       desc: "Vs traditional Nordic consultancies — parallel time-zone engineering." },
    { icon: GitBranch, stat: "24h",  label: "Critical SLA Response", desc: "Guaranteed response for production incidents. 48h for standard issues." },
  ];

  const metrics = [
    { value: "5",    label: "Practice Areas" },
    { value: "3×",   label: "Faster Delivery" },
    { value: "24h",  label: "Critical SLA" },
    { value: "EU",   label: "Compliance-Ready" },
  ];

  const [selectedPain, setSelectedPain] = useState<number | null>(null);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "92vh" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#030608] via-[#06141A] to-[#0A0618]"/>
        <div className="absolute inset-0 hero-mesh-overlay"/>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="blob blob-1"/><div className="blob blob-2"/><div className="blob blob-3"/>
        </div>
        {chips.map(({ Icon, label, cls, d, ...pos }, i) => (
          <div key={i} className={`float-chip ${cls}`} aria-hidden="true" style={{ position: "absolute", animationDelay: `${d}s`, ...pos }}>
            <Icon className="w-3.5 h-3.5 flex-shrink-0"/><span>{label}</span>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp .6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-yellow-200"/>
                <span className="text-xs font-bold tracking-widest uppercase">Gothenburg, Sweden · Est. 2026</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp .8s ease .1s both" }}>
                AI Engineering<br/>for European<br/>Business
              </h1>

              <p className="text-base md:text-lg mb-8 text-white/85 max-w-lg leading-relaxed"
                style={{ animation: "fadeUp .8s ease .25s both" }}>
                ANTUTIVE AB is a Swedish AI engineering partner helping European SMEs build secure AI systems,
                modern analytics, AI-powered growth engines, and sovereign AI workspaces — at 3× the speed
                of traditional Nordic consultancies.
              </p>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp .8s ease .4s both" }}>
                <Link to="/contact" className="hero-btn-primary">Book a Strategy Call</Link>
                <Link to="/services" className="hero-btn-secondary">Explore Solutions</Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {metrics.map((m, i) => (
                  <div key={m.label} className="metric-chip" style={{ animation: `fadeUp .6s ease ${.55+i*.1}s both` }}>
                    <span className="block text-xl font-bold">{m.value}</span>
                    <span className="block text-xs text-white/65 mt-0.5 leading-tight">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <DataNetworkVisual/>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST MARQUEE ── */}
      <div className="marquee-outer" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              <Sparkles className="w-3 h-3"/>{item}
            </span>
          ))}
        </div>
      </div>

      {/* ── THREE PILLARS (scroll-driven) ── */}
      <PillarScrollSection />

      {/* ── OPERATIONAL FRICTION MATRIX ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#050810 0%,#07091a 55%,#080c1a 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-50"/>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(28,183,180,0.16),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(111,60,195,0.15),transparent 70%)", filter: "blur(60px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light">Problem — Solution</span>
              <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Operational Friction Matrix</h2>
              <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">Click a business pain to see exactly how each ANTUTIVE practice area solves it.</p>
            </div>
          </Reveal>
          <Reveal variant="scale">
            <div className="overflow-x-auto rounded-2xl border shadow-sm" style={{ borderColor: "rgba(28,183,180,0.18)" }}>
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr style={{ background: "#030611" }}>
                    <th className="text-left px-6 py-4 text-sm font-bold text-white w-44 whitespace-nowrap">Business Pain</th>
                    {COLS.map((col, ci) => (
                      <th key={ci} className="px-4 py-4 text-xs font-semibold text-white/75 text-center whitespace-nowrap"
                        style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                        <span className="block w-2.5 h-2.5 rounded-full mx-auto mb-1.5" style={{ background: COL_COLORS[ci] }}/>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {frictionRows.map((row, ri) => (
                    <>
                      <tr
                        key={ri}
                        onClick={() => setSelectedPain(selectedPain === ri ? null : ri)}
                        className="cursor-pointer transition-colors"
                        style={{
                          background: selectedPain === ri ? "rgba(28,183,180,0.1)" : ri % 2 === 0 ? "#07091a" : "#060818",
                          borderBottom: "1px solid rgba(28,183,180,0.1)",
                        }}
                      >
                        <td className="px-6 py-4">
                          <span className="text-sm font-bold text-white flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full flex-shrink-0 transition-transform"
                              style={{ background: selectedPain === ri ? "#1CB7B4" : "#cbd5e1", transform: selectedPain === ri ? "scale(1.5)" : "scale(1)" }}/>
                            {row.pain}
                          </span>
                        </td>
                        {row.solutions.map((sol, ci) => (
                          <td key={ci} className="px-4 py-4 text-center" style={{ borderLeft: "1px solid rgba(111,60,195,0.08)" }}>
                            <span className="text-xs font-semibold transition-colors"
                              style={{ color: selectedPain === ri ? COL_COLORS[ci] : "rgba(255,255,255,0.35)" }}>
                              {sol}
                            </span>
                          </td>
                        ))}
                      </tr>
                      {selectedPain === ri && (
                        <tr key={`exp-${ri}`}>
                          <td colSpan={5} style={{ background: "rgba(28,183,180,0.07)", borderBottom: "1px solid rgba(28,183,180,0.15)" }}>
                            <div className="px-6 py-4 flex flex-col sm:flex-row gap-4 items-start">
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-white mb-1 uppercase tracking-wide">Typical Situation</p>
                                <p className="text-xs text-white/55 leading-relaxed">{row.context}</p>
                              </div>
                              <div className="flex flex-wrap gap-2 flex-shrink-0">
                                {COLS.map((col, ci) => (
                                  <span key={ci} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white whitespace-nowrap"
                                    style={{ background: COL_COLORS[ci] }}>
                                    {col}: {row.solutions[ci]}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FIVE PRACTICE AREAS ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0a1628 0%,#162035 50%,#0f1a2e 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none"/>
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(28,183,180,0.1),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(111,60,195,0.1),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-14">
              <span className="section-eyebrow-light">What We Build</span>
              <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Five Practice Areas</h2>
              <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">
                Each solution area can be deployed independently or combined for comprehensive AI transformation.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {practices.map((p, i) => (
              <Reveal key={p.title} variant={["up","left","scale","right","flip"][i % 5] as any} delay={i * 80}>
                <Link to={p.href} className="block practice-card group">
                  <div className="practice-icon"><p.icon className="w-5 h-5 text-white"/></div>
                  <h3 className="practice-title">{p.title}</h3>
                  <p className="practice-desc">{p.desc}</p>
                  <span className="practice-link">Learn more <ArrowRight className="w-3.5 h-3.5"/></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI MATURITY PATH ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#090618 100%)" }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(28,183,180,0.2),transparent 70%)", filter: "blur(80px)" }}/>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.18),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <Reveal variant="left">
              <span className="section-eyebrow-light">Data Analytics</span>
              <h2 className="section-h2 text-white mt-3 mb-4" style={{ fontWeight: 700 }}>Where Are You on<br/>the Maturity Path?</h2>
              <p className="text-sm text-white/55 leading-relaxed mb-8">
                Most companies need clean, connected data before AI can work. We meet you where you are
                and build a path to full intelligence — without skipping the foundations.
              </p>
              <div className="flex flex-col gap-5">
                {maturityLevels.map((m, i) => (
                  <Reveal key={i} variant="left" delay={i * 80}>
                    <div className="flex items-center gap-4">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: m.color }}/>
                      <span className="text-sm font-bold text-white w-24 flex-shrink-0">{m.name}</span>
                      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${(m.weeks / 12) * 100}%`, background: m.color }}/>
                      </div>
                      <span className="text-xs font-semibold text-white/45 w-14 text-right flex-shrink-0">{m.weeks} wks</span>
                    </div>
                    <p className="text-xs text-white/45 leading-relaxed ml-7 mt-1">{m.desc}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* RIGHT — bar chart */}
            <Reveal variant="right" delay={120}>
              <div className="p-8 rounded-3xl border" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", borderColor: "rgba(28,183,180,0.18)" }}>
                <p className="text-xs font-bold text-white/45 uppercase tracking-widest mb-8">Typical Engagement Duration</p>
                <div className="flex items-end gap-4" style={{ height: 160 }}>
                  {maturityLevels.map((m) => (
                    <div key={m.name} className="flex-1 flex flex-col items-center gap-3">
                      <span className="text-xs font-bold" style={{ color: m.color }}>{m.weeks}w</span>
                      <div className="w-full rounded-t-xl" style={{
                        height: `${(m.weeks / 12) * 100}%`,
                        background: `linear-gradient(to top, ${m.color}cc, ${m.color}55)`,
                        minHeight: 16,
                      }}/>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-4 border-t pt-4" style={{ borderColor: "rgba(28,183,180,0.12)" }}>
                  {maturityLevels.map((m) => (
                    <div key={m.name} className="flex-1 text-center">
                      <span className="text-xs text-white/45">{m.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-2xl" style={{ background: "rgba(111,60,195,0.08)", border: "1px solid rgba(111,60,195,0.18)" }}>
                  <p className="text-xs font-bold text-white mb-1">Not sure where you sit?</p>
                  <p className="text-xs text-white/55 leading-relaxed">The Business Understanding session maps your current data state in 90 minutes — at no cost for qualified prospects.</p>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold mt-2" style={{ color: "#1CB7B4" }}>
                    Book free session <ArrowRight className="w-3.5 h-3.5"/>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY ANTUTIVE ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e1840 60%,#0f172a 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-50"/>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(28,183,180,0.1),transparent 70%)", filter: "blur(80px)" }}/>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(111,60,195,0.1),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light">Why ANTUTIVE</span>
              <h2 className="section-h2 text-white mt-3 mb-5" style={{ fontWeight: 700 }}>
                Engineering Speed.<br/>Digital Sovereignty.<br/>EU Compliance.
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                ANTUTIVE AB (Org.nr 559576-7228) is a Swedish Aktiebolag registered in Gothenburg, Västra Götaland.
                Our core thesis: European SMEs need AI and data capabilities to remain competitive but lack the
                engineering depth to build them securely — especially with the EU AI Act enforcement beginning
                August 2026.
              </p>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                We eliminate that gap: delivering custom AI solutions, analytics infrastructure, growth automation,
                and ready-to-deploy SaaS products with Swedish-grade trust and full regulatory compliance.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D7CCFF] group">
                About ANTUTIVE <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Reveal>

            <div className="flex flex-col gap-4">
              {features.map(({ icon: Icon, stat, label, desc }, i) => (
                <Reveal key={label} variant="right" delay={i * 110}>
                  <div className="feature-card">
                    <div className="feature-icon-wrap"><Icon className="w-5 h-5 text-white"/></div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{stat}</span>
                        <span className="text-sm font-semibold text-[#1CB7B4]">{label}</span>
                      </div>
                      <p className="text-xs text-white/50 mt-0.5">{desc}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#1CB7B4] ml-auto flex-shrink-0"/>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#050810 0%,#080c18 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="flip">
            <div className="cta-card">
              <div className="cta-orb cta-orb-1"/><div className="cta-orb cta-orb-2"/><div className="cta-orb cta-orb-3"/>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1CB7B4]/30 bg-[#1CB7B4]/10 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#1CB7B4]"/>
                  <span className="text-xs font-bold tracking-widest text-[#1CB7B4] uppercase">Start the Conversation</span>
                </div>
                <h2 className="section-h2 text-white mb-4" style={{ fontWeight: 700 }}>
                  Ready to Build<br/>Your AI Advantage?
                </h2>
                <p className="text-sm text-white/55 mb-10 max-w-md mx-auto leading-relaxed">
                  Book a free Business Understanding session. We begin with your goals and pain points —
                  not a sales pitch.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact" className="cta-btn-primary">
                    Book a Strategy Call <ArrowRight className="w-4 h-4"/>
                  </Link>
                  <Link to="/services" className="cta-btn-secondary">Explore Solutions</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
