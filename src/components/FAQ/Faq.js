"use client";
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import Faqs from "../SearchInput/Faqs";
const faqsData = [
  {
    id: 1,
    question: "¿Qué es la fisioterapia pélvica?",
    answer:
      "Es una rama de la fisioterapia que se centra en tratar problemas relacionados con el suelo pélvico.",
  },
  {
    id: 2,
    question: "¿Qué son los ejercicios hipopresivos?",
    answer:
      "Son ejercicios que reducen la presión en la cavidad abdominal, fortaleciendo los músculos del suelo pélvico.",
  },
  {
    id: 3,
    question: "¿Cómo se aborda el postparto inmediato?",
    answer:
      "Se enfoca en la recuperación física y emocional de la madre, incluyendo el cuidado del suelo pélvico.",
  },
  {
    id: 4,
    question: "¿Qué es la rehabilitación abdominal?",
    answer:
      "Es el proceso de fortalecer y recuperar la función de los músculos abdominales después de una lesión o cirugía.",
  },
  {
    id: 5,
    question: "¿Cómo puede ayudar la acupuntura en la fisioterapia?",
    answer:
      "La acupuntura puede aliviar el dolor y mejorar la función muscular en el tratamiento de disfunciones pélvicas.",
  },
  {
    id: 6,
    question: "¿Qué es la diastasis abdominal?",
    answer:
      "Es la separación de los músculos rectos del abdomen, común después del embarazo.",
  },
  {
    id: 7,
    question: "¿Cómo se abordan las disfunciones de suelo pélvico?",
    answer:
      "Mediante ejercicios específicos, terapias manuales y, en ocasiones, tratamientos quirúrgicos.",
  },
  {
    id: 8,
    question: "¿Qué es la incontinencia urinaria?",
    answer:
      "Es la pérdida involuntaria de orina, que puede ser tratada con fisioterapia pélvica.",
  },
  {
    id: 9,
    question: "¿Qué es la incontinencia fecal?",
    answer:
      "Es la incapacidad de controlar la evacuación, tratada con ejercicios de suelo pélvico y cambios dietéticos.",
  },
  {
    id: 10,
    question: "¿Qué es la disfunción sexual?",
    answer:
      "Es cualquier problema que impide disfrutar o realizar el acto sexual satisfactoriamente.",
  },
  {
    id: 11,
    question: "¿Qué son los prolapsos?",
    answer:
      "Es el descenso de los órganos pélvicos debido a la debilidad del suelo pélvico.",
  },
  {
    id: 12,
    question: "¿Qué son las disfunciones coloproctológicas?",
    answer:
      "Son problemas relacionados con el colon, recto y ano, incluyendo incontinencia y prolapsos.",
  },
  {
    id: 13,
    question:
      "¿Cuáles son los beneficios de la fisioterapia pélvica durante el embarazo?",
    answer:
      "La fisioterapia pélvica puede ayudar a prevenir y tratar problemas como la incontinencia urinaria y el dolor pélvico.",
  },
  {
    id: 14,
    question:
      "¿En qué consiste la terapia manual en el tratamiento de disfunciones de suelo pélvico?",
    answer:
      "La terapia manual incluye técnicas como el masaje y la movilización de tejidos para mejorar la función del suelo pélvico.",
  },
  {
    id: 15,
    question: "¿Qué es la biofeedback?",
    answer:
      "Es una técnica que utiliza sensores para medir la actividad muscular del suelo pélvico y ayudar al paciente a aprender a contraer y relajar estos músculos correctamente.",
  },
  {
    id: 16,
    question: "¿Cómo se evalúa la diástasis abdominal?",
    answer:
      "Se evalúa mediante la medición de la separación entre los músculos rectos del abdomen.",
  },
  {
    id: 17,
    question: "¿Qué ejercicios pueden ayudar a fortalecer el suelo pélvico?",
    answer:
      "Ejercicios como los Kegels y los hipopresivos son beneficiosos para fortalecer el suelo pélvico.",
  },
  {
    id: 19,
    question:
      "¿Qué papel juega la nutrición en la rehabilitación del suelo pélvico?",
    answer:
      "Una nutrición adecuada puede ayudar a mejorar la elasticidad y la fuerza del tejido muscular del suelo pélvico.",
  },
  {
    id: 20,
    question: "¿Cómo afecta el embarazo a la diástasis abdominal?",
    answer:
      "El embarazo puede causar la separación de los músculos abdominales debido al estiramiento del abdomen.",
  },
  {
    id: 21,
    question:
      "¿Qué técnicas de relajación se utilizan en fisioterapia pélvica?",
    answer:
      "Técnicas como la respiración profunda y la meditación pueden ayudar a relajar los músculos del suelo pélvico.",
  },
  {
    id: 22,
    question: "¿Qué es la terapia con láser en fisioterapia pélvica?",
    answer:
      "La terapia con láser puede ser utilizada para tratar el dolor y promover la cicatrización de tejidos en el área pélvica.",
  },
  {
    id: 23,
    question: "¿Cómo se diagnostican las disfunciones de suelo pélvico?",
    answer:
      "El diagnóstico puede incluir exámenes físicos, pruebas de imagen y estudios urodinámicos.",
  },
  {
    id: 24,
    question: "¿Qué es un pessary y cómo se utiliza?",
    answer:
      "Un pessary es un dispositivo que se inserta en la vagina para soportar los órganos pélvicos y tratar los prolapsos.",
  },
  {
    id: 25,
    question:
      "¿Qué papel juega la psicología en el tratamiento de la disfunción sexual?",
    answer:
      "La terapia psicológica puede ayudar a abordar los aspectos emocionales y mentales asociados con la disfunción sexual.",
  },
  {
    id: 26,
    question: "¿Cómo se puede prevenir la incontinencia urinaria?",
    answer:
      "La prevención puede incluir ejercicios del suelo pélvico, cambios en el estilo de vida y control de peso.",
  },
  {
    id: 27,
    question: "¿Qué es la estimulación magnética extracorpórea?",
    answer:
      "Es una técnica no invasiva que utiliza campos magnéticos para estimular los nervios y músculos del suelo pélvico.",
  },
  {
    id: 28,
    question: "¿Qué ejercicios se recomiendan para la recuperación postparto?",
    answer:
      "Se recomiendan ejercicios de bajo impacto, como caminar y ejercicios específicos para el suelo pélvico.",
  },
  {
    id: 29,
    question: "¿Qué es la cirugía reconstructiva pélvica?",
    answer:
      "Es una cirugía que se realiza para corregir problemas como la diástasis abdominal y los prolapsos.",
  },
  {
    id: 30,
    question: "¿Cómo se trata la disfunción coloproctológica?",
    answer:
      "El tratamiento puede incluir fisioterapia, medicamentos y, en algunos casos, cirugía.",
  },
];

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openId, setOpenId] = useState(null);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [faqs, setFaqs] = useState(faqsData);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id); 
  }
  const filteredFaqs = searchTerm
    ? faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className=" lg:w-full lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        Preguntas Frecuentes
      </h1>

      <div className=" lg:mt-12 rounded-lg bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
        <div className=" flex justify-between md:flex-row flex-col ">
          <div className=" md:mb-0 mb-8 md:text-left text-center">
            <h2 className=" font-medium text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
              Preguntas
            </h2>
            <p className=" font-normal text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
              Si no encuentra su respuesta, contáctenos, estaremos encantados de
              ayudarle.
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <div className=" rounded-lg gap-2  flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
              <SearchInput onSearch={setSearchTerm} />

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#8070b3"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#8070b3"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-8/12 w-full mx-auto">
        <div className="w-full md:px-6">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              {" "}
              
              <div className="flex justify-between items-center w-full">
                <div className="w-full">
                  {" "}
                
                  <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
                  <button
                    aria-label="toggler"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-secondary-600 w-full text-left flex justify-between items-center"
                    onClick={() => handleToggle(faq.id)}
                  >
                    <p className="font-medium text-base leading-6 md:leading-4 text-gray-800">
                      <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                        P{faq.id}.
                      </span>
                      {faq.question}
                    </p>
                    <svg
                      className={
                        "transform " +
                        (openId === faq.id ? "rotate-180" : "rotate-0")
                      }
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#8070b3"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                id="menu"
                className={
                  "mt-2 w-full " + (openId === faq.id ? "block" : "hidden")
                } // Añade un margen superior más pequeño
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!searchTerm && (
        <Faqs open={open} setOpen={setOpen}
        setOpen2={setOpen2} setOpen3={setOpen3} setOpen4={setOpen4} setOpen5={setOpen5}
        open2={open2} open3={open3} open4={open4} open5={open5}/>
      )}
      
    </div>
  );
};

export default Faq;
