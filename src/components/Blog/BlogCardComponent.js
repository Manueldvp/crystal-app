import Image from "next/image";
import Link from "next/link";

const BlogCardComponent = ({blog}) => {
  const imgUrl = blog.attributes.Cover.data.attributes.url
  return (
    <div className=" sm:px-6 px-2 py-2">
      <div className="md:flex shadow-lg pb-6  rounded-lg items-center justify-center mt-12">
        <div className="md:w-full lg:w-full">
          <div>
            <div className="relative  border rounded-lg">
              <Image src={imgUrl} className="  rounded-t-lg" height={500} width={1000} alt="image" />
              <div className="bg-white  rounded-ss-md rounded-ee-lg absolute top-0 left-0">
                <p className="text-sm shadow-lg leading-4 py-2 px-2 text-gray-800">
                  {blog.attributes.Create}
                </p>
              </div>
            </div>
            <p className="text-base mb-4 px-4 font-light leading-4 text-gray-800 mt-6">
            {blog.attributes.author}
            </p>
            <h1 className="text-2xl px-4 font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
                {blog.attributes.title}
            </h1>
            <p className="text-base px-4 leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
                {blog.attributes.Cardtext}
            </p>
            <Link href={`/blogs/${blog.attributes.slug}`} className="flex rounded-lg ml-4 items-center justify-between w-44 mt-6 bg-purple-secondary-500 p-4 hover:bg-purple-secondary-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base px-4 font-medium leading-4 text-white">
                Leer más
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardComponent;
