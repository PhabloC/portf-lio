"use client";

import { useState, useEffect, useRef } from "react";
import { Building2 } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Exército Brasileiro",
    position: "Auxiliar de Sargenteante",
    period: "2017 - 2025",
    description:
      "Desenvolvimento de aplicações web complexas usando React e Next.js, liderança técnica de projetos e mentoria de desenvolvedores juniores.",
    logo: "/logo/exercito.png",
  },
  {
    company: "Fasters",
    position: "Developer",
    period: "2024 - Presente",
    description:
      "Desenvolvimento de soluções web completas utilizando WordPress para criação de sites dinâmicos e React para interfaces interativas e escaláveis. Implementação e integração de APIs RESTful para comunicação com serviços externos, garantindo performance e segurança. Colaboração em projetos full-stack, incluindo manutenção de backends com Node.js, otimização de SEO e entrega de experiências de usuário responsivas e modernas.",
    logo: "/logo/fasters.png",
  },
];

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experiencia" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 text-white transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Experiência Profissional
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`transform transition-all duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="rounded-2xl p-8 bg-white/10 border border-white/20 backdrop-blur-lg hover:border-white/30 transition-all duration-300 hover:shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                  <div className="flex-shrink-0 flex justify-center w-full sm:w-auto mb-4 sm:mb-0">
                    <div>
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={64}
                        height={64}
                        style={{ objectFit: "cover" }}
                        className="object-contain mx-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-gray-300 flex items-center justify-center sm:justify-start">
                          <Building2 size={20} className="mr-2" />
                          {exp.company}
                        </h4>
                      </div>
                      <span className="text-cyan-400 font-semibold bg-cyan-900/20 px-4 py-2 rounded-full border border-cyan-400/20 mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
