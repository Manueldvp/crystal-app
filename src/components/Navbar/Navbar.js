"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon} from '@heroicons/react/24/outline'
import Menu from "../Menu/Menu";
import useIsDesktop from "@/hooks/useIsDesktop";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useIsDesktop()


  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-transparent backdrop-blur-sm  dark:bg-transparent shadow-lg ">
      <div className="max-w-screen-xl justify-end   flex flex-wrap items-center  mx-auto p-5">
          <Link
            href="/"
            className="flex items-center mr-11 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/cristallogo.png"
              width={80}
              height={500}
              className="h-8"
              alt="Logo"
            />
            {/* <span className="self-center absolute text-2xl font-semibold whitespace-nowrap">
              Cristal
            </span> */}
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-aquamarine-blue-100 hover:bg-fuchsia-pink-300 focus:ring-4 focus:outline-none  font-medium rounded-full text-sm px-5 py-2 text-center "
            >
              Core Restore
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className={`inline-flex items-center p-2 w-15 h-10 justify-center rounded-lg md:hidden focus:outline-none focus:ring-2  shadow-md `}
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
              onClick={handleOnClick}
              
            >
              <Bars3Icon className="h-10 w-10 text-fuchsia-pink-400" />
            </button>
          </div>
          
          <Menu isOpen={isOpen} isDesktop={isDesktop}  />
          
        </div>
    </nav>
  );
}

export default Navbar;
