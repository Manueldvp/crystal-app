'use client'
import Link from "next/link";
import Image from "next/image";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";

const Hub = () => {
  return (
    <section className="w-full bg-gradient-to-br from-fuchsia-pink-50 via-purple-secondary-50 to-fuchsia-pink-100 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <RevealWrapper>
            <div className="text-center lg:text-left">
              <p className="text-fuchsia-pink-600 font-semibold tracking-wide uppercase text-sm mb-4">
                Fisioterapia Pélvica Especializada
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Salud pélvica para cada etapa de tu vida
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Atención experta para embarazo, postparto, dolor pélvico, endometriosis, menopausia y salud sexual. Tu bienestar empieza aquí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20agendar%20una%20consulta"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-purple-secondary-700 hover:bg-purple-secondary-800 text-white font-semibold py-4 px-8 rounded-full transition-colors"
                >
                  Agendar cita
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-purple-secondary-700 font-semibold py-4 px-8 rounded-full border-2 border-purple-secondary-200 transition-colors"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
          </RevealWrapper>
          
          {/* Imagen */}
          <RevealWrapper>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-fuchsia-pink-200 rounded-full blur-3xl opacity-30" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-secondary-200 rounded-full blur-3xl opacity-30" />
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/43.png"
                  alt="Cristal Sarabia - Fisioterapeuta Pélvica"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hub;
