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




export default function Home() {
  
  return (
    
    <main className="flex min-h-screen flex-col overflow-visible items-center justify-between">
      
      <Hub />
      <ServicesCard />
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
      <section className="p-4 xl:w-2/3 lg:w-full sm:w-full mt-10">
      <div className=" p-4 text-center bg-white border border-gray-200 rounded-lg shadow-lg ">
        <h5 className="mb-2 text-3xl font-bold text-gray-800 ">
          Qué dicen de nosotros
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg ">
          Conoce a través de nuestros pacientes el resultado de un
          acompañamiento de nuestro tratamiento
          
        </p>
        
      </div>
      </section>
      
      {/* <TestimonialCard/> */}
      <CarrouselSection/>
      <Faq/>
    </main>
  );
}
