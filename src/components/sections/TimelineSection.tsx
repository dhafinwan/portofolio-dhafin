import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import { Briefcase, GraduationCap, MapPin, Check } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

function TimelineItem({
  title,
  subtitle,
  period,
  location,
  children,
}: {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-7">
      {/* Vertical line */}
      <div className="absolute left-2.5 top-3.5 bottom-0 w-px bg-border" />
      {/* Dot */}
      <div className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-surface border border-border">
        <span className="h-1.5 w-1.5 rounded-full bg-text-primary" />
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
          <div>
            <h4 className="text-base font-medium text-text-primary leading-snug">
              {title}
            </h4>
            <p className="text-xs font-medium text-text-secondary mt-0.5">
              {subtitle}
            </p>
          </div>
          <span className="rounded-full px-2.5 py-0.5 text-[11px] font-mono font-medium bg-surface-2 border border-border text-text-muted shrink-0">
            {period}
          </span>
        </div>

        {location && (
          <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
            <MapPin size={13} aria-hidden="true" />
            <span>{location}</span>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}

export function TimelineSection() {
  const { experience, education, labels } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="pengalaman" className="border-b border-border py-16 lg:py-24 relative overflow-hidden bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-left"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-serif-italic text-sm text-text-muted">06</span>
            <span className="text-text-muted text-xs">•</span>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
              {labels.timeline.sectionLabel}
            </p>
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-text-primary">
            {labels.timeline.title}{" "}
            <span className="font-serif-italic font-normal">{labels.timeline.titleAccent}</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl text-text-secondary leading-relaxed">
            {labels.timeline.description}
          </p>
        </motion.div>

        {/* Two-column grid with stagger */}
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* Work Experience Column */}
          <motion.div
            variants={itemVariants}
            whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
            className="rounded-2xl overflow-hidden h-full bg-surface border border-border"
          >
            {/* Column Header */}
            <div className="flex items-center gap-3 px-6 sm:px-8 py-5 border-b border-border bg-surface-2/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 border border-border text-text-primary">
                <Briefcase size={18} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-text-primary">
                  {labels.timeline.experienceTab}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {experience.map((exp, idx) => (
                <TimelineItem
                  key={idx}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                >
                  <ul className="mt-3 space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs leading-relaxed text-text-secondary">
                        <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border text-text-primary">
                          <Check size={9} weight="bold" />
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            variants={itemVariants}
            whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
            className="rounded-2xl overflow-hidden h-full bg-surface border border-border"
          >
            {/* Column Header */}
            <div className="flex items-center gap-3 px-6 sm:px-8 py-5 border-b border-border bg-surface-2/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 border border-border text-text-primary">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-text-primary">
                  {labels.timeline.educationTab}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <TimelineItem
                title={education.degree}
                subtitle={education.institution}
                period={education.period}
                location={education.location}
              >
                {/* GPA badge */}
                <div className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 mb-5 bg-surface-2 border border-border">
                  <span className="text-xs font-mono font-medium text-text-muted">
                    GPA / IPK:
                  </span>
                  <span className="text-xs font-mono font-bold text-text-primary">
                    {education.gpa}
                  </span>
                </div>

                {/* Courses */}
                <div className="mb-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-muted mb-2.5">
                    Mata Kuliah Relevan
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {education.relevantCourses.map((c, cIdx) => (
                      <span
                        key={cIdx}
                        className="rounded-md px-2.5 py-0.5 text-[11px] font-mono font-medium bg-surface-2 border border-border text-text-secondary"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-text-muted mb-2">
                    Aktivitas &amp; Praktikum
                  </p>
                  <ul className="space-y-1.5">
                    {education.activities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-primary/60" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TimelineItem>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TimelineSection;
