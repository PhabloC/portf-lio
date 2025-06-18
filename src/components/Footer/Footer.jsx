"use client"; // Adicione esta linha no topo do arquivo

import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Elementos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Conteúdo Footer */}
        <div className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Sobre */}
              <div className="md:col-span-2">
                <Image
                  src="/logo/logo-name.png"
                  alt="Phablo Carvalho"
                  width={100}
                  height={100}
                  className="mb-4"
                />
                {/*  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Phablo Carvalho
                </h3> */}
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Desenvolvedor Front-end altamente dedicado, especializado em
                  criar interfaces digitais intuitivas e de alto desempenho.
                  Comprometido com a excelência técnica e em constante busca por
                  novos desafios para aprimorar habilidades e impulsionar o
                  crescimento profissional.
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/PhabloC",
                      label: "GitHub",
                      color: "hover:text-gray-400",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/phablo--carvalho/",
                      label: "LinkedIn",
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: Mail,
                      href: "mailto:phablocarvalho14@hotmail.com",
                      label: "Email",
                      color: "hover:text-green-400",
                    },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center ${color} hover:scale-110 transition-all duration-300`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Rápidos */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-white">
                  Links Rápidos
                </h4>
                <ul className="space-y-3">
                  {["Sobre", "Habilidades", "Experiência", "Projetos"].map(
                    (link) => (
                      <li key={link}>
                        <a
                          href={`#${link.toLowerCase()}`}
                          className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Informações de Contato */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-white">
                  Contato
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-400">
                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                    <span>phablocarvalho14@hotmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                    <span>+55 (32) 99137-0537</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-5 h-5 mr-3 text-red-400" />
                    <span>Juiz de Fora, MG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                <span>© 2025 Phablo Carvalho</span>
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center
                hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
