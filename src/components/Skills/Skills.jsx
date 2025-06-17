"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const skills = [
  { name: "HTML", level: 95, image: "/logo/html.png" },
  { name: "CSS", level: 90, image: "/logo/css.png" },
  { name: "Bootstrap", level: 85, image: "/logo/bootstrap.png" },
  { name: "Sass", level: 88, image: "/logo/sass.png" },
  { name: "React", level: 94, image: "/logo/react.png" },
  { name: "Tailwind", level: 91, image: "/logo/tailwind.png" },
  { name: "Node.js", level: 87, image: "/logo/node.png" },
  { name: "TypeScript", level: 89, image: "/logo/typescript.jpg" },
  { name: "Wordpress", level: 95, image: "/logo/wordpress.png" },
];

export default function SkillsSection() {
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
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-white transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Skills & Tecnologias
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-b from-gray-800/30 to-gray-900/30 rounded-xl p-4 border border-gray-700 hover:border-gray-500 hover:shadow-xl w-44 h-56 flex flex-col items-center justify-center backdrop-blur-sm transition-all duration-300 mx-auto">
                <div
                  className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/10"
                  style={{ filter: "blur(2px)" }}
                ></div>
                <Image
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain mb-3 relative z-10"
                  loading="lazy"
                />
                <h3 className="text-base font-semibold text-white relative z-10 mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-2 relative z-10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
                <span className="text-xs text-gray-300 font-medium relative z-10">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
