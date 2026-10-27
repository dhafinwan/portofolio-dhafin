import { useState, useRef } from "react";
import { motion } from "motion/react";
import { portfolioData, ProjectItem } from "@/data/content";
import { ArrowUpRight, CheckCircle, Star } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

// Tech badge color map
const techColorMap: Record<string, { bg: string; fg: string; border: string }> = {
  Python: { bg: "rgba(59,130,246,0.12)", fg: "#93C5FD", border: "rgba(59,130,246,0.25)" },
  "Hugging Face Transformers": { bg: "rgba(251,191,36,0.12)", fg: "#FCD34D", border: "rgba(251,191,36,0.25)" },
  "Scikit-learn": { bg: "rgba(249,115,22,0.12)", fg: "#FCA5A5", border: "rgba(249,115,22,0.25)" },
  Pandas: { bg: "rgba(99,102,241,0.12)", fg: "#A5B4FC", border: "rgba(99,102,241,0.25)" },
  Streamlit: { bg: "rgba(239,68,68,0.12)", fg: "#FCA5A5", border: "rgba(239,68,68,0.25)" },
  SQL: { bg: "rgba(20,184,166,0.12)", fg: "#5EEAD4", border: "rgba(20,184,166,0.25)" },
  "Naive Bayes": { bg: "rgba(139,92,246,0.12)", fg: "#C4B5FD", border: "rgba(139,92,246,0.25)" },
  SMOTE: { bg: "rgba(34,197,94,0.12)", fg: "#86EFAC", border: "rgba(34,197,94,0.25)" },
  Plotly: { bg: "rgba(14,165,233,0.12)", fg: "#7DD3FC", border: "rgba(14,165,233,0.25)" },
};

function TechBadge({ tech }: { tech: string }) {
  const colors = techColorMap[tech];
  return (
    <span
      className="rounded-md px-2.5 py-1 text-xs font-medium"
      style={
        colors
          ? { backgroundColor: colors.bg, color: colors.fg, border: `1px solid ${colors.border}` }
          : { backgroundColor: "var(--color-surface-2)", color: "var(--color-text-secondary)", border: "1px solid var(--color-border)" }
      }
    >
      {tech}
    </span>
  );
}

// Spotlight wrapper — handles mouse-tracking glow via CSS custom properties
function SpotlightCard({
  children,
  className,
  style,
  prefersReducedMotion,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
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
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        ...(hovered && !prefersReducedMotion
          ? {
              borderColor: "rgba(37,99,235,0.4)",
              boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
            }
          : {}),
      }}
    >
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
            background:
              "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.08), transparent 70%)",
            borderRadius: "inherit",
          }}
        />
      )}
      {children}
    </div>
  );
}

export function ProjectsSection() {
  const { projects } = portfolioData;
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="proyek"
      className="border-b border-border py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139,92,246,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-accent-text)" }}
          >
            Studi Kasus &amp; Implementasi End-to-End
          </p>
          <h2
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text-primary)", letterSpacing: "-0.025em" }}
          >
            Proyek Data &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #C4B5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Machine Learning
            </span>
          </h2>
          <p className="mt-2 text-sm max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
            Implementasi nyata mulai dari klasifikasi teks IndoBERT, regresi prediktif harga mobil bekas, deteksi risiko diabetes, hingga analisis sentimen opini publik.
          </p>
        </motion.div>

        {/* Featured Project Card — Skripsi IndoBERT */}
        {featuredProject && (
          <motion.div
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
            whileHover={prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
            className="mb-10"
          >
            <SpotlightCard
              prefersReducedMotion={prefersReducedMotion}
              className="rounded-2xl"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Top accent line */}
              <div
                className="h-1 w-full rounded-t-2xl"
                style={{
                  background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, #60A5FA 100%)",
                }}
              />
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        backgroundColor: "rgba(37,99,235,0.15)",
                        color: "var(--color-accent-text)",
                        border: "1px solid rgba(37,99,235,0.3)",
                      }}
                    >
                      <Star size={12} weight="fill" />
                      Proyek Unggulan · Skripsi S1
                    </span>
                    <span
                      className="rounded-md px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: "var(--color-surface-2)",
                        color: "var(--color-text-secondary)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {featuredProject.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                    {featuredProject.period}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold sm:text-2xl lg:text-3xl"
                  style={{
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {featuredProject.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech, idx) => (
                    <TechBadge key={idx} tech={tech} />
                  ))}
                </div>

                <ul
                  className="mt-6 space-y-3 pt-6"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  {featuredProject.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--color-accent)" }}
                      />
                      <span style={{ color: "var(--color-text-secondary)" }}>{point}</span>
                    </li>
                  ))}
                </ul>

                {featuredProject.href && (
                  <div className="mt-6">
                    <a
                      href={featuredProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      style={{ color: "var(--color-accent-text)" }}
                    >
                      Lihat Repositori
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        )}

        {/* Sub-header */}
        <div className="mb-6 flex items-center gap-3">
          <h3
            className="text-base font-bold uppercase tracking-wider text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            Proyek Data &amp; Analitik Terpilih
          </h3>
          <div className="h-px flex-1" style={{ background: "var(--color-border)" }} />
        </div>

        {/* Other Projects Grid with Stagger */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {otherProjects.map((project: ProjectItem) => (
            <motion.div
              key={project.id}
              variants={prefersReducedMotion ? undefined : fadeInUpVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              className="h-full"
            >
              <SpotlightCard
                prefersReducedMotion={prefersReducedMotion}
                className="flex h-full flex-col justify-between rounded-xl p-6"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="rounded-md px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
                      style={{
                        backgroundColor: "rgba(139,92,246,0.12)",
                        color: "#C4B5FD",
                        border: "1px solid rgba(139,92,246,0.25)",
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="text-[11px] font-mono"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {project.period}
                    </span>
                  </div>

                  <h4
                    className="text-base font-bold leading-snug"
                    style={{
                      color: "var(--color-text-primary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {project.title}
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tech, idx) => (
                      <TechBadge key={idx} tech={tech} />
                    ))}
                  </div>

                  <ul
                    className="mt-4 space-y-2 pt-4"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    {project.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <span style={{ color: "var(--color-text-secondary)" }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.href && (
                  <div className="mt-5 pt-3 border-t border-border">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      style={{ color: "var(--color-accent-text)" }}
                    >
                      Buka Proyek
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
