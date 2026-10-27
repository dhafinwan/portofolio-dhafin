import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  usePrefersReducedMotion,
  containerStaggerVariants,
  fadeInUpVariants,
  buttonHoverVariants,
  iconHoverVariants,
} from "@/lib/motion";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import { ArrowRight, DownloadSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function HeroSection() {
  const { profile } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : containerStaggerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initialState = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="beranda" className="relative border-b border-border bg-bg overflow-hidden">
      {/* Liquid Sculpture 3D/Interactive Canvas Background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <SculptureHero
          src="/foto-dhafin.jpg"
          imageAlt=""
          eyebrow=""
          headline=""
          headlineAccent=""
          body=""
          primaryCta={{ label: "", href: "" }}
          secondaryCta={{ label: "", href: "" }}
          hint=""
          hintTouch=""
          background="#09090B"
          textColor="#FAFAFA"
          accentColor="#2563EB"
          sculptureScale={1.0}
          mobileSculptureScale={0.85}
          sculptureX={38}
          sculptureY={0}
          interactive={!prefersReducedMotion}
          strength={0.7}
          radius={200}
          particleDensity={0.7}
          particleSpread={0.8}
          turbulence={0.6}
          liquid={1.2}
          dotSize={0.85}
          streaks={true}
          restStyle="image"
          returnSpeed={0.8}
          ambient={true}
          ambientIntensity={0.35}
          speed={0.9}
          intro={!prefersReducedMotion}
          height="100%"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
          }}
        />
      </div>

      {/* Radial Gradient Vignette Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, transparent 30%, rgba(9,9,11,0.85) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          zIndex: 1,
          background: "linear-gradient(to bottom, transparent, #09090B)",
          pointerEvents: "none",
        }}
      />

      {/* Hero Foreground Content */}
      <div className="relative py-24 lg:py-32" style={{ zIndex: 2 }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

            {/* Left: Text Content & Actions */}
            <motion.div
              className="max-w-2xl flex-1"
              variants={containerVariants}
              initial={initialState}
              animate="visible"
            >
              {/* Status Badge */}
              <motion.div variants={itemVariants} className="mb-6">
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
                className="font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                style={{
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Dhafin
                <br />
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
              <motion.div variants={itemVariants} className="mt-5 flex flex-wrap items-center gap-2">
                {["Data Analyst", "Data Scientist", "Machine Learning Engineer"].map((role) => (
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
                className="mt-4 text-sm font-semibold"
                style={{ color: "var(--color-accent-text)" }}
              >
                {profile.subtitle}
              </motion.p>

              {/* Narrative */}
              <motion.p
                variants={itemVariants}
                className="mt-4 text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)", maxWidth: "55ch" }}
              >
                Membangun proyek machine learning dan NLP dengan Python, SQL, dan Streamlit — mengeksekusi siklus data end-to-end dari data extraction, predictive modeling, hingga deployment.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center gap-3"
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
                className="mt-8 flex items-center gap-4"
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

            {/* Right: Profile Photo — visible on desktop */}
            <motion.div
              className="hidden flex-shrink-0 lg:block"
              initial={prefersReducedMotion ? "visible" : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative">
                {/* Glow ring */}
                <div
                  className="absolute -inset-2 rounded-2xl blur-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(139,92,246,0.2) 100%)",
                  }}
                />
                {/* Spotlight border */}
                <div
                  className="absolute -inset-[1px] rounded-2xl"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, #2563EB 0deg, transparent 120deg, #7C3AED 240deg, transparent 360deg)",
                    opacity: 0.65,
                  }}
                />
                <img
                  src="/foto-dhafin.jpg"
                  alt="Dhafin Kurniawan"
                  className="relative h-80 w-64 rounded-2xl object-cover object-top"
                  style={{
                    boxShadow: "0 24px 64px rgba(0,0,0,0.75)",
                    border: "1px solid var(--color-border)",
                  }}
                />
                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -left-4 flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.6)",
                  }}
                >
                  <span className="text-xl">🎓</span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>IPK 3,80 / 4,00</p>
                    <p className="text-[10px] font-mono" style={{ color: "var(--color-accent-text)" }}>S1 Informatika Gunadarma</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
