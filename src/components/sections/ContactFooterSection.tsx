import { useState, useRef } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  EnvelopeSimple,
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TiktokLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  buttonHoverVariants,
  VIEWPORT,
} from "@/lib/motion";

export function ContactFooterSection() {
  const { profile } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();

  // Spotlight hook for contact callout
  const bannerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current || prefersReducedMotion) return;
    const rect = bannerRef.current.getBoundingClientRect();
    bannerRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    bannerRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <footer id="kontak" className="border-t border-border bg-surface pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Contact Banner / Callout Card */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
          className="rounded-3xl relative overflow-hidden p-8 sm:p-12 lg:p-14"
          style={{
            backgroundColor: "var(--color-surface-2)",
            border: "1px solid rgba(37,99,235,0.35)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 24px rgba(37,99,235,0.12)",
          }}
        >
          {/* Subtle top accent gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, #60A5FA 100%)",
            }}
          />

          <div
            ref={bannerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            {/* Spotlight */}
            {!prefersReducedMotion && (
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  background:
                    "radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.12), transparent 70%)",
                }}
              />
            )}

            <div className="max-w-xl relative">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4"
                style={{
                  backgroundColor: "rgba(37,99,235,0.12)",
                  color: "var(--color-accent-text)",
                  border: "1px solid rgba(37,99,235,0.25)",
                }}
              >
                Inisiasi Kolaborasi
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
                style={{
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.02em",
                }}
              >
                Tertarik Berdiskusi atau Memiliki Peluang Kerja?
              </h2>
              <p
                className="mt-3 text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Saya terbuka untuk posisi di bidang{" "}
                <strong style={{ color: "var(--color-text-primary)" }}>
                  IT Umum, Data &amp; Reporting, Web Development, maupun IT Support / Sistem Operasional
                </strong>
                . Mari terhubung dan diskusikan bagaimana kemampuan teknis saya dapat mendukung kebutuhan tim Anda.
              </p>
            </div>

            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <motion.a
                href={`mailto:${profile.contact.email}`}
                variants={prefersReducedMotion ? undefined : buttonHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  boxShadow: "0 0 24px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                  textDecoration: "none",
                }}
              >
                <EnvelopeSimple size={18} aria-hidden="true" />
                Hubungi via Email
              </motion.a>

              <motion.a
                href={profile.cvFilePath}
                download
                variants={prefersReducedMotion ? undefined : buttonHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                }}
              >
                <DownloadSimple size={18} aria-hidden="true" />
                Unduh CV (PDF)
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer info & Links */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-8 text-xs text-text-muted"
        >
          <div>
            <p className="font-mono text-center sm:text-left">
              © {new Date().getFullYear()} {profile.name} · Dirancang dengan standar presisi teknis.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <motion.a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub Dhafin Kurniawan"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.15, color: "#FAFAFA" }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
              style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
            >
              <GithubLogo size={18} aria-hidden="true" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn Dhafin Kurniawan"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.15, color: "#60A5FA" }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
              style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
            >
              <LinkedinLogo size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href={profile.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil Instagram @dhafinwan"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.15, color: "#F472B6" }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
              style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
            >
              <InstagramLogo size={18} aria-hidden="true" />
              <span>Instagram</span>
            </motion.a>

            <motion.a
              href={profile.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil TikTok @finn.code"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.15, color: "#2DD4BF" }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
              style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
            >
              <TiktokLogo size={18} aria-hidden="true" />
              <span>TikTok</span>
            </motion.a>

            <motion.a
              href={profile.contact.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil Hugging Face Dhafin Kurniawan"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.1, color: "#FCD34D" }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              className="flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1"
              style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
            >
              <span>🤗 Hugging Face</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default ContactFooterSection;
