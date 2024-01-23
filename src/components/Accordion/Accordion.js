"use client";
import { useState } from "react";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function Accordion() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const isDesktop = useIsDesktop()


  return (
    
    <section className={`${isDesktop ? 'w-2/3' : 'w-full p-4'} p-2  mb-5 mt-10`}>
      <div className="shadow-lg">
        <button
          onClick={() => setIsOpen1(!isOpen1)}
          className={`flex ${isOpen1 ? 'bg-gray-100' : ''} items-center justify-between w-full p-5 
          font-medium rtl:text-right text-gray-500 border border-b-0
           border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200  
           hover:bg-gray-100  gap-3`}
        >
          <span className="flex items-center">¿Qué es Core Restore?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        {isOpen1 && (
          <div className="p-5 border border-b-0 border-gray-200 ">
            <div className="p-5 rounded-md shadow-md border-gray-200 ">
              <p className="mb-2 text-gray-500 ">
                Core: El término “core” se refiere a los músculos 
                abdominales, lumbares, de la pelvis, los glúteos y la
                 musculatura profunda de la columna12. Estos músculos son 
                 importantes para ganar estabilidad y son utilizados para 
                 actividades como dar una patada a una pelota, levantar un 
                 objeto pesado o mantenerse parado. 
              </p>
              <p className="text-gray-500 mb-2 ">
                Los músculos del{" "}
                <a
                  href="/docs/getting-started/introduction/"
                  className=" text-fuchsia-pink-500 hover:underline"
                >
                  Core
                </a>{" "}
                pueden dividirse en tres grupos: Los abdominales, que ayudan a la respiración, protegen los órganos internos y dan apoyo postural; los músculos de la cadera, que sirven para mantenerla estable y permitir que desempeñe adecuadamente sus movimientos básicos; y los músculos de la espalda baja, que ayudan a mantener una postura adecuada.
              </p>
              <p className="mb-2 text-gray-500 ">

                Restore: En el contexto de la informática, “Restaurar” se refiere a la acción de devolver algo a su estado anterior. En el contexto general, “restore” significa devolver algo o alguien a una condición o posición anteriormente buena.
              </p>
            </div>
          </div>
        )}
        <button
          onClick={() => {setIsOpen2(!isOpen2), setIsOpen1(false)}}
          className={`flex ${isOpen2 ? 'bg-gray-100' : ''} items-center justify-between
           w-full p-5 font-medium rtl:text-right 
           text-gray-500 border border-b-0 
           border-gray-200  focus:ring-4 
           focus:ring-gray-200    hover:bg-gray-100  gap-3`}
        >
          <span className="flex items-center">¿Qué son los hipopresivos?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        {isOpen2 && (
          
          <div className="p-5 border border-b-0 border-gray-200">
            <div className="p-5  shadow-md ">
              <p className="mb-2 text-gray-500 ">
                Los hipopresivos son ejercicios que se enfocan en el área abdominal y, a diferencia de los abdominales típicos, son de bajo impacto y cuentan con distintas posiciones para ejecutarlos, lo que ayuda a evitar lesiones1. No generan estrés dinámico en las articulaciones, por lo que se pueden tratar variedad de patologías y lesiones musculoesqueléticas que estén afectando tu zona lumbopélvica sin generar mayores complicaciones1.
              </p>
              <p className="text-gray-500 ">
                El entrenamiento{" "}
                <a
                  href="https://flowbite.com/figma/"
                  className=" text-fuchsia-pink-500   hover:underline"
                >
                  hipopresivo
                </a>{" "}
                  fue desarrollado en Bélgica por el Dr. Marcel Caufriez en el año 19801. Este doctor belga se dio cuenta de que los típicos ejercicios abdominales dañan el suelo pélvico de las mujeres y pueden acentuar los problemas de incontinencia urinaria, prolapsos de órganos pélvicos y distensión abdominal1. Por lo tanto, Caufriez centró su investigación en los ejercicios de postura y respiración para entrenar los músculos del suelo abdominal y pélvico
              </p>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsOpen3(!isOpen3)}
          className={`flex ${isOpen3 ? 'bg-gray-100' : ''} items-center justify-between 
          w-full p-5 font-medium rtl:text-right 
          text-gray-500 border  border-gray-200  
          focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3`}
        >
          <span className="flex items-center">¿Qué es la Terapia Pelvica?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        {isOpen3 && (
          <div className="p-5 border  border-gray-200 ">
            <div className="p-5 shadow-md">
              <p className="mb-2 text-gray-500 ">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 ">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 ">
                Learn more about these technologies:
              </p>
              <ul className="ps-5 text-gray-500 list-disc ">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className=" text-fuchsia-400 hover:underline"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-fuchsia-400 hover:underline"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
