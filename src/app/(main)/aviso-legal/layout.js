export const metadata = {
  title: 'Aviso Legal y de Privacidad',
  description: 'Aviso legal y políticas de privacidad de cristalsarabia.com. Información sobre el responsable, propiedad intelectual y protección de datos personales.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Aviso Legal y de Privacidad | Cristal Sarabia',
    description: 'Aviso legal y políticas de privacidad de cristalsarabia.com',
    url: 'https://cristalsarabia.com/aviso-legal',
  },
  alternates: {
    canonical: 'https://cristalsarabia.com/aviso-legal',
  },
};

export default function AvisoLegalLayout({ children }) {
  return children;
}

