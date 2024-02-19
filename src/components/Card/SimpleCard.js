import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Link from "next/link";
   
  export function SimpleCard() {
    return (
      <Card className="mt-10 w-full">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          ¡Despierta! Tu Salud Te Necesita
          </Typography>
          <Typography>
            Es hora de hablar 
            sobre un tema que a menudo dejamos de lado: nuestra 
            salud. No, no te vayas aún. Esto es importante. ¿Sabías 
            que tu salud es tu mayor riqueza? Sin ella, todas las 
            otras cosas en la vida pierden su brillo.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Link href='/'>
            <Button className="bg-purple-secondary-600">Contactame</Button>
        </Link>
        </CardFooter>
      </Card>
    );
  }