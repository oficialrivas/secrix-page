"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { navigationLinks, socialLinks } from "@/data";

const socialIcons: Record<"twitter" | "github" | "linkedin", React.ReactNode> = {
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a3 3 0 0 0-3-3 3 3 0 0 0-3 3v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
};

interface FooterColumn {
  heading: string;
  links: { text: string; url: string }[];
}

interface FooterBrandProps {
  brandName?: string;
  tagline?: string;
  columns?: FooterColumn[];
  socials?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  copyright?: string;
  legalLinks?: { text: string; url: string }[];
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const isInternalLink = (url: string) =>
  url.startsWith("/") || url.startsWith("#");

function FooterWithFadedBrand({
  brandName = "SECRISK",
  tagline = "Global Risk Intelligence.",
  columns,
  socials,
  copyright,
  legalLinks,
  className,
}: FooterBrandProps) {
  const currentYear = new Date().getFullYear();

  const resolvedColumns: FooterColumn[] =
    columns ?? [
      {
        heading: "Navegacion",
        links: navigationLinks.map((link) => ({ text: link.label, url: link.href })),
      },
      {
        heading: "Contacto",
        links: [
          { text: siteConfig.email, url: `mailto:${siteConfig.email}` },
          { text: siteConfig.phone, url: `tel:${siteConfig.phone}` },
          { text: siteConfig.address, url: "#contacto" },
        ],
      },
      {
        heading: "Empresa",
        links: [
          { text: "Servicios", url: "/servicios" },
          { text: "Proceso", url: "#approach" },
          { text: "Contacto", url: "#contact" },
        ],
      },
    ];

  const socialMap = socialLinks.reduce<Record<string, string>>((acc, item) => {
    acc[item.icon] = item.url;
    return acc;
  }, {});

  const resolvedSocials = socials ?? {
    twitter: socialMap.twitter ?? siteConfig.socials.twitter,
    github: socialMap.github ?? siteConfig.socials.github,
    linkedin: socialMap.linkedin ?? siteConfig.socials.linkedin,
  };

  const resolvedLegalLinks =
    legalLinks ?? [
      { text: "Privacidad", url: "/privacy" },
      { text: "Terminos", url: "/terms" },
    ];

  const resolvedCopyright =
    copyright ?? `© ${currentYear} ${siteConfig.name}. Todos los derechos reservados.`;

  return (
    <footer
      className={cn(
        "w-full relative overflow-hidden select-none bg-transparent border-t border-white/[0.08]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,12,24,0.72), rgba(0,16,40,0.56))",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(255,255,255,0.09),transparent_36%),radial-gradient(circle_at_84%_78%,rgba(255,255,255,0.05),transparent_44%)]" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mx-4 my-6 rounded-[32px] border border-white/[0.08] bg-white/[0.02] px-8 pt-16 pb-10 shadow-2xl shadow-black/35 backdrop-blur-xl md:mx-8 md:px-16 md:pt-20"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-neue-montreal-medium tracking-[0.24em] uppercase mb-10 text-[#f3de6c]/68"
        >
          {tagline}
        </motion.p>

        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3 md:gap-x-20">
            {resolvedColumns.map((col, ci) => (
              <motion.div key={ci} variants={itemVariants}>
                <p className="text-[11px] font-neue-montreal-medium tracking-widest uppercase mb-4 text-[#f3de6c]/65">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      {isInternalLink(link.url) ? (
                        <Link
                          href={link.url}
                           className="text-sm font-medium text-[#f9f1c9]/78 hover:text-white transition-colors duration-200"
                        >
                          {link.text}
                        </Link>
                      ) : (
                        <a
                          href={link.url}
                           className="text-sm font-medium text-[#f9f1c9]/78 hover:text-white transition-colors duration-200"
                        >
                          {link.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="md:text-right">
            <p className="text-[11px] font-neue-montreal-medium tracking-widest uppercase mb-4 text-[#f3de6c]/65">
              Social
            </p>
            <div className="flex items-center gap-3 md:justify-end">
              {resolvedSocials.twitter && (
                <a
                  href={resolvedSocials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#d5b439]/12 border border-[#f3de6c]/28 text-[#f9f1c9]/80 hover:bg-[#d5b439]/26 hover:text-white transition-all duration-200 shadow-[0_0_18px_rgba(213,180,57,0.26)]"
                >
                  {socialIcons.twitter}
                </a>
              )}
              {resolvedSocials.github && (
                <a
                  href={resolvedSocials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#d5b439]/12 border border-[#f3de6c]/28 text-[#f9f1c9]/80 hover:bg-[#d5b439]/26 hover:text-white transition-all duration-200 shadow-[0_0_18px_rgba(213,180,57,0.26)]"
                >
                  {socialIcons.github}
                </a>
              )}
              {resolvedSocials.linkedin && (
                <a
                  href={resolvedSocials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#d5b439]/12 border border-[#f3de6c]/28 text-[#f9f1c9]/80 hover:bg-[#d5b439]/26 hover:text-white transition-all duration-200 shadow-[0_0_18px_rgba(213,180,57,0.26)]"
                >
                  {socialIcons.linkedin}
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 border-t border-[#f3de6c]/20"
        />

        <motion.div
          variants={itemVariants}
          className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-xs text-[#f3de6c]/58">{resolvedCopyright}</p>
          <div className="flex items-center gap-5">
            {resolvedLegalLinks.map((l, i) => (
              <Link
                key={i}
                href={l.url}
                className="text-xs text-[#f3de6c]/58 hover:text-white transition-colors"
              >
                {l.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="inset-x-0 mt-20 bg-linear-to-b from-blue-100/85 via-blue-100/52 to-blue-100/25 bg-clip-text text-center font-neue-montreal-medium tracking-[0.1em] text-transparent opacity-65 drop-shadow-[0_0_18px_rgba(148,163,184,0.2)]"
        style={{
          fontSize: "clamp(3rem, 15vw, 13rem)",
        }}
      >
        {brandName}
      </motion.p>
    </footer>
  );
}

export function Footer() {
  return <FooterWithFadedBrand />;
}

export { FooterWithFadedBrand };
