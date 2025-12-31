import './globals.css'
import Hub from "@/components/Hub/Hub";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import {AccordionComponent} from "@/components/Accordion/Accordion";
import CarrouselSection from "@/components/Carrousel/CarrouselSection";
import Link from "next/link";
import Image from "next/image";
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import Faq from '@/components/FAQ/Faq';
import { RevealWrapper } from '@/components/RevealWrapper/RevealWrapper';
import { 
  ArrowTopRightOnSquareIcon, 
  AcademicCapIcon,
  UserGroupIcon,
  HeartIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const FEATURES = [
  {
    icon: ShieldCheckIcon,
    title: "Atención especializada",
    description: "Más de 5 años de experiencia en salud pélvica"
  },
  {
    icon: HeartIcon,
    title: "Enfoque integral",
    description: "Tratamiento personalizado para cada paciente"
  },
  {
    icon: UserGroupIcon,
    title: "Consulta presencial y online",
    description: "Flexibilidad para tu comodidad"
  },
  {
    icon: SparklesIcon,
    title: "Resultados comprobados",
    description: "Cientos de pacientes satisfechas"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-visible">
      <Hub />
      
      {/* Features */}
      <section className="w-full py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <RevealWrapper key={index}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-fuchsia-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-fuchsia-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    {feature.description}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <ServicesCard />
      
      {/* Estadística destacada - Estilo impactante */}
      <section className="w-full py-20 bg-gradient-to-br from-fuchsia-pink-100 via-fuchsia-pink-50 to-purple-secondary-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealWrapper>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-fuchsia-pink-300 rounded-3xl" />
                <Image
                  src="/99.png"
                  alt="Salud pélvica"
                  width={500}
                  height={600}
                  className="relative rounded-3xl w-full h-auto object-cover"
                />
              </div>
            </RevealWrapper>
            <RevealWrapper>
              <div>
                <div className="inline-block bg-fuchsia-pink-200 text-fuchsia-pink-800 font-semibold px-4 py-2 rounded-full text-sm mb-6">
                  ¿Sabías que...?
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  1 de cada 3 mujeres sufre problemas de piso pélvico
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Incontinencia, dolor, molestias... <strong className="text-fuchsia-pink-600">No son normales.</strong>
                </p>
                <p className="text-gray-600 text-lg mb-8">
                  La fisioterapia pélvica puede ayudarte a recuperar tu calidad de vida. No esperes más.
                </p>
                <Link 
                  href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20más%20información"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full transition-all hover:scale-105"
                >
                  Agenda tu consulta
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
      
      {/* Quiz CTA */}
      <section className="w-full py-24 bg-fuchsia-pink-50 relative overflow-hidden">
        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path className="fill-fuchsia-pink-200/60" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            <path className="fill-fuchsia-pink-300/70" d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            <path className="fill-fuchsia-pink-400/50" d="M0,288L48,282.7C96,277,192,267,288,261.3C384,256,480,256,576,266.7C672,277,768,299,864,293.3C960,288,1056,256,1152,245.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Necesitas fisioterapia pélvica?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              Responde algunas preguntas sobre tus síntomas para saber cómo puedo ayudarte.
            </p>
            <p className="text-gray-600 mb-8">
              Solo toma unos minutos.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold py-4 px-10 rounded-lg transition-all hover:scale-105"
            >
              Comenzar cuestionario
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </RevealWrapper>
        </div>
      </section>
      
      {/* Programas - Banner */}
      <section className="w-full py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <Link href='/programas' className="block group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-purple-secondary-50 to-fuchsia-pink-50 rounded-2xl hover:shadow-lg transition-shadow">
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
      <section className="w-full py-16 bg-purple-secondary-50">
        <div className="max-w-6xl mx-auto px-4">
          <RevealWrapper>
            <div className="text-center mb-10">
              <p className="text-fuchsia-pink-600 font-semibold uppercase text-sm mb-2">Testimonios</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Historias reales de pacientes
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Conoce la experiencia de quienes ya han recorrido este camino hacia su bienestar
              </p>
      </div>
          </RevealWrapper>
          <TestimonialCard />
          <div className="flex justify-center mt-8">
            <Link 
              href='https://www.google.com/maps/place/Fisioterapeuta+de+Piso+P%C3%A9lvico,+Pelvic+Health+Physical+Therapy,+Cristal+Sarabia./@19.0201926,-98.2676374,17z/data=!3m1!4b1!4m12!1m5!8m4!1e1!2s100161799802564451464!3m1!1e1!3m5!1s0x85cfb9542853d8e1:0x6c784f3cf11af1dd!8m2!3d19.0201875!4d-98.2650625!16s%2Fg%2F11s2m_3z_9?hl=es&entry=ttu' 
              target='_blank'
              className="inline-flex items-center gap-2 bg-white text-purple-secondary-700 font-semibold py-3 px-6 rounded-full border border-purple-secondary-200 hover:bg-purple-secondary-50 transition-colors"
            >
              Ver todas las reseñas en Google
              <ArrowTopRightOnSquareIcon width={18} height={18}/>
        </Link>
      </div>
        </div>
      </section>
      
      <CarrouselSection/>
      <Faq/>
    </main>
  );
}
