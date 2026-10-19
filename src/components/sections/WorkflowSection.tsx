import { portfolioData } from "@/data/content";

export function WorkflowSection() {
  const { workflow } = portfolioData;

  return (
    <section id="cara-kerja" className="border-b border-border bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">
            Metodologi Kerja
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Siklus Proyek Data (CRISP-DM)
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Disiplin 4 langkah terstruktur untuk mengubah data mentah menjadi wawasan bisnis dan sistem prediksi yang dapat dioperasikan.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-lg border border-border bg-surface-2 p-6"
            >
              <div>
                <span className="font-heading text-3xl font-extrabold text-accent">
                  0{item.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowSection;
