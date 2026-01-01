export const metadata = {
  title: 'Servicios de Fisioterapia Pélvica',
  description: 'Servicios especializados: tratamiento de endometriosis, dolor pélvico, incontinencia, embarazo, postparto, prolapsos y rehabilitación abdominal en Puebla.',
  keywords: [
    'fisioterapia pélvica servicios',
    'tratamiento endometriosis',
    'dolor pélvico tratamiento',
    'incontinencia urinaria tratamiento',
    'fisioterapia embarazo',
    'recuperación postparto',
    'prolapso tratamiento',
    'diástasis abdominal',
  ],
  openGraph: {
    title: 'Servicios de Fisioterapia Pélvica | Cristal Sarabia',
    description: 'Servicios especializados en salud pélvica: endometriosis, dolor pélvico, incontinencia, embarazo, postparto y más.',
    url: 'https://cristalsarabia.com/servicios',
    images: [
      {
        url: '/images/endometriosis/main.png',
        width: 1200,
        height: 630,
        alt: 'Servicios de Fisioterapia Pélvica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Fisioterapia Pélvica',
    description: 'Servicios especializados en salud pélvica en Puebla, México.',
  },
  alternates: {
    canonical: 'https://cristalsarabia.com/servicios',
  },
}

export default function ServiciosLayout({ children }) {
  return children
}

