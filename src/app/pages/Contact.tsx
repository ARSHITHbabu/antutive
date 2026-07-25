import { useState } from "react";
import { Link } from "react-router";
import { Mail, MapPin, Clock, ArrowRight, Send, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb, HatchAccent } from "../components/Decor";

const A  = "#46589F";
const A2 = "#2E3B72";
const P  = "#7C92C7";

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
    <div className="p-6 rounded-3xl" style={{ background: "rgba(124,146,199,0.08)", border: "1px solid rgba(124,146,199,0.30)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: A }}>Get in Touch</p>
      <div className="flex flex-col gap-4">
        {details.map(({ Icon, label, value }, i) => (
          <div key={i} className="flex items-start gap-3"
            style={{ animation: `fadeUp 0.5s ease ${i * 80}ms both` }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `linear-gradient(135deg,${A},${P})` }}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-[#94a3b8] uppercase tracking-wide font-semibold mb-0.5">{label}</p>
              <p className="text-sm font-semibold text-[#0f172a]">{value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(124,146,199,0.28)" }}>
        <p className="text-xs text-[#64748b] leading-relaxed">Submit the form or email us directly. We respond within one business day. No sales pressure, just a conversation about fit.</p>
      </div>
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const processSteps = [
    { step: "01", title: "Initial Contact",    desc: "Submit the form or email us directly. We respond within one business day." },
    { step: "02", title: "Qualification Call", desc: "A brief 20-minute call to understand your requirement, your timeline, and whether Antutive is the right fit." },
    { step: "03", title: "Discovery Session",  desc: "A free structured session to define your product requirements, assess feasibility, and agree scope before any build begins." },
    { step: "04", title: "Proposal & Build",   desc: "A fixed-scope proposal with a clear timeline, cost, and delivery plan. Once agreed, engineering begins immediately." },
  ];

  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(56vh, 640px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
      >
        <div className="absolute inset-0 hero-mesh-overlay opacity-40" />
        <Noise />
        <AuroraOrb size={420} color="rgba(124,146,199,0.16)" style={{ top: -140, right: -110 }} />
        <AuroraOrb size={320} color="rgba(70,88,159,0.13)" delay={5} style={{ bottom: -100, left: -80 }} />
        <RingDecor spin size={330} style={{ bottom: -110, right: "10%", opacity: 0.7 }} />
        <DotMatrix style={{ top: 90, left: 16 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-[#0f172a]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm mb-6"
                style={{ borderColor: `${P}50`, background: `${P}14`, animation: "fadeUp 0.6s ease both" }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Contact Antutive</span>
              </div>

              <h1 className="hero-h1 mb-5" style={{ fontWeight: 700, animation: "fadeUp 0.8s ease 0.1s both" }}>
                Start the<br /><span className="grad-text">conversation</span>
              </h1>

              <p className="text-base text-[#334155] max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Tell us your product requirement. We'll run a free Discovery session to
                understand what you need, scope the build, and propose a clear plan. No
                commitment required.
              </p>

              <div className="flex flex-wrap gap-2 mb-8" style={{ animation: "fadeUp 0.8s ease 0.35s both" }}>
                {["24h Response", "Free Consultation", "EU-Based", "Swedish AB", "GDPR Compliant"].map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border text-xs font-medium"
                    style={{ borderColor: "rgba(124,146,199,0.32)", background: "rgba(124,146,199,0.08)", color: "#475569" }}>{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-10" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                <a href="mailto:contact@antutive.com" className="hero-btn-primary">Email Us Directly</a>
                <Link to="#form" className="hero-btn-secondary">Send a Message</Link>
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
              <ContactHeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}10,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${P}12,transparent 70%)`, filter: "blur(60px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-eyebrow">How It Works</span>
            <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>From Requirement to Build</h2>
            <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">A clear, fast process. Most product builds go from first contact to signed proposal in under two weeks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((s, i) => (
              <Reveal key={i} variant="scale" delay={i * 80}>
                <div className="p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", border: `1px solid ${P}30`, backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold text-white mb-4"
                    style={{ background: `linear-gradient(135deg,${A},${P})` }}>{s.step}</span>
                  <h3 className="text-sm font-bold text-[#0f172a] mb-2">{s.title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section id="form" className="py-24 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, #e8edf8 0%, #f1f4fb 45%, #eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <Noise />
        <HatchAccent style={{ top: 40, right: 30 }} />
        <AuroraOrb size={380} color="rgba(70,88,159,0.11)" style={{ top: -60, right: -70 }} />
        <AuroraOrb size={300} color="rgba(124,146,199,0.13)" delay={7} style={{ bottom: -60, left: -60 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* CONTACT INFO */}
            <Reveal variant="left">
              <div className="lg:col-span-1 flex flex-col gap-5">
                <h2 className="section-h2 text-[#0f172a] mb-2" style={{ fontWeight: 700, fontSize: "1.4rem" }}>Contact Information</h2>
                {[
                  { icon: Mail,   label: "Email",          lines: ["contact@antutive.com"]                  },
                  { icon: MapPin, label: "Headquarters",   lines: ["Gothenburg, Sweden", "Västra Götalands län"] },
                  { icon: Clock,  label: "Business Hours", lines: ["Monday – Friday", "09:00 – 18:00 CET"]  },
                ].map(({ icon: Icon, label, lines }, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "#ffffff", borderColor: `${P}30`, backdropFilter: "blur(8px)", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg,${A},${P})` }}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: A }}>{label}</p>
                      {lines.map((line, j) => <p key={j} className="text-xs text-[#64748b]">{line}</p>)}
                    </div>
                  </div>
                ))}

                <div className="p-5 rounded-2xl border" style={{ background: "#ffffff", borderColor: `${P}30`, backdropFilter: "blur(8px)", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}>
                  <h3 className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: A }}>What Happens After You Submit</h3>
                  <div className="flex flex-col gap-2.5">
                    {[
                      "Response within one business day",
                      "No commitment, fit assessment first",
                      "Free Discovery session included",
                      "Fixed-scope proposal delivered within one week",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: A }} />
                        <span className="text-xs text-[#64748b]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl border" style={{ background: "#ffffff", borderColor: `${P}25`, backdropFilter: "blur(8px)", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}>
                  <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-wide mb-1">Company Registration</p>
                  <p className="text-xs text-[#334155]">ANTUTIVE AB · Org.nr 559576-7228</p>
                  <p className="text-xs text-[#64748b] mt-0.5">Gothenburg, Västra Götalands län, Sweden</p>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <div className="lg:col-span-2">
              <Reveal variant="right" delay={100}>
                {submitted ? (
                  <div className="p-10 rounded-3xl border text-center" style={{ borderColor: `${P}30`, background: "#ffffff", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: `linear-gradient(135deg,${A},${P})` }}>
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-[#0f172a] mb-3">Message Received</h3>
                    <p className="text-sm text-[#64748b] mb-6">Thank you for reaching out. We will respond within one business day to schedule a brief qualification call, followed by a free Discovery session.</p>
                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: A }}>
                      Back to Home <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="p-8 rounded-3xl border" style={{ borderColor: `${P}30`, background: "#ffffff", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                    <h2 className="text-base font-bold text-[#0f172a] mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                          { id: "name",    label: "Your Name",    type: "text", required: true,  placeholder: "Jane Bergström"   },
                          { id: "company", label: "Company Name", type: "text", required: false, placeholder: "Your Company AB"  },
                        ].map(({ id, label, type, required, placeholder }) => (
                          <div key={id}>
                            <label htmlFor={id} className="block text-xs font-bold text-[#475569] mb-1.5 uppercase tracking-wide">
                              {label}{required && " *"}
                            </label>
                            <input
                              type={type} id={id} name={id}
                              value={formData[id as keyof typeof formData]}
                              onChange={handleChange}
                              required={required}
                              placeholder={placeholder}
                              className="w-full px-4 py-3 rounded-xl border text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all focus:border-[#46589F]"
                              style={{ borderColor: `${P}35`, background: "#f8fafc" }}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-[#475569] mb-1.5 uppercase tracking-wide">Email Address *</label>
                          <input
                            type="email" id="email" name="email"
                            value={formData.email} onChange={handleChange}
                            required placeholder="jane@company.com"
                            className="w-full px-4 py-3 rounded-xl border text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all focus:border-[#46589F]"
                            style={{ borderColor: `${P}35`, background: "#f8fafc" }}
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-xs font-bold text-[#475569] mb-1.5 uppercase tracking-wide">Area of Interest *</label>
                          <select
                            id="service" name="service"
                            value={formData.service} onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border text-sm text-[#0f172a] outline-none transition-all focus:border-[#46589F]"
                            style={{ borderColor: `${P}35`, background: "#f8fafc" }}
                          >
                            <option value="">Select an area</option>
                            <option value="web-app">Web Application Build</option>
                            <option value="mobile-app">Mobile App Build</option>
                            <option value="enterprise">Enterprise Platform / Integration</option>
                            <option value="mvp">MVP Programme</option>
                            <option value="product-strategy">Product Strategy & Discovery</option>
                            <option value="managed-team">Managed Build Team</option>
                            <option value="other">Other / General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-[#475569] mb-1.5 uppercase tracking-wide">Your Message *</label>
                        <textarea
                          id="message" name="message"
                          value={formData.message} onChange={handleChange}
                          required rows={5}
                          placeholder="Describe your product requirement or idea. The more context you share, the more useful our Discovery session will be."
                          className="w-full px-4 py-3 rounded-xl border text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all resize-none focus:border-[#46589F]"
                          style={{ borderColor: `${P}35`, background: "#f8fafc" }}
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="gdpr" required
                          className="mt-1 w-4 h-4 rounded flex-shrink-0"
                          style={{ accentColor: A }}
                        />
                        <label htmlFor="gdpr" className="text-xs text-[#64748b] leading-relaxed">
                          I consent to ANTUTIVE AB processing my personal data in accordance with GDPR for the purpose of responding to this enquiry. Your data will not be shared with third parties. *
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="cta-btn-primary self-start"
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
        style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${A}12,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${P}12,transparent 70%)`, filter: "blur(50px)" }} />
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />

        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                style={{ borderColor: `${P}45`, background: `${P}12` }}>
                <Mail className="w-3.5 h-3.5" style={{ color: A }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: A }}>Direct Email</span>
              </div>
              <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>Prefer a Direct Email?</h2>
              <p className="text-sm text-[#64748b] mb-8 leading-relaxed">Email us at contact@antutive.com with a brief description of your product requirement. We respond within one business day.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="mailto:contact@antutive.com" className="cta-btn-primary">
                  contact@antutive.com <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/growth-marketing" className="cta-btn-secondary">
                  See How We Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
