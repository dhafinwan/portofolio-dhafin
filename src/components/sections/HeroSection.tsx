import { useState } from "react";
import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import { useApp } from "@/context/AppContext";
import { usePrefersReducedMotion, fadeInUpVariants } from "@/lib/motion";
import {
  ArrowRight,
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react";

export function HeroSection() {
  const content = usePortfolioContent();
  const { lang } = useApp();
  const { profile, labels } = content;
  const prefersReducedMotion = usePrefersReducedMotion();

  // Single photo source with automatic fallback
  const [photoSrc, setPhotoSrc] = useState("/foto-dhafin.png");

  return (
    <section
      id="beranda"
      className="relative bg-bg overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24 min-h-[85vh] flex items-center border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">

          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <motion.div
            className="lg:col-span-7 text-left"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow with thin horizontal line */}
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-6 sm:w-8 bg-current opacity-30" />
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-text-secondary">
                {lang === "id"
                  ? "LULUSAN S1 INFORMATIKA • CERTIFIED ASSOCIATE DATA SCIENTIST"
                  : "INFORMATICS GRADUATE • CERTIFIED ASSOCIATE DATA SCIENTIST"}
              </p>
            </div>

            {/* Editorial Headline: Geist + Instrument Serif Italic */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1] text-text-primary">
              {lang === "id" ? (
                <>
                  Dhafin Kurniawan — <br className="hidden sm:inline" />
                  Merancang{" "}
                  <span className="font-serif-italic font-normal text-text-primary">
                    solusi data &amp; sistem digital.
                  </span>
                </>
              ) : (
                <>
                  Dhafin Kurniawan — <br className="hidden sm:inline" />
                  Crafting{" "}
                  <span className="font-serif-italic font-normal text-text-primary">
                    data solutions &amp; digital systems.
                  </span>
                </>
              )}
            </h1>

            {/* Sub-paragraph narrative */}
            <p className="mt-5 mb-8 text-sm sm:text-base leading-relaxed text-text-secondary max-w-xl font-normal">
              {labels.hero.narrative}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={`mailto:${profile.contact.email}`}
                className="btn-pill-primary inline-flex items-center gap-2"
              >
                <span>{labels.hero.primaryCta}</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={profile.cvFilePath}
                download
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-secondary hover:text-text-primary underline underline-offset-4 decoration-border hover:decoration-text-primary transition-colors"
              >
                <DownloadSimple size={15} />
                <span>{labels.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Minimalist Social Links at the bottom with safe spacing */}
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-4 sm:gap-5 text-xs text-text-secondary font-mono">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <GithubLogo size={15} />
                <span>GitHub</span>
              </a>
              <span className="opacity-25">/</span>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <LinkedinLogo size={15} />
                <span>LinkedIn</span>
              </a>
              <span className="opacity-25">/</span>
              <a
                href={profile.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <InstagramLogo size={15} />
                <span>Instagram</span>
              </a>
              <span className="opacity-25">/</span>
              <a
                href={profile.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <TiktokLogo size={15} />
                <span>TikTok</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: ONLY ONE Profile Photo seamlessly blended (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={prefersReducedMotion ? "visible" : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto flex justify-center">
              {/* Pure CSS alpha mask for bottom fade to blend with any background tone */}
              <img
                src={photoSrc}
                alt="Dhafin Kurniawan"
                onError={() => {
                  if (photoSrc !== "/foto-dhafin.jpg") {
                    setPhotoSrc("/foto-dhafin.jpg");
                  }
                }}
                className="w-full h-auto max-h-[500px] object-cover object-top select-none pointer-events-none transition-all duration-300"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
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
