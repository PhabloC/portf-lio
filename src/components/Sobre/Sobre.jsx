"use client";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 px-4 sm:px-6 lg:px-8  text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagem com efeito de luz */}
          <div className="w-full lg:w-1/3 flex justify-center relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-[250px] h-[250px] rounded-full blur-3xl bg-purple-500 opacity-60 absolute -left-5 -top-5" />
              <div className="w-[250px] h-[250px] rounded-full blur-3xl bg-blue-500 opacity-60 absolute -right-5 -bottom-5" />
            </div>
            <Image
              width={300}
              height={300}
              src="/imagens/profile.jpeg"
              alt="Foto de Phablo Carvalho"
              className="rounded-2xl w-100 h-120 object-cover border-4 shadow-lg relative z-10"
            />
          </div>

          {/* Texto */}
          <div className="w-full lg:w-2/3">
            <div className="flex  mb-12">
              <h2 className="text-4xl font-bold text-center">Sobre Mim</h2>
            </div>

            <p className="text-lg text-gray-300 mb-6">
              Olá! Sou Phablo Carvalho, natural de Santana do Garambéu, Minas
              Gerais. Aos 18 anos, me mudei para Juiz de Fora para servir ao
              Exército Brasileiro, onde permaneci por 8 anos como militar da
              ativa. Durante esse período, busquei me aprimorar academicamente,
              conquistando um <strong>Bacharelado em Administração</strong> e um{" "}
              <strong>MBA em Agile Project Management</strong>.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Minha paixão pela tecnologia me levou a explorar o mundo da
              programação, uma área que me fascina e na qual venho me dedicando
              intensamente. Gosto de combinar minha experiência em gestão com o
              desenvolvimento de soluções inovadoras, sempre buscando aprender e
              evoluir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
