import ProjectsSection from "@/components/AllProjects/AllProjects";
import Experience from "@/components/Experience/Experience";

import PrimarySection from "@/components/PrimarySection/PrimarySection";
import SecondSection from "@/components/SecondSection/SecondSection";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className=" bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <PrimarySection />
      <Experience />
      <Skills />
      <ProjectsSection />
      {/* <SecondSection /> */}
    </div>
  );
}
