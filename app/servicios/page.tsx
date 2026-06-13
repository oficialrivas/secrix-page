import type { Metadata } from "next";
import { PageEntrance } from "@/components/layout/page-entrance";
import { ServicesPageNavbar } from "@/components/sections/services-page-navbar";
import { ServicesScrollingShowcase } from "@/components/sections/services-scrolling-showcase";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Secrix security consulting, risk assessments, intelligence, investigations, and training services.",
};

export default function ServiciosPage() {
  return (
    <>
      <ServicesPageNavbar />

      <PageEntrance className="pt-20 md:pt-24">
        <ServicesScrollingShowcase />
      </PageEntrance>
    </>
  );
}
