import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  gradient: string;        // Tailwind bg-gradient-to-br class value (inline style)
  ctaLabel?: string;
  ctaHref?: string;
  chips?: string[];
}

export function PageHero({ eyebrow, title, subtitle, gradient, ctaLabel, ctaHref, chips }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "52vh", background: gradient }}
    >
      {/* mesh */}
      <div className="absolute inset-0 hero-mesh-overlay opacity-40" />

      {/* corner glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)", filter: "blur(30px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1.5 rounded-full border border-white/25 bg-white/10 text-white/80
            text-xs font-bold tracking-widest uppercase mb-5">
            {eyebrow}
          </span>

          <h1 className="hero-h1 text-white mb-5" style={{ fontWeight: 700 }}>{title}</h1>

          <p className="text-base text-white/75 max-w-xl leading-relaxed mb-8">{subtitle}</p>

          {chips && chips.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map(c => (
                <span key={c} className="px-3 py-1 rounded-full border border-white/20 bg-white/08 text-white/75 text-xs font-medium backdrop-blur-sm">
                  {c}
                </span>
              ))}
            </div>
          )}

          {ctaLabel && ctaHref && (
            <Link to={ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ color: "inherit" }}>
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
