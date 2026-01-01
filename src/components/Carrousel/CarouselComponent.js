"use client";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
 
export function CarouselComponent() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4  left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        src="/29.jpg"
        alt="Fisioterapia pélvica - Tratamiento especializado"
        width={600}
        height={400}
        className="object-cover"
      />
      <Image
        src="/13.jpg"
        alt="Fisioterapia pélvica - Acompañamiento en embarazo y postparto"
        width={600}
        height={400}
        className=" object-cover"
      />
      <Image
        src="/27.jpg"
        alt="Fisioterapia pélvica - Atención profesional y especializada"
        width={600}
        height={400}
        className=" object-cover"
      />
    </Carousel>
  );
}