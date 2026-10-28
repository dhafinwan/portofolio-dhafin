import { useState, useRef } from "react";
import { motion } from "motion/react";
import { usePortfolioContent, ProjectItem } from "@/data/content";
import { ArrowUpRight, Check, Star } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="rounded-md px-2.5 py-1 text-xs font-mono font-medium bg-surface-2 border border-border text-text-secondary">
      {tech}
    </span>
  );
}

function SpotlightCard({
  children,
  className,
  prefersReducedMotion,
}: {
  children: React.ReactNode;
  className?: string;
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden bg-surface border border-border transition-all duration-200 ${className || ""}`}
      style={{
        boxShadow:
          hovered && !prefersReducedMotion
            ? "0 14px 34px rgba(0,0,0,0.18)"
            : "none",
      }}
    >
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
            background:
              "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, currentColor 5%, transparent), transparent 70%)",
          }}
        />
      )}
      {children}
    </div>
  );
}

export function ProjectsSection() {
  const { projects, labels } = usePortfolioContent();
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="proyek"
      className="border-b border-border py-20 lg:py-28 relative overflow-hidden bg-bg"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-14 text-left"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-serif-italic text-sm text-text-muted">04</span>
            <span className="h-px w-6 bg-border" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
              {labels.projects.sectionLabel}
            </p>
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-text-primary">
            {labels.projects.title}{" "}
            <span className="font-serif-italic font-normal">{labels.projects.titleAccent}</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl text-text-secondary leading-relaxed">
            {labels.projects.description}
          </p>
        </motion.div>

        {/* Featured Project Card */}
        {featuredProject && (
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
            whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
            className="mb-12"
          >
            <SpotlightCard
              prefersReducedMotion={prefersReducedMotion}
              className="rounded-2xl"
            >
              <div className="p-7 sm:p-9 lg:p-11">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-surface-2 border border-border text-text-primary">
                      <Star size={12} weight="fill" className="text-text-primary" />
                      {labels.projects.featuredBadge}
                    </span>
                    <span className="rounded-full px-3 py-1 text-xs font-mono font-medium bg-surface-2 border border-border text-text-muted">
                      {featuredProject.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-text-muted">
                    {featuredProject.period}
                  </span>
                </div>

                <h3 className="text-xl font-medium sm:text-2xl lg:text-3xl text-text-primary tracking-tight">
                  {featuredProject.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                  ))}
                </div>

                <ul className="mt-8 space-y-3 pt-6 border-t border-border">
                  {featuredProject.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border text-text-primary">
                        <Check size={10} weight="bold" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {featuredProject.href && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <a
                      href={featuredProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-primary inline-flex items-center gap-2 text-xs font-medium"
                    >
                      <span>{labels.projects.viewRepo}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        )}

        {/* Sub-header */}
        <div className="mb-6 flex items-center gap-3">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
            {labels.projects.otherProjectsHeader}
          </h3>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Other Projects Grid with Stagger */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {otherProjects.map((project: ProjectItem) => (
            <motion.div
              key={project.id}
              variants={prefersReducedMotion ? undefined : fadeInUpVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <SpotlightCard
                prefersReducedMotion={prefersReducedMotion}
                className="flex h-full flex-col justify-between rounded-xl p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-full px-2.5 py-0.5 text-[11px] font-mono font-medium bg-surface-2 border border-border text-text-muted">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-text-muted">
                      {project.period}
                    </span>
                  </div>

                  <h4 className="text-base font-medium leading-snug text-text-primary">
                    {project.title}
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((tech, idx) => (
                      <TechBadge key={idx} tech={tech} />
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2.5 pt-5 border-t border-border">
                    {project.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-text-secondary">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-primary/60" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.href && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-text-primary hover:opacity-70 transition-opacity"
                    >
                      <span>{labels.projects.viewProject}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                )}
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
