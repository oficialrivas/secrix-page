"use client";

import { cn } from "@/lib/utils";

interface MotionGridProps {
  children?: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  speed?: string;
  opacity?: number;
  enableGlow?: boolean;
  lineColor?: string;
}

export function MotionGrid({
  children,
  className,
  direction = "left",
  speed = "3s",
  opacity = 0.15,
  enableGlow = true,
  lineColor = "6, 182, 212",
}: MotionGridProps) {
  const gridColor = `rgba(${lineColor}, ${opacity})`;
  const glowColor = `rgba(${lineColor}, ${opacity * 0.4})`;
  const isHorizontal = direction === "left" || direction === "right";
  const animDir = direction === "left" || direction === "up" ? "reverse" : "normal";
  const animName = isHorizontal ? "motionGridH" : "motionGridV";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${gridColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: `${animName} ${speed} linear infinite ${animDir}`,
          }}
        />

        {enableGlow && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 38px,
                  rgba(${lineColor}, ${opacity * 0.5}) 38px,
                  rgba(${lineColor}, ${opacity * 0.5}) 40px
                )
              `,
              animation: `motionGridDiag ${speed} linear infinite ${animDir}`,
            }}
          />
        )}

        {enableGlow && (
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${glowColor} 0%, transparent 70%)`,
              animation: `motionGridGlow 4s ease-in-out infinite`,
            }}
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#060a16] via-transparent to-[#060a16]" />

      <div className="relative z-10">{children}</div>

      <style jsx global>{`
        @keyframes motionGridH {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 40px 0, 0 40px; }
        }
        @keyframes motionGridV {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 0 40px, 40px 0; }
        }
        @keyframes motionGridDiag {
          0% { background-position: 0 0; }
          100% { background-position: 56px 56px; }
        }
        @keyframes motionGridGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
