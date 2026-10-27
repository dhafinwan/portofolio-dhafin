import { useState, useRef } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import { MapPin, GraduationCap, Briefcase, Code, Sparkle } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

export function AboutSection() {
  const { profile } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  // Mouse spotlight for summary card
  const summaryRef = useRef<HTMLDivElement>(null);
  const [summaryHovered, setSummaryHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!summaryRef.current || prefersReducedMotion) return;
    const rect = summaryRef.current.getBoundingClientRect();
    summaryRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    summaryRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const quickFacts = [
    {
      icon: <GraduationCap size={18} aria-hidden="true" />,
      label: "Pendidikan",
      value: "S1 Informatika, Univ. Gunadarma",
      badge: "Lulusan 2026",
      accent: false,
    },
    {
      icon: <Sparkle size={18} aria-hidden="true" weight="fill" />,
      label: "Prestasi Akademik",
      value: "IPK 3,80 / 4,00 (Sangat Memuaskan)",
      badge: "Akademik",
      accent: true,
    },
    {
      icon: <Briefcase size={18} aria-hidden="true" />,
      label: "Pengalaman Kerja",
      value: "Operator Live Streaming — EMBA Group",
      badge: "Operasional & Jaringan",
      accent: false,
    },
    {
      icon: <Code size={18} aria-hidden="true" />,
      label: "Fokus Keahlian",
      value: "Data Science · NLP · Machine Learning",
      badge: "Core Focus",
      accent: false,
    },
  ];

  return (
    <section id="tentang" className="border-b border-border py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 35% at 50% 100%, rgba(37,99,235,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-10 text-left">
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-accent-text)" }}
            >
              Latar Belakang &amp; Persona
            </p>
            <h2
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--color-text-primary)", letterSpacing: "-0.025em" }}
            >
              Tentang{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #C4B5FD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dhafin Kurniawan
              </span>
            </h2>
            <p className="mt-2 text-sm max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
              Kombinasi analisis data berbasis bukti, kecerdasan buatan terapan, dan disiplin pemecahan masalah teknis.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid gap-5 lg:grid-cols-3">
            {/* Summary Bento Card — Spans 2 columns on lg */}
            <motion.div
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -3, transition: { duration: 0.22 } }}
              className="lg:col-span-2 h-full"
            >
              <div
                ref={summaryRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setSummaryHovered(true)}
                onMouseLeave={() => setSummaryHovered(false)}
                className="relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full overflow-hidden"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: `1px solid ${
                    summaryHovered && !prefersReducedMotion
                      ? "rgba(37,99,235,0.4)"
                      : "var(--color-border)"
                  }`,
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                  boxShadow:
                    summaryHovered && !prefersReducedMotion
                      ? "0 16px 36px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.15)"
                      : "none",
                }}
              >
                {/* Spotlight glow */}
                {!prefersReducedMotion && (
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      opacity: summaryHovered ? 1 : 0,
                      transition: "opacity 0.25s ease",
                      background:
                        "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.08), transparent 70%)",
                    }}
                  />
                )}

                {/* Top badge */}
                <div className="relative mb-4 flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: "rgba(37,99,235,0.12)",
                      color: "var(--color-accent-text)",
                      border: "1px solid rgba(37,99,235,0.25)",
                    }}
                  >
                    Profil Profesional
                  </span>
                  <span className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                    S1 Informatika
                  </span>
                </div>

                {/* Main Narrative */}
                <div className="relative">
                  <p
                    className="text-base sm:text-lg font-medium leading-relaxed"
                    style={{ color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}
                  >
                    Lulusan S1 Informatika Universitas Gunadarma dengan minat mendalam pada{" "}
                    <span style={{ color: "var(--color-accent-text)" }}>
                      eksplorasi data, machine learning, dan NLP
                    </span>
                    .
                  </p>
                  <p
                    className="mt-3.5 text-sm sm:text-base leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {profile.summary}
                  </p>
                </div>

                {/* Footer details: Location & Open to Work */}
                <div
                  className="relative mt-6 pt-5 flex flex-wrap items-center justify-between gap-3"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  <div
                    className="flex items-center gap-2 text-xs sm:text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <MapPin size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    <span>{profile.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm">
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
                    <span style={{ color: "#86EFAC", fontWeight: 600 }}>
                      Open to Work — Entry-Level
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Facts Stacked Bento Cards */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 justify-between">
              {quickFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.18 } }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className="flex items-start gap-3.5 rounded-xl p-4 transition-colors"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: `1px solid ${
                      fact.accent ? "rgba(37,99,235,0.35)" : "var(--color-border)"
                    }`,
                    background: fact.accent
                      ? "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(139,92,246,0.06) 100%)"
                      : "var(--color-surface)",
                    boxShadow: fact.accent ? "0 4px 20px rgba(37,99,235,0.12)" : "none",
                  }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5"
                    style={{
                      backgroundColor: fact.accent
                        ? "rgba(37,99,235,0.2)"
                        : "var(--color-surface-2)",
                      border: `1px solid ${
                        fact.accent ? "rgba(37,99,235,0.4)" : "var(--color-border)"
                      }`,
                      color: fact.accent ? "var(--color-accent-text)" : "var(--color-text-secondary)",
                    }}
                  >
                    {fact.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <p
                        className="text-[10px] uppercase tracking-wider font-semibold"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {fact.label}
                      </p>
                      <span
                        className="text-[9px] px-1.5 py-0.2 rounded font-mono font-medium"
                        style={{
                          backgroundColor: "var(--color-surface-2)",
                          color: fact.accent ? "var(--color-accent-text)" : "var(--color-text-muted)",
                        }}
                      >
                        {fact.badge}
                      </span>
                    </div>
                    <p
                      className="text-xs sm:text-sm font-semibold leading-snug"
                      style={{
                        color: fact.accent ? "#93C5FD" : "var(--color-text-primary)",
                      }}
                    >
                      {fact.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
