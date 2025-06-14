"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/ProjectsSlider.css";
import { FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    image: "/imagens/dpincorporadora.png",
    name: "DP Incorporadora",
    description:
      "Site institucional para construtora, com área administrativa.",
    techs: ["vue", "node", "mongodb"],
    site: "https://dpincorporadora.com",
    github: "https://github.com/seuusuario/dpincorporadora",
  },
  {
    image: "/imagens/nsro.png",
    name: "NSRO Project",
    description:
      "Plataforma web completa com dashboard administrativo e sistema de gestão.",
    techs: ["vue", "node", "mongodb"],
    site: "https://nsro.com",
    github: "https://github.com/seuusuario/nsro",
  },
  {
    image: "/imagens/oak.png",
    name: "Oak Dashboard",
    description: "Dashboard moderno com gráficos e integração API.",
    techs: ["vue", "node", "mongodb"],
    site: "https://oak.com",
    github: "https://github.com/seuusuario/oak-dashboard",
  },
];

const techIcons = {
  vue: <FaVuejs size={22} color="#42b883" title="Vue.js" />,
  node: <FaNodeJs size={22} color="#3c873a" title="Node.js" />,
  mongodb: <SiMongodb size={22} color="#4db33d" title="MongoDB" />,
};

export default function Projects() {
  return (
    <div>
      <div className="w-full justify-center items-center text-center p-8 mb-8">
        <h1 className="text-4xl font-bold">Meus Projetos</h1>
        <p className="text-lg">Veja alguns dos meus projetos mais recentes.</p>
      </div>
      <div className="projects-slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={3}
          className="projects-swiper"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                />
                <div className="project-content">
                  <h2 className="project-title">{project.name}</h2>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-techs">
                    {project.techs.map((tech, i) => (
                      <span key={i} className="tech-icon">
                        {techIcons[tech]}
                      </span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-site"
                    >
                      <ExternalLink size={18} style={{ marginRight: 6 }} /> Ver
                      Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github"
                    >
                      <Github size={18} style={{ marginRight: 6 }} /> Código
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
