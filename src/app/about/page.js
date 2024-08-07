'use client'
import Link from "next/link";
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import { AboutCardServices } from "@/components/Card/AboutCardServices";
import { Button } from "@material-tailwind/react";
import { RevealWrapper  } from "next-reveal";

const About = () => {
  const services = useFetch('/services?populate=*')
  const servicesData = services.data.data

  return (
      
      <section className="2xl:container justify-center 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <RevealWrapper>
        <div className="bg-right mb-20 bg-contain rounded-xl  bg-no-repeat bg-[url('/111.png')] bg-gray-400 ">
        <div className="px-4 mx-auto max-w-screen-xl flex flex-col items-left py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight  text-white md:text-5xl lg:text-6xl">
            ¿Quién es Cristal Sarabia?
          </h1>
          <p className="text-lg text-pretty max-w-2xl text-center font-normal text-white lg:text-xl  ">
            Especialista en piso pélvico, dolor pélvico por endometriosis, embarazo, postparto, climaterio, menstruación y sexualidad funcional.
          </p>
        </div>
        </div>
        </RevealWrapper>
        <RevealWrapper>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
        
          <div className="w-full lg:w-5/12 flex flex-col justify-start">
            <h2 className="text-3xl mb-5 text-center  mt-5 lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Acerca de mi
            </h2>
            <p className="font-normal text-justify  text-base leading-6 text-gray-600 ">
            ¡Hola! <strong>Soy Cristal Sarabia </strong>y soy Fisioterapeuta por la Universidad Autónoma de Puebla y desde 2014 comencé a estudiar el mundo de la Fisioterapia para prevenir, desarrollar, mantener y restaurar el máximo movimiento y capacidades funcionales del cuerpo humano. Desde que salí de mi carrera me he especializado en Fisioterapia Pélvica, que es una especialidad de la fisioterapia que se centra en el tratamiento de las disfunciones del suelo pélvico. En mi trayectoria de especialización realice posgrado en Brasil en Fisioterapia pélvica, Uroginecología y Sexualidad Funcional. Además, estoy certificada en diversas áreas como salud pélvica, salud sexual, embarazo, postparto, hipopresivos, pilates terapéutico, ozonoterapia y acupuntura.
            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
            Soy ponente nacional e internacional y profesora en formaciones de Piso Pélvico. Fundé en Puebla el primer espacio dedicado exclusivamente a la Fisioterapia del Piso Pélvico, dolor pélvico y bienestar sexual. Ofrezco atención personalizada en consultas y talleres grupales sobre salud pélvica, sexual, embarazo, postparto y entrenamientos de hipopresivos.
            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
            He ayudado a cientos de mujeres a mejorar su bienestar y calidad de vida, con numerosos casos de éxito. Los testimonios de mis pacientes me inspiran a continuar educando, apoyando y guiando en tratamientos especializados.

            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
            ¡Estoy aquí para concientizar y no normalizar el dolor ni la incomodidad en el piso pélvico, sino tomar medidas para cuidar y tratar esta parte crucial de nuestro cuerpo!.

            </p>
            <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
            ¡Bienvenid@s a un espacio seguro de salud pélvica para adquirir conocimiento y en mis consultas, talleres y cursos mejorar tu bienestar para tu abdomen y  piso pélvico!

            </p>
            {/* <p className="mt-5 font-normal text-justify  text-base leading-6 text-gray-600">
              Actualmente, soy miembro activo de la mesa directiva 
              de la Sociedad Mexicana de Fisioterapia de Piso Pélvico,  
              <strong><a href="https://www.somefipp.com/" target="_blank" rel="noopener noreferrer"> SOMEFIPP</a></strong>.

            </p> */}
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
        </RevealWrapper>

        <div className="flex lg:flex-row mt-10 flex-col justify-between gap-8 ">
        <RevealWrapper className="w-full lg:w-5/12  flex flex-col justify-center">

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
              <Link className="mt-10 flex justify-center items-center" href='https://api.whatsapp.com/send?phone=5212223590967&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta'>
               <Button className="bg-purple-secondary-600 w-2/3" >Contactame</Button>
              </Link>
          </RevealWrapper>
          <RevealWrapper className="w-full lg:w-8/12 flex-row items-center justify-center   lg:pt-6">
               <h2 className="text-3xl lg:text-4xl mb-2  font-bold leading-9 text-gray-800 pb-4 text-center">
                  Servicios
                </h2>
            <div className="grid mb-2 mt-2 md:grid-cols-2 sm:grid-cols-1 gap-6  rounded-md">
          
            {servicesData && servicesData.slice(0, 4).map((service, index) => (
             <AboutCardServices key={index} services={service} />
           ))}
          </div>
          </RevealWrapper>
        </div>
      </section>
  );
};

export default About;
