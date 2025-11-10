"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useIsDesktop from "@/hooks/useIsDesktop";
import { RevealWrapper } from "next-reveal";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function HipoPowerPage() {
  const isDesktop = useIsDesktop();
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleAccordionOpen = (value) =>
    setOpenAccordion(openAccordion === value ? 0 : value);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/bg-3.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <RevealWrapper>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-4 tracking-wider">
                HIPOPOWER
              </h1>
              <p className="text-sm md:text-base text-gray-600 uppercase tracking-widest">
                Taller de Hipopresivos
              </p>
            </RevealWrapper>
          </div>
        </div>
      </div>

      {/* Main Title Section */}
      <RevealWrapper>
        <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
          <p className="text-sm md:text-base text-gray-500 mb-6 uppercase tracking-wider">
            Taller Presencial + 8 Clases Online en Vivo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 leading-relaxed">
            ¿Te imaginas cuidar tu salud abdominal y pélvica mientras trabajas
            un abdomen de forma funcional, firme y estético?
          </h2>
        </section>
      </RevealWrapper>

      {/* Welcome Section with Image */}
      <RevealWrapper>
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/99.png"
                alt="Cristal Sarabia"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Bienvenida a{" "}
                <span className="font-semibold text-purple-secondary-500">
                  HIPOPOWER
                </span>
                , una experiencia integral para mujeres que quieren reconectar
                con su cuerpo y su fuerza desde el centro.
              </p>
              <p className="text-sm md:text-base text-gray-500 italic">
                Un taller transformador donde aprenderás a fortalecer tu abdomen 
                y piso pélvico de forma funcional y segura, guiada por una 
                especialista con más de 5 años de experiencia en fisioterapia 
                pélvica y entrenamiento de hipopresivos.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Video Sections */}
      <RevealWrapper>
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
          <div className="space-y-8">
            {/* Video 1 - Qué es Hipopower */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-light text-gray-700 text-center">
                🎥 ¿Qué es Hipopower?
              </h3>
              <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.canva.com/design/DAG4T3Klleo/KPttK0iM9BYvfZMpB9CUMg/watch?embed"
                  allow="fullscreen"
                  className="w-full h-full"
                  title="¿Qué es Hipopower?"
                ></iframe>
              </div>
            </div>

            {/* Video 2 - Resumen de Talleres */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-light text-gray-700 text-center">
                🎥 Resumen de talleres pasados
              </h3>
              <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.canva.com/design/DAG4T5GSgi4/QFIJfYtdDdFyk_F5620mnw/watch?embed"
                  allow="fullscreen"
                  className="w-full h-full"
                  title="Resumen de talleres pasados"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Experience Section - Purple Background */}
      <RevealWrapper>
        <section className="bg-purple-secondary-50 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-8 text-center">
              💜 Vive la experiencia Hipopower
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-base md:text-lg leading-relaxed">
                De la mano de{" "}
                <span className="font-semibold">Cristal Sarabia</span>,
                fisioterapeuta experta en piso pélvico, con más de 6 años de
                experiencia clínica y certificaciones internacionales en España
                y Brasil, te invitamos a transformar tu salud desde dentro.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Este programa combina un{" "}
                <span className="font-semibold">
                  taller presencial de 3 horas
                </span>{" "}
                con{" "}
                <span className="font-semibold">8 clases online en vivo</span>{" "}
                para seguir entrenando desde casa, resolviendo dudas y
                fortaleciendo tu práctica semana a semana.
              </p>
              <div className="pt-6 space-y-3">
                <p className="text-base md:text-lg">
                  📅 <span className="font-semibold">Próxima fecha:</span>{" "}
                  [Coloca aquí la fecha]
                </p>
                <p className="text-base md:text-lg">
                  📍 <span className="font-semibold">Ubicación:</span> Torres
                  Médicas Angelópolis II, Puebla
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <RevealWrapper>
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-12 text-center">
            Preguntas frecuentes
          </h2>
        </RevealWrapper>

        <div className="space-y-4">
          {/* Accordion 1 - Qué incluye */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 1}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(1)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 1
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                ¿Qué incluye?
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-secondary-500 mr-2">✅</span>
                    <span>Taller presencial de 3 horas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-secondary-500 mr-2">✅</span>
                    <span>
                      8 clases online en vivo (25 min) – miércoles 9:00 p. m.,
                      durante 8 semanas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-secondary-500 mr-2">✅</span>
                    <span>E-book + material impreso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-secondary-500 mr-2">✅</span>
                    <span>Bolsa HIPOPOWER exclusiva</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-secondary-500 mr-2">✅</span>
                    <span>Acceso a charlas abdominopélvicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-secondary-500 mr-2">✅</span>
                    <span>Comunidad HIPOWER para soporte continuo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-secondary-500 mr-2">✅</span>
                    <span>Seguimiento personalizado post-taller</span>
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>

          {/* Accordion 2 - Experiencia previa */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 2}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(2)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 2
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                ¿Necesito tener experiencia previa?
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <p className="mb-4">
                  No necesitas experiencia, solo apertura para aprender un
                  sistema de entrenamiento que está revolucionando la salud
                  abdominopélvica.
                </p>
                <p>
                  Este programa es para mayores de 18 años, y aunque el enfoque
                  es femenino, todas las personas son bienvenidas.
                </p>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>

          {/* Accordion 3 - Métodos de pago */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 3}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(3)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 3
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                Métodos de pago
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <p className="mb-4">Puedes pagar con:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-purple-secondary-500 mr-2">✔️</span>
                    <span>Tarjeta de crédito</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-secondary-500 mr-2">✔️</span>
                    <span>Tarjeta de débito</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-secondary-500 mr-2">✔️</span>
                    <span>Transferencia bancaria</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-secondary-500 mr-2">✔️</span>
                    <span>Efectivo</span>
                  </li>
                </ul>
                <p className="font-semibold mb-4">
                  Reserva tu lugar con solo $500 MXN.
                </p>
                <p>
                  📩 Escríbenos a{" "}
                  <a
                    href="mailto:info@cristalsarabia.com"
                    className="text-purple-secondary-500 hover:underline"
                  >
                    info@cristalsarabia.com
                  </a>{" "}
                  o por{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quiero%20información%20sobre%20HIPOPOWER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-secondary-500 hover:underline"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>

          {/* Accordion 4 - Itinerario */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 4}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(4)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 4
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                Itinerario del taller
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Domingo (clase presencial):
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">📝</span>
                        <span>Registro: 9:15 a. m.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">💪</span>
                        <span>Clase: 9:30 a. m. a 12:30 p. m.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Clases online en vivo:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">📅</span>
                        <span>Miércoles a las 9:00 p. m.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">📲</span>
                        <span>Duración: 25 minutos (durante 8 semanas)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>

          {/* Accordion 5 - Términos y condiciones */}
          <RevealWrapper>
            <Accordion
              open={openAccordion === 5}
              className="rounded-lg border border-gray-200 px-6 py-4"
            >
              <AccordionHeader
                onClick={() => handleAccordionOpen(5)}
                className={`border-b-0 transition-colors text-left ${
                  openAccordion === 5
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : "text-gray-700"
                }`}
              >
                Términos y condiciones
              </AccordionHeader>
              <AccordionBody className="pt-4 text-base text-gray-600">
                <ul className="space-y-3">
                  <li>• No hay devoluciones del monto pagado.</li>
                  <li>
                    • Tampoco se realizan cambios de fecha, reembolsos, ni
                    intercambios por otros servicios/productos en caso de
                    cancelación por parte del cliente.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>
        </div>
      </section>

      {/* CTA Section with Purple Background */}
      <RevealWrapper>
        <section className="bg-purple-secondary-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-8">
              ¿Lista para transformar tu salud abdominopélvica?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Aprende hipopresivos de forma segura y efectiva, mejora tu postura, 
              fortalece tu core y reconecta con tu cuerpo desde el centro. 
              Un taller diseñado para mujeres que buscan resultados reales.
            </p>
                <Link
              href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quiero%20inscribirme%20a%20HIPOPOWER"
              target="_blank"
              className="inline-block bg-purple-secondary-500 hover:bg-purple-secondary-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              INSCRÍBETE AHORA
                </Link>
              </div>
        </section>
      </RevealWrapper>

      {/* Video/Image Footer Section */}
      <RevealWrapper>
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/99.png"
              alt="Hipopower"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-widest">
                HIPOPOWER
              </h3>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* Final Footer */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <RevealWrapper>
            <h3 className="text-2xl md:text-3xl font-light text-gray-700 mb-6">
              HIPOPOWER
            </h3>
            <p className="text-sm text-gray-500 mb-6">Por Cristal Sarabia</p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.instagram.com/cristalsarabia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-secondary-500 transition-colors"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.facebook.com/cristalsarabia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-secondary-500 transition-colors"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5212224237337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-secondary-500 transition-colors"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <p className="text-xs text-gray-400">
              © 2025 Cristal Sarabia. Todos los derechos reservados.
            </p>
          </RevealWrapper>
        </div>
      </footer>
    </div>
  );
}
