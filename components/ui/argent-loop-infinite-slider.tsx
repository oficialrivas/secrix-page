"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import * as React from "react";

interface ProjectData {
  name: string;
  image: string;
  role: string;
  summary: string;
  details: string;
}

const PROJECT_DATA: ProjectData[] = [
  {
    image: "/opcion%207.png",
    name: "Antelmo Terrades",
    role: "Founder & Chief Executive Officer",
    summary: "Founder & CEO with 30+ years experience: 20 years in law enforcement (SWAT, criminal investigations, advanced tactical training). Founded Public Safety International (IPSA) and led government training programs in Peru and a regional training center in Florida. Expert in defense, energy, aviation, and critical infrastructure. Direct approach: identify threats early, act decisively.",
    details: "Mr. Terrades expanded operations internationally through U.S. government-contracted training programs in Peru and the development of a regional law enforcement training center in Florida. His work emphasizes measurable impact, business continuity, and real-world security strategies built for high-risk environments.",
  },
  {
    image: "/opcion%202.2.png",
    name: "Alex Terrades",
    role: "Executive Vice President",
    summary: "Former Miami PD detective, Investigative Intelligence Unit. Specialist in digital surveillance, digital forensics, and multi-agency operations against criminal threats and national security. Member of interagency Rapid Deployment Force (active shooter, civil unrest, dignitary protection, counter-terrorism). Private sector: security assessments, asset recovery, executive protection, and international threat analysis.",
    details: "He aligns strategic operations with the firm’s long-term objectives across domestic and international markets. His leadership focuses on precision, accountability, and integrating intelligence, technology, and field operations into cohesive risk management programs.",
  },
  {
    image: "/opcion%204.png",
    name: "Andy Terrades",
    role: "Vice President Of Operations",
    summary: "MBA in AI (Florida International University). Security audits and investigations in LATAM (cash-in-transit, critical infrastructure). Certified UAS/ISR pilot for aerial reconnaissance. USMC Reservist (leadership, discipline, mission-focused). Integrates technology and intelligence into operational workflows for efficiency and results.",
    details: "He oversees service delivery standards and the implementation of client-focused security solutions. His experience in Latin America includes security audits, investigations, cash-in-transit risk, and critical infrastructure protection, strengthened by his UAS/ISR capabilities.",
  },
  {
    image: "/opcion%209.png",
    name: "Julio Rodriguez",
    role: "Director of Global Security & Risk Compliance",
    summary: "30+ years in diplomatic security and compliance (U.S. and LATAM). Former Chief of Protection for U.S. Ambassador in Dominican Republic (State Dept, Bureau of Diplomatic Security). Certifications: BASC, OEA, CTPAT, ISPS. Led large-scale security operations, physical/electronic projects, and enterprise risk programs. Structured approach: translates complex regulatory requirements into scalable operational solutions.",
    details: "He leads the development and oversight of international security frameworks across diverse jurisdictions. His experience includes BASC, OEA, CTPAT, and ISPS standards, helping clients turn complex regulatory requirements into practical, scalable security programs.",
  },
  {
    image: "/opcion%203.png",
    name: "Iván Simonovis",
    role: "Director of LATAM & Government Affairs",
    summary: "4+ decades in LATAM public security. Detective since 1981, founded the Special Actions Brigade (BAE) with Germany's GSG-9 and U.S. agencies. Former Secretary of Citizen Security for Caracas (metro operations, large-scale urban security strategies). Advisor on institutional reform, international cooperation, organized crime, corruption, and transnational threats. Deep government relationships across the region.",
    details: "He leads strategic engagement across Latin America, supporting government relations, institutional partnerships, and regional advisory initiatives. His background includes metropolitan security operations, public safety strategy, and cooperation with international partners on organized crime and transnational threats.",
  },
  {
    image: "/opcion%201.1.png",
    name: "Steve Hanna",
    role: "Senior Executive Advisor",
    summary: "3+ decades in national security, international affairs, and strategic advisory. Senior roles in global technology, security, and natural resources. Corporate restructuring, international partnerships, and stabilization of large projects in complex environments. Aligns private initiatives with government policy and regulations. Stabilizes high-risk situations, builds government-industry trust.",
    details: "He advises senior leadership on geopolitical dynamics, cross-border initiatives, stakeholder expectations, and regulatory alignment. His experience includes corporate restructuring, international partnerships, market entry, and stabilization of large-scale projects in complex jurisdictions.",
  },
  {
    image: "/opcion%208%20.png",
    name: "Miguel Bolivar",
    role: "Director special projects",
    summary: "U.S. Army combat veteran, Field Grade Officer, and Counterintelligence Special Agent with 30+ years across military, law enforcement, intelligence, and special operations. Expert in intelligence, security, investigations, and geopolitics with a focus on Latin America.",
    details: "His career includes leading cross-functional, inter-agency, inter-departmental, and multinational teams through high-risk operations. He brings deep expertise in intelligence, investigations, analysis, and geopolitics, with emphasis on Latin America, terrorist organizations, and organized crime networks.",
  },
  {
    image: "/opcion%205.1.png",
    name: "Lutalo Muhummud",
    role: "Associate partner - East Africa",
    summary: "25+ years in executive protection, security operations, tactical training, and crisis management across Africa, the Middle East, and the Caribbean. Former United Nations security leader with experience in VIP protection, firearms instruction, defensive tactics, and high-risk operations.",
    details: "From 2004 to 2024, he served in senior operational and leadership roles within the United Nations Security System, leading close protection teams across Somalia, Sudan, Iraq, Lebanon, Israel, and the Palestinian Territories. His expertise includes VIP protection, tactical instruction, and crisis management.",
  },
  {
    image: "/opcion%206.png",
    name: "Hugo Hira",
    role: "Associate partner- Brazil",
    summary: "33 years with the Civil Police of Sao Paulo, specializing in organized crime investigations, high-risk operations, tactical training, firearms instruction, and defensive, evasive, and offensive driving. He later transitioned into private security risk consulting.",
    details: "He served 33 years with the Civil Police of Sao Paulo and later advised private-sector clients on risk assessment, security inspections, cash-in-transit operations, valuables custody, banking security, mining, and insurance/reinsurance risk matters throughout Brazil.",
  },
];

const CONFIG = {
  SCROLL_SPEED: 1.35,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 240,
  SNAP_DURATION: 500,
};

// Utility functions
const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const getProjectData = (index: number) => {
  const i =
    ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) %
    PROJECT_DATA.length;
  return PROJECT_DATA[i];
};

const getProjectNumber = (index: number) => {
  return (
    ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) %
      PROJECT_DATA.length +
    1
  )
    .toString()
    .padStart(2, "0");
};

export function Component() {
  const [expandedProfile, setExpandedProfile] = React.useState<string | null>(null);
  const [visibleRange, setVisibleRange] = React.useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  // Refs for state that changes frequently (animation loop)
  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    clock: 0,
    lastScrollTime: 0,
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0, // Will be set on mount
    minimapHeight: 280,
  });

  // Refs to store DOM elements
  const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const requestRef = React.useRef<number | null>(null);

  // Helper to update parallax for a single item
  const updateParallax = (
    img: HTMLImageElement | null,
    scroll: number,
    index: number,
    height: number
  ) => {
    if (!img) return;
    // We can store 'current' parallax value on the element dataset or a separate map if we want smooth lerping
    // for the image inside the container as well.
    // The original code did: `current = lerp(current, target, 0.1)` inside a closure.
    // To keep it simple and stateless for the image inner lerp, we might just calculate it directly
    // or use a separate map for image states if strictly needed.
    // Let's try direct calculation first, or use a weakmap/map for image states.
    
    // Actually, let's implement the closure-like behavior by storing image states
    if (!img.dataset.parallaxCurrent) {
      img.dataset.parallaxCurrent = "0";
    }
    
    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.08;
    current = lerp(current, target, 0.1);
    
    // Optimization: only update if changed significantly
    if (Math.abs(current - target) > 0.01) {
        img.style.transform = `translateY(${current}px) scale(1.12)`;
        img.dataset.parallaxCurrent = current.toString();
    }
  };

  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min(
      (s.clock - s.snapStart.time) / CONFIG.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY =
      s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  const snapToProject = () => {
    const s = state.current;
    const current = Math.round(-s.targetY / s.projectHeight);
    const target = -current * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = {
      time: s.clock,
      y: s.targetY,
      target: target,
    };
  };

  const updatePositions = () => {
    const s = state.current;

    // Update Projects
    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translate(-50%, calc(-50% + ${y}px))`;
      const img = el.querySelector("img");
      updateParallax(img, s.currentY, index, s.projectHeight);
    });

    // Update Info
    infoRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(calc(-50% + ${y}px))`;
    });
  };

  const animate = (now: number) => {
    const s = state.current;

    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint =
        -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
    }

    if (s.isSnapping) updateSnap();
    if (!s.isDragging) {
      s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    }

    updatePositions();

    // We use a ref to track the last committed range to avoid setting state in the loop repeatedly
    // But setting state inside rAF can be tricky if not careful.
    // Ideally we check if it CHANGED.
    
    // Accessing state from hook closure is stale? No, we use Functional update or Ref for current range.
    // Let's use a ref for the "rendered" range to compare.
    // But we need to trigger a render. So we simply check if derived min/max differs from what we *think* is rendered.
    // The problem is `visibleRange` from state is constant in this closure. 
    // So we'll trust that the effect re-runs or we store "renderedRange" in a ref.
  };
  
  // We need the animation loop to be able to trigger a state update.
  // But we don't want to create a new loop function on every render.
  // So we use a ref for the range checking logic.

  const renderedRange = React.useRef({ min: -CONFIG.BUFFER_SIZE, max: CONFIG.BUFFER_SIZE });

  const animationLoop = (time: number) => {
     state.current.clock = time;
     animate(time);
     
     const s = state.current;
     const currentIndex = Math.round(-s.targetY / s.projectHeight);
     const min = currentIndex - CONFIG.BUFFER_SIZE;
     const max = currentIndex + CONFIG.BUFFER_SIZE;

     if (min !== renderedRange.current.min || max !== renderedRange.current.max) {
         renderedRange.current = { min, max };
         setVisibleRange({ min, max });
     }

     requestRef.current = requestAnimationFrame(animationLoop);
  };

  React.useEffect(() => {
    state.current.projectHeight = window.innerHeight;
    
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const s = state.current;
      s.isSnapping = false;
      s.lastScrollTime = s.clock;
      const delta = Math.max(
        Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
        -CONFIG.MAX_VELOCITY
      );
      s.targetY -= delta;
    };

    const onTouchStart = (e: TouchEvent) => {
        const s = state.current;
        s.isDragging = true;
        s.isSnapping = false;
        s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
        s.lastScrollTime = s.clock;
    }

    const onTouchMove = (e: TouchEvent) => {
        const s = state.current;
        if (!s.isDragging) return;
        s.targetY =
            s.dragStart.scrollY +
            (e.touches[0].clientY - s.dragStart.y) * 1.5;
        s.lastScrollTime = s.clock;
    }

    const onTouchEnd = () => {
        state.current.isDragging = false;
    }

    const onResize = () => {
        state.current.projectHeight = window.innerHeight;
        // Sync container height to match JS logic exactly
        const container = document.querySelector('.parallax-container') as HTMLElement;
        if (container) {
            container.style.height = `${window.innerHeight}px`;
        }
        // updatePositions is called in loop
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", onResize);
    
    // Initial size sync
    onResize();

    // Start Loop
    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Generate range of indices
  const indices = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) {
    indices.push(i);
  }

  return (
    <div className="parallax-container">
      <ul className="project-list">
        {indices.map((i) => {
          const data = getProjectData(i);
          return (
            <div
              key={i}
              className="project"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img src={data.image} alt={data.name} style={{ objectPosition: "center 12%" }} />
            </div>
          );
        })}
      </ul>

      <div className="minimap">
        <div className="minimap-wrapper">
          <div className="minimap-info-list">
            {indices.map((i) => {
              const data = getProjectData(i);
              const num = getProjectNumber(i);
              return (
                <div
                  key={i}
                  className="minimap-item-info"
                  ref={(el) => {
                    if (el) infoRef.current.set(i, el);
                    else infoRef.current.delete(i);
                  }}
                >
                  <div className="minimap-item-info-row">
                    <p>{num}</p>
                    <p>{data.name}</p>
                  </div>
                  <div className="minimap-item-info-row">
                    <p>{data.role}</p>
                  </div>
                  <div className="minimap-item-info-row">
                    <p>{data.summary}</p>
                  </div>
                  <button
                    className="minimap-more-button"
                    onClick={() =>
                      setExpandedProfile((current) =>
                        current === data.name ? null : data.name
                      )
                    }
                    type="button"
                  >
                    {expandedProfile === data.name ? "Show less" : "Learn more"}
                  </button>
                  <div
                    className={`minimap-extra-info ${
                      expandedProfile === data.name ? "is-open" : ""
                    }`}
                  >
                    <p>{data.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
