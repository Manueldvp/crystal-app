'use client'
import useIsDesktop from "@/hooks/useIsDesktop"
import Image from "next/image"
import Link from "next/link"

const ServiceCard = ({ service }) => {
    const imgUrl = service.attributes.Cover.data.attributes.url
    const actualPage = window.location.pathname.split('/').pop()
    
    const isDesktop = useIsDesktop()
  return (
    
    <div className={`${isDesktop ? 'p-4' : 'pb-4'}`}>
        
        <div className={`${isDesktop ? 'max-w-sm' : 'max-w-5xl'} shadow-lg  bg-white border border-gray-200 rounded-lg h-full`}>
            
            <Link href={`/servicios/${actualPage}/${service.attributes.slug}`}>
            <Image className="rounded-t-lg h-64 object-cover" height={1000} width={800}  src={imgUrl} alt='img' />
            </Link>
            <div className="p-5">
                <div className="p-2">
                    <Link href={`/servicios/${actualPage}/${service.attributes.slug}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-secondary-700 hover:text-purple-secondary-500">
                        {service.attributes.title}
                        </h5>
                    </Link>
                    <p className="mb-3 font-normal text-justify text-gray-700 ">
                        {service.attributes.Cardtext}
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ServiceCard
