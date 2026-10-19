import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  usePrefersReducedMotion,
  containerStaggerVariants,
  fadeInUpVariants,
  buttonHoverVariants,
} from "@/lib/motion";

export function HeroSection() {
  const { profile } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();

  // When reduced motion is preferred, skip all animation — show content directly
  const containerVariants = prefersReducedMotion ? undefined : containerStaggerVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initialState = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="beranda" className="border-b border-border bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial={initialState}
          animate="visible"
        >
          {/* Eyebrow / Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-secondary"
          >
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>{profile.headline}</span>
          </motion.div>

          {/* Single H1 — largest, most important element */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg font-medium text-accent-text sm:text-xl"
          >
            {profile.subtitle}
          </motion.p>

          {/* Narrative Summary excerpt */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base leading-relaxed text-text-secondary"
          >
            Membangun proyek machine learning dan NLP dengan Python, SQL, dan Streamlit — mengeksekusi siklus data end-to-end dari data extraction, predictive modeling, hingga deployment aplikasi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={`mailto:${profile.contact.email}`}
              variants={prefersReducedMotion ? undefined : buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Hubungi saya
            </motion.a>
            <motion.a
              href="/cv/CV_DHAFIN KURNIAWAN_ENGLISH.pdf"
              download
              variants={prefersReducedMotion ? undefined : buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-surface px-6 text-sm font-medium text-text-primary transition-colors hover:border-zinc-700 hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Unduh CV
            </motion.a>
          </motion.div>

          {/* Quick External Links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-4 text-sm text-text-secondary"
          >
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              GitHub
            </a>
            <span className="text-border">•</span>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              LinkedIn
            </a>
            <span className="text-border">•</span>
            <a
              href={profile.contact.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Hugging Face
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
