"use client";
import useIsDesktop from "@/hooks/useIsDesktop";
import Image from "next/image";
import Link from "next/link";

const Card = ({ course }) => {
  const { attributes } = course;
  const description = attributes.Cardtext;
  const imgUrl = attributes.cover.data.attributes.url;
  const title = attributes.title;

  // Detectar si es Hipopower
  const isHipopower = title?.toLowerCase().includes("hipo") || 
                      title?.toLowerCase().includes("power") ||
                      description?.toLowerCase().includes("hipopower");

  const isDesktop = useIsDesktop();
  
  return (
    <div className={`${isDesktop ? "" : "p-4"}`}>
      <div
        className={`${
          isDesktop ? "max-w-md" : ""
        } shadow-lg bg-white border ${
          isHipopower ? "border-fuchsia-pink-300 ring-2 ring-fuchsia-pink-200" : "border-gray-200"
        } rounded-lg h-full hover:shadow-xl transition-all duration-300 ${
          isHipopower ? "hover:scale-105" : ""
        }`}
      >
        <Link 
          className="flex items-center justify-center" 
          href={isHipopower ? "/hipo-power" : "/programas"}
        >
          <Image
            className="rounded-t-lg h-64 object-cover"
            height={1000}
            width={1200}
            src={imgUrl}
            alt="img"
            loading="lazy"
          />
        </Link>
        <div className="p-5">
          <Link
            href={isHipopower ? "/hipo-power" : "/programas"}
            className="hover:underline hover:transition-all hover:duration-500"
          >
            <h5 className={`mb-2 text-2xl font-bold tracking-tight ${
              isHipopower ? "text-fuchsia-pink-600" : "text-gray-900"
            }`}>
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          {isHipopower && (
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-fuchsia-pink-100 text-fuchsia-pink-700 rounded-full font-semibold">
                Presencial + Online
              </span>
              <span className="text-xs px-2 py-1 bg-aquamarine-blue-100 text-aquamarine-blue-700 rounded-full font-semibold">
                Academy incluido
              </span>
            </div>
          )}
          <Link
            href={isHipopower ? "/hipo-power" : "https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta"}
            className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${
              isHipopower 
                ? "bg-gradient-to-r from-fuchsia-pink-500 to-purple-secondary-600 hover:from-fuchsia-pink-600 hover:to-purple-secondary-700" 
                : "bg-purple-secondary-500 hover:bg-purple-secondary-700"
            } rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100 transition-all duration-300`}
          >
            {isHipopower ? "Ver más información" : "Contactar"}
            <svg
              className="rtl:rotate-180  w-3.5 h-3.5 ms-2"
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
    </div>
  );
};

export default Card;
