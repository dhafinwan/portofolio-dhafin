import { portfolioData } from "@/data/content";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="keahlian" className="border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">
            Perangkat & Kompetensi
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Keahlian Teknis
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Kumpulan instrumen pemrograman, pustaka machine learning, dan perkakas analisis data yang dikuasai.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-bold tracking-wide text-text-primary">
                {category.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
