import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  usePrefersReducedMotion,
  viewportContainerVariants,
  fadeInUpVariants,
  cardHoverVariants,
} from "@/lib/motion";

export function HighlightsSection() {
  const { highlights } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;

  return (
    <section id="sorotan" className="border-b border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center md:text-left"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">
            Bukti Kuantitatif
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Angka Sorotan Kompetensi
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : cardHoverVariants.hover}
              className="flex flex-col justify-between rounded-lg border border-border bg-surface-2 p-5 transition-colors hover:border-zinc-700"
            >
              <div>
                {/* Static display — no count-up to avoid layout shift */}
                <p className="font-heading text-3xl font-bold tracking-tight text-accent-text sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-text-primary">
                  {item.label}
                </p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HighlightsSection;
