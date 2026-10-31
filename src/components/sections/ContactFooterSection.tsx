import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import {
  EnvelopeSimple,
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  VIEWPORT,
} from "@/lib/motion";

export function ContactFooterSection() {
  const { profile, labels } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();

  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <footer id="kontak" className="border-t border-border bg-bg pt-16 pb-12 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Contact Banner / Callout Card */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
          className="rounded-2xl p-8 sm:p-12 bg-surface border border-border shadow-xs flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider mb-3 bg-surface-2 border border-border text-text-secondary">
              {labels.contact.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-snug">
              {labels.contact.title}
            </h2>
            <p className="mt-3 text-[15px] sm:text-base leading-[1.7] text-text-secondary">
              {labels.contact.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`mailto:${profile.contact.email}`}
              className="btn-pill-primary inline-flex h-11 items-center justify-center gap-2 px-6 text-sm font-semibold shadow-xs"
            >
              <EnvelopeSimple size={18} weight="bold" />
              <span>{labels.contact.emailCta}</span>
            </a>

            <a
              href={profile.cvFilePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-secondary inline-flex h-11 items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              <DownloadSimple size={18} />
              <span>{labels.contact.cvCta}</span>
            </a>
          </div>
        </motion.div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>{labels.contact.copyright}</p>

          <div className="flex items-center gap-4 text-text-secondary">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors inline-flex items-center gap-1"
              aria-label="GitHub"
            >
              <GithubLogo size={16} />
              <span>GitHub</span>
            </a>
            <span className="opacity-30">•</span>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors inline-flex items-center gap-1"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={16} />
              <span>LinkedIn</span>
            </a>
            <span className="opacity-30">•</span>
            <a
              href={profile.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors inline-flex items-center gap-1"
              aria-label="Instagram"
            >
              <InstagramLogo size={16} />
              <span>Instagram</span>
            </a>
            <span className="opacity-30">•</span>
            <a
              href={profile.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors inline-flex items-center gap-1"
              aria-label="TikTok"
            >
              <TiktokLogo size={16} />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooterSection;
