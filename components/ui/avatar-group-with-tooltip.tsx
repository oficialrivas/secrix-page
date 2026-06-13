"use client";

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils"

const DEFAULT_AVATARS = [
  {
    src: "/fotomigue1.png",
    alt: "Migue 1",
    name: "Migue 1",
    initials: "M1",
  },
  {
    src: "/fotomigue2.png",
    alt: "Migue 2",
    name: "Migue 2",
    initials: "M2",
  },
  {
    src: "/fotomigue3.png",
    alt: "Migue 3",
    name: "Migue 3",
    initials: "M3",
  },
  {
    src: "/fotomigue1.png",
    alt: "Migue 4",
    name: "Migue 4",
    initials: "M4",
  },
];

export function AvatarGroupWithTooltips() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex items-center justify-center rounded-full border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] p-2.5 shadow-[0_0_24px_rgba(213,180,57,0.2)] backdrop-blur-md">
        <div className="flex items-center relative">
          {DEFAULT_AVATARS.map((avatar, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className={cn("relative cursor-pointer hover:z-10", index > 0 && "-ml-2.5")}> 
                  <Avatar className="h-12 w-12 border-2 border-[#060a16] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg sm:h-[52px] sm:w-[52px] md:h-14 md:w-14">
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                    <AvatarFallback>{avatar.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="border-[#f3de6c]/40 bg-[rgba(6,10,22,0.94)] font-neue-montreal text-[#f9f1c9]">
                {avatar.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
