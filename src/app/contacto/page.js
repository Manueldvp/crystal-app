"use client";
import useIsDesktop from "@/hooks/useIsDesktop";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
const Contacto = () => {
  const isDesktop = useIsDesktop();
  return (
    <>
      <RevealWrapper>
        <div
          className={`${
            isDesktop ? "flex" : "flex-row "
          } py-4 lg:py-8  relative`}
        >
          <Image
            src="/map.png"
            height={1200}
            width={1000}
            className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 opacity-35 object-cover object-center xl:block hidden"
            alt="map"
          />
          <div className=" xl:container flex  relative ">
            <div className="flex flex-wrap  ">
              <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10  2xl:pl-0 xl:pl-12 pl-0 ">
                <div className="w-full flex flex-col xl:items-start lg:items-center  xl:justify-start lg:justify-center md:justify-center  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                  <div className="w-full 2xl:pl-48 xl:pt-1">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">
                      PUEDES LOCALIZARME
                    </h1>
                    <div className="w-full md:w-10/12 mt-3">
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                        Puebla, México.
                      </h2>
                      <div className="mt-4 md:mt-8">
                        <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                          Dirección
                        </h2>
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        Torres Médicas Angelópolis, periférico Ecológico #3507 Tlax, 72820. San Andrés Cholula.
                        </h2>
                      </div>
                      <div className="mt-4 md:mt-8">
                        <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                          Contacto
                        </h2>
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        +52 1 222 359 0967 (Telefono)
                        </h2>
                      </div>
                      <div className="mt-4 md:mt-8">
                        <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                          Email
                        </h2>
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                          cristalsarabia@gmail.com
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse  items-center justify-center">
            <div className="md:py-10  flex flex-col  items-center justify-center ">
              <div className="flex flex-col items-center justify-center">
                <h2 className="md:text-5xl text-3xl font-bold text-center text-gray-800 dark:text-white">
                  MEJORA TU SALUD
                </h2>
                <p className="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600 dark:text-gray-200">
                  Aprende nuevos metodos de ayuda pelvica
                </p>
                <div className="md:mt-14 mt-12 flex flex-col items-center">
                  <div
                    className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center"
                    role="img"
                  >
                    <svg
                      className="w-10 h-10 text-green-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">
                    Contacta con la mejor informacion disponible
                  </p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                  <div
                    className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center"
                    role="img"
                    aria-label="phone"
                  >
                    <svg
                      className="w-10 h-10 text-blue-health-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">
                    Comparte mientras aprendes
                  </p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                  <div
                    className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center"
                    role="img"
                  >
                    <svg
                      className="w-10 h-10 text-purple-secondary-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">
                    Mantente con la mejor informacion actual
                  </p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                  <div
                    className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center"
                    role="img"
                  >
                    <svg
                      className="w-10 h-10 text-yellow-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5.5V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.2-.5 1.2h-13c-.5 0-.5-.6-.5-1.2 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.5ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.5 18a3.5 3.5 0 0 0 7 0h-7Z"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">
                    No olvides que lo mas importante eres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </>
  );
};

export default Contacto;
