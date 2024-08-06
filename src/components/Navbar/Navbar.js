"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, MapPinIcon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Menu from "../Menu/Menu";
import useIsDesktop from "@/hooks/useIsDesktop";
import useScroll from "@/hooks/useScroll";
import Logo from "../Logo/Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const isVisible = useScroll();
  const isDesktop = useIsDesktop();

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-white   top-0 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }   ${
        isDesktop ? "p-2" : "p-3"
      } border-b-8 border-purple-100  shadow-lg transition-all duration-200 `}
    >
      
     
      <div
        className={` justify-end ${
          isDesktop ? "flex items-center pt-5" : ""
        }  mx-auto `}
      >
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Logo />
        </Link>

        <div className="flex justify-end">
          <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
         
            <Link href='/hipo-power'
              type="button"
              className={`text-white items-center bg-aquamarine-blue-300 hover:bg-fuchsia-pink-400   font-medium rounded-full text-sm  ${isDesktop ? 'mr-4 px-4' : 'px-4'} py-2 text-center`}
            >
              HIPO POWER
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className={`inline-flex items-center p-2 w-15 h-10 justify-center rounded-lg ${isDesktop ? 'hidden': ''} `}
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
              onClick={handleOnClick}
            >
              {!isOpen ? (
                <Bars3Icon className="h-8 w-8 text-fuchsia-200" />
              ) : (
                <XMarkIcon className="h-8 w-8 text-fuchsia-200" />
              )}
            </button>
          </div>
          
        </div>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} isDesktop={isDesktop} />
      </div>
      {isDesktop ? <Link href='https://maps.app.goo.gl/5317ZztLRFisfYZ76' className="flex w-full font-light text-sm items-center justify-between ">
        
        <div className="flex ml-6 relative items-center">
        <h2 className="flex gap-2 hover:text-purple-secondary-700"><MapPinIcon className="h-4 w-4 text-purple-secondary-700"/> Torres Médicas Angelópolis, periférico Ecológico #3507 Tlax, 72820. San Andrés Cholula. Puebla, México.</h2>
        </div>
        <div>
        <h3 className="flex mr-12 gap-2 items-center hover:text-purple-secondary-700" > 
         <PhoneIcon className="w-4 h-4 text-purple-secondary-700"/>
         Teléfono: +52 1 222 359 0967</h3> 
        
        </div>
       </Link> : <Link href='https://maps.app.goo.gl/5317ZztLRFisfYZ76' className="flex w-full font-lightm mt-1 text-xs items-center justify-between ">
        
        <div className="flex  relative items-center">
        <h2 className="flex gap-2 hover:text-purple-secondary-700"><MapPinIcon className="h-4 w-4 text-purple-secondary-700"/>Puebla, México.</h2>
        </div>
        <div>
        <h3 className="flex mr-3 gap-2 items-center hover:text-purple-secondary-700" > 
         <PhoneIcon className="w-4 h-4  text-purple-secondary-700"/>
        +52 1 222 359 0967</h3> 
        
        </div>
       </Link> }
      
    </nav>
  );
}

export default Navbar;
