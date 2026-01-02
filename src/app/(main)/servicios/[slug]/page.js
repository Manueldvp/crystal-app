import ServiceContent, { SERVICIOS_DATA } from "./ServiceContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const servicio = SERVICIOS_DATA[slug];

  if (!servicio) {
    return {
      title: "Servicio no encontrado",
      description: "El servicio que buscas no está disponible.",
    };
  }

  const description = servicio.intro.substring(0, 155).trim();
  
  return {
    title: `${servicio.titulo} | Fisioterapia Pélvica en Puebla`,
    description: description.endsWith('.') || description.endsWith(',') || description.endsWith(';') 
      ? description 
      : description + '...',
    keywords: [
      servicio.titulo.toLowerCase(),
      servicio.subtitulo.toLowerCase(),
      "fisioterapia pélvica",
      "tratamiento suelo pélvico",
      "fisioterapia pélvica puebla",
      "puebla",
      ...servicio.subtitulo.toLowerCase().split(" ").filter(w => w.length > 3),
    ],
    openGraph: {
      title: `${servicio.titulo} | Cristal Sarabia`,
      description: servicio.intro.substring(0, 160) + "...",
      url: `https://cristalsarabia.com/servicios/${slug}`,
      images: [
        {
          url: servicio.imagen,
          width: 1200,
          height: 630,
          alt: servicio.titulo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: servicio.titulo,
      description: servicio.intro.substring(0, 160) + "...",
    },
    alternates: {
      canonical: `https://cristalsarabia.com/servicios/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICIOS_DATA).map((slug) => ({
    slug,
  }));
}

export default async function ServicioPage({ params }) {
  const { slug } = await params;
  return <ServiceContent slug={slug} />;
}
