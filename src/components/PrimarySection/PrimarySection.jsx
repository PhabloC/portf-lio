"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;
    let animationFrameId;

    const particles = [];
    const particleCount = Math.floor(window.innerWidth / 10);

    const colors = [
      "rgba(255, 255, 255, 0.8)",
      "rgba(220, 220, 220, 0.6)",
      "rgba(180, 180, 180, 0.4)",
      "rgba(100, 100, 100, 0.2)",
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.2 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
        direction: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.fillStyle = "#111111";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += Math.sin(time * p.speed + i) * 0.5;
        p.y += Math.cos(time * p.speed * 0.7 + i) * 0.5;

        if (p.x < 0 || p.x > width) p.direction = Math.PI - p.direction;
        if (p.y < 0 || p.y > height) p.direction = -p.direction;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 20) {
          const waveY = y + Math.sin(x * 0.01 + time * 0.5) * 10;
          if (x === 0) ctx.moveTo(x, waveY);
          else ctx.lineTo(x, waveY);
        }
        ctx.stroke();
      }

      time += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}

export default function PrimarySection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative justify-center items-center flex w-full h-screen overflow-hidden">
      <spline-viewer url="https://prod.spline.design/JuN5vdtjWeqRzaPN/scene.splinecode"></spline-viewer>

      <div className="h-full flex flex-col items-center justify-center px-6 absolute z-10">
        <div
          className={`text-center max-w-3xl transition-all duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3
            className="text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-500"
            style={{ transform: loaded ? "translateY(0)" : "translateY(20px)" }}
          >
            Olá, eu sou
          </h3>

          <h1
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6 transition-all duration-500 delay-100"
            style={{ transform: loaded ? "translateY(0)" : "translateY(20px)" }}
          >
            Phablo Carvalho
          </h1>

          <div
            className="transition-all duration-500 delay-200"
            style={{ opacity: loaded ? 1 : 0 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desenvolvedor{" "}
              <span className="text-white font-semibold">Front-End</span>{" "}
              especializado.
            </p>

            <button
              className="px-8 py-3 rounded-lg bg-white text-gray-900 font-medium shadow-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: "300ms" }}
            >
              Entre em contato
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
