import { useState, useRef } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";
import { Database, Broom, Cpu, RocketLaunch } from "@phosphor-icons/react";

const workflowIcons = [
  <Database size={22} weight="duotone" aria-hidden="true" />,
  <Broom size={22} weight="duotone" aria-hidden="true" />,
  <Cpu size={22} weight="duotone" aria-hidden="true" />,
  <RocketLaunch size={22} weight="duotone" aria-hidden="true" />,
];

const workflowAccents = [
  { bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.3)", fg: "#FCD34D", glow: "rgba(251,191,36,0.1)" },
  { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.3)", fg: "#93C5FD", glow: "rgba(59,130,246,0.1)" },
  { bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.3)", fg: "#C4B5FD", glow: "rgba(139,92,246,0.1)" },
  { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.3)", fg: "#86EFAC", glow: "rgba(34,197,94,0.1)" },
];

function WorkflowCard({
  step,
  title,
  description,
  prefersReducedMotion,
}: {
  step: number;
  title: string;
  description: string;
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const accent = workflowAccents[(step - 1) % workflowAccents.length];
  const icon = workflowIcons[(step - 1) % workflowIcons.length];

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
      className="relative flex flex-col h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col justify-between rounded-2xl overflow-hidden p-6 h-full"
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
        {/* Spotlight */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accent.glow}, transparent 70%)`,
            }}
          />
        )}

        {/* Step icon + number */}
        <div className="relative flex items-start justify-between mb-5">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl"
            style={{
              backgroundColor: accent.bg,
              border: `1px solid ${accent.border}`,
              color: accent.fg,
            }}
          >
            {icon}
          </div>
          <span
            className="font-mono text-3xl font-extrabold tabular-nums"
            style={{ color: "var(--color-border-hover)", lineHeight: 1 }}
          >
            {String(step).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="relative">
          <h3
            className="text-base font-bold mb-2 leading-snug"
            style={{
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {title}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            {description}
          </p>
        </div>

        {/* Bottom accent gradient bar on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
          style={{
            background: `linear-gradient(90deg, ${accent.fg}, transparent)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        />
      </div>
    </motion.div>
  );
}

export function WorkflowSection() {
  const { workflow } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="cara-kerja" className="border-b border-border py-16 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-accent-text)" }}
          >
            Metodologi Kerja &amp; Eksekusi
          </p>
          <h2
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text-primary)", letterSpacing: "-0.025em" }}
          >
            Siklus Proyek Data{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FCD34D 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CRISP-DM
            </span>
          </h2>
          <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            Disiplin 4 langkah terstruktur untuk mengubah data mentah menjadi wawasan bisnis dan sistem prediksi yang dapat dioperasikan.
          </p>
        </motion.div>

        {/* Workflow Cards */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {workflow.map((item) => (
            <WorkflowCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WorkflowSection;
