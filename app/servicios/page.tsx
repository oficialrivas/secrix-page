import type { Metadata } from "next";
import { ServicesPageNavbar } from "@/components/sections/services-page-navbar";
import { ServicesTimeline } from "@/components/sections/services-timeline";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de consultoria en seguridad, evaluacion de riesgos e inteligencia operacional de Secrix.",
};

export default function ServiciosPage() {
  return (
    <>
      <ServicesPageNavbar />

      <div className="pt-20 md:pt-24">
        <ServicesTimeline />
      </div>
    </>
  );
}
