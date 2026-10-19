import { motion } from "motion/react";
import { portfolioData, ProjectItem } from "@/data/content";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  cardHoverVariants,
} from "@/lib/motion";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const prefersReducedMotion = usePrefersReducedMotion();

  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="proyek" className="border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">
            Studi Kasus & Eksplorasi
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Proyek Data & Machine Learning
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Implementasi nyata mulai dari NLP deep learning, regresi prediktif, analisis risiko kesehatan, hingga sentiment analysis.
          </p>
        </motion.div>

        {/* Proyek Unggulan */}
        {featuredProject && (
          <motion.div
            className="mb-12 rounded-xl border border-border bg-surface p-6 sm:p-8 lg:p-10"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center rounded-md bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-text">
                Proyek Unggulan · Skripsi S1
              </span>
              <span className="text-xs text-text-muted">{featuredProject.period}</span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-text-primary sm:text-2xl">
              {featuredProject.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent-text">
              {featuredProject.category}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {featuredProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-3 border-t border-border pt-6">
              {featuredProject.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {featuredProject.href && (
              <div className="mt-6 pt-2">
                <a
                  href={featuredProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Lihat Dokumentasi Repositori
                  <ArrowUpRight size={16} />
                </a>
              </div>
            )}
          </motion.div>
        )}

        {/* Proyek Lainnya Grid */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-text-primary">Proyek Lainnya</h3>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {otherProjects.map((project: ProjectItem) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : cardHoverVariants.hover}
              transition={{ duration: 0.2 }}
              className="flex flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span className="font-medium text-accent-text">{project.category}</span>
                  <span>{project.period}</span>
                </div>

                <h4 className="mt-3 text-base font-bold text-text-primary">
                  {project.title}
                </h4>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded border border-border bg-surface-2 px-2 py-0.5 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 border-t border-border pt-4">
                  {project.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-text-secondary">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.href && (
                <div className="mt-6 pt-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Buka Proyek
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
