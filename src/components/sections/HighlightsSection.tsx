import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

function MetricCard({
  value,
  label,
  description,
  index,
  prefersReducedMotion,
}: {
  value: string;
  label: string;
  description: string;
  index: number;
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUpVariants}
      whileHover={prefersReducedMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <div className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 h-full bg-surface border border-border hover:border-text-secondary/40 transition-colors">
        {/* Index Number */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-serif-italic text-2xl text-text-muted opacity-80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Big Metric Value & Label */}
        <div>
          <p className="font-heading text-4xl sm:text-5xl font-medium tracking-tight text-text-primary">
            {value}
          </p>
          <p className="mt-3 text-sm font-semibold tracking-tight text-text-primary">
            {label}
          </p>
        </div>

        {/* Metric Description */}
        <p className="mt-4 pt-4 border-t border-border text-xs leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function HighlightsSection() {
  const content = usePortfolioContent();
  const { highlights, labels } = content;
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;

  return (
    <section id="sorotan" className="border-b border-border py-16 lg:py-24 relative bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-left"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-serif-italic text-sm text-text-muted">01</span>
            <span className="text-text-muted text-xs">•</span>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
              {labels.highlights.sectionLabel}
            </p>
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-text-primary">
            {labels.highlights.title}{" "}
            <span className="font-serif-italic font-normal">
              {labels.highlights.titleAccent}
            </span>
          </h2>
          <p className="mt-3 text-sm text-text-secondary max-w-xl leading-relaxed">
            {labels.highlights.description}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {highlights.map((item, index) => (
            <MetricCard
              key={index}
              value={item.value}
              label={item.label}
              description={item.description}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HighlightsSection;
