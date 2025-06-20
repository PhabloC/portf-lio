import ProjectsSection from "@/components/AllProjects/AllProjects";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import PrimarySection from "@/components/PrimarySection/PrimarySection";
import Sobre from "@/components/Sobre/Sobre";

export default function Home() {
  return (
    <div className="  bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <PrimarySection />
      <Sobre />
      <Experience />
      <Skills />
      <ProjectsSection />
    </div>
  );
}
