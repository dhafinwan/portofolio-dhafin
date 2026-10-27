import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, allCertificates, CertificateEvidence, CredentialCategory } from "@/data/content";
import {
  Certificate,
  BookOpen,
  Eye,
  DownloadSimple,
  FilePdf,
  Image as ImageIcon,
  Package,
  ArrowSquareOut,
  X,
  FileText,
} from "@phosphor-icons/react";
import {
  usePrefersReducedMotion,
  fadeInUpVariants,
  tabGridVariants,
  buttonHoverVariants,
  VIEWPORT,
} from "@/lib/motion";

// ─── Category Definitions ────────────────────────────────────────────────────
type TabFilter = "Semua" | CredentialCategory;

interface CategoryDef {
  id: TabFilter;
  label: string;
  color: { bg: string; fg: string; border: string };
}

const CATEGORIES: CategoryDef[] = [
  {
    id: "Semua",
    label: "Semua",
    color: { bg: "rgba(113,113,122,0.12)", fg: "#A1A1AA", border: "rgba(113,113,122,0.25)" },
  },
  {
    id: "Data & AI",
    label: "Data & AI",
    color: { bg: "rgba(37,99,235,0.14)", fg: "#60A5FA", border: "rgba(37,99,235,0.35)" },
  },
  {
    id: "Programming & DB",
    label: "Programming & DB",
    color: { bg: "rgba(139,92,246,0.14)", fg: "#C4B5FD", border: "rgba(139,92,246,0.35)" },
  },
  {
    id: "Network & IT",
    label: "Network & IT",
    color: { bg: "rgba(34,197,94,0.14)", fg: "#86EFAC", border: "rgba(34,197,94,0.35)" },
  },
  {
    id: "General & Office",
    label: "General & Office",
    color: { bg: "rgba(251,191,36,0.12)", fg: "#FCD34D", border: "rgba(251,191,36,0.3)" },
  },
];

// Helper to determine if an item is a certification vs training
function isCertification(name: string): boolean {
  const n = name.toLowerCase();
  return n.includes("lsp") || n.includes("administrator") || n.includes("mos");
}

// ─── Spotlight hook ───────────────────────────────────────────────────────────
function useSpotlight(prefersReducedMotion: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return { ref, hovered, setHovered, handleMouseMove };
}

// ─── Certificate Modal Preview Component ──────────────────────────────────────
interface PreviewModalState {
  isOpen: boolean;
  name: string;
  issuer: string;
  fileUrl: string;
  previewType: "pdf" | "image";
  category?: string;
}

function CertificateModal({
  modalState,
  onClose,
}: {
  modalState: PreviewModalState;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modalState.isOpen) {
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 60);
      return () => clearTimeout(timer);
    }
  }, [modalState.isOpen]);

  useEffect(() => {
    if (!modalState.isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [modalState.isOpen, onClose]);

  useEffect(() => {
    if (modalState.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalState.isOpen]);

  return (
    <AnimatePresence>
      {modalState.isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
          style={{
            backgroundColor: "rgba(9, 9, 11, 0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex flex-col w-full max-w-4xl max-h-[92vh] rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(37, 99, 235, 0.15)",
            }}
          >
            {/* Top Accent Bar */}
            <div
              className="h-1 w-full"
              style={{
                background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, #10B981 100%)",
              }}
            />

            {/* Modal Header */}
            <div
              className="flex items-center justify-between gap-3 px-5 py-3.5 border-b"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <div className="min-w-0 pr-2">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-accent-text)" }}
                  >
                    {modalState.issuer}
                  </span>
                  {modalState.category && (
                    <span
                      className="text-[10px] px-1.5 py-0.2 rounded font-mono"
                      style={{
                        backgroundColor: "rgba(37,99,235,0.1)",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {modalState.category}
                    </span>
                  )}
                </div>
                <h3
                  id="cert-modal-title"
                  className="text-base font-bold truncate"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-heading)",
                  }}
                  title={modalState.name}
                >
                  {modalState.name}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={modalState.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                  }}
                  title="Buka di Tab Baru"
                >
                  <ArrowSquareOut size={14} aria-hidden="true" />
                  <span className="hidden sm:inline">Buka di Tab Baru</span>
                </a>

                <a
                  href={modalState.fileUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    backgroundColor: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    color: "#86EFAC",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                  }}
                  title="Unduh File Sertifikat"
                >
                  <DownloadSimple size={14} aria-hidden="true" />
                  <span className="hidden sm:inline">Unduh</span>
                </a>

                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Tutup preview sertifikat"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-secondary)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Modal Body / Viewer Area */}
            <div
              className="flex-1 overflow-auto flex items-center justify-center p-3 sm:p-5"
              style={{
                backgroundColor: "var(--color-bg)",
                minHeight: "450px",
                maxHeight: "78vh",
              }}
            >
              {modalState.previewType === "image" ? (
                <img
                  src={modalState.fileUrl}
                  alt={modalState.name}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  style={{
                    border: "1px solid var(--color-border)",
                  }}
                />
              ) : (
                <iframe
                  src={`${modalState.fileUrl}#view=FitH`}
                  title={`Preview: ${modalState.name}`}
                  className="w-full h-[68vh] min-h-[420px] rounded-lg border-0 shadow-inner"
                  style={{
                    backgroundColor: "#1e1e24",
                  }}
                />
              )}
            </div>

            {/* Modal Footer Info */}
            <div
              className="px-5 py-2.5 flex items-center justify-between text-xs border-t"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                color: "var(--color-text-muted)",
              }}
            >
              <span>Tekan <kbd className="px-1.5 py-0.5 rounded bg-surface-2 border border-border font-mono text-[10px]">ESC</kbd> atau klik di luar untuk menutup</span>
              <span className="font-mono text-[11px]">{modalState.previewType.toUpperCase()} File</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Individual Credential Card ───────────────────────────────────────────────
function CredentialCard({
  item,
  categoryDef,
  onView,
  prefersReducedMotion,
}: {
  item: CertificateEvidence;
  categoryDef: CategoryDef;
  onView: () => void;
  prefersReducedMotion: boolean;
}) {
  const { ref, hovered, setHovered, handleMouseMove } = useSpotlight(prefersReducedMotion);
  const isCert = isCertification(item.name);

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUpVariants}
      initial={prefersReducedMotion ? undefined : "rest"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      whileTap={prefersReducedMotion ? undefined : "tap"}
      animate={prefersReducedMotion ? undefined : "rest"}
      layout
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col justify-between rounded-xl overflow-hidden h-full"
        style={{
          backgroundColor: "var(--color-surface)",
          border: `1px solid ${
            hovered && !prefersReducedMotion ? categoryDef.color.border : "var(--color-border)"
          }`,
          padding: "1.25rem",
          transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow:
            hovered && !prefersReducedMotion
              ? `0 12px 32px rgba(0,0,0,0.45), 0 0 0 1px ${categoryDef.color.border}`
              : "none",
        }}
      >
        {/* Spotlight dynamic hover glow */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              background: `radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${categoryDef.color.bg}, transparent 70%)`,
            }}
          />
        )}

        {/* Card Header & Content */}
        <div className="relative">
          {/* Top row: Type badge, Preview format badge, and Period */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                style={{
                  backgroundColor: isCert ? "rgba(37,99,235,0.12)" : "rgba(113,113,122,0.12)",
                  color: isCert ? "var(--color-accent-text)" : "var(--color-text-secondary)",
                  border: isCert
                    ? "1px solid rgba(37,99,235,0.25)"
                    : "1px solid rgba(113,113,122,0.2)",
                }}
              >
                {isCert ? (
                  <Certificate size={11} aria-hidden="true" />
                ) : (
                  <BookOpen size={11} aria-hidden="true" />
                )}
                {isCert ? "Sertifikasi" : "Pelatihan"}
              </span>

              <span
                className="inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase"
                style={{
                  backgroundColor:
                    item.previewType === "pdf" ? "rgba(239,68,68,0.12)" : "rgba(20,184,166,0.12)",
                  color: item.previewType === "pdf" ? "#FCA5A5" : "#5EEAD4",
                  border:
                    item.previewType === "pdf"
                      ? "1px solid rgba(239,68,68,0.25)"
                      : "1px solid rgba(20,184,166,0.25)",
                }}
              >
                {item.previewType === "pdf" ? (
                  <FilePdf size={10} aria-hidden="true" />
                ) : (
                  <ImageIcon size={10} aria-hidden="true" />
                )}
                {item.previewType === "pdf" ? "PDF" : "JPEG/JPG"}
              </span>
            </div>

            <span
              className="text-[10px] font-mono shrink-0"
              style={{ color: "var(--color-text-muted)" }}
            >
              {item.periodOrYear}
            </span>
          </div>

          {/* Category Pill */}
          <span
            className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide mb-2"
            style={{
              backgroundColor: categoryDef.color.bg,
              color: categoryDef.color.fg,
              border: `1px solid ${categoryDef.color.border}`,
            }}
          >
            {categoryDef.label}
          </span>

          {/* Certificate Title */}
          <h3
            className="text-sm font-bold leading-snug mt-1"
            style={{
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {item.name}
          </h3>

          {/* Certificate Issuer */}
          <p className="text-xs mt-1.5 font-medium" style={{ color: "var(--color-text-secondary)" }}>
            {item.issuer}
          </p>
        </div>

        {/* Card Action Buttons: "Lihat Bukti" and "Unduh" */}
        <div
          className="relative flex items-center gap-2 mt-4 pt-3.5"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <motion.button
            onClick={onView}
            aria-label={`Lihat bukti sertifikat: ${item.name}`}
            initial="rest"
            whileHover={prefersReducedMotion ? undefined : "hover"}
            whileTap={prefersReducedMotion ? undefined : "tap"}
            variants={
              prefersReducedMotion
                ? undefined
                : {
                    rest: { backgroundColor: "rgba(37,99,235,0.12)", borderColor: "rgba(37,99,235,0.3)" },
                    hover: { backgroundColor: "rgba(37,99,235,0.22)", borderColor: "rgba(37,99,235,0.5)" },
                    tap: { scale: 0.97 },
                  }
            }
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              height: "34px",
              color: "var(--color-accent-text)",
              border: "1px solid rgba(37,99,235,0.3)",
              cursor: "pointer",
              transition: "color 0.15s ease",
            }}
          >
            <Eye size={14} aria-hidden="true" />
            Lihat Bukti
          </motion.button>

          <motion.a
            href={item.fileUrl}
            download
            aria-label={`Unduh berkas sertifikat: ${item.name}`}
            initial="rest"
            whileHover={prefersReducedMotion ? undefined : "hover"}
            whileTap={prefersReducedMotion ? undefined : "tap"}
            variants={
              prefersReducedMotion
                ? undefined
                : {
                    rest: { scale: 1, color: "var(--color-text-secondary)" },
                    hover: { scale: 1.08, color: "var(--color-text-primary)" },
                    tap: { scale: 0.92 },
                  }
            }
            className="inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              width: "34px",
              height: "34px",
              backgroundColor: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              flexShrink: 0,
              textDecoration: "none",
            }}
            title="Unduh Berkas"
          >
            <DownloadSimple size={14} aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Credentials Section ────────────────────────────────────────────────
export function CredentialsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeTab, setActiveTab] = useState<TabFilter>("Semua");

  const [modalState, setModalState] = useState<PreviewModalState>({
    isOpen: false,
    name: "",
    issuer: "",
    fileUrl: "",
    previewType: "pdf",
  });

  // Filter individual credentials (exclude bundle from grid, since bundle has dedicated hero CTA)
  const individualCertificates = allCertificates.filter((item) => !item.isBundle);
  const bundleCertificate = allCertificates.find((item) => item.isBundle) || {
    id: "gabungan-seluruh-sertifikat",
    name: "Gabungan seluruh sertifikat",
    issuer: "Universitas Gunadarma / BNSP / Cisco / Microsoft",
    periodOrYear: "2022 – 2026",
    category: "Bundel PDF" as const,
    fileUrl: portfolioData.allCertificatesBundleUrl,
    previewType: "pdf" as const,
    isBundle: true,
  };

  const displayedCertificates =
    activeTab === "Semua"
      ? individualCertificates
      : individualCertificates.filter((c) => c.category === activeTab);

  const openPreview = (item: CertificateEvidence) => {
    setModalState({
      isOpen: true,
      name: item.name,
      issuer: item.issuer,
      fileUrl: item.fileUrl,
      previewType: item.previewType,
      category: item.category,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <>
      <section
        id="sertifikasi"
        className="border-b border-border py-16 lg:py-24 relative overflow-hidden"
      >
        {/* Ambient subtle glow background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          {/* Section Heading */}
          <motion.div
            className="mb-8"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-accent-text)" }}
            >
              Validasi Keahlian &amp; Rekam Jejak
            </p>
            <h2
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--color-text-primary)", letterSpacing: "-0.025em" }}
            >
              Sertifikasi &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #C4B5FD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pelatihan Terverifikasi
              </span>
            </h2>
            <p className="mt-2 text-sm max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
              Daftar lengkap 14 sertifikat resmi berstandar nasional (BNSP), kursus data science,
              pemrograman Go &amp; Oracle, jaringan komputer, serta uji keahlian. Klik{" "}
              <strong style={{ color: "var(--color-text-primary)" }}>Lihat Bukti</strong> untuk
              membuka dokumen asli langsung di halaman ini.
            </p>
          </motion.div>

          {/* Dedicated Bundle Banner CTA (Top) */}
          <motion.div
            className="mb-8 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid rgba(37,99,235,0.35)",
              boxShadow: "0 0 24px rgba(37,99,235,0.12)",
            }}
          >
            <div className="flex items-start sm:items-center gap-3.5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "rgba(37,99,235,0.15)",
                  color: "#60A5FA",
                  border: "1px solid rgba(37,99,235,0.3)",
                }}
              >
                <Package size={22} aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className="text-sm sm:text-base font-bold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Gabungan Seluruh Sertifikat (PDF Lengkap)
                  </h3>
                  <span
                    className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full uppercase"
                    style={{
                      backgroundColor: "rgba(37,99,235,0.15)",
                      color: "#93C5FD",
                      border: "1px solid rgba(37,99,235,0.3)",
                    }}
                  >
                    14 Dokumen
                  </span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
                  Dokumen bundel terpadu berisi seluruh sertifikat kompetensi BNSP, kursus, dan pelatihan.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
              <motion.button
                onClick={() => openPreview(bundleCertificate)}
                initial={prefersReducedMotion ? undefined : "rest"}
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                variants={prefersReducedMotion ? undefined : buttonHoverVariants}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  backgroundColor: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                }}
              >
                <Eye size={14} aria-hidden="true" />
                Lihat Preview Bundel
              </motion.button>

              <motion.a
                href={bundleCertificate.fileUrl}
                download
                initial={prefersReducedMotion ? undefined : "rest"}
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "tap"}
                variants={prefersReducedMotion ? undefined : buttonHoverVariants}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                  color: "#ffffff",
                  boxShadow: "0 0 16px rgba(37,99,235,0.35)",
                  textDecoration: "none",
                }}
              >
                <DownloadSimple size={14} aria-hidden="true" />
                Unduh Bundel (PDF)
              </motion.a>
            </div>
          </motion.div>

          {/* Filter Tab Bar */}
          <motion.div
            className="mb-8 flex flex-wrap gap-2"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
            role="tablist"
            aria-label="Filter kategori sertifikat"
          >
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === "Semua"
                  ? individualCertificates.length
                  : individualCertificates.filter((c) => c.category === cat.id).length;
              const isActive = activeTab === cat.id;

              return (
                <motion.button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(cat.id)}
                  layout
                  initial={prefersReducedMotion ? undefined : "rest"}
                  whileHover={prefersReducedMotion ? undefined : "hover"}
                  whileTap={prefersReducedMotion ? undefined : "tap"}
                  variants={
                    prefersReducedMotion
                      ? undefined
                      : {
                          rest: { scale: 1, y: 0 },
                          hover: { scale: 1.03, y: -1 },
                          tap: { scale: 0.97, y: 0 },
                        }
                  }
                  className="relative inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    backgroundColor: isActive ? cat.color.bg : "var(--color-surface)",
                    border: `1px solid ${isActive ? cat.color.border : "var(--color-border)"}`,
                    color: isActive ? cat.color.fg : "var(--color-text-secondary)",
                    boxShadow: isActive ? `0 0 14px ${cat.color.bg}` : "none",
                    cursor: "pointer",
                    transition:
                      "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  {/* Active indicator dot */}
                  {isActive && !prefersReducedMotion && (
                    <motion.span
                      layoutId="credential-tab-dot"
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: cat.color.fg }}
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  {cat.label}
                  <span
                    className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold"
                    style={{
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.16)"
                        : "var(--color-surface-2)",
                      color: isActive ? cat.color.fg : "var(--color-text-muted)",
                    }}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Certificate Cards Grid with AnimatePresence */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              variants={prefersReducedMotion ? undefined : tabGridVariants}
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate="visible"
              exit={prefersReducedMotion ? undefined : "exit"}
            >
              {displayedCertificates.map((cert) => {
                const catDef =
                  CATEGORIES.find((c) => c.id === cert.category) || CATEGORIES[0];
                return (
                  <CredentialCard
                    key={cert.id}
                    item={cert}
                    categoryDef={catDef}
                    onView={() => openPreview(cert)}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Section Footer CTA */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.button
              onClick={() => openPreview(bundleCertificate)}
              initial={prefersReducedMotion ? undefined : "rest"}
              whileHover={prefersReducedMotion ? undefined : "hover"}
              whileTap={prefersReducedMotion ? undefined : "tap"}
              variants={prefersReducedMotion ? undefined : buttonHoverVariants}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
                cursor: "pointer",
              }}
            >
              <FileText size={18} aria-hidden="true" />
              Lihat Preview Gabungan Seluruh Sertifikat
            </motion.button>

            <motion.a
              href={bundleCertificate.fileUrl}
              download
              initial={prefersReducedMotion ? undefined : "rest"}
              whileHover={prefersReducedMotion ? undefined : "hover"}
              whileTap={prefersReducedMotion ? undefined : "tap"}
              variants={prefersReducedMotion ? undefined : buttonHoverVariants}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                color: "#ffffff",
                boxShadow: "0 0 28px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
                textDecoration: "none",
              }}
            >
              <Package size={18} aria-hidden="true" />
              Unduh Seluruh Sertifikat (PDF)
              <DownloadSimple size={16} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* In-Page Certificate Preview Modal */}
      <CertificateModal modalState={modalState} onClose={closeModal} />
    </>
  );
}

export default CredentialsSection;
