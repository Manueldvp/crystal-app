import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import SocialMediaButton from '@/components/SpeedDial/SpeedDialComponent'
import CookiesModal from '@/components/Cookies/Cookies'
import { FooterWithSocialLinks } from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cristal Sarabia',
  description: 'Potenciando la salud con Fisioterapia Pélvica especializada',
} 

export default function RootLayout({ children }) {

   
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.className} overflow-visible`}>
       
        <header className={`sticky top-0 z-50`} > 
          <Navbar/>   
        </header>
       
        <SocialMediaButton/>
     
        {children}  
        
        <CookiesModal/>
        <footer id='contacto'>
          <FooterWithSocialLinks/>
        </footer>
        
      </body>
    </html>
  )
}
