"use client";

import { useEffect, useState } from "react";

export default function Teste() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Pré-carrega a cena
    const preloadScene = async () => {
      try {
        await fetch(
          "https://prod.spline.design/zUI-aqFpGmjubDDC/scene.splinecode"
        );
        setIsLoaded(true);
      } catch (error) {
        console.error("Erro ao pré-carregar a cena:", error);
        setIsLoaded(true); // Exibe mesmo em caso de erro
      }
    };
    preloadScene();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex w-full h-full relative justify-center">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-white">Carregando...</div>
          </div>
        )}
        {isLoaded && (
          <spline-viewer
            url="https://prod.spline.design/zUI-aqFpGmjubDDC/scene.splinecode"
            className="spline-background"
          ></spline-viewer>
        )}
      </div>
    </div>
  );
}
