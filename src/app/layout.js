import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://cristalsarabia.com";
const SITE_NAME = "Cristal Sarabia - Fisioterapia Pélvica";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cristal Sarabia | Fisioterapia Pélvica en Puebla",
    template: "%s | Cristal Sarabia",
  },
  description:
    "Fisioterapeuta especializada en Uroginecología y Sexualidad Funcional. Tratamiento de dolor pélvico, endometriosis, incontinencia, embarazo y postparto.",
  keywords: [
    "fisioterapia pélvica",
    "fisioterapeuta pélvica puebla",
    "suelo pélvico",
    "uroginecología",
    "endometriosis tratamiento",
    "adenomiosis",
    "dolor pélvico crónico",
    "incontinencia urinaria",
    "fisioterapia embarazo",
    "recuperación postparto",
    "disfunción sexual femenina",
    "prolapso",
    "diástasis abdominal",
    "hipopresivos",
    "cristal sarabia",
  ],
  authors: [{ name: "Cristal Sarabia" }],
  creator: "Cristal Sarabia",
  publisher: "Cristal Sarabia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Cristal Sarabia | Fisioterapia Pélvica Especializada",
    description:
      "Fisioterapeuta especializada en Uroginecología y Sexualidad Funcional. Tratamiento de dolor pélvico, endometriosis, incontinencia y más.",
    images: [
      {
        url: "/43.png",
        width: 1200,
        height: 630,
        alt: "Cristal Sarabia - Fisioterapia Pélvica Especializada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristal Sarabia | Fisioterapia Pélvica Especializada",
    description:
      "Fisioterapeuta especializada en Uroginecología y Sexualidad Funcional en Puebla, México.",
    images: ["/43.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: SITE_URL,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-16x16.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Cristal Sarabia - Fisioterapia Pélvica Especializada",
              description:
                "Fisioterapeuta especializada en Uroginecología y Sexualidad Funcional en Puebla, México",
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/LogoDesktop.png`,
                name: "Cristal Sarabia Logo",
              },
              image: `${SITE_URL}/43.png`,
              telephone: "+52 222 423 7337",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Torres Médicas Angelópolis II, Piso 4, Consultorio 408",
                addressLocality: "Puebla",
                addressRegion: "Puebla",
                postalCode: "72000",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.0414,
                longitude: -98.2063,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "$$",
              medicalSpecialty: [
                "Pelvic Floor Physical Therapy",
                "Urogynecology",
                "Women's Health",
              ],
              sameAs: [
                "https://www.instagram.com/cristalsarabia.fp",
                "https://www.facebook.com/cristalsarabia.fp",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} overflow-visible`}>{children}</body>
    </html>
  );
}
