'use client'
import Card from "../Card/Card"
import useIsDesktop from "@/hooks/useIsDesktop"
import { useFetch } from "@/hooks/useFetch"
import { RevealWrapper  } from "next-reveal";

const CoreRestoreCard = () => {
    const courses = useFetch(`/courses?populate=*`);

    const coursesData = courses.data.data

    const isDesktop = useIsDesktop()

  return (
    <RevealWrapper className='flex justify-center xl:w-2/3 lg:w-full'>
    
      <div className={`mb-4  ${isDesktop ? 'flex  gap-4' : 'relative flex-col'} `}>
        {coursesData && coursesData.map((course) => (
            <Card key={course.id} course={course}/>
        ))}
      </div>
  
    </RevealWrapper>
  )
}

export default CoreRestoreCard