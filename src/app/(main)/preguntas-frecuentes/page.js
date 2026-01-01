import Faq from '@/components/FAQ/Faq';
import { RevealWrapper } from '@/components/RevealWrapper/RevealWrapper';

export const metadata = {
  title: 'Preguntas Frecuentes - Fisioterapia Pélvica',
  description: 'Respuestas a las preguntas más comunes sobre fisioterapia pélvica, suelo pélvico, embarazo, postparto, incontinencia y más. Encuentra información sobre nuestros tratamientos.',
  keywords: [
    'preguntas frecuentes fisioterapia pélvica',
    'faq suelo pélvico',
    'preguntas sobre incontinencia',
    'dudas embarazo postparto',
    'fisioterapia pélvica preguntas',
    'hipopresivos preguntas',
    'diástasis abdominal preguntas',
  ],
  openGraph: {
    title: 'Preguntas Frecuentes | Cristal Sarabia',
    description: 'Respuestas a las preguntas más comunes sobre fisioterapia pélvica y salud del suelo pélvico.',
    url: 'https://cristalsarabia.com/preguntas-frecuentes',
    images: [
      {
        url: '/43.png',
        width: 1200,
        height: 630,
        alt: 'Preguntas Frecuentes - Fisioterapia Pélvica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preguntas Frecuentes - Fisioterapia Pélvica',
    description: 'Respuestas a las preguntas más comunes sobre fisioterapia pélvica.',
  },
  alternates: {
    canonical: 'https://cristalsarabia.com/preguntas-frecuentes',
  },
};

// FAQ data for structured data
const faqsData = [
  {
    question: "¿Qué es la fisioterapia pélvica?",
    answer: "Es una rama de la fisioterapia que se centra en tratar problemas relacionados con el suelo pélvico.",
  },
  {
    question: "¿Qué son los ejercicios hipopresivos?",
    answer: "Son ejercicios que reducen la presión en la cavidad abdominal, fortaleciendo los músculos del suelo pélvico.",
  },
  {
    question: "¿Cómo se aborda el postparto inmediato?",
    answer: "Se enfoca en la recuperación física y emocional de la madre, incluyendo el cuidado del suelo pélvico.",
  },
  {
    question: "¿Qué es la rehabilitación abdominal?",
    answer: "Es el proceso de fortalecer y recuperar la función de los músculos abdominales después de una lesión o cirugía.",
  },
  {
    question: "¿Cómo puede ayudar la acupuntura en la fisioterapia?",
    answer: "La acupuntura puede aliviar el dolor y mejorar la función muscular en el tratamiento de disfunciones pélvicas.",
  },
  {
    question: "¿Qué es la diastasis abdominal?",
    answer: "Es la separación de los músculos rectos del abdomen, común después del embarazo.",
  },
  {
    question: "¿Cómo se abordan las disfunciones de suelo pélvico?",
    answer: "Mediante ejercicios específicos, terapias manuales y, en ocasiones, tratamientos quirúrgicos.",
  },
  {
    question: "¿Qué es la incontinencia urinaria?",
    answer: "Es la pérdida involuntaria de orina, que puede ser tratada con fisioterapia pélvica.",
  },
  {
    question: "¿Qué es la incontinencia fecal?",
    answer: "Es la incapacidad de controlar la evacuación, tratada con ejercicios de suelo pélvico y cambios dietéticos.",
  },
  {
    question: "¿Qué es la disfunción sexual?",
    answer: "Es cualquier problema que impide disfrutar o realizar el acto sexual satisfactoriamente.",
  },
  {
    question: "¿Qué son los prolapsos?",
    answer: "Es el descenso de los órganos pélvicos debido a la debilidad del suelo pélvico.",
  },
  {
    question: "¿Qué son las disfunciones coloproctológicas?",
    answer: "Son problemas relacionados con el colon, recto y ano, incluyendo incontinencia y prolapsos.",
  },
  {
    question: "¿Cuáles son los beneficios de la fisioterapia pélvica durante el embarazo?",
    answer: "La fisioterapia pélvica puede ayudar a prevenir y tratar problemas como la incontinencia urinaria y el dolor pélvico.",
  },
  {
    question: "¿En qué consiste la terapia manual en el tratamiento de disfunciones de suelo pélvico?",
    answer: "La terapia manual incluye técnicas como el masaje y la movilización de tejidos para mejorar la función del suelo pélvico.",
  },
  {
    question: "¿Qué es la biofeedback?",
    answer: "Es una técnica que utiliza sensores para medir la actividad muscular del suelo pélvico y ayudar al paciente a aprender a contraer y relajar estos músculos correctamente.",
  },
  {
    question: "¿Cómo se evalúa la diástasis abdominal?",
    answer: "Se evalúa mediante la medición de la separación entre los músculos rectos del abdomen.",
  },
  {
    question: "¿Qué ejercicios pueden ayudar a fortalecer el suelo pélvico?",
    answer: "Ejercicios como los Kegels y los hipopresivos son beneficiosos para fortalecer el suelo pélvico.",
  },
  {
    question: "¿Qué papel juega la nutrición en la rehabilitación del suelo pélvico?",
    answer: "Una nutrición adecuada puede ayudar a mejorar la elasticidad y la fuerza del tejido muscular del suelo pélvico.",
  },
  {
    question: "¿Cómo afecta el embarazo a la diástasis abdominal?",
    answer: "El embarazo puede causar la separación de los músculos abdominales debido al estiramiento del abdomen.",
  },
  {
    question: "¿Qué técnicas de relajación se utilizan en fisioterapia pélvica?",
    answer: "Técnicas como la respiración profunda y la meditación pueden ayudar a relajar los músculos del suelo pélvico.",
  },
  {
    question: "¿Qué es la terapia con láser en fisioterapia pélvica?",
    answer: "La terapia con láser puede ser utilizada para tratar el dolor y promover la cicatrización de tejidos en el área pélvica.",
  },
  {
    question: "¿Cómo se diagnostican las disfunciones de suelo pélvico?",
    answer: "El diagnóstico puede incluir exámenes físicos, pruebas de imagen y estudios urodinámicos.",
  },
  {
    question: "¿Qué es un pessary y cómo se utiliza?",
    answer: "Un pessary es un dispositivo que se inserta en la vagina para soportar los órganos pélvicos y tratar los prolapsos.",
  },
  {
    question: "¿Qué papel juega la psicología en el tratamiento de la disfunción sexual?",
    answer: "La terapia psicológica puede ayudar a abordar los aspectos emocionales y mentales asociados con la disfunción sexual.",
  },
  {
    question: "¿Cómo se puede prevenir la incontinencia urinaria?",
    answer: "La prevención puede incluir ejercicios del suelo pélvico, cambios en el estilo de vida y control de peso.",
  },
  {
    question: "¿Qué es la estimulación magnética extracorpórea?",
    answer: "Es una técnica no invasiva que utiliza campos magnéticos para estimular los nervios y músculos del suelo pélvico.",
  },
  {
    question: "¿Qué ejercicios se recomiendan para la recuperación postparto?",
    answer: "Se recomiendan ejercicios de bajo impacto, como caminar y ejercicios específicos para el suelo pélvico.",
  },
  {
    question: "¿Qué es la cirugía reconstructiva pélvica?",
    answer: "Es una cirugía que se realiza para corregir problemas como la diástasis abdominal y los prolapsos.",
  },
  {
    question: "¿Cómo se trata la disfunción coloproctológica?",
    answer: "El tratamiento puede incluir fisioterapia, medicamentos y, en algunos casos, cirugía.",
  },
];

export default function PreguntasFrecuentesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className="bg-white min-h-screen">
        <section className="w-full py-12 bg-gradient-to-br from-purple-secondary-50 to-fuchsia-pink-50">
          <div className="max-w-6xl mx-auto px-4">
            <RevealWrapper>
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Preguntas Frecuentes
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Encuentra respuestas a las preguntas más comunes sobre fisioterapia pélvica y salud del suelo pélvico
                </p>
              </div>
            </RevealWrapper>
          </div>
        </section>
        <Faq />
      </main>
    </>
  );
}

