'use client'
import Link from "next/link";
import useIsDesktop from "@/hooks/useIsDesktop";
const Hub = () => {

  const isDesktop = useIsDesktop()
  

  return (
    <section className={`bg-left w-full bg-contain mx-auto  bg-no-repeat bg-[url('/278.png')] ${isDesktop ? 'bg-white' : 'bg-black/50'}   bg-blend-multiply`}>
      <div className="px-8 text-center py-24 lg:py-60">
        <h1 className={`mb-8 text-4xl font-extrabold tracking-tight leading-none ${isDesktop ? 'text-fuchsia-pink-400' : 'text-white'}  md:text-5xl lg:text-6xl`}>
          Potenciando la salud con Fisioterapia Pélvica especializada
        </h1>
        <p className={`mb-8 text-lg font-semibold ${isDesktop ? 'text-black/50 ' : ' text-white'}  lg:text-xl sm:px-16 lg:px-48`}>
          Creo que todas las mujeres merecen sentirse bien con su salud pélvica,
          y estoy aquí para ayudarlas a lograrlo.
        </p>
        <p className={`mb-8 text-lg font-normal ${isDesktop ? 'text-black/50 ' : ' text-white'} lg:text-xl sm:px-16 lg:px-48`}>
          Con más de 4 años de experiencia en Puebla, México.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="https://linktr.ee/cristalsarabia_"
            target="blank_"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-fuchsia-pink-400 hover:bg-fuchsia-pink-600 "
          >
            Contacto
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
          <Link
            href="/servicios"
            className="justify-center
             bg-blue-health-300 
              items-center py-3 px-5 sm:ms-4 text-base 
              font-medium text-center text-white rounded-lg
              hover:bg-blue-health-500 focus:ring-4 focus:ring-gray-400"
          >
            Aprende más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hub;
