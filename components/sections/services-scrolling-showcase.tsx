"use client";

import React, { useEffect, useRef, useState } from "react";

type ServiceSlide = {
  title: string;
  description: string;
  image: string;
  bg: string;
  text: string;
};

const slidesData: ServiceSlide[] = [
  {
    title: "Global Security & Risk Solutions",
    description:
      "Integrated security and risk management across complex and high-risk environments, combining strategic advisory, intelligence analysis, protective services, and advanced technology oversight.",
    image: "/1.jpg",
    bg: "#060a16",
    text: "#f8fafc",
  },
  {
    title: "Risk Surveys & Security Audits",
    description:
      "Comprehensive assessments that identify vulnerabilities across facilities, operations, and supply chains, with prioritized recommendations to improve security posture and compliance.",
    image: "/2.png",
    bg: "#071126",
    text: "#f8fafc",
  },
  {
    title: "Security Consulting",
    description:
      "Strategic consulting that aligns security programs with governance, regulatory requirements, and enterprise objectives to support resilience and sustainable growth.",
    image: "/3.jpg",
    bg: "#08142d",
    text: "#f8fafc",
  },
  {
    title: "Threat & Vulnerability Assessments",
    description:
      "Intelligence-led evaluations of operational, physical, and geopolitical exposure that provide clear mitigation priorities for critical assets and personnel.",
    image: "/4.jpg",
    bg: "#091935",
    text: "#f8fafc",
  },
  {
    title: "Intelligence & Investigations",
    description:
      "Evidence-based investigative support, due diligence, fraud analysis, and asset tracing services designed to reduce operational, financial, and reputational risk.",
    image: "/5.jpg",
    bg: "#0a1d3d",
    text: "#f8fafc",
  },
  {
    title: "Security Technology Advisory & Systems Integration",
    description:
      "Independent advisory and full-lifecycle project management for surveillance, access control, and fire systems, ensuring reliable integration and long-term value.",
    image: "/6.jpg",
    bg: "#0b2145",
    text: "#f8fafc",
  },
  {
    title: "Corporate & Law Enforcement Training",
    description:
      "Specialized training programs in executive protection, investigations, intelligence analysis, and high-liability operations to strengthen readiness in real-world scenarios.",
    image: "/7.jpg",
    bg: "#0c254d",
    text: "#f8fafc",
  },
];

export function ServicesScrollingShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.floor(container.scrollTop / stepHeight),
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const dynamicStyles: React.CSSProperties = {
    backgroundColor: slidesData[activeIndex].bg,
    color: slidesData[activeIndex].text,
    transition: "background-color 0.7s ease, color 0.7s ease",
  };

  const gridPatternStyle: React.CSSProperties = {
    backgroundImage:
      "linear-gradient(to right, rgba(213,180,57,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(213,180,57,0.1) 1px, transparent 1px)",
    backgroundSize: "3.5rem 3.5rem",
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div style={{ height: `${slidesData.length * 100}vh` }}>
        <div
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
          style={dynamicStyles}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            <div className="relative grid grid-rows-[1fr_auto_1fr] h-full p-8 md:p-16">
              <div className="absolute top-16 left-8 md:left-16 flex space-x-2">
                {slidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const container = scrollContainerRef.current;
                      if (container) {
                        const scrollableHeight =
                          container.scrollHeight - window.innerHeight;
                        const stepHeight = scrollableHeight / slidesData.length;
                        container.scrollTo({
                          top: stepHeight * index,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex
                        ? "w-12 bg-[#f3de6c]"
                        : "w-6 bg-white/20"
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>

              <div className="relative h-[360px] md:h-[420px] w-full">
                {slidesData.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h2 className="text-4xl md:text-6xl font-neue-montreal-medium leading-tight tracking-tight text-white">
                      {slide.title}
                    </h2>
                    <p className="mt-6 text-base md:text-xl max-w-xl font-neue-montreal-light text-white/75 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-52 left-8 md:bottom-60 md:left-16">
                <a
                  href="/contacto"
                  className="px-8 py-3 border border-[#f3de6c]/35 bg-[#d5b439]/12 text-[#f3de6c] font-neue-montreal-medium rounded-full uppercase tracking-[0.1em] hover:bg-[#d5b439]/22 transition-colors"
                >
                  Contact Secrisk
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-start justify-center h-[85vh] pt-12">
              <div className="relative w-full h-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slidesData.map((slide, index) => (
                    <div key={index} className="w-full h-full relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
