"use client";
import ServiciosLanding from "@/components/Servicios/ServiciosLanding";
import useIsDesktop from "@/hooks/useIsDesktop";
import Link from "next/link";
import { useFetch } from "@/hooks/useFetch";
import { RevealWrapper } from "next-reveal";

const Servicios = () => {
  const isDesktop = useIsDesktop();

  const services = useFetch("/services?populate=*");
  const servicesData = services.data.data;

  return (
    <>
      <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <RevealWrapper className="flex  items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex  flex-col  md:flex-row items-strech justify-between bg-white py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div
              className={`flex ${
                isDesktop ? "shadow-lg" : ""
              } text-center  rounded-l-lg flex-col justify-center md:w-1/2`}
            >
              <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800">
                Servicios
              </h1>
              <p className="text-base lg:text-xl text-gray-800 mt-2">
                Experiencia Inigualable
              </p>
            </div>
            <div className="w-full shadow-lg mt-8 md:mt-0 flex justify-center md:justify-end">
              <video
                className={`h-full bg-cover w-full ${
                  isDesktop ? "rounded-r-lg" : " rounded-lg"
                } shadow-lg`}
                autoPlay
                muted
                loop
              >
                <source src="/vid12.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper>
          {servicesData &&
            servicesData.map((service, index) => (
              <ServiciosLanding key={index} service={service} />
            ))}
        </RevealWrapper>
      </div>
    </>
  );
};

export default Servicios;
