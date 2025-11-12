"use client";
import useIsDesktop from "@/hooks/useIsDesktop";
import Link from "next/link";
import { RevealWrapper  } from "@/components/RevealWrapper/RevealWrapper";

const ServicesCard = () => {
  const isDesktop = useIsDesktop();
  return (
    <RevealWrapper>
    <section className=" bg-white w-full">
      <div
        className={`py-8 px-4 mx-auto ${isDesktop ? "w-2/3 " : ""}  lg:py-16`}
      >
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
        <div className=" bg-blue-health-500/60 mt-8 shadow-xl transform transition duration-500  hover:scale-105 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
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
            Más +
          </Link>
          <h1 className="text-white  text-3xl md:text-5xl font-extrabold mb-2">
           Dolor Pélvico
          </h1>
          <p className="text-lg font-normal text-white  mb-6">
           ¿Has pensado que el dolor en las relaciones sexuales, la pérdida de orina al toser, la endometriosis, disfunciones sexuales como: Dispareunia, vaginismo se asocian con tu salud pélvica? Te puedo ayudar con tratamiento personalizado, terapia física y equipos especializados para tu recuperación


          </p>
          <Link
            href="/servicios/dolor-pelvico-por-endometriosis"
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
      </div>
    </section>
    </RevealWrapper>
  );
};

export default ServicesCard;
