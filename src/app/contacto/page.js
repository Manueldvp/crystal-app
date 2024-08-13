"use client";
import useIsDesktop from "@/hooks/useIsDesktop";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import { useState } from "react";
import Notification from "@/components/notification/notification";

const Contacto = () => {
  const isDesktop = useIsDesktop();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    setFormData({ name: '', email: '', message: '' });
    setSuccess(true)
  ;
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
      } else {
        console.error("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <RevealWrapper>
        <div className="py-4 lg:py-8  relative">
          <Image
            width={2000}
            height={2000}
            src="/map.png"
            className="h-2/5 lg:h-full opacity-20 w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden"
            alt="map"
          />
          <div className="xl:mx-auto xl:container  relative ">
            <div className="flex flex-wrap xl:mx-auto xl:container">
              <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                {/* <Image
                width={2000}
                height={2000}
                  src="/map.png"
                  className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
                  alt="map"
                /> */}
                <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                  <div className="w-full 2xl:pl-48 xl:pt-1">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">
                      Aquí puedes localizarme
                    </h1>
                    <div className="w-full md:w-10/12 mt-3">
                     
                      <div className="mt-4 md:mt-8">
                        <h2 className="text-sm md:text-base text-fuchsia-pink-500 font-semibold">
                          Dirección
                        </h2>
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        Torres Médicas Angelópolis II, Piso 6, Consultorio 602. Puebla, Puebla.
                        </h2>
                      </div>
                      <div className="mt-4 md:mt-8">
                        <h2 className="text-sm md:text-base text-fuchsia-pink-500 font-semibold">
                          Contacto
                        </h2>
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        +52 222 359 0967 (Teléfono)
                        </h2>
                        
                      </div>
                      <div className="mt-4 md:mt-8">
                        <h2 className="text-sm md:text-base text-fuchsia-pink-500 font-semibold">
                         Correo Electrónico
                        </h2>
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                          info@cristalsarabia.com
                        </h2>
                      </div>
                      <h2 className="text-gray-800 mt-10 text-base md:text-lg leading-8 tracking-wider">
                      La innovación digital es el motor que impulsa nuestro compromiso con tu salud.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-fuchsia-pink-400">
                  Contáctame
                  </h1>
                  <div className="w-full 2xl:w-8/12 mt-3">
                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                    Para consultas, envíenos un correo electrónico utilizando el siguiente formulario.
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mt-4 md:mt-8">
                        <p className="text-gray-800 text-base font-medium">
                          Nombre
                        </p>
                        <input
                          className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-fuchsia-pink-600 focus:border-fuchsia-pink-600 border-gray-600 rounded-lg py-5 
 pl-4 text-gray-800"
                          type="text"
                          placeholder="Nombre"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-4 md:mt-8">
                        <p className="text-gray-800 text-base font-medium">
                          Correo Electrónico
                        </p>
                        <input
                          className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-fuchsia-pink-600 focus:border-fuchsia-pink-600 border-gray-600 rounded-lg py-5 pl-4 text-gray-800"
                          type="email"
                          placeholder="Correo Electrónico"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mt-4 md:mt-8">
                        <p className="text-gray-800 text-base font-medium">
                          Mensaje
                        </p>
                        <textarea
                          className="mt-3 mb-5 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-fuchsia-pink-600 focus:border-fuchsia-pink-600 border-gray-600 rounded-lg 
 xl:h-40 py-5 pl-4 text-gray-800"
                          type="text"
                          placeholder="Escribe tu mensaje aqui..."
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                         
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-8 inline-block px-6 py-2.5 bg-fuchsia-pink-500 text-white font-medium rounded-md shadow sm:mt-0 hover:bg-fuchsia-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Enviar
                      </button>
                      
                    </form>
                    {success && (
                      <Notification  />
                    )}
                  </div>
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
