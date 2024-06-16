'use client'
import { BlogCard } from "../Card/BlogCard"
import { useFetch } from "@/hooks/useFetch"
import useIsDesktop from "@/hooks/useIsDesktop"
import { RevealWrapper  } from "next-reveal";

const BlogComponent =  () => {
    const isDesktop = useIsDesktop()
    const blogs = useFetch(`/blogs?populate=*`)
    const blogsData = blogs.data.data

    
    
        
  return (
    <section className={`${isDesktop ? '' : 'p-4'} w-full mt-10`}>
    <RevealWrapper>
    <div className="grid lg:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 gap-4 " >
        {blogsData && blogsData.slice(0, 2).map((blog) => (
            <BlogCard key={blog.id} blog={blog}/>
            
        ))}
            
    </div>
    </RevealWrapper>
    <RevealWrapper>
    <div className="grid g:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1  gap-4 " >
        {blogsData && blogsData.slice(2, 4).map((blog) => (
            <BlogCard key={blog.id} blog={blog}/>
            
        ))}
            
    </div>
    </RevealWrapper>
   </section>
  )
}

export default BlogComponent