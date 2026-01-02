const SITE_URL = "https://cristalsarabia.com";

// Use a recent date to force reindexing
const recentDate = new Date();

export default function sitemap() {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: recentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: recentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified: recentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/quiz`,
      lastModified: recentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/preguntas-frecuentes`,
      lastModified: recentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/programas`,
      lastModified: recentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: recentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/agendar-cita`,
      lastModified: recentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const serviciosPages = [
    "endometriosis-adenomiosis",
    "embarazo-y-preparacion-al-parto",
    "postparto",
    "disfunciones-pelvicas-en-el-adulto",
    "rehabilitacion-de-diastasis-abdominal",
    "disfuncion-sexual",
  ].map((slug) => ({
    url: `${SITE_URL}/servicios/${slug}`,
    lastModified: recentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const programasPages = ["hipo-power", "embarazo-activo"].map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: recentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...serviciosPages, ...programasPages];
}
