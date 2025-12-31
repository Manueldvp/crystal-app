'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const QUIZZES = [
  { value: "pelvic-health", label: "Test Salud Pélvica" },
  { value: "postpartum", label: "Test Postparto" },
  { value: "endometriosis", label: "Test Endometriosis" },
]

const QUESTIONS = {
  "pelvic-health": [
    { id: 1, question: "¿Has pasado por parto natural?" },
    { id: 2, question: "¿Has detectado estreñimiento crónico?" },
    { id: 3, question: "¿Practicas deportes de impacto?" },
    { id: 4, question: "¿Presentas obesidad?" },
    { id: 5, question: "¿Presentas enfermedades respiratorias crónicas o tabaquismo?" },
    { id: 6, question: "¿Cirugía ginecológica o tratamientos agresivos?" },
    { id: 7, question: "¿Padeces de incontinencia urinaria o fecal?" },
    { id: 8, question: "¿Molestias y dolor en la relación sexual?" },
    { id: 9, question: "¿Prolapso de uno de los órganos pélvicos?" },
    { id: 10, question: "¿Tienes sensación de pesadez en la zona pélvica?" },
  ],
  "postpartum": [
    { id: 1, question: "¿Sientes que tienes incontinencia urinaria?" },
    { id: 2, question: "¿Tienes diástasis abdominal?" },
    { id: 3, question: "¿Tienes dispareunia (dolor en las relaciones sexuales)?" },
    { id: 4, question: "¿Tienes cicatrices de cesárea?" },
    { id: 5, question: "¿Sientes dolor lumbopélvico?" },
    { id: 6, question: "¿Has tenido más de dos partos?" },
  ],
  "endometriosis": [
    { id: 1, question: "¿Períodos menstruales que provocan mucho dolor?" },
    { id: 2, question: "¿Presentas menstruación abundante o sangrado entre períodos?" },
    { id: 3, question: "¿Dolor durante las relaciones sexuales?" },
    { id: 4, question: "¿Dolor en los glúteos durante el período menstrual?" },
    { id: 5, question: "¿Sientes dolor al defecar?" },
    { id: 6, question: "¿Sientes dolor al orinar?" },
    { id: 7, question: "¿Fuiste a tu ginecólogo para comunicar estos dolores?" },
  ],
}

const INFO_MESSAGES = [
  "No estás sola. La fisioterapia pélvica puede ayudarte.",
  "Tu cuerpo merece atención especializada.",
  "El dolor no es normal. Hay soluciones.",
]

function getDiagnosis(yesCount) {
  if (yesCount >= 4) {
    return "Te recomiendo que me consultes de inmediato. Puede haber una afección seria que requiera atención especializada."
  } else if (yesCount >= 3) {
    return "Es importante que busques atención médica. Un especialista puede evaluar tus síntomas y recomendarte el tratamiento adecuado."
  } else if (yesCount >= 2) {
    return "Podría haber una afección en la zona. Consúltame para un diagnóstico adecuado."
  } else if (yesCount >= 1) {
    return "Es posible que haya algún problema. Te recomiendo consultarme para obtener una evaluación más precisa."
  }
  return "No parece haber una afección grave. Aún así, consulta a un profesional para evaluar tu situación."
}

function WavesDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
      <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
        <path 
          className="fill-fuchsia-pink-200/60"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path 
          className="fill-fuchsia-pink-300/70"
          d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path 
          className="fill-fuchsia-pink-400/50"
          d="M0,288L48,282.7C96,277,192,267,288,261.3C384,256,480,256,576,266.7C672,277,768,299,864,293.3C960,288,1056,256,1152,245.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  )
}

export default function QuizPage() {
  const [step, setStep] = useState('welcome')
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showInfo, setShowInfo] = useState(false)
  const [infoIndex, setInfoIndex] = useState(0)

  const questions = selectedQuiz ? QUESTIONS[selectedQuiz] : []
  const totalQuestions = questions.length
  const progress = totalQuestions > 0 ? ((currentQuestion) / totalQuestions) * 100 : 0

  const handleSelectQuiz = (quizValue) => {
    setSelectedQuiz(quizValue)
    setAnswers({})
    setCurrentQuestion(0)
    setStep('questions')
  }

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer }
    setAnswers(newAnswers)

    if ((currentQuestion + 1) % 3 === 0 && currentQuestion < totalQuestions - 1) {
      setInfoIndex(Math.floor((currentQuestion + 1) / 3) - 1)
      setShowInfo(true)
    } else if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setStep('results')
    }
  }

  const handleInfoContinue = () => {
    setShowInfo(false)
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setStep('results')
    }
  }

  const handleBack = () => {
    if (showInfo) {
      setShowInfo(false)
      return
    }
    if (step === 'questions' && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else if (step === 'questions' && currentQuestion === 0) {
      setStep('select')
    } else if (step === 'select') {
      setStep('welcome')
    } else if (step === 'results') {
      setStep('questions')
      setCurrentQuestion(totalQuestions - 1)
    }
  }

  const handleRestart = () => {
    setStep('welcome')
    setSelectedQuiz(null)
    setAnswers({})
    setCurrentQuestion(0)
    setShowInfo(false)
  }

  const yesCount = Object.values(answers).filter(a => a === 'yes').length

  return (
    <div className="min-h-screen flex flex-col bg-fuchsia-pink-50">
      {/* Header */}
      <header className="w-full py-4 px-6 flex items-center justify-between">
        {step !== 'welcome' && (
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium px-3 py-2 rounded-full border border-gray-200 bg-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver
          </button>
        )}
        {step === 'welcome' && <div />}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo.webp" alt="Logo" width={120} height={40} className="h-8 w-auto" />
        </Link>
        <div className="w-20" />
      </header>

      {/* Progress bar */}
      {step === 'questions' && !showInfo && (
        <div className="w-full max-w-md mx-auto px-6">
          <div className="h-1 bg-fuchsia-pink-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-fuchsia-pink-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            {currentQuestion + 1} de {totalQuestions}
          </p>
        </div>
      )}

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-32 relative">
        
        {/* Welcome Screen */}
        {step === 'welcome' && (
          <div className="text-center max-w-lg animate-fadeIn">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Bienvenida. Me alegra que estés aquí.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-2">
              Responde algunas preguntas sobre tus síntomas para saber cómo puedo ayudarte.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Solo tomará unos minutos.
            </p>
            <button
              onClick={() => setStep('select')}
              className="inline-flex items-center gap-2 bg-fuchsia-pink-400 hover:bg-fuchsia-pink-500 text-white font-semibold py-4 px-10 rounded-lg transition-all hover:scale-105"
            >
              Comenzar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <WavesDecoration />
          </div>
        )}

        {/* Select Quiz Screen */}
        {step === 'select' && (
          <div className="w-full max-w-lg animate-fadeIn">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Primero, cuéntame qué te trae por aquí.
            </h2>
            <div className="space-y-3">
              {QUIZZES.map((quiz) => (
                <button
                  key={quiz.value}
                  onClick={() => handleSelectQuiz(quiz.value)}
                  className="w-full text-left p-5 bg-white rounded-xl border border-gray-200 hover:border-fuchsia-pink-400 hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-fuchsia-pink-500 flex items-center justify-center transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-lg text-gray-800 font-medium">{quiz.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Questions Screen */}
        {step === 'questions' && !showInfo && questions[currentQuestion] && (
          <div className="w-full max-w-lg animate-fadeIn">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {questions[currentQuestion].question}
            </h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleAnswer('yes')}
                className="flex-1 max-w-[140px] py-4 px-8 rounded-lg font-semibold text-white bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 transition-all"
              >
                Sí
              </button>
              <button
                onClick={() => handleAnswer('no')}
                className="flex-1 max-w-[140px] py-4 px-8 bg-white border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:border-fuchsia-pink-300 transition-all"
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Info Screen */}
        {showInfo && (
          <div className="text-center max-w-lg animate-fadeIn">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {INFO_MESSAGES[infoIndex % INFO_MESSAGES.length]}
            </h2>
            <button
              onClick={handleInfoContinue}
              className="inline-flex items-center gap-2 bg-fuchsia-pink-400 hover:bg-fuchsia-pink-500 text-white font-semibold py-4 px-10 rounded-lg transition-all hover:scale-105"
            >
              Siguiente
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <WavesDecoration />
          </div>
        )}

        {/* Results Screen */}
        {step === 'results' && (
          <div className="w-full max-w-lg animate-fadeIn">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Tus resultados están listos.
            </h2>
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-fuchsia-pink-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                {getDiagnosis(yesCount)}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20realicé%20el%20cuestionario%20y%20quisiera%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all"
              >
                Agendar consulta
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                onClick={handleRestart}
                className="flex-1 py-4 px-8 bg-white border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:border-fuchsia-pink-300 transition-all"
              >
                Hacer otro test
              </button>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}
