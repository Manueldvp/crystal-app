"use client";
import Image from "next/image";
import useIsDesktop from "@/hooks/useIsDesktop";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const isDesktop = useIsDesktop();
  return (
    <>
      <RevealWrapper>
        <div
          className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container"
          style={{ height: 1000 }}
        >
          <div className="md:flex items-center justify-between w-full ">
            <div className="xl:w-1/3 md:w-1/2 w-full">
              <h1
                role="heading"
                className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800"
              >
                Hipo<span className="font-normal italic"> Power </span>
              </h1>
              <p
                role="contentinfo"
                className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12"
              >
                Es un taller restaurativo con un montón de técnicas y adicional una clase en vivo online para repasar y  aprender diferentes posturas y respiraciones de HIPOPRESIVOS y Piso Pélvico. 
              </p>
              <h2
                role="contentinfo"
                className="flex flex-col gap-4 text-base  mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12"
              >
               <strong className="mb-5">Clases especializadas para aprender hacer Hipopresivos:</strong>
              <p>- Tonificar abdomen y piso pélvico</p>
              <p>- Disminuir perímetro de cintura</p>
              <p>- Mejorar tu postura y respiración</p>
              <p>- Disminuir dolor lumbar y ciática</p>
              <p>- Mejorar motilidad intestinal</p>
              <p>- Mejorar la recuperación posparto segura</p>
              <p>- Mejorar rendimiento deportivo</p>
              

              </h2>
              <h3 className="flex flex-col gap-4 text-base  mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12">
              Es un curso enfocado para mujeres que deseen restaurar y potenciar su abdomen y piso pélvico guiado por mi, soy especializada en Fisioterapia pélvica y entrenamiento de Hipopresivos.
              <p>Así que si estás lista para aprender y tener resultados, inscríbete.</p>
              </h3>
              <div className="mt-10">
                <Link
                  target="blank"
                  href="https://api.whatsapp.com/send?phone=5212223590967&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta"
                  className="flex items-center md:p-3 p-1  text-xl font-medium leading-5 text-purple-secondary-500 hover:text-purple-secondary-600"
                >
                  INSCRIBETE 
                  <svg
                    className="ml-8 text-purple-secondary-500 hover:animate-pulse"
                    width={45}
                    height={40}
                    viewBox="0 0 45 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2113 33.7887C11.0161 33.9839 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z"
                      fill="currentColor"
                    />
                    <path
                      d="M1 20H29"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 28L29 20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12L29 20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
              <p
                role="contentinfo"
                className=" focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10"
              >
                Actualmente estoy certificada internacionalmente como entrenadora de Hipopresivos por low pressure fitness.

                Sentir que puedo ser parte de la solución hacia mamás en postparto, personas que tienen: 
                Diástasis.
                Ayudar a ejercitar la faja abdominal.
                Ayudar a deportistas a mejorar su rendimiento.
                
              </p>
              <p
                role="contentinfo"
                className=" focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10"
              >
                
              </p>
              <div className="w-full rounded-lg">
                <Image
                  src="/99.png"
                  height={500}
                  width={500}
                  alt="img"
                  className="md:w-full rounded-lg sm:w-1/2 w-full"
                />
                <div className="flex items-center mt-8 ">
                  <p
                    role="contentinfo"
                    className="text-xl focus:outline-none italic font-italic leading-5 pl-2 text-gray-700"
                  >
                   ¿En qué consiste Hipo Power?
                   Son clases de entrenamiento especializadas y personalizadas para las personas que quieren obtener ¡RESULTADOS REALES! puede ser online o presencial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </>
  );
}
