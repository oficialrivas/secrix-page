import type { Metadata } from "next";
import { ServicesPageNavbar } from "@/components/sections/services-page-navbar";
import { AboutCards } from "@/components/sections/about-cards";

export const metadata: Metadata = {
  title: "About",
  description:
    "Strategic Security & Risk Management Across the Americas — Secrisk International",
};

export default function AboutPage() {
  return (
    <>
      <ServicesPageNavbar />
      <AboutCards />
    </>
  );
}
