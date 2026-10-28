import { useState, useRef } from "react";
import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import {
  EnvelopeSimple,
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TiktokLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  VIEWPORT,
} from "@/lib/motion";

export function ContactFooterSection() {
  const { profile, labels } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();

  const bannerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current || prefersReducedMotion) return;
    const rect = bannerRef.current.getBoundingClientRect();
    bannerRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    bannerRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <footer id="kontak" className="border-t border-border bg-bg pt-20 pb-16 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Contact Banner / Callout Card */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
          className="rounded-3xl relative overflow-hidden p-8 sm:p-12 lg:p-14 bg-surface border border-border"
          style={{
            boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
          }}
        >
          <div
            ref={bannerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            {/* Subtle spotlight */}
            {!prefersReducedMotion && (
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  background:
                    "radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, currentColor 5%, transparent), transparent 70%)",
                }}
              />
            )}

            <div className="max-w-xl relative">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider mb-4 bg-surface-2 border border-border text-text-muted">
                {labels.contact.bannerTag}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-text-primary">
                {labels.contact.title}{" "}
                <span className="font-serif-italic font-normal">{labels.contact.titleAccent}</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-secondary">
                {labels.contact.description}
              </p>
            </div>

            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`mailto:${profile.contact.email}`}
                className="btn-pill-primary inline-flex h-12 items-center justify-center gap-2 px-7 text-xs font-medium"
              >
                <EnvelopeSimple size={16} aria-hidden="true" />
                <span>{labels.contact.emailCta}</span>
              </a>

              <a
                href={profile.cvFilePath}
                download
                className="btn-pill-secondary inline-flex h-12 items-center justify-center gap-2 px-6 text-xs font-medium"
              >
                <DownloadSimple size={16} aria-hidden="true" />
                <span>{labels.contact.cvCta}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer info & Links */}
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-8 text-xs text-text-muted"
        >
          <div>
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {profile.name} · {labels.contact.copyright}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors p-1"
            >
              <GithubLogo size={16} aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors p-1"
            >
              <LinkedinLogo size={16} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors p-1"
            >
              <InstagramLogo size={16} aria-hidden="true" />
              <span>@dhafinwan</span>
            </a>

            <a
              href={profile.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Profile"
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors p-1"
            >
              <TiktokLogo size={16} aria-hidden="true" />
              <span>@finn.code</span>
            </a>

            <a
              href={profile.contact.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hugging Face Profile"
              className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors p-1"
            >
              <span>Hugging Face</span>
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default ContactFooterSection;
