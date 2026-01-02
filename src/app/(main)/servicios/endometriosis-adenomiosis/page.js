"use client";
import Image from "next/image";
import Link from "next/link";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  HandRaisedIcon, 
  CheckBadgeIcon,
  UserIcon,
  ClockIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  Squares2X2Icon
} from "@heroicons/react/24/outline";

const SINTOMAS = [
  "Dolor pélvico crónico",
  "Dolor menstrual intenso",
  "Dolor durante o después de las relaciones sexuales",
  "Dolor al evacuar o al orinar",
  "Distensión abdominal",
  "Fatiga constante",
  "Restricción del movimiento",
  "Ansiedad, miedo al dolor o al movimiento",
];

const TRATAMIENTO = [
  {
    titulo: "Trabajo del piso pélvico",
    items: [
      "Disminución de hipertonía y espasmo",
      "Mejora de la coordinación muscular",
      "Recuperación de la conciencia corporal",
    ],
  },
  {
    titulo: "Terapia manual",
    items: [
      "Trabajo sobre tejidos tensos",
      "Movilización suave",
      "Abordaje de cicatrices y adherencias",
    ],
  },
  {
    titulo: "Regulación del sistema nervioso",
    items: [
      "Técnicas de respiración",
      "Educación en dolor",
      "Estrategias para disminuir la hipervigilancia corporal",
    ],
  },
  {
    titulo: "Movimiento terapéutico",
    items: [
      "Movimiento progresivo y seguro",
      "Recuperación de la confianza en el cuerpo",
      "Evitar el miedo al movimiento",
    ],
  },
];

const VALORACION = [
  "Historia clínica detallada",
  "Historia del dolor (inicio, evolución, detonantes)",
  "Antecedentes médicos y quirúrgicos",
  "Evaluación de postura, respiración y movimiento",
  "Evaluación del piso pélvico (solo cuando está indicado y con consentimiento)",
];

export default function EndometriosisPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/endometriosis/image.png"
            alt="Dolor en Endometriosis y Adenomiosis"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-purple-secondary-900/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <RevealWrapper>
            <div className="max-w-3xl">
              <Link 
                href="/servicios"
                className="inline-flex items-center gap-2 text-purple-secondary-200 hover:text-white mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver a servicios
              </Link>
              <p className="text-white/80 font-semibold tracking-widest uppercase text-sm mb-4">
                Abordaje desde la Fisioterapia Pélvica
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Dolor en Endometriosis y Adenomiosis
              </h1>
              <div className="w-24 h-1 bg-white mb-6" />
              <p className="text-xl text-purple-secondary-100 leading-relaxed max-w-2xl">
                Tu dolor es real. Tu experiencia es válida. Y mereces un acompañamiento que lo reconozca.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Entendiendo el dolor */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <p className="text-fuchsia-pink-600 font-medium tracking-wide uppercase text-xs mb-3 text-center">
                Entendiendo el dolor
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                El dolor en endometriosis y adenomiosis: más que una lesión
              </h2>
              
              <div className="bg-purple-secondary-50 rounded-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Uno de los puntos más importantes de entender es que <strong className="text-gray-900">el dolor no depende únicamente de la presencia de lesiones</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Con el tiempo, el sistema nervioso puede volverse más sensible, generando lo que se conoce como <strong className="text-gray-900">sensibilización central</strong>. Esto significa que el cuerpo aprende a doler, incluso cuando el estímulo inicial ya no está presente o ha sido tratado quirúrgicamente.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Además, el dolor persistente suele generar: hipertonía del piso pélvico, restricción del movimiento, alteraciones respiratorias y miedo al movimiento o al contacto.
                </p>
              </div>

              <p className="text-purple-secondary-700 text-xl text-center font-semibold">
                Aquí es donde la fisioterapia pélvica cobra un papel clave.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-purple-secondary-700 relative overflow-hidden">
        <div className="absolute left-10 top-10 w-32 h-32 rounded-full border-2 border-white/10" />
        <div className="absolute right-20 bottom-10 w-48 h-48 rounded-full border-2 border-white/10" />
        <div className="absolute left-1/3 bottom-20 w-24 h-24 rounded-full border-2 border-white/10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-purple-secondary-100 leading-relaxed mb-8">
                La endometriosis y la adenomiosis son padecimientos ginecológicos complejos que afectan profundamente la calidad de vida de quienes los viven. <strong className="text-white">Dolor intenso, cansancio constante, limitaciones físicas, impacto emocional</strong> y una sensación frecuente de no ser escuchadas forman parte de la experiencia de muchas pacientes.
              </p>
              <p className="text-lg text-purple-secondary-200 leading-relaxed mb-8">
                Aunque son condiciones distintas, comparten síntomas, procesos inflamatorios y consecuencias funcionales similares. Por ello, su abordaje requiere una mirada integral, especializada y respetuosa.
              </p>
              <div className="bg-white/10 backdrop-blur border-l-4 border-fuchsia-pink-500 p-6 rounded-r-xl">
                <p className="text-purple-secondary-100 leading-relaxed">
                  <strong className="text-white">La fisioterapia pélvica no sustituye el tratamiento médico</strong>, pero cumple un rol fundamental dentro del manejo multidisciplinario, especialmente en el control del dolor, la función y la recuperación corporal.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Comprender las condiciones */}
      <section className="py-16 bg-purple-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Comprender la endometriosis y la adenomiosis
            </h2>
          </RevealWrapper>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RevealWrapper>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-14 h-14 bg-fuchsia-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-fuchsia-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es la endometriosis?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La endometriosis es una condición en la que tejido similar al endometrio crece fuera del útero, generando inflamación, dolor y, en muchos casos, adherencias que afectan órganos pélvicos y abdominales.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Puede manifestarse de formas muy distintas entre una persona y otra, lo que hace que muchas veces el diagnóstico se retrase o los síntomas se minimicen.
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-14 h-14 bg-purple-secondary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-purple-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Qué es la adenomiosis?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  La adenomiosis ocurre cuando tejido endometrial crece dentro del músculo uterino. Esto puede generar dolor menstrual intenso, sangrados abundantes, sensación de presión pélvica y fatiga.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ambas condiciones pueden coexistir y no siempre se correlacionan con la intensidad del dolor: una persona puede tener lesiones pequeñas y dolor severo, y otra lesiones extensas con síntomas más leves.
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* Síntomas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                Síntomas frecuentes
              </h2>
              <p className="text-center text-fuchsia-pink-600 font-semibold mb-10">
                No todos son &ldquo;normales&rdquo;
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {SINTOMAS.map((sintoma, index) => (
                  <div key={index} className="flex items-center gap-3 bg-purple-secondary-50 rounded-xl p-4">
                    <span className="w-3 h-3 bg-fuchsia-pink-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{sintoma}</span>
                  </div>
                ))}
              </div>

              <div className="bg-fuchsia-pink-50 border border-fuchsia-pink-200 rounded-2xl p-6 text-center">
                <p className="text-fuchsia-pink-800 font-semibold text-lg">
                  Normalizar estos síntomas retrasa el tratamiento adecuado.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Por qué fisioterapia */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                ¿Por qué fisioterapia pélvica en endometriosis y adenomiosis?
              </h2>
              <p className="text-xl text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                La fisioterapia pélvica aborda las <strong className="text-gray-800">consecuencias funcionales del dolor</strong>, no solo la causa médica.
              </p>

              <div className="bg-purple-secondary-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Desde la fisioterapia se trabaja sobre:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "El sistema musculoesquelético",
                    "El sistema nervioso",
                    "La movilidad pélvica y abdominal",
                    "La relación con el movimiento y el cuerpo",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-fuchsia-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-purple-secondary-700 font-semibold mt-6 text-center text-lg">
                  El objetivo no es &ldquo;forzar&rdquo; ni &ldquo;aguantar&rdquo;, sino devolver seguridad al cuerpo.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-fuchsia-pink-500 to-purple-secondary-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <p className="text-2xl font-bold mb-2">¿Te identificas con estos síntomas?</p>
                <p className="text-fuchsia-pink-100">Agenda una valoración para comenzar tu proceso.</p>
              </div>
              <a 
                href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20información%20sobre%20el%20tratamiento%20de%20endometriosis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-secondary-700 font-semibold px-8 py-4 rounded-full transition-colors whitespace-nowrap"
              >
                Agendar valoración
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Valoración */}
      <section className="py-16 bg-purple-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Valoración en fisioterapia pélvica
              </h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Cada proceso inicia con una valoración integral, que incluye:
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  {VALORACION.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-fuchsia-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </span>
                      <p className="text-gray-700 pt-1">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-purple-secondary-700 font-semibold text-center">
                    Este paso es clave para evitar tratamientos genéricos que pueden empeorar los síntomas.
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Tratamiento */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              Abordaje terapéutico desde la fisioterapia pélvica
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              El tratamiento se adapta a cada persona y puede incluir:
            </p>
          </RevealWrapper>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {TRATAMIENTO.map((seccion, index) => (
              <RevealWrapper key={index}>
                <div className="bg-purple-secondary-50 rounded-2xl p-6 h-full" style={{ borderTop: '4px solid #d946ef' }}>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <Squares2X2Icon className="w-5 h-5 text-fuchsia-pink-500 flex-shrink-0" />
                    {seccion.titulo}
                  </h3>
                  <ul className="space-y-2">
                    {seccion.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-purple-secondary-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Cirugía */}
      <section className="py-16 bg-purple-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Endometriosis, cirugía y fisioterapia
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Muchas pacientes llegan después de una cirugía por endometriosis esperando que el dolor desaparezca por completo. Sin embargo, <strong className="text-gray-800">la cirugía no siempre resuelve las alteraciones funcionales que el dolor dejó en el cuerpo</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  La fisioterapia pélvica postquirúrgica ayuda a:
                </p>
                <ul className="space-y-3">
                  {[
                    "Disminuir dolor residual",
                    "Mejorar movilidad",
                    "Abordar adherencias",
                    "Acompañar la recuperación funcional",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-fuchsia-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <div className="w-20 h-20 bg-purple-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-2">
                  La cirugía y la fisioterapia no compiten
                </p>
                <p className="text-fuchsia-pink-600 font-semibold text-xl">
                  Se complementan
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Acompañamiento */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Impacto emocional y acompañamiento
              </h2>
              <p className="text-xl text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Vivir con endometriosis o adenomiosis no es solo un reto físico.
              </p>

              <div className="bg-gradient-to-br from-purple-secondary-50 to-fuchsia-pink-50 rounded-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  El dolor constante, la falta de diagnóstico oportuno y la invalidación de síntomas pueden generar <strong className="text-gray-800">ansiedad, frustración y desconexión corporal</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  La fisioterapia pélvica ofrece un espacio:
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { texto: "Seguro", icon: ShieldCheckIcon },
                  { texto: "Respetuoso", icon: HeartIcon },
                  { texto: "Sin juicios", icon: HandRaisedIcon },
                  { texto: "Donde el dolor es validado", icon: CheckBadgeIcon },
                ].map((item, index) => (
                  <div key={index} className="bg-white border-2 border-purple-secondary-200 rounded-xl p-6 text-center hover:border-fuchsia-pink-400 transition-colors">
                    <item.icon className="w-8 h-8 text-fuchsia-pink-500 mx-auto mb-3" />
                    <p className="text-gray-800 font-semibold">{item.texto}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-purple-secondary-700 font-semibold text-xl mt-8">
                Acompañar también es parte del tratamiento.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Qué esperar */}
      <section className="py-16 bg-purple-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
                ¿Qué puedes esperar del proceso?
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { titulo: "Abordaje individualizado", icon: UserIcon },
                  { titulo: "Respeto a tus tiempos y límites", icon: ClockIcon },
                  { titulo: "Educación para entender tu cuerpo", icon: AcademicCapIcon },
                  { titulo: "Mejora progresiva de la función", icon: ArrowTrendingUpIcon },
                  { titulo: "Recuperación de confianza corporal", icon: SparklesIcon },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                    <div className="w-14 h-14 bg-fuchsia-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-fuchsia-pink-600" />
                    </div>
                    <p className="text-gray-800 font-semibold">{item.titulo}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-xl text-gray-700 mb-2">
                  No se trata de &ldquo;aguantar&rdquo;
                </p>
                <p className="text-2xl font-bold text-fuchsia-pink-600">
                  Sino de vivir con menos dolor y más calidad de vida.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Trabajo en equipo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Un trabajo en equipo
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                El manejo de la endometriosis y la adenomiosis es <strong className="text-gray-800">multidisciplinario</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La fisioterapia pélvica forma parte de un equipo junto con ginecología, dolor, psicología y otros profesionales cuando es necesario.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-purple-secondary-700 relative overflow-hidden">
        <div className="absolute left-10 top-10 w-20 h-20 rounded-full border-2 border-white/15" />
        <div className="absolute right-20 bottom-10 w-32 h-32 rounded-full border-2 border-white/15" />
        <div className="absolute left-1/4 bottom-5 w-16 h-16 rounded-full border-2 border-white/10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-fuchsia-pink-200 font-medium tracking-wide uppercase text-xs mb-3">
                Da el primer paso
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tu dolor merece ser escuchado
              </h2>
              <p className="text-purple-secondary-100 mb-8 text-lg">
                Agenda tu valoración y comienza un proceso de acompañamiento respetuoso, especializado y centrado en ti.
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20agendar%20una%20valoración%20para%20endometriosis%20o%20adenomiosis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-fuchsia-pink-500 hover:bg-fuchsia-pink-600 text-white font-semibold px-10 py-5 rounded-full transition-colors text-lg"
              >
                Agendar valoración por WhatsApp
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </main>
  );
}

