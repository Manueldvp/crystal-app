"use client";
import { usePageServices } from "@/hooks/usePageServices";
import Skeleton from "@/components/Skeleton/Skeleton";
import ServicesPage from "@/components/Servicios/ServicesPage";


export default function ServicesPageLoad() {
  const services = usePageServices();

  if (!services) {
    return <Skeleton/>;
  }

  return (
    <ServicesPage services={services}/>
  );
}
