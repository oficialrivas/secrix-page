"use client";
import React from "react";
import Team from "@/components/ui/team";

export const HeroParallax = ({
  products,
  header,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  header?: React.ReactNode;
}) => {
  void products;

  return (
    <div className="py-10 md:py-16 overflow-hidden antialiased relative">
      {header && <div className="absolute top-0 left-0 w-full z-20 pointer-events-auto">{header}</div>}
      <div className="pt-[112vh] sm:pt-[102vh] md:pt-[94vh]">
        <Team />
      </div>
    </div>
  );
};
