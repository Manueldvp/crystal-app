import Image from "next/image";
import Link from "next/link";
import useIsDesktop from "@/hooks/useIsDesktop";
import ServiceCard from "../Card/ServiceCard";

const MicroServicesPage = ({ services }) => {
  const imgUrl = services.attributes.Cover.data.attributes.url;
  const isDesktop = useIsDesktop();

  return (
    <section className=" dark:text-gray-100">
      <div className="container max-w-xl p-6  mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
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
              src='/25.jpg'
              priority
              height={1000}
              width={1000}
              alt="hero img"
              className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden"
            />
            <Image
              src='/25.jpg'
              priority
              height={1000}
              width={1000}
              alt="hero img"
              className="w-full h-full rounded-md absolute object-center object-fill sm:hidden"
            />
            <div className="text-xl shadow-lg relative bg-gradient-to-r from-purple-secondary-600 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
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
                  href="/"
                  className="text-base font-medium leading-4 text-purple-secondary-600 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 "
                >
                  Contactame
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="2xl:mx-auto 2xl:container  2xl:px-20 px-6 ">
          <div className="flex md:flex-row  p-2 flex-col md:items-stretch items-center justify-center">
            <div className=" xl:w-1/2   sm:w-1/2 lg:mr-20 md:mr-6 flex  items-center justify-center ">
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
            <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
              <Image
                src='/25.jpg'
                height={1000}
                width={1000}
                alt="image"
                className="h-full shadow-lg  rounded-md object-cover object-center "
              />
            </div>
          </div>
           
        </div>
        
      </div>
     
    </section>
  );
};

export default MicroServicesPage;