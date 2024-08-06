import { useState, useEffect } from 'react';

function useFetchData(apiKey) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ4dhTKFS5z4UR3fEa8TxPeGw&fields=reviews&key=${apiKey}`; // Use template literal for correct string formatting
        
        try {
          const response = await fetch(url);
          const data = await response.json();
          setReviews(data.result.reviews);
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };
  
      fetchData();
    }, [apiKey]); // Dependency on apiKey ensures refetch on change
  
    return { reviews };
  }
  
  export default useFetchData;