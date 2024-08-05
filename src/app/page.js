import './globals.css'
import Hub from "@/components/Hub/Hub";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import CoreRestoreCard from "@/components/CoreRetoreCard/CoreRestoreCard";
import {AccordionComponent} from "@/components/Accordion/Accordion";
import Galeria from "@/components/Galeria/Galeria";
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
      <Link id='programas'  className="xl:w-2/3 lg:w-full sm:w-full p-4" href='/programas'>
        <div className=" mb-10 p-4 text-center hover:cursor-pointer hover:bg-gray-100 bg-white   rounded-lg shadow-lg sm:p-8 ">
          <h4 className="mb-5 text-3xl  font-bold text-gray-900 ">
            PUEDES FORMARTE CONMIGO
          </h4>
          <h4 className="mb-5 text-base text-gray-500 sm:text-lg ">
           Conforme a la mesa directiva de La Sociedad Mexicana 
           de Fisioterapia en Piso Pélvico <strong>SOMEFIPP</strong>, 
           brinda desarrollo profesional en este campo, 
           su misión es promover la salud pélvica a través 
           de la investigación, la educación y la práctica 
           de la fisioterapia.
          </h4>
        </div>
      </Link>
      
      <CoreRestoreCard/> 
      <AccordionComponent />
      <Galeria />
     
      <div className="xl:w-2/3 lg:w-full sm:w-full  flex justify-center  mt-10">
        <BlogComponent/>   
      </div>
      <section className="p-4  xl:w-2/3 lg:w-full sm:w-full mt-10">
      <div  className="p-4 hover:bg-purple-200 cursor-pointer text-center text-gray-700  hover:text-white bg-white border border-gray-200 rounded-lg shadow-lg ">
        <Link href='https://www.google.com/maps/place/Fisioterapeuta+de+Piso+P%C3%A9lvico,+Pelvic+Health+Physical+Therapy,+Cristal+Sarabia./@19.0201926,-98.2676374,17z/data=!3m1!4b1!4m12!1m5!8m4!1e1!2s100161799802564451464!3m1!1e1!3m5!1s0x85cfb9542853d8e1:0x6c784f3cf11af1dd!8m2!3d19.0201875!4d-98.2650625!16s%2Fg%2F11s2m_3z_9?hl=es&entry=ttu' target='blank' >
        <h5 className="mb-2 flex items-center justify-center gap-4 text-3xl  font-bold  ">
          Qué dicen de nosotros
          <ArrowTopRightOnSquareIcon width={20} height={20}/>
        </h5>
        <p className="mb-5 text-base  sm:text-lg ">
          Conoce a través de nuestros pacientes el resultado de un
          acompañamiento de nuestro tratamiento
          
        </p>
        </Link>
      </div>
      
      </section>
      <TestimonialCard/>
      
      <CarrouselSection/>
      <Faq/>
    </main>
  );
}
