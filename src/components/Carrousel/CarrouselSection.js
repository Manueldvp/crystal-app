'use client'
import Link from "next/link"
import { CarouselComponent } from "./CarouselComponent"
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";

const CarrouselSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealWrapper>
            <div>
              <p className="text-fuchsia-pink-600 font-semibold uppercase text-sm mb-3">
                Rompiendo el silencio
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                La salud pélvica sigue siendo un tema silenciado
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Existe gran desconocimiento sobre las condiciones que afectan a hombres y mujeres.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Es necesario <strong className="text-fuchsia-pink-600">romper el tabú</strong> y generar un diálogo abierto sobre la salud pélvica. Solo así se podrá brindar la información y atención médica necesaria.
              </p>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 bg-purple-secondary-600 hover:bg-purple-secondary-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Ver servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </RevealWrapper>
          <RevealWrapper>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <CarouselComponent />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default CarrouselSection
