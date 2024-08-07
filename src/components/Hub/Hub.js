'use client'
import { useState } from 'react';
import Link from "next/link";
import useIsDesktop from "@/hooks/useIsDesktop";
import { RevealWrapper  } from "next-reveal";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const images = ['/278.png', '/bg-2.png', '/bg-3.png'];
const Hub = () => {
  const isDesktop = useIsDesktop()
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <RevealWrapper className=' h-90vh'>
    <section className={`flex h-90vh transition-all duration-1000 justify-between bg-cover bg-center md:bg-contain md:bg-left w-full  lg:bg-contain mx-auto bg-no-repeat ${isDesktop ? 'bg-white' : 'bg-black/50'} bg-blend-multiply`} style={{ backgroundImage: `url(${images[currentImage]})`}}>
    <div className="flex  justify-between space-x-4 mt-4">
      <button onClick={prevImage}>
        <ChevronLeftIcon className={`h-8 w-8 ml-4 pl-1 ${isDesktop ? " text-fuchsia-pink-400" : "text-white"} `} />
      </button>
      </div>
  {isDesktop ? <div className="w-1/2 grid p-10">
    
    </div> : '' }
  
  <div className="w-2/3 flex flex-col justify-center items-center h-full text-center ">
    <h1 className={`mb-5 text-4xl font-extrabold tracking-tight leading-none ${isDesktop ? 'text-fuchsia-pink-400' : 'text-white'} md:text-5xl lg:text-5xl animate-slideInFromRight`}>
      Fisioterapia especializada para el piso pélvico en cada etapa de tu vida
    </h1>
    <p className={`mb-5 text-md font-semibold ${isDesktop ? 'text-black/50 ' : ' text-white'} lg:text-lg sm:px-16 lg:px-32 animate-slideInFromRight`}>
      Ofrecemos atención experta para el embarazo, el postparto, el dolor pélvico por endometriosis, la menopausia y la salud sexual. ¿No estás segura de si la fisioterapia del piso pélvico es adecuada para ti? Tenemos un cuestionario para ayudarte a decidir.
    </p>
    <p className={`mb-5 text-lg font-normal ${isDesktop ? 'text-black/50 ' : ' text-white'} lg:text-xl sm:px-16 lg:px-48 animate-slideInFromRight`}>
      Impulsando tu salud pélvica: fuerza y bienestar en cada etapa desde tu centro
    </p>
    <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:justify-center sm:space-y-0">
      
      <Link
        href="/servicios"
        className="justify-center
         bg-blue-health-400 shadow-lg border-2 border-blue-health-300
          items-center py-3 px-5 sm:ms-4 text-xl
          font-medium text-center text-white rounded-lg
          hover:bg-blue-health-600 "
      >
        Aprende más
      </Link>
      <Link
        href="https://linktr.ee/cristalsarabia_"
        target="blank"
        className="inline-flex border-2 border-fuchsia-pink-300 text-xl shadow-lg justify-center items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-fuchsia-pink-400 hover:bg-fuchsia-pink-600 "
      >
        Contacto
        <svg
          className="w-4 h-4 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
    
  </div>
  <div className="flex   justify-between space-x-4 mt-4">
    
      <button onClick={nextImage}>
        <ChevronRightIcon className={`h-8 w-8 mr-4 pr-1 ${isDesktop ? " text-fuchsia-pink-400" : "text-white"} `} />
      </button>
    </div>
</section>


    </RevealWrapper>
  );
};

export default Hub;

