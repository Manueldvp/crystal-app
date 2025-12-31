'use client'
import Link from "next/link";
import Image from "next/image";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";

const Hub = () => {
  return (
    <section className="w-full min-h-screen bg-fuchsia-pink-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-fuchsia-pink-200 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-secondary-200 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Texto */}
          <RevealWrapper>
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="inline-block bg-white/80 backdrop-blur text-fuchsia-pink-700 font-semibold px-4 py-2 rounded-full text-sm mb-6">
                ✨ Fisioterapia Pélvica Especializada
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                Cuida tu piso pélvico en cada etapa
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
                Atención experta para embarazo, postparto, dolor pélvico, endometriosis y salud sexual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20agendar%20una%20consulta"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full transition-all hover:scale-105"
                >
                  Agendar cita
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-full border-2 border-gray-200 transition-all hover:scale-105"
                >
                  Hacer cuestionario
                </Link>
              </div>
              
              {/* Trust badge */}
              <div className="mt-10 flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-secondary-300 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-fuchsia-pink-300 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-blue-health-300 border-2 border-white" />
                </div>
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">+500</strong> pacientes atendidas
                </p>
              </div>
            </div>
          </RevealWrapper>
          
          {/* Imagen */}
          <RevealWrapper>
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/43.png"
                  alt="Cristal Sarabia - Fisioterapeuta Pélvica"
                  width={700}
                  height={800}
                  className="w-full h-auto object-cover rounded-3xl"
                  priority
                />
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-white rounded-2xl shadow-xl p-4 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⭐</span>
                    <span className="font-bold text-gray-900">5.0</span>
                  </div>
                  <p className="text-xs text-gray-600">Calificación en Google Reviews</p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hub;
