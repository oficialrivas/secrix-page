"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import createGlobe from "cobe";

interface PulseMarker {
  id: string;
  label: string;
  location: [number, number];
  delay: number;
}

interface GlobePulseProps {
  markers?: PulseMarker[];
  className?: string;
  speed?: number;
}

const defaultMarkers: PulseMarker[] = [
  { id: "miami", label: "Miami", location: [25.76, -80.19], delay: 0 },
  { id: "colombia", label: "Colombia", location: [4.71, -74.07], delay: 0.35 },
  { id: "venezuela", label: "Venezuela", location: [10.48, -66.9], delay: 0.7 },
  { id: "peru", label: "Peru", location: [-12.05, -77.04], delay: 1.05 },
  { id: "brasil", label: "Brasil", location: [-15.79, -47.88], delay: 1.4 },
  { id: "republica-dominicana", label: "Republica Dominicana", location: [18.49, -69.93], delay: 1.75 },
  { id: "espana", label: "Espana", location: [40.42, -3.7], delay: 2.1 },
];

export function GlobePulse({ markers = defaultMarkers, className = "", speed = 0.003 }: GlobePulseProps) {
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.style.cursor = "grabbing";
    isPausedRef.current = true;
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }

    pointerInteracting.current = null;

    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }

    isPausedRef.current = false;
  }, []);

  useEffect(() => {
    if (markers.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveMarkerIndex((current) => (current + 1) % markers.length);
    }, 1900);

    return () => window.clearInterval(interval);
  }, [markers.length]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (event.clientX - pointerInteracting.current.x) / 300,
          theta: (event.clientY - pointerInteracting.current.y) / 1000,
        };
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let animationId = 0;
    let phi = -1.35;
    let resizeObserver: ResizeObserver | null = null;

    function init() {
      const width = canvas.offsetWidth;

      if (width === 0 || globe) return;

      try {
        globe = createGlobe(canvas, {
          devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
          width,
          height: width,
          phi: -1.35,
          theta: 0.2,
          dark: 1,
          diffuse: 1.5,
          mapSamples: 16000,
          mapBrightness: 8,
          baseColor: [0.48, 0.52, 0.6],
          markerColor: [0.84, 0.7, 0.22],
          glowColor: [0.02, 0.04, 0.1],
          markerElevation: 0,
          markers: markers.map((marker) => ({
            location: marker.location,
            size: 0.035,
            id: marker.id,
          })),
          arcs: [],
          arcColor: [0.84, 0.7, 0.22],
          arcWidth: 0.5,
          arcHeight: 0.25,
          opacity: 0.82,
        });
      } catch (error) {
        console.error("Failed to initialize globe", error);
        canvas.style.opacity = "1";
        return;
      }

      function animate() {
        if (!globe) return;

        if (!isPausedRef.current) {
          phi += speed;
        }

        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        });

        animationId = requestAnimationFrame(animate);
      }

      animate();
      window.setTimeout(() => {
        canvas.style.opacity = "1";
      }, 80);
    }

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          resizeObserver?.disconnect();
          init();
        }
      });
      resizeObserver.observe(canvas);
    }

    return () => {
      resizeObserver?.disconnect();
      cancelAnimationFrame(animationId);
      globe?.destroy();
    };
  }, [markers, speed]);

  const activeMarker = markers[activeMarkerIndex] ?? markers[0];

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <style>{`
        @keyframes pulse-expand {
          0% { transform: scaleX(0.3) scaleY(0.3); opacity: 0.8; }
          100% { transform: scaleX(1.55) scaleY(1.55); opacity: 0; }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {markers.map((marker) => (
        <div
          key={marker.id}
          style={{
            position: "absolute",
            positionAnchor: `--cobe-${marker.id}`,
            bottom: "anchor(center)",
            left: "anchor(center)",
            translate: "-50% 50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: `var(--cobe-visible-${marker.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${marker.id}, 0)) * 8px))`,
            transition: "opacity 0.4s, filter 0.4s",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              border: "2px solid #d5b439",
              borderRadius: "50%",
              opacity: 0,
              animation: `pulse-expand 2s ease-out infinite ${marker.delay}s`,
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: 0,
              border: "2px solid #f3de6c",
              borderRadius: "50%",
              opacity: 0,
              animation: `pulse-expand 2s ease-out infinite ${marker.delay + 0.5}s`,
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              background: "#d5b439",
              borderRadius: "50%",
              boxShadow: "0 0 0 3px #060a16, 0 0 0 5px #d5b439, 0 0 24px rgba(213,180,57,0.75)",
            }}
          />
        </div>
      ))}
      {activeMarker && (
        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 z-20 w-[min(18rem,calc(100%-2rem))] -translate-x-1/2 rounded-3xl border border-[#d5b439]/25 bg-[#071025]/78 px-5 py-4 text-left shadow-[0_22px_70px_rgba(0,0,0,0.42),0_0_34px_rgba(213,180,57,0.12)] backdrop-blur-xl md:bottom-10 md:left-auto md:right-0 md:w-72 md:translate-x-0"
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-[0.65rem] font-neue-montreal-medium uppercase tracking-[0.28em] text-[#d5b439]">
              Active Coverage
            </p>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] font-neue-montreal text-white/45">
              {String(activeMarkerIndex + 1).padStart(2, "0")} / {String(markers.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="relative flex size-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d5b439] opacity-55" />
              <span className="relative inline-flex size-3 rounded-full bg-[#f3de6c] shadow-[0_0_18px_rgba(213,180,57,0.85)]" />
            </span>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeMarker.id}
                className="font-neue-montreal-medium text-2xl leading-none tracking-tight text-white md:text-3xl"
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeMarker.label}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-[#d5b439]/45 via-white/10 to-transparent" />
          <p className="mt-3 text-sm leading-6 text-white/55">
            Regional intelligence node with active monitoring coverage.
          </p>
        </motion.div>
      )}
    </div>
  );
}
