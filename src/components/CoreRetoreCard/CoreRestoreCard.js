'use client'
import Card from "../Card/Card"
import useIsDesktop from "@/hooks/useIsDesktop"
import { useFetch } from "@/hooks/useFetch"

const CoreRestoreCard = () => {
    const courses = useFetch(`/courses?populate=*`);

    const coursesData = courses.data.data

    const isDesktop = useIsDesktop()

  return (
    <div className={`${isDesktop ? 'flex flex-col justify-between' : ''} `}>
      <div className={`mb-4 ${isDesktop ? 'flex gap-4  ' : 'relative flex-col'} `}>
        {coursesData && coursesData.map((course) => (
            <Card key={course.id} course={course}/>
        ))}
      </div>
    </div>

  )
}

export default CoreRestoreCard