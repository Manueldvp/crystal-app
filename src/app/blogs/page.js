'use client'
import BlogCardComponent from "@/components/Blog/BlogCardComponent";
import { useFetch } from "@/hooks/useFetch"
import useIsDesktop from "@/hooks/useIsDesktop";
import { RevealWrapper  } from "@/components/RevealWrapper/RevealWrapper";

export default function BlogPage() {
  const isDesktop = useIsDesktop()

  const blogs = useFetch(`/blogs?populate=*`)
  const blogsData = blogs.data.data


  return (
    <>
      <div className="2xl:mx-auto 2xl:container w-full sm:px-6 px-4 py-16">
      <RevealWrapper>
      <div className="flex  items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex  flex-col  md:flex-row items-strech justify-between bg-white py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div className={`flex ${isDesktop ? 'shadow-lg' : ''} text-center  p-4 rounded-l-lg flex-col justify-center xl:w-1/2 lg:w-full`}>
              <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800">
                Blogs
              </h1>
              <p className="text-base lg:text-xl text-gray-800 mt-4">
              Nuestro objetivo es proporcionarte 
            contenido relevante, interesante y útil que te ayude y te informe.
              </p>
            </div>
            <div className="w-full shadow-lg flex justify-center md:justify-end">
            <video className={`h-full w-full object-cover ${isDesktop ? 'rounded-r-lg' : ' rounded-lg'} shadow-lg`}  autoPlay muted loop>
              <source src='/Cristal.mp4' type="video/mp4" />
            </video>
            </div>
            
          </div>
          
          </div>
          </RevealWrapper>

        <div className="flex justify-center">   
          <RevealWrapper className="grid lg:grid-cols-2 md:grid-cols-1 ">
          {blogsData && blogsData.map((blog) => (    
            <BlogCardComponent key={blog.id} blog={blog} />     
            ))}
           </RevealWrapper>
        </div>
      </div>
    </>
  );
  
  
}
