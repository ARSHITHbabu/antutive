import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Lock, Shield, Cpu, Server, Users, Settings, FileText, Database, Layers, Globe, Code2 } from "lucide-react";
import { Reveal } from "../lib/scroll";

const A = "#8b5cf6";

function PlatformGrid() {
  const items = [
    { icon: Server, label: "Cloud Private",  sub: "Your own cloud account"    },
    { icon: Globe,  label: "EU Managed",     sub: "Hands-off EU hosting"      },
    { icon: Layers, label: "On-Premise",     sub: "Air-gapped local deploy"   },
    { icon: Code2,  label: "Hybrid",         sub: "Split by data sensitivity" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map(({ icon: Icon, label, sub }, i) => (
        <div key={i} className="p-4 rounded-2xl flex flex-col gap-2" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", backdropFilter: "blur(8px)" }}>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#8b5cf6,#6d28d9)" }}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm font-bold text-white leading-tight">{label}</p>
          <p className="text-xs text-violet-300 leading-snug">{sub}</p>
        </div>
      ))}
    </div>
  );
}

const principles = [
  { icon: Shield,   title: "Data Sovereignty",  desc: "All data processing happens within your own infrastructure — on-premise servers, private cloud, or EU-hosted environments. No corporate data is transmitted to external AI provider servers. Conversation logs, uploaded documents, and generated outputs remain under your complete control." },
  { icon: Cpu,      title: "Model Agnosticism", desc: "Not locked to any single AI provider. Select from commercial APIs (Claude via Anthropic SDK, GPT via OpenAI SDK, Gemini via Google SDK) or deploy open-weight models (LLaMA, Mistral, Mixtral, Phi) locally. Switch providers based on cost, capability, or compliance requirements." },
  { icon: Settings, title: "Custom Interface",  desc: "Every deployment gets a tailored UI built to your brand, workflow requirements, and user roles. This is not a white-label chatbot — it is a purpose-built AI workspace designed around how your specific organisation works." },
];

const capabilities = [
  { icon: Users,    title: "Multi-Model Chat Interface",   desc: "Users can switch between AI models within the same conversation or assign specific models to specific tasks. A legal team might use Claude for contract review while engineering uses an open-weight model for code assistance." },
  { icon: FileText, title: "Document Intelligence",        desc: "Upload, index, and query internal documents through the AI interface. Supports PDF, Word, Excel, email archives, and structured databases. All indexing happens on your infrastructure." },
  { icon: Lock,     title: "Role-Based Access Control",    desc: "Different user groups see different AI capabilities and have access to different data sets. Executives see financial analysis; customer service agents see only product documentation." },
  { icon: Settings, title: "SDK Integration Layer",        desc: "Pre-built connectors for Anthropic, OpenAI, Google, Azure OpenAI, Hugging Face, and self-hosted model endpoints (vLLM, Ollama, LocalAI). New providers added through a standardised adapter pattern." },
  { icon: Shield,   title: "Audit & Compliance Logging",   desc: "Every AI interaction is logged with user identity, model used, tokens consumed, and response generated. Logs stored on your infrastructure and exportable for regulatory review." },
  { icon: Database, title: "Custom Tool Integration",      desc: "Connect the AI interface to your internal systems — ERP, CRM, ticketing, HR — through function-calling capabilities. The AI does not just answer questions; it takes actions." },
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
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0a0818 0%,#130a2a 50%,#1a0d35 100%)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(109,40,217,0.14) 0%,transparent 70%)", filter: "blur(50px)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.30)", color: "#c4b5fd" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                ANTUTIVE · Custom AI Platforms
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
                Your AI Workspace.<br />
                <span style={{ background: "linear-gradient(90deg,#a78bfa,#8b5cf6,#c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Your Data. Your Rules.
                </span>
              </h1>
              <p className="text-base text-white/55 leading-relaxed mb-8 max-w-lg">
                Private, model-agnostic AI workspaces where your data never leaves your environment. You own the data, the interface, the conversation history, and the deployment infrastructure.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Data Sovereignty", "Any AI Model", "Custom Interface", "EU-Native"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", color: "#c4b5fd" }}>{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#8b5cf6,#6d28d9)", boxShadow: "0 8px 30px rgba(139,92,246,0.35)" }}>
                  Discuss Your Platform <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all hover:scale-105" style={{ background: "rgba(139,92,246,0.10)", border: "1px solid rgba(139,92,246,0.28)", color: "#c4b5fd" }}>
                  View Deployment Options
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.10) 0%,transparent 70%)", filter: "blur(20px)" }} />
                <div className="relative p-6 rounded-3xl" style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.20)", backdropFilter: "blur(12px)" }}>
                  <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-4">Deployment Options</p>
                  <PlatformGrid />
                  <div className="grid grid-cols-4 gap-3 mt-5 pt-5 border-t" style={{ borderColor: "rgba(139,92,246,0.20)" }}>
                    {[["4", "Deploy Modes"], ["6+", "AI Providers"], ["100%", "Data Control"], ["EU", "Hosted"]].map(([val, label]) => (
                      <div key={label} className="text-center">
                        <p className="text-lg font-black text-white">{val}</p>
                        <p className="text-xs text-violet-400 leading-tight">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE PHILOSOPHY */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0d0820,#180a38,#120720)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-15 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.14) 0%,transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(109,40,217,0.10) 0%,transparent 70%)", filter: "blur(40px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light">Core Design Principles</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>Built on Three Principles</h2>
            <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">Not a white-label chatbot. An enterprise-grade AI workspace built around how your specific organisation works.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant={["left", "up", "right"][i] as any} delay={i * 100}>
                <div className="p-7 rounded-3xl h-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(139,92,246,0.22)", backdropFilter: "blur(12px)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg,#8b5cf6,#6d28d9)" }}>
                    <Icon className="w-6 h-6 text-white" />
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
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(109,40,217,0.06) 0%,transparent 70%)", filter: "blur(50px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow" style={{ color: A, borderColor: `${A}33`, background: `${A}10` }}>Platform Capabilities</span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>What Your Platform Can Do</h2>
            <p className="text-sm text-white/45 mt-3 max-w-xl mx-auto">Six core capabilities that transform how your organisation works with AI — all running on your own infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} variant="scale" delay={i * 70}>
                <div className="p-6 rounded-2xl border h-full" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)", borderColor: `${A}25` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg,${A},#6d28d9)` }}>
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
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#06041a 0%,#080618 50%,#0a0820 100%)" }}>
        <div className="absolute inset-0 services-grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.25) 0%,transparent 70%)", filter: "blur(50px)" }} />

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
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.05) 0%,transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(109,40,217,0.04) 0%,transparent 70%)", filter: "blur(50px)" }} />

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.15) 0%,transparent 70%)", filter: "blur(40px)" }} />
        <Reveal variant="flip">
          <div className="max-w-2xl mx-auto px-4 text-center relative">
            <h2 className="section-h2 text-white mb-4" style={{ fontWeight: 700 }}>Design Your Platform</h2>
            <p className="text-sm text-white/55 mb-8 leading-relaxed">Every deployment is purpose-built. Book a session to discuss your workflow, data residency requirements, and model preferences.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold text-white transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#8b5cf6,#6d28d9)", boxShadow: "0 8px 30px rgba(139,92,246,0.35)" }}>
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all hover:scale-105" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.30)", color: "#c4b5fd" }}>
                View Deployment Options
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
