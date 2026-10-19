import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import { MapPin } from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  containerStaggerVariants,
} from "@/lib/motion";

export function AboutSection() {
  const { profile } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();

  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const containerVariants = prefersReducedMotion ? undefined : containerStaggerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="tentang" className="border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">
              Tentang Saya
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
              Latar Belakang & Pendekatan Teknis
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-border bg-surface p-6 sm:p-8"
          >
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-accent" />
                <span>{profile.location}</span>
              </div>
              <span className="hidden text-border sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-text-primary">Terbuka untuk peluang Full-time / Contract (Entry-level)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
