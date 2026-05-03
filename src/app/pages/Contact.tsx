import { useState } from "react";
import { Link } from "react-router";
import { Mail, MapPin, Clock, ArrowRight, Send, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { Reveal } from "../lib/scroll";

const A  = "#6F3CC3";
const A2 = "#5A32A3";
const D  = "#2E1065";

const heroMetrics = [
  { value: "24h",  label: "Response Time"    },
  { value: "Free", label: "First Session"    },
  { value: "EU",   label: "Based & Hosted"   },
  { value: "GDPR", label: "Compliant"        },
];

function ContactHeroCard() {
  const details = [
    { Icon: Mail,      label: "Email",          value: "contact@antutive.com"         },
    { Icon: MapPin,    label: "Headquarters",   value: "Gothenburg, Sweden"           },
    { Icon: Clock,     label: "Business Hours", value: "Mon–Fri · 09:00–18:00 CET"   },
    { Icon: Building2, label: "Company",        value: "ANTUTIVE AB · 559576-7228"    },
  ];
  return (
    <div className="p-6 rounded-3xl" style={{ background: "rgba(28,183,180,0.08)", border: "1px solid rgba(28,183,180,0.20)", backdropFilter: "blur(12px)" }}>
      <p className="text-xs font-bold text-[#1CB7B4] uppercase tracking-widest mb-5">Get in Touch</p>
      <div className="flex flex-col gap-4">
        {details.map(({ Icon, label, value }, i) => (
          <div key={i} className="flex items-start gap-3"
            style={{ animation: `fadeUp 0.5s ease ${i * 80}ms both` }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `linear-gradient(135deg,${A}55,${A2}55)`, border: `1px solid ${A}30` }}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wide font-semibold mb-0.5">{label}</p>
              <p className="text-sm font-semibold text-white">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(28,183,180,0.15)" }}>
        <p className="text-xs text-white/50 leading-relaxed">Submit the form or email us directly. We respond within one business day — no sales pressure, just a fit conversation.</p>
      </div>
    </div>
  );
}

const processSteps = [
  { step: "01", title: "Initial Contact",        desc: "Submit the form or email us directly. We respond within one business day." },
  { step: "02", title: "Qualification Call",     desc: "A brief 20-minute call to understand your situation, timeline, and whether ANTUTIVE is the right fit." },
  { step: "03", title: "Business Understanding", desc: "A free structured session — first step of the ANTUTIVE Delivery Method — to diagnose before we prescribe." },
  { step: "04", title: "Proposal",               desc: "A tailored engagement proposal with clear scope, timeline, and commercial terms. Delivered within one week." },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "56vh", background: "linear-gradient(135deg,#030608 0%,#06091a 50%,#0a0618 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(28,183,180,0.12),transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(111,60,195,0.10),transparent 70%)", filter: "blur(30px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}20,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm mb-6"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5 text-[#1CB7B4]" />
                <span className="text-xs font-bold tracking-widest uppercase">Contact ANTUTIVE AB</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                Start the<br />Conversation
              </h1>

              <p className="text-base text-white/80 max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Book a free Business Understanding session. We diagnose before we prescribe — no sales pitch, just a structured conversation about your goals and how we can help.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["24h Response", "Free Consultation", "EU-Based", "Swedish AB", "GDPR Compliant"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border border-white/20 bg-white/08 text-white/75 text-xs font-medium backdrop-blur-sm">{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <a href="mailto:contact@antutive.com" className="hero-btn-primary" style={{ color: D }}>Email Us Directly</a>
                <Link to="#form" className="hero-btn-secondary">Send a Message</Link>
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
              <ContactHeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}14,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}10,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow-light"
              style={{ borderColor: `${A}40`, background: `${A}18`, color: "#93c5fd" }}>
              How It Works
            </span>
            <h2 className="section-h2 text-white mt-3" style={{ fontWeight: 700 }}>From Contact to Kickoff</h2>
            <p className="text-sm text-white/50 mt-3 max-w-xl mx-auto">A clear, fast process — from first contact to signed engagement in under two weeks for most projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((s, i) => (
              <Reveal key={i} variant="scale" delay={i * 80}>
                <div className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${A}22`, backdropFilter: "blur(12px)" }}>
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold text-white mb-4"
                    style={{ background: `linear-gradient(135deg,${A},${A2})` }}>{s.step}</span>
                  <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section id="form" className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#030608 0%,#06091a 50%,#0a0618 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}12,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}10,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* CONTACT INFO */}
            <Reveal variant="left">
              <div className="lg:col-span-1 flex flex-col gap-5">
                <h2 className="section-h2 text-white mb-2" style={{ fontWeight: 700, fontSize: "1.4rem" }}>Contact Information</h2>
                {[
                  { icon: Mail,   label: "Email",          lines: ["contact@antutive.com"]                  },
                  { icon: MapPin, label: "Headquarters",   lines: ["Gothenburg, Sweden", "Västra Götalands län"] },
                  { icon: Clock,  label: "Business Hours", lines: ["Monday – Friday", "09:00 – 18:00 CET"]  },
                ].map(({ icon: Icon, label, lines }, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.04)", borderColor: `${A}20`, backdropFilter: "blur(8px)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1CB7B4] uppercase tracking-wide mb-1">{label}</p>
                      {lines.map((line, j) => <p key={j} className="text-xs text-white/55">{line}</p>)}
                    </div>
                  </div>
                ))}

                <div className="p-5 rounded-2xl border" style={{ background: "rgba(255,255,255,0.04)", borderColor: `${A}22`, backdropFilter: "blur(8px)" }}>
                  <h3 className="text-xs font-bold text-[#1CB7B4] uppercase tracking-wide mb-3">What Happens After You Submit</h3>
                  <div className="flex flex-col gap-2.5">
                    {[
                      "Response within one business day",
                      "No sales pressure — fit assessment only",
                      "Free Business Understanding session",
                      "Proposal delivered within one week",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: A }} />
                        <span className="text-xs text-white/55">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl border" style={{ background: "rgba(255,255,255,0.04)", borderColor: `${A}18`, backdropFilter: "blur(8px)" }}>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-wide mb-1">Company Registration</p>
                  <p className="text-xs text-white/70">ANTUTIVE AB · Org.nr 559576-7228</p>
                  <p className="text-xs text-white/50 mt-0.5">Gothenburg, Västra Götalands län, Sweden</p>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <div className="lg:col-span-2">
              <Reveal variant="right" delay={100}>
                {submitted ? (
                  <div className="p-10 rounded-3xl border text-center" style={{ borderColor: `${A}22`, background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3">Message Received</h3>
                    <p className="text-sm text-white/55 mb-6">Thank you for reaching out. We'll respond within one business day to schedule a qualification call.</p>
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: A }}>
                      Back to Home <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="p-8 rounded-3xl border" style={{ borderColor: `${A}20`, background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                    <h2 className="text-base font-bold text-white mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                          { id: "name",    label: "Your Name",    type: "text", required: true,  placeholder: "Jane Bergström"   },
                          { id: "company", label: "Company Name", type: "text", required: false, placeholder: "Your Company AB"  },
                        ].map(({ id, label, type, required, placeholder }) => (
                          <div key={id}>
                            <label htmlFor={id} className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">
                              {label}{required && " *"}
                            </label>
                            <input
                              type={type} id={id} name={id}
                              value={formData[id as keyof typeof formData]}
                              onChange={handleChange}
                              required={required}
                              placeholder={placeholder}
                              className="w-full px-4 py-3 rounded-xl border text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#1CB7B4]"
                              style={{ borderColor: `${A}25`, background: "rgba(255,255,255,0.06)" }}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Email Address *</label>
                          <input
                            type="email" id="email" name="email"
                            value={formData.email} onChange={handleChange}
                            required placeholder="jane@company.com"
                            className="w-full px-4 py-3 rounded-xl border text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#1CB7B4]"
                            style={{ borderColor: `${A}25`, background: "rgba(255,255,255,0.06)" }}
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Area of Interest *</label>
                          <select
                            id="service" name="service"
                            value={formData.service} onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border text-sm text-white outline-none transition-all focus:border-[#1CB7B4]"
                            style={{ borderColor: `${A}25`, background: "rgba(15,20,40,0.85)" }}
                          >
                            <option value="">Select an area</option>
                            <option value="genai">Generative AI Solutions</option>
                            <option value="data">Data Engineering & Analytics</option>
                            <option value="geo">GEO & AI Growth Marketing</option>
                            <option value="platform">Custom AI Platform</option>
                            <option value="consulting-model-a">Strategic IT Consulting (Model A)</option>
                            <option value="consulting-model-b">Managed Engineering Team (Model B)</option>
                            <option value="consulting-model-c">Project-Based Delivery (Model C)</option>
                            <option value="famant">FAMANT — Early Access</option>
                            <option value="saas-distribution">EU SaaS Distribution Partnership</option>
                            <option value="other">Other / General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Your Message *</label>
                        <textarea
                          id="message" name="message"
                          value={formData.message} onChange={handleChange}
                          required rows={5}
                          placeholder="Describe your project, challenge, or question. The more context you share, the more useful our first call will be."
                          className="w-full px-4 py-3 rounded-xl border text-sm text-white placeholder:text-white/30 outline-none transition-all resize-none focus:border-[#1CB7B4]"
                          style={{ borderColor: `${A}25`, background: "rgba(255,255,255,0.06)" }}
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="gdpr" required
                          className="mt-1 w-4 h-4 rounded flex-shrink-0"
                          style={{ accentColor: A }}
                        />
                        <label htmlFor="gdpr" className="text-xs text-white/50 leading-relaxed">
                          I consent to ANTUTIVE AB processing my personal data in accordance with GDPR for the purpose of responding to this enquiry. Your data will not be shared with third parties. *
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="cta-btn-primary self-start"
                        style={{ background: `linear-gradient(135deg,${A},${A2})` }}
                      >
                        Send Message <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── DIRECT CONTACT CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#050810 0%,#07091a 50%,#060c18 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}18,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A2}12,transparent 70%)`, filter: "blur(50px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${A}30`, background: `${A}10` }}>
                <Mail className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Direct Email</span>
              </div>
              <h2 className="section-h2 text-white mb-4" style={{ fontWeight: 700 }}>Prefer a Direct Email?</h2>
              <p className="text-sm text-white/55 mb-8 leading-relaxed">Email us directly at contact@antutive.com with a brief description of your project. We respond within one business day.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:contact@antutive.com" className="cta-btn-primary"
                  style={{ background: `linear-gradient(135deg,${A},${A2})` }}>
                  contact@antutive.com <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/services" className="cta-btn-secondary"
                  style={{ borderColor: `${A}40`, color: A }}>
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
