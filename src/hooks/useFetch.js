
import { useState, useEffect } from 'react';


export const useFetch = (url) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
};