"use client";
import useIsDesktop from "@/hooks/useIsDesktop";
import { useState } from "react";

export default function SocialMediaButton() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useIsDesktop();
  return (
    <div
      className={` z-50 fixed  ${
        isDesktop
          ? "right-10 w-16 h-16 bottom-20"
          : "right-1 w-11 h-11 bottom-2"
      }    bg-fuchsia-pink-400 hover:bg-fuchsia-pink-600 rounded-2xl flex items-center justify-center  group`}
      onMouseEnter={() => isDesktop && setIsOpen(true)}
      onMouseLeave={() => isDesktop && setIsOpen(false)}
    >
      <svg
        className={`${
          isDesktop ? "w-8 h-8" : "w-6 h-6"
        }  text-white hover:animate-pulse `}
        onClick={() => !isDesktop && setIsOpen(!isOpen)}
        onMouseEnter={() => isDesktop && setIsOpen(true)}
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
          d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"
        />
      </svg>

      {isOpen && (
        <div
          className={`absolute ${
            isDesktop ? " bottom-16 py-10" : "bottom-14 py-5 "
          }    flex flex-col items-center space-y-6 ${
            isOpen ? "opacity-100" : "opacity-0 "
          } transition-opacity`}
        >
          <a
            href="https://www.facebook.com/FisioterapiaCristal"
            target="_blank"
            className=" rounded-full px-2  py-1 w-24 text-center flex items-center justify-center"
          >
            <svg
              className={`${
                isDesktop ? "w-12 h-12" : "w-8 h-8"
              }  text-purple-secondary-700 hover:text-purple-secondary-500`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@CristalSarabia2046/videos"
            target="_blank"
            className=" rounded-full px-2 py-1 w-24 text-center flex items-center justify-center"
          >
            <svg
              className={`${
                isDesktop ? "w-12 h-12" : "w-8 h-8"
              }  text-purple-secondary-700 hover:text-purple-secondary-500`}
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
          <a
            href="https://www.instagram.com/cristalsarabia_/"
            target="_blank"
            className=" rounded-full px-2 py-1 w-24 text-center flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className={`${
                isDesktop ? "w-12 h-12" : "w-8 h-8"
              }  text-purple-secondary-700 hover:text-purple-secondary-500`}
            >
              <path
                fill="currentColor"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 
        1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 
        3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 
        4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta"
            target="_blank"
            className=" rounded-full text-purple-secondary-700  hover:text-purple-secondary-500 px-2 py-1 w-24 text-center flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                isDesktop ? "w-12 h-12" : "w-8 h-8"
              }  text-purple-secondary-700 hover:text-purple-secondary-500`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
