import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { usePortfolioContent } from "@/data/content";
import { useApp } from "@/context/AppContext";
import { List, X, Sun, Moon } from "@phosphor-icons/react";
import { usePrefersReducedMotion } from "@/lib/motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const prefersReducedMotion = usePrefersReducedMotion();
  const { lang, toggleLang, theme, toggleTheme } = useApp();
  const content = usePortfolioContent();
  const { profile, labels } = content;
  const navLinks = labels.nav.links;

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navLinks]);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/85 backdrop-blur-md border-b border-border transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Monogram */}
        <a
          href="#beranda"
          className="group relative flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg rounded-md"
          aria-label={`${profile.name} - ${labels.nav.links[0]?.label || "Home"}`}
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-fg text-bg font-mono font-bold text-xs tracking-tight transition-transform duration-150 group-hover:scale-105">
            DK
          </span>
          <span className="text-sm font-semibold tracking-tight text-text-primary transition-opacity group-hover:opacity-85">
            {profile.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label={labels.nav.navAria}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg ${
                  isActive
                    ? "text-text-primary font-semibold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {isActive && !prefersReducedMotion && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-surface-2 border border-border"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
            className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs font-mono font-medium text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
            title={labels.nav.toggleLangAria}
            aria-label={labels.nav.toggleLangAria}
          >
            <span className={lang === "id" ? "font-bold text-text-primary" : "opacity-50"}>
              ID
            </span>
            <span className="opacity-30">/</span>
            <span className={lang === "en" ? "font-bold text-text-primary" : "opacity-50"}>
              EN
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
            title={labels.nav.toggleThemeAria}
            aria-label={labels.nav.toggleThemeAria}
          >
            {theme === "dark" ? (
              <Sun size={15} weight="bold" />
            ) : (
              <Moon size={15} weight="bold" />
            )}
          </button>

          {/* Clean Pill CTA Button */}
          <a
            href={`mailto:${profile.contact.email}`}
            className="btn-pill-primary ml-1 text-xs"
          >
            {labels.nav.cta}
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-full border border-border px-2 py-1 text-xs font-mono font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
            aria-label={labels.nav.toggleLangAria}
          >
            <span className={lang === "id" ? "font-bold text-text-primary" : "opacity-50"}>
              ID
            </span>
            <span className="opacity-30">/</span>
            <span className={lang === "en" ? "font-bold text-text-primary" : "opacity-50"}>
              EN
            </span>
          </button>

          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
            aria-label={labels.nav.toggleThemeAria}
          >
            {theme === "dark" ? <Sun size={15} weight="bold" /> : <Moon size={15} weight="bold" />}
          </button>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border p-2 text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? labels.nav.closeMenuAria : labels.nav.openMenuAria}
          >
            {mobileMenuOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="border-b border-border bg-bg/95 backdrop-blur-xl px-4 py-4 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-1" aria-label={labels.nav.mobileNavAria}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-surface-2 text-text-primary font-semibold"
                        : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href={`mailto:${profile.contact.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-pill-primary mt-3 text-center justify-center w-full"
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
