'use client'
import useIsDesktop from "@/hooks/useIsDesktop"

const Card = () => {

    const isDesktop = useIsDesktop()
  return (
    <div className='p-4 '>
        <div className={`${isDesktop ? 'max-w-sm' : 'max-w-5xl'} shadow-lg  bg-white border border-gray-200 rounded-lg`}>
            <a href="#">
            <img className="rounded-t-lg" src="/29.jpg" alt />
            </a>
            <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Taller Core Restore 2024
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Descubre el poder de los hipopresivos! 🧘‍♀️🧘‍♂️

                Te invitamos a nuestro taller de hipopresivos, una técnica revolucionaria que te ayudará a fortalecer tu abdomen, mejorar tu postura y aumentar tu bienestar general.
            </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-secondary-500 rounded-lg hover:bg-purple-secondary-700 focus:ring-4 focus:outline-none focus:ring-gray-100">
                Contactar
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Card



