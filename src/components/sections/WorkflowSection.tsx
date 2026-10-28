import { useState, useRef } from "react";
import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";
import {
  ChartBar,
  Code,
  Wrench,
  Check,
} from "@phosphor-icons/react";

const stepIcons: Record<number, React.ReactNode> = {
  1: <ChartBar size={22} weight="regular" aria-hidden="true" />,
  2: <Code size={22} weight="regular" aria-hidden="true" />,
  3: <Wrench size={22} weight="regular" aria-hidden="true" />,
};

function ServiceCard({
  step,
  title,
  description,
  highlights,
  prefersReducedMotion,
}: {
  step: number;
  title: string;
  description: string;
  highlights: string[];
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const icon = stepIcons[step] || stepIcons[1];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUpVariants}
      whileHover={prefersReducedMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
      className="relative flex flex-col h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 h-full bg-surface border border-border transition-all duration-200"
        style={{
          boxShadow:
            hovered && !prefersReducedMotion
              ? "0 14px 34px rgba(0,0,0,0.18)"
              : "none",
        }}
      >
        {/* Subtle mouse spotlight */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              background:
                "radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, currentColor 5%, transparent), transparent 70%)",
            }}
          />
        )}

        {/* Card Header: Step Index & Icon */}
        <div>
          <div className="relative flex items-center justify-between mb-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 border border-border text-text-primary">
              {icon}
            </div>
            <span className="font-serif-italic text-3xl sm:text-4xl text-text-muted select-none">
              {String(step).padStart(2, "0")}
            </span>
          </div>

          {/* Title & Description */}
          <div className="relative">
            <h3 className="text-lg font-medium mb-2.5 leading-snug text-text-primary">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {description}
            </p>
          </div>
        </div>

        {/* Capabilities Bullet Points */}
        <div className="relative mt-8 pt-5 space-y-2.5 border-t border-border">
          {highlights.map((point, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border text-text-primary">
                <Check size={10} weight="bold" />
              </span>
              <span className="text-text-secondary">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function WorkflowSection() {
  const { workflow, labels } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="layanan" className="border-b border-border py-20 lg:py-28 relative overflow-hidden bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-14 text-left sm:text-center sm:mx-auto sm:max-w-2xl"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-serif-italic text-sm text-text-muted">03</span>
            <span className="h-px w-6 bg-border" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
              {labels.workflow.sectionLabel}
            </p>
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-text-primary">
            {labels.workflow.title}{" "}
            <span className="font-serif-italic font-normal">{labels.workflow.titleAccent}</span>
          </h2>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            {labels.workflow.description}
          </p>
        </motion.div>

        {/* 3 Main Service Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {workflow.map((item) => (
            <ServiceCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              highlights={item.highlights}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WorkflowSection;
