import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { COMPANY_DESCRIPTION } from "../lib/seo";
import { LineArtScene } from "./LineArt";
// Brand assets are served from public/ so they have stable same-domain URLs
// (https://<domain>/brand/…) usable outside the bundle as well.
const logoFull = "/brand/antutive-logo-full.png";
const logoMark = "/brand/antutive-logo-mark.png";

function AntutiveLogo({ size = 36 }: { size?: number }) {
  return (
    <img
      src={logoFull}
      alt="Antutive"
      className="block w-auto object-contain"
      style={{ height: size }}
    />
  );
}

function AntutiveMark({ size = 28 }: { size?: number }) {
  return (
    <img
      src={logoMark}
      alt="Antutive"
      className="block w-auto object-contain"
      style={{ height: size }}
    />
  );
}

export function RootLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Support #anchor targets (e.g. /famant#waitlist); otherwise reset to top.
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = [
    { name: "Products",   href: "/products" },
    { name: "Technology", href: "/technology" },
    { name: "About",      href: "/about" },
    { name: "Contact",    href: "/contact" },
  ];

  const isHome  = location.pathname === "/";
  const glassed = scrolled || !isHome;

  const headerCard: React.CSSProperties = glassed
    ? {
        background:        "rgba(248,250,252,0.92)",
        backdropFilter:    "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        border:            "1px solid rgba(124,146,199,0.30)",
        boxShadow:         "0 8px 32px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
      }
    : {
        background:        "rgba(248,250,252,0.75)",
        backdropFilter:    "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border:            "1px solid rgba(124,146,199,0.20)",
      };

  return (
    <div className="min-h-screen" style={{ background: "#f8fafc" }}>

      <a href="#main-content" className="skip-link">Skip to content</a>

      {/* ── FLOATING HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          padding: scrolled ? "8px 20px" : "14px 20px",
          background: scrolled ? "rgba(248,250,252,0.72)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : undefined,
          WebkitBackdropFilter: scrolled ? "blur(12px)" : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto">

          {/* glass card */}
          <div
            className="flex justify-between items-center px-5 rounded-2xl transition-all duration-300"
            style={{ ...headerCard, height: scrolled ? 56 : 64 }}
          >

            {/* logo — full wordmark on desktop, compact mark once scrolled on small screens */}
            <Link to="/" className="flex items-center" aria-label="Antutive home">
              <span className="hidden sm:block">
                <AntutiveLogo size={scrolled ? 34 : 40} />
              </span>
              <span className="sm:hidden">
                <AntutiveLogo size={32} />
              </span>
            </Link>

            {/* desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {nav.map((item) => {
                const active = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`header-link ${glassed ? "header-link--glass" : "header-link--clear"} ${active ? "header-link--active" : ""}`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                to="/famant"
                className="header-cta ml-3"
              >
                Meet Famant
              </Link>
            </nav>

            {/* mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ color: "#46589F" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* mobile dropdown */}
          {mobileOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="lg:hidden mt-2 rounded-2xl p-4"
              style={{
                background: "rgba(248,250,252,0.98)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
                border: "1px solid rgba(124,146,199,0.28)",
                boxShadow: "0 16px 40px rgba(15,23,42,0.12)",
              }}
            >
              <div className="flex items-center gap-2 px-4 pb-3 mb-2 border-b" style={{ borderColor: "rgba(124,146,199,0.20)" }}>
                <AntutiveMark size={22} />
                <span className="text-xs font-semibold" style={{ color: "#64748b" }}>AI-first product company</span>
              </div>
              {nav.map((item) => {
                const active = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 rounded-xl mb-1 text-sm transition-all"
                    style={{
                      fontWeight: active ? 600 : 500,
                      color: active ? "#46589F" : "rgba(30,41,59,0.80)",
                      background: active ? "rgba(124,146,199,0.14)" : "transparent",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
              {/* primary CTA has mobile parity with the desktop header */}
              <Link
                to="/famant"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 rounded-xl mt-2 text-sm font-semibold text-center text-white"
                style={{ background: "linear-gradient(135deg,#46589F,#7C92C7)" }}
              >
                Meet Famant
              </Link>
            </nav>
          )}
        </div>
      </header>

      <main id="main-content" className="pt-20">
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <LineArtScene scene="ecosystem" tone="light" className="line-art--footer" />
        <div className="footer-grid" aria-hidden="true" />
        <div className="footer-orb footer-orb--one" aria-hidden="true" />
        <div className="footer-orb footer-orb--two" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="footer-signal mb-14">
            <span className="footer-signal__dot" aria-hidden="true" />
            <span>One company. A growing portfolio of AI-first products.</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            <div className="md:col-span-1">
              <div className="mb-4">
                <Link to="/" aria-label="Antutive home">
                  <AntutiveLogo size={46} />
                </Link>
              </div>
              <p className="footer-copy text-sm leading-relaxed">
                {COMPANY_DESCRIPTION}
              </p>
            </div>

            <div>
              <h4 className="footer-heading">Products</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["All products",     "/products"],
                  ["Famant",           "/famant"],
                  ["Join the waitlist","/famant#waitlist"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["About",      "/about"],
                  ["Technology", "/technology"],
                  ["Contact",    "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="footer-link">{label}</Link>
                  </li>
                ))}
                <li>
                  <a href="https://datadelimited.com/" target="_blank" rel="noopener noreferrer"
                    className="footer-link">
                    Data Delimited ↗
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Legal</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["Privacy Policy",   "/privacy"],
                  ["Terms of Service", "/terms"],
                  ["Cookies",          "/cookies"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-meta border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wide">
            <span>© 2026 ANTUTIVE AB · Gothenburg, Sweden · Org.nr 559576-7228</span>
            <span className="inline-flex items-center gap-2">
              <AntutiveMark size={16} />
              AI-first product company
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
