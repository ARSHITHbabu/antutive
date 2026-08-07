import { useState } from "react";
import { Link } from "react-router";
import { Mail, MapPin, Clock, ArrowRight, ArrowUpRight, Send, Sparkles, Building2 } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, RingDecor, AuroraOrb, HatchAccent } from "../components/Decor";
import { usePageMeta } from "../lib/seo";
import { WAITLIST_URL } from "../content/famant";

const A = "#46589F";
const P = "#7C92C7";

const topics = [
  { value: "famant",      label: "Famant & waitlist question" },
  { value: "press",       label: "Press & media" },
  { value: "partnership", label: "Partnership" },
  { value: "general",     label: "General enquiry" },
];

function ContactHeroCard() {
  const details = [
    { Icon: Mail,      label: "Email",          value: "contact@antutive.com"        },
    { Icon: MapPin,    label: "Headquarters",   value: "Gothenburg, Sweden"          },
    { Icon: Clock,     label: "Business Hours", value: "Mon–Fri · 09:00–18:00 CET"  },
    { Icon: Building2, label: "Company",        value: "ANTUTIVE AB · 559576-7228"   },
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
        <p className="text-xs text-[#64748b] leading-relaxed">
          We read everything sent to this address and reply as quickly as we can.
        </p>
      </div>
    </div>
  );
}

export function Contact() {
  usePageMeta({
    title: "Contact Antutive",
    description:
      "Contact Antutive (ANTUTIVE AB), Gothenburg, Sweden — questions about Famant, press, partnerships or general enquiries. Email contact@antutive.com.",
    path: "/contact",
  });

  const [formData, setFormData] = useState({ name: "", email: "", topic: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* No form backend exists yet, so the form composes a real email in the
     visitor's own mail app instead of pretending to submit — nothing is
     stored by this website. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const topicLabel = topics.find(t => t.value === formData.topic)?.label ?? "General enquiry";
    const subject = encodeURIComponent(`[${topicLabel}] Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name}\n${formData.email}`);
    window.location.href = `mailto:contact@antutive.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "min(52vh, 600px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
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
                Talk to<br /><span className="grad-text">Antutive</span>
              </h1>

              <p className="text-base text-[#334155] max-w-lg leading-relaxed mb-8"
                style={{ animation: "fadeUp 0.8s ease 0.25s both" }}>
                Questions about Famant, press, partnerships or anything else — email us or
                use the form below. If you want early access to Famant, the waitlist is the
                fastest route.
              </p>

              <div className="flex flex-wrap gap-4 mb-6" style={{ animation: "fadeUp 0.8s ease 0.4s both" }}>
                <a href="mailto:contact@antutive.com" className="hero-btn-primary">Email contact@antutive.com</a>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">
                  Join the Famant waitlist
                </a>
              </div>
              <p className="text-xs text-[#94a3b8]" style={{ animation: "fadeUp 0.8s ease 0.45s both" }}>
                Waitlist continues to famant.com — Famant's product site.
              </p>
            </div>

            <div className="hidden lg:block" style={{ animation: "fadeUp 0.8s ease 0.3s both" }}>
              <ContactHeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section id="form" className="py-24 relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, #e8edf8 0%, #f1f4fb 45%, #eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <Noise />
        <HatchAccent style={{ top: 40, right: 30 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* CONTACT INFO */}
            <Reveal variant="left">
              <div className="lg:col-span-1 flex flex-col gap-5">
                <h2 className="section-h2 text-[#0f172a] mb-2" style={{ fontWeight: 700, fontSize: "1.4rem" }}>Contact Information</h2>
                {[
                  { icon: Mail,   label: "Email",          lines: ["contact@antutive.com"]                       },
                  { icon: MapPin, label: "Headquarters",   lines: ["Gothenburg, Sweden", "Västra Götalands län"] },
                  { icon: Clock,  label: "Business Hours", lines: ["Monday – Friday", "09:00 – 18:00 CET"]       },
                ].map(({ icon: Icon, label, lines }, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "#ffffff", borderColor: `${P}30`, boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}>
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

                <div className="p-5 rounded-2xl border" style={{ background: "#ffffff", borderColor: `${P}25`, boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}>
                  <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-wide mb-1">Company Registration</p>
                  <p className="text-xs text-[#334155]">ANTUTIVE AB · Org.nr 559576-7228</p>
                  <p className="text-xs text-[#64748b] mt-0.5">Gothenburg, Västra Götalands län, Sweden</p>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <div className="lg:col-span-2">
              <Reveal variant="right" delay={100}>
                <div className="p-8 rounded-3xl border" style={{ borderColor: `${P}30`, background: "#ffffff", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <h2 className="text-base font-bold text-[#0f172a] mb-2">Send Us a Message</h2>
                  <p className="text-xs text-[#64748b] mb-6 leading-relaxed">
                    Sending opens your own email app with the message addressed to
                    contact@antutive.com — this website stores nothing you type here.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-[#475569] mb-1.5 uppercase tracking-wide">Your Name *</label>
                        <input
                          type="text" id="name" name="name"
                          value={formData.name} onChange={handleChange}
                          required placeholder="Jane Bergström"
                          className="w-full px-4 py-3 rounded-xl border text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all focus:border-[#46589F]"
                          style={{ borderColor: `${P}35`, background: "#f8fafc" }}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[#475569] mb-1.5 uppercase tracking-wide">Email Address *</label>
                        <input
                          type="email" id="email" name="email"
                          value={formData.email} onChange={handleChange}
                          required placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all focus:border-[#46589F]"
                          style={{ borderColor: `${P}35`, background: "#f8fafc" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="topic" className="block text-xs font-bold text-[#475569] mb-1.5 uppercase tracking-wide">Topic *</label>
                      <select
                        id="topic" name="topic"
                        value={formData.topic} onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border text-sm text-[#0f172a] outline-none transition-all focus:border-[#46589F]"
                        style={{ borderColor: `${P}35`, background: "#f8fafc" }}
                      >
                        <option value="">Select a topic</option>
                        {topics.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-[#475569] mb-1.5 uppercase tracking-wide">Your Message *</label>
                      <textarea
                        id="message" name="message"
                        value={formData.message} onChange={handleChange}
                        required rows={5}
                        placeholder="What would you like to ask or tell us?"
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
                        I understand that emailing ANTUTIVE AB means my message and contact
                        details will be processed to respond to my enquiry, as described in
                        the <Link to="/privacy" className="underline font-semibold" style={{ color: A }}>Privacy Policy</Link>. *
                      </label>
                    </div>

                    <button type="submit" className="cta-btn-primary self-start">
                      Compose Email <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRODUCT CTA ── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="relative z-10">
          <Reveal variant="flip">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <h2 className="section-h2 text-[#0f172a] mb-4" style={{ fontWeight: 700 }}>Here for Famant?</h2>
              <p className="text-sm text-[#64748b] mb-8 leading-relaxed">
                The product page explains what Famant does, how the AI works, and exactly
                where it stands today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/famant" className="cta-btn-primary">
                  Explore Famant <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                  Join the waitlist <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
