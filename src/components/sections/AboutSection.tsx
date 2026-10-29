import { useState, useRef } from "react";
import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import { MapPin, GraduationCap, Briefcase, Code, Sparkle } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

export function AboutSection() {
  const { profile, labels } = usePortfolioContent();
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

  const factIcons = [
    <GraduationCap key="grad" size={18} aria-hidden="true" />,
    <Sparkle key="sparkle" size={18} aria-hidden="true" weight="fill" />,
    <Briefcase key="briefcase" size={18} aria-hidden="true" />,
    <Code key="code" size={18} aria-hidden="true" />,
  ];

  return (
    <section id="tentang" className="border-b border-border py-16 lg:py-24 relative overflow-hidden bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif-italic text-sm text-text-muted">02</span>
              <span className="text-text-muted text-xs">•</span>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                {labels.about.sectionLabel}
              </p>
            </div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-text-primary">
              {labels.about.title}{" "}
              <span className="font-serif-italic font-normal">{labels.about.titleAccent}</span>
            </h2>
            <p className="mt-3 text-sm max-w-2xl text-text-secondary leading-relaxed">
              {labels.about.description}
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Summary Bento Card */}
            <motion.div
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.22 } }}
              className="lg:col-span-2 h-full"
            >
              <div
                ref={summaryRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setSummaryHovered(true)}
                onMouseLeave={() => setSummaryHovered(false)}
                className="relative rounded-2xl p-7 sm:p-9 flex flex-col justify-between h-full overflow-hidden bg-surface border border-border transition-colors duration-200"
                style={{
                  boxShadow:
                    summaryHovered && !prefersReducedMotion
                      ? "0 14px 34px rgba(0,0,0,0.18)"
                      : "none",
                }}
              >
                {/* Spotlight subtle glow */}
                {!prefersReducedMotion && (
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      opacity: summaryHovered ? 1 : 0,
                      transition: "opacity 0.25s ease",
                      background:
                        "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, currentColor 6%, transparent), transparent 70%)",
                    }}
                  />
                )}

                {/* Top badge */}
                <div className="relative mb-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider bg-surface-2 border border-border text-text-primary">
                    {labels.about.profileBadge}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    {labels.about.degreeBadge}
                  </span>
                </div>

                {/* Main Narrative */}
                <div className="relative space-y-4">
                  <p className="text-base sm:text-lg font-normal leading-relaxed text-text-primary">
                    {labels.about.quoteLead}{" "}
                    <span className="font-serif-italic text-lg sm:text-xl font-normal text-text-primary underline decoration-border underline-offset-4">
                      {labels.about.quoteAccent}
                    </span>
                    .
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                    {labels.about.summary}
                  </p>
                </div>

                {/* Footer details: Location & Open to Work */}
                <div className="relative mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
                    <MapPin size={16} className="text-text-primary" aria-hidden="true" />
                    <span>{profile.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="font-medium text-emerald-400">
                      {labels.about.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Facts Stacked Bento Cards */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 justify-between">
              {labels.about.quickFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.18 } }}
                  className={`flex items-start gap-3.5 rounded-xl p-4.5 bg-surface border transition-colors ${
                    fact.accent
                      ? "border-text-primary/30 bg-surface"
                      : "border-border"
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5 bg-surface-2 border border-border text-text-primary">
                    {factIcons[i % factIcons.length]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <p className="text-[10px] uppercase tracking-wider font-medium text-text-muted">
                        {fact.label}
                      </p>
                      <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-medium bg-surface-2 border border-border text-text-muted">
                        {fact.badge}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm leading-snug font-medium ${
                      fact.accent ? "text-text-primary font-semibold" : "text-text-primary"
                    }`}>
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
