'use client'
import Rating from "../Rating/Rating";
import useIsDesktop from "@/hooks/useIsDesktop";
const TestimonialCard = () => {
  const isDesktop = useIsDesktop()
  return (
    
    <div className={`grid mt-10 ${isDesktop ? 'w-2/3 ' : ' rounded-none'} mb-8 border border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 bg-white`}>
      <figure className="flex flex-col hover:bg-gray-100 items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
        <Rating/>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
          
          <h3 className="text-lg font-semibold mt-5 text-gray-900 ">
            Transformación Total con el Curso de Salud Pélvica
          </h3>
          <p className="my-4">
            Este curso ha sido un cambio de 
            juego para mí. Me ha proporcionado las 
            herramientas y el conocimiento que necesitaba 
            para mejorar mi salud pélvica. ¡Definitivamente 
            lo recomendaría a cualquiera que busque mejorar su bienestar!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
            <div>Dina Guerrero</div>
            <div className="text-sm text-gray-500  ">
              20/01/2024
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col hover:bg-gray-100 items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg ">
        <Rating/>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
          <h3 className="text-lg font-semibold  mt-5 text-gray-900 ">
            Impresionante Curso de Salud Pélvica
          </h3>
          <p className="my-4">
            ¡Qué increíble curso! Me ha ayudado a entender y mejorar mi salud pélvica de formas que nunca imaginé. Los ejercicios y las explicaciones son claros y fáciles de seguir. ¡Estoy muy agradecida por este recurso!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
            <div>Roberta Casas</div>
            <div className="text-sm text-gray-500 ">
              20/01/2024
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col hover:bg-gray-100 items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e ">
        <Rating/>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
          <h3 className="text-lg font-semibold mt-5 text-gray-900 ">
            Mejorando mi Vida con el Curso de Salud Pélvica
          </h3>
          <p className="my-4">
            Este curso ha sido una bendición. Me ha enseñado mucho sobre mi cuerpo y cómo cuidarlo mejor. Mi salud pélvica ha mejorado enormemente y me siento más fuerte y saludable. ¡Gracias por este maravilloso recurso!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 ">
              20/01/2024
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col hover:bg-gray-100 items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg ">
        <Rating/>
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
          <h3 className="text-lg font-semibold mt-5 text-gray-900 ">
            Un Recurso Invaluable para la Salud Pélvica
          </h3>
          <p className="my-4">
            Este curso es un recurso invaluable. Me ha proporcionado una gran cantidad de información y ejercicios útiles que han mejorado mi salud pélvica. ¡Estoy muy agradecida por todo lo que he aprendido!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
            <div>Joseph McFall</div>
            <div className="text-sm text-gray-500 ">
             20/01/2024
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialCard;
