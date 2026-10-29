import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  usePortfolioContent,
  allCertificates,
  CertificateEvidence,
  CredentialCategory,
} from "@/data/content";
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
  VIEWPORT,
} from "@/lib/motion";

type TabFilter = "Semua" | CredentialCategory;

const CATEGORY_KEYS: CredentialCategory[] = [
  "Data & AI",
  "Programming & DB",
  "Network & IT",
  "General & Office",
];

function isCertification(name: string): boolean {
  const n = name.toLowerCase();
  return n.includes("lsp") || n.includes("administrator") || n.includes("mos");
}

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
  closeLabel,
  openLabel,
  downloadLabel,
  escHint,
}: {
  modalState: PreviewModalState;
  onClose: () => void;
  closeLabel: string;
  openLabel: string;
  downloadLabel: string;
  escHint: string;
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
            backgroundColor: "rgba(10, 10, 10, 0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex flex-col w-full max-w-4xl max-h-[92vh] rounded-2xl overflow-hidden bg-surface border border-border"
            style={{
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.75)",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border bg-surface">
              <div className="min-w-0 pr-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                    {modalState.issuer}
                  </span>
                  {modalState.category && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-surface-2 border border-border text-text-secondary">
                      {modalState.category}
                    </span>
                  )}
                </div>
                <h3
                  id="cert-modal-title"
                  className="text-base font-medium truncate text-text-primary"
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-surface-2 border border-border text-text-primary hover:bg-surface transition-colors"
                  title={openLabel}
                >
                  <ArrowSquareOut size={14} aria-hidden="true" />
                  <span className="hidden sm:inline">{openLabel}</span>
                </a>

                <a
                  href={modalState.fileUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-primary inline-flex items-center gap-1.5 text-xs font-medium"
                  title={downloadLabel}
                >
                  <DownloadSimple size={14} aria-hidden="true" />
                  <span className="hidden sm:inline">{downloadLabel}</span>
                </a>

                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label={closeLabel}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-2 border border-border text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Modal Body / Viewer Area */}
            <div
              className="flex-1 overflow-auto flex items-center justify-center p-4 sm:p-6 bg-bg"
              style={{
                minHeight: "450px",
                maxHeight: "76vh",
              }}
            >
              {modalState.previewType === "image" ? (
                <img
                  src={modalState.fileUrl}
                  alt={modalState.name}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-[70vh] object-contain rounded-lg border border-border shadow-2xl"
                />
              ) : (
                <iframe
                  src={`${modalState.fileUrl}#view=FitH`}
                  title={`Preview: ${modalState.name}`}
                  className="w-full h-[68vh] min-h-[420px] rounded-lg border-0 shadow-inner bg-[#1e1e24]"
                />
              )}
            </div>

            {/* Modal Footer Info */}
            <div className="px-5 py-2.5 flex items-center justify-between text-xs border-t border-border bg-surface text-text-muted">
              <span>{escHint}</span>
              <span className="font-mono text-[11px] uppercase">{modalState.previewType}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CredentialCard({
  item,
  viewLabel,
  onView,
  prefersReducedMotion,
}: {
  item: CertificateEvidence;
  viewLabel: string;
  onView: () => void;
  prefersReducedMotion: boolean;
}) {
  const { ref, hovered, setHovered, handleMouseMove } = useSpotlight(prefersReducedMotion);
  const isCert = isCertification(item.name);

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInUpVariants}
      whileHover={prefersReducedMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
      layout
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex flex-col justify-between rounded-xl p-5 sm:p-6 h-full bg-surface border border-border transition-all duration-200"
        style={{
          boxShadow:
            hovered && !prefersReducedMotion
              ? "0 12px 30px rgba(0,0,0,0.18)"
              : "none",
        }}
      >
        {/* Spotlight dynamic hover glow */}
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              background:
                "radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, currentColor 5%, transparent), transparent 70%)",
            }}
          />
        )}

        {/* Card Header & Content */}
        <div className="relative">
          {/* Top row: Type badge & Period */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wide bg-surface-2 border border-border text-text-primary">
                {isCert ? (
                  <Certificate size={11} aria-hidden="true" />
                ) : (
                  <BookOpen size={11} aria-hidden="true" />
                )}
                {isCert ? "Certification" : "Training"}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono font-medium uppercase bg-surface-2 border border-border text-text-muted">
                {item.previewType === "pdf" ? (
                  <FilePdf size={10} aria-hidden="true" />
                ) : (
                  <ImageIcon size={10} aria-hidden="true" />
                )}
                {item.previewType.toUpperCase()}
              </span>
            </div>

            <span className="text-[10px] font-mono text-text-muted shrink-0">
              {item.periodOrYear}
            </span>
          </div>

          {/* Category Pill */}
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider mb-2 bg-surface-2 border border-border text-text-muted">
            {item.category}
          </span>

          {/* Certificate Title */}
          <h3 className="text-sm font-medium leading-snug mt-1 text-text-primary">
            {item.name}
          </h3>

          {/* Certificate Issuer */}
          <p className="text-xs mt-1.5 text-text-secondary">
            {item.issuer}
          </p>
        </div>

        {/* Card Action Buttons */}
        <div className="relative flex items-center gap-2 mt-5 pt-4 border-t border-border">
          <button
            onClick={onView}
            aria-label={`View certificate: ${item.name}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full text-xs font-medium h-9 bg-surface-2 border border-border text-text-primary hover:bg-surface hover:border-text-primary/40 transition-colors cursor-pointer"
          >
            <Eye size={14} aria-hidden="true" />
            <span>{viewLabel}</span>
          </button>

          <a
            href={item.fileUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download certificate file: ${item.name}`}
            className="inline-flex items-center justify-center rounded-full w-9 h-9 bg-surface-2 border border-border text-text-secondary hover:text-text-primary transition-colors shrink-0"
            title={viewLabel}
          >
            <DownloadSimple size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function CredentialsSection() {
  const { labels, allCertificatesBundleUrl } = usePortfolioContent();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeTab, setActiveTab] = useState<TabFilter>("Semua");

  const [modalState, setModalState] = useState<PreviewModalState>({
    isOpen: false,
    name: "",
    issuer: "",
    fileUrl: "",
    previewType: "pdf",
  });

  const individualCertificates = allCertificates.filter((item) => !item.isBundle);
  const bundleCertificate = allCertificates.find((item) => item.isBundle) || {
    id: "gabungan-seluruh-sertifikat",
    name: labels.credentials.bundleTitle,
    issuer: "Universitas Gunadarma / BNSP / Cisco / Microsoft",
    periodOrYear: "2022 - 2026",
    category: "Bundel PDF" as const,
    fileUrl: allCertificatesBundleUrl,
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
        className="border-b border-border py-16 lg:py-24 relative overflow-hidden bg-bg"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          {/* Section Heading */}
          <motion.div
            className="mb-10 text-left"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif-italic text-sm text-text-muted">07</span>
              <span className="text-text-muted text-xs">•</span>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                {labels.credentials.sectionLabel}
              </p>
            </div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl text-text-primary">
              {labels.credentials.title}{" "}
              <span className="font-serif-italic font-normal">{labels.credentials.titleAccent}</span>
            </h2>
            <p className="mt-3 text-sm max-w-2xl text-text-secondary leading-relaxed">
              {labels.credentials.description}
            </p>
          </motion.div>

          {/* Dedicated Bundle Banner CTA (Top) */}
          <motion.div
            className="mb-10 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 bg-surface border border-border"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-surface-2 border border-border text-text-primary">
                <Package size={24} aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-medium text-text-primary">
                    {labels.credentials.bundleTitle}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-2 border border-border text-text-muted">
                    14 Files
                  </span>
                </div>
                <p className="text-xs mt-1 text-text-secondary">
                  {labels.credentials.bundleDesc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center">
              <button
                onClick={() => openPreview(bundleCertificate)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-surface-2 border border-border text-text-primary hover:bg-surface transition-colors cursor-pointer"
              >
                <Eye size={14} aria-hidden="true" />
                <span>Preview</span>
              </button>

              <a
                href={bundleCertificate.fileUrl}
                download
                className="btn-pill-primary inline-flex items-center gap-1.5 text-xs font-medium"
              >
                <DownloadSimple size={14} aria-hidden="true" />
                <span>{labels.credentials.downloadBundle}</span>
              </a>
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
            aria-label="Filter category"
          >
            {/* "All" Tab */}
            <button
              role="tab"
              aria-selected={activeTab === "Semua"}
              onClick={() => setActiveTab("Semua")}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
                activeTab === "Semua"
                  ? "bg-text-primary text-bg font-semibold"
                  : "bg-surface border border-border text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>{labels.credentials.allTab}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                activeTab === "Semua" ? "bg-bg/20 text-bg" : "bg-surface-2 text-text-muted"
              }`}>
                {individualCertificates.length}
              </span>
            </button>

            {/* Individual Category Tabs */}
            {CATEGORY_KEYS.map((catKey) => {
              const label = labels.credentials.categories[catKey] || catKey;
              const count = individualCertificates.filter((c) => c.category === catKey).length;
              const isActive = activeTab === catKey;

              return (
                <button
                  key={catKey}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(catKey)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-text-primary text-bg font-semibold"
                      : "bg-surface border border-border text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-bg/20 text-bg" : "bg-surface-2 text-text-muted"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Certificate Cards Grid with AnimatePresence */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              variants={prefersReducedMotion ? undefined : tabGridVariants}
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate="visible"
              exit={prefersReducedMotion ? undefined : "exit"}
            >
              {displayedCertificates.map((cert) => (
                <CredentialCard
                  key={cert.id}
                  item={cert}
                  viewLabel={labels.credentials.viewEvidence}
                  onView={() => openPreview(cert)}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Section Footer CTA */}
          <motion.div
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3"
            variants={prefersReducedMotion ? undefined : fadeInUpVariants}
            initial={initial}
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <button
              onClick={() => openPreview(bundleCertificate)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-medium bg-surface border border-border text-text-primary hover:bg-surface-2 transition-colors cursor-pointer"
            >
              <FileText size={16} aria-hidden="true" />
              <span>{labels.credentials.previewAll}</span>
            </button>

            <a
              href={bundleCertificate.fileUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-pill-primary inline-flex items-center justify-center gap-2 text-xs font-medium py-3 px-7"
            >
              <Package size={16} aria-hidden="true" />
              <span>{labels.credentials.downloadBundle}</span>
              <DownloadSimple size={14} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* In-Page Certificate Preview Modal */}
      <CertificateModal
        modalState={modalState}
        onClose={closeModal}
        closeLabel={labels.credentials.closeModal}
        openLabel={labels.credentials.openInNewTab}
        downloadLabel={labels.credentials.downloadAction}
        escHint={labels.credentials.escHint}
      />
    </>
  );
}

export default CredentialsSection;
