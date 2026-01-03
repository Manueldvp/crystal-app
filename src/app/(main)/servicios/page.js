"use client";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";
import { StarIcon } from "@heroicons/react/24/solid";

const SERVICIOS = [
  {
    titulo: "Dolor en Endometriosis y Adenomiosis",
    descripcion: "Abordaje especializado desde la fisioterapia pélvica para el manejo del dolor, la función y la recuperación corporal. Tu dolor es real, tu experiencia es válida.",
    imagen: "/images/endometriosis/main.png",
    slug: "endometriosis-adenomiosis",
    destacado: true,
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    titulo: "Embarazo y Preparación al Parto",
    descripcion: "Durante el embarazo, el cuerpo experimenta cambios importantes a nivel musculoesquelético, hormonal y postural. El acompañamiento fisioterapéutico busca preparar al cuerpo para el parto, mejorar la movilidad, favorecer la conciencia corporal y prevenir disfunciones del piso pélvico.",
    imagen: "/images/servicios/embarazo.jpg",
    slug: "embarazo-y-preparacion-al-parto",
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    titulo: "Postparto y Recuperación",
    descripcion: "El postparto es una etapa de grandes cambios físicos y emocionales. La fisioterapia pélvica acompaña la recuperación del piso pélvico, la faja abdominal, cicatrices y el retorno progresivo a la actividad física, respetando los tiempos del cuerpo.",
    imagen: "/images/servicios/postparto.png",
    slug: "postparto",
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: "Disfunciones Pélvicas en el Adulto",
    descripcion: "Abordaje integral de incontinencia urinaria, incontinencia fecal, prolapsos de órganos pélvicos, disfunción sexual y disfunciones coloproctológicas. Cada tratamiento se adapta al diagnóstico, síntomas y objetivos del paciente.",
    imagen: "/images/endometriosis/main.png",
    slug: "disfunciones-pelvicas-en-el-adulto",
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    lista: [
      "Incontinencia urinaria",
      "Incontinencia fecal",
      "Prolapsos de órganos pélvicos",
      "Disfunción sexual",
      "Disfunciones coloproctológicas",
    ],
  },
  {
    titulo: "Rehabilitación de Diástasis Abdominal",
    descripcion: "La evaluación y tratamiento de la faja abdominal es fundamental para la estabilidad, el movimiento y la salud pélvica. El abordaje integra ejercicio terapéutico, respiración y control motor.",
    imagen: "/images/servicios/diastasis.png",
    slug: "rehabilitacion-de-diastasis-abdominal",
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    titulo: "Disfunción Sexual",
    descripcion: "La fisioterapia en sexualidad funcional aborda las disfunciones que afectan la vida sexual desde una perspectiva integral y basada en evidencia.",
    imagen: "/images/servicios/disfuncion.png",
    slug: "disfuncion-sexual",
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    titulo: "Disfunciones Pélvicas en la Infancia",
    descripcion: "Las disfunciones del suelo pélvico también pueden presentarse en niños y niñas, afectando su calidad de vida y desarrollo. El abordaje es adaptado a la edad.",
    imagen: "/43.png",
    slug: "disfunciones-pelvicas-en-la-infancia",
    icono: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Servicios = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/vid12.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-purple-secondary-900/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <RevealWrapper>
            <div className="max-w-3xl">
              <p className="text-fuchsia-pink-400 font-semibold tracking-widest uppercase text-sm mb-4">
                Fisioterapia Pélvica Especializada
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Servicios
              </h1>
              <div className="w-20 h-1 bg-fuchsia-pink-500 mb-6" />
              <p className="text-lg md:text-xl text-purple-secondary-100 leading-relaxed">
                La fisioterapia pélvica es una especialidad que aborda disfunciones que afectan funciones esenciales como la continencia urinaria y fecal, la sexualidad, el movimiento y la calidad de vida.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-purple-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Todos los servicios inician con una <strong className="text-purple-secondary-700">valoración integral</strong>, que incluye entrevista clínica, exploración física y definición de objetivos terapéuticos.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICIOS.map((servicio, index) => (
              <RevealWrapper key={index}>
                {servicio.destacado ? (
                  /* Servicio Destacado */
                  <div className="bg-gradient-to-r from-purple-secondary-700 to-purple-secondary-800 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={servicio.imagen}
                          alt={servicio.titulo}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <span className="inline-flex items-center gap-1 bg-fuchsia-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                          <StarIcon className="w-3 h-3" />
                          Servicio especializado
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {servicio.titulo}
                        </h2>
                        <p className="text-purple-secondary-100 leading-relaxed mb-6 text-lg">
                          {servicio.descripcion}
                        </p>
                        <Link 
                          href={`/servicios/${servicio.slug}`}
                          className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-secondary-700 font-semibold px-6 py-3 rounded-full transition-colors w-fit"
                        >
                          Conocer más sobre este servicio
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Servicio Normal */
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Imagen */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                        <Image
                          src={servicio.imagen}
                          alt={servicio.titulo}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-purple-secondary-100 rounded-xl flex items-center justify-center text-purple-secondary-600">
                          {servicio.icono}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                          {servicio.titulo}
                        </h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {servicio.descripcion}
                      </p>
                      
                      {servicio.lista && (
                        <ul className="space-y-2 mb-6">
                          {servicio.lista.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <span className="w-2 h-2 bg-fuchsia-pink-500 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      <Link 
                        href={`/servicios/${servicio.slug}`}
                        className="inline-flex items-center gap-2 text-fuchsia-pink-600 hover:text-fuchsia-pink-700 font-semibold transition-colors"
                      >
                        Más información
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="py-14 bg-purple-secondary-700 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute left-10 top-10 w-20 h-20 rounded-full border-2 border-white/15" />
        <div className="absolute right-20 bottom-10 w-32 h-32 rounded-full border-2 border-white/15" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-fuchsia-pink-200 font-medium tracking-wide uppercase text-xs mb-3">
                Filosofía de atención
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Un enfoque centrado en la persona
              </h2>
              <p className="text-purple-secondary-100 leading-relaxed">
                El objetivo no es solo aliviar síntomas, sino mejorar la <strong className="text-white">calidad de vida</strong>, la <strong className="text-white">funcionalidad</strong> y la <strong className="text-white">relación con el propio cuerpo</strong>.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="bg-gradient-to-r from-purple-secondary-50 to-fuchsia-pink-50 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                ¿Lista para comenzar tu tratamiento?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Agenda tu valoración inicial y comienza tu camino hacia una mejor calidad de vida.
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Agendar cita por WhatsApp
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
        </RevealWrapper>
      </div>
      </section>
    </main>
  );
};

export default Servicios;
