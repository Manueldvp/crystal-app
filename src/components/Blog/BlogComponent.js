'use client'
import { BlogCard } from "../Card/BlogCard"
import { useFetch } from "@/hooks/useFetch"
import useIsDesktop from "@/hooks/useIsDesktop"


const BlogComponent =  () => {
    const isDesktop = useIsDesktop()
    const blogs = useFetch(`/blogs?populate=*`)
    const blogsData = blogs.data.data

    
    
        
  return (
    <section className={`${isDesktop ? '' : 'p-4'} mt-10`}>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 " >
        {blogsData && blogsData.slice(0, 2).map((blog) => (
            <BlogCard key={blog.id} blog={blog}/>
            
        ))}
            
    </div>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-4 " >
        {blogsData && blogsData.slice(2, 4).map((blog) => (
            <BlogCard key={blog.id} blog={blog}/>
            
        ))}
            
    </div>
   </section>
  )
}

export default BlogComponent