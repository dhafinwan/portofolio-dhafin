import { useState, useRef } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";

// Spotlight card effect hook
function useSpotlight(prefersReducedMotion: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return { ref, hovered, setHovered, handleMouseMove };
}

// Highlight metric card component
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
  const { ref, hovered, setHovered, handleMouseMove } = useSpotlight(prefersReducedMotion);

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUpVariants}
      whileHover={prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
      whileTap={prefersReducedMotion ? undefined : { y: 0, scale: 0.98 }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col justify-between rounded-2xl p-6 h-full overflow-hidden cursor-default"
        style={{
          backgroundColor: "var(--color-surface)",
          border: `1px solid ${
            hovered && !prefersReducedMotion ? "rgba(37,99,235,0.4)" : "var(--color-border)"
          }`,
          transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow:
            hovered && !prefersReducedMotion
              ? "0 14px 36px rgba(0,0,0,0.45), 0 0 0 1px rgba(37,99,235,0.2)"
              : "none",
        }}
      >
        {/* Spotlight overlay */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              background:
                "radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.1), transparent 70%)",
            }}
          />
        )}

        {/* Index number */}
        <span
          className="absolute top-4 right-4 text-xs font-mono font-bold tabular-nums px-2 py-0.5 rounded"
          style={{
            backgroundColor: "var(--color-surface-2)",
            color: hovered ? "var(--color-accent-text)" : "var(--color-text-muted)",
            border: "1px solid var(--color-border)",
            transition: "color 0.2s ease",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Value and Label */}
        <div className="relative">
          <p
            className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl"
            style={{
              background: "linear-gradient(135deg, #FAFAFA 0%, #60A5FA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {value}
          </p>
          <p
            className="mt-3 text-sm font-bold tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            {label}
          </p>
        </div>

        {/* Description */}
        <p
          className="relative mt-4 text-xs leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function HighlightsSection() {
  const { highlights } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;

  return (
    <section id="sorotan" className="border-b border-border py-16 lg:py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="mb-12 text-center"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-accent-text)" }}
          >
            Bukti Kuantitatif &amp; Pengukuran Nyata
          </p>
          <h2
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text-primary)", letterSpacing: "-0.025em" }}
          >
            Metrik Capaian &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #C4B5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hasil Terukur
            </span>
          </h2>
          <p className="mt-2 text-sm max-w-lg mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            Bukti empiris kinerja model klasifikasi skripsi, skala data yang diproses, dan standar akademik.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
