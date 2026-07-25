import { Link } from "react-router";
import { TrendingUp, Lock, Shield, Globe, Code2, BarChart3, Zap, Server, Layers, Cloud, ArrowRight, ArrowUpRight, Sparkles, GitBranch, Database, Rocket, Smartphone, MapPin } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Reveal, useVisible } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb, HatchAccent, WaveDivider } from "../components/Decor";
import logoMark from "../../assets/antutive-logo-mark.png";

/* ── count-up hook ── */
function useCountUp(target: number, on: boolean, duration = 1300) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!on) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, target, duration]);
  return val;
}

/* ── floating chips ── */
const chips = [
  { Icon: Shield,    label: "EU Based",          top: "13%", left: "3.5%",  cls: "fi-a", d: 0 },
  { Icon: Globe,     label: "GDPR Compliant",     top: "66%", left: "1.5%",  cls: "fi-b", d: 1.4 },
  { Icon: Code2,     label: "Custom Build",       top: "84%", left: "5%",    cls: "fi-c", d: 0.7 },
  { Icon: Zap,       label: "3× Speed",           top: "7%",  left: "28%",   cls: "fi-b", d: 1.9 },
  { Icon: BarChart3, label: "Product Design",     top: "5%",  right: "28%",  cls: "fi-a", d: 0.4 },
  { Icon: Server,    label: "Full Ownership",     top: "10%", right: "5%",   cls: "fi-c", d: 1.1 },
  { Icon: Layers,    label: "B2B Focused",        top: "72%", right: "3%",   cls: "fi-a", d: 1.7 },
  { Icon: Cloud,     label: "EU Infrastructure",  top: "88%", right: "22%",  cls: "fi-b", d: 0.5 },
];

const marqueeItems = [
  "GDPR Compliant", "Custom Products", "Swedish Aktiebolag", "3× Faster Delivery",
  "EU Infrastructure", "24h Critical SLA", "Full IP Ownership", "Org.nr 559576-7228",
  "B2B Focused", "Product Engineering", "End-to-End Build", "EU-Based Company",
];

/* star positions for the dark ecosystem sky */
const stars = [
  { top: "8%",  left: "12%", s: 3, d: 0   }, { top: "16%", left: "78%", s: 2, d: 1.2 },
  { top: "22%", left: "35%", s: 2, d: 2.1 }, { top: "12%", left: "55%", s: 3, d: 0.6 },
  { top: "30%", left: "90%", s: 2, d: 1.8 }, { top: "42%", left: "6%",  s: 2, d: 2.6 },
  { top: "55%", left: "16%", s: 3, d: 0.9 }, { top: "62%", left: "88%", s: 3, d: 1.5 },
  { top: "74%", left: "40%", s: 2, d: 2.2 }, { top: "80%", left: "70%", s: 2, d: 0.3 },
  { top: "88%", left: "22%", s: 3, d: 1.1 }, { top: "68%", left: "58%", s: 2, d: 2.9 },
  { top: "36%", left: "68%", s: 2, d: 0.2 }, { top: "50%", left: "45%", s: 2, d: 1.9 },
  { top: "84%", left: "92%", s: 2, d: 2.4 }, { top: "26%", left: "20%", s: 2, d: 3.3 },
];

/* ── data network svg (hero) ── */
function DataNetworkVisual() {
  return (
    <div className="relative w-full flex items-center justify-center select-none" style={{ height: 400 }}>
      <svg viewBox="0 0 420 420" className="w-full max-w-[400px]" aria-hidden="true" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="cG"><stop offset="0%" stopColor="#46589F" stopOpacity=".45"/><stop offset="45%" stopColor="#7C92C7" stopOpacity=".18"/><stop offset="100%" stopColor="#2E3B72" stopOpacity="0"/></radialGradient>
          <radialGradient id="gG"><stop offset="0%" stopColor="#7C92C7" stopOpacity=".22"/><stop offset="100%" stopColor="#46589F" stopOpacity="0"/></radialGradient>
          <filter id="f4"><feGaussianBlur stdDeviation="4"/></filter>
          <filter id="f2"><feGaussianBlur stdDeviation="2"/></filter>
        </defs>
        <circle cx="210" cy="210" r="170" fill="url(#gG)" filter="url(#f4)" className="dn-pulse"/>
        <circle cx="210" cy="210" r="155" fill="none" stroke="rgba(70,88,159,.14)"  strokeWidth="1" strokeDasharray="6 10" className="dn-ring-1"/>
        <circle cx="210" cy="210" r="105" fill="none" stroke="rgba(70,88,159,.18)" strokeWidth="1" strokeDasharray="5 7"  className="dn-ring-2"/>
        <circle cx="210" cy="210" r="58"  fill="none" stroke="rgba(70,88,159,.24)"  strokeWidth="1" className="dn-ring-3"/>
        <g opacity=".06">{[0,42,84,126,168,210,252,294,336,378,420].map(x=><line key={`v${x}`} x1={x} y1="0" x2={x} y2="420" stroke="rgba(100,116,139,0.8)" strokeWidth=".5"/>)}{[0,42,84,126,168,210,252,294,336,378,420].map(y=><line key={`h${y}`} x1="0" y1={y} x2="420" y2={y} stroke="rgba(100,116,139,0.8)" strokeWidth=".5"/>)}</g>
        {([[210,210,365,100],[210,210,55,115],[210,210,375,310],[210,210,50,305],[210,210,210,30],[210,210,210,395],[365,100,55,115],[365,100,375,310],[55,115,50,305],[375,310,50,305]] as number[][]).map(([x1,y1,x2,y2],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(100,116,139,.18)" strokeWidth=".7" className={`dn-line dn-line-${(i%3)+1}`}/>)}
        {([{cx:365,cy:100,r:9,cls:"dn-node-o1"},{cx:55,cy:115,r:8,cls:"dn-node-o2"},{cx:375,cy:310,r:11,cls:"dn-node-o3"},{cx:50,cy:305,r:7,cls:"dn-node-o4"},{cx:210,cy:30,r:9,cls:"dn-node-o5"},{cx:210,cy:395,r:7,cls:"dn-node-o6"}]).map(({cx,cy,r,cls})=><g key={cls} className={cls}><circle cx={cx} cy={cy} r={r+9} fill="none" stroke="rgba(70,88,159,.15)" strokeWidth="1" className="dn-ping"/><circle cx={cx} cy={cy} r={r+4} fill="rgba(70,88,159,.06)" stroke="rgba(70,88,159,.45)" strokeWidth="1"/><circle cx={cx} cy={cy} r={r/2} fill="#46589F"/></g>)}
        <g className="dn-mid-1"><circle cx="315" cy="210" r="6" fill="rgba(124,146,199,.25)" stroke="rgba(124,146,199,.8)" strokeWidth="1"/><circle cx="315" cy="210" r="3" fill="#7C92C7"/></g>
        <g className="dn-mid-2"><circle cx="105" cy="210" r="6" fill="rgba(70,88,159,.25)" stroke="rgba(70,88,159,.8)" strokeWidth="1"/><circle cx="105" cy="210" r="3" fill="#46589F"/></g>
        <g className="dn-mid-3"><circle cx="210" cy="105" r="5" fill="rgba(70,88,159,.15)" stroke="rgba(70,88,159,.6)" strokeWidth="1"/><circle cx="210" cy="105" r="2.5" fill="#46589F"/></g>
        <g className="dn-mid-4"><circle cx="210" cy="315" r="5" fill="rgba(124,146,199,.15)" stroke="rgba(124,146,199,.6)" strokeWidth="1"/><circle cx="210" cy="315" r="2.5" fill="#7C92C7"/></g>
        {([[155,88],[275,145],[135,260],[295,320],[240,72],[115,180],[305,175],[170,345]] as number[][]).map(([cx,cy],i)=><circle key={i} cx={cx} cy={cy} r="1.5" fill="rgba(70,88,159,.40)" className={`dn-particle dn-particle-${(i%4)+1}`}/>)}
        <circle cx="210" cy="210" r="42" fill="url(#cG)" filter="url(#f2)" className="dn-pulse"/>
        <circle cx="210" cy="210" r="26" fill="rgba(70,88,159,.08)" stroke="rgba(70,88,159,.35)" strokeWidth="1.5"/>
        <circle cx="210" cy="210" r="17" fill="rgba(70,88,159,.14)" stroke="rgba(70,88,159,.55)" strokeWidth="1"/>
        <circle cx="210" cy="210" r="9" fill="#46589F"/>
      </svg>
    </div>
  );
}

const COLS = ["Product Design", "Engineering", "Deployment", "Support"];
const COL_COLORS = ["#7C92C7", "#5F74B4", "#46589F", "#2E3B72"];

const frictionRows = [
  { pain: "No Digital Product", context: "Your company needs a web or mobile product but has no in-house engineering team to build it. Meanwhile, competitors with digital products are gaining ground.", solutions: ["UX Research",        "Full-Stack Dev",    "Cloud Deploy",       "Post-Launch"]      },
  { pain: "Legacy System",      context: "Outdated software is slowing your operations. It needs rebuilding or modernising with current technology, better performance, and a codebase your team can actually maintain.", solutions: ["Architecture",       "Re-engineering",    "Migration",          "Maintenance"]      },
  { pain: "Custom Requirements",context: "Off-the-shelf software doesn't fit your business logic or workflows. Generic tools force workarounds, and workarounds slow your team down every single day.", solutions: ["Discovery",          "Custom Build",      "Integration",        "Optimisation"]     },
  { pain: "Low Market Reach",   context: "You need a consumer-facing or B2B product to expand your market and win customers, but there's no engineering capability in-house to build it.", solutions: ["Product Strategy",   "MVP Build",         "Go-to-Market",       "Analytics"]        },
  { pain: "Siloed Processes",   context: "Multiple disconnected tools are creating inefficiency. You need one unified product that connects workflows, removes manual handoffs, and reduces errors.", solutions: ["Data Mapping",       "Platform Build",    "API Design",         "Training"]         },
  { pain: "Compliance Gaps",    context: "EU regulations require product features or data handling your current tools simply don't have, and the audit risk grows with every quarter.", solutions: ["Audit & Spec",       "Compliant Build",   "Privacy Design",     "Certification"]    },
];

const maturityLevels = [
  { name: "Idea",      color: "#A9B8DC", weeks: 3,  desc: "You can describe the problem, but there's no spec yet. That's fine. Most good products start exactly here." },
  { name: "Discovery", color: "#7C92C7", weeks: 4,  desc: "We turn the problem into a scoped requirement: validated design, an agreed technical approach, and an honest price." },
  { name: "Build",     color: "#46589F", weeks: 8,  desc: "Sprints, weekly demos, and working software growing in front of you. No black box, no surprises at the end." },
  { name: "Scale",     color: "#2E3B72", weeks: 6,  desc: "Live, learning, and growing. New features land guided by what real users actually do, not what a roadmap guessed." },
];

/* ── animated journey path visual ── */
function JourneyPath() {
  const { ref, on } = useVisible(0.3);
  const nodes = [
    { x: 40,  y: 252, r: 7,  color: "#A9B8DC", name: "Idea",      wks: "~3 wks" },
    { x: 178, y: 196, r: 8,  color: "#7C92C7", name: "Discovery", wks: "~4 wks" },
    { x: 310, y: 122, r: 9,  color: "#46589F", name: "Build",     wks: "~8 wks" },
    { x: 446, y: 48,  r: 10, color: "#2E3B72", name: "Scale",     wks: "ongoing" },
  ];
  const curve = "M40,252 C 96,244 130,214 178,196 C 236,174 262,142 310,122 C 366,99 398,65 446,48";
  return (
    <div ref={ref} className="w-full select-none">
      <svg viewBox="0 0 490 310" className="w-full" aria-hidden="true" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="jArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C92C7" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#7C92C7" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="jLine" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#A9B8DC"/>
            <stop offset="100%" stopColor="#2E3B72"/>
          </linearGradient>
        </defs>

        {/* faint grid */}
        <g opacity=".5">{[70, 140, 210, 280].map(y => <line key={y} x1="20" y1={y} x2="470" y2={y} stroke="rgba(70,88,159,0.08)" strokeWidth="1" strokeDasharray="3 7"/>)}</g>

        {/* area under curve */}
        <path d={`${curve} L446,296 L40,296 Z`} fill="url(#jArea)" opacity={on ? 1 : 0} style={{ transition: "opacity 1.2s ease 0.9s" }}/>

        {/* the path itself */}
        <path d={curve} fill="none" stroke="url(#jLine)" strokeWidth="2.5" strokeLinecap="round" pathLength={1} className={`journey-line ${on ? "drawn" : ""}`}/>

        {/* milestone nodes */}
        {nodes.map((n, i) => (
          <g key={n.name} className={`journey-node ${on ? "drawn" : ""}`} style={{ transitionDelay: `${0.5 + i * 0.35}s` }}>
            {i === nodes.length - 1 && (
              <circle cx={n.x} cy={n.y} r={n.r + 10} fill="none" stroke={n.color} strokeWidth="1.5" opacity="0.5" className="journey-halo"/>
            )}
            <circle cx={n.x} cy={n.y} r={n.r + 5} fill={`${n.color}22`} stroke={`${n.color}66`} strokeWidth="1"/>
            <circle cx={n.x} cy={n.y} r={n.r - 2} fill={n.color}/>
            <text x={n.x} y={n.y - n.r - 12} textAnchor={i === nodes.length - 1 ? "end" : "middle"} fontSize="12" fontWeight="700" fill="#0f172a" fontFamily="Sora, sans-serif">{n.name}</text>
            <text x={n.x} y={n.y + n.r + 22} textAnchor={i === 0 ? "start" : "middle"} fontSize="10.5" fontWeight="600" fill="#94a3b8" fontFamily="Inter, sans-serif">{n.wks}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── flagship products section ── */
function FlagshipSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 48%,#f8fafc 100%)" }}>
      <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-60"/>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(124,146,199,0.14),transparent 70%)", filter: "blur(70px)" }}/>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(70,88,159,0.10),transparent 70%)", filter: "blur(60px)" }}/>

      <DotMatrix style={{ top: 60, right: 30 }} />
      <HatchAccent style={{ bottom: 50, left: 30 }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Logo mark with orbiting rings */}
          <Reveal variant="left">
            <div className="relative flex items-center justify-center py-10">
              <svg viewBox="0 0 320 320" className="absolute w-[300px] h-[300px]" aria-hidden="true" style={{ overflow: "visible" }}>
                <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(124,146,199,0.30)" strokeWidth="1.4" strokeDasharray="6 10" className="logo-ring-spin"/>
                <circle cx="160" cy="160" r="118" fill="none" stroke="rgba(70,88,159,0.20)" strokeWidth="1"/>
                <circle cx="160" cy="10" r="5" fill="#7C92C7" className="eco-pulse-dot"/>
                <circle cx="278" cy="160" r="4" fill="#46589F" className="eco-pulse-dot" style={{ animationDelay: "0.8s" }}/>
                <circle cx="160" cy="278" r="4" fill="#A9B8DC" className="eco-pulse-dot" style={{ animationDelay: "1.6s" }}/>
              </svg>
              <div
                className="logo-mark-float flex items-center justify-center rounded-[36px]"
                style={{ width: 180, height: 180, background: "#ffffff", border: "1px solid rgba(124,146,199,0.35)", boxShadow: "0 24px 64px rgba(70,88,159,0.20)" }}
              >
                <img src={logoMark} alt="Antutive mark" style={{ width: 96, objectFit: "contain" }}/>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal variant="right" delay={120}>
            <span className="section-eyebrow-light">What We Do</span>
            <h2 className="section-h2 text-[#0f172a] mt-3 mb-4" style={{ fontWeight: 700 }}>
              We ship software.<br/><span className="grad-text-animated">You keep everything.</span>
            </h2>
            <p className="text-sm text-[#64748b] leading-relaxed mb-8 max-w-lg">
              A lot of agencies rent you their work. Licence fees, platform lock-ins,
              retainers you can't leave. We do the opposite. When an Antutive product
              ships, the code, the design files, and the IP land in your hands. If you
              never call us again, everything keeps working. Most people call us again.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { Icon: Code2,      title: "Built for you",  desc: "Client products engineered end-to-end, from the first workshop to production and beyond.", href: "/custom-platform" },
                { Icon: Smartphone, title: "Built by us",    desc: "FAMANT, our voice-first home operating system. Proof that we use our own methods.", href: "/products" },
              ].map(({ Icon, title, desc, href }, i) => (
                <Reveal key={title} variant="right" delay={i * 100}>
                  <Link to={href} className="feature-card group" style={{ textDecoration: "none" }}>
                    <div className="feature-icon-wrap"><Icon className="w-5 h-5 text-white"/></div>
                    <div>
                      <p className="text-sm font-bold text-[#0f172a]">{title}</p>
                      <p className="text-xs text-[#64748b] mt-0.5">{desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#7C92C7] ml-auto flex-shrink-0 transition-transform group-hover:translate-x-1"/>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#46589F] group">
              Explore our products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── dark ecosystem section: Data Delimited × Antutive ── */
function EcosystemSection() {
  return (
    <section className="eco-dark relative overflow-hidden">
      {/* smooth curves into and out of the dark band */}
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <WaveDivider fill="#eef2fa" />
      </div>
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true" style={{ transform: "scale(-1)" }}>
        <WaveDivider fill="#eef2fa" />
      </div>
      <div className="py-32">
      {/* constellation */}
      {stars.map((s, i) => (
        <span key={i} className="star-dot" aria-hidden="true"
          style={{ top: s.top, left: s.left, width: s.s, height: s.s, animationDelay: `${s.d}s` }}/>
      ))}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(rgba(169,184,220,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="section-eyebrow" style={{ color: "#A9B8DC", borderColor: "rgba(169,184,220,0.35)", background: "rgba(124,146,199,0.12)" }}>The Bigger Picture</span>
            <h2 className="section-h2 mt-4 mb-5" style={{ fontWeight: 700, color: "#F3F6FC" }}>
              Antutive is one half<br/><span className="grad-text-light">of a bigger idea.</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(199,210,236,0.75)" }}>
              Getting real value out of data and AI takes two different kinds of company.
              One that builds the foundations, and one that turns those foundations into
              products and growth. We're the second one. Our partner, Data Delimited,
              is the first.
            </p>
          </div>
        </Reveal>

        {/* connected cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 items-stretch max-w-5xl mx-auto mb-14">

          {/* Data Delimited card → external */}
          <Reveal variant="left" delay={80}>
            <a href="https://datadelimited.com/" target="_blank" rel="noopener noreferrer" className="eco-dark-card group" aria-label="Visit the Data Delimited website">
              <span className="eco-tag mb-6" style={{ color: "#C7D2EC", background: "rgba(199,210,236,0.10)", border: "1px solid rgba(199,210,236,0.25)" }}>
                Data Delimited
              </span>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg,#3B4863,#64748b)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                <Database className="w-5 h-5 text-white"/>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#F3F6FC", fontFamily: "Sora, sans-serif" }}>Builds the intelligence</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(199,210,236,0.72)" }}>
                Data platforms, analytics, AI, and cloud modernisation. Data Delimited
                gives organisations foundations they can trust: pipelines that flow,
                models that work, and infrastructure that scales with them.
              </p>
              <p className="text-xs font-bold mt-6 uppercase tracking-widest" style={{ color: "rgba(199,210,236,0.55)" }}>Engineering & Intelligence</p>
              <span className="eco-visit-pill">
                Visit datadelimited.com <ArrowUpRight className="w-3.5 h-3.5"/>
              </span>
            </a>
          </Reveal>

          {/* animated connector */}
          <div className="eco-connector lg:px-3" aria-hidden="true">
            <svg viewBox="0 0 120 60" className="w-28 h-14 rotate-90 lg:rotate-0" style={{ overflow: "visible" }}>
              <line x1="0" y1="30" x2="120" y2="30" className="eco-connector-line" style={{ stroke: "#A9B8DC" }}/>
              <circle cx="30" cy="30" r="4" fill="#A9B8DC" className="eco-pulse-dot"/>
              <circle cx="60" cy="30" r="5" fill="#7C92C7" className="eco-pulse-dot" style={{ animationDelay: "0.8s" }}/>
              <circle cx="90" cy="30" r="4" fill="#A9B8DC" className="eco-pulse-dot" style={{ animationDelay: "1.6s" }}/>
            </svg>
          </div>

          {/* Antutive card */}
          <Reveal variant="right" delay={160}>
            <div className="eco-dark-card" style={{ borderColor: "rgba(124,146,199,0.40)" }}>
              <span className="eco-tag mb-6" style={{ color: "#A9B8DC", background: "rgba(124,146,199,0.16)", border: "1px solid rgba(124,146,199,0.40)" }}>
                Antutive
              </span>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)", boxShadow: "0 8px 24px rgba(70,88,159,0.5)" }}>
                <Rocket className="w-5 h-5 text-white"/>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#F3F6FC", fontFamily: "Sora, sans-serif" }}>Turns intelligence into growth</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(199,210,236,0.72)" }}>
                We pick up where foundations end. AI innovation, growth automation,
                digital transformation, strategic consulting, and product development
                that turn technical capability into results you can put in a board deck.
              </p>
              <p className="text-xs font-bold mt-6 uppercase tracking-widest" style={{ color: "#A9B8DC" }}>Innovation & Growth</p>
              <span className="eco-visit-pill" style={{ background: "rgba(124,146,199,0.22)" }}>
                <MapPin className="w-3.5 h-3.5"/> You are here
              </span>
            </div>
          </Reveal>
        </div>

        {/* bottom highlight */}
        <Reveal variant="scale" delay={120}>
          <div className="eco-dark-highlight max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-xl font-bold leading-snug" style={{ color: "#F3F6FC", fontFamily: "Sora, sans-serif" }}>
              Data Delimited builds the intelligence.<br className="sm:hidden"/>
              <span className="grad-text-light"> Antutive turns it into growth.</span>
            </p>
            <p className="text-sm mt-3" style={{ color: "rgba(199,210,236,0.65)" }}>
              From data foundations to business outcomes. One journey, with no gap in the middle.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-7">
              <a href="https://datadelimited.com/" target="_blank" rel="noopener noreferrer" className="eco-cta-btn">
                Explore Data Delimited <ArrowUpRight className="w-4 h-4"/>
              </a>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                style={{ border: "1.5px solid rgba(169,184,220,0.35)", color: "#C7D2EC", textDecoration: "none" }}>
                More about Antutive <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      </div>
    </section>
  );
}

/* ── why antutive stat card with count-up ── */
function StatCard({ icon: Icon, end, suffix, label, desc, delay }: { icon: any; end: number; suffix: string; label: string; desc: string; delay: number }) {
  const { ref, on } = useVisible(0.4);
  const val = useCountUp(end, on);
  return (
    <Reveal variant="right" delay={delay}>
      <div ref={ref} className="feature-card">
        <div className="feature-icon-wrap"><Icon className="w-5 h-5 text-white"/></div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#0f172a]" style={{ fontFamily: "Sora, sans-serif", fontVariantNumeric: "tabular-nums" }}>{val}{suffix}</span>
            <span className="text-sm font-semibold text-[#46589F]">{label}</span>
          </div>
          <p className="text-xs text-[#64748b] mt-1">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Home() {

  const buildKinds = [
    {
      icon: TrendingUp, title: "Web & Mobile Products", href: "/growth-marketing",
      desc: "The products your customers touch. Consumer apps, B2B platforms, and MVPs that need to feel right from the very first tap.",
      tags: ["Customer portals", "SaaS platforms", "Mobile apps", "MVPs"],
    },
    {
      icon: Lock, title: "Enterprise & Internal", href: "/custom-platform",
      desc: "The products your business runs on. Internal tools, integrations, and platforms shaped around how your team actually works.",
      tags: ["Internal tools", "ERP integrations", "B2B platforms", "Automation"],
    },
  ];

  const statCards = [
    { icon: Shield,    end: 100, suffix: "%", label: "Client IP ownership",  desc: "Everything we make for you is yours on delivery. The code, the designs, the lot." },
    { icon: Zap,       end: 3,   suffix: "×", label: "Faster delivery",      desc: "Parallel engineering, not bigger promises. Measured against traditional European firms." },
    { icon: GitBranch, end: 24,  suffix: "h", label: "Critical response",    desc: "Post-launch SLA. Critical issues within 24 hours, standard requests within 48." },
  ];

  const metrics = [
    { value: "EU",   label: "Based & Compliant" },
    { value: "3×",   label: "Faster Delivery" },
    { value: "24h",  label: "Support SLA" },
    { value: "100%", label: "IP Ownership" },
  ];

  const [selectedPain, setSelectedPain] = useState<number | null>(null);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "min(92vh, 860px)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#eef2fa] to-[#f8fafc]"/>
        <div className="absolute inset-0 hero-mesh-overlay"/>
        <Noise />
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
            <div className="text-[#0f172a]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#46589F]/25 bg-[#7C92C7]/10 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp .6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-[#46589F]"/>
                <span className="text-xs font-bold tracking-widest uppercase text-[#46589F]">Product Engineering · Gothenburg</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp .8s ease .1s both" }}>
                The product you need doesn't exist yet.<br/>
                <span className="grad-text-animated">So we build it.</span>
              </h1>

              <p className="text-base md:text-lg mb-8 text-[#334155] max-w-lg leading-relaxed"
                style={{ animation: "fadeUp .8s ease .25s both" }}>
                We're Antutive, a Swedish product engineering company. Companies come to
                us with a requirement, a rough idea, or a problem that won't go away.
                They leave with working software they own outright. Code, design, IP.
                All of it, yours.
              </p>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp .8s ease .4s both" }}>
                <Link to="/contact" className="hero-btn-primary">Tell Us What You Need</Link>
                <Link to="/growth-marketing" className="hero-btn-secondary">See How We Work</Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {metrics.map((m, i) => (
                  <div key={m.label} className="metric-chip" style={{ animation: `fadeUp .6s ease ${.55+i*.1}s both` }}>
                    <span className="block text-xl font-bold">{m.value}</span>
                    <span className="block text-xs text-[#64748b] mt-0.5 leading-tight">{m.label}</span>
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

      {/* ── FLAGSHIP / WHAT WE DO ── */}
      <FlagshipSection />

      {/* ── BUSINESS NEED MATRIX ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#ffffff 0%,#f8fafc 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-50"/>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(124,146,199,0.12),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(70,88,159,0.08),transparent 70%)", filter: "blur(60px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light">Where It Hurts</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>Which of These Sounds Familiar?</h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">Every product we've built started as one of these six headaches. Tap one and we'll show you how we take it apart, from first sketch to long after launch.</p>
            </div>
          </Reveal>
          <Reveal variant="scale">
            <div className="overflow-x-auto rounded-2xl border shadow-sm" style={{ borderColor: "rgba(124,146,199,0.28)" }}>
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr style={{ background: "#f8fafc" }}>
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#0f172a] w-44 whitespace-nowrap">Business Pain</th>
                    {COLS.map((col, ci) => (
                      <th key={ci} className="px-4 py-4 text-xs font-semibold text-[#475569] text-center whitespace-nowrap"
                        style={{ borderLeft: "1px solid rgba(15,23,42,0.08)" }}>
                        <span className="block w-2.5 h-2.5 rounded-full mx-auto mb-1.5" style={{ background: COL_COLORS[ci] }}/>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {frictionRows.map((row, ri) => (
                    <Fragment key={ri}>
                      <tr
                        onClick={() => setSelectedPain(selectedPain === ri ? null : ri)}
                        className="cursor-pointer transition-colors"
                        style={{
                          background: selectedPain === ri ? "rgba(124,146,199,0.10)" : ri % 2 === 0 ? "#ffffff" : "#f8fafc",
                          borderBottom: "1px solid rgba(124,146,199,0.16)",
                        }}
                      >
                        <td className="px-6 py-4">
                          <span className="text-sm font-bold text-[#0f172a] flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full flex-shrink-0 transition-transform"
                              style={{ background: selectedPain === ri ? "#46589F" : "#94a3b8", transform: selectedPain === ri ? "scale(1.5)" : "scale(1)" }}/>
                            {row.pain}
                          </span>
                        </td>
                        {row.solutions.map((sol, ci) => (
                          <td key={ci} className="px-4 py-4 text-center" style={{ borderLeft: "1px solid rgba(70,88,159,0.06)" }}>
                            <span className="text-xs font-semibold transition-colors"
                              style={{ color: selectedPain === ri ? COL_COLORS[ci] : "#94a3b8" }}>
                              {sol}
                            </span>
                          </td>
                        ))}
                      </tr>
                      {selectedPain === ri && (
                        <tr>
                          <td colSpan={5} style={{ background: "rgba(124,146,199,0.06)", borderBottom: "1px solid rgba(124,146,199,0.18)" }}>
                            <div className="px-6 py-4 flex flex-col sm:flex-row gap-4 items-start">
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-[#0f172a] mb-1 uppercase tracking-wide">Typical Situation</p>
                                <p className="text-xs text-[#64748b] leading-relaxed">{row.context}</p>
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
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none"/>
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(124,146,199,0.10),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(70,88,159,0.08),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-14">
              <span className="section-eyebrow-light">What We Build</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>Two Kinds of Builds.<br/>One Standard of Care.</h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">
                Whether it faces your customers or runs your operations, it gets the same
                discovery, the same design attention, and the same handover.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {buildKinds.map((p, i) => (
              <Reveal key={p.title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <Link to={p.href} className="block practice-card group h-full" style={{ padding: 32 }}>
                  <div className="practice-icon"><p.icon className="w-5 h-5 text-white"/></div>
                  <h3 className="practice-title" style={{ fontSize: "1.05rem" }}>{p.title}</h3>
                  <p className="practice-desc" style={{ fontSize: "0.85rem" }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ background: "rgba(124,146,199,0.10)", border: "1px solid rgba(124,146,199,0.28)", color: "#46589F" }}>{t}</span>
                    ))}
                  </div>
                  <span className="practice-link">Learn more <ArrowRight className="w-3.5 h-3.5"/></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT JOURNEY ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(124,146,199,0.12),transparent 70%)", filter: "blur(80px)" }}/>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(70,88,159,0.09),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <Reveal variant="left">
              <span className="section-eyebrow-light">The Road to Live</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-4" style={{ fontWeight: 700 }}>From "We Need Something"<br/>to "It's Live"</h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-8">
                Every build follows the same arc, even when the products couldn't be more
                different. Here's the road, and roughly how long each stretch takes.
              </p>
              <div className="flex flex-col gap-5">
                {maturityLevels.map((m, i) => (
                  <Reveal key={i} variant="left" delay={i * 80}>
                    <div className="flex items-center gap-4">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: m.color }}/>
                      <span className="text-sm font-bold text-[#0f172a] w-24 flex-shrink-0">{m.name}</span>
                      <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${(m.weeks / 12) * 100}%`, background: m.color }}/>
                      </div>
                      <span className="text-xs font-semibold text-[#94a3b8] w-14 text-right flex-shrink-0">{m.weeks} wks</span>
                    </div>
                    <p className="text-xs text-[#64748b] leading-relaxed ml-7 mt-1">{m.desc}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* RIGHT — animated journey path */}
            <Reveal variant="right" delay={120}>
              <div className="p-8 rounded-3xl border" style={{ background: "#ffffff", backdropFilter: "blur(12px)", borderColor: "rgba(124,146,199,0.28)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest mb-6">The Typical Arc</p>
                <JourneyPath/>
                <div className="mt-6 p-4 rounded-2xl" style={{ background: "rgba(124,146,199,0.08)", border: "1px solid rgba(124,146,199,0.24)" }}>
                  <p className="text-xs font-bold text-[#0f172a] mb-1">Not sure where you are on this curve?</p>
                  <p className="text-xs text-[#64748b] leading-relaxed">A 90-minute Discovery session will tell you. Free for qualified projects, and useful either way.</p>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold mt-2" style={{ color: "#46589F" }}>
                    Book free Discovery <ArrowRight className="w-3.5 h-3.5"/>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHY ANTUTIVE ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f4f6fb 60%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-50"/>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(124,146,199,0.10),transparent 70%)", filter: "blur(80px)" }}/>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(70,88,159,0.08),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light">Straight Answers</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-5" style={{ fontWeight: 700 }}>
                Why companies pick us,<br/><span className="grad-text-animated">in plain terms.</span>
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                ANTUTIVE AB is a Swedish Aktiebolag in Gothenburg, org. number 559576-7228.
                That's more than trivia. It means EU contracts, EU invoicing, and someone
                accountable in your time zone.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                It also means we build the Swedish way: carefully, transparently, and to
                last. Bring a full specification or a single sentence. We'll meet you
                wherever your idea currently is.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#46589F] group">
                About Antutive <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Reveal>

            <div className="flex flex-col gap-4">
              {statCards.map((s, i) => (
                <StatCard key={s.label} icon={s.icon} end={s.end} suffix={s.suffix} label={s.label} desc={s.desc} delay={i * 110}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM (dark) ── */}
      <EcosystemSection />

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="flip">
            <div className="cta-card">
              <div className="cta-orb cta-orb-1"/><div className="cta-orb cta-orb-2"/><div className="cta-orb cta-orb-3"/>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C92C7]/40 bg-[#7C92C7]/12 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#46589F]"/>
                  <span className="text-xs font-bold tracking-widest text-[#46589F] uppercase">No Pitch, Promise</span>
                </div>
                <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
                  Tell us what's missing.
                </h2>
                <p className="text-sm text-[#64748b] mb-10 max-w-md mx-auto leading-relaxed">
                  The first conversation is free and commits you to nothing. Bring a spec,
                  a sketch, or one honest sentence about what's broken. We'll tell you what
                  it would take to build, and whether we're the right people to build it.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact" className="cta-btn-primary">
                    Book a Discovery Call <ArrowRight className="w-4 h-4"/>
                  </Link>
                  <Link to="/products" className="cta-btn-secondary">Explore Our Products</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
