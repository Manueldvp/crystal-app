import Image from "next/image";
import Hub from "@/components/Hub/Hub";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import CoreRestoreCard from "@/components/CoreRetoreCard/CoreRestoreCard";
import Accordion from "@/components/Accordion/Accordion";
import Galeria from "@/components/Galeria/Galeria";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import CarrouselSection from "@/components/Carrousel/CarrouselSection";
import { BlogCard } from "@/components/Card/BlogCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-visible items-center justify-between">
      <Hub />
      <ServicesCard />
      <div className="w-2/3 mb-10 p-4 text-center hover:cursor-pointer hover:bg-gray-100 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 ">
        <h5 className="mb-5 text-3xl  font-bold text-gray-900 ">
          PUEDES FORMARTE CONMIGO
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg ">
          ¿Eres profesional de la fisioterapia y quieres fomarte para
          transformar la vida de tus pacientes? La combinación entre docencia y
          práctica clínica me permite entender mucho mejor los mecanismos que
          hacen enfermar a los pacientes.
        </p>
      </div>
      <CoreRestoreCard />
      <Accordion />
      <Galeria />
      <div className="w-2/3 gap-4 flex mt-10">
        <div >
          <BlogCard/>
          <BlogCard/>
        </div>
        <div >
          <BlogCard/>
          <BlogCard/>
        </div>
      </div>
      <div className="w-2/3 mt-10 p-4 text-center bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 ">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 ">
          Qué dicen de nosotros
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg ">
          Conoce a través de nuestros pacientes el resultado de un
          acompañamiento de nuestro tratamiento
        </p>
      </div>

      <TestimonialCard />
      <CarrouselSection/>
      
    </main>
  );
}
