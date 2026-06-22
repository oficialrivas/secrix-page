"use client";

import Image from "next/image";
import type React from "react";

const teamMembers = [
  {
    image: "/opcion%207.png",
    name: "Antelmo Terrades",
    role: "Founder & Chief Executive Officer",
  },
  {
    image: "/opcion%202.2.png",
    name: "Alex Terrades",
    role: "Executive Vice President",
  },
  {
    image: "/opcion%204.png",
    name: "Andy Terrades",
    role: "Vice President Of Operations",
  },
  {
    image: "/julio%20cabeza%20peque%C3%B1a.png",
    name: "Julio Rodriguez",
    role: "Director of Global Security & Risk Compliance",
  },
  {
    image: "/opcion%203.png",
    name: "Iván Simonovis",
    role: "Director of LATAM & Government Affairs",
  },
  {
    image: "/opcion%201.1.png",
    name: "Steve Hanna",
    role: "Senior Executive Advisor",
  },
  {
    image: "/opcion%208%20.png",
    name: "Miguel Bolivar",
    role: "Director special projects",
  },
  {
    image: "/lutato%20cabeza%20peq.png",
    name: "Lutalo Muhummud",
    role: "Associate partner - East Africa",
  },
  {
    image: "/opcion%206.png",
    name: "Hugo Hira",
    role: "Associate partner- Brazil",
  },
];

function TeamMarquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="group flex overflow-hidden [--duration:35s] [--gap:1.5rem] sm:[--gap:1.5rem]">
      <div className="flex min-w-full shrink-0 animate-marquee items-center gap-[var(--gap)] pr-[var(--gap)] group-hover:[animation-play-state:paused]">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="flex min-w-full shrink-0 animate-marquee items-center gap-[var(--gap)] pr-[var(--gap)] group-hover:[animation-play-state:paused]"
      >
        {children}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-8 pt-12 md:pb-24 md:pt-36">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-8 sm:mb-[11rem] flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">
          <h1 className="relative mb-6 sm:mb-8 font-medium text-3xl sm:text-5xl md:text-7xl text-neutral-100 tracking-tight">
            Leadership &amp; Expertise
          </h1>
          <p className="max-w-4xl text-lg sm:text-xl md:text-3xl leading-8 sm:leading-9 md:leading-10 text-neutral-300">
            Meet the professionals behind Secrisk&apos;s global security,
            intelligence, and risk management operations.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-linear-to-r from-[#0b1129] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-linear-to-l from-[#0b1129] to-transparent" />

          <TeamMarquee>
            {teamMembers.map((member) => (
              <div className="group/card flex w-[260px] sm:w-64 shrink-0 flex-col mx-auto" key={member.name}>
                <div className="relative h-[20rem] sm:h-[23rem] w-full overflow-hidden rounded-2xl bg-[#0b1129] ring-1 ring-[#f3de6c]/30">
                  <Image
                    alt={member.name}
                    className={`h-full w-full object-cover object-center grayscale transition-all duration-300 group-hover/card:grayscale-0 ${member.name === "Julio Rodriguez" ? "scale-[1.25] object-center" : member.name === "Lutalo Muhummud" ? "scale-125 object-center" : ""}`}
                    fill
                    sizes="256px"
                    src={member.image}
                  />
                </div>
                <div className="px-3 py-2 text-center">
                  <h3 className="font-semibold text-sm text-neutral-100 line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </TeamMarquee>
        </div>

        <div className="mx-auto mt-32 max-w-4xl px-6 text-center lg:px-0">
          <p className="mb-10 font-medium text-2xl leading-relaxed text-neutral-100 md:text-3xl md:leading-[1.35]">
            Security is not about reacting to threats. It is about anticipating them.
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-16 w-28 overflow-hidden">
              <Image
                alt="Secrisk International"
                className="h-full w-full object-contain"
                fill
                sizes="112px"
                src="/logogeneral.svg"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-neutral-100">
                Secrisk International
              </p>
              <p className="text-neutral-400 text-sm">
                Global Security &amp; Risk Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
