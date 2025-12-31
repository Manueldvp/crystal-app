import './globals.css'
import Hub from "@/components/Hub/Hub";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import {AccordionComponent} from "@/components/Accordion/Accordion";
import CarrouselSection from "@/components/Carrousel/CarrouselSection";
import Link from "next/link";
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import Faq from '@/components/FAQ/Faq';
import QuizLayout from '@/components/Quiz/quiz';
import { ArrowTopRightOnSquareIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-visible items-center justify-between">
      <Hub />
      <ServicesCard />
      
      {/* Quiz y Programas en una sola sección */}
      <section className="w-full bg-purple-secondary-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Quiz */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <p className="text-fuchsia-pink-600 font-medium tracking-wide uppercase text-xs mb-2">
                Cuestionario de salud
              </p>
              <h2 className="text-xl md:text-2xl text-gray-800 font-bold leading-tight mb-3">
                ¿Necesitas fisioterapia pélvica?
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Responde algunas preguntas para conocer si podrías beneficiarte de un tratamiento especializado.
              </p>
              <QuizLayout />
            </div>
            
            {/* Programas */}
            <Link href='/programas' className="block group">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-secondary-100 rounded-xl flex items-center justify-center">
                    <AcademicCapIcon className="w-6 h-6 text-purple-secondary-600" />
                  </div>
                  <div>
                    <p className="text-purple-secondary-600 font-medium tracking-wide uppercase text-xs">
                      Talleres y Programas
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      Fórmate conmigo
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">
                  Consulta nuestros próximos talleres y eventos de fisioterapia pélvica, hipopresivos y preparación al parto.
                </p>
                <div className="flex items-center gap-2 text-purple-secondary-600 font-semibold group-hover:gap-3 transition-all">
                  Ver programas disponibles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <AccordionComponent />
      
      {/* Testimonios */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Qué dicen de nosotros
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Conoce a través de nuestros pacientes el resultado del acompañamiento en su tratamiento
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <Link 
              href='https://www.google.com/maps/place/Fisioterapeuta+de+Piso+P%C3%A9lvico,+Pelvic+Health+Physical+Therapy,+Cristal+Sarabia./@19.0201926,-98.2676374,17z/data=!3m1!4b1!4m12!1m5!8m4!1e1!2s100161799802564451464!3m1!1e1!3m5!1s0x85cfb9542853d8e1:0x6c784f3cf11af1dd!8m2!3d19.0201875!4d-98.2650625!16s%2Fg%2F11s2m_3z_9?hl=es&entry=ttu' 
              target='_blank'
              className="inline-flex items-center gap-2 text-fuchsia-pink-600 hover:text-fuchsia-pink-700 font-medium text-sm transition-colors"
            >
              Ver todas las reseñas en Google
              <ArrowTopRightOnSquareIcon width={16} height={16}/>
            </Link>
          </div>
        </div>
      </section>
      <TestimonialCard/>
      
      <CarrouselSection/>
      <Faq/>
    </main>
  );
}
