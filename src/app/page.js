import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main 
      className="flex min-h-screen flex-col bg-[#050F1F]"
    >
      <Navbar />
      <div class="container mt-24 mx-auto px-8 py-4">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <FooterSection />
      </div>
    </main>
  );
}
