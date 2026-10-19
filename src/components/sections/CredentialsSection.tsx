import { portfolioData } from "@/data/content";
import { Certificate, BookOpen } from "@phosphor-icons/react";

export function CredentialsSection() {
  const { certifications, trainings } = portfolioData;

  return (
    <section id="sertifikasi" className="border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">
            Validasi Keahlian
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Sertifikasi & Pelatihan
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Sertifikasi kompetensi berstandar nasional (BNSP) dan pelatihan intensif terakreditasi.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Kolom Sertifikasi Resmi */}
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Certificate size={22} className="text-accent" />
              <h3 className="text-lg font-bold text-text-primary">Sertifikasi Kompetensi</h3>
            </div>

            <div className="mt-6 space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border bg-surface-2 p-4 transition-colors hover:border-zinc-700"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-text-primary">{cert.name}</h4>
                    <span className="shrink-0 rounded bg-accent/15 px-2 py-0.5 text-[11px] font-semibold text-accent-text">
                      {cert.periodOrYear}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-text-secondary">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Pelatihan */}
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <BookOpen size={22} className="text-accent" />
              <h3 className="text-lg font-bold text-text-primary">Pelatihan & Kursus</h3>
            </div>

            <div className="mt-6 space-y-3">
              {trainings.map((train, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 border-b border-border/50 pb-3 last:border-b-0 last:pb-0"
                >
                  <div>
                    <h4 className="text-xs font-semibold text-text-primary">{train.name}</h4>
                    <p className="mt-0.5 text-[11px] text-text-secondary">{train.issuer}</p>
                  </div>
                  <span className="shrink-0 text-[11px] font-medium text-text-muted">
                    {train.periodOrYear}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CredentialsSection;
