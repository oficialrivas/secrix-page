"use client";

import Link from "next/link";
import ScrollXHeading from "@/components/heading";
import ThemeSwitchIcon from "@/components/demos/themeswitchicon";
import NavbarFlow from "@/components/ui/navbar-flow";

const navLinks = [
  { text: "Services", url: "/servicios" },
  { text: "About", url: "/about" },
  { text: "Leadership", url: "/leadership" },
  { text: "Blog", url: "/blog" },
  { text: "Contact", url: "/contacto" },
];

export function SiteNavbar({ className = "z-50" }: { className?: string }) {
  return (
    <div className={`fixed top-[3%] left-0 right-0 ${className}`}>
      <NavbarFlow
        emblem={
          <Link href="/" aria-label="Ir a inicio" className="cursor-pointer">
            <ScrollXHeading className="h-8 w-auto sm:h-10" />
          </Link>
        }
        links={navLinks}
        rightComponent={<ThemeSwitchIcon />}
        showConnections={false}
      />
    </div>
  );
}
