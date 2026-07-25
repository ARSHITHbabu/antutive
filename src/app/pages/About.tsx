import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, CheckCircle2, Shield, Zap, Users, Globe, Building2, Award, Sparkles, Database, Rocket } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb, HatchAccent } from "../components/Decor";

const A  = "#46589F";
const A2 = "#2E3B72";
const P  = "#7C92C7";

const heroMetrics = [
  { value: "GBG",  label: "Gothenburg HQ"   },
  { value: "AB",   label: "Swedish Entity"  },
  { value: "2026", label: "Founded"         },
  { value: "EU",   label: "AI Act Ready"    },
];

function CompanyHeroCard() {
  const facts = [
    { label: "Company",    value: "ANTUTIVE AB"              },
    { label: "Org. No.",   value: "559576-7228"              },
    { label: "Legal Form", value: "Swedish Aktiebolag (AB)"  },
    { label: "Registered", value: "Gothenburg, VGR"          },
    { label: "Founded",    value: "2026"                     },
    { label: "Invoicing",  value: "SEK / EUR (VAT-reg.)"     },
  ];
  return (
    <div className="p-6 rounded-3xl" style={{ background: "rgba(124,146,199,0.08)", border: "1px solid rgba(124,146,199,0.30)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
      <div className="flex items-center gap-2 mb-5">
        <Building2 className="w-4 h-4" style={{ color: A }} />
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: A }}>Company Registration</p>
      </div>
      <div className="flex flex-col gap-0">
        {facts.map(({ label, value }, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b last:border-0"
            style={{ borderColor: "rgba(124,146,199,0.20)", animation: `fadeUp 0.5s ease ${i * 80}ms both` }}>
            <span className="text-xs text-[#94a3b8] uppercase tracking-wide font-semibold">{label}</span>
            <span className="text-xs font-bold text-[#0f172a]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const values = [
  { icon: Shield,   title: "Client Ownership First",      desc: "Every product we build belongs entirely to the client. Full IP transfer on delivery means no lock-in and no ongoing dependency on Antutive, unless you choose it." },
  { icon: Award,    title: "Engineering Quality",          desc: "Senior engineers on every project. Thorough testing, clean code, and a documented handover. We build products to last, not just to ship." },
  { icon: Zap,      title: "Speed as a Commitment",        desc: "3× faster delivery than traditional European development firms through distributed engineering, without compromising quality or compliance." },
  { icon: Users,    title: "Long-Term Partnership",        desc: "We build products and support them for years if clients want us to. Relationships matter more to us than single-project revenue." },
];

const differentiators = [
  { title: "Swedish Legal Entity",        detail: "Registered as ANTUTIVE AB (Org.nr 559576-7228) in Gothenburg, Västra Götalands län. A full Swedish Aktiebolag with local invoicing in SEK/EUR, VAT registration, and EU-compliant contracting for Swedish and EU clients." },
  { title: "End-to-End Product Delivery", detail: "From initial discovery and requirements gathering, through design and engineering, to deployment and support, Antutive handles the complete product lifecycle. You engage once and receive a production-ready product." },
  { title: "EU-Native Architecture",      detail: "Every product is designed and built for the EU regulatory environment. GDPR compliance, EU data residency, and regulatory requirements are addressed by design rather than bolted on later." },
  { title: "Full Ownership on Delivery",  detail: "Every product we build is delivered with full intellectual property transfer to the client. No vendor lock-in and no licence dependencies. You own the code, the infrastructure, and the product completely." },
];

const companyFacts = [
  { label: "Company Name",     value: "ANTUTIVE AB"                        },
  { label: "Organisation No.", value: "559576-7228"                        },
  { label: "Legal Form",       value: "Swedish Aktiebolag (AB)"            },
  { label: "Share Capital",    value: "25,000 SEK"                         },
  { label: "Registered",       value: "Gothenburg, Västra Götalands län"   },
  { label: "Founded",          value: "2026"                               },
  { label: "Invoicing",        value: "SEK / EUR (VAT-registered)"         },
  { label: "EU AI Act",        value: "Compliant by design (August 2026)"  },
];

export function About() {
  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(56vh, 640px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <Noise />
        <AuroraOrb size={420} color="rgba(70,88,159,0.15)" style={{ top: -140, right: -110 }} />
        <AuroraOrb size={320} color="rgba(124,146,199,0.15)" delay={6} style={{ bottom: -100, left: -80 }} />
        <RingDecor spin size={340} style={{ top: -90, right: "12%", opacity: 0.7 }} />
        <DotMatrix style={{ bottom: 26, left: 18 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-[#0f172a]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm mb-6"
                style={{ borderColor: `${P}50`, background: `${P}14`, animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>About Antutive</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                The product team<br /><span className="grad-text">behind your product</span>
              </h1>

              <p className="text-base text-[#334155] max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Founded in Gothenburg in 2026, ANTUTIVE AB is a Swedish Aktiebolag that builds
                software products for European businesses. End-to-end, from requirement to
                delivery, with full IP ownership passing to the client.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Org.nr 559576-7228", "Gothenburg HQ", "EU Compliant", "Swedish AB", "Est. 2026"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border text-xs font-medium"
                    style={{ borderColor: "rgba(124,146,199,0.32)", background: "rgba(124,146,199,0.08)", color: "#475569" }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary">Work With Us</Link>
                <Link to="#values" className="hero-btn-secondary">Our Values</Link>
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

            <div className="hidden lg:block" style={{ animation: "fadeUp 0.8s ease 0.3s both" }}>
              <CompanyHeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}0f,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${P}14,transparent 70%)`, filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-5" style={{ fontWeight: 700 }}>
                Bridging the Gap Between<br />Requirement and Reality
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                European businesses need software products, whether that's a customer-facing
                application, an internal tool, or a complete digital platform. Many
                organisations know exactly what they need. What they lack is the engineering
                capability to build it.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                Antutive exists to close that gap. We take business requirements and deliver
                production-ready software products, fully scoped, engineered, tested, and
                deployed. And the client owns everything we build.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Our model is simple: a Swedish client-facing operation in Gothenburg backed
                by a distributed engineering team, delivering senior-quality products at the
                speed and economics European businesses need.
              </p>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="p-6 rounded-3xl border" style={{ borderColor: `${P}35`, background: "#ffffff", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <Building2 className="w-4 h-4" style={{ color: A }} />
                  <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: A }}>Company Registration</h3>
                </div>
                <div className="grid grid-cols-1 gap-0">
                  {companyFacts.map(({ label, value }, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b last:border-0"
                      style={{ borderColor: `${P}22` }}>
                      <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">{label}</span>
                      <span className="text-xs font-bold text-[#0f172a]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM NOTE ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#eef2fa 0%,#f8fafc 60%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="eco-highlight relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center">
                <div className="flex items-center gap-3" aria-hidden="true">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#334155,#64748b)" }}>
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <svg viewBox="0 0 48 24" className="w-12 h-6" style={{ overflow: "visible" }}>
                    <line x1="0" y1="12" x2="48" y2="12" className="eco-connector-line" />
                    <circle cx="24" cy="12" r="4" fill={A} className="eco-pulse-dot" />
                  </svg>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg,${A},${P})` }}>
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: A }}>Part of the Data Delimited Ecosystem</p>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    Antutive works alongside Data Delimited, our sister company, which builds modern
                    data, analytics, AI, and cloud foundations. We take what those foundations make
                    possible and turn it into products, AI-powered experiences, and measurable growth.
                    Two teams, one handoff, no gap in between.
                  </p>
                  <a href="https://datadelimited.com/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold mt-3 group" style={{ color: A }}>
                    Visit datadelimited.com <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section id="values" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}10,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${P}14,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow">Values</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>What We Stand For</h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">Four principles that define how we build products and how we treat the people we build them for.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: `${P}35`, backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `linear-gradient(135deg,${A},${P})` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0f172a] mb-3">{title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS (dark band) ── */}
      <section className="dark-band py-24 relative overflow-hidden">
        <Noise />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(rgba(169,184,220,0.05) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <RingDecor size={400} style={{ top: -150, right: -130, borderColor: "rgba(169,184,220,0.14)", opacity: 0.8 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: "#A9B8DC", borderColor: "rgba(169,184,220,0.35)", background: "rgba(124,146,199,0.12)" }}>What Sets Us Apart</span>
            <h2 className="section-h2 mt-3" style={{ fontWeight: 700, color: "#F3F6FC" }}>Structural Advantages</h2>
            <p className="text-sm mt-3 max-w-lg mx-auto" style={{ color: "rgba(199,210,236,0.7)" }}>A Swedish entity, distributed engineering, and end-to-end product delivery combine into advantages that generic development agencies simply can't replicate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((d, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="dark-band-card">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#A9B8DC" }} />
                    <h3 className="text-sm font-bold" style={{ color: "#F3F6FC" }}>{d.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed pl-7" style={{ color: "rgba(199,210,236,0.68)" }}>{d.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EU COMPLIANCE ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}0f,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${P}12,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow">Regulatory Position</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>Why European Businesses Choose Us</h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">Every product we build is designed for the EU regulatory environment and delivered with complete client ownership.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "EU-Compliant Products",  desc: "Every product meets EU regulatory requirements. GDPR compliance, data residency, and relevant sector regulations are addressed by design." },
              { icon: Globe,  title: "Local EU Presence",     desc: "A registered Swedish Aktiebolag in Gothenburg. Local invoicing, EU-based contracting, and Swedish professional standards give European clients a trust foundation they can verify." },
              { icon: Award,  title: "Full IP Ownership",     desc: "All intellectual property created during development transfers fully to the client on delivery. You own the product, the code, and the infrastructure. Completely." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${P}35`, background: "#ffffff", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `linear-gradient(135deg,${A},${P})` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0f172a] mb-3">{title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}10,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${P}12,transparent 70%)`, filter: "blur(50px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${P}45`, background: `${P}12` }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Start the Conversation</span>
              </div>
              <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>Let's Build Together</h2>
              <p className="text-sm text-[#64748b] mb-8 leading-relaxed">Have a product requirement? Book a free Discovery session. It's the first step of the Antutive Delivery Method, offered free for qualified projects.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/products" className="cta-btn-secondary">
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
