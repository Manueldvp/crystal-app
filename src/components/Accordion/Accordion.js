"use client";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import useIsDesktop from "@/hooks/useIsDesktop";
import { RevealWrapper  } from "next-reveal";

export function AccordionComponent() {
  const [open, setOpen] = useState(1);
  const isDesktop = useIsDesktop()
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <RevealWrapper className={`${isDesktop ? 'w-2/3' : 'w-full px-4'} `}>
      <Accordion open={open === 1} className={`mb-5 mt-10 rounded-lg border border-blue-gray-100 px-4`}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-purple-secondary-500 hover:!text-purple-secondary-700" : ""
          }`}
        >
          ¿Qué es HIPO POWER?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          El “HIPO POWER” es un enfoque de fisioterapia que se 
          centra en fortalecer y restaurar la funcionalidad del núcleo 
          del cuerpo. El núcleo se refiere a los músculos del abdomen, 
          la espalda baja, las caderas, la pelvis y los glúteos. Estos
           músculos son fundamentales para mantener la estabilidad del 
           cuerpo, permitir el movimiento y proteger la columna vertebral.
        </AccordionBody>
      </Accordion>
      </RevealWrapper>
      <RevealWrapper className={`${isDesktop ? 'w-2/3' : 'w-full px-4'} `}>
      <Accordion open={open === 2} className="mb-2  rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-purple-secondary-500 hover:!text-purple-secondary-700" : ""
          }`}
        >
          ¿Qué son los ejercicios hipopresivos?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Los ejercicios hipopresivos son una serie de técnicas
         respiratorias y posturales que buscan disminuir la presión 
         en las cavidades torácica, abdominal y pélvica. Estos ejercicios 
         implican la aspiración del abdomen y la apnea respiratoria, lo 
         que resulta en una “succión” o “aspiración” del diafragma.
        </AccordionBody>
      </Accordion>
      </RevealWrapper>
      <RevealWrapper className={`${isDesktop ? 'w-2/3' : 'w-full px-4'} `}>
      <Accordion open={open === 3} className="rounded-lg  border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-purple-secondary-500 hover:!text-purple-secondary-700" : ""
          }`}
        >
          Fisioterapia invasiva en piso pélvico
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
         Cristal Sarabia es experta en fisioterapia invasiva, piso pélvico y acupuntura. En sus tratamientos para el síndrome de dolor miofascial del piso pélvico, utiliza una visión integral con punción seca y neuromodulación, basados en conceptos neurofisiológicos y acupuntura, obteniendo resultados desde la primera sesión.

        </AccordionBody>
      </Accordion>
      </RevealWrapper>
      
    </>
  );
}
