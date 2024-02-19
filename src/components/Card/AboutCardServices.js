import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
   
  export function AboutCardServices({services}) {
    const serviceUrl = `/servicios/${services.attributes.slug}`
    return (
      <Card className="mt-6 w-90">
        <CardHeader  className="relative h-40">
          <Image
            src={services.attributes.Cover.data.attributes.url}
            height={500}
            width={500}
            className="w-full"
            alt='img'
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {services.attributes.title}
          </Typography>
          <Typography>
            {services.attributes.ServicePageText}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Link href={serviceUrl}>
            <Button className="bg-purple-secondary-600">Más info</Button>
        </Link>
        </CardFooter>
      </Card>
    );
}