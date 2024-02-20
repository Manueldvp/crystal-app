import './globals.css'
import Hub from "@/components/Hub/Hub";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import CoreRestoreCard from "@/components/CoreRetoreCard/CoreRestoreCard";
import {AccordionComponent} from "@/components/Accordion/Accordion";
import Galeria from "@/components/Galeria/Galeria";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import CarrouselSection from "@/components/Carrousel/CarrouselSection";
import Link from "next/link";
import BlogComponent from "@/components/Blog/BlogComponent";



export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col overflow-visible items-center justify-between">
      <Hub />
      <ServicesCard />
      <Link className="lg:w-2/3 sm:w-full p-4" href='/eventos'>
        <div className=" mb-10 p-4 text-center hover:cursor-pointer hover:bg-gray-100 bg-white   rounded-lg shadow-lg sm:p-8 ">
          <h4 className="mb-5 text-3xl  font-bold text-gray-900 ">
            PUEDES FORMARTE CONMIGO
          </h4>
          <p className="mb-5 text-base text-gray-500 sm:text-lg ">
            ¿Eres profesional de la fisioterapia y quieres fomarte para
            transformar la vida de tus pacientes? La combinación entre docencia y
            práctica clínica me permite entender mucho mejor los mecanismos que
            hacen enfermar a los pacientes.
          </p>
        </div>
      </Link>
      <CoreRestoreCard /> 
      <AccordionComponent />
      <Galeria />
     
      <div className="lg:w-2/3 sm:w-full  flex justify-center  mt-10">
        <BlogComponent/>   
      </div>
      <section className="p-4 lg:w-2/3 sm:w-full mt-10">
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
      <TestimonialCard />
      <CarrouselSection/>
      
    </main>
  );
}
