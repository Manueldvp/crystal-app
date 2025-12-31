import './globals.css'
import Hub from "@/components/Hub/Hub";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import CoreRestoreCard from "@/components/CoreRetoreCard/CoreRestoreCard";
import {AccordionComponent} from "@/components/Accordion/Accordion";
import CarrouselSection from "@/components/Carrousel/CarrouselSection";
import Link from "next/link";
import BlogComponent from "@/components/Blog/BlogComponent";
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import Faq from '@/components/FAQ/Faq';
import QuizLayout from '@/components/Quiz/quiz';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';




export default function Home() {
  
  return (
    
    <main className="flex min-h-screen flex-col overflow-visible items-center justify-between">
      
      <Hub />
      <ServicesCard />
      <QuizLayout/>
      <section className="w-full px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Link href='/programas'>
            <div className="relative overflow-hidden p-8 md:p-12 text-center hover:cursor-pointer bg-purple-secondary-700 rounded-2xl shadow-xl transition-all hover:shadow-2xl hover:scale-[1.01]">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-2 border-white/10" />
              <div className="absolute -left-5 -bottom-5 w-24 h-24 rounded-full border-2 border-white/10" />
              <div className="relative z-10">
                <p className="text-fuchsia-pink-200 font-medium tracking-wide uppercase text-xs mb-3">
                  Talleres y Programas
                </p>
                <h4 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Puedes formarte conmigo
                </h4>
                <p className="mb-6 text-purple-secondary-100 sm:text-lg max-w-2xl mx-auto">
                  Consulta nuestros próximos talleres y eventos. Para más información sobre talleres públicos o profesionales, contáctanos.
                </p>
                <span className="inline-flex items-center gap-2 bg-white text-purple-secondary-700 font-semibold px-6 py-3 rounded-full">
                  Ver programas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      
      <CoreRestoreCard/> 
      <AccordionComponent />
     
      <div className="xl:w-2/3 lg:w-full sm:w-full  flex justify-center  mt-10">
        <BlogComponent/>   
      </div>
      <section className="p-4 xl:w-2/3 lg:w-full sm:w-full mt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Qué dicen de nosotros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce a través de nuestros pacientes el resultado del acompañamiento en su tratamiento
          </p>
        </div>
        <Link 
          href='https://www.google.com/maps/place/Fisioterapeuta+de+Piso+P%C3%A9lvico,+Pelvic+Health+Physical+Therapy,+Cristal+Sarabia./@19.0201926,-98.2676374,17z/data=!3m1!4b1!4m12!1m5!8m4!1e1!2s100161799802564451464!3m1!1e1!3m5!1s0x85cfb9542853d8e1:0x6c784f3cf11af1dd!8m2!3d19.0201875!4d-98.2650625!16s%2Fg%2F11s2m_3z_9?hl=es&entry=ttu' 
          target='_blank'
          className="flex items-center justify-center gap-3 text-fuchsia-pink-600 hover:text-fuchsia-pink-700 font-semibold transition-colors"
        >
          Ver todas las reseñas en Google
          <ArrowTopRightOnSquareIcon width={18} height={18}/>
        </Link>
      </section>
      <TestimonialCard/>
      
      <CarrouselSection/>
      <Faq/>
    </main>
  );
}
