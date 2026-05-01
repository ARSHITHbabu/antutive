import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Shield, Zap, Users, Globe, Building2, Award, Sparkles } from "lucide-react";
import { Reveal } from "../lib/scroll";

const A = "#6366f1";
const A2 = "#4338ca";
const D  = "#1e1b4b";

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
    <div className="p-6 rounded-3xl" style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.22)", backdropFilter: "blur(12px)" }}>
      <div className="flex items-center gap-2 mb-5">
        <Building2 className="w-4 h-4 text-indigo-300" />
        <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Company Registration</p>
      </div>
      <div className="flex flex-col gap-0">
        {facts.map(({ label, value }, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b last:border-0"
            style={{ borderColor: "rgba(99,102,241,0.15)", animation: `fadeUp 0.5s ease ${i * 80}ms both` }}>
            <span className="text-xs text-white/40 uppercase tracking-wide font-semibold">{label}</span>
            <span className="text-xs font-bold text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const values = [
  { icon: Shield,   title: "Data Sovereignty First",      desc: "Every solution is architected so client data stays within the EU and under client control — non-negotiable, not a feature." },
  { icon: Award,    title: "Engineering Excellence",       desc: "Senior-level expertise on every engagement. No juniors learning on client projects. Quality standards that reflect Swedish professional norms." },
  { icon: Zap,      title: "Speed as a Value Proposition", desc: "3× faster delivery than traditional Nordic consultancies through distributed engineering — without sacrificing compliance or quality." },
  { icon: Users,    title: "SME Partnership Mindset",     desc: "Sized for SMEs. Long-term partnerships, not one-off projects. Client success is the only metric that creates repeat business." },
];

const differentiators = [
  { title: "Swedish Legal Entity",     detail: "Registered as ANTUTIVE AB (Org.nr 559576-7228) in Gothenburg, Västra Götalands län. Full Swedish Aktiebolag — local invoicing in SEK/EUR, VAT-registered, EU-compliant contracting for Swedish and EU clients." },
  { title: "Dual Architecture Model",  detail: "Client-facing operations from Gothenburg. Engineering execution through distributed specialist teams. The result: senior-quality output at accelerated delivery timelines — 3× faster than traditional Swedish consultancies." },
  { title: "EU AI Act Readiness",      detail: "All solutions designed for compliance ahead of EU AI Act enforcement (August 2026). Clients who engage now build systems compliant by design rather than requiring expensive retrofits." },
  { title: "Full-Stack AI Capability", detail: "From generative AI and data engineering to growth automation and sovereign AI workspaces — ANTUTIVE covers the complete AI value chain. Clients engage once and expand as needs grow." },
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
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#030608 0%,#06091a 50%,#0a0618 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(67,56,202,0.10),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}22,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                <span className="text-xs font-bold tracking-widest uppercase">About ANTUTIVE AB</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                Swedish AI Engineering<br />for European Business
              </h1>

              <p className="text-base text-white/80 max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Founded in Gothenburg in 2026. A Swedish Aktiebolag delivering AI engineering, strategic consulting, and sovereign SaaS products to European SMEs at 3× the speed of traditional consultancies.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Org.nr 559576-7228", "Gothenburg HQ", "EU Compliant", "Swedish AB", "Est. 2026"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border border-white/20 bg-white/08 text-white/75 text-xs font-medium backdrop-blur-sm">{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary" style={{ color: D }}>Work With Us</Link>
                <Link to="#values" className="hero-btn-secondary">Our Values</Link>
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

            <div className="hidden lg:block" style={{ animation: "fadeUp 0.8s ease 0.3s both" }}>
              <CompanyHeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}12,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}10,transparent 70%)`, filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>Our Mission</span>
              <h2 className="section-h2 text-white mt-3 mb-5" style={{ fontWeight: 700 }}>
                Making Advanced AI<br />Accessible to European SMEs
              </h2>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                European SMEs face compounding pressure: they need AI and data capabilities to remain competitive,
                but lack the engineering depth to build them securely — especially with EU AI Act enforcement
                beginning August 2026. Simultaneously, they need AI-native marketing to stay visible in a
                market increasingly mediated by AI search engines.
              </p>
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                ANTUTIVE AB is the engineering partner that eliminates both gaps. We deliver custom AI solutions,
                analytics infrastructure, growth automation, and ready-to-deploy SaaS products with Swedish-grade
                trust and full EU regulatory compliance.
              </p>
              <p className="text-sm text-white/55 leading-relaxed">
                Our model is straightforward: a Swedish client-facing operation in Gothenburg backed by a
                distributed specialist engineering capability — producing senior-quality output at the speed
                and economics that European SMEs need to compete.
              </p>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="p-6 rounded-3xl border" style={{ borderColor: `${A}22`, background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <Building2 className="w-4 h-4" style={{ color: A }} />
                  <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wide">Company Registration</h3>
                </div>
                <div className="grid grid-cols-1 gap-0">
                  {companyFacts.map(({ label, value }, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b last:border-0"
                      style={{ borderColor: `${A}18` }}>
                      <span className="text-xs font-semibold text-white/40 uppercase tracking-wide">{label}</span>
                      <span className="text-xs font-bold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section id="values" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#030608 0%,#06091a 50%,#0a0618 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}14,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}10,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>Values</span>
              <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>What We Stand For</h2>
              <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">Four principles that define how we work with clients and build our products.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: `${A}20`, backdropFilter: "blur(10px)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-3">{title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}16,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}12,transparent 70%)`, filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">What Sets Us Apart</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Structural Advantages</h2>
            <p className="text-sm text-white/55 mt-3 max-w-lg mx-auto">The combination of Swedish entity, distributed engineering, and full-stack AI capability creates advantages that generic consultancies cannot replicate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((d, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(12px)" }}>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-indigo-300" />
                    <h3 className="text-sm font-bold text-white">{d.title}</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed pl-7">{d.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EU COMPLIANCE ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#030608 0%,#06091a 50%,#0a0618 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}12,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}10,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>Regulatory Position</span>
              <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>EU Compliance Built In</h2>
              <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">Every engagement is designed for the regulatory environment European businesses operate in — not retrofitted to it.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "GDPR Native",        desc: "Privacy and data protection by design and by default. Data processing agreements available for all client engagements. EU data residency guaranteed." },
              { icon: Globe,  title: "EU AI Act Ready",    desc: "All AI solutions designed for compliance before the August 2026 enforcement deadline. Risk classification, documentation, and transparency requirements addressed from day one." },
              { icon: Award,  title: "Swedish Trust Mark", desc: "ANTUTIVE AB is a registered Swedish Aktiebolag. Swedish professional norms, local invoicing, and legal accountability — the trust foundation EU clients expect." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${A}20`, background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-3">{title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
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
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Start the Conversation</span>
              </div>
              <h2 className="section-h2 text-white mb-4" style={{ fontWeight: 700 }}>Let's Work Together</h2>
              <p className="text-sm text-white/55 mb-8 leading-relaxed">Ready to start your AI transformation? Book a Business Understanding session — our first step in the ANTUTIVE Delivery Method, offered free for qualified prospects.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary" style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="cta-btn-secondary" style={{ borderColor: `${A}40`, color: A }}>
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
