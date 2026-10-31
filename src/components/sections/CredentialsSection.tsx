import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  usePortfolioContent,
  CertificateEvidence,
  CredentialCategory,
} from "@/data/content";
import {
  DownloadSimple,
  FilePdf,
  Image as ImageIcon,
  ArrowSquareOut,
  X,
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
  categories,
}: {
  modalState: PreviewModalState;
  onClose: () => void;
  closeLabel: string;
  openLabel: string;
  downloadLabel: string;
  escHint: string;
  categories: Record<string, string>;
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
          transition={{ duration: 0.18 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex flex-col w-full max-w-4xl max-h-[92vh] rounded-2xl overflow-hidden bg-surface border border-border shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border bg-surface">
              <div className="min-w-0 pr-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono text-text-muted">
                    {modalState.issuer}
                  </span>
                  {modalState.category && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-surface-2 border border-border text-text-secondary">
                      {categories[modalState.category] || modalState.category}
                    </span>
                  )}
                </div>
                <h3
                  id="cert-modal-title"
                  className="text-base sm:text-lg font-semibold tracking-tight text-text-primary truncate"
                >
                  {modalState.name}
                </h3>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={modalState.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-secondary inline-flex h-8 px-3 text-xs items-center gap-1.5"
                  title={openLabel}
                >
                  <ArrowSquareOut size={14} />
                  <span className="hidden sm:inline">{openLabel}</span>
                </a>

                <a
                  href={modalState.fileUrl}
                  download
                  className="btn-pill-secondary inline-flex h-8 px-3 text-xs items-center gap-1.5"
                  title={downloadLabel}
                >
                  <DownloadSimple size={14} />
                  <span className="hidden sm:inline">{downloadLabel}</span>
                </a>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
                  aria-label={closeLabel}
                >
                  <X size={16} weight="bold" />
                </button>
              </div>
            </div>

            {/* Modal Content / Preview Frame */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[520px] max-h-[72vh] bg-surface-2 overflow-auto flex items-center justify-center p-2 sm:p-4">
              {modalState.previewType === "pdf" ? (
                <iframe
                  src={`${modalState.fileUrl}#toolbar=0&navpanes=0`}
                  title={modalState.name}
                  className="w-full h-full min-h-[350px] sm:min-h-[520px] rounded-lg border border-border bg-white"
                />
              ) : (
                <img
                  src={modalState.fileUrl}
                  alt={modalState.name}
                  className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-md"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-surface text-xs text-text-muted">
              <span>{escHint}</span>
              <button
                type="button"
                onClick={onClose}
                className="hover:text-text-primary transition-colors font-medium"
              >
                {closeLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CredentialsSection() {
  const { certificates, certificatesBundleUrl, labels } = usePortfolioContent();
  const [activeTab, setActiveTab] = useState<TabFilter>("Semua");
  const prefersReducedMotion = usePrefersReducedMotion();

  // Preview modal state
  const [modalState, setModalState] = useState<PreviewModalState>({
    isOpen: false,
    name: "",
    issuer: "",
    fileUrl: "",
    previewType: "pdf",
  });

  const openModal = (cert: CertificateEvidence) => {
    setModalState({
      isOpen: true,
      name: cert.name,
      issuer: cert.issuer,
      fileUrl: cert.fileUrl,
      previewType: cert.previewType,
      category: cert.category,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  // Filter out bundle item from main grid
  const individualCertificates = certificates.filter((c) => !c.isBundle);

  const filteredCerts =
    activeTab === "Semua"
      ? individualCertificates
      : individualCertificates.filter((c) => c.category === activeTab);

  const containerVariants = prefersReducedMotion ? undefined : tabGridVariants;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUpVariants;
  const initial = prefersReducedMotion ? "visible" : "hidden";

  return (
    <section
      id="sertifikasi"
      className="border-b border-border py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-bg"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-10 text-left"
          variants={prefersReducedMotion ? undefined : fadeInUpVariants}
          initial={initial}
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <span className="h-2 w-2 rounded-full bg-text-secondary" />
            <p className="text-xs font-mono uppercase tracking-wider text-text-secondary">
              {labels.credentials.sectionLabel}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-snug">
            {labels.credentials.title}
          </h2>
          <p className="mt-2 text-[15px] sm:text-base leading-[1.7] text-text-secondary max-w-prose">
            {labels.credentials.subtitle}
          </p>
        </motion.div>

        {/* Filter Tabs + Download Bundle Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-2 border border-border">
            <button
              type="button"
              onClick={() => setActiveTab("Semua")}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                activeTab === "Semua"
                  ? "bg-surface text-text-primary shadow-xs font-semibold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {labels.credentials.allTab} ({individualCertificates.length})
            </button>
            {CATEGORY_KEYS.map((cat) => {
              const count = individualCertificates.filter((c) => c.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTab === cat
                      ? "bg-surface text-text-primary shadow-xs font-semibold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {labels.credentials.categories[cat] || cat} ({count})
                </button>
              );
            })}
          </div>

          <a
            href={certificatesBundleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-secondary inline-flex items-center gap-2 text-xs font-medium self-start sm:self-auto shrink-0"
          >
            <DownloadSimple size={14} />
            <span>{labels.credentials.downloadBundle}</span>
          </a>
        </div>

        {/* Certificates Grid with Uniform Card Heights */}
        <motion.div
          key={activeTab}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial={initial}
          animate="visible"
        >
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="rounded-2xl p-6 bg-surface border border-border shadow-xs hover:border-text-secondary/50 transition-colors duration-200 flex flex-col justify-between h-full"
            >
              <div>
                {/* Card Top: Issuer & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium text-text-muted truncate max-w-[180px]">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-text-muted shrink-0">
                    {cert.periodOrYear}
                  </span>
                </div>

                {/* Certificate Name */}
                <h3 className="text-base font-semibold tracking-tight text-text-primary leading-snug mb-3 line-clamp-2">
                  {cert.name}
                </h3>
              </div>

              {/* Card Footer: Category badge & View button */}
              <div className="pt-4 border-t border-border mt-5 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-2 border border-border text-text-secondary">
                  {labels.credentials.categories[cert.category] || cert.category}
                </span>

                <button
                  type="button"
                  onClick={() => openModal(cert)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-2 border border-border text-text-primary hover:bg-fg hover:text-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg"
                >
                  {cert.previewType === "pdf" ? (
                    <FilePdf size={14} />
                  ) : (
                    <ImageIcon size={14} />
                  )}
                  <span>{labels.credentials.viewCertificate}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Certificate Preview Modal */}
      <CertificateModal
        modalState={modalState}
        onClose={closeModal}
        closeLabel={labels.credentials.closeModal}
        openLabel={labels.credentials.openInNewTab}
        downloadLabel={labels.credentials.downloadFile}
        escHint={labels.credentials.escHint}
        categories={labels.credentials.categories}
      />
    </section>
  );
}

export default CredentialsSection;
