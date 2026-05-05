import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/Screenshot_2026-05-03_141703-removebg-preview.png";

function AntuitiveLogo({ size = 36 }: { size?: number }) {
  return (
    <img
      src={logo}
      alt="Antuitive"
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
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = [
    { name: "Our Work",      href: "/growth-marketing" },
    { name: "Custom Build",  href: "/custom-platform" },
    { name: "Products",      href: "/products" },
    { name: "About",         href: "/about" },
  ];

  const isHome  = location.pathname === "/";
  const glassed = scrolled || !isHome;

  const headerCard: React.CSSProperties = glassed
    ? {
        background:        "rgba(248,250,252,0.92)",
        backdropFilter:    "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        border:            "1px solid rgba(28,183,180,0.22)",
        boxShadow:         "0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
      }
    : {
        background:        "rgba(248,250,252,0.75)",
        backdropFilter:    "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border:            "1px solid rgba(111,60,195,0.15)",
      };

  return (
    <div className="min-h-screen" style={{ background: "#f8fafc" }}>

      {/* ── FLOATING HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ padding: scrolled ? "8px 20px" : "14px 20px", background: "#f8fafc" }}
      >
        <div className="max-w-7xl mx-auto">

          {/* glass card */}
          <div
            className="flex justify-between items-center px-5 rounded-2xl transition-all duration-300"
            style={{ ...headerCard, height: scrolled ? 56 : 64 }}
          >

            {/* logo */}
            <Link to="/" className="flex items-center">
              <AntuitiveLogo size={32} />
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
              style={{ color: "#1CB7B4" }}
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
                background: "rgba(248,250,252,0.98)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
                border: "1px solid rgba(28,183,180,0.20)",
                boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
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
                      color: active ? "#6F3CC3" : "rgba(30,41,59,0.80)",
                      background: active ? "rgba(111,60,195,0.10)" : "transparent",
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
        className="text-[#334155]"
        style={{ background: "linear-gradient(135deg,#f1f5f9 0%,#e2e8f0 48%,#f5f3ff 100%)", borderTop: "1px solid rgba(111,60,195,0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            <div className="md:col-span-1">
              <div className="mb-3">
                <Link to="/">
                  <AntuitiveLogo size={44} />
                </Link>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed">
                European product engineering company building software for businesses.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 font-semibold text-[#334155]">Solutions</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["Our Work",      "/growth-marketing"],
                  ["Custom Build",  "/custom-platform"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="text-[#64748b] hover:text-[#6F3CC3] transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 font-semibold text-[#334155]">Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  ["About Us", "/about"],
                  ["Products", "/products"],
                  ["Contact",  "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className="text-[#64748b] hover:text-[#6F3CC3] transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 font-semibold text-[#334155]">Legal</h4>
              <ul className="space-y-3 text-sm text-[#64748b]">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>GDPR Compliance</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-300 mt-12 pt-8 text-center text-xs text-[#64748b] tracking-wide">
            © 2026 ANTUTIVE AB · Gothenburg, Sweden · EU-based Product Engineering
          </div>
        </div>
      </footer>
    </div>
  );
}
