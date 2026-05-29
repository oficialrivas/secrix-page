"use client";

import NavbarFlow from "@/components/ui/navbar-flow";
import ScrollXHeading from "@/components/heading";
import ThemeSwitchIcon from "@/components/demos/themeswitchicon";
import Link from "next/link";

export function ServicesPageNavbar() {
  return (
    <div className="fixed top-[3%] left-0 right-0 z-50">
      <NavbarFlow
        emblem={
          <Link href="/" aria-label="Ir a inicio" className="cursor-pointer">
            <ScrollXHeading className="h-8 w-auto sm:h-10" />
          </Link>
        }
        links={[
          { text: "Services", url: "/servicios" },
          { text: "About", url: "/about" },
          { text: "Contact", url: "/contacto" },
        ]}
        rightComponent={<ThemeSwitchIcon />}
        showConnections={false}
      />
    </div>
  );
}
