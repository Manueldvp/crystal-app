import Image from "next/image";
import Link from "next/link";
import useIsDesktop from "@/hooks/useIsDesktop";
import { useFetch } from "@/hooks/useFetch";
import CollapseDefault from "../Buttom/CollapseButtom";
import ServiceCard from "../Card/ServiceCard";
import { RevealWrapper } from "next-reveal";

const ServicesPage = ({ services }) => {
  const imgUrl = services.attributes.Cover.data.attributes.url;
  const microService = useFetch("/micro-services?populate=*");
  const microServiceData = microService.data.data;

  const isDesktop = useIsDesktop();

  return (
    <section className=" dark:text-gray-100">
      <RevealWrapper>
        <div className="container mx-auto flex items-center justify-center lg:px-8 lg:max-w-7xl">
          <div className="  px-4  py-9">
            <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-purple-secondary-500"
                  >
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Inicio
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link
                      href="/servicios"
                      className="ms-1 text-sm font-medium text-gray-700 hover:text-purple-secondary-500 md:ms-2  "
                    >
                      Servicios
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div
                    className={`flex ${
                      isDesktop ? "" : "max-w-44"
                    }  items-center`}
                  >
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ms-1 truncate  text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                      {services.attributes.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="relative rounded-md">
              <Image
                src={imgUrl}
                priority
                height={1000}
                width={1000}
                alt="hero img"
                className="w-full h-full rounded-md  object-center object-fill absolute "
              />
              <Image
                src={imgUrl}
                priority
                height={1000}
                width={1000}
                alt="hero img"
                className="w-full h-full rounded-md absolute object-center object-fill "
              />
              <div className=" shadow-lg relative bg-gradient-to-r from-purple-secondary-600 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                <div>
                  <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                    {services.attributes.title}
                  </h1>
                  <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12 text-justify  2xl:pr-12 mt-4">
                    {services.attributes.ServicePageText}
                  </p>
                </div>
                <div className="md:mt-12 mt-20">
                  <Link
                    href="https://api.whatsapp.com/send?phone=5212223590967&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta"
                    className="text-base font-medium leading-4 text-purple-secondary-600 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 "
                  >
                    Contactame
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
      <RevealWrapper>
        <div className="2xl:mx-auto 2xl:container  2xl:px-16 mt-10 px-6 ">
          <div className="flex md:flex-row  flex-col md:items-stretch items-center justify-center">
            <div className=" xl:w-1/2  md:w-2/3 lg:mr-20 md:mr-6 flex  items-center justify-center ">
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:text-5xl text-3xl font-bold text-center mb-5 text-gray-800">
                  MEJORA TU SALUD
                </h1>
                <div>
                  {services.attributes.Contenido.map((item, index) => {
                    return (
                      <p
                        className={`mb-5 text-justify font-normal text-base leading-6 text-gray-600 mt-6 w-4/3 ${
                          item.children[0].bold ? " font-semibold text-lg" : ""
                        }`}
                        key={index}
                      >
                        {item.children[0].text}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="xl:w-1/2 lg:w-1/3 sm:w-1/2">
              <Image
                src={services.attributes.ServicePageImg.data.attributes.url}
                height={1000}
                width={1000}
                alt="image"
                className="h-full shadow-lg  rounded-md object-cover object-center "
              />
            </div>
          </div>
          <Link href='https://api.whatsapp.com/send?phone=5212223590967&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta'>
              <div className="flex items-center mt-10 max-w-64 cursor-pointer pb-4 md:pb-0">
                <h3 className="f-f-r bg-fuchsia-pink-400 hover:bg-fuchsia-pink-700 p-4 rounded-lg text-lg lg:text-2xl font-semibold text-white">
                  Agenda tu Cita
                </h3>
                <div className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                      fill="#D53F8C"
                    />
                  </svg>
                </div>
              </div>
              </Link>    
              <div className={`${isDesktop ? 'grid mt-10  grid-cols-3' : "grid mt-10 grid-cols-1"} `}>
              {microServiceData &&
                microServiceData.map((service) =>
                  services.attributes.micro_services.data &&
                  services.attributes.micro_services.data.length > 0 ? (
                    <ServiceCard key={service.id} service={service} />
                  ) : null
                )}
            </div>
          {/* {services.attributes.micro_services.data &&
          services.attributes.micro_services.data.length > 0 ? (
            <div className="flex-row mt-2 ">
              <CollapseDefault
                services={services}
                microServiceData={microServiceData}
              />
            </div>
          ) : null} */}
        </div>
      </RevealWrapper>
    </section>
  );
};

export default ServicesPage;
