"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlignRight, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" justify-center align-center flex w-full">
      {/* Mobile menu button - only icon, no background */}
      <button
        className={`fixed top-4 left-4 z-50 md:hidden p-2 ${
          menuOpen ? "hidden" : "block"
        }`}
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menu"
      >
        <AlignRight size={32} className="text-white" />
      </button>

      {/* Desktop header */}
      <header
        className=" absolute top-0 w-full max-w-lg mx-auto mt-4 rounded-3xl justify-around items-center
       bg-[#5454D4]/30 shadow-lg text-white p-4 backdrop-blur-md z-40 hidden md:flex"
      >
        <nav className="flex space-x-10">
          <Link href="#sobre" className="hover:text-cyan-400 transition-colors">
            Sobre
          </Link>
          <Link
            href="#experiencia"
            className="hover:text-cyan-400 transition-colors"
          >
            Experiência
          </Link>
          <Link
            href="#skills"
            className="hover:text-cyan-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-cyan-400 transition-colors"
          >
            Projetos
          </Link>
        </nav>
      </header>

      {/* Mobile menu - full-screen com background, sem overflow lateral */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#5454D4]/95 z-50 flex flex-col items-center justify-center md:hidden transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ overflowX: "hidden" }}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-transparent text-white"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X size={32} />
        </button>
        <nav className="flex flex-col items-center space-y-6 mt-12 w-full">
          <Link
            href="#sobre"
            className="hover:text-cyan-400 transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="#experiencia"
            className="hover:text-cyan-400 transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Experiência
          </Link>
          <Link
            href="#skills"
            className="hover:text-cyan-400 transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-cyan-400 transition-colors text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </Link>
        </nav>
      </div>

      {/* Dark overlay when menu is open */}
      <div
        className={`absolute inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-500 ease-in-out ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
    </div>
  );
}
