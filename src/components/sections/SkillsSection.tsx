import { useState, useRef } from "react";
import { motion } from "motion/react";
import { usePortfolioContent } from "@/data/content";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";
import { ChartBar, Code, Database, Globe, Wrench } from "@phosphor-icons/react";

const categoryIconComponent: Record<string, React.ReactNode> = {
  "Data & Reporting": <ChartBar size={20} weight="regular" />,
  "Web & Pemrograman": <Code size={20} weight="regular" />,
  "Database & Sistem": <Database size={20} weight="regular" />,
  "IT Support & Jaringan": <Globe size={20} weight="regular" />,
  // EN categories fallback
  "Web & Programming": <Code size={20} weight="regular" />,
  "Database & Systems": <Database size={20} weight="regular" />,
  "IT Support & Systems": <Globe size={20} weight="regular" />,
};

function SkillCard({
  category,
  skills,
  prefersReducedMotion,
}: {
  category: string;
  skills: string[];
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const icon = categoryIconComponent[category] || <Wrench size={20} weight="regular" />;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUpVariants}
      whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full bg-surface border border-border transition-all duration-200"
        style={{
          boxShadow:
            hovered && !prefersReducedMotion
              ? "0 14px 34px rgba(0,0,0,0.18)"
              : "none",
        }}
      >
        {/* Subtle spotlight */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              background:
                "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, currentColor 5%, transparent), transparent 70%)",
            }}
          />
        )}

        {/* Card Top: Category Icon & Title */}
        <div className="relative mb-6">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 border border-border text-text-primary">
              {icon}
            </div>

            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-surface-2 border border-border text-text-muted">
              {skills.length} tools
            </span>
          </div>

          <h3 className="text-base font-medium tracking-tight text-text-primary">
            {category}
          </h3>
        </div>

        {/* Skill badges */}
        <div className="relative flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
          {skills.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="rounded-md px-2.5 py-1 text-xs font-mono font-medium bg-surface-2 border border-border text-text-secondary transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const { skills, labels } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="keahlian" className="border-b border-border py-20 lg:py-28 relative overflow-hidden bg-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-14 text-left"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-serif-italic text-sm text-text-muted">05</span>
            <span className="h-px w-6 bg-border" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
              {labels.skills.sectionLabel}
            </p>
          </div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-text-primary">
            {labels.skills.title}{" "}
            <span className="font-serif-italic font-normal">{labels.skills.titleAccent}</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl text-text-secondary leading-relaxed">
            {labels.skills.description}
          </p>
        </motion.div>

        {/* Skills Grid with Stagger */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {skills.map((cat, idx) => (
            <SkillCard
              key={idx}
              category={cat.category}
              skills={cat.skills}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
