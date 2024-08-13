"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export function BlogCard({ blog }) {
  const { attributes } = blog;
  const text = attributes.Cardtext;
  const title = attributes.title;
  const author = attributes.author;
  const imgUrl = attributes.Cover.data.attributes.url;

  return (
    <Card className="w-full mb-4 flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <Image
          src={imgUrl}
          width={1000}
          height={1000}
          quality={100}
          className="h-full w-full object-cover"
          alt="img"
        />
      </CardHeader>
      <CardBody className="flex flex-col justify-between h-full">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {author}
        </Typography>
        <Typography variant="h4" color="gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {text}
        </Typography>
        <Link href={`/blogs/${blog.attributes.slug}`} className="mt-auto">
          <Button
            variant="text"
            className="flex text-purple-secondary-600 items-center gap-2"
          >
            Leer más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
