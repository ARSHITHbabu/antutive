import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Shield, Zap, Users, Globe, Building2, Award, Sparkles } from "lucide-react";
import { Reveal } from "../lib/scroll";

const A = "#6F3CC3";
const A2 = "#5A32A3";

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
    <div className="p-6 rounded-3xl" style={{ background: "rgba(111,60,195,0.06)", border: "1px solid rgba(111,60,195,0.20)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
      <div className="flex items-center gap-2 mb-5">
        <Building2 className="w-4 h-4" style={{ color: A }} />
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: A }}>Company Registration</p>
      </div>
      <div className="flex flex-col gap-0">
        {facts.map(({ label, value }, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b last:border-0"
            style={{ borderColor: "rgba(28,183,180,0.15)", animation: `fadeUp 0.5s ease ${i * 80}ms both` }}>
            <span className="text-xs text-[#94a3b8] uppercase tracking-wide font-semibold">{label}</span>
            <span className="text-xs font-bold text-[#0f172a]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const values = [
  { icon: Shield,   title: "Client Ownership First",      desc: "Every product we build belongs entirely to the client. Full IP transfer on delivery — no lock-in, no ongoing dependency on ANTUTIVE unless the client chooses it." },
  { icon: Award,    title: "Engineering Quality",          desc: "Senior engineers on every project. Thorough testing, clean code, and documented handover. Products built to last, not just to ship." },
  { icon: Zap,      title: "Speed as a Commitment",        desc: "3× faster delivery than traditional European development firms through distributed engineering — without compromising quality or compliance." },
  { icon: Users,    title: "Long-Term Partnership",        desc: "We build products and support them for years if clients want. Relationships matter more than single-project revenue." },
];

const differentiators = [
  { title: "Swedish Legal Entity",        detail: "Registered as ANTUTIVE AB (Org.nr 559576-7228) in Gothenburg, Västra Götalands län. Full Swedish Aktiebolag — local invoicing in SEK/EUR, VAT-registered, EU-compliant contracting for Swedish and EU clients." },
  { title: "End-to-End Product Delivery", detail: "From initial discovery and requirements gathering, through design and engineering, to deployment and support — ANTUTIVE handles the complete product lifecycle. Clients engage once and receive a production-ready product." },
  { title: "EU-Native Architecture",      detail: "All products designed and built for the EU regulatory environment. GDPR compliance, EU data residency, and regulatory requirements are addressed by design rather than as afterthoughts." },
  { title: "Full Ownership on Delivery",  detail: "Every product built by ANTUTIVE is delivered with full intellectual property transfer to the client. No vendor lock-in, no licence dependencies — the client owns the code, the infrastructure, and the product completely." },
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
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#f8fafc 0%,#eff6ff 50%,#faf5ff 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(111,60,195,0.10),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.08),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}14,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-[#0f172a]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6F3CC3]/20 bg-[#6F3CC3]/06 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>About ANTUTIVE AB</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                European Product<br />Engineering Company
              </h1>

              <p className="text-base text-[#334155] max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Founded in Gothenburg in 2026. A Swedish Aktiebolag building software products for European businesses — end-to-end, from requirement to delivery, with full IP ownership to the client.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Org.nr 559576-7228", "Gothenburg HQ", "EU Compliant", "Swedish AB", "Est. 2026"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border text-xs font-medium"
                    style={{ borderColor: "rgba(111,60,195,0.20)", background: "rgba(111,60,195,0.06)", color: "#475569" }}>{c}</span>
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
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#f1f5f9 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}0a,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}08,transparent 70%)`, filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}08` }}>Our Mission</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-5" style={{ fontWeight: 700 }}>
                Building Products<br />for European Businesses
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                European businesses need software products — whether that's a customer-facing application,
                an internal tool, or a complete digital platform. Many organisations have the requirements
                but lack the engineering capability to build what they need.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                ANTUTIVE AB exists to bridge that gap. We take business requirements and deliver
                production-ready software products — fully scoped, engineered, tested, and deployed.
                The client owns everything we build.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Our model is simple: a Swedish client-facing operation in Gothenburg backed by a
                distributed engineering team — delivering senior-quality products at the speed and
                economics European businesses need.
              </p>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="p-6 rounded-3xl border" style={{ borderColor: `${A}18`, background: "#ffffff", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="flex items-center gap-2 mb-5">
                  <Building2 className="w-4 h-4" style={{ color: A }} />
                  <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: A }}>Company Registration</h3>
                </div>
                <div className="grid grid-cols-1 gap-0">
                  {companyFacts.map(({ label, value }, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b last:border-0"
                      style={{ borderColor: `${A}12` }}>
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

      {/* ── VALUES ── */}
      <section id="values" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#faf5ff 0%,#f5f3ff 50%,#faf5ff 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}0c,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}08,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}08` }}>Values</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>What We Stand For</h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">Four principles that define how we build products and work with our clients.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: `${A}18`, backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
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

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#f1f5f9 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}0e,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}0a,transparent 70%)`, filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">What Sets Us Apart</span>
            <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>Structural Advantages</h2>
            <p className="text-sm text-[#64748b] mt-3 max-w-lg mx-auto">The combination of Swedish entity, distributed engineering, and end-to-end product delivery creates advantages that generic development agencies cannot replicate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((d, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", border: "1px solid rgba(111,60,195,0.14)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: A }} />
                    <h3 className="text-sm font-bold text-[#0f172a]">{d.title}</h3>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed pl-7">{d.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EU COMPLIANCE ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#faf5ff 0%,#f5f3ff 50%,#faf5ff 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}0a,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}08,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}08` }}>Regulatory Position</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>Why European Businesses Choose Us</h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">Every product we build is designed for the EU regulatory environment and delivered with complete client ownership.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "EU-Compliant Products",  desc: "Every product we build meets EU regulatory requirements — GDPR compliance, data residency, and relevant sector regulations addressed by design." },
              { icon: Globe,  title: "Local EU Presence",     desc: "A registered Swedish Aktiebolag in Gothenburg. Local invoicing, EU-based contracting, and Swedish professional standards — the trust foundation European clients need." },
              { icon: Award,  title: "Full IP Ownership",     desc: "All intellectual property created during development transfers fully to the client on delivery. You own the product, the code, and the infrastructure — completely." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${A}18`, background: "#ffffff", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
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
        style={{ background: "linear-gradient(135deg,#f5f3ff 0%,#f0fdfa 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}0c,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}08,transparent 70%)`, filter: "blur(50px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A}28`, background: `${A}08` }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Start the Conversation</span>
              </div>
              <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>Let's Build Together</h2>
              <p className="text-sm text-[#64748b] mb-8 leading-relaxed">Have a product requirement? Book a free Discovery session — our first step in the ANTUTIVE Delivery Method, offered free for qualified projects.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="cta-btn-primary" style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/products" className="cta-btn-secondary" style={{ borderColor: `${A}40`, color: A }}>
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
