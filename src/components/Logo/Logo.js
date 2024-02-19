'use client'
import { useState, useEffect } from 'react';

export default function Logo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función al montar el componente

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el evento al desmontar el componente
    };
  }, []);

  return (
    <div className='absolute pt-5 pb-5 left-0'>
      {isMobile ? (
        <img className='pt-8 w-44' src="/LogoDesktop.png" alt="Logo Mobile"  />
      ) : (
        <img src="/LogoDesktop.png" className='mb-5 w-96'  alt="Logo Desktop"  />
      )}
    </div>
  );
}
