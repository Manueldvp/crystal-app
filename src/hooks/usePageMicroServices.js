import { useState, useEffect } from 'react'

export function usePageMicroServices() {
  const [page, setPage] = useState(null)
  

  useEffect(() => {
    const fetchBlog = async () => {
      const slug = window.location.pathname.split('/').pop()
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/micro-services?populate=*`, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      })
      const data = await res.json()
      
      const foundPage = data.data.find(page => page.attributes.slug === slug)
      
      setPage(foundPage)
  
    }

    fetchBlog()
  }, [])

  return page
}
