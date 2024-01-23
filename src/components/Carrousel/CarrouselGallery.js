'use client'
import { Carousel } from "@material-tailwind/react";
 
export function CarrouselGallery() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl w-2/3">
      <img
        src="/29.jpg"
        alt="image 1"
        width={400}
        height={400}
        className=" object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        width={1400}
        height={400}
        className=" object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        width={1400}
        height={400}
        className=" object-cover"
      />
    </Carousel>
  );
}