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
    handleResize(); // Llama a la función al montar el componente

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el evento al desmontar el componente
    };
  }, []);

  return (
    <div className='absolute pt-5 pb-5 left-0'>
      {isMobile ? (
        <Image className='pt-10' src="/Logo.png" alt="Logo Mobile" width={180} height={100} />
      ) : (
        <Image src="/Logo.png" alt="Logo Desktop" width={400} height={100} />
      )}
    </div>
  );
}
