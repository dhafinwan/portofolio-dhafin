import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowSquareOut, DownloadSimple } from "@phosphor-icons/react";

interface CredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  issuer: string;
  fileUrl: string;
  previewType: "pdf" | "image";
}

export function CredentialModal({
  isOpen,
  onClose,
  name,
  issuer,
  fileUrl,
  previewType,
}: CredentialModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 80);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="credential-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "rgba(9,9,11,0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "relative",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "16px",
              width: "100%",
              maxWidth: "900px",
              maxHeight: "92vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(37,99,235,0.1)",
            }}
          >
            {/* Top accent gradient line */}
            <div
              style={{
                height: "2px",
                background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, transparent 100%)",
                flexShrink: 0,
              }}
            />

            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid var(--color-border)",
                flexShrink: 0,
                backgroundColor: "var(--color-surface)",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-text)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {issuer}
                </p>
                <h2
                  id="credential-modal-title"
                  style={{
                    fontFamily: "var(--font-heading, 'Space Grotesk', sans-serif)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    lineHeight: 1.3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "480px",
                  }}
                >
                  {name}
                </h2>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
                {/* Open in new tab */}
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Buka di tab baru"
                  title="Buka di Tab Baru"
                  className="inline-flex items-center justify-center rounded-lg text-xs font-medium gap-1.5 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    height: "36px",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-2)",
                    color: "var(--color-text-secondary)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    const a = e.currentTarget;
                    a.style.color = "var(--color-text-primary)";
                    a.style.borderColor = "var(--color-accent)";
                    a.style.backgroundColor = "rgba(37,99,235,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const a = e.currentTarget;
                    a.style.color = "var(--color-text-secondary)";
                    a.style.borderColor = "var(--color-border)";
                    a.style.backgroundColor = "var(--color-surface-2)";
                  }}
                >
                  <ArrowSquareOut size={14} aria-hidden="true" />
                  Buka di Tab Baru
                </a>

                {/* Download */}
                <a
                  href={fileUrl}
                  download
                  aria-label="Unduh file"
                  title="Unduh File"
                  className="inline-flex items-center justify-center rounded-lg text-xs font-medium gap-1.5 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    height: "36px",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-2)",
                    color: "var(--color-text-secondary)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    const a = e.currentTarget;
                    a.style.color = "#86EFAC";
                    a.style.borderColor = "rgba(34,197,94,0.4)";
                    a.style.backgroundColor = "rgba(34,197,94,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const a = e.currentTarget;
                    a.style.color = "var(--color-text-secondary)";
                    a.style.borderColor = "var(--color-border)";
                    a.style.backgroundColor = "var(--color-surface-2)";
                  }}
                >
                  <DownloadSimple size={14} aria-hidden="true" />
                  Unduh File
                </a>

                {/* Close */}
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Tutup modal (ESC)"
                  title="Tutup (ESC)"
                  className="inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-2)",
                    color: "var(--color-text-secondary)",
                    transition: "all 0.2s",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    btn.style.color = "#FCA5A5";
                    btn.style.borderColor = "rgba(239,68,68,0.4)";
                    btn.style.backgroundColor = "rgba(239,68,68,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget;
                    btn.style.color = "var(--color-text-secondary)";
                    btn.style.borderColor = "var(--color-border)";
                    btn.style.backgroundColor = "var(--color-surface-2)";
                  }}
                >
                  <X size={15} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* ESC hint */}
            <div
              style={{
                padding: "0.5rem 1.5rem",
                backgroundColor: "var(--color-bg)",
                flexShrink: 0,
                borderBottom: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <kbd
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "1px 5px",
                  borderRadius: "4px",
                  backgroundColor: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  fontSize: "10px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                }}
              >
                ESC
              </kbd>
              <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>
                untuk menutup · Klik di luar juga menutup modal
              </span>
            </div>

            {/* Modal Body — Preview Area */}
            <div
              style={{
                flex: 1,
                overflow: "hidden",
                backgroundColor: "var(--color-bg)",
                position: "relative",
                minHeight: "400px",
              }}
            >
              {previewType === "pdf" ? (
                <iframe
                  src={`${fileUrl}#view=FitH`}
                  title={`Preview sertifikat: ${name}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "60vh",
                    border: "none",
                    display: "block",
                  }}
                  aria-label={`Preview sertifikat: ${name}`}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    overflow: "auto",
                  }}
                >
                  <img
                    src={fileUrl}
                    alt={`Sertifikat: ${name}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "72vh",
                      objectFit: "contain",
                      borderRadius: "8px",
                      border: "1px solid var(--color-border)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CredentialModal;
