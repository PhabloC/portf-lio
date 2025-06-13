"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function PrimarySection() {
  const floatRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const profileParallaxRef = useRef(null);
  const animationFrame = useRef();

  useEffect(() => {
    const amplitudes = [20, 30, 25, 35];
    const speeds = [0.002, 0.0015, 0.0018, 0.0012];
    const phases = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];

    let start = null;

    function animate(time) {
      if (!start) start = time;
      const elapsed = time - start;

      floatRefs.forEach((ref, idx) => {
        if (ref.current) {
          const y =
            Math.sin(elapsed * speeds[idx] + phases[idx]) * amplitudes[idx];
          ref.current.style.transform = `translateY(${y}px)`;
        }
      });

      animationFrame.current = requestAnimationFrame(animate);
    }

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [floatRefs]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (profileParallaxRef.current) {
        profileParallaxRef.current.style.transform = `translateY(${
          scrollY * 0.2
        }px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="flex flex-col items-start w-[600px] z-1 gap-2">
          <h3 className="text-6xl font-bold">Hi,</h3>
          <h1 className="text-6xl font-bold">Eu sou o Phablo Carvalho</h1>
          <p className="text-2xl">Desenvolvedor Front-End</p>
          <button
            className="flex rounded-[8px] border border-[#5454D4] bg-[#5454D4] p-2 px-8 cursor-pointer hover:bg-transparent 
          transition-colors mt-5"
          >
            Contato
          </button>
        </div>
        <div className="flex w-[600px] h-[400px] relative justify-center">
          <div className="absolute left-10" ref={floatRefs[0]}>
            <Image src="/imagens/onda.png" alt="Line" width={70} height={70} />
          </div>
          <div className="absolute left-10 bottom-0" ref={floatRefs[1]}>
            <Image
              src="/imagens/triangulo.png"
              alt="Line"
              width={70}
              height={70}
            />
          </div>
          <div className="absolute right-10" ref={floatRefs[2]}>
            <Image
              src="/imagens/circulo.png"
              alt="Line"
              width={70}
              height={70}
            />
          </div>
          <div className="absolute right-10 bottom-0" ref={floatRefs[3]}>
            <Image src="/imagens/html.png" alt="Line" width={70} height={70} />
          </div>

          <div ref={profileParallaxRef}>
            <Image src="/profile.png" alt="Logo" width={400} height={400} />
          </div>
        </div>
      </div>
    </>
  );
}
