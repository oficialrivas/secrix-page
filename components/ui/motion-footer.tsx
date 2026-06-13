"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
.cinematic-footer-wrapper {
  font-family: var(--font-neue-montreal), sans-serif;
  -webkit-font-smoothing: antialiased;

  --pill-bg-1: color-mix(in oklch, var(--foreground) 5%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 2%, transparent);
  --pill-shadow: rgba(213, 180, 57, 0.22);
  --pill-highlight: rgba(243, 222, 108, 0.2);
  --pill-inset-shadow: rgba(6, 10, 22, 0.6);
  --pill-border: rgba(243, 222, 108, 0.35);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
  100% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.95; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.footer-bg-grid {
  background-size: 58px 58px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 26%, black 76%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 26%, black 76%, transparent);
}

.footer-aurora {
  background:
    radial-gradient(
      circle at 28% 50%,
      rgba(213, 180, 57, 0.18) 0%,
      rgba(11, 17, 41, 0.34) 34%,
      rgba(6, 10, 22, 0.2) 58%,
      transparent 76%
    ),
    radial-gradient(
      circle at 78% 52%,
      rgba(0, 28, 73, 0.52) 0%,
      rgba(0, 28, 73, 0.4) 38%,
      rgba(11, 17, 41, 0.22) 62%,
      transparent 82%
    );
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
      0 12px 34px -10px var(--pill-shadow),
      inset 0 1px 1px var(--pill-highlight),
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.footer-giant-bg-text {
  font-size: 24vw;
  line-height: 0.74;
  font-weight: 700;
  letter-spacing: -0.06em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 8%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--foreground) 16%, transparent) 0%, transparent 65%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 48%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--foreground) 15%, transparent));
}
`;

export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: React.ElementType;
};

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.34,
            y: y * 0.34,
            rotationX: -y * 0.14,
            rotationY: x * 0.14,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as never);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as never);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Global Intelligence Network</span> <span className="text-[#f3de6c]/70">✦</span>
    <span>Risk Anticipation</span> <span className="text-[#f3de6c]/70">✦</span>
    <span>Operational Continuity</span> <span className="text-[#f3de6c]/70">✦</span>
    <span>Strategic Precision</span> <span className="text-[#f3de6c]/70">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground cinematic-footer-wrapper">
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[70vh] w-[92vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[120px] pointer-events-none z-0" />
          <div className="absolute right-0 top-0 h-full w-[45%] bg-[radial-gradient(circle_at_72%_52%,rgba(0,28,73,0.5)_0%,rgba(11,17,41,0.3)_45%,transparent_78%)] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            SECRIX
          </div>

          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-[#f3de6c]/25 bg-background/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-neue-montreal-medium tracking-[0.28em] text-[#f9f1c9]/70 uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto text-center">
            <div className="mb-28 flex items-center gap-6 md:mb-32 md:gap-7">
              <MagneticButton
                as="button"
                type="button"
                aria-label="X"
                className="footer-glass-pill flex h-14 w-14 items-center justify-center rounded-xl border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] shadow-[0_0_18px_rgba(213,180,57,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f3de6c]/55 hover:bg-[rgba(12,20,42,0.88)] md:h-16 md:w-16"
              >
                <img src="/ICONO1.png" alt="X" className="h-7 w-7 object-contain md:h-8 md:w-8" />
              </MagneticButton>
              <MagneticButton
                as="button"
                type="button"
                aria-label="Instagram"
                className="footer-glass-pill flex h-14 w-14 items-center justify-center rounded-xl border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] shadow-[0_0_18px_rgba(213,180,57,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f3de6c]/55 hover:bg-[rgba(12,20,42,0.88)] md:h-16 md:w-16"
              >
                <img src="/ICONO2.png" alt="Instagram" className="h-7 w-7 object-contain md:h-8 md:w-8" />
              </MagneticButton>
              <MagneticButton
                as="button"
                type="button"
                aria-label="TikTok"
                className="footer-glass-pill flex h-14 w-14 items-center justify-center rounded-xl border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] shadow-[0_0_18px_rgba(213,180,57,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f3de6c]/55 hover:bg-[rgba(12,20,42,0.88)] md:h-16 md:w-16"
              >
                <img src="/ICONO3.png" alt="TikTok" className="h-7 w-7 object-contain md:h-8 md:w-8" />
              </MagneticButton>
            </div>
            <MagneticButton
              as="button"
              onClick={() => {
                window.location.href = "/contacto";
              }}
              className="footer-glass-pill inline-flex h-12 items-center justify-center rounded-full border border-[#f3de6c]/35 bg-[rgba(6,10,22,0.78)] px-8 font-neue-montreal-medium text-sm uppercase tracking-[0.14em] text-[#f9f1c9] shadow-[0_0_20px_rgba(213,180,57,0.2)] transition-all duration-300 hover:border-[#f3de6c]/55 hover:bg-[rgba(12,20,42,0.88)] hover:text-white md:h-14 md:px-10 md:text-base"
            >
              Contact Us
            </MagneticButton>
          </div>

          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex items-center justify-between gap-6">
            <div className="text-[#f3de6c]/60 text-[10px] md:text-xs font-neue-montreal-medium tracking-[0.18em] uppercase">
              © {new Date().getFullYear()} Secrix. All rights reserved.
            </div>

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="footer-glass-pill h-12 w-12 rounded-full flex items-center justify-center text-[#f9f1c9]/75 hover:text-[#f9f1c9] group"
            >
              <svg className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
