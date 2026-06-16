"use client";

import { FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ModemAnimatedFooter } from "@/components/ui/modem-animated-footer";

export function Footer() {
  return (
    <ModemAnimatedFooter
      brandName="Secrisk"
      brandDescription="Global security, intelligence, and risk management for complex environments."
      socialLinks={[
        {
          icon: <FaTwitter className="h-10 w-10" />,
          href: "#",
          label: "X",
        },
        {
          icon: <FaLinkedinIn className="h-10 w-10" />,
          href: "#",
          label: "LinkedIn",
        },
        {
          icon: <FaInstagram className="h-10 w-10" />,
          href: "#",
          label: "Instagram",
        },
        {
          icon: <FaEnvelope className="h-10 w-10" />,
          href: "mailto:info@secrisk.com",
          label: "Email",
        },
      ]}
      navLinks={[
        { label: "Services", href: "/servicios" },
        { label: "About", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contacto" },
      ]}
    />
  );
}

export function FooterWithFadedBrand() {
  return <Footer />;
}
