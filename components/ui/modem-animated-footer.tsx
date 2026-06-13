"use client";

import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface ModemAnimatedFooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  className?: string;
}

export function ModemAnimatedFooter({
  brandName = "Secrisk",
  brandDescription = "Global security, intelligence, and risk management for complex environments.",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  className,
}: ModemAnimatedFooterProps) {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#060a16]">
        <div className="relative mx-auto flex min-h-[30rem] max-w-7xl flex-col justify-between px-4 py-10 sm:min-h-[35rem] md:min-h-[40rem]">
          <div className="mb-12 flex w-full flex-col sm:mb-20 md:mb-0">
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-1 flex-col items-center space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-neue-montreal-medium text-3xl text-white">
                    {brandName}
                  </span>
                </div>
                <p className="w-full max-w-sm px-4 text-center font-neue-montreal text-white/55 sm:w-96 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="mb-8 mt-4 flex gap-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-white/48 transition-colors hover:text-[#f3de6c]"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <div className="h-10 w-10 duration-300 hover:scale-110">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex max-w-full flex-wrap justify-center gap-4 px-4 text-sm font-medium text-white/48">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      className="transition-colors duration-300 hover:text-[#f3de6c]"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-center gap-2 px-4 md:mt-24 md:flex-row md:justify-between md:px-0">
            <p className="text-center text-base text-white/45 md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <Link
                  href={creatorUrl}
                  target="_blank"
                  className="text-base text-white/45 transition-colors duration-300 hover:text-[#f3de6c]"
                >
                  Crafted by {creatorName}
                </Link>
              </nav>
            )}
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-40 left-1/2 -translate-x-1/2 select-none bg-gradient-to-b from-white/18 via-[#d5b439]/10 to-transparent bg-clip-text px-4 text-center font-neue-montreal-medium leading-none tracking-tighter text-transparent md:bottom-32"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            maxWidth: "95vw",
          }}
        >
          {brandName.toUpperCase()}
        </div>

        <div className="absolute bottom-32 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d5b439]/35 to-transparent backdrop-blur-sm sm:bottom-34" />
        <div className="absolute bottom-28 h-24 w-full bg-gradient-to-t from-[#060a16] via-[#060a16]/80 to-[#060a16]/40 blur-[1em]" />
      </footer>
    </section>
  );
}
