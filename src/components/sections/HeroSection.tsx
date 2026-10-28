import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  usePrefersReducedMotion,
  containerStaggerVariants,
  fadeInUpVariants,
  buttonHoverVariants,
  iconHoverVariants,
} from "@/lib/motion";
import {
  ArrowRight,
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react";

export function HeroSection() {
  const { profile } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : containerStaggerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initialState = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="beranda"
      className="relative border-b border-border/40 bg-bg overflow-hidden pt-24 pb-12 min-h-[88vh] flex items-center"
    >
      {/* Lightweight CSS Radial-Gradient Glow Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Blue glow top-right */}
        <div
          className="absolute -top-24 right-[-5%] h-[480px] w-[480px] rounded-full blur-[130px] opacity-25"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, #3B82F6 40%, transparent 70%)",
          }}
        />
        {/* Indigo/purple glow center-left */}
        <div
          className="absolute top-1/3 left-[-10%] h-[420px] w-[420px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, #6366F1 50%, transparent 70%)",
          }}
        />
        {/* Soft bottom cyan tint */}
        <div
          className="absolute bottom-[-10%] right-1/3 h-[360px] w-[360px] rounded-full blur-[110px] opacity-15"
          style={{
            background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid mesh pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-14">

          {/* Left: Text Content & Actions */}
          <motion.div
            className="max-w-2xl flex-1 text-left"
            variants={containerVariants}
            initial={initialState}
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-sm"
                style={{
                  borderColor: "rgba(37,99,235,0.3)",
                  backgroundColor: "rgba(37,99,235,0.08)",
                  color: "var(--color-accent-text)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: "#22C55E" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: "#22C55E" }}
                  />
                </span>
                Terbuka untuk Peluang Entry-Level
              </span>
            </motion.div>

            {/* Name H1 */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--color-text-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Dhafin{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #2563EB 60%, #C4B5FD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Kurniawan
              </span>
            </motion.h1>

            {/* Role Chips */}
            <motion.div variants={itemVariants} className="mt-4 flex flex-wrap items-center gap-2">
              {[
                "Informatics Graduate",
                "IT & System Enthusiast",
                "Data & Reporting Analyst",
                "Web & Python Developer",
              ].map((role) => (
                <span
                  key={role}
                  className="rounded-md px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-3.5 text-sm font-semibold"
              style={{ color: "var(--color-accent-text)" }}
            >
              {profile.subtitle}
            </motion.p>

            {/* Narrative */}
            <motion.p
              variants={itemVariants}
              className="mt-3.5 text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)", maxWidth: "58ch" }}
            >
              Senang memecahkan masalah lewat teknologi. Berpengalaman membangun aplikasi web, mengolah data menjadi laporan, membuat sistem otomasi dengan Python, hingga menangani operasional teknis dan jaringan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href={`mailto:${profile.contact.email}`}
                variants={prefersReducedMotion ? undefined : buttonHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  boxShadow: "0 0 24px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                  textDecoration: "none",
                }}
              >
                Hubungi Saya
                <ArrowRight size={16} aria-hidden="true" />
              </motion.a>

              <motion.a
                href="/cv/CV_DHAFIN KURNIAWAN_ENGLISH.pdf"
                download
                variants={prefersReducedMotion ? undefined : buttonHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border px-6 text-sm font-medium backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "rgba(24,24,27,0.7)",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                }}
              >
                <DownloadSimple size={16} aria-hidden="true" />
                Unduh CV (PDF)
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub"
                variants={prefersReducedMotion ? undefined : iconHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="flex items-center gap-1.5 text-sm transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
              >
                <GithubLogo size={16} aria-hidden="true" />
                <span>GitHub</span>
              </motion.a>
              <span style={{ color: "var(--color-border)" }}>·</span>
              <motion.a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn"
                variants={prefersReducedMotion ? undefined : iconHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="flex items-center gap-1.5 text-sm transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
              >
                <LinkedinLogo size={16} aria-hidden="true" />
                <span>LinkedIn</span>
              </motion.a>
              <span style={{ color: "var(--color-border)" }}>·</span>
              <motion.a
                href={profile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil Instagram @dhafinwan"
                variants={prefersReducedMotion ? undefined : iconHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="flex items-center gap-1.5 text-sm transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
              >
                <InstagramLogo size={16} aria-hidden="true" />
                <span>Instagram</span>
              </motion.a>
              <span style={{ color: "var(--color-border)" }}>·</span>
              <motion.a
                href={profile.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil TikTok @finn.code"
                variants={prefersReducedMotion ? undefined : iconHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="flex items-center gap-1.5 text-sm transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
              >
                <TiktokLogo size={16} aria-hidden="true" />
                <span>TikTok</span>
              </motion.a>
              <span style={{ color: "var(--color-border)" }}>·</span>
              <motion.a
                href={profile.contact.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil Hugging Face"
                variants={prefersReducedMotion ? undefined : iconHoverVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                className="text-sm transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}
              >
                <span>🤗 Hugging Face</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo (Utuh & Jelas di Mobile & Desktop) */}
          <motion.div
            className="flex flex-shrink-0 justify-center lg:justify-end"
            initial={prefersReducedMotion ? "visible" : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Subtle ambient glow behind photo */}
              <div
                className="absolute -inset-2 rounded-2xl blur-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(139,92,246,0.2) 100%)",
                }}
              />
              {/* Subtle border outline */}
              <div
                className="absolute -inset-[1px] rounded-2xl"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, #2563EB 0deg, transparent 120deg, #7C3AED 240deg, transparent 360deg)",
                  opacity: 0.6,
                }}
              />
              {/* Photo Image */}
              <img
                src="/foto-dhafin.jpg"
                alt="Dhafin Kurniawan"
                className="relative w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-2xl object-cover object-top shadow-2xl"
                style={{
                  boxShadow: "0 24px 60px rgba(0,0,0,0.75)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              {/* Floating Badge */}
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 flex items-center gap-2.5 rounded-xl border px-3 py-2 sm:px-3.5 sm:py-2.5 backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(17,17,19,0.92)",
                  borderColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.6)",
                }}
              >
                <span className="text-lg sm:text-xl">🎓</span>
                <div>
                  <p className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>
                    IPK 3,80 / 4,00
                  </p>
                  <p className="text-[10px] font-mono" style={{ color: "var(--color-accent-text)" }}>
                    S1 Informatika Gunadarma
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
