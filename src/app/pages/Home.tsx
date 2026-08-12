import { Link } from "react-router";
import {
  ArrowRight, ArrowUpRight, Sparkles, Building2, ShieldCheck, Cpu, Boxes,
  Lightbulb, Workflow, Database, Rocket,
} from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, HatchAccent, WaveDivider } from "../components/Decor";
import { usePageMeta, PRODUCT_DESCRIPTION } from "../lib/seo";
import { metaFor } from "../lib/routeMeta";
import { LineArtScene, LineArtFlourish } from "../components/LineArt";
import { capabilities, WAITLIST_URL, OWNERSHIP_LINE } from "../content/famant";

/* ── floating chips — company facts and product-craft signals ── */
const chips = [
  { Icon: Boxes,       label: "Built & operated in-house", top: "13%", left: "3.5%",  cls: "fi-a", d: 0 },
  { Icon: Sparkles,    label: "AI-native products",        top: "7%",  left: "28%",   cls: "fi-b", d: 1.9 },
  { Icon: ShieldCheck, label: "Honest about stage",        top: "5%",  right: "28%",  cls: "fi-a", d: 0.4 },
  { Icon: Building2,   label: "Gothenburg, Sweden",        top: "10%", right: "5%",   cls: "fi-c", d: 1.1 },
  { Icon: Cpu,         label: "Products, not projects",    top: "72%", right: "3%",   cls: "fi-a", d: 1.7 },
  { Icon: Workflow,    label: "Designed to evolve",        top: "88%", right: "22%",  cls: "fi-b", d: 1.4 },
];

/* ── data network svg (hero) ── */
function DataNetworkVisual() {
  return (
    <div className="company-visual-stage relative w-full flex items-center justify-center select-none" style={{ height: 400 }}>
      <svg viewBox="0 0 420 420" className="w-full max-w-[400px]" aria-hidden="true" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="cG"><stop offset="0%" stopColor="#46589F" stopOpacity=".45"/><stop offset="45%" stopColor="#7C92C7" stopOpacity=".18"/><stop offset="100%" stopColor="#2E3B72" stopOpacity="0"/></radialGradient>
          <radialGradient id="gG"><stop offset="0%" stopColor="#7C92C7" stopOpacity=".22"/><stop offset="100%" stopColor="#46589F" stopOpacity="0"/></radialGradient>
          <filter id="f4"><feGaussianBlur stdDeviation="4"/></filter>
          <filter id="f2"><feGaussianBlur stdDeviation="2"/></filter>
          <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dce5ff" stopOpacity=".78"/><stop offset="1" stopColor="#8d83f4" stopOpacity=".28"/></linearGradient>
          <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#46589F" stopOpacity=".38"/><stop offset="1" stopColor="#202d68" stopOpacity=".16"/></linearGradient>
          <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7C92C7" stopOpacity=".48"/><stop offset="1" stopColor="#6B62F1" stopOpacity=".2"/></linearGradient>
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
        <g className="dn-core" filter="url(#f2)">
          <path d="M210 179 238 195 210 211 182 195Z" fill="url(#cubeTop)" stroke="rgba(255,255,255,.8)" strokeWidth="1"/>
          <path d="M182 195 210 211 210 242 182 226Z" fill="url(#cubeLeft)" stroke="rgba(70,88,159,.55)" strokeWidth="1"/>
          <path d="M210 211 238 195 238 226 210 242Z" fill="url(#cubeRight)" stroke="rgba(70,88,159,.55)" strokeWidth="1"/>
          <circle cx="210" cy="210" r="6" fill="#ffffff" opacity=".95"/>
        </g>
      </svg>
    </div>
  );
}

/* honest status pill used on every capability card */
export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: "rgba(124,146,199,0.12)", border: "1px solid rgba(124,146,199,0.35)", color: "#46589F" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#46589F" }} aria-hidden="true" />
      {status}
    </span>
  );
}

/* what Antutive builds — company category, not one product */
const buildThemes = [
  {
    Icon: Lightbulb,
    title: "AI-native by design",
    desc: "We build products where the intelligence is the product, not a feature bolted on afterwards. If the AI came out and the product still worked, we'd build something else.",
  },
  {
    Icon: Workflow,
    title: "Products that carry real work",
    desc: "We start from problems people actually live with — the everyday coordination, interpretation and follow-through that today's software leaves to humans.",
  },
  {
    Icon: Boxes,
    title: "Built and operated, not handed over",
    desc: "Antutive designs, builds and runs its own products for the long term. Owning the product end-to-end is the company's model — not client delivery.",
  },
];

/* ── Antutive × Data Delimited ecosystem section (dark) ── */
const stars = [
  { top: "8%",  left: "12%", s: 3, d: 0   }, { top: "16%", left: "78%", s: 2, d: 1.2 },
  { top: "22%", left: "35%", s: 2, d: 2.1 }, { top: "12%", left: "55%", s: 3, d: 0.6 },
  { top: "30%", left: "90%", s: 2, d: 1.8 }, { top: "42%", left: "6%",  s: 2, d: 2.6 },
  { top: "55%", left: "16%", s: 3, d: 0.9 }, { top: "62%", left: "88%", s: 3, d: 1.5 },
  { top: "74%", left: "40%", s: 2, d: 2.2 }, { top: "80%", left: "70%", s: 2, d: 0.3 },
  { top: "88%", left: "22%", s: 3, d: 1.1 }, { top: "68%", left: "58%", s: 2, d: 2.9 },
  { top: "36%", left: "68%", s: 2, d: 0.2 }, { top: "50%", left: "45%", s: 2, d: 1.9 },
];

function EcosystemSection() {
  return (
    <section className="eco-dark relative overflow-hidden">
      <LineArtScene scene="ecosystem" tone="light" className="line-art--ecosystem-bg" meaningful />
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <WaveDivider fill="#eef2fa" />
      </div>
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true" style={{ transform: "scale(-1)" }}>
        <WaveDivider fill="#eef2fa" />
      </div>
      <div className="py-32">
        {stars.map((s, i) => (
          <span key={i} className="star-dot" aria-hidden="true"
            style={{ top: s.top, left: s.left, width: s.s, height: s.s, animationDelay: `${s.d}s` }}/>
        ))}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(rgba(169,184,220,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }}/>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="section-eyebrow" style={{ color: "#A9B8DC", borderColor: "rgba(169,184,220,0.35)", background: "rgba(124,146,199,0.12)" }}>The Ecosystem</span>
              <h2 className="section-h2 mt-4 mb-5" style={{ fontWeight: 700, color: "#F3F6FC" }}>
                Antutive is one half<br/><span className="grad-text-light">of a bigger idea.</span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(199,210,236,0.75)" }}>
                Turning modern AI into products people trust takes two kinds of strength:
                deep data and intelligence foundations, and the craft of shaping them into
                real products. Antutive is the product side. Data Delimited, our sister
                company, is the foundation side.
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
                  Data platforms, analytics, AI and cloud engineering. Data Delimited
                  works on the foundations intelligence runs on: data that flows, models
                  that work, infrastructure that holds.
                </p>
                <p className="text-xs font-bold mt-6 uppercase tracking-widest" style={{ color: "rgba(199,210,236,0.55)" }}>Data & Intelligence</p>
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
                <h3 className="text-lg font-bold mb-2" style={{ color: "#F3F6FC", fontFamily: "Sora, sans-serif" }}>Turns intelligence into products</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(199,210,236,0.72)" }}>
                  Antutive shapes that capability into AI-first products people use —
                  designed around real problems, built in-house, operated for the long
                  term. Famant is the first.
                </p>
                <p className="text-xs font-bold mt-6 uppercase tracking-widest" style={{ color: "#A9B8DC" }}>Products & Experience</p>
                <span className="eco-visit-pill" style={{ background: "rgba(124,146,199,0.22)" }}>
                  You are here
                </span>
              </div>
            </Reveal>
          </div>

          {/* bottom highlight */}
          <Reveal variant="scale" delay={120}>
            <div className="eco-dark-highlight max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-xl font-bold leading-snug" style={{ color: "#F3F6FC", fontFamily: "Sora, sans-serif" }}>
                Data Delimited builds the intelligence.<br className="sm:hidden"/>
                <span className="grad-text-light"> Antutive turns it into products.</span>
              </p>
              <p className="text-sm mt-3" style={{ color: "rgba(199,210,236,0.65)" }}>
                Two companies, one ecosystem — from foundations to finished products.
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

export function Home() {
  usePageMeta(metaFor("/"));

  const heroFacts = [
    { value: "Products", label: "Built in-house" },
    { value: "Famant",   label: "First flagship product" },
    { value: "Gothenburg", label: "Registered in Sweden" },
    { value: "Org.nr",     label: "559576-7228" },
  ];

  return (
    <div>
      {/* ── 1 · HERO — Antutive, the company ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "min(92vh, 860px)" }}>
        <LineArtScene scene="company" className="line-art--hero-edge" />
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
                <span className="text-xs font-bold tracking-widest uppercase text-[#46589F]">AI-First Product Company · Gothenburg</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp .8s ease .1s both" }}>
                We build products<br/>
                <span className="grad-text-animated">where AI does the heavy lifting.</span>
              </h1>
              <LineArtFlourish />

              <p className="text-base md:text-lg mb-4 text-[#334155] max-w-lg leading-relaxed"
                style={{ animation: "fadeUp .8s ease .25s both" }}>
                Antutive is a Swedish product company that imagines, builds and operates its
                own AI-first products — software designed around intelligence from the first
                sketch, made to carry the everyday work people shouldn't have to.
              </p>

              <p className="text-sm mb-8 text-[#64748b] max-w-lg leading-relaxed"
                style={{ animation: "fadeUp .8s ease .32s both" }}>
                Our first flagship product is Famant, an AI assistant for family life —
                in development, with the waitlist open.
              </p>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp .8s ease .4s both" }}>
                <Link to="/products" className="hero-btn-primary">Explore our products</Link>
                <Link to="/about" className="hero-btn-secondary">About Antutive</Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroFacts.map((m, i) => (
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

      {/* ── 2 · WHAT WE BUILD — company philosophy ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#ffffff 0%,#f8fafc 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-50"/>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(124,146,199,0.12),transparent 70%)", filter: "blur(70px)" }}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="section-eyebrow-light">What We Build</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>
                One company.<br/>One way of building products.
              </h2>
              <p className="text-sm text-[#64748b] mt-3">
                Antutive exists to create products, not projects. Three principles decide
                what we take on and how we build it.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buildThemes.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} variant={["left","up","right"][i] as any} delay={i * 90}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>
                    <Icon className="w-5 h-5 text-white"/>
                  </div>
                  <h3 className="text-sm font-bold text-[#0f172a] mb-3">{title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 · PRODUCT PORTFOLIO ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none"/>
        <DotMatrix style={{ top: 60, right: 30 }} />
        <HatchAccent style={{ bottom: 50, left: 30 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span className="section-eyebrow-light">Products</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>
                A portfolio that grows<br/>only when something is real.
              </h2>
              <p className="text-sm text-[#64748b] mt-3">
                Antutive is structured to create and operate multiple products over time.
                Products appear here when they exist — never before.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 max-w-5xl mx-auto">
            {/* Famant — current flagship */}
            <Reveal variant="left" delay={60}>
              <Link to="/famant" className="block p-8 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1 group"
                style={{ background: "linear-gradient(150deg,#181A4D 0%,#242767 60%,#33368a 100%)", borderColor: "rgba(107,98,241,0.45)", boxShadow: "0 16px 48px rgba(36,39,103,0.35)", textDecoration: "none" }}>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#C9C5FF" }}>Flagship · First product</span>
                  <StatusBadge status="In development"/>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Famant</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#A9A3FF" }}>AI-powered family management platform</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(226,229,255,0.75)" }}>
                  One shared context for a family's schedules, tasks and documents, with an
                  assistant that proposes the next step and acts only on confirmation.
                  Pre-launch — the waitlist is open.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1" style={{ color: "#C9C5FF" }}>
                  Meet Famant <ArrowRight className="w-4 h-4"/>
                </span>
              </Link>
            </Reveal>

            {/* Future room — honest, no fake cards */}
            <Reveal variant="right" delay={140}>
              <div className="p-8 rounded-3xl border h-full flex flex-col"
                style={{ background: "rgba(124,146,199,0.06)", borderColor: "rgba(124,146,199,0.35)", borderStyle: "dashed" }}>
                <span className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#64748b" }}>What comes next</span>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Room for more.</h3>
                <p className="text-sm text-[#64748b] leading-relaxed flex-1">
                  The company is built so new products can live here — same craft, same
                  AI-first approach, same honesty about stage. We announce products when
                  they're real, not when they're slideware.
                </p>
                <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold mt-6 group" style={{ color: "#46589F" }}>
                  Our product philosophy <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · FAMANT SPOTLIGHT — one contained product section ── */}
      <section className="famant-section py-24 relative overflow-hidden">
        <Noise />
        <div className="famant-orbit" style={{ width: 420, height: 420, top: -140, right: -120, background: "radial-gradient(circle, rgba(107,98,241,0.20), transparent 70%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <div className="famant-hero-panel p-8 sm:p-12">
              <Noise />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                    style={{ border: "1px solid rgba(107,98,241,0.5)", background: "rgba(107,98,241,0.18)" }}>
                    <Sparkles className="w-3.5 h-3.5" style={{ color: "#2EC4B6" }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#C9C5FF" }}>Product Spotlight · Famant</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                    The first product from Antutive.
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(226,229,255,0.78)" }}>
                    {PRODUCT_DESCRIPTION}
                  </p>
                  <p className="text-xs mb-8" style={{ color: "rgba(226,229,255,0.55)" }}>
                    {OWNERSHIP_LINE} Famant is in development and pre-launch — capabilities
                    carry honest status labels, and real screenshots and a recorded demo will
                    be published as they become real.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link to="/famant" className="famant-cta-brand" style={{ textDecoration: "none" }}>
                      Explore Famant <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="famant-cta-ghost"
                      style={{ borderColor: "rgba(201,197,255,0.45)", color: "#C9C5FF", background: "rgba(107,98,241,0.12)" }}>
                      Join the waitlist <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs mt-4" style={{ color: "rgba(226,229,255,0.45)" }}>
                    Waitlist continues to famant.com — Famant's product site.
                  </p>
                </div>

                {/* compact statused capabilities — the AI-evidence, kept concise */}
                <div className="flex flex-col gap-3">
                  {capabilities.map(({ Icon, title, outcome, status }) => (
                    <div key={title} className="flex items-center gap-4 p-4 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(107,98,241,0.30)" }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#6B62F1,#8B7CF8)" }}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white">{title}</p>
                        <p className="text-xs truncate" style={{ color: "rgba(226,229,255,0.6)" }}>{outcome}</p>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                        style={{ background: "rgba(107,98,241,0.20)", border: "1px solid rgba(107,98,241,0.45)", color: "#C9C5FF" }}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · HOW WE BUILD — company technology philosophy ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left">
              <span className="section-eyebrow-light">How We Build</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-4" style={{ fontWeight: 700 }}>
                Mechanism-first,<br/><span className="grad-text-animated">confirmation-first.</span>
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                Every Antutive product is designed as model-driven behaviour with a human in
                the loop: the intelligence reads, reasons and proposes — the person confirms
                before anything happens. And we describe our products in mechanisms and
                honest statuses, never in adjectives.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                We're finalising our cloud and model architecture and will publish it on the
                technology page as it's confirmed. We publish measured results only once
                we've measured them.
              </p>
              <Link to="/technology" className="inline-flex items-center gap-2 text-sm font-semibold text-[#46589F] group">
                Read about our technology <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <div className="p-8 rounded-3xl border" style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.28)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest mb-6">One flow from Famant, end to end</p>
                <ol className="flex flex-col gap-4">
                  {[
                    ["Input",        "You photograph a birthday invitation."],
                    ["Understanding","The assistant is designed to read it — date, time, place, child."],
                    ["Proposal",     "It proposes the calendar event, a gift reminder and an RSVP task."],
                    ["Confirmation", "Nothing is added until a family member confirms."],
                  ].map(([step, desc], i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                        style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>{i + 1}</span>
                      <div>
                        <p className="text-sm font-bold text-[#0f172a]">{step}</p>
                        <p className="text-xs text-[#64748b] mt-0.5">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: "rgba(124,146,199,0.24)" }}>
                  <StatusBadge status="In development"/>
                  <span className="text-xs text-[#94a3b8]">The pattern every Antutive product follows.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · ECOSYSTEM — Antutive × Data Delimited ── */}
      <EcosystemSection />

      {/* ── 7 · COMPANY STRIP — verifiable identity ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f4f6fb 60%,#eef2fa 100%)" }}>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>
                  <Building2 className="w-5 h-5 text-white"/>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f172a]">ANTUTIVE AB · Org.nr 559576-7228</p>
                  <p className="text-xs text-[#64748b] mt-1">
                    Gothenburg, Sweden · A registry-verifiable company building and
                    operating its own products.
                  </p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#46589F] whitespace-nowrap group">
                About Antutive <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · FINAL CTA — company-level ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="flip">
            <div className="cta-card">
              <div className="cta-orb cta-orb-1"/><div className="cta-orb cta-orb-2"/><div className="cta-orb cta-orb-3"/>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C92C7]/40 bg-[#7C92C7]/12 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#46589F]"/>
                  <span className="text-xs font-bold tracking-widest text-[#46589F] uppercase">Built for the Long Term</span>
                </div>
                <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>
                  Follow what we're building.
                </h2>
                <p className="text-sm text-[#64748b] mb-10 max-w-md mx-auto leading-relaxed">
                  Antutive builds its products in the open the honest way: statuses, not
                  slogans. Explore the portfolio, meet Famant, or get in touch.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/products" className="cta-btn-primary">
                    Explore our products <ArrowRight className="w-4 h-4"/>
                  </Link>
                  <Link to="/contact" className="cta-btn-secondary">Contact Antutive</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
