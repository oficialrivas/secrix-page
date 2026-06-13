"use client";

import React from "react";
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon, UsersIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type StickyFooterProps = React.ComponentProps<"footer">;

const socialLinks = [
  { title: "LinkedIn", href: siteConfig.socials.linkedin, icon: UsersIcon },
  { title: "Twitter", href: siteConfig.socials.twitter, icon: SendIcon },
];

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn("relative h-[420px] w-full", className)}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-[420px] w-full">
        <div className="sticky top-[calc(100vh-420px)] h-full overflow-hidden">
          <div className="relative flex size-full flex-col justify-between overflow-hidden border-t border-white/10 bg-[#060a16] px-6 py-10 md:px-12">
            <div aria-hidden className="absolute inset-0 z-0">
              <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_62%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_0.8px,transparent_0.8px)] [background-size:14px_14px] [mask-image:radial-gradient(circle_at_50%_15%,black,transparent_70%)]" />
            </div>

            <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
              <AnimatedContainer className="space-y-3">
                <p className="text-sm uppercase tracking-[0.32em] text-white/45">Secrix</p>
                <h2 className="max-w-sm text-3xl font-neue-montreal-medium text-white md:text-5xl">
                  Intelligence for complex environments.
                </h2>
              </AnimatedContainer>

              <AnimatedContainer delay={0.18} className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.22em] text-white/45">Contacto</h3>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white">
                  <MailIcon className="size-4 text-[#d5b439]" />
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white">
                  <PhoneIcon className="size-4 text-[#d5b439]" />
                  {siteConfig.phone}
                </a>
              </AnimatedContainer>

              <AnimatedContainer delay={0.28} className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.22em] text-white/45">Ubicación</h3>
                <p className="flex items-center gap-3 text-sm text-white/75">
                  <MapPinIcon className="size-4 text-[#d5b439]" />
                  {siteConfig.address}
                </p>
                <div className="flex gap-2 pt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      aria-label={link.title}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-[#d5b439]/60 hover:text-white"
                    >
                      <link.icon className="size-4" />
                    </a>
                  ))}
                </div>
              </AnimatedContainer>
            </div>

            <div className="relative z-10 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
              <p>{siteConfig.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({ delay = 0.1, children, ...props }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={props.className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
