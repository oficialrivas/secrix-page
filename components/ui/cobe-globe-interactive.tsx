"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

interface InteractiveMarker {
  id: string;
  location: [number, number];
  name: string;
  detail: string;
}

interface GlobeInteractiveProps {
  markers?: InteractiveMarker[];
  className?: string;
  speed?: number;
}

const defaultMarkers: InteractiveMarker[] = [
  { id: "miami", location: [25.76, -80.19], name: "Miami", detail: "Active node" },
  { id: "colombia", location: [4.71, -74.07], name: "Colombia", detail: "Active node" },
  { id: "venezuela", location: [10.48, -66.9], name: "Venezuela", detail: "Active node" },
  { id: "peru", location: [-12.05, -77.04], name: "Peru", detail: "Active node" },
  { id: "brasil", location: [-15.79, -47.88], name: "Brasil", detail: "Active node" },
  { id: "republica-dominicana", location: [18.49, -69.93], name: "Republica Dominicana", detail: "Active node" },
  { id: "espana", location: [40.42, -3.7], name: "Espana", detail: "Active node" },
];

export function GlobeInteractive({ markers = defaultMarkers, className = "", speed = 0.003 }: GlobeInteractiveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const [expanded, setExpanded] = useState<string | null>(null);

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
            size: 0.03,
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

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <style>{`
        @keyframes fade-slide-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 0.82; transform: translateY(0); }
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
        <button
          key={marker.id}
          type="button"
          onClick={() => setExpanded(expanded === marker.id ? null : marker.id)}
          style={{
            position: "absolute",
            positionAnchor: `--cobe-${marker.id}`,
            bottom: "anchor(top)",
            left: "anchor(center)",
            translate: "-50% 0",
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: expanded === marker.id ? "0.48rem 0.72rem" : "0.34rem 0.58rem",
            background: "rgba(7,16,37,0.86)",
            color: "#fff",
            border: "1px solid rgba(213,180,57,0.28)",
            borderRadius: 10,
            cursor: "pointer",
            boxShadow: "0 14px 40px rgba(0,0,0,0.35), 0 0 20px rgba(213,180,57,0.14)",
            backdropFilter: "blur(14px)",
            opacity: `var(--cobe-visible-${marker.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${marker.id}, 0)) * 8px))`,
            transition: "opacity 0.4s, filter 0.4s, transform 0.2s, padding 0.2s, border-color 0.2s",
            zoom: expanded === marker.id ? 1.05 : 1,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-neue-montreal-medium), monospace",
              fontSize: marker.name.length > 15 ? "0.52rem" : "0.62rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              lineHeight: 1.1,
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {marker.name}
          </span>
          {expanded === marker.id && (
            <span
              style={{
                marginTop: "0.22rem",
                color: "rgba(243,222,108,0.86)",
                fontFamily: "var(--font-neue-montreal), system-ui, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.04em",
                opacity: 0.82,
                animation: "fade-slide-in 0.2s ease-out",
                whiteSpace: "nowrap",
              }}
            >
              {marker.detail}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
