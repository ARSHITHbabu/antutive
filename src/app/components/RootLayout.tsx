import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function LogoMark({ footer = false }: { footer?: boolean }) {
  const hid = footer ? "flg-f" : "flg-h";
  const c = `url(#${hid})`;
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={hid} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          {footer ? (
            <><stop offset="0%" stopColor="#fff" stopOpacity="0.92"/><stop offset="100%" stopColor="#fff" stopOpacity="0.50"/></>
          ) : (
            <><stop offset="0%" stopColor="#64B5F6"/><stop offset="55%" stopColor="#90CAF9"/><stop offset="100%" stopColor="#CE93D8"/></>
          )}
        </linearGradient>
      </defs>

      {/* Lightbulb orb */}
      <circle cx="24" cy="9" r="4" fill={c} opacity="0.88"/>
      {/* Rays */}
      <line x1="24"   y1="3.5" x2="24"   y2="2"   stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="29"   y1="5.2" x2="30.2" y2="4"   stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19"   y1="5.2" x2="17.8" y2="4"   stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="31.5" y1="9"   x2="33"   y2="9"   stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16.5" y1="9"   x2="15"   y2="9"   stroke={c} strokeWidth="1.5" strokeLinecap="round"/>

      {/* Stem — bulb to face circle */}
      <line x1="24" y1="13" x2="24" y2="15" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>

      {/* Face circle */}
      <circle cx="24" cy="26" r="11" fill="none" stroke={c} strokeWidth="1.8"/>

      {/* A letterform */}
      <line x1="24"   y1="18"   x2="18"   y2="33"   stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24"   y1="18"   x2="30"   y2="33"   stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20.2" y1="27.5" x2="27.8" y2="27.5" stroke={c} strokeWidth="2"   strokeLinecap="round"/>
      <circle cx="24"   cy="18"   r="1.6" fill={c}/>
      <circle cx="20.2" cy="27.5" r="1"   fill={c} opacity="0.8"/>
      <circle cx="27.8" cy="27.5" r="1"   fill={c} opacity="0.8"/>

      {/* Brain hemispheres — left (2 arc bumps) */}
      <path d="M 13 22 A 3 3 0 0 0 13 26 A 3 3 0 0 0 13 30" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
      {/* Brain hemispheres — right */}
      <path d="M 35 22 A 3 3 0 0 1 35 26 A 3 3 0 0 1 35 30" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>

      {/* Circuit arm — upper-left */}
      <polyline points="8,24 3,24 3,20"    stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="3"  cy="20" r="1.5" fill={c}/>
      {/* Circuit arm — lower-left */}
      <polyline points="8,28 3,28 3,32"    stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="3"  cy="32" r="1.5" fill={c}/>
      {/* Circuit arm — upper-right */}
      <polyline points="40,24 45,24 45,20" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="45" cy="20" r="1.5" fill={c}/>
      {/* Circuit arm — lower-right */}
      <polyline points="40,28 45,28 45,32" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="45" cy="32" r="1.5" fill={c}/>

      {/* Bottom fork */}
      <line x1="24" y1="37" x2="24" y2="41" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
      <polyline points="24,41 19,41 19,45"  stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="19" cy="45" r="1.5" fill={c}/>
      <polyline points="24,41 29,41 29,45"  stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="29" cy="45" r="1.5" fill={c}/>
    </svg>
  );
}

export function RootLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = [
    { name: "Services",          href: "/services" },
    { name: "Growth & Marketing", href: "/growth-marketing" },
    { name: "AI Platform",        href: "/custom-platform" },
    { name: "Consulting",         href: "/consulting" },
    { name: "Products",           href: "/products" },
    { name: "About",              href: "/about" },
  ];

  const isHome  = location.pathname === "/";
  const glassed = scrolled || !isHome;

  const headerCard: React.CSSProperties = glassed
    ? {
        background:        "rgba(255,255,255,0.78)",
        backdropFilter:    "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        border:            "1px solid rgba(100,181,246,0.2)",
        boxShadow:         "0 8px 32px rgba(100,181,246,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
      }
    : {
        background:        "rgba(255,255,255,0.07)",
        backdropFilter:    "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border:            "1px solid rgba(255,255,255,0.22)",
      };

  return (
    <div className="min-h-screen bg-white">

      {/* ── FLOATING HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ padding: scrolled ? "8px 20px" : "14px 20px" }}
      >
        <div className="max-w-7xl mx-auto">

          {/* glass card */}
          <div
            className="flex justify-between items-center px-5 rounded-2xl transition-all duration-300"
            style={{ ...headerCard, height: scrolled ? 52 : 60 }}
          >

            {/* logo */}
            <Link to="/" className="flex items-center gap-3">
              <LogoMark />
              <span
                className="text-sm font-bold transition-colors duration-300"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  letterSpacing: "0.18em",
                  color: "#64B5F6",
                }}
              >
                ANTUTIVE
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
                to="/contact"
                className="header-cta ml-3"
              >
                Contact Us
              </Link>
            </nav>

            {/* mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ color: "#64B5F6" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* mobile dropdown */}
          {mobileOpen && (
            <div
              className="lg:hidden mt-2 rounded-2xl p-4"
              style={{
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
                border: "1px solid rgba(100,181,246,0.18)",
                boxShadow: "0 16px 40px rgba(100,181,246,0.14)",
              }}
            >
              {[...nav, { name: "Contact", href: "/contact" }].map((item) => {
                const active = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 rounded-xl mb-1 text-sm transition-all"
                    style={{
                      fontWeight: active ? 600 : 500,
                      color: active ? "#64B5F6" : "rgba(100,181,246,0.7)",
                      background: active ? "rgba(100,181,246,0.08)" : "transparent",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </header>

      <main className="pt-20">
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="text-white"
        style={{ background: "linear-gradient(135deg,#64B5F6 0%,#90CAF9 50%,#CE93D8 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <LogoMark footer />
                <span className="text-sm font-bold tracking-widest" style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "0.15em" }}>
                  ANTUTIVE
                </span>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">
                Strategic AI engineering partner for European businesses.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 font-semibold text-white/90">Services</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["AI & Data Solutions",  "/services"],
                  ["Growth & Marketing AI","/growth-marketing"],
                  ["Custom AI Platform",   "/custom-platform"],
                  ["Consulting",           "/consulting"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="text-white/70 hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 font-semibold text-white/90">Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["About Us", "/about"],
                  ["Products", "/products"],
                  ["Contact",  "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="text-white/70 hover:text-white transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 font-semibold text-white/90">Legal</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>GDPR Compliance</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-xs text-white/70 tracking-wide">
            © 2026 ANTUTIVE AB · Gothenburg, Sweden · EU-compliant AI Engineering
          </div>
        </div>
      </footer>
    </div>
  );
}
