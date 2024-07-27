import { Collapse, Button, Card, CardBody } from "@material-tailwind/react";
import { useState } from "react";
import ServiceCard from "../Card/ServiceCard";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function CollapseDefault({ microServiceData, services }) {
  const isDesktop = useIsDesktop()
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <p className="text-gray-700 mt-10 text-center font-medium">Ver más</p>
    <ChevronDoubleDownIcon
      className="text-purple-secondary-600 w-20 h-20 hover:cursor-pointer flex items-center justify-center p-4 hover:shadow-lg  rounded-lg"
      width={100}
      height={100}
      onClick={toggleOpen}
    ></ChevronDoubleDownIcon>
    
    </div>
      <Collapse open={open}>
        <Card className="my-4 ">
            <div className={`${isDesktop ? 'grid  grid-cols-3' : "grid  grid-cols-1"} `}>
              {microServiceData &&
                microServiceData.map((service) =>
                  services.attributes.micro_services.data &&
                  services.attributes.micro_services.data.length > 0 ? (
                    <ServiceCard key={service.id} service={service} />
                  ) : null
                )}
            </div>
         
        </Card>
      </Collapse>
    </>
  );
}
