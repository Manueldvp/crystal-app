"use client";
import { usePageMicroServices } from "@/hooks/usePageMicroServices";
import Skeleton from "@/components/Skeleton/Skeleton";
import MicroServicesPage from "@/components/Servicios/MicroServicesPage";
import { RevealWrapper } from "@/components/RevealWrapper/RevealWrapper";

export default function ServicesPageLoad() {
  const microServices = usePageMicroServices();

  if (!microServices) {
    return <Skeleton/>;
  }

  return (
    <RevealWrapper>
    <MicroServicesPage services={microServices}/>
    </RevealWrapper>
  );
}