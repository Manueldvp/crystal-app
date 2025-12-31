import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuestionario | Cristal Sarabia',
  description: 'Descubre si necesitas fisioterapia pélvica',
}

export default function StandaloneLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

