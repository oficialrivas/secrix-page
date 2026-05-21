"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface DotWaveProps {
  children?: React.ReactNode;
  className?: string;
  dotGap?: number;
  dotRadiusMax?: number;
  expansionSpeed?: number;
  lightIntensity?: number;
  fadeIntensity?: number;
  dotColor?: string;
  backgroundColor?: string;
}

interface Dot {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  growing: boolean;
}

export function DotWave({
  children,
  className,
  dotGap = 20,
  dotRadiusMax = 3,
  expansionSpeed = 250,
  lightIntensity = 0.4,
  fadeIntensity = 0.08,
  dotColor = "#3b82f6",
  backgroundColor = "transparent",
}: DotWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initDots = useCallback(
    (width: number, height: number) => {
      const dots: Dot[] = [];
      const cols = Math.ceil(width / dotGap);
      const rows = Math.ceil(height / dotGap);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * dotGap + dotGap / 2,
            y: j * dotGap + dotGap / 2,
            radius: 1,
            maxRadius: dotRadiusMax,
            opacity: fadeIntensity,
            growing: false,
          });
        }
      }
      return dots;
    },
    [dotGap, dotRadiusMax, fadeIntensity]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      dotsRef.current = initDots(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, rect.width, rect.height);
      }

      const mouse = mouseRef.current;
      const influenceRadius = expansionSpeed;

      dotsRef.current.forEach((dot) => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < influenceRadius) {
          const force = 1 - distance / influenceRadius;
          dot.radius = 1 + (dot.maxRadius - 1) * force * lightIntensity * 2;
          dot.opacity = fadeIntensity + force * 0.6;
        } else {
          dot.radius += (1 - dot.radius) * 0.05;
          dot.opacity += (fadeIntensity - dot.opacity) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(dot.radius, 1), 0, Math.PI * 2);
        ctx.fillStyle = dotColor + Math.round(dot.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initDots, dotColor, backgroundColor, dotRadiusMax, expansionSpeed, fadeIntensity, lightIntensity]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
