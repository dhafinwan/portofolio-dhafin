import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";
import { usePortfolioContent } from "@/data/content";

export function App() {
  const { labels } = usePortfolioContent();

  return (
    <div className="min-h-screen bg-bg text-text-primary antialiased selection:bg-fg selection:text-bg">
      {/* Skip-to-content accessible link (Bilingual) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:font-semibold focus:text-bg focus:outline-none focus:ring-2 focus:ring-fg shadow-lg"
      >
        {labels.skipLink}
      </a>

      {/* Semantic Navbar / Header */}
      <Navbar />

      {/* Semantic Main Content - 5 Clean Core Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <CredentialsSection />
      </main>

      {/* Semantic Footer with CTA */}
      <ContactFooterSection />
    </div>
  );
}

export default App;
