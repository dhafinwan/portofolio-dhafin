import { portfolioData } from "@/data/content";
import { Briefcase, GraduationCap } from "@phosphor-icons/react";

export function TimelineSection() {
  const { experience, education } = portfolioData;

  return (
    <section id="riwayat" className="border-b border-border bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">
            Rekam Jejak
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Pengalaman & Pendidikan
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Pengalaman profesional operasional siaran dan fondasi akademik ilmu informatika.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Kolom Pengalaman */}
          <div className="rounded-xl border border-border bg-surface-2 p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <Briefcase size={22} className="text-accent" />
              <h3 className="text-lg font-bold text-text-primary">Pengalaman Kerja</h3>
            </div>

            <div className="mt-6 space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-accent">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-text-primary">{exp.role}</h4>
                    <span className="text-xs font-medium text-text-muted">{exp.period}</span>
                  </div>
                  <p className="mt-0.5 text-xs font-semibold text-accent-text">{exp.company}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs leading-relaxed text-text-secondary">
                        • {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Pendidikan */}
          <div className="rounded-xl border border-border bg-surface-2 p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <GraduationCap size={22} className="text-accent" />
              <h3 className="text-lg font-bold text-text-primary">Pendidikan Formal</h3>
            </div>

            <div className="mt-6 relative pl-6 before:absolute before:left-0 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-accent">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h4 className="text-base font-bold text-text-primary">{education.degree}</h4>
                <span className="text-xs font-medium text-text-muted">{education.period}</span>
              </div>
              <p className="mt-0.5 text-xs font-semibold text-accent-text">{education.institution}</p>
              
              <div className="mt-3 inline-block rounded border border-border bg-surface px-2.5 py-1 text-xs font-bold text-text-primary">
                IPK: <span className="text-accent-text">{education.gpa}</span>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold text-text-primary">Mata Kuliah Relevan:</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {education.relevantCourses.map((c, cIdx) => (
                    <span key={cIdx} className="rounded border border-border bg-surface px-2 py-0.5 text-[11px] text-text-secondary">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold text-text-primary">Aktivitas & Laboratorium:</p>
                <ul className="mt-2 space-y-1 text-xs text-text-secondary">
                  {education.activities.map((act, aIdx) => (
                    <li key={aIdx}>• {act}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
