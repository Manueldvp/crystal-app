import axios from 'axios';
import { NextResponse } from 'next/server';

   export async function GET() {

     try {
      const placeId = "ChIJ4dhTKFS5z4UR3fEa8TxPeGw"
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: 'Missing Google Maps API key' });
      }
  
      const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;
       const response = await axios.get(url, {
         params: {
           // Add any necessary query parameters here
         },
         headers: {
           'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`, // If needed
           // Add any other necessary headers here
         },
       });

       return NextResponse.json(response.data);
     } catch (error) {
       console.error(error);
       return NextResponse.error();
     }
   }
   
// export default async function handler(req, res) {
//     try {
      
//       const placeId = req.query.placeid || 'ChIJ4dhTKFS5z4UR3fEa8TxPeGw'; // Default value
  
//       if (!placeId) {
//         return res.status(400).json({ error: 'Missing required parameter: placeid' });
//       }
  
//       const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
//       if (!apiKey) {
//         return res.status(500).json({ error: 'Missing Google Maps API key' });
//       }
  
//       const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;
//       const response = await fetch(url);
  
//       if (response.ok) {
//         const data = await response.json();
//         res.status(200).json({ reviews: data.result.reviews });
//       } else {
//         console.error('Error fetching reviews:', response.status);
//         res.status(response.status).json({ error: 'Failed to fetch reviews' }); // More specific error
//       }
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//       res.status(500).json({ error: 'Internal server error' }); // Generic error for client
//     }
//   }