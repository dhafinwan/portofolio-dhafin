import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import { Briefcase, GraduationCap, MapPin, CheckCircle } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

function TimelineItem({
  dot,
  title,
  subtitle,
  period,
  location,
  children,
}: {
  dot?: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div
        className="absolute left-3 top-8 bottom-0 w-px"
        style={{ backgroundColor: "var(--color-border)" }}
      />
      {/* Dot */}
      <div
        className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full"
        style={{
          backgroundColor: "var(--color-surface-2)",
          border: "2px solid var(--color-accent)",
          boxShadow: "0 0 0 4px rgba(37,99,235,0.1)",
        }}
      >
        {dot || (
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h4
              className="text-base font-bold"
              style={{
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              {title}
            </h4>
            <p
              className="text-xs font-semibold mt-0.5"
              style={{ color: "var(--color-accent-text)" }}
            >
              {subtitle}
            </p>
          </div>
          <span
            className="rounded-md px-2.5 py-0.5 text-[11px] font-mono font-medium shrink-0"
            style={{
              backgroundColor: "var(--color-surface-2)",
              color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)",
            }}
          >
            {period}
          </span>
        </div>

        {location && (
          <div className="flex items-center gap-1.5 text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>
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
  const { experience, education } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="riwayat" className="border-b border-border py-16 lg:py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 100% 100%, rgba(34,197,94,0.04) 0%, transparent 60%)",
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
            Rekam Jejak &amp; Disiplin
          </p>
          <h2
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text-primary)", letterSpacing: "-0.025em" }}
          >
            Pengalaman &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #86EFAC 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pendidikan
            </span>
          </h2>
          <p className="mt-2 text-sm max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
            Pengalaman operasional siaran langsung yang menuntut keandalan sistem tinggi dan fondasi akademik ilmu komputer berstandar akreditasi.
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
            whileHover={prefersReducedMotion ? undefined : { y: -3, transition: { duration: 0.22 } }}
            className="rounded-2xl overflow-hidden h-full"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
            }}
          >
            {/* Column Header */}
            <div
              className="flex items-center gap-3 px-6 py-4"
              style={{
                borderBottom: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface-2)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(37,99,235,0.3)",
                }}
              >
                <Briefcase size={18} style={{ color: "var(--color-accent-text)" }} />
              </div>
              <div>
                <h3 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                  Pengalaman Kerja
                </h3>
                <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                  Operasional &amp; Troubleshooting Jaringan
                </p>
              </div>
            </div>

            <div className="p-6">
              {experience.map((exp, idx) => (
                <TimelineItem
                  key={idx}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                >
                  <ul className="mt-3 space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                        <CheckCircle
                          size={15}
                          weight="bold"
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--color-accent)" }}
                        />
                        <span style={{ color: "var(--color-text-secondary)" }}>{pt}</span>
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
            whileHover={prefersReducedMotion ? undefined : { y: -3, transition: { duration: 0.22 } }}
            className="rounded-2xl overflow-hidden h-full"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
            }}
          >
            {/* Column Header */}
            <div
              className="flex items-center gap-3 px-6 py-4"
              style={{
                borderBottom: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface-2)",
              }}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "rgba(139,92,246,0.15)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                <GraduationCap size={18} style={{ color: "#C4B5FD" }} />
              </div>
              <div>
                <h3 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                  Pendidikan Formal
                </h3>
                <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                  Fondasi Sains Komputer &amp; Riset Data
                </p>
              </div>
            </div>

            <div className="p-6">
              <TimelineItem
                title={education.degree}
                subtitle={education.institution}
                period={education.period}
                location={education.location}
              >
                {/* GPA badge */}
                <div
                  className="inline-flex items-center gap-2.5 rounded-lg px-3.5 py-1.5 mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(139,92,246,0.08) 100%)",
                    border: "1px solid rgba(37,99,235,0.3)",
                  }}
                >
                  <span className="text-sm">🎓</span>
                  <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                    IPK Kumulatif:
                  </span>
                  <span
                    className="text-sm font-extrabold"
                    style={{ color: "var(--color-accent-text)" }}
                  >
                    {education.gpa}
                  </span>
                </div>

                {/* Courses */}
                <div className="mb-4">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Mata Kuliah Relevan
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {education.relevantCourses.map((c, cIdx) => (
                      <span
                        key={cIdx}
                        className="rounded-md px-2.5 py-0.5 text-[11px] font-medium"
                        style={{
                          backgroundColor: "var(--color-surface-2)",
                          color: "var(--color-text-secondary)",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Aktivitas &amp; Kontribusi
                  </p>
                  <ul className="space-y-1.5">
                    {education.activities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: "#C4B5FD", opacity: 0.8 }}
                        />
                        <span style={{ color: "var(--color-text-secondary)" }}>{act}</span>
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
