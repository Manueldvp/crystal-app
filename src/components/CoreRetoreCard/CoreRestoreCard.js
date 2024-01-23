'use client'
import Card from "../Card/Card"
import useIsDesktop from "@/hooks/useIsDesktop"

const CoreRestoreCard = () => {

    const isDesktop = useIsDesktop()

  return (
    <div className={`${isDesktop ? 'flex flex-col justify-between' : ''} `}>
      <div className={`mb-4 ${isDesktop ? 'flex gap-4 ' : 'relative flex-col'} `}>
        <Card />
        <Card/>
        <Card/>
      </div>
    </div>

  )
}

export default CoreRestoreCard