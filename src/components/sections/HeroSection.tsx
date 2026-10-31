import { useState } from "react";
import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import { usePrefersReducedMotion, fadeInUpVariants } from "@/lib/motion";
import {
  ArrowRight,
  FilePdf,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react";

export function HeroSection() {
  const content = usePortfolioContent();
  const { profile, labels } = content;
  const prefersReducedMotion = usePrefersReducedMotion();

  // Profile photo state with fallback
  const [photoSrc, setPhotoSrc] = useState("/foto-dhafin.png");

  return (
    <section
      id="beranda"
      className="relative bg-bg overflow-hidden py-8 sm:py-10 lg:py-0 lg:min-h-[calc(100vh-4rem)] flex items-center border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          {/* Left Column: 4 Clean Elements (7 cols) */}
          <motion.div
            className="lg:col-span-7 text-left"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Elemen 1: Status Pill Kecil */}
            <div className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 border border-border mb-3.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-text-secondary">
                {labels.hero.statusBadge}
              </span>
            </div>

            {/* Elemen 2: Headline Utama h1 */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.12] text-text-primary">
              <span>{profile.titleLine1}</span>
              <br />
              <span className="text-text-secondary font-medium">
                {profile.titleLine2}
              </span>
            </h1>

            {/* Elemen 3: 1 Paragraf Ringkas & Padat (maks 3 baris) */}
            <p className="mt-3.5 mb-5 text-[15px] sm:text-base leading-relaxed text-text-secondary max-w-prose font-normal">
              {labels.hero.paragraph}
            </p>

            {/* Elemen 4: Baris Tombol & Link Sosmed Rapi */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`mailto:${profile.contact.email}`}
                className="btn-pill-primary inline-flex items-center gap-2 text-sm font-semibold shadow-xs"
              >
                <span>{labels.hero.primaryCta}</span>
                <ArrowRight size={15} weight="bold" />
              </a>

              <a
                href={profile.cvFilePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-secondary inline-flex items-center gap-2 text-sm font-medium"
              >
                <FilePdf size={16} />
                <span>{labels.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Baris Ikon & Label Sosmed Rapi */}
            <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center gap-4 sm:gap-5 text-xs text-text-secondary font-medium">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg rounded"
                aria-label={labels.hero.socialGithubAria}
              >
                <GithubLogo size={16} weight="bold" />
                <span>GitHub</span>
              </a>

              <span className="opacity-30">•</span>

              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg rounded"
                aria-label={labels.hero.socialLinkedinAria}
              >
                <LinkedinLogo size={16} weight="bold" />
                <span>LinkedIn</span>
              </a>

              <span className="opacity-30">•</span>

              <a
                href={profile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg rounded"
                aria-label={labels.hero.socialInstagramAria}
              >
                <InstagramLogo size={16} weight="bold" />
                <span>@dhafinwan</span>
              </a>

              <span className="opacity-30">•</span>

              <a
                href={profile.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg rounded"
                aria-label={labels.hero.socialTiktokAria}
              >
                <TiktokLogo size={16} weight="bold" />
                <span>@finn.code</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Portrait Container Editorial dengan Fade Mask (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end items-center"
            initial={prefersReducedMotion ? "visible" : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-56 sm:w-64 lg:w-[280px] xl:w-[310px] aspect-[4/5] rounded-2xl bg-surface-2 border border-border overflow-hidden flex items-end justify-center shadow-xs">
              <img
                src={photoSrc}
                alt={profile.name}
                onError={() => {
                  if (photoSrc !== "/foto-dhafin.jpg") {
                    setPhotoSrc("/foto-dhafin.jpg");
                  }
                }}
                className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-300"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
