"use client";

import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils"

const DEFAULT_AVATARS = [
  { src: "/blanco%201.png", alt: "" },
  { src: "/blanco%202%20.png", alt: "" },
  { src: "/BLANCO%203.png", alt: "" },
  { src: "/BLANCO%204.png", alt: "" },
];

export function AvatarGroupWithTooltips() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex items-center justify-center rounded-full border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] p-2.5 shadow-[0_0_24px_rgba(213,180,57,0.2)] backdrop-blur-md">
        <div className="flex items-center relative">
          {DEFAULT_AVATARS.map((avatar, index) => (
            <div key={index} className={cn("relative cursor-pointer hover:z-10", index > 0 && "-ml-2.5")}>
              <div className="relative bg-white rounded-full overflow-hidden h-12 w-12 sm:h-[52px] sm:w-[52px] md:h-14 md:w-14 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg border border-[#f3de6c]/30">
                <img
                  src={avatar.src}
                  alt={avatar.alt}
                  className="h-full w-full object-cover object-[center_22%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
