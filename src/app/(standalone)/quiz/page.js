"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const QUIZZES = [
  {
    value: "pelvic-health",
    label: "Test Salud Pélvica",
    description: "Evalúa el estado general de tu piso pélvico",
  },
  {
    value: "postpartum",
    label: "Test Postparto",
    description: "Para mamás en etapa de recuperación",
  },
  {
    value: "endometriosis",
    label: "Test Endometriosis",
    description: "Identifica síntomas relacionados",
  },
];

const QUESTIONS = {
  "pelvic-health": [
    {
      id: 1,
      type: "single",
      question: "Primero, cuéntanos qué te trae aquí hoy",
      options: [
        "Estoy experimentando dolor o molestias físicas",
        "Quiero aprender más sobre mi piso pélvico",
        "No estoy segura si mis síntomas están relacionados con el piso pélvico",
        "Mi médico me sugirió explorar fisioterapia pélvica",
      ],
    },
    {
      id: 2,
      type: "multi",
      question: "¿Tienes algún problema de vejiga?",
      subtitle:
        "Selecciona todos los que apliquen — incluso si solo ocasionalmente",
      options: [
        "Me escapo cuando toso, estornudo o hago ejercicio",
        "Cuando tengo que orinar, apenas puedo aguantar",
        "Orino más de una vez cada 2 horas",
        "Me cuesta empezar el flujo de orina",
        "Orino y luego tengo que orinar de nuevo inmediatamente",
        "Tengo infecciones urinarias crónicas (y los antibióticos no ayudan)",
        "Ninguno de los anteriores",
      ],
      infoMessage: "Esa sensación frustrante podría ser urgencia urinaria.",
    },
    {
      id: 3,
      type: "slider",
      question: "¿Con qué frecuencia te preocupa no llegar al baño a tiempo?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const bladderIssues = getAnswer(2); // respuesta de pregunta 2
        return (
          Array.isArray(bladderIssues) &&
          (bladderIssues.includes(
            "Cuando tengo que orinar, apenas puedo aguantar"
          ) ||
            bladderIssues.includes("Orino más de una vez cada 2 horas"))
        );
      },
    },
    {
      id: 4,
      type: "single",
      question: "¿Cuántas veces sueles orinar en un período de 2 horas?",
      options: [
        "2 veces",
        "3 veces",
        "4 veces",
        "5 veces",
        "6 veces",
        "7 veces",
        "8 o más veces",
      ],
      condition: (answers, getAnswer) => {
        const bladderIssues = getAnswer(2); // respuesta de pregunta 2
        return (
          Array.isArray(bladderIssues) &&
          bladderIssues.includes("Orino más de una vez cada 2 horas")
        );
      },
      infoMessage:
        "Sentir que siempre necesitas un baño cerca puede ser una señal de frecuencia urinaria.",
    },
    {
      id: 5,
      type: "slider",
      question: "Cuando te escapa orina, ¿cuánta cantidad sale?",
      min: "Solo unas gotas",
      max: "Una cantidad considerable",
      steps: 5,
      condition: (answers, getAnswer) => {
        const bladderIssues = getAnswer(2); // respuesta de pregunta 2
        return (
          Array.isArray(bladderIssues) &&
          bladderIssues.includes(
            "Me escapo cuando toso, estornudo o hago ejercicio"
          )
        );
      },
      infoMessage:
        "No eres la única. 1 de cada 3 mujeres tiene escapes de orina, también conocido como incontinencia urinaria.",
    },
    {
      id: 6,
      type: "slider",
      question: "¿Con qué frecuencia es difícil empezar el flujo de orina?",
      min: "Ocasionalmente",
      max: "Cada vez",
      steps: 5,
      condition: (answers, getAnswer) => {
        const bladderIssues = getAnswer(2); // respuesta de pregunta 2
        return (
          Array.isArray(bladderIssues) &&
          bladderIssues.includes("Me cuesta empezar el flujo de orina")
        );
      },
      infoMessage:
        "Este síntoma está relacionado con la hesitancia urinaria y lo vemos *todo* el tiempo.",
    },
    {
      id: 7,
      type: "multi",
      question:
        "Tu piso pélvico impacta el sexo y el orgasmo. ¿Tienes algún problema?",
      subtitle:
        "Selecciona todos los que apliquen — incluso si solo ocasionalmente",
      options: [
        "Tengo dolor con el sexo (penetración vaginal/anal o contacto externo)",
        "Me toma mucho tiempo llegar al orgasmo",
        "Tengo orgasmos insatisfactorios",
        "Tengo dolor durante o después del orgasmo",
        "No puedo llegar al orgasmo",
        "Ninguno de los anteriores",
      ],
    },
    {
      id: 8,
      type: "slider",
      question: "¿Con qué frecuencia tus orgasmos son insatisfactorios?",
      min: "Ocasionalmente",
      max: "Cada vez",
      steps: 5,
      condition: (answers, getAnswer) => {
        const sexualIssues = getAnswer(7); // respuesta de pregunta 7
        return (
          Array.isArray(sexualIssues) &&
          sexualIssues.includes("Tengo orgasmos insatisfactorios")
        );
      },
      infoMessage:
        "No eres la única. La fisioterapia pélvica puede potenciar tus orgasmos.",
    },
    {
      id: 9,
      type: "slider",
      question: "¿Con qué frecuencia no puedes llegar al orgasmo?",
      min: "Ocasionalmente",
      max: "Cada vez",
      steps: 5,
      condition: (answers, getAnswer) => {
        const sexualIssues = getAnswer(7); // respuesta de pregunta 7
        return (
          Array.isArray(sexualIssues) &&
          sexualIssues.includes("No puedo llegar al orgasmo")
        );
      },
      infoMessage:
        "Eso es probablemente más común de lo que piensas. Más de 1 de cada 10 mujeres nunca ha tenido un orgasmo.",
    },
    {
      id: 10,
      type: "slider",
      question:
        "¿Con qué frecuencia tienes dolor durante o después del orgasmo?",
      min: "Ocasionalmente",
      max: "Cada vez",
      steps: 5,
      condition: (answers, getAnswer) => {
        const sexualIssues = getAnswer(7); // respuesta de pregunta 7
        return (
          Array.isArray(sexualIssues) &&
          sexualIssues.includes("Tengo dolor durante o después del orgasmo")
        );
      },
      infoMessage:
        "Hemos ayudado a innumerables pacientes a superar el dolor con el orgasmo.",
    },
    {
      id: 11,
      type: "multi",
      question: "Ahora hablemos de evacuación. ¿Tienes algún problema?",
      subtitle:
        "Selecciona todos los que apliquen — incluso si solo ocasionalmente",
      options: [
        "Me escapo de heces o gases",
        "Tengo que hacer esfuerzo para evacuar",
        "Siento que no puedo evacuar todo",
        "Me duele cuando evacuo",
        "Ninguno de los anteriores",
      ],
      infoMessage:
        "Esa sensación de evacuación incompleta puede ser un síntoma de estreñimiento.",
    },
    {
      id: 12,
      type: "slider",
      question: "¿Con qué frecuencia sientes que no puedes evacuar todo?",
      min: "Ocasionalmente",
      max: "Cada vez",
      steps: 5,
      condition: (answers, getAnswer) => {
        const bowelIssues = getAnswer(11); // respuesta de pregunta 11
        return (
          Array.isArray(bowelIssues) &&
          bowelIssues.includes("Siento que no puedo evacuar todo")
        );
      },
      infoMessage:
        "Hacer esfuerzo no es divertido — tu piso pélvico podría ser parte del problema.",
    },
    {
      id: 13,
      type: "slider",
      question: "¿Con qué frecuencia tienes que hacer esfuerzo para evacuar?",
      min: "Ocasionalmente",
      max: "Cada vez",
      steps: 5,
      condition: (answers, getAnswer) => {
        const bowelIssues = getAnswer(11); // respuesta de pregunta 11
        return (
          Array.isArray(bowelIssues) &&
          bowelIssues.includes("Tengo que hacer esfuerzo para evacuar")
        );
      },
    },
    {
      id: 14,
      type: "multi",
      question: "¿Tienes alguno de estos otros síntomas pélvicos comunes?",
      subtitle:
        "Selecciona todos los que apliquen — incluso si solo ocasionalmente",
      options: [
        'Mi vulva se siente "entumecida" cuando me siento o ando en bicicleta',
        "Mi vulva pica o arde y he descartado una infección de piel/levadura",
        "Siento que algo se está cayendo de mi vagina",
        "Me duele/me molesta el coxis cuando me siento",
        "Ninguno de los anteriores",
      ],
    },
    {
      id: 15,
      type: "slider",
      question:
        "¿Con qué frecuencia sientes entumecimiento o molestia en la vulva al sentarte?",
      min: "Ocasionalmente",
      max: "Cada vez",
      steps: 5,
      condition: (answers, getAnswer) => {
        const otherSymptoms = getAnswer(14); // respuesta de pregunta 14
        return (
          Array.isArray(otherSymptoms) &&
          otherSymptoms.includes(
            'Mi vulva se siente "entumecida" cuando me siento o ando en bicicleta'
          )
        );
      },
      infoMessage:
        "Esa molestia de entumecimiento puede ser una señal de un piso pélvico demasiado tenso.",
    },
    {
      id: 16,
      type: "boolean",
      question:
        "¿Haces ejercicios de Kegel u otros ejercicios de piso pélvico?",
      infoMessage:
        "Útiles en algunos casos, los Kegels también pueden empeorar ciertos síntomas pélvicos. Consulta con un fisioterapeuta antes de hacer Kegels.",
    },
    {
      id: 17,
      type: "multi",
      question: "¿Cuáles de estos factores aplican a tu caso?",
      subtitle: "Selecciona todos los que apliquen",
      options: [
        "He tenido uno o más partos vaginales",
        "He tenido cesárea",
        "Practico deportes de impacto",
        "Tengo sobrepeso",
        "Sufro de estreñimiento crónico",
        "He tenido cirugía ginecológica",
        "Estoy en la menopausia o perimenopausia",
      ],
    },
    {
      id: 18,
      type: "slider",
      question: "¿Qué tanto afectan estos síntomas tu calidad de vida?",
      min: "Nada",
      max: "Muchísimo",
      steps: 5,
    },
    {
      id: 19,
      type: "single",
      question: "¿Has consultado antes con un especialista en piso pélvico?",
      options: [
        "Sí, y recibí tratamiento",
        "Sí, pero no continué",
        "No, pero me interesa",
        "No sabía que existía esta especialidad",
      ],
    },
  ],
  postpartum: [
    {
      id: 1,
      type: "single",
      question: "Primero, cuéntanos qué te trae aquí hoy",
      options: [
        "Estoy experimentando síntomas físicos después del parto",
        "Quiero evaluar mi recuperación postparto",
        "Tengo dudas sobre cuándo retomar actividad física",
        "Mi médico me recomendó fisioterapia pélvica",
      ],
    },
    {
      id: 2,
      type: "single",
      question: "¿Hace cuánto tiempo fue tu último parto?",
      options: [
        "Menos de 6 semanas",
        "6 semanas a 3 meses",
        "3 a 6 meses",
        "6 meses a 1 año",
        "Más de 1 año",
      ],
    },
    {
      id: 3,
      type: "single",
      question: "¿Qué tipo de parto tuviste?",
      options: [
        "Parto vaginal",
        "Cesárea",
        "Parto instrumentado (fórceps/ventosa)",
        "Parto vaginal con episiotomía",
      ],
    },
    {
      id: 4,
      type: "multi",
      question: "¿Qué síntomas estás experimentando?",
      subtitle:
        "Selecciona todos los que apliquen — incluso si solo ocasionalmente",
      options: [
        "Me escapo de orina al toser, estornudar o hacer ejercicio",
        "Siento urgencia para ir al baño",
        "Dolor en la cicatriz (cesárea o episiotomía)",
        "Dolor durante las relaciones sexuales",
        "Sensación de debilidad o pesadez en el abdomen",
        "Dolor lumbar o pélvico",
        "Siento que algo se está cayendo de mi vagina",
        "Dificultad para evacuar",
        "Ninguno de los anteriores",
      ],
      infoMessage:
        "El postparto es una etapa de grandes cambios. No estás sola en esto.",
    },
    {
      id: 5,
      type: "slider",
      question: "¿Con qué frecuencia experimentas escapes de orina?",
      min: "Nunca",
      max: "Constantemente",
      steps: 5,
      condition: (answers, getAnswer) => {
        const symptoms = getAnswer(4);
        return (
          Array.isArray(symptoms) &&
          symptoms.includes(
            "Me escapo de orina al toser, estornudar o hacer ejercicio"
          )
        );
      },
      infoMessage:
        "La incontinencia postparto es común pero no normal. La fisioterapia puede ayudarte.",
    },
    {
      id: 6,
      type: "slider",
      question: "¿Con qué frecuencia sientes urgencia para ir al baño?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const symptoms = getAnswer(4);
        return (
          Array.isArray(symptoms) &&
          symptoms.includes("Siento urgencia para ir al baño")
        );
      },
    },
    {
      id: 7,
      type: "slider",
      question: "¿Qué tan intenso es el dolor en tu cicatriz?",
      min: "Sin dolor",
      max: "Muy intenso",
      steps: 5,
      condition: (answers, getAnswer) => {
        const symptoms = getAnswer(4);
        return (
          Array.isArray(symptoms) &&
          symptoms.includes("Dolor en la cicatriz (cesárea o episiotomía)")
        );
      },
      infoMessage:
        "El dolor en la cicatriz puede limitar tu movilidad. La fisioterapia puede ayudar a mejorar la cicatrización.",
    },
    {
      id: 8,
      type: "slider",
      question:
        "¿Con qué frecuencia tienes dolor durante las relaciones sexuales?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const symptoms = getAnswer(4);
        return (
          Array.isArray(symptoms) &&
          symptoms.includes("Dolor durante las relaciones sexuales")
        );
      },
      infoMessage:
        "El dolor durante el sexo postparto es más común de lo que piensas. Hay soluciones.",
    },
    {
      id: 9,
      type: "slider",
      question: "¿Qué tan intenso es el dolor lumbar o pélvico?",
      min: "Sin dolor",
      max: "Muy intenso",
      steps: 5,
      condition: (answers, getAnswer) => {
        const symptoms = getAnswer(4);
        return (
          Array.isArray(symptoms) && symptoms.includes("Dolor lumbar o pélvico")
        );
      },
    },
    {
      id: 10,
      type: "slider",
      question:
        "¿Con qué frecuencia sientes pesadez o sensación de que algo se cae?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const symptoms = getAnswer(4);
        return (
          Array.isArray(symptoms) &&
          symptoms.includes("Siento que algo se está cayendo de mi vagina")
        );
      },
      infoMessage:
        "Esta sensación puede indicar un prolapso. La fisioterapia pélvica puede ayudar a fortalecer el soporte.",
    },
    {
      id: 11,
      type: "boolean",
      question: "¿Has notado una separación en tu abdomen (diástasis)?",
      condition: (answers, getAnswer) => {
        const symptoms = getAnswer(4);
        return (
          Array.isArray(symptoms) &&
          symptoms.includes("Sensación de debilidad o pesadez en el abdomen")
        );
      },
      infoMessage:
        "La diástasis abdominal es común después del parto. Con el tratamiento adecuado puede mejorar significativamente.",
    },
    {
      id: 12,
      type: "slider",
      question: "¿Qué tanto te preocupa tu recuperación?",
      min: "Poco",
      max: "Mucho",
      steps: 5,
    },
    {
      id: 13,
      type: "single",
      question: "¿Te gustaría retomar la actividad física?",
      options: [
        "Sí, quiero entrenar",
        "No, prefiero no entrenar",
        "Tengo dudas sobre si es seguro",
      ],
      infoMessage:
        "Retomar el ejercicio de forma segura es posible con la guía adecuada.",
    },
    {
      id: 14,
      type: "multi",
      question: "¿Cuáles de estos factores aplican a tu caso?",
      subtitle: "Selecciona todos los que apliquen",
      options: [
        "Fue mi primer parto",
        "Tuve múltiples partos",
        "Tuve un parto muy largo",
        "Tuve un parto muy rápido",
        "Tuve un bebé grande (más de 3.5 kg)",
        "Tuve gemelos o múltiples",
        "Tuve complicaciones durante el embarazo",
      ],
    },
    {
      id: 15,
      type: "slider",
      question: "¿Qué tanto afectan estos síntomas tu calidad de vida?",
      min: "Nada",
      max: "Muchísimo",
      steps: 5,
    },
    {
      id: 16,
      type: "single",
      question: "¿Has consultado antes con un especialista en piso pélvico?",
      options: [
        "Sí, y recibí tratamiento",
        "Sí, pero no continué",
        "No, pero me interesa",
        "No sabía que existía esta especialidad",
      ],
    },
  ],
  endometriosis: [
    {
      id: 1,
      type: "single",
      question: "Primero, cuéntanos qué te trae aquí hoy",
      options: [
        "Estoy experimentando dolor pélvico intenso",
        "Tengo diagnóstico de endometriosis o adenomiosis",
        "Sospecho que puedo tener endometriosis",
        "Quiero entender mejor mi dolor",
      ],
    },
    {
      id: 2,
      type: "single",
      question: "¿Tienes diagnóstico de endometriosis o adenomiosis?",
      options: [
        "Sí, tengo diagnóstico confirmado",
        "Estoy en proceso de diagnóstico",
        "Sospecho que puedo tenerla",
        "No, pero tengo síntomas similares",
      ],
    },
    {
      id: 3,
      type: "slider",
      question: "¿Qué tan intenso es tu dolor menstrual?",
      min: "Leve",
      max: "Incapacitante",
      steps: 5,
      infoMessage:
        "El dolor menstrual intenso no es normal. Tu experiencia es válida.",
    },
    {
      id: 4,
      type: "multi",
      question: "¿Cuándo experimentas dolor?",
      subtitle:
        "Selecciona todos los que apliquen — incluso si solo ocasionalmente",
      options: [
        "Durante la menstruación",
        "Durante las relaciones sexuales",
        "Al evacuar",
        "Al orinar",
        "De forma constante, sin importar el momento",
        "Durante la ovulación",
        "Ninguno de los anteriores",
      ],
    },
    {
      id: 5,
      type: "slider",
      question:
        "¿Con qué frecuencia tienes dolor durante las relaciones sexuales?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const painTimes = getAnswer(4);
        return (
          Array.isArray(painTimes) &&
          painTimes.includes("Durante las relaciones sexuales")
        );
      },
      infoMessage:
        "El dolor durante el sexo en endometriosis es común. La fisioterapia pélvica puede ayudar.",
    },
    {
      id: 6,
      type: "slider",
      question: "¿Con qué frecuencia tienes dolor al evacuar?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const painTimes = getAnswer(4);
        return Array.isArray(painTimes) && painTimes.includes("Al evacuar");
      },
    },
    {
      id: 7,
      type: "slider",
      question: "¿Con qué frecuencia tienes dolor al orinar?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const painTimes = getAnswer(4);
        return Array.isArray(painTimes) && painTimes.includes("Al orinar");
      },
    },
    {
      id: 8,
      type: "slider",
      question: "¿Con qué frecuencia el dolor afecta tus actividades diarias?",
      min: "Raramente",
      max: "Siempre",
      steps: 5,
      infoMessage:
        "El dolor crónico puede cambiar la forma en que te relacionas con tu cuerpo. Hay esperanza.",
    },
    {
      id: 9,
      type: "boolean",
      question: "¿Tienes sangrados muy abundantes o prolongados?",
      infoMessage:
        "Los sangrados abundantes pueden ser parte de la endometriosis o adenomiosis.",
    },
    {
      id: 10,
      type: "multi",
      question: "¿Tienes alguno de estos otros síntomas?",
      subtitle:
        "Selecciona todos los que apliquen — incluso si solo ocasionalmente",
      options: [
        "Fatiga constante",
        "Distensión abdominal (hinchazón)",
        "Náuseas o vómitos durante la menstruación",
        "Dolor de espalda baja",
        "Dificultad para quedar embarazada",
        "Dolor al sentarse",
        "Ninguno de los anteriores",
      ],
    },
    {
      id: 11,
      type: "slider",
      question: "¿Con qué frecuencia experimentas fatiga?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const otherSymptoms = getAnswer(10);
        return (
          Array.isArray(otherSymptoms) &&
          otherSymptoms.includes("Fatiga constante")
        );
      },
      infoMessage:
        'La fatiga en endometriosis es real y puede ser debilitante. No es solo "estar cansada".',
    },
    {
      id: 12,
      type: "slider",
      question: "¿Con qué frecuencia experimentas distensión abdominal?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      condition: (answers, getAnswer) => {
        const otherSymptoms = getAnswer(10);
        return (
          Array.isArray(otherSymptoms) &&
          otherSymptoms.includes("Distensión abdominal (hinchazón)")
        );
      },
    },
    {
      id: 13,
      type: "boolean",
      question: "¿Has tenido cirugía por endometriosis?",
      condition: (answers, getAnswer) => {
        const diagnosis = getAnswer(2);
        return (
          diagnosis === "Sí, tengo diagnóstico confirmado" ||
          diagnosis === "Estoy en proceso de diagnóstico"
        );
      },
      infoMessage:
        "La fisioterapia pélvica postquirúrgica puede ayudar a mejorar la recuperación y reducir el dolor residual.",
    },
    {
      id: 14,
      type: "slider",
      question:
        "¿Con qué frecuencia sientes que tu dolor no es tomado en serio?",
      min: "Nunca",
      max: "Siempre",
      steps: 5,
      infoMessage:
        "Tu dolor es real y válido. Mereces ser escuchada y recibir el tratamiento adecuado.",
    },
    {
      id: 15,
      type: "multi",
      question: "¿Qué tratamientos has probado?",
      subtitle: "Selecciona todos los que apliquen",
      options: [
        "Anticonceptivos hormonales",
        "Analgésicos (ibuprofeno, paracetamol, etc.)",
        "Cirugía",
        "Terapia hormonal",
        "Ninguno",
        "Otros tratamientos médicos",
      ],
    },
    {
      id: 16,
      type: "slider",
      question: "¿Qué tanto afecta el dolor tu calidad de vida?",
      min: "Nada",
      max: "Muchísimo",
      steps: 5,
    },
    {
      id: 17,
      type: "boolean",
      question: "¿Has consultado antes con un fisioterapeuta pélvico?",
      infoMessage:
        "La fisioterapia pélvica es parte fundamental del manejo multidisciplinario de la endometriosis.",
    },
    {
      id: 18,
      type: "slider",
      question:
        "¿Qué tanto te preocupa el impacto de estos síntomas en tu futuro?",
      min: "Poco",
      max: "Mucho",
      steps: 5,
    },
  ],
};

const INFO_MESSAGES = [
  "No estás sola. La fisioterapia pélvica puede ayudarte.",
  "Tu cuerpo merece atención especializada.",
  "El dolor no es normal. Hay soluciones.",
  "1 de cada 3 mujeres tiene problemas de piso pélvico. No eres la única.",
  "La fisioterapia pélvica puede mejorar significativamente tu calidad de vida.",
];

function getDiagnosis(answers, quizType) {
  let score = 0;

  Object.values(answers).forEach((answer) => {
    if (answer === "yes" || answer === true) score += 2;
    if (typeof answer === "number" && answer >= 3) score += answer - 2;
    if (Array.isArray(answer)) score += answer.length;
    if (typeof answer === "string" && answer.includes("Sí")) score += 1;
  });

  if (score >= 10) {
    return {
      level: "high",
      title: "tu cuerpo necesita atención especializada",
      message:
        "Basándome en tus respuestas, hay indicadores importantes que sugieren que podrías beneficiarte significativamente de la fisioterapia pélvica. Te recomiendo agendar una valoración para evaluar tu caso de forma personalizada.",
      cta: "Agenda tu valoración",
    };
  } else if (score >= 5) {
    return {
      level: "medium",
      title: "una valoración preventiva puede ser útil",
      message:
        "Tus respuestas indican algunos síntomas que, aunque quizás no sean severos ahora, podrían beneficiarse de atención preventiva. Una consulta puede ayudarte a entender mejor tu cuerpo y prevenir complicaciones.",
      cta: "Solicitar información",
    };
  }
  return {
    level: "low",
    title: "tu salud pélvica parece estar bien",
    message:
      "Según tus respuestas, no hay indicadores urgentes. Sin embargo, si en algún momento notas cambios o tienes dudas, no dudes en consultar. La prevención siempre es una buena inversión.",
    cta: "Conocer más",
  };
}

function BackgroundDecoration() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* Large blobs */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-pink-200/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-fuchsia-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-20 w-[350px] h-[350px] bg-purple-secondary-200/50 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] bg-fuchsia-pink-100/60 rounded-full blur-3xl" />

      {/* Medium accent blobs */}
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-secondary-300/30 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-fuchsia-pink-200/40 rounded-full blur-2xl" />

      {/* Floating circles - larger and more visible */}
      <div className="absolute bottom-32 left-[15%] w-8 h-8 bg-fuchsia-pink-300/70 rounded-full" />
      <div className="absolute bottom-48 right-[20%] w-6 h-6 bg-fuchsia-pink-400/60 rounded-full" />
      <div className="absolute bottom-20 right-[35%] w-5 h-5 bg-purple-secondary-400/50 rounded-full" />
      <div className="absolute top-[30%] left-[10%] w-7 h-7 bg-fuchsia-pink-300/60 rounded-full" />
      <div className="absolute top-[25%] right-[12%] w-5 h-5 bg-fuchsia-pink-400/50 rounded-full" />
      <div className="absolute top-[60%] right-[8%] w-6 h-6 bg-purple-secondary-300/60 rounded-full" />
      <div className="absolute bottom-[40%] left-[8%] w-4 h-4 bg-fuchsia-pink-500/40 rounded-full" />

      {/* Decorative rings */}
      <div className="absolute bottom-40 right-[10%] w-24 h-24 border-2 border-fuchsia-pink-300/30 rounded-full" />
      <div className="absolute top-[20%] left-[20%] w-32 h-32 border-2 border-purple-secondary-200/30 rounded-full" />
      <div className="absolute top-[50%] right-[25%] w-16 h-16 border-2 border-fuchsia-pink-200/40 rounded-full" />
    </div>
  );
}

// Question Components
function SingleSelect({ question, value, onChange }) {
  return (
    <div className="space-y-3">
      {question.options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onChange(option)}
          className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
            value === option
              ? "border-fuchsia-pink-500 bg-fuchsia-pink-50"
              : "border-gray-200 bg-white hover:border-fuchsia-pink-300"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              value === option ? "border-fuchsia-pink-500" : "border-gray-300"
            }`}
          >
            {value === option && (
              <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-pink-500" />
            )}
          </div>
          <span className="text-gray-800">{option}</span>
        </button>
      ))}
    </div>
  );
}

function MultiSelect({ question, value = [], onChange }) {
  const toggleOption = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="space-y-3">
      {question.subtitle && (
        <p className="text-gray-500 text-sm mb-4">{question.subtitle}</p>
      )}
      {question.options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => toggleOption(option)}
          className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
            value.includes(option)
              ? "border-fuchsia-pink-500 bg-fuchsia-pink-50"
              : "border-gray-200 bg-white hover:border-fuchsia-pink-300"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
              value.includes(option)
                ? "border-fuchsia-pink-500 bg-fuchsia-pink-500"
                : "border-gray-300"
            }`}
          >
            {value.includes(option) && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span className="text-gray-800">{option}</span>
        </button>
      ))}
    </div>
  );
}

function SliderSelect({ question, value = 3, onChange }) {
  return (
    <div className="py-6">
      <div className="flex justify-between text-sm text-gray-500 mb-3">
        <span>{question.min}</span>
        <span>{question.max}</span>
      </div>
      <input
        type="range"
        min="1"
        max={question.steps}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-fuchsia-pink-100 rounded-full appearance-none cursor-pointer slider-thumb"
      />
      <div className="flex justify-between mt-2">
        {[...Array(question.steps)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i + 1 <= value ? "bg-fuchsia-pink-500" : "bg-fuchsia-pink-200"
            }`}
          />
        ))}
      </div>
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #c267c0;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
        .slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #c267c0;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

function BooleanSelect({ value, onChange }) {
  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={() => onChange("yes")}
        className={`flex-1 max-w-[160px] py-4 px-8 rounded-xl font-semibold transition-all ${
          value === "yes"
            ? "bg-fuchsia-pink-500 text-white"
            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-fuchsia-pink-300"
        }`}
      >
        Sí
      </button>
      <button
        onClick={() => onChange("no")}
        className={`flex-1 max-w-[160px] py-4 px-8 rounded-xl font-semibold transition-all ${
          value === "no"
            ? "bg-gray-700 text-white"
            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300"
        }`}
      >
        No
      </button>
    </div>
  );
}

function ContactForm({
  data,
  onChange,
  onSubmit,
  isValid,
  isSubmitting,
  onBack,
}) {
  return (
    <div className="w-full max-w-lg">
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Tus resultados están casi listos.
      </h2>
      <p className="text-gray-600 mb-8">
        Cuéntanos un poco sobre ti para que podamos acompañarte mejor.
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
            placeholder="Tu nombre"
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-fuchsia-pink-400 focus:ring-2 focus:ring-fuchsia-pink-100 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            placeholder="tu@email.com"
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-fuchsia-pink-400 focus:ring-2 focus:ring-fuchsia-pink-100 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            placeholder="+52 222 123 4567"
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-fuchsia-pink-400 focus:ring-2 focus:ring-fuchsia-pink-100 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Cómo prefieres ser contactada?
          </label>
          <div className="flex gap-3">
            {["WhatsApp", "Email", "Llamada"].map((method) => (
              <button
                key={method}
                onClick={() => onChange({ ...data, contactMethod: method })}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                  data.contactMethod === method
                    ? "bg-fuchsia-pink-500 text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-fuchsia-pink-300"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={!isValid || isSubmitting}
        className={`w-full mt-8 py-4 px-8 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
          isValid && !isSubmitting
            ? "bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Ver mis resultados
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center mt-4">
        Tu información está segura y no será compartida con terceros.
      </p>

      {/* Back button */}
      <button
        onClick={onBack}
        className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors flex items-center justify-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Volver
      </button>
    </div>
  );
}

// Helper function to get answer by question ID
function getAnswerByQuestionId(answers, allQuestions, questionId) {
  const questionIndex = allQuestions.findIndex((q) => q.id === questionId);
  return questionIndex >= 0 ? answers[questionIndex] : undefined;
}

// Helper function to get visible questions based on conditions
function getVisibleQuestions(allQuestions, answers) {
  return allQuestions.filter((question, index) => {
    // If no condition, always show
    if (!question.condition) return true;

    // Check condition - it receives all answers and helper function to get answers by ID
    return question.condition(answers, (questionId) =>
      getAnswerByQuestionId(answers, allQuestions, questionId)
    );
  });
}

export default function QuizPage() {
  const [step, setStep] = useState("welcome");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [infoIndex, setInfoIndex] = useState(0);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "WhatsApp",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get all questions for selected quiz
  const allQuestions = useMemo(() => {
    return selectedQuiz ? QUESTIONS[selectedQuiz] : [];
  }, [selectedQuiz]);

  // Recalculate visible questions when answers change
  const visibleQuestions = useMemo(() => {
    return getVisibleQuestions(allQuestions, answers);
  }, [allQuestions, answers]);

  const totalQuestions = visibleQuestions.length;
  const progress =
    totalQuestions > 0
      ? ((currentQuestionIndex + 1) / totalQuestions) * 100
      : 0;
  const currentQ = visibleQuestions[currentQuestionIndex];

  // Map visible index to original question index for answers
  const originalQuestionIndex = currentQ
    ? allQuestions.findIndex((q) => q.id === currentQ.id)
    : -1;

  // Reset question index if current question is no longer visible
  useEffect(() => {
    if (
      currentQuestionIndex >= visibleQuestions.length &&
      visibleQuestions.length > 0
    ) {
      setCurrentQuestionIndex(visibleQuestions.length - 1);
    }
  }, [visibleQuestions.length, currentQuestionIndex]);

  const isContactValid =
    contactData.name.trim() !== "" && contactData.email.includes("@");

  const handleSelectQuiz = (quizValue) => {
    setSelectedQuiz(quizValue);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setStep("questions");
  };

  const handleAnswer = (value) => {
    // Use original question index for storing answers
    setAnswers({ ...answers, [originalQuestionIndex]: value });
  };

  const handleNext = () => {
    const answer = answers[originalQuestionIndex];

    // Check if current question has an info message and user answered
    const hasValidAnswer =
      answer !== undefined &&
      answer !== null &&
      answer !== "" &&
      !(Array.isArray(answer) && answer.length === 0);

    if (currentQ?.infoMessage && hasValidAnswer) {
      setShowInfo(true);
      return;
    }

    // Show general info every 5 questions (less frequent now that we have contextual messages)
    if (
      (currentQuestionIndex + 1) % 5 === 0 &&
      currentQuestionIndex < totalQuestions - 1 &&
      !currentQ?.infoMessage
    ) {
      setInfoIndex(Math.floor((currentQuestionIndex + 1) / 5) - 1);
      setShowInfo(true);
    } else if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep("contact");
    }
  };

  const handleInfoContinue = () => {
    setShowInfo(false);
    // If we showed a contextual message, advance to next question
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep("contact");
    }
  };

  const handleBack = () => {
    if (showInfo) {
      setShowInfo(false);
      return;
    }
    if (step === "questions" && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (step === "questions" && currentQuestionIndex === 0) {
      setStep("select");
    } else if (step === "select") {
      setStep("welcome");
    } else if (step === "contact") {
      setStep("questions");
      setCurrentQuestionIndex(Math.max(0, totalQuestions - 1));
    } else if (step === "results") {
      setStep("contact");
    }
  };

  const handleSubmitContact = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const diagnosisResult = getDiagnosis(answers, selectedQuiz);

    // Format answers with questions for readability
    const formattedAnswers = allQuestions
      .map((q, idx) => {
        const answer = answers[idx];
        let answerText = "";

        if (Array.isArray(answer)) {
          answerText = answer.join(", ");
        } else if (typeof answer === "number") {
          answerText = `${answer}/${q.steps || 5}`;
        } else {
          answerText = answer || "Sin respuesta";
        }

        return `${q.question}: ${answerText}`;
      })
      .join(" | ");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzj5gZCs7mw-T2CLBSpQlnb36asuhg8tW-Obw3MqE_-_P4yXG3D6xd-Y5Y7azx2AJfSeg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone || "No proporcionado",
            contactMethod: contactData.contactMethod,
            quiz: selectedQuiz,
            result: diagnosisResult.level,
            answers: formattedAnswers,
          }),
        }
      );
    } catch (error) {
      console.error("Error saving to sheets:", error);
    }

    setStep("results");
    setIsSubmitting(false);
  };

  const handleRestart = () => {
    setStep("welcome");
    setSelectedQuiz(null);
    setAnswers({});
    setCurrentQuestion(0);
    setShowInfo(false);
    setContactData({
      name: "",
      email: "",
      phone: "",
      contactMethod: "WhatsApp",
    });
  };

  const canProceed = () => {
    if (!currentQ) return false;
    const answer = answers[originalQuestionIndex];
    if (currentQ.type === "multi") return answer && answer.length > 0;
    if (currentQ.type === "slider") return true;
    return answer !== undefined && answer !== null && answer !== "";
  };

  const diagnosis = getDiagnosis(answers, selectedQuiz);

  return (
    <div className="min-h-screen flex flex-col bg-fuchsia-pink-50">
      {/* Header */}
      <header className="w-full py-4 px-6 flex items-center justify-between relative">
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium px-3 py-2 rounded-full border border-gray-200 bg-white transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Salir
        </Link>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/LogoDesktop.png"
            alt="Cristal Sarabia"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        <div className="w-20" />
      </header>

      {/* Progress bar */}
      {step === "questions" && !showInfo && (
        <div className="w-full max-w-md mx-auto px-6">
          <div className="h-1.5 bg-fuchsia-pink-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-fuchsia-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Pregunta {currentQuestionIndex + 1} de {totalQuestions}
          </p>
        </div>
      )}

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative">
        {/* Welcome Screen */}
        {step === "welcome" && (
          <div className="text-center max-w-lg animate-fadeIn pb-32 relative z-10">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Bienvenida. Me alegra que estés aquí.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              Responde algunas preguntas sobre tus síntomas para saber cómo
              puedo ayudarte.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Solo tomará unos minutos.
            </p>
            <button
              onClick={() => setStep("select")}
              className="inline-flex items-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold py-4 px-10 rounded-xl transition-all hover:scale-105"
            >
              Comenzar
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Select Quiz Screen */}
        {step === "select" && (
          <div className="w-full max-w-lg animate-fadeIn">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ¿Qué te gustaría evaluar?
            </h2>
            <div className="space-y-4">
              {QUIZZES.map((quiz) => (
                <button
                  key={quiz.value}
                  onClick={() => handleSelectQuiz(quiz.value)}
                  className="w-full text-left p-5 bg-white rounded-2xl border border-gray-200 hover:border-fuchsia-pink-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-1 rounded-full border-2 border-gray-300 group-hover:border-fuchsia-pink-500 flex items-center justify-center transition-colors flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <span className="text-lg text-gray-900 font-semibold block">
                        {quiz.label}
                      </span>
                      <span className="text-sm text-gray-500">
                        {quiz.description}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Back button */}
            <button
              onClick={() => setStep("welcome")}
              className="w-full mt-6 py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver
            </button>
          </div>
        )}

        {/* Questions Screen */}
        {step === "questions" && !showInfo && currentQ && (
          <div className="w-full max-w-lg animate-fadeIn">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {currentQ.question}
            </h2>

            {currentQ.type === "single" && (
              <SingleSelect
                question={currentQ}
                value={answers[originalQuestionIndex]}
                onChange={handleAnswer}
              />
            )}

            {currentQ.type === "multi" && (
              <MultiSelect
                question={currentQ}
                value={answers[originalQuestionIndex] || []}
                onChange={handleAnswer}
              />
            )}

            {currentQ.type === "slider" && (
              <SliderSelect
                question={currentQ}
                value={answers[originalQuestionIndex] || 3}
                onChange={handleAnswer}
              />
            )}

            {currentQ.type === "boolean" && (
              <BooleanSelect
                value={answers[originalQuestionIndex]}
                onChange={handleAnswer}
              />
            )}

            {/* Next button for non-boolean questions */}
            {currentQ.type !== "boolean" && (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`w-full mt-8 py-4 px-8 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  canProceed()
                    ? "bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Siguiente
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            )}

            {/* Auto-advance for boolean after selection */}
            {currentQ.type === "boolean" && answers[originalQuestionIndex] && (
              <button
                onClick={handleNext}
                className="w-full mt-8 py-4 px-8 rounded-xl font-semibold bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white transition-all flex items-center justify-center gap-2"
              >
                Siguiente
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            )}

            {/* Back button */}
            <button
              onClick={handleBack}
              className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver
            </button>
          </div>
        )}

        {/* Info Screen */}
        {showInfo && (
          <div className="text-center max-w-lg animate-fadeIn pb-32 relative z-10">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {currentQ?.infoMessage ||
                INFO_MESSAGES[infoIndex % INFO_MESSAGES.length]}
            </h2>
            <button
              onClick={handleInfoContinue}
              className="inline-flex items-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold py-4 px-10 rounded-xl transition-all hover:scale-105"
            >
              Continuar
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            {/* Back button */}
            <button
              onClick={() => setShowInfo(false)}
              className="w-full mt-4 py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver
            </button>
          </div>
        )}

        {/* Contact Form Screen */}
        {step === "contact" && (
          <div className="animate-fadeIn">
            <ContactForm
              data={contactData}
              onChange={setContactData}
              onSubmit={handleSubmitContact}
              isSubmitting={isSubmitting}
              isValid={isContactValid}
              onBack={() => {
                setStep("questions");
                setCurrentQuestion(totalQuestions - 1);
              }}
            />
          </div>
        )}

        {/* Results Screen */}
        {step === "results" && (
          <div className="w-full max-w-lg animate-fadeIn">
            <div
              className={`p-1 rounded-2xl mb-6 ${
                diagnosis.level === "high"
                  ? "bg-gradient-to-r from-fuchsia-pink-400 to-fuchsia-pink-600"
                  : diagnosis.level === "medium"
                  ? "bg-gradient-to-r from-fuchsia-pink-300 to-fuchsia-pink-400"
                  : "bg-gradient-to-r from-gray-200 to-gray-300"
              }`}
            >
              <div className="bg-white rounded-xl p-6">
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {contactData.name},{" "}
                  <span className="text-fuchsia-pink-600">
                    {diagnosis.title}
                  </span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {diagnosis.message}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {(diagnosis.level === "high" || diagnosis.level === "medium") && (
                <>
                  <Link
                    href="/agendar-cita"
                    className="w-full inline-flex items-center justify-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-all"
                  >
                    {diagnosis.cta}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <a
                    href={`https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20Soy%20${encodeURIComponent(
                      contactData.name
                    )}%20y%20realicé%20el%20cuestionario.%20Me%20gustaría%20agendar%20una%20valoración.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-gray-600 hover:text-fuchsia-pink-600 font-medium transition-colors text-sm"
                  >
                    ¿Todavía tienes dudas? Te ayudamos a aclararlas
                  </a>
                </>
              )}
              <button
                onClick={handleRestart}
                className="w-full py-4 px-8 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-fuchsia-pink-300 transition-all"
              >
                Hacer otro test
              </button>
              <Link
                href="/"
                className="w-full py-4 px-8 text-center text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Background decoration - always visible */}
      <BackgroundDecoration />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
