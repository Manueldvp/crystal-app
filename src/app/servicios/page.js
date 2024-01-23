import Link from "next/link";

const Servicios = () => {
  return (
    <>
      <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex flex-col md:flex-row items-strech justify-between bg-white py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                Servicios
              </h1>
              <p className="text-base lg:text-xl text-gray-800 mt-2">
                Experiencia Inigualable
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img src="/25.jpg" alt="" />
            </div>
          </div>
          <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-white py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                ¡Descubre la excelencia!
              </h1>
            </div>
            
          </div>
        </div>
      </div>

      {/* Esto se puede volver un componente, asi consultar los servicios en la API del CMS */}

      <div className="md:mx-auto md:container px-4">
        <div className="pt-10 md:pt-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <Link href='/servicios/fisioterapia-pelvica'>
                  <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                    Fisioterapia Pélvica
                  </h1>
                  </Link>
                  <h2 className="text-lg lg:text-3xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                   La fisioterapia pélvica es una especialidad de la fisioterapia 
                   que se centra en tratar y prevenir diversas condiciones relacionadas 
                   con el suelo pélvico. El suelo pélvico es un conjunto de músculos, 
                   ligamentos y tejidos que proporcionan soporte a los órganos pélvicos, 
                   incluyendo la vejiga, el intestino y el útero en las mujeres, y la 
                   próstata en los hombres.
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
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
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png"
                  alt
                />
                
                  
              </div>
            </div>
          </div>
        </div>
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                    Hipopresivos
                  </h1>
                  <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">
                    Los ejercicios hipopresivos son una serie de técnicas que se utilizan para 
                    fortalecer la musculatura del suelo pélvico y la faja abdominal. Estos 
                    ejercicios se basan en la realización de posturas y movimientos que, 
                    combinados con técnicas de respiración específicas, generan una disminución 
                    de la presión en las cavidades torácica, abdominal y pélvica.
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
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
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
