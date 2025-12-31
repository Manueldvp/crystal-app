"use client";
import Link from "next/link";
import { RevealWrapper  } from "@/components/RevealWrapper/RevealWrapper";

const ServicesCard = () => {
  return (
    <RevealWrapper>
    <section className="bg-white w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className=" bg-blue-health-500/60 shadow-xl transform transition duration-500  hover:scale-105 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
          <Link
            href="https://www.youtube.com/@CristalSarabia2046/videos"
            target="blank"
            className="bg-white  text-pink-secondary-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
          >
            <svg
              className="w-2.5 animate-pulse h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
            </svg>
            Aprende
          </Link>
          <h1 className="text-white  text-3xl md:text-5xl font-extrabold mb-2">
            Salud Pélvica
          </h1>
          <p className="text-lg font-normal text-white  mb-6">
            Según estudios: 70% de las mujeres mexicanas nunca había escuchado hablar del suelo pélvico y 40% de las mujeres que sufren de incontinencia urinaria no había buscado ayuda médica. ¿Es tu caso?

          </p>
          <Link
            href="/servicios/disfunciones-pelvicas-en-el-adulto"
            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-purple-secondary-600 hover:text-white rounded-lg bg-white hover:bg-blue-health-500 focus:ring-4 focus:ring-blue-300 "
          >
            Más info
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
        <div className="grid  md:grid-cols-2 gap-8">
          <div className="bg-gray-50 transform transition duration-500  hover:scale-105 shadow-xl border-gray-200  rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900  text-3xl font-extrabold mb-2">
              Post Parto
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
            ¿Puedes recuperar tu cuerpo en el post parto? Con nuestro Programa Postparto por fisioterapia pélvica ha demostrado ser eficaz en el tratamiento faja abdominal, DIÁSTASIS ABDOMINAL y afecciones del piso pélvico.
            </p>
            <Link
              href="/servicios/postparto"
              className=" text-purple-secondary-600 hover:underline font-medium text-lg inline-flex items-center"
            >
              Más info
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
          <div className="bg-gray-50 shadow-xl transform transition duration-500 hover:scale-105   rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900  text-3xl font-extrabold mb-2">
              Embarazo
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
            ¡Felicidades mamá! A través de sesiones individuales te acompaño durante todo tu proceso con calidez y cercanía. Brindado las herramientas para la preparación de parto o cesárea. Cómo calmar los dolores, orientación de posturas y más.
            </p>
            <Link
              href="/servicios/embarazo-y-preparacion-al-parto"
              className="text-purple-secondary-600 hover:underline font-medium text-lg inline-flex items-center"
            >
              Más info
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
        <div className="relative mt-8 shadow-xl transform transition duration-500 hover:scale-105 rounded-2xl p-8 md:p-12 mb-8 overflow-hidden bg-purple-secondary-700">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-2 border-white/15" />
          <div className="absolute -left-5 -bottom-5 w-24 h-24 rounded-full border-2 border-white/10" />
          <div className="relative z-10">
            <p className="text-fuchsia-pink-200 font-medium tracking-wide uppercase text-xs mb-3">
              ⭐ Servicio Especializado
            </p>
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
              Dolor en Endometriosis y Adenomiosis
            </h1>
            <p className="text-lg font-normal text-purple-secondary-100 mb-6 max-w-2xl">
              Tu dolor es real, tu experiencia es válida. Ofrecemos un abordaje especializado desde la fisioterapia pélvica para el manejo del dolor, la función y la recuperación corporal.
            </p>
            <Link
              href="/servicios/endometriosis-adenomiosis"
              className="inline-flex justify-center items-center py-3 px-6 text-base font-semibold text-center text-purple-secondary-700 rounded-full bg-white hover:bg-gray-100 transition-colors"
            >
              Conocer más sobre este servicio
              <svg
                className="w-4 h-4 ms-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </RevealWrapper>
  );
};

export default ServicesCard;
