import { useState, useRef } from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/content";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  viewportContainerVariants,
  VIEWPORT,
} from "@/lib/motion";
import {
  ChartBar,
  Code,
  Wrench,
  CheckCircle,
} from "@phosphor-icons/react";

const serviceMeta: Record<
  number,
  {
    icon: React.ReactNode;
    accent: { bg: string; border: string; fg: string; glow: string };
    highlights: string[];
  }
> = {
  1: {
    icon: <ChartBar size={24} weight="duotone" aria-hidden="true" />,
    accent: {
      bg: "rgba(59,130,246,0.12)",
      border: "rgba(59,130,246,0.35)",
      fg: "#60A5FA",
      glow: "rgba(59,130,246,0.12)",
    },
    highlights: [
      "Pengumpulan & pembersihan dataset kotor",
      "Penyusunan laporan berkala & visualisasi ringkas",
      "Dashboard analitik interaktif & eksplorasi wawasan",
    ],
  },
  2: {
    icon: <Code size={24} weight="duotone" aria-hidden="true" />,
    accent: {
      bg: "rgba(139,92,246,0.12)",
      border: "rgba(139,92,246,0.35)",
      fg: "#C4B5FD",
      glow: "rgba(139,92,246,0.12)",
    },
    highlights: [
      "Pengembangan aplikasi web yang responsif & praktis",
      "Skrip otomasi Python untuk tugas rutin berulang",
      "Integrasi API & alur pemrosesan data otomatis",
    ],
  },
  3: {
    icon: <Wrench size={24} weight="duotone" aria-hidden="true" />,
    accent: {
      bg: "rgba(34,197,94,0.12)",
      border: "rgba(34,197,94,0.35)",
      fg: "#86EFAC",
      glow: "rgba(34,197,94,0.12)",
    },
    highlights: [
      "Troubleshooting perangkat keras & sistem operasi",
      "Konfigurasi dan pengawasan stabilitas jaringan LAN",
      "Pendampingan operasional teknis & live streaming",
    ],
  },
};

function ServiceCard({
  step,
  title,
  description,
  prefersReducedMotion,
}: {
  step: number;
  title: string;
  description: string;
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const meta = serviceMeta[step] || serviceMeta[1];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUpVariants}
      whileHover={prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      className="relative flex flex-col h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col justify-between rounded-2xl overflow-hidden p-6 sm:p-7 h-full"
        style={{
          backgroundColor: "var(--color-surface)",
          border: `1px solid ${hovered && !prefersReducedMotion ? meta.accent.border : "var(--color-border)"}`,
          transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow:
            hovered && !prefersReducedMotion
              ? `0 14px 36px rgba(0,0,0,0.45), 0 0 0 1px ${meta.accent.border}`
              : "none",
        }}
      >
        {/* Spotlight */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              background: `radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${meta.accent.glow}, transparent 70%)`,
            }}
          />
        )}

        {/* Card Header: Icon & Step Number */}
        <div>
          <div className="relative flex items-center justify-between mb-5">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                backgroundColor: meta.accent.bg,
                border: `1px solid ${meta.accent.border}`,
                color: meta.accent.fg,
              }}
            >
              {meta.icon}
            </div>
            <span
              className="font-mono text-3xl font-extrabold tabular-nums"
              style={{ color: "var(--color-border-hover)", lineHeight: 1 }}
            >
              {String(step).padStart(2, "0")}
            </span>
          </div>

          {/* Title & Description */}
          <div className="relative">
            <h3
              className="text-lg font-bold mb-2.5 leading-snug"
              style={{
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {description}
            </p>
          </div>
        </div>

        {/* Capabilities Bullet Points */}
        <div
          className="relative mt-6 pt-5 space-y-2.5"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {meta.highlights.map((point, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed">
              <CheckCircle
                size={16}
                weight="fill"
                className="mt-0.5 shrink-0"
                style={{ color: meta.accent.fg }}
              />
              <span style={{ color: "var(--color-text-secondary)" }}>{point}</span>
            </div>
          ))}
        </div>

        {/* Bottom accent gradient bar on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
          style={{
            background: `linear-gradient(90deg, ${meta.accent.fg}, transparent)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        />
      </div>
    </motion.div>
  );
}

export function WorkflowSection() {
  const { workflow } = portfolioData;
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion ? undefined : viewportContainerVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section id="layanan" className="border-b border-border py-16 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-accent-text)" }}
          >
            Layanan &amp; Fokus Solusi
          </p>
          <h2
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--color-text-primary)", letterSpacing: "-0.025em" }}
          >
            Apa yang{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #C4B5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Saya Kerjakan
            </span>
          </h2>
          <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            Tiga pilar utama solusi teknologi yang siap saya terapkan untuk membantu operasional tim dan kebutuhan digital perusahaan Anda.
          </p>
        </motion.div>

        {/* 3 Main Service Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {workflow.map((item) => (
            <ServiceCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WorkflowSection;
