import Image from "next/image";
import Link from "next/link";
const ServiciosLanding = ({ service }) => {
  return (
    <div className="md:mx-auto md:container px-4">
      <div className="pt-10 md:pt-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center pb-12">
            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
              <div className="py-2 text-color">
                <Link href={`/servicios/${service.attributes.slug}`}>
                  <h1 className=" text-gray-800 text-base lg:text-4xl md:leading-snug   font-black">
                    {service.attributes.title}
                  </h1>
                </Link>
                <h2 className="text-lg text-justify text-gray-600 lg:text-2xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                  {service.attributes.ServiceText}
                </h2>
              </div>
              <div className="flex items-center max-w-64 cursor-pointer pb-4 md:pb-0">
                <h3 className="f-f-r bg-blue-health-500 hover:bg-blue-health-700 p-4 rounded-lg text-lg lg:text-2xl font-semibold text-white">
                  Agenda tu Cita
                </h3>
                <div className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                      fill="#D53F8C"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 mt-5 shadow-lg md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <Image
                className="absolute  w-full h-full inset-0 object-cover object-center rounded-md"
                height={500}
                width={500}
                src={service.attributes.Cover.data.attributes.url}
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosLanding;
