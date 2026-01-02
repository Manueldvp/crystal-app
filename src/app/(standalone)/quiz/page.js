"use client";
import { useState } from "react";
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
      question: "¿Cuál es tu principal preocupación?",
      options: [
        "Escapes de orina",
        "Dolor pélvico",
        "Molestias en relaciones sexuales",
        "Sensación de pesadez",
        "Solo quiero evaluar mi salud pélvica",
      ],
    },
    {
      id: 2,
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
      ],
    },
    {
      id: 3,
      type: "slider",
      question: "¿Con qué frecuencia experimentas escapes de orina?",
      min: "Nunca",
      max: "Constantemente",
      steps: 5,
    },
    {
      id: 4,
      type: "boolean",
      question: "¿Sientes urgencia repentina de ir al baño?",
    },
    {
      id: 5,
      type: "slider",
      question: "¿Qué tanto afecta esto tu calidad de vida?",
      min: "Nada",
      max: "Muchísimo",
      steps: 5,
    },
    {
      id: 6,
      type: "boolean",
      question: "¿Has notado cambios en tu función sexual?",
    },
    {
      id: 7,
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
      id: 2,
      type: "single",
      question: "¿Qué tipo de parto tuviste?",
      options: [
        "Parto vaginal",
        "Cesárea",
        "Parto instrumentado (fórceps/ventosa)",
      ],
    },
    {
      id: 3,
      type: "multi",
      question: "¿Qué síntomas estás experimentando?",
      subtitle: "Selecciona todos los que apliquen",
      options: [
        "Incontinencia urinaria",
        "Dolor en la cicatriz (cesárea o episiotomía)",
        "Dolor durante relaciones sexuales",
        "Sensación de debilidad abdominal",
        "Dolor lumbar o pélvico",
        "Diástasis abdominal",
      ],
    },
    {
      id: 4,
      type: "slider",
      question: "¿Qué tanto te preocupa tu recuperación?",
      min: "Poco",
      max: "Mucho",
      steps: 5,
    },
    {
      id: 5,
      type: "single",
      question: "¿Te gustaría retomar la actividad física?",
      options: [
        "Sí, quiero entrenar",
        "No, prefiero no entrenar",
        "Tengo dudas sobre si es seguro",
      ],
    },
  ],
  endometriosis: [
    {
      id: 1,
      type: "slider",
      question: "¿Qué tan intenso es tu dolor menstrual?",
      min: "Leve",
      max: "Incapacitante",
      steps: 5,
    },
    {
      id: 2,
      type: "multi",
      question: "¿Cuándo experimentas dolor?",
      subtitle: "Selecciona todos los que apliquen",
      options: [
        "Durante la menstruación",
        "Durante las relaciones sexuales",
        "Al evacuar",
        "Al orinar",
        "De forma constante, sin importar el momento",
      ],
    },
    {
      id: 3,
      type: "boolean",
      question: "¿Tienes sangrados muy abundantes o prolongados?",
    },
    {
      id: 4,
      type: "slider",
      question: "¿Con qué frecuencia el dolor afecta tus actividades diarias?",
      min: "Raramente",
      max: "Siempre",
      steps: 5,
    },
    {
      id: 5,
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
      id: 6,
      type: "boolean",
      question: "¿Has sentido que tu dolor no es tomado en serio?",
    },
  ],
};

const INFO_MESSAGES = [
  "No estás sola. La fisioterapia pélvica puede ayudarte.",
  "Tu cuerpo merece atención especializada.",
  "El dolor no es normal. Hay soluciones.",
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

export default function QuizPage() {
  const [step, setStep] = useState("welcome");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
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

  const questions = selectedQuiz ? QUESTIONS[selectedQuiz] : [];
  const totalQuestions = questions.length;
  const progress =
    totalQuestions > 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;
  const currentQ = questions[currentQuestion];

  const isContactValid =
    contactData.name.trim() !== "" && contactData.email.includes("@");

  const handleSelectQuiz = (quizValue) => {
    setSelectedQuiz(quizValue);
    setAnswers({});
    setCurrentQuestion(0);
    setStep("questions");
  };

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    // Show info every 3 questions
    if (
      (currentQuestion + 1) % 3 === 0 &&
      currentQuestion < totalQuestions - 1
    ) {
      setInfoIndex(Math.floor((currentQuestion + 1) / 3) - 1);
      setShowInfo(true);
    } else if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("contact");
    }
  };

  const handleInfoContinue = () => {
    setShowInfo(false);
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("contact");
    }
  };

  const handleBack = () => {
    if (showInfo) {
      setShowInfo(false);
      return;
    }
    if (step === "questions" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (step === "questions" && currentQuestion === 0) {
      setStep("select");
    } else if (step === "select") {
      setStep("welcome");
    } else if (step === "contact") {
      setStep("questions");
      setCurrentQuestion(totalQuestions - 1);
    } else if (step === "results") {
      setStep("contact");
    }
  };

  const handleSubmitContact = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const diagnosisResult = getDiagnosis(answers, selectedQuiz);

    // Format answers with questions for readability
    const formattedAnswers = questions
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
    const answer = answers[currentQuestion];
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
            Pregunta {currentQuestion + 1} de {totalQuestions}
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
                value={answers[currentQuestion]}
                onChange={handleAnswer}
              />
            )}

            {currentQ.type === "multi" && (
              <MultiSelect
                question={currentQ}
                value={answers[currentQuestion] || []}
                onChange={handleAnswer}
              />
            )}

            {currentQ.type === "slider" && (
              <SliderSelect
                question={currentQ}
                value={answers[currentQuestion] || 3}
                onChange={handleAnswer}
              />
            )}

            {currentQ.type === "boolean" && (
              <BooleanSelect
                value={answers[currentQuestion]}
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
            {currentQ.type === "boolean" && answers[currentQuestion] && (
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
              {INFO_MESSAGES[infoIndex % INFO_MESSAGES.length]}
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
              <a
                href={`https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20Soy%20${encodeURIComponent(
                  contactData.name
                )}%20y%20realicé%20el%20cuestionario.%20Me%20gustaría%20agendar%20una%20valoración.`}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
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
