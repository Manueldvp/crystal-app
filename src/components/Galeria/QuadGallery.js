'use client'
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import useIsDesktop from "@/hooks/useIsDesktop";

export function QuadGallery() {
  const isDesktop = useIsDesktop()
  const image = useFetch('/galerias?populate=*')
  const imagesData = image.data.data

  const imagesObtained = () => {
    // Verificar si imagesData está disponible
    if (!imagesData || !imagesData[2] || !imagesData[2].attributes || !imagesData[2].attributes.Imagenes || !imagesData[2].attributes.Imagenes.data) {
      return [];
    }
    
    // Si los datos están disponibles, devolver los URLs de las imágenes
    return imagesData[2].attributes.Imagenes.data.map(Imagenes => Imagenes);
  }
  
  
  const images = imagesObtained()
 
   
    return (
      <div className={`grid lg:w-2/3 sm:w-full ${isDesktop ? '' : 'px-4'}  grid-cols-2 gap-4`}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              height={1000}
              width={1000}
              className="h-92 w-full rounded-lg object-cover object-center "
              src={image.attributes.url}
              alt="img"
            />
          </div>
        ))}
      </div>
    );
  }