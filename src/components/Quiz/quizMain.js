import React, { useState, useEffect } from "react";

const preguntasRespuestas = [
    { numero: 1, pregunta: "¿Sientes pesadez o presión en la zona pélvica?", respuesta: "", diagnostico: "" },
    { numero: 2, pregunta: "¿Has experimentado pérdidas de orina al toser, estornudar o hacer ejercicio?", respuesta: "", diagnostico: "" },
    { numero: 3, pregunta: "¿Tienes dificultades para retener gases o heces?", respuesta: "", diagnostico: "" },
    { numero: 4, pregunta: "¿Has tenido algún episodio de prolapso (descenso) de los órganos pélvicos?", respuesta: "", diagnostico: "" },
    { numero: 5, pregunta: "¿Experimentas dolor durante las relaciones sexuales?", respuesta: "", diagnostico: "" },
    { numero: 6, pregunta: "¿Has tenido cirugía abdominal o pélvica previa?", respuesta: "", diagnostico: "" },
    { numero: 7, pregunta: "¿Sientes debilidad en la musculatura del suelo pélvico?", respuesta: "", diagnostico: "" },
    { numero: 8, pregunta: "¿Tienes antecedentes de embarazo o parto vaginal?", respuesta: "", diagnostico: "" },
    { numero: 9, pregunta: "¿Practicas ejercicios abdominales o levantas objetos pesados regularmente?", respuesta: "", diagnostico: "" },
    { numero: 10, pregunta: "¿Has notado cambios en la sensibilidad o función sexual?", respuesta: "", diagnostico: "" }
  ];
  
  const Quiz = () => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestasUsuario, setRespuestasUsuario] = useState({});
    const [diagnostico, setDiagnostico] = useState(null);
  
    const manejarRespuesta = (numeroPregunta, respuesta) => {
      setRespuestasUsuario((prevRespuestas) => ({
        ...prevRespuestas,
        [numeroPregunta]: respuesta,
      }));
  
      // Cambia a la siguiente pregunta siempre
      setPreguntaActual((prevPregunta) => prevPregunta + 1);
    };
  
    useEffect(() => {
      // Calcula el puntaje
      const puntaje = Object.values(respuestasUsuario).filter(
        (respuesta) => respuesta.toLowerCase() === 'sí'
      ).length;
  
      // Asigna el diagnóstico según el puntaje
      if (puntaje >= 4) {
        setDiagnostico('Te recomiendo que me consultes de inmediato. Puede haber una afección seria en el suelo pélvico que requiera atención especializada.');
      } else if (puntaje >= 3) {
        setDiagnostico('Es importante que busques atención médica. Un especialista puede evaluar tus síntomas y recomendarte el tratamiento adecuado.')
      } else if (puntaje >= 2) {
        setDiagnostico('Podría haber una afección en la zona pélvica. Consulta a un fisioterapeuta para un diagnóstico adecuado.')
      } else if (puntaje >= 1) {
        setDiagnostico('Es posible que haya algún problema. Te recomiendo consultar con un especialista para obtener una evaluación más precisa')
      } else {
        setDiagnostico('No parece haber una afección grave. Aún así, consulta a un profesional para evaluar tu situación.');
      }
    }, [respuestasUsuario]);
  
    return (
      <div>
        {preguntaActual < preguntasRespuestas.length ? (
          <div className="" key={preguntasRespuestas[preguntaActual].numero}>
            <p className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">{preguntasRespuestas[preguntaActual].pregunta}</p>
            <div className="flex gap-6">
                <button className="lg:mt-8 py-3 lg:py-2 lg:px-10 bg-white font-bold text-fuchsia-pink-500 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none" onClick={() => manejarRespuesta(preguntasRespuestas[preguntaActual].numero, 'Sí')}>Sí</button>
                <button className="lg:mt-8 py-3 lg:py-2 lg:px-10 bg-white font-bold text-pink-secondary-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none" onClick={() => manejarRespuesta(preguntasRespuestas[preguntaActual].numero, 'No')}>No</button>
            </div>
          </div>
        ) : (
          <div className="text-lg md:text-xl lg:text-xl xl:text-xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center">
            {diagnostico && <p>{diagnostico}</p> }
            <a
                href="https://linktr.ee/cristalsarabia_"
                target="blank_"
                className="inline-flex mt-5 text-xl shadow-lg justify-center items-center py-3 px-5 font-medium text-center text-pink-secondary-700 hover:text-white rounded-lg bg-white hover:bg-white/20"
            >
                Contacto
                <svg
                className="w-4 h-4 ms-2 rtl:rotate-180"
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
      </div>
    );
  };
  
  export default Quiz;