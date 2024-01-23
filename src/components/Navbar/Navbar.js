"use client";
import Link from "next/link";
import { useState} from "react";
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Menu from "../Menu/Menu";
import useIsDesktop from "@/hooks/useIsDesktop";
import useScroll from "@/hooks/useScroll";
import Logo from "../Logo/Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  const isVisible = useScroll()
  const isDesktop = useIsDesktop()

 
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
      <nav className={`bg-white  top-0 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}   ${isDesktop ? 'p-4' : ''} border-b-8 border-purple-100  shadow-lg transition-all duration-200 `}>
        <div className={` justify-end ${isDesktop ? 'flex items-center' : ''}  mx-auto p-5`}>
            
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Logo  />
                {/* <span className="self-center absolute text-2xl font-semibold whitespace-nowrap">
                  Cristal
                </span> */}
              </Link>
            
          <div className="flex justify-end">
            <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="text-white  bg-aquamarine-blue-300 hover:bg-fuchsia-pink-400 focus:ring-4 focus:outline-none  font-medium rounded-full text-sm px-3 py-2 text-center "
                >
                  Core Restore
                </button>
                <button
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  className={`inline-flex items-center p-2 w-15 h-10 justify-center rounded-lg lg:hidden focus:outline-none focus:ring-2 `}
                  aria-controls="navbar-cta"
                  aria-expanded={isOpen}
                  onClick={handleOnClick}
                  
                >
                  {!isOpen ? <Bars3Icon className="h-8 w-8 text-fuchsia-200" /> : <XMarkIcon className="h-8 w-8 text-fuchsia-200"/> }
                  
                </button>
              
              
              
            </div>
            
          </div>
          <Menu isOpen={isOpen} isDesktop={isDesktop}  />
        </div>
          
      </nav>
  );
}

export default Navbar;
