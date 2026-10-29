import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { usePortfolioContent } from "@/data/content";
import { useApp } from "@/context/AppContext";
import { List, X, Sun, Moon } from "@phosphor-icons/react";
import { usePrefersReducedMotion } from "@/lib/motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const prefersReducedMotion = usePrefersReducedMotion();
  const { lang, toggleLang, theme, toggleTheme } = useApp();
  const content = usePortfolioContent();
  const { profile, labels } = content;
  const navLinks = labels.nav.links;

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
  }, [navLinks]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Monogram */}
        <a
          href="#beranda"
          className="group relative flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg rounded-md"
          aria-label={`${profile.name} • ${labels.nav.links[0]?.label || "Home"}`}
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-fg text-bg transition-transform duration-200 group-hover:scale-105">
            <span className="text-[11px] font-mono font-bold leading-none tracking-tighter">
              DK
            </span>
          </span>
          <span className="text-sm font-semibold tracking-tight text-text-primary transition-opacity group-hover:opacity-80">
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
                className="relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
                style={{
                  color: isActive
                    ? "var(--sh-fg)"
                    : "var(--sh-text-secondary)",
                }}
              >
                {isActive && !prefersReducedMotion && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: "var(--sh-surface-2)",
                      border: "1px solid var(--sh-border)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}

          <div className="mx-2 h-4 w-px bg-border" />

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] font-mono font-medium text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors"
            title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            aria-label="Toggle language"
          >
            <span className={lang === "id" ? "font-bold text-text-primary" : "opacity-60"}>
              ID
            </span>
            <span className="opacity-30">/</span>
            <span className={lang === "en" ? "font-bold text-text-primary" : "opacity-60"}>
              EN
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors"
            title={theme === "dark" ? "Ganti ke Light Mode" : "Ganti ke Dark Mode"}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={15} weight="regular" />
            ) : (
              <Moon size={15} weight="regular" />
            )}
          </button>

          {/* High-contrast Monochrome Pill CTA Button */}
          <a
            href={`mailto:${profile.contact.email}`}
            className="btn-pill-primary ml-1 text-xs"
          >
            {labels.nav.cta}
          </a>
        </nav>

        {/* Mobile Menu & Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full border border-border px-2 py-1 text-[11px] font-mono font-medium text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === "id" ? "font-bold text-text-primary" : "opacity-60"}>
              ID
            </span>
            <span className="opacity-30">/</span>
            <span className={lang === "en" ? "font-bold text-text-primary" : "opacity-60"}>
              EN
            </span>
          </button>

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-border p-2 text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
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
                    className="flex min-h-[40px] items-center rounded-xl px-3.5 py-2 text-sm font-medium transition-colors"
                    style={{
                      color: isActive ? "var(--sh-fg)" : "var(--sh-text-secondary)",
                      backgroundColor: isActive ? "var(--sh-surface-2)" : "transparent",
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href={`mailto:${profile.contact.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-pill-primary mt-3 text-center"
              >
                {labels.nav.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
