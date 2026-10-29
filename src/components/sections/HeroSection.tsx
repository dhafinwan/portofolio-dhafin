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
      className="relative bg-bg overflow-hidden pt-6 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20 flex items-center border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">

          {/* Left Column: Headline & Actions (7 cols) */}
          <motion.div
            className="lg:col-span-7 text-left"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow Label (No decorative line, clean bullet) */}
            <div className="flex items-center gap-2 mb-3.5">
              <span className="h-1.5 w-1.5 rounded-full bg-text-primary/70 shrink-0" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-text-secondary">
                {labels.hero.statusBadge}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.85rem] font-medium tracking-tight leading-[1.12] text-text-primary">
              {labels.hero.greeting} {labels.hero.name}
            </h1>

            {/* Sub-headline Accent (Instrument Serif Italic) */}
            <p className="mt-2 text-lg sm:text-xl lg:text-[1.65rem] font-serif-italic font-normal text-text-primary leading-snug">
              {labels.hero.headlineAccent}
            </p>

            {/* Description Narrative */}
            <p className="mt-3.5 mb-6 text-sm sm:text-base leading-relaxed text-text-secondary max-w-xl font-normal">
              {labels.hero.narrative}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-5">
              <a
                href={`mailto:${profile.contact.email}`}
                className="btn-pill-primary inline-flex items-center gap-2 text-xs sm:text-sm font-medium"
              >
                <span>{labels.hero.primaryCta}</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={profile.cvFilePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-secondary inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium"
              >
                <FilePdf size={16} />
                <span>{labels.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Social Links under buttons */}
            <div className="mt-7 pt-4.5 border-t border-border flex flex-wrap items-center gap-4 sm:gap-5 text-xs text-text-secondary font-mono">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
                aria-label="GitHub Profile"
              >
                <GithubLogo size={15} />
                <span>GitHub</span>
              </a>
              <span className="opacity-30">•</span>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinLogo size={15} />
                <span>LinkedIn</span>
              </a>
              <span className="opacity-30">•</span>
              <a
                href={profile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
                aria-label="Instagram Profile"
              >
                <InstagramLogo size={15} />
                <span>@dhafinwan</span>
              </a>
              <span className="opacity-30">•</span>
              <a
                href={profile.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
                aria-label="TikTok Profile"
              >
                <TiktokLogo size={15} />
                <span>@finn.code</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo centered with left text (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={prefersReducedMotion ? "visible" : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-56 sm:w-64 lg:w-[340px] xl:w-[370px] mx-auto flex justify-center">
              <img
                src={photoSrc}
                alt="Dhafin Kurniawan"
                onError={() => {
                  if (photoSrc !== "/foto-dhafin.jpg") {
                    setPhotoSrc("/foto-dhafin.jpg");
                  }
                }}
                className="w-full h-auto object-cover object-top select-none pointer-events-none transition-all duration-300"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
