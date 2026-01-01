export const metadata = {
  title: 'Test de Salud Pélvica',
  description: 'Evalúa tu salud pélvica con nuestro cuestionario interactivo. Descubre si podrías beneficiarte de fisioterapia pélvica especializada.',
  keywords: [
    'test salud pélvica',
    'cuestionario suelo pélvico',
    'evaluación pélvica',
    'síntomas endometriosis test',
    'incontinencia urinaria test',
    'postparto test',
  ],
  openGraph: {
    title: 'Test de Salud Pélvica | Cristal Sarabia',
    description: 'Evalúa tu salud pélvica con nuestro cuestionario interactivo.',
    url: 'https://cristalsarabia.com/quiz',
    images: [
      {
        url: '/43.png',
        width: 1200,
        height: 630,
        alt: 'Test de Salud Pélvica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test de Salud Pélvica',
    description: 'Evalúa tu salud pélvica con nuestro cuestionario interactivo.',
  },
  alternates: {
    canonical: 'https://cristalsarabia.com/quiz',
  },
}

export default function QuizLayout({ children }) {
  return children
}

