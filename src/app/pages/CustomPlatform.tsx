import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Lock, Shield, Cpu, Server, Users, Settings, FileText, Database, Layers, Globe, Code2, Sparkles } from "lucide-react";
import { Reveal } from "../lib/scroll";

const A = "#6F3CC3";
const A2 = "#1CB7B4";
const D = "#2b1550";

const heroMetrics = [
  { value: "4", label: "Deploy Modes" },
  { value: "6+", label: "AI Providers" },
  { value: "100%", label: "Data Control" },
  { value: "EU", label: "Hosted" },
];

function PlatformGrid() {
  const items = [
    { icon: Server, label: "Cloud Private",  sub: "Your own cloud account"    },
    { icon: Globe,  label: "EU Managed",     sub: "Hands-off EU hosting"      },
    { icon: Layers, label: "On-Premise",     sub: "Air-gapped local deploy"   },
    { icon: Code2,  label: "Hybrid",         sub: "Split by data sensitivity" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:max-w-md">
      {items.map(({ icon: Icon, label, sub }, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            animation: `fadeUp 0.7s ease ${i * 120}ms both`,
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `linear-gradient(135deg,${A}80,${A2}30)`, border: `1px solid ${A2}50` }}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-bold text-white mb-1">{label}</p>
          <p className="text-xs text-white/50">{sub}</p>
        </div>
      ))}
    </div>
  );
}

const principles = [
  { icon: Shield,   title: "Data Sovereignty",  desc: "All data processing happens within your own infrastructure - on-premise servers, private cloud, or EU-hosted environments. No corporate data is transmitted to external AI provider servers. Conversation logs, uploaded documents, and generated outputs remain under your complete control." },
  { icon: Cpu,      title: "Model Agnosticism", desc: "Not locked to any single AI provider. Select from commercial APIs (Claude via Anthropic SDK, GPT via OpenAI SDK, Gemini via Google SDK) or deploy open-weight models (LLaMA, Mistral, Mixtral, Phi) locally. Switch providers based on cost, capability, or compliance requirements." },
  { icon: Settings, title: "Custom Interface",  desc: "Every deployment gets a tailored UI built to your brand, workflow requirements, and user roles. This is not a white-label chatbot - it is a purpose-built AI workspace designed around how your specific organisation works." },
];

const capabilities = [
  { icon: Users,    title: "Multi-Model Chat Interface",   desc: "Users can switch between AI models within the same conversation or assign specific models to specific tasks. A legal team might use Claude for contract review while engineering uses an open-weight model for code assistance." },
  { icon: FileText, title: "Document Intelligence",        desc: "Upload, index, and query internal documents through the AI interface. Supports PDF, Word, Excel, email archives, and structured databases. All indexing happens on your infrastructure." },
  { icon: Lock,     title: "Role-Based Access Control",    desc: "Different user groups see different AI capabilities and have access to different data sets. Executives see financial analysis; customer service agents see only product documentation." },
  { icon: Settings, title: "SDK Integration Layer",        desc: "Pre-built connectors for Anthropic, OpenAI, Google, Azure OpenAI, Hugging Face, and self-hosted model endpoints (vLLM, Ollama, LocalAI). New providers added through a standardised adapter pattern." },
  { icon: Shield,   title: "Audit & Compliance Logging",   desc: "Every AI interaction is logged with user identity, model used, tokens consumed, and response generated. Logs stored on your infrastructure and exportable for regulatory review." },
  { icon: Database, title: "Custom Tool Integration",      desc: "Connect the AI interface to your internal systems - ERP, CRM, ticketing, HR - through function-calling capabilities. The AI does not just answer questions; it takes actions." },
];

const deploymentModels = [
  { model: "Cloud Private", infra: "Client's own cloud account (AWS/Azure/GCP)", models: "All commercial + open-weight", residency: "Client-controlled cloud region",         bestFor: "Most companies" },
  { model: "EU Managed",    infra: "ANTUTIVE-managed EU infrastructure",          models: "All commercial + open-weight", residency: "EU data centres (Sweden, Germany)",    bestFor: "Companies wanting hands-off" },
  { model: "On-Premise",    infra: "Client's physical servers",                   models: "Open-weight models only",      residency: "Client's own facility",                bestFor: "Defence, healthcare, finance" },
  { model: "Hybrid",        infra: "Mix of cloud and local",                      models: "Commercial for general, local for sensitive", residency: "Split by data sensitivity", bestFor: "Regulated industries" },
];

const competitors = [
  { them: "Direct API Usage (DIY)",    weakness: "Requires in-house AI engineering team",              advantage: "ANTUTIVE provides the full stack: UI, integration, deployment, and ongoing support" },
  { them: "ChatGPT Enterprise / Teams",weakness: "Data goes to OpenAI servers, single model lock-in",  advantage: "Data stays on-premise, any model supported, fully customised interface" },
  { them: "Generic AI Platform SaaS",  weakness: "One-size-fits-all interface, limited customisation", advantage: "Purpose-built for each client's workflow, brand, and user roles" },
  { them: "Open-Source Deployments",   weakness: "Complex to deploy and maintain, no support",         advantage: "Managed platform with SLA, ongoing development, and team training included" },
];

export function CustomPlatform() {
  return (
    <div>

      {/* HERO */}
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
          style={{ background: `radial-gradient(circle,${A}24,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-[#1CB7B4]" />
                <span className="text-xs font-bold tracking-widest uppercase">ANTUTIVE · Custom AI Platforms</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                Your AI Workspace.<br />Your Data. Your Rules.
              </h1>

              <p className="text-base text-white/80 max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Private, model-agnostic AI workspaces where your data never leaves your environment. You own the data, the interface, the conversation history, and the deployment infrastructure.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["Data Sovereignty", "Any AI Model", "Custom Interface", "EU-Native"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-white/20 bg-white/08 text-white/75 text-xs font-medium backdrop-blur-sm">{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <Link to="/contact" className="hero-btn-primary" style={{ color: D }}>
                  Discuss Your Platform
                </Link>
                <Link to="#deployment" className="hero-btn-secondary">
                  View Deployment Options
                </Link>
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
              <PlatformGrid />
            </div>
          </div>
        </div>
      </section>
      {/* ARCHITECTURE PHILOSOPHY */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle,${A}18,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle,${A2}12,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Core Design Principles</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Built on Three Principles</h2>
            <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">Not a white-label chatbot. An enterprise-grade AI workspace built around how your specific organisation works.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-6 rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)", borderColor: `${A}30`, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg,${A},${A2})`, boxShadow: `0 6px 18px ${A}35` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">{title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#050810 0%,#080618 50%,#0a0820 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(111,60,195,0.08) 0%,transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(28,183,180,0.08) 0%,transparent 70%)", filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>Platform Capabilities</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>What Your Platform Can Do</h2>
            <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">Six core capabilities that transform how your organisation works with AI - all running on your own infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant="scale" delay={i * 70}>
                <div className="p-6 rounded-2xl border h-full" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)", borderColor: `${A}25` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg,${A},#5A32A3)` }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT MODELS */}
      <section id="deployment" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#050810 0%,#07091a 60%,#080c1a 100%)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(111,60,195,0.25) 0%,transparent 70%)", filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Deployment Options</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Four Deployment Models</h2>
            <p className="text-sm text-white/55 mt-3 max-w-lg mx-auto">Choose the model that matches your data residency requirements, technical capability, and risk tolerance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {deploymentModels.map((dm, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
                <div className="p-6 rounded-2xl h-full" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)" }}>
                  <h3 className="text-sm font-bold text-white mb-4">{dm.model}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[["Infrastructure", dm.infra], ["AI Models", dm.models], ["Data Residency", dm.residency], ["Best For", dm.bestFor]].map(([label, val]) => (
                      <div key={label}>
                        <p className="text-xs font-semibold text-white/40 mb-1 uppercase tracking-wide">{label}</p>
                        <p className="text-xs text-white/80 leading-relaxed">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE DIFFERENTIATION */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#050810 0%,#080618 50%,#0a0820 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(111,60,195,0.05) 0%,transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(28,183,180,0.06) 0%,transparent 70%)", filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>Why ANTUTIVE</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Competitive Differentiation</h2>
            <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">How ANTUTIVE's custom AI platform compares against the alternatives your team may already be considering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {competitors.map((c, i) => (
              <Reveal key={i} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="p-6 rounded-2xl border" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)", borderColor: `${A}25` }}>
                  <p className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wide">{c.them}</p>
                  <p className="text-xs text-red-400 mb-3"><span className="font-semibold">Their limitation: </span>{c.weakness}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: A }} />
                    <p className="text-xs text-white/60 font-medium leading-relaxed">{c.advantage}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0d0820,#1e1b4b,#2d1a5e)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(111,60,195,0.15) 0%,transparent 70%)", filter: "blur(40px)" }} />
        <Reveal variant="flip">
          <div className="max-w-2xl mx-auto px-4 text-center relative">
            <h2 className="section-h2 text-white mb-4" style={{ fontWeight: 700 }}>Design Your Platform</h2>
            <p className="text-sm text-white/55 mb-8 leading-relaxed">Every deployment is purpose-built. Book a session to discuss your workflow, data residency requirements, and model preferences.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="cta-btn-primary" style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="#deployment" className="cta-btn-secondary" style={{ borderColor: `${A}40`, color: A }}>
                View Deployment Options
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
