'use client'
import { StarIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import Link from 'next/link';


function Reviews() {

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState([]);

    useEffect(() => {
        
      async function fetchData() {
        try {
          const response = await fetch('/api/google');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setReviews(data.result.reviews);
        } catch (error) {
          setError(error.message);
        }
      }

      fetchData();
    }, []);

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     // const proxyUrl = 'http://localhost:3000/'
  //     const apiKey = process.env.GOOGLE_MAPS_API_KEY
  //     const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ4dhTKFS5z4UR3fEa8TxPeGw&fields=reviews&key=${apiKey}`
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setReviews(data.result.reviews);
  //       console.log(reviews);
  //     } catch (error) {
  //       console.error('Error fetching reviews:', error);
  //     }
  //   };
  //   fetchReviews();
  // }, []);

  return (
    
      <ul className='grid grid-cols-3  gap-4 w-2/3 mt-10'>
        {reviews.map((review) => (
        
          <li key={review.author_name} className=''>
            
              <div>
                <Link href={review.author_url} target='blank' >
                        <div className="group rounded-lg  bg-white relative  flex flex-col items-center hover:bg-fuchsia-pink-400 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 max-w-90 max-h-44  group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className=" text-base line-clamp-5 max-w-90 max-h-44  text-ellipsis overflow-hidden  leading-normal text-center mt-4 ">{review.text}</p>
                            </div>
                            <div className="text-white group-hover:text-fuchsia-pink-400 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src={review.profile_photo_url} alt="profile pictre" className="w-12 h-12" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">{review.author_name}</p>
                            <p className="text-base flex justify-center items-center gap-2  text-center text-gray-600">{review.rating} <StarIcon height={15} width={15} className=' text-fuchsia-pink-400'/> </p>
                        </div>
                        </Link>
                    </div>
                
          
          </li>
        ))}
      </ul>
  );
}

export default Reviews;


