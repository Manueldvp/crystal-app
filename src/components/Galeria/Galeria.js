'use client'
import useIsDesktop from "@/hooks/useIsDesktop";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

const Galeria = () => {

    const image = useFetch('/galerias?populate=*')
    const imagesData = image.data.data

    const imagesObtained = () => {
      // Verificar si imagesData está disponible
      if (!imagesData || !imagesData[0] || !imagesData[0].attributes || !imagesData[0].attributes.Imagenes || !imagesData[0].attributes.Imagenes.data) {
        return [];
      }
      
      // Si los datos están disponibles, devolver los URLs de las imágenes
      return imagesData[0].attributes.Imagenes.data.map(Imagenes => Imagenes.attributes.url);
    }
    
    
    const urls = imagesObtained()


    const isDesktop = useIsDesktop()
  return (
    <div className={`grid grid-cols-2 ${isDesktop ? 'w-2/3' : 'w-full p-4'}  md:grid-cols-4 mt-10 gap-4`}>
      <div className="grid gap-4">
      <RevealWrapper >
        <div className="transform transition duration-500 rounded-lg hover:scale-105">
          <Image
            className={`${isDesktop ? 'h-64' : 'h-80'}  w-full rounded-lg object-cover object-center`}
            height={500}
            width={500}
            src={urls.length > 0 ? urls[0] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
        <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? 'h-90' : 'h-80'} w-full rounded-lg object-cover object-center `}
            src={urls.length > 0 ? urls[1] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
        <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-64' : 'h-80'} w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[2] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
      </div>
      <div className="grid gap-4">
      <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? 'h-80' : 'h-90'} w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[2] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
        <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-96' : 'h-80'} max-w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[4] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
        <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-80' : 'h-80'} max-w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[5] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
      </div>
      <div className="grid gap-4">
      <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-80' : 'h-80'} w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[6] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
        <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-96 ' : 'h-80'} max-w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[7] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
        <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-80' : 'h-80'} max-w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[8] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
      </div>
      <div className="grid gap-4">
      <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-64' : 'h-80'} max-w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[9] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
        <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-90' : 'h-80'} max-w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[1] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
        <RevealWrapper >
        <div className="transform transition duration-500 hover:scale-105">
          <Image
            height={500}
            width={500}
            className={`${isDesktop ? ' h-64' : 'h-80'} max-w-full rounded-lg object-cover object-center`}
            src={urls.length > 0 ? urls[5] : '/NoFound.jpg'}
            loading="lazy"
            alt='img-gallery'
          />
        </div>
        </RevealWrapper>
      </div>
    </div>
    
  );
};

export default Galeria;
