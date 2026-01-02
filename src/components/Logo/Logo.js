'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Logo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Image 
      src="/LogoDesktop.png" 
      alt="Cristal Sarabia" 
      width={isMobile ? 140 : 280}
      height={isMobile ? 40 : 80}
      className={isMobile ? 'h-10 w-auto' : 'h-16 w-auto'}
      priority
    />
  );
}
