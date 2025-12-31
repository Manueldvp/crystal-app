"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";

const SERVICIOS_DATA = {
  "embarazo-y-preparacion-al-parto": {
    titulo: "Embarazo y Preparación al Parto",
    subtitulo: "Acompañamiento fisioterapéutico durante el embarazo",
    imagen: "/15.jpg",
    intro: "El embarazo es una etapa de profundos cambios físicos, hormonales y emocionales. A nivel musculoesquelético, el cuerpo se adapta progresivamente para sostener el crecimiento del bebé, modificar el centro de gravedad y prepararse para el parto.",
    destacado: "La fisioterapia pélvica durante el embarazo tiene como objetivo acompañar estos cambios, no intervenirlos de forma agresiva ni forzar procesos para los que el cuerpo aún no está listo.",
    secciones: [
      {
        titulo: "¿Por qué es importante la fisioterapia pélvica en el embarazo?",
        contenido: "Durante el embarazo pueden aparecer molestias como:",
        lista: [
          "Dolor lumbar y pélvico",
          "Sensación de peso en la pelvis",
          "Incontinencia urinaria",
          "Dificultad para moverse o dormir",
          "Desconexión corporal",
        ],
      },
      {
        titulo: "La fisioterapia pélvica ayuda a:",
        lista: [
          "Mejorar la movilidad y la postura",
          "Favorecer la conciencia del piso pélvico",
          "Preparar el cuerpo para el trabajo de parto",
          "Reducir el riesgo de disfunciones postparto",
        ],
      },
      {
        titulo: "Abordaje terapéutico",
        contenido: "El trabajo durante el embarazo es individualizado, considerando:",
        lista: [
          "Semana de gestación",
          "Historia obstétrica",
          "Síntomas actuales",
          "Nivel de actividad física",
        ],
      },
      {
        titulo: "El acompañamiento puede incluir:",
        lista: [
          "Educación corporal",
          "Trabajo respiratorio",
          "Movilidad pélvica",
          "Preparación del piso pélvico",
          "Recomendaciones para el parto",
        ],
      },
    ],
  },
  "postparto": {
    titulo: "Postparto y Recuperación",
    subtitulo: "Acompañamiento respetuoso en tu recuperación",
    imagen: "/13.jpg",
    intro: "El postparto es una etapa frecuentemente subestimada. A menudo se espera que el cuerpo \"regrese a la normalidad\" sin un acompañamiento real, normalizando dolor, escapes urinarios o debilidad abdominal.",
    destacado: "La fisioterapia pélvica en el postparto busca acompañar la recuperación de forma respetuosa, sin prisas ni exigencias irreales.",
    secciones: [
      {
        titulo: "Cambios frecuentes en el postparto",
        contenido: "Después del parto, el cuerpo puede presentar:",
        lista: [
          "Debilidad del piso pélvico",
          "Alteraciones en la faja abdominal",
          "Dolor perineal o pélvico",
          "Cicatrices (cesárea o episiotomía)",
          "Inseguridad al retomar la actividad física",
        ],
      },
      {
        titulo: "Objetivos del tratamiento",
        lista: [
          "Favorecer la recuperación funcional",
          "Acompañar la cicatrización",
          "Mejorar el control urinario y fecal",
          "Recuperar la confianza corporal",
          "Preparar el retorno progresivo al movimiento",
        ],
      },
    ],
  },
  "disfunciones-pelvicas-en-el-adulto": {
    titulo: "Disfunciones Pélvicas en el Adulto",
    subtitulo: "Tratamiento especializado del suelo pélvico",
    imagen: "/25.jpg",
    intro: "La fisioterapia pélvica es una especialidad que aborda disfunciones que afectan funciones esenciales del cuerpo humano como la continencia, la sexualidad y la calidad de vida.",
    destacado: "Cada tratamiento se adapta al diagnóstico, síntomas y objetivos del paciente.",
    secciones: [
      {
        titulo: "Incontinencia Urinaria",
        contenido: "La incontinencia urinaria es la pérdida involuntaria de orina y no debe considerarse una consecuencia inevitable del embarazo, la edad o la menopausia. Muchas personas viven con escapes urinarios en silencio, limitando su actividad física, su vida social o su confianza corporal.",
        lista: [
          "De esfuerzo: al toser, reír, cargar peso o hacer ejercicio",
          "De urgencia: acompañada de una necesidad súbita de orinar",
          "Mixta: combinación de ambas",
        ],
      },
      {
        titulo: "Incontinencia Fecal",
        contenido: "La incontinencia fecal, ya sea de heces o gases, puede generar un fuerte impacto emocional, afectando la vida social, laboral y personal. El abordaje incluye trabajo específico de esfínteres, mejora de la conciencia corporal, coordinación defecatoria y educación en hábitos intestinales.",
      },
      {
        titulo: "Prolapsos de Órganos Pélvicos",
        contenido: "El prolapso ocurre cuando uno o más órganos (vejiga, útero, recto) descienden de su posición habitual, generando síntomas como pesadez, presión o incomodidad.",
        lista: [
          "No todos los prolapsos requieren cirugía",
          "No todos empeoran inevitablemente",
          "No todos impiden llevar una vida activa",
        ],
      },
      {
        titulo: "Disfunciones Coloproctológicas",
        contenido: "Incluyen alteraciones relacionadas con el colon, recto y ano: dolor anal, dificultad para evacuar, sensación de evacuación incompleta y prolapso rectal. La fisioterapia pélvica ayuda a mejorar la coordinación, la función muscular y los hábitos defecatorios.",
      },
      {
        titulo: "Rehabilitación Postquirúrgica",
        contenido: "Después de una cirugía ginecológica, el cuerpo atraviesa un proceso de adaptación que requiere tiempo y acompañamiento. La fisioterapia pélvica ayuda después de: cirugías por endometriosis, histerectomía, cesárea, cirugías vaginales o laparoscópicas, y procedimientos uroginecológicos.",
      },
    ],
  },
  "dolor-pelvico-por-endometriosis": {
    titulo: "Dolor Pélvico Crónico",
    subtitulo: "Abordaje integral del dolor pélvico y endometriosis",
    imagen: "/27.jpg",
    intro: "El dolor pélvico crónico es una condición compleja que puede persistir durante meses o incluso años, afectando de forma significativa la calidad de vida, la movilidad, el descanso, la sexualidad y el bienestar emocional de quien lo vive.",
    destacado: "A diferencia del dolor agudo, el dolor pélvico crónico no siempre tiene una causa única ni evidente. No se trata únicamente de un problema muscular, sino de una interacción entre tejidos, sistema nervioso, historia médica y contexto emocional.",
    secciones: [
      {
        titulo: "¿Por qué aparece el dolor pélvico crónico?",
        contenido: "El dolor pélvico puede estar relacionado con:",
        lista: [
          "Alteraciones musculares del piso pélvico",
          "Hipertonía, espasmo o falta de coordinación muscular",
          "Cirugías previas",
          "Procesos inflamatorios o ginecológicos",
          "Sensibilización del sistema nervioso",
          "Estrés, ansiedad o experiencias dolorosas previas",
        ],
      },
      {
        titulo: "Sensibilización central",
        contenido: "Con el tiempo, el sistema nervioso puede volverse más sensible, perpetuando el dolor incluso cuando la causa inicial ya no está presente. Muchas personas llegan a consulta después de haber normalizado el dolor o de haber pasado por múltiples tratamientos sin una mejoría clara.",
      },
      {
        titulo: "Abordaje desde la fisioterapia pélvica",
        contenido: "El tratamiento parte de una valoración integral y respetuosa, considerando:",
        lista: [
          "Estado del tejido muscular y fascial",
          "Tono y control del piso pélvico",
          "Movilidad pélvica y abdominal",
          "Historia médica y quirúrgica",
          "Impacto emocional y funcional del dolor",
        ],
      },
      {
        titulo: "Objetivo del tratamiento",
        contenido: "No es únicamente \"quitar el dolor\", sino mejorar la funcionalidad, la calidad de vida y la relación con el cuerpo, ayudando a que la persona recupere confianza en su movimiento y en sus actividades diarias.",
      },
    ],
  },
  "rehabilitacion-de-diastasis-abdominal": {
    titulo: "Rehabilitación Abdominal y Diástasis",
    subtitulo: "Recuperación funcional de la faja abdominal",
    imagen: "/99.png",
    intro: "La diástasis abdominal es la separación de los músculos rectos del abdomen. No es únicamente una condición estética, sino funcional.",
    destacado: "El objetivo es mejorar la función y la confianza corporal, no solo \"cerrar\" la diástasis.",
    secciones: [
      {
        titulo: "¿Qué puede afectar la diástasis?",
        lista: [
          "La estabilidad del core",
          "El movimiento y la postura",
          "La salud pélvica",
          "La confianza corporal",
        ],
      },
      {
        titulo: "Abordaje terapéutico",
        contenido: "El tratamiento se basa en:",
        lista: [
          "Control motor",
          "Trabajo respiratorio",
          "Integración del core",
          "Movimiento funcional",
        ],
      },
      {
        titulo: "Ejercicio Terapéutico Supervisado",
        contenido: "El ejercicio es una herramienta terapéutica poderosa cuando está bien indicada. No todo ejercicio es adecuado para todas las personas ni para todas las etapas.",
        lista: [
          "Parte de una valoración",
          "Se adapta a la condición de cada persona",
          "Evoluciona según el proceso",
          "Es supervisado por fisioterapia especializada",
        ],
      },
      {
        titulo: "Importante",
        contenido: "Aquí, el ejercicio forma parte del tratamiento, no es una moda ni una rutina genérica. El objetivo es mejorar la función de la faja abdominal, favorecer la estabilidad del core, reducir síntomas asociados y preparar para el retorno a la actividad física.",
      },
    ],
  },
  "disfuncion-sexual": {
    titulo: "Disfunción Sexual",
    subtitulo: "Abordaje fisioterapéutico de la sexualidad funcional",
    imagen: "/29.jpg",
    intro: "La sexualidad es parte integral de la salud y el bienestar. La disfunción sexual puede manifestarse como dolor, incomodidad, dificultad para la penetración, disminución del placer o miedo al contacto.",
    destacado: "La fisioterapia pélvica no impone, acompaña.",
    secciones: [
      {
        titulo: "Disfunciones que abordamos",
        lista: [
          "Dolor durante las relaciones sexuales (dispareunia)",
          "Vaginismo",
          "Disfunción eréctil",
          "Eyaculación precoz",
          "Anorgasmia",
        ],
      },
      {
        titulo: "Enfoque terapéutico",
        contenido: "El trabajo se realiza desde un enfoque:",
        lista: [
          "Profesional",
          "Respetuoso",
          "Libre de juicios",
          "Basado en consentimiento y comunicación",
        ],
      },
      {
        titulo: "¿Qué se trabaja?",
        contenido: "Se abordan factores musculares, de movilidad, control y percepción corporal, siempre respetando los tiempos y límites de cada persona.",
      },
    ],
  },
  "disfunciones-pelvicas-en-la-infancia": {
    titulo: "Disfunciones Pélvicas en la Infancia",
    subtitulo: "Fisioterapia pediátrica del suelo pélvico",
    imagen: "/43.png",
    intro: "Las disfunciones del suelo pélvico también pueden presentarse en niños y niñas, afectando su calidad de vida y desarrollo.",
    destacado: "El abordaje es adaptado a la edad, respetando los tiempos y necesidades de cada niño/a y su familia.",
    secciones: [
      {
        titulo: "Situaciones frecuentes",
        lista: [
          "Enuresis (escape de orina)",
          "Encopresis (escape de heces)",
          "Estreñimiento funcional",
          "Infecciones urinarias recurrentes",
        ],
      },
      {
        titulo: "El tratamiento incluye:",
        lista: [
          "Educación a la familia",
          "Trabajo de hábitos",
          "Ejercicios adaptados",
          "Seguimiento personalizado",
        ],
      },
    ],
  },
};

export default function ServicioPage() {
  const params = useParams();
  const slug = params.slug;
  const servicio = SERVICIOS_DATA[slug];

  if (!servicio) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Servicio no encontrado</h1>
          <Link href="/servicios" className="text-fuchsia-pink-600 hover:underline">
            Volver a servicios
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={servicio.imagen}
            alt={servicio.titulo}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-secondary-900/70" />
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
              <p className="text-fuchsia-pink-400 font-semibold tracking-widest uppercase text-sm mb-4">
                {servicio.subtitulo}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {servicio.titulo}
              </h1>
              <div className="w-20 h-1 bg-fuchsia-pink-500" />
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                {servicio.intro}
              </p>
              <div className="bg-purple-secondary-50 border-l-4 border-fuchsia-pink-500 p-6 rounded-r-xl">
                <p className="text-gray-700 leading-relaxed italic">
                  {servicio.destacado}
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-14 bg-purple-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {servicio.secciones.map((seccion, index) => (
                <RevealWrapper key={index}>
                  <div className="bg-white rounded-2xl p-6 shadow-md h-full">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-start gap-3">
                      <span className="w-8 h-8 bg-fuchsia-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </span>
                      {seccion.titulo}
                    </h2>
                    {seccion.contenido && (
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {seccion.contenido}
                      </p>
                    )}
                    {seccion.lista && (
                      <ul className="space-y-2">
                        {seccion.lista.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-purple-secondary-400 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-purple-secondary-700 relative overflow-hidden">
        <div className="absolute left-10 top-10 w-20 h-20 rounded-full border-2 border-white/15" />
        <div className="absolute right-20 bottom-10 w-32 h-32 rounded-full border-2 border-white/15" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <RevealWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Necesitas más información?
              </h2>
              <p className="text-purple-secondary-100 mb-8">
                Agenda una valoración para conocer cómo podemos ayudarte.
              </p>
              <a 
                href={`https://api.whatsapp.com/send?phone=5212224237337&text=Hola%20Cristal%20%F0%9F%91%8B%20quisiera%20información%20sobre%20${encodeURIComponent(servicio.titulo)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-secondary-700 font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Contactar por WhatsApp
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
