import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

export function ProjectsSection() {
  const { projects, labels } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="proyek"
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
                {labels.projects.sectionLabel}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-snug">
              {labels.projects.title}
            </h2>
            <p className="mt-2 text-[15px] sm:text-base leading-[1.7] text-text-secondary max-w-prose">
              {labels.projects.subtitle}
            </p>
          </motion.div>

          {/* 2-Column Case Study Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="rounded-2xl p-6 sm:p-7 bg-surface border border-border shadow-xs flex flex-col justify-between hover:border-text-secondary/50 transition-colors duration-200"
              >
                <div>
                  {/* Card Header: Category & Year on Left, Links on Right */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-surface-2 border border-border text-text-primary">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-text-muted">
                        {project.period}
                      </span>
                    </div>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg rounded"
                        aria-label={`${labels.projects.viewCode}: ${project.title}`}
                      >
                        <GithubLogo size={15} />
                        <span>{labels.projects.viewCode}</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-semibold tracking-tight text-text-primary leading-snug mb-3">
                    {project.title}
                  </h3>

                  {/* Problem & Result 2-sentence description */}
                  <p className="text-sm leading-relaxed text-text-secondary mb-6">
                    {project.problemAndResult}
                  </p>
                </div>

                {/* Card Footer: Tech Badges */}
                <div className="pt-4 border-t border-border flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md px-2 py-0.5 text-xs font-mono font-medium bg-surface-2 border border-border text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
