export const metadata = {
  title: 'Sobre Mí - Cristal Sarabia',
  description: 'Conoce a Cristal Sarabia, fisioterapeuta especializada en Uroginecología y Sexualidad Funcional con más de 5 años de experiencia. Formada en México, Colombia y Brasil.',
  keywords: [
    'cristal sarabia',
    'fisioterapeuta pélvica puebla',
    'uroginecología',
    'sexualidad funcional',
    'COMFIP',
    'fisioterapia suelo pélvico mexico',
  ],
  openGraph: {
    title: 'Sobre Mí - Cristal Sarabia | Fisioterapia Pélvica',
    description: 'Conoce a Cristal Sarabia, fisioterapeuta especializada en Uroginecología y Sexualidad Funcional con más de 5 años de experiencia.',
    url: 'https://cristalsarabia.com/about',
    images: [
      {
        url: '/43.png',
        width: 1200,
        height: 630,
        alt: 'Cristal Sarabia - Fisioterapeuta Pélvica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Mí - Cristal Sarabia',
    description: 'Fisioterapeuta especializada en Uroginecología y Sexualidad Funcional.',
  },
  alternates: {
    canonical: 'https://cristalsarabia.com/about',
  },
}

export default function AboutLayout({ children }) {
  return children
}

