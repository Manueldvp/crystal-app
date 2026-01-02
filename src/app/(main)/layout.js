import Navbar from '@/components/Navbar/Navbar'
import SocialMediaButton from '@/components/SpeedDial/SpeedDialComponent'
import CookiesModal from '@/components/Cookies/Cookies'
import { FooterWithSocialLinks } from '@/components/Footer/Footer'
import BreadcrumbsSchema from '@/components/SEO/Breadcrumbs'

export default function MainLayout({ children }) {
  return (
    <>
      <BreadcrumbsSchema />
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <SocialMediaButton />
      {children}
      <CookiesModal />
      <footer id="contacto">
        <FooterWithSocialLinks />
      </footer>
    </>
  )
}

