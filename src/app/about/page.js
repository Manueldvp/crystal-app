'use client'
import Link from "next/link";
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import { AboutCardServices } from "@/components/Card/AboutCardServices";
import { SimpleCard } from "@/components/Card/SimpleCard";
import { Button } from "@material-tailwind/react";

const About = () => {
  const services = useFetch('/services?populate=*')
  const servicesData = services.data.data

  return (
      
      <section className="2xl:container justify-center 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="bg-center mb-20 rounded-xl  bg-no-repeat bg-[url('/29.jpg')] bg-gray-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            ¿Quién es Cristal Sarabia?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Fisioterapeuta Pélvica Especializada en Uroginecologia & Sexualidad
            Funcional.
          </p>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-start">
            <h2 className="text-3xl mb-5 text-center  mt-5 lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Acerca de mi
            </h2>
            <p className="font-normal text-justify  text-base leading-6 text-gray-600 ">
              Con más de 4 años de experiencia en Puebla, México.
              Me especializo en ayudar a las mujeres a mejorar 
              su salud pélvica en todas las etapas de su vida.
            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
              Estoy comprometida con proporcionar atención de alta calidad a mis pacientes.
              Creo que todas las mujeres merecen sentirse bien con su salud pélvica, 
              y estoy aquí para ayudarlas a
              lograrlo.
            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
             Me gradué de la Licenciatura en Fisioterapia en la 
             Benemérita Universidad Autónoma de Puebla en el año 2020. 
             Durante su carrera, realizó prácticas clínicas en la Clínica 
             Escuela Integral de Fisioterapia de la BUAP, el Hospital 
             Universitario de la BUAP y el Instituto Nacional de 
             Cancerología de Colombia.
            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
              En 2022, completé un Diplomado Internacional 
              en Fisioterapia del Suelo Pélvico en Andare 
              Certificaciones en la Ciudad de México. Posteriormente, 
              realicé en Brasil el Posgrado en Uroginecología y 
              Sexualidad Funcional en la Faculdade Inspirar.
            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
              Soy Trainer Certificada en Hipopresivos por Low 
              Pressure Fitness y Educadora Perinatal por LAMAZE.
            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
              Actualmente, soy miembro activo de la mesa directiva 
              de la Sociedad Mexicana de Fisioterapia de Piso Pélvico,  
              <strong><a href="https://www.somefipp.com/" target="_blank" rel="noopener noreferrer"> SOMEFIPP</a></strong>.

            </p>
          </div>
          <div className="w-full max-h-svh lg:w-8/12 ">
            <Image
              className="w-full rounded-lg shadow-lg h-full"
              height={1000}
              width={1000}
              src="/27.jpg"
              alt="A group of People"
            />
          </div>
        </div>


        <div className="flex lg:flex-row mt-10 flex-col justify-between gap-8 ">
          
          <div className="w-full lg:w-5/12  flex flex-col justify-center">
            {/* <h2 className="text-3xl mb-10 lg:text-4xl  font-bold 
            leading-9 text-gray-800 pb-4 text-center">Nuestra Identidad</h2> */}
            <h2 className="text-3xl lg:text-4xl mb-2 font-bold leading-9 text-gray-800 pb-4">
             Misión
            </h2> 
            <p className="font-normal text-justify mb-6 text-base leading-6 text-gray-600 ">
              Brindar atención integral de fisioterapia del 
              suelo pélvico a mujeres y hombres de todas las 
              edades, con el objetivo de mejorar su calidad de vida.
            </p>

            <h2 className="text-3xl lg:text-4xl mb-2 font-bold leading-9 text-gray-800 pb-4">
             Visión
            </h2>
            <p className="font-normal text-justify text-base leading-6 text-gray-600 ">
             Ser una clínica de referencia en fisioterapia del 
             suelo pélvico en Puebla, México, y ofrecer un 
             servicio de excelencia, basado en la evidencia
              científica y la ética profesional.
            </p>
            <h2 className="text-3xl text-justify mt-5 lg:text-4xl  font-bold leading-9 text-gray-800 pb-4">
            Valores
            </h2>
            <h3 className="font-normal text-base leading-6 text-gray-600 ">
            <p className="mt-2 text-justify"><strong>Profesionalismo:</strong> Compromiso con la excelencia en la atención al paciente.</p>


            <p className="mt-2 text-justify"><strong>Competencia:</strong> Conocimiento y habilidades actualizadas en fisioterapia del suelo pélvico.</p>


            <p className="mt-2 text-justify"><strong>Empatía:</strong> Escucha activa y comprensión de las necesidades del paciente.</p>


            <p className="mt-2 text-justify"><strong>Trabajo en equipo:</strong>  Colaboración con otros profesionales para ofrecer un servicio integral al paciente.</p>


            <p className="mt-2 text-justify"><strong>Investigación:</strong> Actualización constante en el conocimiento científico sobre fisioterapia del suelo pélvico.</p>
            
            </h3>
            <h2 className="text-3xl mt-10 lg:text-4xl mb-2 font-bold leading-9 text-gray-800 pb-4">
              ¡Despierta! Tu Salud Te Necesita
            </h2>
            <p className="font-normal text-justify text-base leading-6 text-gray-600 ">
              Es hora de hablar 
              sobre un tema que a menudo dejamos de lado: nuestra 
              salud. No, no te vayas aún. Esto es importante. ¿Sabías 
              que tu salud es tu mayor riqueza? Sin ella, todas las 
              otras cosas en la vida pierden su brillo.
              </p>
              <Link className="mt-10 flex justify-center items-center" href='/'>
               <Button className="bg-purple-secondary-600 w-2/3" >Contactame</Button>
              </Link>
          
          </div>
          <div className="w-full lg:w-8/12 flex-row items-center justify-center   lg:pt-6">
               <h2 className="text-3xl lg:text-4xl mb-2  font-bold leading-9 text-gray-800 pb-4 text-center">
                  Servicios
                </h2>
            <div className="grid mb-2 mt-2 md:grid-cols-2 sm:grid-cols-1 gap-6  rounded-md">
          
            {servicesData && servicesData.slice(0, 4).map((service, index) => (
             <AboutCardServices key={index} services={service} />
           ))}
            
              
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
