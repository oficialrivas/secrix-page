import type { Metadata } from "next";
import { ServicesPageNavbar } from "@/components/sections/services-page-navbar";
import ContactWithGlobe from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Secrix para consultoría en seguridad, evaluación de riesgos e inteligencia operacional.",
};

export default function ContactoPage() {
  return (
    <>
      <ServicesPageNavbar />

      <div className="pt-20 md:pt-24">
        <ContactWithGlobe />
      </div>
    </>
  );
}
