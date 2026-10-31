import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import {
  ChartBar,
  Code,
  HardDrives,
  CheckCircle,
} from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

const skillCategoryIcons: Record<string, React.ReactNode> = {
  "data-python": <ChartBar size={20} weight="bold" />,
  "web-software": <Code size={20} weight="bold" />,
  "database-it-ops": <HardDrives size={20} weight="bold" />,
};

export function AboutSection() {
  const { keyMetrics, workFocus, skillGroups, labels } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="profil-keahlian"
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
                {labels.bento.sectionLabel}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-snug">
              {labels.bento.title}
            </h2>
            <p className="mt-2 text-[15px] sm:text-base leading-[1.7] text-text-secondary max-w-prose">
              {labels.bento.subtitle}
            </p>
          </motion.div>

          {/* 12-Column Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Top-Left Card (7 Columns): Profile Summary + 3 Key Metrics */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-surface border border-border shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                    {labels.bento.profileTitle}
                  </h3>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-surface-2 border border-border text-text-secondary">
                    {labels.bento.overviewBadge}
                  </span>
                </div>
                <p className="text-[15px] sm:text-base leading-[1.7] text-text-secondary">
                  {labels.bento.profileText}
                </p>
              </div>

              {/* 3 Key Metrics Row */}
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-5">
                {keyMetrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-heading text-2xl sm:text-[1.65rem] font-bold tracking-tight text-text-primary">
                      {metric.value}
                    </span>
                    <span className="mt-1 text-xs font-semibold text-text-primary">
                      {metric.label}
                    </span>
                    <span className="mt-1 text-[11px] leading-relaxed text-text-muted">
                      {metric.description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top-Right Card (5 Columns): 3 Core Work Focus Areas */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-surface border border-border shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                    {labels.bento.focusTitle}
                  </h3>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-surface-2 border border-border text-text-secondary">
                    {labels.bento.focusBadge}
                  </span>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  {workFocus.map((focus) => (
                    <div key={focus.id} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface-2 border border-border text-xs font-mono font-bold text-text-primary mt-0.5">
                        {focus.id}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary leading-tight">
                          {focus.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                          {focus.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs text-text-muted">
                <CheckCircle size={15} weight="fill" className="text-emerald-500 shrink-0" />
                <span>{labels.bento.focusFooter}</span>
              </div>
            </motion.div>

            {/* Bottom Row: 3 Tech Stack Skill Cards (4 Columns each) */}
            {skillGroups.map((group) => {
              const icon = skillCategoryIcons[group.id] || <Code size={20} weight="bold" />;
              return (
                <motion.div
                  key={group.id}
                  variants={itemVariants}
                  className="lg:col-span-4 rounded-2xl p-6 sm:p-7 bg-surface border border-border shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border text-text-primary">
                        {icon}
                      </div>
                      <h3 className="text-base font-semibold tracking-tight text-text-primary">
                        {group.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-md px-2.5 py-1 text-xs font-mono font-medium bg-surface-2 border border-border text-text-secondary hover:text-text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
