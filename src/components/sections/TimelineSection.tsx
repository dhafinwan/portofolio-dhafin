import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import { Briefcase, GraduationCap, Check } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

export function TimelineSection() {
  const { experience, education, labels } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="pengalaman"
      className="border-b border-border py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-bg"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12 text-left">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="h-2 w-2 rounded-full bg-text-secondary" />
              <p className="text-xs font-mono uppercase tracking-wider text-text-secondary">
                {labels.timeline.sectionLabel}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-snug">
              {labels.timeline.title}
            </h2>
            <p className="mt-2 text-[15px] sm:text-base leading-[1.7] text-text-secondary max-w-prose">
              {labels.timeline.subtitle}
            </p>
          </motion.div>

          {/* 2-Column Parallel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Pengalaman Kerja & Operasional */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 sm:p-8 bg-surface border border-border shadow-xs flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 border border-border text-text-primary">
                    <Briefcase size={20} weight="bold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                      {labels.timeline.experienceHeading}
                    </h3>
                  </div>
                </div>

                <div className="space-y-8">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h4 className="text-base font-semibold text-text-primary">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-surface-2 border border-border text-text-secondary">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-text-secondary mb-3">
                        {exp.company} • {exp.location}
                      </p>

                      <ul className="space-y-2">
                        {exp.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed text-text-secondary"
                          >
                            <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border text-text-primary">
                              <Check size={9} weight="bold" />
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Pendidikan Formal */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-6 sm:p-8 bg-surface border border-border shadow-xs flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 border border-border text-text-primary">
                    <GraduationCap size={20} weight="bold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                      {labels.timeline.educationHeading}
                    </h3>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-base font-semibold text-text-primary">
                      {education.degree}
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-surface-2 border border-border text-text-secondary">
                      {education.period}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-text-secondary mb-4">
                    {education.institution} • {education.location}
                  </p>

                  {/* GPA Metric Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-2 border border-border mb-4">
                    <span className="text-xs font-mono text-text-muted">
                      {labels.timeline.gpaLabel}:
                    </span>
                    <span className="text-xs font-bold text-text-primary">
                      {education.gpa}
                    </span>
                  </div>

                  {/* Skripsi Box */}
                  <div className="rounded-xl p-4 bg-surface-2/60 border border-border mb-5">
                    <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                      {labels.timeline.thesisLabel}
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium leading-relaxed text-text-primary">
                      "{education.thesis}"
                    </p>
                  </div>

                  {/* Key points */}
                  <ul className="space-y-2">
                    {education.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed text-text-secondary"
                      >
                        <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border text-text-primary">
                          <Check size={9} weight="bold" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TimelineSection;
