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
      className={`bg-white transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } border-b border-gray-100 shadow-sm`}
    >
      <div className={`max-w-7xl mx-auto px-4 ${isDesktop ? 'py-3' : 'py-2'}`}>
        {/* Main navbar row */}
        <div className="flex items-center justify-between">
          {/* Logo - left */}
          <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

          {/* Right side: HIPOPOWER + Menu + Mobile button */}
          <div className="flex items-center gap-4">
            {/* HIPOPOWER button */}
            <Link 
              href='/hipo-power'
              className="text-white bg-aquamarine-blue-300 hover:bg-fuchsia-pink-400 font-medium rounded-full text-sm px-4 py-2 transition-colors"
            >
              HIPOPOWER
            </Link>

            {/* Desktop menu */}
            {isDesktop && (
              <Menu isOpen={isOpen} setIsOpen={setIsOpen} isDesktop={isDesktop} />
            )}
            
            {/* Mobile menu button */}
            {!isDesktop && (
            <button
              type="button"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-expanded={isOpen}
              onClick={handleOnClick}
            >
              {!isOpen ? (
                  <Bars3Icon className="h-6 w-6 text-gray-600" />
              ) : (
                  <XMarkIcon className="h-6 w-6 text-gray-600" />
              )}
            </button>
            )}
          </div>
        </div>

        {/* Mobile menu - below when open */}
        {!isDesktop && (
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} isDesktop={isDesktop} />
        )}
      </div>

      {/* Contact info bar */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <Link 
              href='https://maps.app.goo.gl/5317ZztLRFisfYZ76' 
              target="_blank"
              className="flex items-center gap-1.5 hover:text-purple-secondary-600 transition-colors"
            >
              <MapPinIcon className="h-4 w-4 text-purple-secondary-500"/>
              {isDesktop 
                ? "Torres Médicas Angelópolis II, Piso 4, Consultorio 408. Puebla, Puebla."
                : "Puebla, Puebla"
              }
            </Link>
            <div className="flex items-center gap-1.5">
              <PhoneIcon className="w-4 h-4 text-purple-secondary-500"/>
              <span>{isDesktop ? "Teléfono: " : ""}+52 222 423 7337</span>
    </div>
    </div>
    </div>
    </div>
    </nav>
  );
}

export default Navbar;
