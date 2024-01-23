'use client'

import useIsDesktop from "@/hooks/useIsDesktop";

const Galeria = () => {
    const isDesktop = useIsDesktop()
  return (
    <div className={`grid grid-cols-2 ${isDesktop ? 'w-2/3' : 'w-full p-4'}  md:grid-cols-4 mt-10 gap-4`}>
      <div className="grid gap-4">
        <div className="transform transition duration-500 rounded-lg hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt
          />
        </div>
        <div className="transform transition duration-500 hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            alt
          />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
