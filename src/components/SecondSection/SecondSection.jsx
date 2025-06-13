"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function SecondSection() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        // Limita o deslocamento a 100px no máximo
        const maxOffset = 100;
        const offset = Math.min(scrollPosition * 0.2, maxOffset);
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center">
        <h1>Second Section</h1>
      </div>

      <div
        ref={parallaxRef}
        className="absolute bottom-0 left-0 ml-[30px] will-change-transform transition-transform duration-100"
      >
        <Image
          src="/imagens/tag.png"
          alt="Tag"
          width={70}
          height={70}
          className="w-full h-auto"
        />
      </div>
    </>
  );
}
