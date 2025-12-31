"use client";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";

export function AccordionComponent() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <RevealWrapper>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Preguntas frecuentes
          </h2>
        </RevealWrapper>
        <div className="space-y-3">
          <RevealWrapper>
            <Accordion
              open={open === 1}
              className="rounded-xl border border-gray-200 px-4 bg-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`border-b-0 transition-colors text-base ${
                  open === 1
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : ""
                }`}
              >
                ¿Qué es HIPOPOWER?
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <p className="mb-3">
                  HIPOPOWER es un programa integral de entrenamiento hipopresivo y
                  fortalecimiento del core, diseñado específicamente para mujeres
                  que desean transformar su salud abdominopélvica de forma segura y
                  efectiva.
                </p>
                <p className="mb-3">
                  El programa combina un{" "}
                  <strong>taller presencial de 3 horas</strong> con{" "}
                  <strong>8 clases online en vivo</strong>, más acceso exclusivo a{" "}
                  <strong className="text-aquamarine-blue-600">
                    Hipopower Academy
                  </strong>{" "}
                  por 2 meses.
                </p>
                <a
                  href="/hipo-power"
                  className="text-fuchsia-pink-500 hover:underline font-semibold text-sm"
                >
                  Ver más información →
                </a>
              </AccordionBody>
            </Accordion>
          </RevealWrapper>
          
          <RevealWrapper>
            <Accordion
              open={open === 2}
              className="rounded-xl border border-gray-200 px-4 bg-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={`border-b-0 transition-colors text-base ${
                  open === 2
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : ""
                }`}
              >
                ¿Qué son los ejercicios hipopresivos?
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                Los ejercicios hipopresivos son técnicas respiratorias
                y posturales que buscan disminuir la presión en las cavidades
                torácica, abdominal y pélvica, resultando en una activación
                profunda del core y el piso pélvico.
              </AccordionBody>
            </Accordion>
          </RevealWrapper>
          
          <RevealWrapper>
            <Accordion
              open={open === 3}
              className="rounded-xl border border-gray-200 px-4 bg-white"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={`border-b-0 transition-colors text-base ${
                  open === 3
                    ? "text-purple-secondary-500 hover:!text-purple-secondary-700"
                    : ""
                }`}
              >
                Fisioterapia invasiva en piso pélvico
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                Tratamientos especializados para el síndrome de dolor miofascial
                del piso pélvico utilizando punción seca y neuromodulación,
                obteniendo resultados desde la primera sesión.
              </AccordionBody>
            </Accordion>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
