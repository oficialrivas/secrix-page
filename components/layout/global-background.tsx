"use client";

import { MotionGrid } from "@/components/ui/motion-grid";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-0">
        <MotionGrid
          direction="left"
          speed="3s"
          opacity={0.15}
          enableGlow={true}
          lineColor="213, 180, 57"
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/90 via-[#0b1129]/70 to-[#001c49]/90" />
        </MotionGrid>
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_40%,transparent_70%)]" />
      </div>
    </div>
  );
}
