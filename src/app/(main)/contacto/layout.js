export const metadata = {
  title: 'Contacto - Fisioterapia Pélvica en Puebla',
  description: 'Contacta con Cristal Sarabia, fisioterapeuta especializada en piso pélvico. Ubicación: Torres Médicas Angelópolis II, Piso 4, Consultorio 408, Puebla. Teléfono: +52 222 423 7337',
  keywords: [
    'contacto fisioterapeuta pélvica',
    'fisioterapia pélvica puebla contacto',
    'cristal sarabia contacto',
    'consultorio fisioterapia pélvica puebla',
    'dirección fisioterapeuta suelo pélvico',
  ],
  openGraph: {
    title: 'Contacto | Cristal Sarabia - Fisioterapia Pélvica',
    description: 'Contacta con Cristal Sarabia, fisioterapeuta especializada en piso pélvico en Puebla, México.',
    url: 'https://cristalsarabia.com/contacto',
    images: [
      {
        url: '/43.png',
        width: 1200,
        height: 630,
        alt: 'Contacto - Cristal Sarabia Fisioterapia Pélvica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Cristal Sarabia',
    description: 'Contacta con nuestra fisioterapeuta especializada en piso pélvico en Puebla.',
  },
  alternates: {
    canonical: 'https://cristalsarabia.com/contacto',
  },
};

export default function ContactoLayout({ children }) {
  return children;
}

