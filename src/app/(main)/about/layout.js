export const metadata = {
  title: 'Sobre Mí - Cristal Sarabia | Fisioterapeuta Pélvica en Puebla',
  description: 'Conoce a Cristal Sarabia, fisioterapeuta especializada en Uroginecología y Sexualidad Funcional con más de 5 años de experiencia. Formada en México, Colombia y Brasil. Fundadora de COMFIP.',
  keywords: [
    'cristal sarabia',
    'fisioterapeuta pélvica puebla',
    'uroginecología',
    'sexualidad funcional',
    'COMFIP',
    'fisioterapia suelo pélvico mexico',
    'fisioterapeuta especializada puebla',
  ],
  openGraph: {
    title: 'Sobre Mí - Cristal Sarabia | Fisioterapeuta Pélvica Especializada',
    description: 'Conoce a Cristal Sarabia, fisioterapeuta especializada en Uroginecología y Sexualidad Funcional con más de 5 años de experiencia. Formada en México, Colombia y Brasil.',
    url: 'https://cristalsarabia.com/about',
    type: 'profile',
    images: [
      {
        url: '/43.png',
        width: 1200,
        height: 630,
        alt: 'Cristal Sarabia - Fisioterapeuta Pélvica Especializada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Mí - Cristal Sarabia | Fisioterapeuta Pélvica',
    description: 'Fisioterapeuta especializada en Uroginecología y Sexualidad Funcional en Puebla, México.',
  },
  alternates: {
    canonical: 'https://cristalsarabia.com/about',
  },
}

export default function AboutLayout({ children }) {
  return children
}

