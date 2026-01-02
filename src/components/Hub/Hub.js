'use client'
import Link from "next/link";
import Image from "next/image";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";
import { SparklesIcon, StarIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";

const Hub = () => {
  return (
    <section className="w-full bg-fuchsia-pink-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-fuchsia-pink-200 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-secondary-200 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Texto */}
          <RevealWrapper>
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="inline-flex items-center gap-2 bg-white/80 backdrop-blur text-fuchsia-pink-700 font-semibold px-4 py-2 rounded-full text-sm mb-6">
                <SparklesIcon className="w-4 h-4" />
                Fisioterapia Pélvica Especializada
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Fisioterapia Pélvica Especializada: Cuida tu Piso Pélvico en Cada Etapa
    </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg mx-auto lg:mx-0">
                Atención experta en fisioterapia pélvica para embarazo, postparto, dolor pélvico, endometriosis y salud sexual. Cuida tu piso pélvico con especialistas en Puebla.
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
                  Haz nuestro quiz
      </Link>
    </div>
    
              {/* Trust badge */}
              <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-secondary-300 border-2 border-white flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-fuchsia-pink-300 border-2 border-white flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-health-300 border-2 border-white flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-white" />
                  </div>
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
              <Image
                src="/images/cristal-hero.jpg"
                alt="Cristal Sarabia - Fisioterapeuta Pélvica Especializada en Piso Pélvico"
                width={600}
                height={700}
                className="w-full max-w-md lg:max-w-lg mx-auto h-auto max-h-[500px] lg:max-h-[650px] object-cover rounded-3xl shadow-xl"
                priority
              />
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-8 bg-white rounded-2xl shadow-2xl p-4 max-w-[200px] transform rotate-[4deg] hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <StarIcon className="w-6 h-6 text-yellow-400" />
                  <span className="font-bold text-gray-900">5.0</span>
                </div>
                <p className="text-xs text-gray-600">Calificación en Google Reviews</p>
              </div>
            </div>
          </RevealWrapper>
        </div>
    </div>
</section>
  );
};

export default Hub;
