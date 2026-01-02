const SITE_URL = "https://cristalsarabia.com";

export default function sitemap() {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/quiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/preguntas-frecuentes`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/programas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/agendar-cita`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const serviciosPages = [
    "endometriosis-adenomiosis",
    "embarazo-y-preparacion-al-parto",
    "postparto-y-recuperacion",
    "dolor-pelvico-cronico",
    "rehabilitacion-postquirurgica",
    "incontinencia-urinaria",
    "incontinencia-fecal",
    "prolapsos",
    "disfuncion-sexual",
    "disfunciones-coloproctologicas",
    "rehabilitacion-abdominal",
    "ejercicio-terapeutico",
  ].map((slug) => ({
    url: `${SITE_URL}/servicios/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const programasPages = [
    "hipopower",
    "embarazo-activo",
    "vendaje-linfatico-postparto",
  ].map((slug) => ({
    url: `${SITE_URL}/programas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...serviciosPages, ...programasPages];
}
