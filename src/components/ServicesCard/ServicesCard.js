"use client";
import Link from "next/link";
import Image from "next/image";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";
import { StarIcon } from "@heroicons/react/24/solid";

const SERVICIOS = [
  {
    titulo: "Dolor Pélvico y Endometriosis",
    descripcion: "Abordaje especializado para dolor crónico",
    imagen: "/images/endometriosis/main.png",
    link: "/servicios/endometriosis-adenomiosis",
    destacado: true
  },
  {
    titulo: "Embarazo",
    descripcion: "Preparación al parto y acompañamiento",
    imagen: "/bg-2.png",
    link: "/servicios/embarazo-y-preparacion-al-parto"
  },
  {
    titulo: "Postparto",
    descripcion: "Recuperación y rehabilitación",
    imagen: "/bg-3.png",
    link: "/servicios/postparto"
  },
  {
    titulo: "Disfunciones Pélvicas",
    descripcion: "Incontinencia, prolapsos y más",
    imagen: "/278.png",
    link: "/servicios/disfunciones-pelvicas-en-el-adulto"
  },
  {
    titulo: "Diástasis Abdominal",
    descripcion: "Rehabilitación de la faja abdominal",
    imagen: "/99.png",
    link: "/servicios/rehabilitacion-de-diastasis-abdominal"
  },
  {
    titulo: "Disfunción Sexual",
    descripcion: "Dolor, vaginismo y dispareunia",
    imagen: "/13.jpg",
    link: "/servicios/disfuncion-sexual"
  }
];

const ServicesCard = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <RevealWrapper>
          <div className="text-center mb-12">
            <p className="text-fuchsia-pink-600 font-semibold uppercase text-sm mb-3">
              Servicios especializados
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ¿En qué puedo ayudarte?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Atención fisioterapéutica especializada para cada etapa de tu vida
            </p>
          </div>
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((servicio, index) => (
            <RevealWrapper key={index}>
              <Link href={servicio.link} className="group block">
                <div className={`relative rounded-2xl overflow-hidden ${servicio.destacado ? 'ring-2 ring-fuchsia-pink-400' : ''}`}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {servicio.destacado && (
                      <span className="absolute top-4 left-4 bg-fuchsia-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                        <StarIcon className="w-3 h-3" />
                        Especializado
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-fuchsia-pink-200 transition-colors">
                      {servicio.titulo}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper>
          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-fuchsia-pink-600 hover:text-fuchsia-pink-700 font-semibold transition-colors"
            >
              Ver todos los servicios
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default ServicesCard;
