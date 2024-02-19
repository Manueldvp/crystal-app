'use client'
import Link from "next/link"
import { CarouselComponent } from "./CarouselComponent"
import useIsDesktop from "@/hooks/useIsDesktop"

const CarrouselSection = () => {
  const isDesktop = useIsDesktop()
  return (
    <div className={`${isDesktop ? 'w-2/3' : ''} gap-10 rounded-lg flex`}>
        
        <section className="bg-white   w-full  dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl rounded-xl  lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col  justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              ¡ATENCIÓN! CUIDA TU SALUD PÉLVICA
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                La salud pélvica es un aspecto 
                fundamental de la salud general, 
                pero a menudo se pasa por alto
              </p>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Recuerda, tu salud pélvica es importante. ¡No la descuides!
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                <Link
                  href="/servicios"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-secondary-500 hover:bg-purple-secondary-700 focus:ring-4  "
                >
                  Servicios
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
            <div className=" shadow-lg">
              <CarouselComponent />
            </div>
          </div>
        </section>
      </div>
  )
}

export default CarrouselSection