'use client'
import useIsDesktop from "@/hooks/useIsDesktop";

const ServicesCard = () => {
  const isDesktop = useIsDesktop()
  return (
    <section className=" bg-white w-full">
      <div className={`py-8 px-4 mx-auto ${isDesktop ? 'w-2/3 ' : ''}  lg:py-16`}>
        <div className=" bg-blue-health-500/60 shadow-xl transform transition duration-500  hover:scale-105 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
          <a
            href="#"
            className="bg-white  text-pink-secondary-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
          >
            <svg
              className="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
            </svg>
            Aprende
          </a>
          <h1 className="text-white  text-3xl md:text-5xl font-extrabold mb-2">
                Salud Pélvica
          </h1>
          <p className="text-lg font-normal text-white  mb-6">
            Un profesional de la salud es la mejor fuente de información sobre su salud. 
            Consulte a un profesional de la salud si usted tiene preguntas acerca de su salud.
          </p>
          <a
            href="#"
            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg bg-white hover:bg-blue-health-500 focus:ring-4 focus:ring-blue-300 "
          >
            Leer más
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
          </a>
        </div>
        <div className="grid  md:grid-cols-2 gap-8">
          <div className="bg-gray-50 transform transition duration-500  hover:scale-105 shadow-xl border-gray-200  rounded-lg p-8 md:p-12">
            
            <h2 className="text-gray-900  text-3xl font-extrabold mb-2">
                Post Parto
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Durante el posparto, el cuerpo de la mujer experimenta grandes cambios físicos, psíquicos y sociales.
                Los órganos involucrados en el embarazo y el parto vuelven a su estado anterior.
            </p>
            <a
              href="#"
              className=" text-blue-health-500/60 hover:underline font-medium text-lg inline-flex items-center"
            >
              Leer más
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
            </a>
          </div>
          <div className="bg-gray-50 shadow-xl transform transition duration-500 hover:scale-105   rounded-lg p-8 md:p-12">
            
            <h2 className="text-gray-900  text-3xl font-extrabold mb-2">
                Embarazo
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Un embarazo es el período entre la concepción y el parto. Durante este período, 
                el óvulo fecundado se desarrolla en el útero. En los seres humanos, 
                el embarazo dura aproximadamente 288 días.
            </p>
            <a
              href="#"
              className="text-blue-health-500/60 hover:underline font-medium text-lg inline-flex items-center"
            >
              Leer más
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
