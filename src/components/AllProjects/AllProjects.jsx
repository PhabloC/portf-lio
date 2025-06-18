"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Github, ExternalLink } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const techIcons = {
  react: <FaReact size={22} color="#61DAFB" title="React" />,
  javascript: <IoLogoJavascript size={22} color="#F7DF1E" title="JavaScript" />,
  firebase: <SiFirebase size={22} color="#FFCA28" title="Firebase" />,
  vite: <SiVite size={22} color="#646cff" title="Vite" />,
  tailwind: <RiTailwindCssFill size={22} color="#38bdf8" title="Tailwind" />,
  css: <FaCss3 size={22} color="#1572B6" title="CSS" />,
};

const projects = [
  {
    id: 1,
    title: "DP Incorporadora",
    description:
      "Site institucional para construtora, com área administrativa.",
    tech: ["react", "javascript", "vite", "css"],
    image: "/imagens/dpincorporadora.png",
    github: "https://github.com/PhabloC/dp-inc",
    demo: "https://phabloc.github.io/dp-inc/",
  },
  {
    id: 2,
    title: "NSRO",
    description: "Site para servidor de Ragnarok Online com tema de Naruto.",
    tech: ["react", "javascript", "vite", "tailwind"],
    image: "/imagens/nsro.png",
    github: "https://github.com/PhabloC/nsro",
    demo: "https://nsro-amber.vercel.app/",
  },
  {
    id: 3,
    title: "SASS Oak.io",
    description: "Dashboard moderno com gráficos e integração API.",
    tech: ["react", "javascript", "firebase", "vite", "tailwind"],
    image: "/imagens/oak.png",
    github: "https://github.com/PhabloC/oak.io",
    demo: "https://oak-io.vercel.app/",
  },
  {
    id: 4,
    title: "SASS Oak.io",
    description: "Dashboard moderno com gráficos e integração API.",
    tech: ["react", "javascript", "firebase", "vite", "tailwind"],
    image: "/imagens/oak.png",
    github: "https://github.com/PhabloC/oak.io",
    demo: "https://oak-io.vercel.app/",
  },
];

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "projects") {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      observer.observe(projectsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${projects[activeProjectIndex]?.image})`,
          filter: "brightness(0.1) blur(3px)",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br "></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-white transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Projetos em Destaque
        </h2>

        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            onSlideChange={(swiper) => setActiveProjectIndex(swiper.realIndex)}
            className="projects-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 mb-10 mt-10 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center space-x-1 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white border border-white/30"
                      >
                        <span>{techIcons[tech]}</span>
                        <span>
                          {tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-sm font-semibold text-white"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:from-purple-400 hover:to-pink-500 transition-all duration-300 text-sm font-semibold text-white"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
