import React, { useState, useEffect } from "react";
import useIsDesktop from "@/hooks/useIsDesktop";
const problemas = [
  { value: "Test-Salud-Pélvica", label: "Test Salud Pélvica" },
  { value: "Test-Postparto", label: "Test Postparto" },
  { value: "Test Endometriosis", label: "Test Endometriosis" },
  // ... Agrega más opciones según sea necesario
];

const preguntasRespuestas = {
  "Test-Salud-Pélvica": [
    // Preguntas relacionadas con la incontinencia urinaria
    {
      numero: 1,
      pregunta: "¿Has pasado por Parto natural?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 2,
      pregunta: "¿Has detectado estreñimiento crónico?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 3,
      pregunta: "¿Practicas deportes de impacto?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 4,
      pregunta: "¿Presentas obesidad?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 5,
      pregunta: "¿presentas enfermedades respiratorias crónicas y tabaquismo?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 6,
      pregunta: "¿Cirugía ginecológica o tratamientos agresivos?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 7,
      pregunta: "¿Padeces de Incontinencia urinaria o fecal?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 8,
      pregunta: "¿Molestias y dolor en la relación sexual?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 9,
      pregunta: "¿Prolapso de uno de los órganos pélvicos?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 10,
      pregunta: "¿Tienes sensación de pesadez en en la zona pélvica?",
      respuesta: "",
      diagnostico: "",
    },
  ],
  "Test-Postparto": [
    // Preguntas relacionadas con el prolapso de órganos pélvicos
    {
      numero: 1,
      pregunta: "¿Sientes que tienes incontinencia urinaria?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 2,
      pregunta: "¿Tienes Diastasis Abdominal?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 3,
      pregunta: "¿Tienes Dispareunia (Dolor en las relaciones sexuales)?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 4,
      pregunta: "¿Tienes cicatrices de cesárea? ",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 5,
      pregunta: "¿Sientes dolor lumbopélvico?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 6,
      pregunta: "¿Has tenido más de dos partos?",
      respuesta: "",
      diagnostico: "",
    },
  ],
  "Test Endometriosis": [
    // Preguntas relacionadas con el dolor pélvico
    {
      numero: 1,
      pregunta: "¿Períodos menstruales que provocan mucho dolor?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 2,
      pregunta:
        "¿Presentas menstruación abundante o sangrado entre dos períodos?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 3,
      pregunta: "¿Dolor durante las relaciones sexuales?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 4,
      pregunta: "¿Dolor en los glúteos durante el período menstrual?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 5,
      pregunta: "¿Sientes dolor al defecar?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 6,
      pregunta: "¿Sientes dolor al orinar?",
      respuesta: "",
      diagnostico: "",
    },
    {
      numero: 7,
      pregunta: "¿Fuiste a tu ginecólogo para comunicar estos dolores?",
      respuesta: "",
      diagnostico: "",
    },
  ],
  // ...
};
// const preguntasRespuestas1 = [
//     { numero: 1, pregunta: "¿Sientes pesadez o presión en la zona pélvica?", respuesta: "", diagnostico: "", problema: "dolor-pélvico" },
//     { numero: 2, pregunta: "¿Has experimentado pérdidas de orina al toser, estornudar o hacer ejercicio?", respuesta: "", diagnostico: "", problema: "dolor-pélvico" },
//     { numero: 3, pregunta: "¿Tienes dificultades para retener gases o heces?", respuesta: "", diagnostico: "" },
//     { numero: 4, pregunta: "¿Has tenido algún episodio de prolapso (descenso) de los órganos pélvicos?", respuesta: "", diagnostico: "", problema: "dolor-pélvico" },
//     { numero: 5, pregunta: "¿Experimentas dolor durante las relaciones sexuales?", respuesta: "", diagnostico: "", problema: "dolor-pélvico" },
//     { numero: 6, pregunta: "¿Has tenido cirugía abdominal o pélvica previa?", respuesta: "", diagnostico: "", problema: "incontinencia-urinaria" },
//     { numero: 7, pregunta: "¿Sientes debilidad en la musculatura del suelo pélvico?", respuesta: "", diagnostico: "", problema: "incontinencia-urinaria" },
//     { numero: 8, pregunta: "¿Practicas ejercicios abdominales o levantas objetos pesados regularmente?", respuesta: "", diagnostico: "" },
//     { numero: 9, pregunta: "¿Has notado cambios en la sensibilidad o función sexual?", respuesta: "", diagnostico: "" }
//   ];

const Quiz = () => {
  const [todasLasPreguntasRespondidas, setTodasLasPreguntasRespondidas] =
    useState(false);
  const manejarCambioProblema = (nuevoProblema) => {
    setProblemaSeleccionado(nuevoProblema);
    setPreguntaActual(0); // Reiniciar preguntaActual al cambiar de problema
  };
  const [mostrarDiagnostico, setMostrarDiagnostico] = useState(false);
  const [problemaSeleccionado, setProblemaSeleccionado] = useState(null);
  const isDesktop = useIsDesktop();
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [diagnostico, setDiagnostico] = useState(null);

  const manejarRespuesta = (indicePregunta, respuesta) => {
    // Actualizar respuestasUsuario
    setRespuestasUsuario((prevRespuestas) => ({
      ...prevRespuestas,
      [indicePregunta]: respuesta,
    }));

    const preguntasProblema = preguntasRespuestas[problemaSeleccionado];
    const preguntaActual = preguntasProblema[indicePregunta];

    // Encontrar el índice de la siguiente pregunta
    const indiceSiguientePregunta = preguntasProblema.findIndex(
      (pregunta) => pregunta.numero === preguntaActual.numero
    );

    // Si se encontró la siguiente pregunta, actualizar preguntaActual
    if (
      indiceSiguientePregunta !== -1 &&
      indiceSiguientePregunta < preguntasProblema.length - 1
    ) {
      setPreguntaActual(indiceSiguientePregunta + 1);
    } else {
      // Todas las preguntas han sido respondidas
      // Calcular el diagnóstico (si aún no se ha hecho)
      // ... (tu lógica para calcular el diagnóstico)
      setMostrarDiagnostico(true); // Mostrar el diagnóstico
    }
  };

  useEffect(() => {
    const puntaje = Object.values(respuestasUsuario).filter(
      (respuesta) => respuesta === "Sí"
    ).length;
    if (puntaje >= 4) {
      setDiagnostico(
        "Te recomiendo que me consultes de inmediato. Puede haber una afección seria que requiera atención especializada."
      );
    } else if (puntaje >= 3) {
      setDiagnostico(
        "Es importante que busques atención médica. Un especialista puede evaluar tus síntomas y recomendarte el tratamiento adecuado."
      );
    } else if (puntaje >= 2) {
      setDiagnostico(
        "Podría haber una afección en la zona. Consultame para un diagnóstico adecuado."
      );
    } else if (puntaje >= 1) {
      setDiagnostico(
        "Es posible que haya algún problema. Te recomiendo consultarme para obtener una evaluación más precisa"
      );
    } else {
      setDiagnostico(
        "No parece haber una afección grave. Aún así, consulta a un profesional para evaluar tu situación."
      );
    }

    const todasRespondidas = Object.values(respuestasUsuario).every(
      (respuesta) => respuesta !== ""
    );
    setTodasLasPreguntasRespondidas(todasRespondidas);
  }, [respuestasUsuario]);

  return (
    <div>
      <div className="mb-10">
  <p className="text-lg text-white mb-4 md:text-xl lg:text-xl xl:text-xl font-bold">
    Selecciona el problema que más te afecta:
  </p>
  <select
    className="w-full p-4 rounded-lg shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-pink-secondary-700 focus:outline-none"
    value={problemaSeleccionado || ""}
    onChange={(e) => manejarCambioProblema(e.target.value)}
  >
    <option value={null}>Seleccionar...</option>
    {problemas.map((problema) => (
      <option key={problema.value} value={problema.value}>
        {problema.label}
      </option>
    ))}
  </select>
</div>

      {problemaSeleccionado && !mostrarDiagnostico && (
        <div
          className=""
          key={
            problemaSeleccionado &&
            preguntasRespuestas[problemaSeleccionado] &&
            preguntasRespuestas[problemaSeleccionado][preguntaActual]
          }
        >
          <p className="text-xl mb-10 md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">
            {preguntasRespuestas[problemaSeleccionado][preguntaActual].pregunta}
          </p>
          <div
            className={`flex gap-6 ${
              isDesktop
                ? " items-start  justify-start"
                : "items-center justify-center"
            } `}
          >
            <button
              className="lg:mt-8 py-3 lg:py-2 px-10 lg:px-10 bg-white font-bold text-fuchsia-pink-500 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
              onClick={() => manejarRespuesta(preguntaActual, "Sí")}
            >
              Sí
            </button>
            <button
              className="lg:mt-8 py-3 lg:py-2 px-10 lg:px-10 bg-white font-bold text-pink-secondary-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
              onClick={() => manejarRespuesta(preguntaActual, "No")}
            >
              No
            </button>
          </div>
        </div>
      )}
      <div className="text-lg md:text-xl lg:text-xl xl:text-xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">
        {mostrarDiagnostico && (
          <div className="flex-col">
            <p className="mb-5">{diagnostico}</p>
            <a
              href="https://linktr.ee/cristalsarabia_"
              target="blank_"
              className="inline-flex border-2  border-fuchsia-pink-300 text-base shadow-lg justify-center items-center py-2 px-3 font-medium text-center text-white rounded-lg bg-fuchsia-pink-400 hover:bg-fuchsia-pink-600"
            >
              Contacto
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
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
            </a>
          </div>
        )}

        {!problemaSeleccionado && (
          <p>Por favor, selecciona un problema para comenzar.</p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
