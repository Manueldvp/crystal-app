"use client";
import { usePageBlogs } from "@/hooks/usePageBlogs";
import Image from "next/image";
import Link from "next/link";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { NavbarBottom } from "@/components/NavbarBottom/NavbarBottom";
import useIsDesktop from "@/hooks/useIsDesktop";


export default function BlogPage() {
  const blog = usePageBlogs();
  const isDesktop = useIsDesktop();

  if (!blog) {
    return <div>Cargando...</div>;
  }

  
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className={`${isDesktop ? 'flex' : 'flex-row'} items-center justify-between mb-5`}>
        <div className={`flex ${isDesktop ? '' : 'mb-10'} items-center justify-center`}>
          <NavbarBottom blogTittle={blog.attributes.title}/>
        </div>
        <div className=" flex">
          <div className="h-8 w-8 mb-4 lg:mb-0 mr-4">
            <Image src={blog.attributes.AuthorImg.data.attributes.url} alt='image' height={500} width={500} className="h-full w-full rounded-full overflow-hidden shadow" />
          </div>
          <div className="flex-row">
            <p className="font-medium text-justify text-base leading-6 text-gray-600">
              {blog.attributes.author}</p>
            <p className="font-light text-xs text-justify 
            leading-6 text-gray-600">{blog.attributes.Create}</p>
          </div>
        </div>
        
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full text-gray-800 font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            {blog.attributes.title}
          </h2>
          <p className="font-normal text-justify text-base leading-6 text-gray-600 mt-6">
            {blog.attributes.BlogText}
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <Image
            className="lg:block rounded-lg hidden w-full"
            height={600}
            width={600}
            src={blog.attributes.Cover.data.attributes.url}
            alt="people discussing on board"
            priority={true}
          />
          <Image
            className="lg:hidden rounded-lg sm:block hidden w-full"
            height={600}
            width={600}
            src={blog.attributes.Cover.data.attributes.url}
            alt="people discussing on board"
            priority={true}
          />
          <Image
            className="sm:hidden rounded-lg block w-full"
            height={600}
            width={600}
            src={blog.attributes.Cover.data.attributes.url}
            alt="people discussing on board"
            priority={true}
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col md:gap-8 gap-8 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
            <h2 className="w-full mb-10 flex text-gray-800  justify-center font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
              Consideraciones
            </h2>
            {blog.attributes.Contenido.map((item, index) => {
              
              return (
                  <p
                      className={`mb-5 text-justify font-normal text-base leading-6 text-gray-600 mt-6 w-4/3 ${item.children[0].bold ? ' font-semibold text-lg' : ''}`}
                      key={index}
                  >
                      {item.children[0].text}
                  </p>
                  );
            })}
        </div>
        <div className="w-full  lg:w-6/12">
          <div>
            <h2 className="w-full mb-10 flex text-gray-800  justify-center font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
              Recomendaciones
            </h2>
          </div>
          {blog.attributes.recommendations.data.map((item, index) => {
            return (
              <div
                key={index}
                className="grid  mb-10 mt-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10"
              >
                <div className="flex p-4  rounded-lg shadow-md">
                  <div className="mr-6 flex object-cover">
                    <div>
                      <div className="group mx-auto container max-w-[228px] px-2  bg-white rounded relative">
                        <div className="flex justify-center">
                          <ExclamationCircleIcon className="w-6 h-6 text-purple-secondary-600 " />
                        </div>
                        <div className="opacity-0 absolute mb-5 group-hover:opacity-100 transition-opacity duration-200 bottom-full  left-1/2 transform -translate-x-1/2">
                          <Link href="https://api.whatsapp.com/send?phone=5212223590967&text=Hola%20Cristal%20%F0%9F%91%8B%20te%20sigo%20en%20Instagram%20y%20quisiera%20agendar%20una%20consulta">
                            <p className="text-xs rounded-full bg-purple-secondary-500 hover:bg-purple-secondary-700 p-4 leading-none text-white pt-2 pb-2 ">
                              Aprender
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                      {item.attributes.RecomendationsTextTitle}
                    </p>
                    <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                      {item.attributes.RecomendationsText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
