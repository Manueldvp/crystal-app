"use client";
import Link from "next/link";
import TallerCards from "@/components/Card/TallerCards";
import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import { RevealWrapper } from "next-reveal";

const Eventos = () => {
  const courses = useFetch(`/courses?populate=*`);

  const coursesData = courses.data.data;

  return (
    <>
      <div className="bg-white ">
        <RevealWrapper>
          <div className=" px-6 ">
            <div className="lg:w-2/3 md:w-full  mx-auto py-4 bg-white ">
              <div className="relative rounded-lg">
                <Image
                  width={1000}
                  height={1000}
                  src="/bannercourse.png"
                  alt="banner"
                  className="w-full rounded-lg object-cover lg:h-[330px] lg:block  "
                />
                <div className="w-full rounded-lg h-full bg-black opacity-50 absolute top-0 left-0" />

                <div className="absolute lg:bottom-8 md:bottom-3 bottom-0 lg:px-7 md:px-10 px-4 py-4">
                  <p className="lg:text-4xl md:text-2xl text-2xl font-semibold leading-9 text-white">
                    Especializate Conmigo
                  </p>
                  <p className="text-base rounded-lg font-medium leading-none text-gray-800 bg-white px-2 py-2 max-w-[142px] mt-3 text-center">
                    Contactame
                  </p>
                  <div className="flex ml-2 gap-3 pt-4">
                    <Link href="https://api.whatsapp.com/send?phone=5212223590967&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg "
                      width={20}
                      height={20}
                      className=" hover:text-gray-300 cursor-pointer"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 
                  6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 
                  8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 
                  9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 
                  14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 
                  13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 
                  17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 
                  16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 
                  8.24048 5.99955 8.12044 6.014 8.00613Z"
                          fill="#ffffff"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 23C10.7764 23 
                  10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 
                  21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 
                  1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 
                  18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                    </Link>
                    <Link href="https://www.facebook.com/FisioterapiaCristal">
                      <svg
                        className="text-white hover:text-gray-300 cursor-pointer"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.75 10.0532C18.75 5.22119 14.832 1.30322 10 1.30322C5.16797 1.30322 1.25 5.22119 1.25 10.0532C1.25 14.4204 4.44922 18.0403 8.63281 18.6974V12.5833H6.41055V10.0532H8.63281V8.12549C8.63281 5.93291 9.93945 4.7208 11.9379 4.7208C12.8953 4.7208 13.8969 4.89189 13.8969 4.89189V7.04541H12.793C11.7066 7.04541 11.3668 7.71963 11.3668 8.4126V10.0532H13.7934L13.4059 12.5833H11.3672V18.6981C15.5508 18.0415 18.75 14.4216 18.75 10.0532Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    
                    <Link href="https://www.instagram.com/cristalsarabia_/">
                      <svg
                        className="text-white hover:text-gray-300 cursor-pointer"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6457 2.7082C14.6118 2.71109 15.5375 3.09616 16.2207 3.77931C16.9038 4.46246 17.2889 5.38818 17.2918 6.3543V13.6457C17.2889 14.6118 16.9038 15.5375 16.2207 16.2207C15.5375 16.9038 14.6118 17.2889 13.6457 17.2918H6.3543C5.38818 17.2889 4.46246 16.9038 3.77931 16.2207C3.09616 15.5375 2.71109 14.6118 2.7082 13.6457V6.3543C2.71109 5.38818 3.09616 4.46246 3.77931 3.77931C4.46246 3.09616 5.38818 2.71109 6.3543 2.7082H13.6457ZM13.6457 1.25H6.3543C3.54687 1.25 1.25 3.54687 1.25 6.3543V13.6457C1.25 16.4531 3.54687 18.75 6.3543 18.75H13.6457C16.4531 18.75 18.75 16.4531 18.75 13.6457V6.3543C18.75 3.54687 16.4531 1.25 13.6457 1.25Z"
                          fill="white"
                        />
                        <path
                          d="M14.7395 6.35449C14.5231 6.35449 14.3117 6.29034 14.1318 6.17016C13.9519 6.04998 13.8117 5.87916 13.729 5.6793C13.6462 5.47944 13.6245 5.25953 13.6667 5.04736C13.7089 4.8352 13.8131 4.64031 13.9661 4.48734C14.119 4.33438 14.3139 4.23021 14.5261 4.18801C14.7382 4.14581 14.9582 4.16747 15.158 4.25025C15.3579 4.33303 15.5287 4.47322 15.6489 4.65309C15.7691 4.83295 15.8332 5.04442 15.8332 5.26074C15.8335 5.40446 15.8054 5.54683 15.7506 5.67967C15.6957 5.8125 15.6152 5.9332 15.5135 6.03483C15.4119 6.13645 15.2912 6.21701 15.1584 6.27186C15.0255 6.32672 14.8832 6.3548 14.7395 6.35449Z"
                          fill="white"
                        />
                        <path
                          d="M10 7.0832C10.5769 7.0832 11.1408 7.25427 11.6205 7.57477C12.1002 7.89527 12.474 8.35082 12.6948 8.88379C12.9155 9.41677 12.9733 10.0032 12.8608 10.569C12.7482 11.1348 12.4704 11.6546 12.0625 12.0625C11.6546 12.4704 11.1348 12.7482 10.569 12.8608C10.0032 12.9733 9.41677 12.9155 8.8838 12.6948C8.35082 12.474 7.89528 12.1002 7.57478 11.6205C7.25428 11.1408 7.08321 10.5769 7.08321 10C7.08404 9.22667 7.39161 8.48525 7.93843 7.93843C8.48526 7.3916 9.22668 7.08403 10 7.0832ZM10 5.625C9.13471 5.625 8.28885 5.88159 7.56939 6.36232C6.84992 6.84305 6.28917 7.52633 5.95804 8.32576C5.6269 9.12519 5.54026 10.0049 5.70907 10.8535C5.87788 11.7022 6.29456 12.4817 6.90642 13.0936C7.51827 13.7054 8.29782 14.1221 9.14648 14.2909C9.99515 14.4597 10.8748 14.3731 11.6742 14.042C12.4737 13.7108 13.1569 13.1501 13.6377 12.4306C14.1184 11.7112 14.375 10.8653 14.375 10C14.375 8.83968 13.9141 7.72688 13.0936 6.90641C12.2731 6.08594 11.1603 5.625 10 5.625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>


      <div className="">
        
        <div className="flex flex-col  items-center ">
          <RevealWrapper className="flex py-10 lg:w-2/3 px-4 flex-col items-center justify-center">
              <h1 className="text-4xl  font-bold leading-9 text-gray-800">
              Programas
              </h1>
              <p className="text-base  font-medium leading-6 text-center text-gray-600  mt-4">
                Los programas son sesiones progresivas con una evaluación realizada por Cristal Sarabia, lo cual ayudaría a cumplir objetivos y metas en la salud pélvica.
              </p>
          </RevealWrapper>

          <RevealWrapper className="grid lg:w-2/3 md:w-full  px-4   items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-3 gap-4 mt-4">
            {coursesData &&
              coursesData.map((course) => (
                <TallerCards key={course.id} course={course} />
              ))}
          </RevealWrapper>
      
        </div>
        <div className="flex flex-col items-center ">
        <RevealWrapper className="flex py-14 lg:w-2/3 px-4  flex-col items-center justify-center">
          <h1 className="text-4xl text-center  font-bold  text-gray-800">
            Taller HIPO POWER Online y Presencial
          </h1>
          <p className="text-base font-medium text-center text-gray-600  mt-4">
          Tienes a tu disponibilidad el Taller Core Restore más que Hipopresivos, su duración puede ser corta pero con un gran impacto de aprendizaje, rutinas personalizadas. 
          </p>
        </RevealWrapper>
        </div>
        <RevealWrapper className="flex    flex-col items-center justify-center"> 
        <div className="lg:w-2/3 md:w-full px-4 flex  flex-col items-center justify-center">
            <Image width={2000} height={2000}  className="w-full rounded-t-lg" src="/25.jpg" alt="computer" />
            <div className="py-4 px-8 w-full flex justify-between   bg-purple-secondary-600">
              <p className="text-sm text-white font-semibold tracking-wide">Cristal Sarabia</p>
                 <p className="text-sm text-white font-semibold tracking-wide">HIPO POWER</p>
                  </div>
                   <div className="bg-white shadow-lg rounded-b-lg px-10 py-6  ">
                     <h1 className="text-3xl text-gray-800 font-semibold tracking-wider">Este taller está enfocado en el complejo Abdomino-Lumbo-Pélvico, y te ayudará a:</h1>
                      <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Tonificar tu suelo pélvico,
                        Mejorar tu presión abdominopélvica,
                        Mejorar tu postura,
                        Fortalecer tu faja abdominal,
                        Tratar dolores lumbares,
                        </p>
                        <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                        Las clases serán supervisadas por una fisioterapeuta pélvica y certificada internacionalmente como entrenadora de Hipopresivos por Low Pressure Fitness por Cristal Sarabia.
                        </p>
                        <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                        Aprenderás tanto recursos y contenido práctico como teórico:
                        </p>
                        <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-10 w-11/12">
                        - Valoración para personalización de rutinas.
                        </p>
                        <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                        - Atención personalizada
                        </p>
                        <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                        - Certificado de asistencia.
                        </p>
                    <div className="flex justify-end">
                    <Link href='https://api.whatsapp.com/send?phone=5212223590967&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta'>
              <div className="flex items-center max-w-64 cursor-pointer pb-4 md:pb-0">
                <h3 className="f-f-r bg-fuchsia-pink-500 hover:bg-fuchsia-pink-700 p-4 rounded-lg text-lg lg:text-2xl font-semibold text-white">
                  Empezar ya
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
              </Link>
                    </div>
                </div>
                
          </div>
          </RevealWrapper>
          </div>
              
    </>
  );
};

export default Eventos;
