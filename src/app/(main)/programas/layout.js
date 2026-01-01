export const metadata = {
  title: 'Programas de Formación - Fisioterapia Pélvica',
  description: 'Programas de formación en hipopresivos, embarazo activo y más. Especialízate en fisioterapia pélvica con Cristal Sarabia en Puebla.',
  keywords: [
    'programas fisioterapia pélvica',
    'formación hipopresivos',
    'talleres suelo pélvico',
    'embarazo activo',
    'hipopower',
    'formación pélvica puebla',
  ],
  openGraph: {
    title: 'Programas de Formación | Cristal Sarabia',
    description: 'Programas de formación en fisioterapia pélvica y salud del suelo pélvico.',
    url: 'https://cristalsarabia.com/programas',
    images: [
      {
        url: '/bannercourse.png',
        width: 1200,
        height: 630,
        alt: 'Programas de Formación - Fisioterapia Pélvica',
      },
    ],
  },
  alternates: {
    canonical: 'https://cristalsarabia.com/programas',
  },
};

export default function ProgramasLayout({ children }) {
  return children;
}

