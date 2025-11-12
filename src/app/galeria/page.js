"use client";
import { CarrouselGallery } from "@/components/Carrousel/CarrouselGallery";
import Galeria from "@/components/Galeria/Galeria";
import { QuadGallery } from "@/components/Galeria/QuadGallery";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";

const GaleriaPage = () => {
  return (
    <section>
      <div className="w-full relative pb-10 px-6 xl:px-0">
        <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
          <div className="w-full mb-5 lg:w-1/2 h-full lg:pr-10 xl:pr-0">
            <RevealWrapper>
              <Image
                tabIndex="0"
                height={500}
                width={500}
                role="img"
                aria-label="people smiling"
                className="mx-auto w-2/3"
                src="/Logo-Mobile.png"
                alt="Logo"
              />
            </RevealWrapper>
          </div>
          <RevealWrapper role="contentinfo" className="w-full lg:w-1/2 h-full">
            <div>
              <h1 tabIndex="0" className="text-gray-800 uppercase text-2xl mb-4">
              ¡Bienvenido a mi mundo!
              </h1>
              <p className="text-gray-800 font-regular mb-8">
              La salud y el bienestar son más que un trabajo para mí, son mi pasión. A través de estas imágenes, quiero compartir contigo la alegría, la esperanza y la emoción que experimentamos cada día en nuestra clínica. Desde los momentos más desafiantes hasta los triunfos más grandes, cada foto refleja nuestro compromiso contigo. ¡Espero que te sientas inspirado y conectado!
              </p>
              <Link href="/about">
                <div className="bg-white w-full lg:mt-16 hover:shadow-xl  py-4 px-2  sm:flex-row   shadow-lg rounded-lg">
                  <div className="flex justify-center items-center py-2">
                    <svg
                      className="w-6 h-6 justify-center text-fuchsia-pink-300 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="xl:w-32 text-center hover:cursor-pointer  tracking-normal text-gray-800 ml-2.5 placeholder-black">
                      Cristal Sarabia
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </div>

      <div className="flex justify-center">
        <Galeria />
      </div>

      <RevealWrapper className="flex mt-10 justify-center">
        <CarrouselGallery />
      </RevealWrapper>

      <div>
        <RevealWrapper className="flex mt-10 justify-center">
          <QuadGallery />
        </RevealWrapper>
      </div>

      <RevealWrapper className="flex mt-10 p-4 justify-center">
        <video
          className={`lg:w-2/3 sm:w-full rounded-lg`}
          controls
          autoPlay
          muted
        >
          <source
            src="Cristal.mp4"
            type="video/mp4"
          />
        </video>
      </RevealWrapper>

      <div className="mx-auto w-2/3 container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
        <RevealWrapper>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
            <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
              <div>
                <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                  Visitanos en Youtube
                </p>
              </div>
              <div className="mt-4 lg:w-4/5 xl:w-3/5">
                <p className="text-base leading-6 text-gray-600">
                  ¡Descubre nuestra selección de videos en YouTube sobre salud
                  pélvica! Estos videos están diseñados para informarte y
                  guiarte en el camino hacia una mejor salud pélvica.
                </p>
              </div>
              <div className="mt-16 w-full">
                <a
                  href="https://www.youtube.com/@CristalSarabia2046/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 shadow-md rounded-lg bg-grey-cristal-100 flex justify-between items-center w-full lg:w-72 h-14 text-gray-800 hover:bg-grey-cristal-200"
                >
                  <p className="text-xl font-medium leading-5">Ver ahora</p>
                  <svg
                    className="w-10 h-10 text-red-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21.7 8c0-.7-.4-1.3-.8-2-.5-.5-1.2-.8-2-.8C16.2 5 12 5 12 5s-4.2 0-7 .2c-.7 0-1.4.3-2 .9-.3.6-.6 1.2-.7 2l-.2 3.1v1.5c0 1.1 0 2.2.2 3.3 0 .7.4 1.3.8 2 .6.5 1.4.8 2.2.8l6.7.2s4.2 0 7-.2c.7 0 1.4-.3 2-.9.3-.5.6-1.2.7-2l.2-3.1v-1.6c0-1 0-2.1-.2-3.2ZM10 14.6V9l5.4 2.8-5.4 2.8Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-4 space-y-8 sm:space-y-0">
              <div className="rounded-lg">
                <Image
                  className=" rounded-lg "
                  src="/29.jpg"
                  width={400}
                  height={400}
                  alt="img"
                />
              </div>
              <div className="flex-col justify-center items-center space-y-6  sm:space-y-10 lg:space-y-4 xl:space-y-4">
                <div className="rounded-lg">
                  <Image
                    className="rounded-lg"
                    src="/15.jpg"
                    width={400}
                    height={400}
                    alt="img"
                  />
                </div>
                <div className="rounded-lg">
                  <Image
                    className="rounded-lg"
                    src="/13.jpg"
                    width={400}
                    height={400}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};
export default GaleriaPage;
