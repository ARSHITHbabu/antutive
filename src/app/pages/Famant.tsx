import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Sparkles, Users, ShieldCheck, Eye, Camera } from "lucide-react";
import { Reveal } from "../lib/scroll";
import { Noise, DotMatrix, AuroraOrb } from "../components/Decor";
import { usePageMeta, PRODUCT_DESCRIPTION } from "../lib/seo";
import { capabilities, WAITLIST_URL, OWNERSHIP_LINE, STAGE_LINE } from "../content/famant";
import { StatusBadge } from "./Home";
import { LineArtScene, LineArtCorner, LineArtFlourish } from "../components/LineArt";

const famantVideo = "/media/famant.webm";

const targetUsers = [
  { Icon: Users, title: "Parents and partners", desc: "The people who currently carry the family's coordination load — usually one or two per household." },
  { Icon: Users, title: "Busy households", desc: "Families juggling school, work, activities and everything in between, across too many separate tools." },
  { Icon: Users, title: "Multi-generation households", desc: "Homes where coordination spans grandparents, parents and children — and context matters even more." },
];

export function Famant() {
  usePageMeta({
    title: "Famant — AI-powered family management platform | Antutive",
    description: PRODUCT_DESCRIPTION,
    path: "/famant",
  });

  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO — dark product panel ── */}
      <section className="famant-section py-20 relative overflow-hidden">
        <Noise />
        <div className="famant-orbit" style={{ width: 420, height: 420, top: -140, right: -120, background: "radial-gradient(circle, rgba(107,98,241,0.20), transparent 70%)" }} />
        <div className="famant-orbit" style={{ width: 340, height: 340, bottom: -100, left: -100, background: "radial-gradient(circle, rgba(46,196,182,0.16), transparent 70%)", animationDelay: "4s" }} />
        <DotMatrix style={{ bottom: 40, right: 30, backgroundImage: "radial-gradient(rgba(107,98,241,0.4) 1.5px, transparent 1.5px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <div className="famant-hero-panel p-8 sm:p-12 lg:p-14">
              <Noise />
              <LineArtScene scene="family" tone="famant" className="line-art--panel-bg" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                    style={{ border: "1px solid rgba(107,98,241,0.5)", background: "rgba(107,98,241,0.18)" }}>
                    <Sparkles className="w-3.5 h-3.5" style={{ color: "#2EC4B6" }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#C9C5FF" }}>Antutive's First Flagship Product</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight text-white" style={{ fontFamily: "Sora, sans-serif" }}>Famant</h1>
                  <LineArtFlourish tone="famant" />
                  <p className="text-xl font-semibold mb-5" style={{ color: "#A9A3FF" }}>
                    The AI-powered family management and household coordination platform
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(226,229,255,0.78)" }}>
                    {PRODUCT_DESCRIPTION}
                  </p>
                  <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(226,229,255,0.78)" }}>
                    {STAGE_LINE}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Scheduling", "Tasks", "Documents", "Planning"].map((tag) => (
                      <span key={tag} className="famant-chip">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="famant-cta-brand">
                      Join the Famant waitlist <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <span className="text-xs" style={{ color: "rgba(226,229,255,0.55)" }}>
                      Continues to famant.com — Famant's product site
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-end relative">
                  <div className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(107,98,241,0.35), transparent 65%)", filter: "blur(40px)" }} />
                  <video src={famantVideo} autoPlay loop muted playsInline aria-hidden="true"
                    style={{ width: "100%", maxWidth: 320, height: 320, objectFit: "contain", position: "relative", zIndex: 1 }} />
                  <p className="text-xs relative z-10 lg:pr-10" style={{ color: "rgba(226,229,255,0.45)" }}>
                    Brand illustration — not product interface. Real screenshots will be
                    published as capabilities reach testing.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEM + ORIGIN ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg,#ffffff 0%,#f8fafc 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light">The Problem</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-4" style={{ fontWeight: 700 }}>
                Coordination is interpretation,<br/>not storage.
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                Family life is fragmented across calendars, chat threads, paper documents,
                shared lists and separate planning — and the load of holding it together
                falls on one or two people. The hard part was never having somewhere to put
                things. It's knowing what a school form means, which commitments clash, who
                should do what, and what has to happen next.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                That is work of interpretation, prioritisation and follow-through — exactly
                the class of work modern AI is suited to carry, with a person staying in
                charge of every decision.
              </p>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="p-8 rounded-3xl border" style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <span className="section-eyebrow-light">Why We're Building It</span>
                <h3 className="text-lg font-bold text-[#0f172a] mt-3 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                  Famant started as our own frustration.
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-3">
                  Calendars in three places, school forms lost in a drawer, dinner a nightly
                  negotiation. So we set out to build the product we wanted in our own homes:
                  one shared system for the whole household, with an assistant that carries
                  the coordination.
                </p>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {OWNERSHIP_LINE}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 60%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light">Who It's For</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>Built for the people who hold it together</h2>
            </div>
          </Reveal>
          <LineArtScene scene="family" className="line-art--section" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {targetUsers.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} variant={["left","up","right"][i] as any} delay={i * 90}>
                <div className="p-7 rounded-3xl border h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>
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

      {/* ── CAPABILITIES — mechanism → outcome → status ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-6 max-w-2xl mx-auto">
              <span className="section-eyebrow-light">Capabilities</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>
                What the assistant is being built to do
              </h2>
              <p className="text-sm text-[#64748b] mt-3">
                Each capability is a model-driven behaviour: input → what the assistant does →
                what the family sees → confirmation. Voice is an interface to the assistant,
                not the category — you can type or speak.
              </p>
            </div>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <p className="text-center text-xs text-[#94a3b8] mb-12 max-w-xl mx-auto">
              Famant is pre-launch: none of these capabilities is generally available yet.
              Statuses are conservative and updated as capabilities reach testing and release.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {capabilities.map(({ Icon, title, mechanism, outcome, status }, i) => (
              <Reveal key={title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="famant-card h-full flex flex-col" style={{ padding: 28 }}>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="famant-icon"><Icon className="w-5 h-5 text-white" /></div>
                    <StatusBadge status={status} />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#1A1C59" }}>{title}</h3>
                  <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: "#5A5E8C" }}>{mechanism}</p>
                  <p className="text-xs font-semibold" style={{ color: "#6B62F1" }}>{outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONE FLOW, END TO END ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 50%,#f8fafc 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <AuroraOrb size={380} color="rgba(70,88,159,0.12)" style={{ top: -80, right: -60 }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light">How It Works</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>One concrete flow, end to end</h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">
                This is the pattern every capability follows — and the flow we'll record as a
                demo once it reaches testing.
              </p>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={80}>
            <div className="p-8 rounded-3xl border relative" style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              {/* connector spine across the four steps (desktop) */}
              <div className="hidden lg:block absolute pointer-events-none" aria-hidden="true" style={{ top: 45, left: "14%", right: "14%" }}>
                <svg width="100%" height="2" style={{ overflow: "visible" }}>
                  <line x1="0" y1="1" x2="100%" y2="1" stroke="#6B62F1" strokeWidth="2" className="flow-dash" opacity="0.5" />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { Icon: Camera,      step: "Input",        desc: "Photograph a birthday invitation." },
                  { Icon: Eye,         step: "Understanding",desc: "The assistant is designed to read it: date, time, venue, child." },
                  { Icon: Sparkles,    step: "Proposal",     desc: "It proposes the calendar event, a gift reminder and an RSVP task." },
                  { Icon: ShieldCheck, step: "Confirmation", desc: "Nothing is added until a family member confirms. If it misread, you correct or dismiss — nothing has happened yet." },
                ].map(({ Icon, step, desc }, i) => (
                  <div key={step} className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 rounded-full self-start px-1 py-1 pr-3"
                      style={{ background: "#ffffff", border: "1px solid rgba(107,98,241,0.30)" }}>
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: "linear-gradient(135deg,#6B62F1,#8B7CF8)" }}>{i + 1}</span>
                      <Icon className="w-4 h-4" style={{ color: "#6B62F1" }} />
                    </div>
                    <p className="text-sm font-bold text-[#0f172a]">{step}</p>
                    <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t flex flex-wrap items-center gap-3" style={{ borderColor: "rgba(124,146,199,0.24)" }}>
                <StatusBadge status="In development" />
                <span className="text-xs text-[#94a3b8]">
                  A recorded end-to-end demo of this flow will be published here once it's real.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRIVACY & CARE BY DESIGN ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal variant="left">
              <span className="section-eyebrow-light">Family Data, Handled with Care</span>
              <h2 className="section-h2 text-[#0f172a] mt-3 mb-4" style={{ fontWeight: 700 }}>
                Privacy is a design constraint,<br/>not a feature.
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                A family product handles some of the most personal data there is. Famant is
                being designed around that reality: the assistant proposes rather than acts,
                households are kept strictly separate, and the product asks for no more data
                than a capability needs.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                We will publish specific security and privacy practices as they are
                implemented and reviewed — implemented controls only, no compliance badges.
              </p>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-4">
                {[
                  { title: "Confirmation before action", desc: "The assistant never changes the family's world on its own. It proposes; a family member confirms." },
                  { title: "When the AI is wrong", desc: "A wrong proposal costs one tap: correct it or dismiss it. Because nothing happens before confirmation, a misreading never becomes a missed pickup." },
                  { title: "Designed as an EU product", desc: "Built by a Swedish company that treats family-data care as a constraint on design, with legal review preceding any public beta." },
                ].map(({ title, desc }, i) => (
                  <Reveal key={title} variant="right" delay={i * 80}>
                    <div className="p-5 rounded-2xl border flex items-start gap-4"
                      style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 2px 12px rgba(15,23,42,0.05)" }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}>
                        <ShieldCheck className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0f172a] mb-1">{title}</p>
                        <p className="text-xs text-[#64748b] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STAGE & ACCESS + WAITLIST ── */}
      <section id="waitlist" className="famant-section py-24 relative overflow-hidden">
        <Noise />
        <div className="famant-orbit" style={{ width: 380, height: 380, top: -120, left: -110, background: "radial-gradient(circle, rgba(107,98,241,0.18), transparent 70%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="famant-hero-panel text-center p-10 sm:p-12">
              <Noise />
              <LineArtCorner tone="light" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                  Famant is pre-launch. The waitlist is open.
                </h2>
                <p className="text-sm mb-3 max-w-lg mx-auto" style={{ color: "rgba(226,229,255,0.75)" }}>
                  Famant is in development and not yet generally available. Joining the
                  waitlist gets you early access when it opens — and honest updates on what
                  works and what's still coming.
                </p>
                <p className="text-xs mb-8 max-w-lg mx-auto" style={{ color: "rgba(226,229,255,0.55)" }}>
                  As development progresses, this page gains real screenshots, a recorded
                  end-to-end demo, launch details and a themed roadmap with statuses.
                </p>
                <div className="flex flex-wrap gap-4 justify-center items-center">
                  <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="famant-cta-brand">
                    Join the Famant waitlist <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <Link to="/contact" className="famant-cta-ghost" style={{ borderColor: "rgba(201,197,255,0.45)", color: "#C9C5FF", background: "rgba(107,98,241,0.12)" }}>
                    Ask us about Famant
                  </Link>
                </div>
                <p className="text-xs mt-5" style={{ color: "rgba(226,229,255,0.5)" }}>
                  The waitlist continues to famant.com — Famant's product site, by Antutive.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <div className="text-center mt-10">
              <Link to="/technology" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: "#C9C5FF" }}>
                Read how Famant is being built <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
