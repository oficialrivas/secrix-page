import type { Metadata } from "next";
import { PageEntrance } from "@/components/layout/page-entrance";
import { ServicesPageNavbar } from "@/components/sections/services-page-navbar";
import { AboutCards } from "@/components/sections/about-cards";

export const metadata: Metadata = {
  title: "About",
  description:
    "International security and risk management firm headquartered in Miami, delivering intelligence-led protection across the Americas and beyond.",
};

export default function AboutPage() {
  return (
    <>
      <ServicesPageNavbar />
      <PageEntrance>
        <AboutCards />
      </PageEntrance>
    </>
  );
}
