import { useState, useRef } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";
import { ChartBar, Code, Database, Globe, Wrench } from "@phosphor-icons/react";

// Category icon map using phosphor icons
const categoryIconComponent: Record<string, React.ReactNode> = {
  "Data & Reporting": <ChartBar size={20} weight="duotone" />,
  "Web & Pemrograman": <Code size={20} weight="duotone" />,
  "Database & Sistem": <Database size={20} weight="duotone" />,
  "IT Support & Jaringan": <Globe size={20} weight="duotone" />,
};

// Category accent color map
const categoryAccentMap: Record<string, { bg: string; fg: string; border: string; glow: string }> = {
  "Data & Reporting": {
    bg: "rgba(37,99,235,0.12)",
    fg: "#60A5FA",
    border: "rgba(37,99,235,0.35)",
    glow: "rgba(37,99,235,0.14)",
  },
  "Web & Pemrograman": {
    bg: "rgba(139,92,246,0.12)",
    fg: "#C4B5FD",
    border: "rgba(139,92,246,0.35)",
    glow: "rgba(139,92,246,0.12)",
  },
  "Database & Sistem": {
    bg: "rgba(20,184,166,0.12)",
    fg: "#5EEAD4",
    border: "rgba(20,184,166,0.35)",
    glow: "rgba(20,184,166,0.12)",
  },
  "IT Support & Jaringan": {
    bg: "rgba(34,197,94,0.12)",
    fg: "#86EFAC",
    border: "rgba(34,197,94,0.35)",
    glow: "rgba(34,197,94,0.12)",
  },
};

function SkillCard({
  category,
  skills,
  prefersReducedMotion,
}: {
  category: string;
  skills: string[];
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const accent = categoryAccentMap[category] || {
    bg: "rgba(113,113,122,0.1)",
    fg: "#A1A1AA",
    border: "rgba(113,113,122,0.3)",
    glow: "rgba(113,113,122,0.1)",
  };
  const icon = categoryIconComponent[category] || <Wrench size={20} />;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUpVariants}
      whileHover={prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between h-full"
        style={{
          backgroundColor: "var(--color-surface)",
          border: `1px solid ${hovered && !prefersReducedMotion ? accent.border : "var(--color-border)"}`,
          transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow:
            hovered && !prefersReducedMotion
              ? `0 12px 32px rgba(0,0,0,0.45), 0 0 0 1px ${accent.border}`
              : "none",
        }}
      >
        {/* Spotlight overlay */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accent.glow}, transparent 70%)`,
            }}
          />
        )}

        {/* Card Top: Category Icon & Title */}
        <div className="relative mb-5">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{
                backgroundColor: accent.bg,
                border: `1px solid ${accent.border}`,
                color: accent.fg,
              }}
            >
              {icon}
            </div>

            <span
              className="text-[11px] font-mono px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--color-surface-2)",
                color: "var(--color-text-muted)",
                border: "1px solid var(--color-border)",
              }}
            >
              {skills.length} instrumen
            </span>
          </div>

          <h3
            className="text-base font-bold tracking-tight"
            style={{
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {category}
          </h3>
        </div>

        {/* Skill badges */}
        <div className="relative flex flex-wrap gap-1.5 mt-auto">
          {skills.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
              style={{
                backgroundColor: "var(--color-surface-2)",
                color: "var(--color-text-secondary)",
                border: "1px solid var(--color-border)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const { skills } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="keahlian" className="border-b border-border py-16 lg:py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 0% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)",
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
            Keahlian &amp; Perangkat
          </p>
          <h2
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text-primary)", letterSpacing: "-0.025em" }}
          >
            Keahlian{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5EEAD4 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Teknis &amp; Tools
            </span>
          </h2>
          <p className="mt-2 text-sm max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
            Kombinasi kemampuan praktis dalam pengelolaan data, pembuatan aplikasi web &amp; skrip otomasi, administrasi basis data, serta operasional jaringan yang siap diterapkan.
          </p>
        </motion.div>

        {/* Skills Grid with Stagger */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {skills.map((cat, idx) => (
            <SkillCard
              key={idx}
              category={cat.category}
              skills={cat.skills}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
