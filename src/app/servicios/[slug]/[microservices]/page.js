"use client";
import { usePageMicroServices } from "@/hooks/usePageMicroServices";
import Skeleton from "@/components/Skeleton/Skeleton";
import useIsDesktop from "@/hooks/useIsDesktop";
import MicroServicesPage from "@/components/Servicios/MicroServicesPage";

export default function ServicesPageLoad() {
  const microServices = usePageMicroServices();
  const isDesktop = useIsDesktop();

  if (!microServices) {
    return <Skeleton/>;
  }

  return (
    
    <MicroServicesPage services={microServices}/>
  );
}