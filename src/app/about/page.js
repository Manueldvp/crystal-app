import { ButtonColors } from "@/components/Buttom/Buttom";

const about = () => {
  return (
      
      <section className="2xl:container justify-center 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="bg-center mb-20 rounded-xl  bg-no-repeat bg-[url('/29.jpg')] bg-gray-500 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            ¿Quién es Cristal Sarabia?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Fisioterapeuta Pélvica Especializada en Uroginecologia & Sexualidad
            Funcional.
          </p>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Acerca de mi
            </h1>
            <p className="font-normal  text-base leading-6 text-gray-600 ">
              Con más de 4 años de experiencia en Puebla, México.
              Me especializo en ayudar a las mujeres a mejorar 
              su salud pélvica en todas las etapas de su vida.
              
              <span className="mt-2">
              Estoy comprometida con proporcionar atención de alta calidad a mis pacientes.
              Creo que todas las mujeres merecen sentirse bien con su salud pélvica, 
              y estoy aquí para ayudarlas a
              lograrlo.
              </span>
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full rounded-lg shadow-lg h-full"
              src="/25.jpg"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl mb-2 font-bold leading-9 text-gray-800 pb-4">
              Especializate Conmigo
            </h1>
            <h1 className="mb-2 text-gray-800 font-extrabold">
            Mejora Pélvica
            </h1>
            <p className="font-normal mb-6 text-base leading-6 text-gray-600 ">
            
            Nuestro curso de Mejora Pélvica está diseñado para ayudarte a 
            fortalecer y tonificar los músculos del suelo pélvico. Este curso es 
            ideal para cualquier persona que busque mejorar su postura, reducir el 
            dolor de espalda y aumentar la estabilidad del núcleo. A través de una 
            serie de ejercicios prácticos y teoría educativa, aprenderás cómo 
            fortalecer eficazmente esta área crucial del cuerpo.
            </p>
            <h1 className="mb-2 text-gray-800 font-extrabold">
            Hipopresivos
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
            Nuestro curso de Hipopresivos se centra en una técnica revolucionaria 
            que ayuda a reducir la presión en las cavidades torácica, abdominal y pélvica. 
            A través de la respiración y la postura, los hipopresivos pueden ayudar a 
            reducir la cintura, resolver problemas de incontinencia, mejorar la postura y 
            mucho más. Este curso es perfecto para aquellos que buscan una solución no 
            quirúrgica para mejorar la salud pélvica.
            </p>
            <ButtonColors/>
          </div>
          <div className="w-full lg:w-8/12   lg:pt-8">
               <h1 className="text-3xl lg:text-4xl mb-2 font-bold leading-9 text-gray-800 pb-4 text-center">
                  Cursos
          
                </h1>
            <div className="grid mb-0 mt-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4  rounded-md">
                
              <div className="p-4 pb-6 hover:cursor-pointer transform transition duration-500  hover:scale-105 flex justify-center flex-col items-center">
                <img
                  className="md:block  rounded-lg "
                  src="/27.jpg"
                  alt="Alexa featured Img"
                />
               
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Fisioterapia
                </p>
              </div>
              <div className="p-4 pb-6 flex transform transition duration-500  hover:scale-105 hover:cursor-pointer justify-center flex-col items-center">
                <img
                  className="md:block rounded-lg "
                  src="/27.jpg"
                  alt="Olivia featured Img"
                />
                
                <p className="font-medium  text-xl leading-5 text-gray-800 mt-4">
                  Hipopresivos
                </p>
              </div>
              <div className="p-4 pb-6 flex transform transition duration-500  hover:scale-105 justify-center hover:cursor-pointer flex-col items-center">
                <img
                  className="md:block rounded-lg "
                  src="/27.jpg"
                  alt="Liam featued Img"
                />
                
                <p className="font-medium hover:cursor-pointer text-xl leading-5 text-gray-800 mt-4">
                  Acupuntura
                </p>
              </div>
              <div className="p-4 pb-6 flex transform transition duration-500  hover:scale-105 justify-center hover:cursor-pointer flex-col items-center">
                <img
                  className="md:block rounded-lg"
                  src="/27.jpg"
                  alt="Elijah featured img"
                />
                
                <p className="font-medium text-xl  leading-5 text-gray-800 mt-4">
                  Rehabilitacion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default about;
