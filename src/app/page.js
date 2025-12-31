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
      
      {/* Quiz - Sección destacada */}
      <section className="w-full py-12 bg-gradient-to-br from-purple-secondary-600 to-purple-secondary-800 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-2 border-white/10" />
        <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full border-2 border-white/10" />
        <div className="absolute right-1/4 bottom-10 w-20 h-20 rounded-full border-2 border-white/5" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <p className="text-fuchsia-pink-300 font-medium tracking-wide uppercase text-xs mb-2">
              Cuestionario de salud
            </p>
            <h2 className="text-2xl md:text-3xl text-white font-bold leading-tight mb-3">
              ¿Necesitas fisioterapia pélvica?
            </h2>
            <p className="text-purple-secondary-200 max-w-xl mx-auto">
              Responde algunas preguntas para conocer si podrías beneficiarte de un tratamiento especializado.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <QuizLayout />
          </div>
        </div>
      </section>
      
      {/* Programas - Banner compacto */}
      <section className="w-full py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link href='/programas' className="block group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-purple-secondary-50 rounded-2xl hover:bg-purple-secondary-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AcademicCapIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Fórmate conmigo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Talleres de hipopresivos, preparación al parto y más
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-purple-secondary-600 font-semibold group-hover:gap-3 transition-all whitespace-nowrap">
                Ver programas
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
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
