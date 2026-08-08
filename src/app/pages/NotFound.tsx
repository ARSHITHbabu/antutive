import { Link } from "react-router";
import { ArrowRight, Compass } from "lucide-react";
import { Noise, AuroraOrb, DotMatrix } from "../components/Decor";
import { usePageMeta } from "../lib/seo";
import { LineArtScene } from "../components/LineArt";

export function NotFound() {
  usePageMeta({
    title: "Page not found | Antutive",
    description: "The page you were looking for doesn't exist.",
    path: "/404",
    noindex: true,
  });

  const links = [
    ["Home",       "/"],
    ["Products",   "/products"],
    ["Famant",     "/famant"],
    ["Technology", "/technology"],
    ["About",      "/about"],
    ["Contact",    "/contact"],
  ];

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "min(70vh, 720px)", background: "linear-gradient(135deg,#f8fafc 0%,#eef2fa 50%,#f8fafc 100%)" }}
    >
      <Noise />
      <AuroraOrb size={420} color="rgba(124,146,199,0.16)" style={{ top: -140, right: -110 }} />
      <AuroraOrb size={320} color="rgba(70,88,159,0.13)" delay={5} style={{ bottom: -100, left: -80 }} />
      <DotMatrix style={{ bottom: 30, right: 24 }} />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
        <LineArtScene scene="lost" className="line-art--lost" />
        <div className="relative inline-flex mb-8">
          <span className="absolute -inset-4 rounded-full" aria-hidden="true"
            style={{ border: "1.5px dashed rgba(124,146,199,0.55)", animation: "spinSlow 24s linear infinite" }} />
          <span className="absolute -inset-8 rounded-full" aria-hidden="true"
            style={{ border: "1px dashed rgba(124,146,199,0.30)", animation: "spinSlow 40s linear infinite reverse" }} />
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center slow-float"
            style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)", boxShadow: "0 12px 32px rgba(70,88,159,0.30)" }}>
            <Compass className="w-6 h-6 text-white" />
          </div>
        </div>
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#46589F" }}>404 — Page not found</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
          This page doesn't exist.
        </h1>
        <p className="text-sm text-[#64748b] leading-relaxed mb-8 max-w-md mx-auto">
          The address may have changed as the site was restructured. Everything worth
          finding is one click away.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {links.map(([label, href]) => (
            <Link key={href} to={href} className="px-4 py-2 rounded-full border text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ borderColor: "rgba(124,146,199,0.35)", background: "#ffffff", color: "#46589F" }}>
              {label}
            </Link>
          ))}
        </div>
        <Link to="/famant" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: "#46589F" }}>
          Or meet Famant, the product we're building
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
