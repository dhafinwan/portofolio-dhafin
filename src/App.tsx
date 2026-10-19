import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import ContactFooterSection from "@/components/sections/ContactFooterSection";

export function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary antialiased selection:bg-accent selection:text-white">
      {/* Skip-to-content accessible link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
        Lompat ke konten utama
      </a>

      {/* Semantic Navbar / Header */}
      <Navbar />

      {/* Semantic Main Content */}
      <main id="main-content">
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <ProjectsSection />
        <WorkflowSection />
        <SkillsSection />
        <TimelineSection />
        <CredentialsSection />
      </main>

      {/* Semantic Footer with CTA */}
      <ContactFooterSection />
    </div>
  );
}

export default App;
