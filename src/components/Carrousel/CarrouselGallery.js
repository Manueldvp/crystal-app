'use client'
import { Carousel } from "@material-tailwind/react";
import { useFetch } from "@/hooks/useFetch";
import useIsDesktop from "@/hooks/useIsDesktop";
import Image from "next/image";
 
export function CarrouselGallery() {
  const isDesktop = useIsDesktop()
  const image = useFetch('/galerias?populate=*')
  const imagesData = image.data.data
 
  const imagesObtained = () => {
    // Verificar si imagesData está disponible
    if (!imagesData || !imagesData[1] || !imagesData[1].attributes || !imagesData[1].attributes.Imagenes || !imagesData[1].attributes.Imagenes.data) {
      return [];
    }
    
    // Si los datos están disponibles, devolver los URLs de las imágenes
    return imagesData[1].attributes.Imagenes.data.map(Imagenes => Imagenes.attributes.url);
  }
  
  
  const urls = imagesObtained()

  return (
    <section className={`${isDesktop ? '' : ' px-4'} lg:w-2/3 sm:w-full`}>
    <Carousel transition={{ duration: 2 }} className={`rounded-xl  `}>
      <Image
        src={urls.length > 0 ? urls[0] : '/NoFound.jpg'}
        alt="image-carrousel-gallery"
        width={2000}
        height={2000}
        className=" object-cover"
      />
      <Image
        src={urls.length > 0 ? urls[1] : '/NoFound.jpg'}
        alt="image-carrousel-gallery"
        width={2000}
        height={2000}
        className=" object-cover"
      />
      <Image
        src={urls.length > 0 ? urls[2] : '/NoFound.jpg'}
        alt="image-carrousel-gallery"
        width={2000}
        height={2000}
        className=" object-cover"
      />
    </Carousel>
    </section>
  );
}