import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/content";
import { List, X } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  buttonHoverVariants,
} from "@/lib/motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const prefersReducedMotion = usePrefersReducedMotion();
  const { profile } = portfolioData;

  const navLinks = [
    { label: "Beranda", href: "#beranda", id: "beranda" },
    { label: "Sorotan", href: "#sorotan", id: "sorotan" },
    { label: "Tentang", href: "#tentang", id: "tentang" },
    { label: "Proyek", href: "#proyek", id: "proyek" },
    { label: "Keahlian", href: "#keahlian", id: "keahlian" },
    { label: "Riwayat", href: "#riwayat", id: "riwayat" },
    { label: "Sertifikasi", href: "#sertifikasi", id: "sertifikasi" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-bg/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand — gradient monogram */}
        <a
          href="#beranda"
          className="group relative flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
          aria-label={`${profile.name} — beranda`}
        >
          {/* Glow dot */}
          <span
            className="relative flex h-7 w-7 items-center justify-center rounded-lg"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
              boxShadow: "0 0 14px rgba(37,99,235,0.5)",
            }}
          >
            <span className="text-xs font-bold text-white leading-none">DK</span>
          </span>
          <span
            className="text-sm font-bold tracking-tight text-text-primary transition-colors group-hover:text-accent-text"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {profile.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi Utama">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  color: isActive
                    ? "var(--color-text-primary)"
                    : "var(--color-text-secondary)",
                }}
              >
                {isActive && !prefersReducedMotion && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-md"
                    style={{
                      backgroundColor: "var(--color-surface-2)",
                      border: "1px solid var(--color-border)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}

          {/* CTA Button */}
          <motion.a
            href={`mailto:${profile.contact.email}`}
            variants={prefersReducedMotion ? undefined : buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="ml-2 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
              boxShadow: "0 0 18px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            Hubungi saya
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md p-2 text-text-secondary hover:bg-surface-2 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="border-b border-border bg-bg/95 backdrop-blur-xl px-4 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Navigasi Seluler">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    style={{
                      color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                      backgroundColor: isActive ? "var(--color-surface-2)" : "transparent",
                    }}
                  >
                    {isActive && (
                      <span
                        className="mr-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
              <a
                href={`mailto:${profile.contact.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  boxShadow: "0 0 18px rgba(37,99,235,0.3)",
                }}
              >
                Hubungi saya
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
