"use client";
import { usePageServices } from "@/hooks/usePageServices";
import Skeleton from "@/components/Skeleton/Skeleton";
import useIsDesktop from "@/hooks/useIsDesktop";
import ServicesPage from "@/components/Servicios/ServicesPage";

export default function ServicesPageLoad() {
  const services = usePageServices();
  const isDesktop = useIsDesktop();

  if (!services) {
    return <Skeleton/>;
  }

  return (
    
    <ServicesPage services={services}/>
  );
}
