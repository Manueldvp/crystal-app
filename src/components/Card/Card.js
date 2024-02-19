"use client";
import useIsDesktop from "@/hooks/useIsDesktop";
import Image from "next/image";
import Link from "next/link";

const Card = ({ course }) => {
  const { attributes } = course;
  const description = attributes.Cardtext;
  const imgUrl = attributes.cover.data.attributes.url;

  const isDesktop = useIsDesktop();
  return (
    <div className={`${isDesktop ? '' : 'p-4'}`}>
      <div
        className={`${
          isDesktop ? "max-w-md" : "max-w-5xl"
        } shadow-lg  bg-white border border-gray-200 rounded-lg h-full`}
      >
        <Link href="/eventos">
          <Image
            className="rounded-t-lg h-64 object-cover"
            height={1000}
            width={800}
            src={imgUrl}
            alt="img"
          />
        </Link>
        <div className="p-5">
          <Link
            href="/eventos"
            className="hover:underline hover:transition-all hover:duration-500"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {attributes.title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-secondary-500 rounded-lg hover:bg-purple-secondary-700 focus:ring-4 focus:outline-none focus:ring-gray-100"
          >
            Contactar
            <svg
              className="rtl:rotate-180  w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
