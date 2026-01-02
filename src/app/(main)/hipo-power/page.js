"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useIsDesktop from "@/hooks/useIsDesktop";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function HipoPowerPage() {
  const isDesktop = useIsDesktop();
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleAccordionOpen = (value) =>
    setOpenAccordion(openAccordion === value ? 0 : value);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - POWER EDITION */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden bg-gradient-to-br from-fuchsia-pink-600 via-purple-secondary-700 to-pink-secondary-800">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          <Image
            src="/images/hipopower/hero.webp"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-pink-500/20 via-transparent to-purple-secondary-900/40"></div>

        {/* Animated circles/shapes for visual interest */}
        <div className="absolute top-10 right-5 md:top-20 md:right-10 w-32 h-32 md:w-72 md:h-72 bg-fuchsia-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-5 md:bottom-20 md:left-10 w-40 h-40 md:w-96 md:h-96 bg-purple-secondary-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative h-full min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          <div className="text-center px-4 py-8 md:py-12 max-w-6xl mx-auto">
            <RevealWrapper>
              {/* Badge/Tag */}
              <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 md:px-6 md:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <p className="text-xs md:text-sm lg:text-base text-white font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="text-fuchsia-pink-200">●</span>
                  Taller de Hipopresivos
                  <span className="text-fuchsia-pink-200">●</span>
                </p>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-3 md:mb-4 tracking-tight leading-none">
                HIPO
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-pink-200 via-pink-secondary-100 to-purple-secondary-200 animate-pulse">
                  POWER
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-secondary-100 font-bold mb-4 md:mb-6 tracking-wide">
                FORTALECE • TRANSFORMA • EMPODERA
              </p>

              {/* Próxima fecha */}
              <div className="mb-4 md:mb-6 inline-block px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/30">
                <p className="text-xs md:text-sm text-purple-secondary-100 uppercase tracking-wider mb-1">
                  Próxima fecha
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-black text-white">
                  {process.env.NEXT_PUBLIC_HIPOPOWER_DATE || "Por confirmar"}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
                El taller más completo de entrenamiento hipopresivo y
                fortalecimiento del core.
                <span className="block mt-2 font-semibold text-fuchsia-pink-200">
                  3 horas presenciales + 8 clases online en vivo
                </span>
                <span className="block mt-2 font-semibold text-aquamarine-blue-200">
                  + Acceso a Hipopower Academy por 2 meses
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quiero%20inscribirme%20a%20HIPOPOWER"
                  target="_blank"
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-fuchsia-pink-600 font-bold text-base md:text-lg rounded-full hover:bg-fuchsia-pink-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    INSCRÍBETE AHORA
                    <span className="text-2xl">→</span>
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-pink-400 to-purple-secondary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>

                <a
                  href="#videos"
                  className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-bold text-base md:text-lg rounded-full hover:bg-white hover:text-fuchsia-pink-600 transition-all duration-300 hover:scale-105"
                >
                  VER VIDEOS ▼
                </a>
              </div>

              {/* Stats/Features */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-2 font-black text-fuchsia-pink-200">
                    +5
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">años</div>
                  <div className="text-sm text-purple-secondary-100">
                    Experiencia en talleres
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-2 font-black text-fuchsia-pink-200">
                    8
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    semanas
                  </div>
                  <div className="text-sm text-purple-secondary-100">
                    De transformación total
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-2 font-black text-fuchsia-pink-200">
                    100%
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    efectivo
                  </div>
                  <div className="text-sm text-purple-secondary-100">
                    Resultados garantizados
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Title Section */}
      <RevealWrapper>
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
          <p className="text-sm md:text-base text-gray-500 mb-6 uppercase tracking-wider">
            Taller Presencial + 8 Clases Online en Vivo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-gray-700 leading-tight md:leading-snug">
            ¿Te imaginas cuidar tu salud abdominal y pélvica mientras trabajas
            un abdomen de forma funcional, firme y estético?
          </h2>
        </section>
      </RevealWrapper>

      {/* Welcome Section with Vertical Video */}
      <RevealWrapper>
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Video vertical explicativo */}
            <div className="relative aspect-[350/600] max-w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-fuchsia-pink-100 to-purple-secondary-100">
              <iframe
                src="https://www.canva.com/design/DAGwY1AQ5BU/yAJYSRxHUi7AtC1fJ0Zv9w/watch?embed"
                allow="fullscreen"
                className="absolute inset-0 w-full h-full"
                title="¿Qué es Hipopower?"
              ></iframe>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center mb-4">
                <Image
                  src="/hipopower-logo.png"
                  alt="Hipopower Logo"
                  width={250}
                  height={100}
                  className="h-auto"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-pink-600">
                ¿Qué es HIPOPOWER?
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Bienvenida a{" "}
                <span className="font-semibold text-purple-secondary-500">
                  HIPOPOWER
                </span>
                , una experiencia integral para mujeres que quieren reconectar
                con su cuerpo y su fuerza desde el centro.
              </p>
              <p className="text-sm md:text-base text-gray-500 italic">
                Un taller transformador donde aprenderás a fortalecer tu abdomen
                y piso pélvico de forma funcional y segura, guiada por una
                especialista con más de 5 años de experiencia en fisioterapia
                pélvica y entrenamiento de hipopresivos.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* What You'll Learn Section */}
      <RevealWrapper>
        <section className="bg-gradient-to-br from-purple-secondary-50 to-pink-secondary-50 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                ¿De qué trata el{" "}
                <span className="text-fuchsia-pink-600">TALLER</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-3">
                Un programa completo que combina teoría, práctica y seguimiento
                personalizado
              </p>
              <p className="text-base md:text-lg text-aquamarine-blue-600 font-semibold max-w-2xl mx-auto">
                Incluye acceso a nuestra plataforma digital Hipopower Academy
                con videos on-demand y seguimiento de progreso
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-fuchsia-pink-500">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-pink-500 to-fuchsia-pink-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Técnica Hipopresiva
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aprende la técnica correcta de respiración y postura para
                  ejercicios hipopresivos efectivos y seguros.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-purple-secondary-500">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-secondary-500 to-purple-secondary-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Fortalecimiento Core
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trabaja abdomen y piso pélvico de forma funcional, reduciendo
                  cintura y mejorando tu postura.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-pink-secondary-500">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-secondary-500 to-pink-secondary-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Prevención y Recuperación
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ideal para postparto, diástasis, incontinencia y prevención de
                  disfunciones del piso pélvico.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-fuchsia-pink-500">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-pink-500 to-fuchsia-pink-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Rendimiento Deportivo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mejora tu respiración, estabilidad y rendimiento en cualquier
                  actividad física o deportiva.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-aquamarine-blue-500">
                <div className="w-12 h-12 bg-gradient-to-br from-aquamarine-blue-500 to-blue-health-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Plataforma Digital Academy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Acceso exclusivo a Hipopower Academy: videos grabados, rutinas
                  on-demand, seguimiento de mediciones y gráficos de progreso.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-purple-secondary-500">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-secondary-500 to-purple-secondary-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">6</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  8 Clases Online en Vivo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sesiones semanales en vivo por 8 semanas para reforzar,
                  resolver dudas y mantener tu motivación con el grupo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Horizontal Video Section - Deeper Dive */}
      <RevealWrapper>
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Conoce más sobre{" "}
              <span className="text-fuchsia-pink-600">HIPOPOWER</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre en detalle cómo funciona nuestra metodología
            </p>
          </div>

          <div className="relative w-full aspect-video bg-gradient-to-br from-fuchsia-pink-100 to-purple-secondary-100 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-purple-secondary-200 hover:ring-fuchsia-pink-300 transition-all duration-300">
            <iframe
              src="https://www.canva.com/design/DAG4T3Klleo/KPttK0iM9BYvfZMpB9CUMg/watch?embed"
              allow="fullscreen"
              className="w-full h-full"
              title="Metodología Hipopower"
            ></iframe>
          </div>
        </section>
      </RevealWrapper>

      {/* Video Section - POWER STYLE with Group Photo Background */}
      <section id="videos" className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hipopower-group.jpg"
            alt="Grupo Hipopower"
            fill
            className="object-cover"
          />
          {/* Dark overlay with gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-pink-900/85 via-purple-secondary-800/90 to-pink-secondary-900/85"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <RevealWrapper>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                EXPERIENCIAS{" "}
                <span className="text-fuchsia-pink-200">REALES</span>
              </h2>
              <p className="text-lg md:text-xl text-purple-secondary-100 font-medium mb-4">
                Conoce las historias de transformación de mujeres como tú
              </p>
              <p className="text-base md:text-lg text-white/90 italic">
                Mira lo que logran nuestras participantes en cada taller
              </p>
            </div>
          </RevealWrapper>

          {/* Single Video - No Card */}
          <RevealWrapper>
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/30 hover:ring-fuchsia-pink-300/70 transition-all duration-300">
                <iframe
                  src="https://www.canva.com/design/DAG4T5GSgi4/QFIJfYtdDdFyk_F5620mnw/watch?embed"
                  allow="fullscreen"
                  className="w-full h-full"
                  title="Resumen de talleres pasados"
                ></iframe>
              </div>
            </div>
          </RevealWrapper>

          {/* Power Statement */}
          <RevealWrapper>
            <div className="mt-16 text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed drop-shadow-lg">
                Entrena con{" "}
                <span className="text-fuchsia-pink-200">INTENSIDAD</span>,
                <br />
                Fortalece con{" "}
                <span className="text-purple-secondary-200">PROPÓSITO</span>,
                <br />
                Vive con <span className="text-pink-secondary-200">PODER</span>
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Hipopower Academy Section */}
      <RevealWrapper>
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-aquamarine-blue-50 via-blue-health-50 to-aquamarine-blue-100">
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-aquamarine-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-health-300/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-6 py-2 bg-aquamarine-blue-500/10 backdrop-blur-sm rounded-full border border-aquamarine-blue-300">
                <p className="text-sm md:text-base text-aquamarine-blue-700 font-semibold uppercase tracking-widest">
                  Exclusivo para participantes
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6">
                HIPOPOWER{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aquamarine-blue-500 to-blue-health-500">
                  ACADEMY
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
                Tu plataforma digital de seguimiento y entrenamiento
              </p>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Continúa tu transformación desde casa con acceso exclusivo a
                videos, rutinas y seguimiento de progreso
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
              {/* Left Side - Academy Interface */}
              <div className="space-y-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-aquamarine-blue-200 hover:ring-blue-health-300 transition-all duration-300 group">
                  <Image
                    src="/hipopower-academy.png"
                    alt="Hipopower Academy Platform"
                    width={800}
                    height={600}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aquamarine-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Right Side - Features */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-aquamarine-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-aquamarine-blue-400 to-aquamarine-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">▶</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        Biblioteca de Videos
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Accede a la rutina completa grabada durante tu taller
                        presencial y revive las 8 clases online cuando quieras.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-health-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-health-400 to-blue-health-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">📊</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        Seguimiento de Progreso
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Registra tus mediciones de cintura, peso y otras
                        métricas. Visualiza tu evolución con gráficos
                        detallados.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-aquamarine-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-aquamarine-blue-400 to-blue-health-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold">⏰</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        A Tu Ritmo, Donde Quieras
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Entrena en cualquier momento y lugar. Pausa, repite y
                        perfecciona cada ejercicio a tu propio ritmo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Tracking Showcase */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Mide tu{" "}
                    <span className="text-aquamarine-blue-600">
                      Transformación
                    </span>
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="text-aquamarine-blue-500 font-bold text-xl">
                        +
                      </span>
                      <p className="text-gray-700">
                        Gráficos de progreso en tiempo real
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-aquamarine-blue-500 font-bold text-xl">
                        +
                      </span>
                      <p className="text-gray-700">
                        Registro de medidas: cintura, cadera, peso y más
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-aquamarine-blue-500 font-bold text-xl">
                        +
                      </span>
                      <p className="text-gray-700">
                        Historial completo de tus mediciones
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-aquamarine-blue-500 font-bold text-xl">
                        +
                      </span>
                      <p className="text-gray-700">
                        Indicadores de mejora y cambios porcentuales
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-aquamarine-blue-500 to-blue-health-500 text-white rounded-2xl p-6">
                    <p className="text-lg md:text-xl font-bold mb-2">
                      🎁 Acceso GRATIS por 2 meses
                    </p>
                    <p className="text-aquamarine-blue-50">
                      Incluido con tu inscripción al taller presencial
                    </p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-health-200">
                  <Image
                    src="/hipopower-mediciones.png"
                    alt="Seguimiento de Mediciones"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Obtén acceso inmediato al inscribirte en el taller
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tu código de acceso a Hipopower Academy se activará
                automáticamente después de completar tu taller presencial
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Experience Section - Purple Background */}
      <RevealWrapper>
        <section className="bg-purple-secondary-50 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-8 text-center">
              <span className="inline-block w-3 h-3 bg-purple-secondary-500 rounded-full mr-3"></span>
              Vive la experiencia Hipopower
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-base md:text-lg leading-relaxed">
                De la mano de{" "}
                <span className="font-semibold">Cristal Sarabia</span>,
                fisioterapeuta experta en piso pélvico, con más de 6 años de
                experiencia clínica y certificaciones internacionales en España
                y Brasil, te invitamos a transformar tu salud desde dentro.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Este programa combina un{" "}
                <span className="font-semibold">
                  taller presencial de 3 horas
                </span>{" "}
                con{" "}
                <span className="font-semibold">8 clases online en vivo</span>{" "}
                para seguir entrenando desde casa, resolviendo dudas y
                fortaleciendo tu práctica semana a semana.
              </p>
              <div className="pt-6 space-y-3">
                <p className="text-base md:text-lg flex items-start gap-2">
                  <span className="text-purple-secondary-500 font-bold text-xl">
                    ●
                  </span>
                  <span>
                    <span className="font-semibold">Próxima fecha:</span>{" "}
                    {process.env.NEXT_PUBLIC_HIPOPOWER_DATE || "Por confirmar"}
                  </span>
                </p>
                <p className="text-base md:text-lg flex items-start gap-2">
                  <span className="text-purple-secondary-500 font-bold text-xl">
                    ●
                  </span>
                  <span>
                    <span className="font-semibold">Ubicación:</span> Torres
                    Médicas Angelópolis II, Puebla
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <RevealWrapper>
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-12 text-center">
            Preguntas frecuentes
          </h2>
        </RevealWrapper>

        <div className="space-y-4">
          {/* Accordion 1 - Qué incluye */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 1}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(1)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 1
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                ¿Qué incluye?
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold text-lg flex-shrink-0">
                      +
                    </span>
                    <span>Taller presencial de 3 horas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold text-lg flex-shrink-0">
                      +
                    </span>
                    <span>
                      8 clases online en vivo (25 min) – miércoles 9:00 p. m.,
                      durante 8 semanas
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold text-lg flex-shrink-0">
                      +
                    </span>
                    <span>E-book + material impreso</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold text-lg flex-shrink-0">
                      +
                    </span>
                    <span>Bolsa HIPOPOWER exclusiva</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold text-lg flex-shrink-0">
                      +
                    </span>
                    <span>Acceso a charlas abdominopélvicas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold text-lg flex-shrink-0">
                      +
                    </span>
                    <span>Comunidad HIPOWER para soporte continuo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold text-lg flex-shrink-0">
                      +
                    </span>
                    <span>Seguimiento personalizado post-taller</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-aquamarine-blue-500 font-bold text-lg flex-shrink-0">
                      +
                    </span>
                    <span>
                      Acceso a Hipopower Academy por 2 meses (plataforma digital
                      con videos y seguimiento)
                    </span>
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>

          {/* Accordion 2 - Experiencia previa */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 2}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(2)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 2
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                ¿Necesito tener experiencia previa?
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <p className="mb-4">
                  No necesitas experiencia, solo apertura para aprender un
                  sistema de entrenamiento que está revolucionando la salud
                  abdominopélvica.
                </p>
                <p>
                  Este programa es para mayores de 18 años, y aunque el enfoque
                  es femenino, todas las personas son bienvenidas.
                </p>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>

          {/* Accordion 3 - Métodos de pago */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 3}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(3)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 3
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                Métodos de pago
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <p className="mb-4">Puedes pagar con:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold">
                      •
                    </span>
                    <span>Tarjeta de crédito</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold">
                      •
                    </span>
                    <span>Tarjeta de débito</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold">
                      •
                    </span>
                    <span>Transferencia bancaria</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-secondary-500 font-bold">
                      •
                    </span>
                    <span>Efectivo</span>
                  </li>
                </ul>
                <p className="font-semibold mb-4 text-fuchsia-pink-600">
                  → Reserva tu lugar con solo $500 MXN
                </p>
                <p>
                  <span className="text-purple-secondary-500 font-bold">•</span>{" "}
                  Escríbenos a{" "}
                  <a
                    href="mailto:info@cristalsarabia.com"
                    className="text-purple-secondary-500 hover:underline"
                  >
                    info@cristalsarabia.com
                  </a>{" "}
                  o por{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quiero%20información%20sobre%20HIPOPOWER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-secondary-500 hover:underline"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>

          {/* Accordion 4 - Itinerario */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 4}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(4)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 4
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                Itinerario del taller
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Domingo (clase presencial):
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-secondary-500 font-bold">
                          →
                        </span>
                        <span>Registro: 9:15 a. m.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-secondary-500 font-bold">
                          →
                        </span>
                        <span>Clase: 9:30 a. m. a 12:30 p. m.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Clases online en vivo:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-secondary-500 font-bold">
                          →
                        </span>
                        <span>Miércoles a las 9:00 p. m.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-secondary-500 font-bold">
                          →
                        </span>
                        <span>Duración: 25 minutos (durante 8 semanas)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>

          {/* Accordion 5 - Términos y condiciones */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 5}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(5)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 5
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                Términos y condiciones
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 font-bold">→</span>
                    <span>No hay devoluciones del monto pagado.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 font-bold">→</span>
                    <span>
                      Tampoco se realizan cambios de fecha, reembolsos, ni
                      intercambios por otros servicios/productos en caso de
                      cancelación por parte del cliente.
                    </span>
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>
        </div>
      </section>

      {/* CTA Section with Purple Background */}
      <RevealWrapper>
        <section className="bg-purple-secondary-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-8">
              ¿Lista para transformar tu salud abdominopélvica?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Aprende hipopresivos de forma segura y efectiva, mejora tu
              postura, fortalece tu core y reconecta con tu cuerpo desde el
              centro. Un taller diseñado para mujeres que buscan resultados
              reales.
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quiero%20inscribirme%20a%20HIPOPOWER"
              target="_blank"
              className="inline-block bg-purple-secondary-500 hover:bg-purple-secondary-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              INSCRÍBETE AHORA
            </Link>
          </div>
        </section>
      </RevealWrapper>

      {/* Group Photo Footer Section */}
      <RevealWrapper>
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/hipopower-group.jpg"
              alt="Grupo Hipopower"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-fuchsia-pink-900/70 via-transparent to-transparent">
              <Image
                src="/hipopower-logo.png"
                alt="Hipopower Logo"
                width={400}
                height={160}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Final Footer */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <RevealWrapper>
            <div className="flex justify-center mb-6">
              <Image
                src="/hipopower-logo.png"
                alt="Hipopower Logo"
                width={200}
                height={80}
                className="h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 mb-6">Por Cristal Sarabia</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/FisioPelvicaCristalSarabia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-secondary-500 transition-opacity hover:opacity-100 opacity-80"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cristalsarabia_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-fuchsia-pink-500 transition-opacity hover:opacity-100 opacity-80"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quiero%20inscribirme%20a%20HIPOPOWER"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-aquamarine-blue-500 transition-opacity hover:opacity-100 opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                  />
                </svg>
              </a>
            </div>
          </RevealWrapper>
        </div>
      </footer>
    </div>
  );
}
