"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { ModemAnimatedFooter } from "@/components/ui/modem-animated-footer";

export function Footer() {
  return (
    <ModemAnimatedFooter
      brandName="Secrisk"
      brandDescription="Global security, intelligence, and risk management for complex environments."
      socialLinks={[
        {
          icon: <Image src="/ICONO1.png" alt="X" width={40} height={40} className="h-10 w-10 object-contain" />,
          href: "#",
          label: "X",
        },
        {
          icon: <Image src="/ICONO2.png" alt="LinkedIn" width={40} height={40} className="h-10 w-10 object-contain" />,
          href: "#",
          label: "LinkedIn",
        },
        {
          icon: <Image src="/ICONO3.png" alt="Instagram" width={40} height={40} className="h-10 w-10 object-contain" />,
          href: "#",
          label: "Instagram",
        },
        {
          icon: <Mail className="h-10 w-10" />,
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
