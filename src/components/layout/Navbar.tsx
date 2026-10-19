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
  const prefersReducedMotion = usePrefersReducedMotion();
  const { profile } = portfolioData;

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Sorotan", href: "#sorotan" },
    { label: "Tentang", href: "#tentang" },
    { label: "Proyek", href: "#proyek" },
    { label: "Alur Kerja", href: "#cara-kerja" },
    { label: "Keahlian", href: "#keahlian" },
    { label: "Riwayat", href: "#riwayat" },
  ];

  // Navbar scroll state — CSS-class swap only, no layout shift
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-bg/95 backdrop-blur-md"
          : "border-transparent bg-bg/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#beranda"
          className="text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {profile.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {link.label}
            </a>
          ))}
          {/* CTA Button with motion hover */}
          <motion.a
            href={`mailto:${profile.contact.email}`}
            variants={prefersReducedMotion ? undefined : buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
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

      {/* Mobile Drawer — AnimatePresence for true DOM enter/exit */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="border-b border-border bg-surface px-4 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Navigasi Seluler">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-2 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${profile.contact.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
