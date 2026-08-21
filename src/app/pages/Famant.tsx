import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { ArrowRight, Sparkles, Users, ShieldCheck, Eye, Camera, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, useVisible } from "../lib/scroll";
import { Noise, DotMatrix, AuroraOrb } from "../components/Decor";
import { usePageMeta, PRODUCT_DESCRIPTION } from "../lib/seo";
import { metaFor } from "../lib/routeMeta";
import { capabilities, famantScreenshots, iosBetaHref, androidBetaHref, OWNERSHIP_LINE, STAGE_LINE } from "../content/famant";
import { LineArtScene, LineArtCorner, LineArtFlourish } from "../components/LineArt";

const famantVideo = "/media/famant.webm";

const targetUsers = [
  { Icon: Users, title: "Parents and partners", desc: "The people who currently carry the family's coordination load, usually one or two per household." },
  { Icon: Users, title: "Busy households", desc: "Families juggling school, work, activities and everything in between, across too many separate tools." },
  { Icon: Users, title: "Multi-generation households", desc: "Homes where coordination spans grandparents, parents and children, and context matters even more." },
];

/* ── Platform beta buttons — store-badge style, no store-listing claims.
   Hrefs come from src/app/content/famant.ts (the single place the final
   iOS / Android beta URLs get filled in). ── */
function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className="beta-store-icon" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className="beta-store-icon" fill="currentColor">
      <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}

/* ── Animated screenshot gallery + lightbox ──
   Screenshots are organized as topic groups — the phone and tablet
   capture of the same screen sit side by side under one shared caption,
   with a device tag on each image. Staggered rise-in (same
   IntersectionObserver gate as Reveal), idle float per frame, sheen +
   zoom chip on hover, click to expand into a keyboard-navigable
   lightbox (Esc / ← / →). */
const screenshotGroups = famantScreenshots.reduce<
  { topic: string; items: { shot: (typeof famantScreenshots)[number]; index: number }[] }[]
>((acc, shot, index) => {
  const last = acc[acc.length - 1];
  if (last && last.topic === shot.caption) last.items.push({ shot, index });
  else acc.push({ topic: shot.caption, items: [{ shot, index }] });
  return acc;
}, []);

function FamantGallery() {
  const { ref, on } = useVisible();
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = famantScreenshots.length;

  const step = useCallback(
    (d: number) => setActive((a) => (a === null ? a : (a + d + count) % count)),
    [count],
  );

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, step]);

  const shot = active === null ? null : famantScreenshots[active];

  return (
    <>
      <div ref={ref} className={`famant-shots${on ? " famant-shots--on" : ""}`}
        aria-label="Screenshots of the Famant application, grouped by screen">
        {screenshotGroups.map(({ topic, items }, gi) => (
          <figure key={topic} className="famant-shot-group"
            style={{
              "--group-ar": items.reduce((sum, { shot }) => sum + shot.width / shot.height, 0),
              transitionDelay: `${gi * 130}ms`,
            } as CSSProperties}>
            <div className="famant-shot-pair">
              {items.map(({ shot, index }) => (
                <button key={shot.src} type="button" className="famant-shot-frame"
                  style={{ "--shot-ar": shot.width / shot.height, animationDelay: `${(index % 3) * 1.6}s` } as CSSProperties}
                  onClick={() => setActive(index)}
                  aria-label={`View larger — ${shot.caption} (${shot.device})`}>
                  <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" />
                  <span className="famant-shot-sheen" aria-hidden="true" />
                  <span className="famant-shot-devtag">{shot.device}</span>
                  <span className="famant-shot-zoom"><Maximize2 className="w-4 h-4" aria-hidden="true" /></span>
                </button>
              ))}
            </div>
            <figcaption className="famant-shot-caption">{topic}</figcaption>
          </figure>
        ))}
      </div>

      {/* portal: the gallery sits inside a `relative z-10` container whose
          stacking context would trap the overlay below the fixed header */}
      {shot && createPortal(
        <div className="famant-lightbox" role="dialog" aria-modal="true"
          aria-label={`${shot.caption} — enlarged screenshot`}
          onClick={() => setActive(null)}>
          <figure className="famant-lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <img key={shot.src} src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} />
            <figcaption className="famant-lightbox-caption">
              <span>{shot.caption}</span>
              <span className="famant-shot-device">{shot.device}</span>
              <span className="famant-lightbox-count">{(active as number) + 1} / {count}</span>
            </figcaption>
          </figure>
          <button ref={closeRef} type="button" className="famant-lightbox-btn famant-lightbox-close"
            onClick={() => setActive(null)} aria-label="Close">
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
          <button type="button" className="famant-lightbox-btn famant-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous screenshot">
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>
          <button type="button" className="famant-lightbox-btn famant-lightbox-next"
            onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next screenshot">
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>,
        document.body,
      )}
    </>
  );
}

export function PlatformBetaButtons({ align = "center" }: { align?: "center" | "start" }) {
  return (
    <div className={`flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}>
      <a href={iosBetaHref} target={iosBetaHref.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="beta-store-btn">
        <AppleMark />
        <span className="beta-store-text">
          <span className="beta-store-kicker">Join the beta on</span>
          <span className="beta-store-platform">iOS</span>
        </span>
      </a>
      <a href={androidBetaHref} target={androidBetaHref.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="beta-store-btn">
        <PlayMark />
        <span className="beta-store-text">
          <span className="beta-store-kicker">Join the beta on</span>
          <span className="beta-store-platform">Android</span>
        </span>
      </a>
    </div>
  );
}

export function Famant() {
  usePageMeta(metaFor("/famant"));

  return (
    <div style={{ background: "#f8fafc" }}>

      {/* ── HERO — dark product panel ── */}
      <section className="famant-section py-20 relative overflow-hidden">
        <Noise />
        <div className="famant-orbit" style={{ width: "26.25rem", height: "26.25rem", top: "-8.75rem", right: "-7.5rem", background: "radial-gradient(circle, rgba(107,98,241,0.20), transparent 70%)" }} />
        <div className="famant-orbit" style={{ width: "21.25rem", height: "21.25rem", bottom: "-6.25rem", left: "-6.25rem", background: "radial-gradient(circle, rgba(46,196,182,0.16), transparent 70%)", animationDelay: "4s" }} />
        <DotMatrix style={{ bottom: "2.5rem", right: "1.875rem", backgroundImage: "radial-gradient(rgba(107,98,241,0.4) 1.5px, transparent 1.5px)" }} />

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
                    {["Scheduling", "Tasks", "Lists", "Documents", "Expenses", "Planning"].map((tag) => (
                      <span key={tag} className="famant-chip">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <a href="#beta" className="famant-cta-brand">
                      Try the Famant Beta <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="#screens" className="famant-cta-ghost"
                      style={{ borderColor: "rgba(201,197,255,0.45)", color: "#C9C5FF", background: "rgba(107,98,241,0.12)" }}>
                      See the app
                    </a>
                  </div>
                  <p className="text-xs mt-4" style={{ color: "rgba(226,229,255,0.55)" }}>
                    Beta available for iOS and Android
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-end relative">
                  <div className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(107,98,241,0.35), transparent 65%)", filter: "blur(40px)" }} />
                  <video src={famantVideo} autoPlay loop muted playsInline aria-hidden="true" className="famant-hero-video"
                    style={{ width: "100%", objectFit: "contain", position: "relative", zIndex: 1 }} />
                  <p className="text-xs relative z-10 lg:pr-10" style={{ color: "rgba(226,229,255,0.45)" }}>
                    Brand illustration. Real screenshots of the app are just below.
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
                shared lists and separate planning, and the load of holding it together
                falls on one or two people. The hard part was never having somewhere to put
                things. It's knowing what a school form means, which commitments clash, who
                should do what, and what has to happen next.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                That is work of interpretation, prioritisation and follow-through: exactly
                the class of work modern AI is suited to carry, with a person staying in
                charge of every decision. Famant is that idea, working, in an app a family
                can test today.
              </p>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="p-8 rounded-3xl border" style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
                <span className="section-eyebrow-light">Why We Built It</span>
                <h3 className="text-lg font-bold text-[#0f172a] mt-3 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                  Famant started as our own frustration.
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-3">
                  Calendars in three places, school forms lost in a drawer, dinner a nightly
                  negotiation. So we built the product we wanted in our own homes:
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

      {/* ── REAL SCREENSHOTS — evidence of the working app ── */}
      <section id="screens" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#eef2fa 0%,#f8fafc 55%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 services-grid-bg pointer-events-none opacity-40" />
        <AuroraOrb size={360} color="rgba(107,98,241,0.10)" style={{ top: "-4rem", left: "-4rem" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <span className="section-eyebrow-light">Inside the App</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>
                Real screens from the Famant beta
              </h2>
              <p className="text-sm text-[#64748b] mt-3">
                Actual screenshots of Famant running on phones and tablets — your family's
                members, its assistant, and its tasks, lists, events, documents, budgeting
                and meal planning in one place.
              </p>
            </div>
          </Reveal>
          <FamantGallery />
          <Reveal variant="up" delay={120}>
            <div className="text-center mt-6">
              <a href="#beta" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: "#6B62F1" }}>
                Get beta access <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 60%,#eef2fa 100%)" }}>
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

      {/* ── CAPABILITIES — mechanism → outcome ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#ffffff 0%,#f8fafc 50%,#eef2fa 100%)" }}>
        <div className="absolute inset-0 why-dots-bg pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-6 max-w-2xl mx-auto">
              <span className="section-eyebrow-light">Capabilities</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>
                What Famant helps your family do
              </h2>
              <p className="text-sm text-[#64748b] mt-3">
                Each capability is a model-driven behaviour: input → what the assistant does →
                what the family sees → confirmation. Voice is an interface to the assistant,
                not the category; you can type or speak.
              </p>
            </div>
          </Reveal>
          <Reveal variant="up" delay={60}>
            <p className="text-center text-xs text-[#94a3b8] mb-12 max-w-xl mx-auto">
              Everything below is available in the current Famant beta, described as it
              works today.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {capabilities.map(({ Icon, title, mechanism, outcome }, i) => (
              <Reveal key={title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="famant-card h-full flex flex-col" style={{ padding: "1.75rem" }}>
                  <div className="famant-icon mb-4"><Icon className="w-5 h-5 text-white" /></div>
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
        <AuroraOrb size={380} color="rgba(70,88,159,0.12)" style={{ top: "-5rem", right: "-3.75rem" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <span className="section-eyebrow-light">How It Works</span>
              <h2 className="section-h2 text-[#0f172a] mt-3" style={{ fontWeight: 700 }}>One concrete flow, end to end</h2>
              <p className="text-sm text-[#64748b] mt-3 max-w-xl mx-auto">
                This is the pattern every Famant capability follows in the beta today.
              </p>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={80}>
            <div className="p-8 rounded-3xl border relative" style={{ background: "#ffffff", borderColor: "rgba(124,146,199,0.30)", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}>
              {/* connector spine across the four steps (desktop) */}
              <div className="hidden lg:block absolute pointer-events-none" aria-hidden="true" style={{ top: "2.8rem", left: "14%", right: "14%" }}>
                <svg width="100%" height="2" style={{ overflow: "visible" }}>
                  <line x1="0" y1="1" x2="100%" y2="1" stroke="#6B62F1" strokeWidth="2" className="flow-dash" opacity="0.5" />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { Icon: Camera,      step: "Input",        desc: "Photograph a birthday invitation." },
                  { Icon: Eye,         step: "Understanding",desc: "The assistant reads it: date, time, venue, child." },
                  { Icon: Sparkles,    step: "Proposal",     desc: "It proposes the calendar event, a gift reminder and an RSVP task." },
                  { Icon: ShieldCheck, step: "Confirmation", desc: "Nothing is added until a family member confirms. If it misread, you correct or dismiss; nothing has happened yet." },
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
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                  style={{ background: "rgba(107,98,241,0.10)", border: "1px solid rgba(107,98,241,0.35)", color: "#6B62F1" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#6B62F1" }} aria-hidden="true" />
                  Available in beta
                </span>
                <span className="text-xs text-[#94a3b8]">
                  How the assistant works in the current Famant beta.
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
                built around that reality: the assistant proposes rather than acts,
                households are kept strictly separate, and the product asks for no more data
                than a capability needs.
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed">
                We publish specific security and privacy practices as they are
                implemented and reviewed: implemented controls only, no compliance badges.
              </p>
            </Reveal>
            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-4">
                {[
                  { title: "Confirmation before action", desc: "The assistant never changes the family's world on its own. It proposes; a family member confirms." },
                  { title: "When the AI is wrong", desc: "A wrong proposal costs one tap: correct it or dismiss it. Because nothing happens before confirmation, a misreading never becomes a missed pickup." },
                  { title: "Designed as an EU product", desc: "Built by a Swedish company that treats family-data care as a constraint on design, not a feature to add later." },
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

      {/* ── BETA ACCESS — primary platform download/test area ── */}
      <section id="beta" className="famant-section py-24 relative overflow-hidden">
        {/* legacy anchor: old links pointed at /famant#waitlist */}
        <span id="waitlist" aria-hidden="true" />
        <Noise />
        <div className="famant-orbit" style={{ width: "23.75rem", height: "23.75rem", top: "-7.5rem", left: "-6.875rem", background: "radial-gradient(circle, rgba(107,98,241,0.18), transparent 70%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="famant-hero-panel text-center p-10 sm:p-12">
              <Noise />
              <LineArtCorner tone="light" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                  Famant is ready for beta testing.
                </h2>
                <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(226,229,255,0.75)" }}>
                  The Famant beta runs on supported iOS and Android devices. Pick your
                  platform to start testing, and help shape the product with what you find.
                </p>
                <PlatformBetaButtons />
                <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
                  <Link to="/contact" className="famant-cta-ghost" style={{ borderColor: "rgba(201,197,255,0.45)", color: "#C9C5FF", background: "rgba(107,98,241,0.12)" }}>
                    Ask us about Famant
                  </Link>
                </div>
                <p className="text-xs mt-5" style={{ color: "rgba(226,229,255,0.5)" }}>
                  Famant is built and operated by Antutive in Gothenburg, Sweden.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <div className="text-center mt-10">
              <Link to="/technology" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: "#C9C5FF" }}>
                Read how Famant is built <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
