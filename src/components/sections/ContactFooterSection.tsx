import { portfolioData } from "@/data/content";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function ContactFooterSection() {
  const { profile } = portfolioData;

  return (
    <footer id="kontak" className="bg-surface pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Contact Banner / Callout */}
        <div className="rounded-2xl border border-border bg-surface-2 p-8 sm:p-12 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
              Tertarik Berdiskusi atau Memiliki Peluang Kerja?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Saya terbuka untuk posisi entry-level sebagai Data Analyst, Data Scientist, atau Machine Learning Engineer. Mari terhubung dan diskusikan kontribusi yang dapat saya berikan.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 lg:mt-0">
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <EnvelopeSimple size={18} />
              Hubungi saya
            </a>
            <a
              href="/cv/CV_DHAFIN KURNIAWAN_ENGLISH.pdf"
              download
              className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-md border border-border bg-surface px-6 text-sm font-medium text-text-primary transition-colors hover:border-zinc-700 hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Unduh CV
            </a>
          </div>
        </div>

        {/* Footer info & Links */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-8 text-xs text-text-muted">
          <div>
            <p>© {new Date().getFullYear()} {profile.name}. Dibuat dengan presisi teknis.</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <GithubLogo size={20} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <LinkedinLogo size={20} />
            </a>
            <a
              href={profile.contact.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hugging Face Profile"
              className="font-medium text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Hugging Face
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooterSection;
