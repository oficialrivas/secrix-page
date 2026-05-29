import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  imgSrc: string;
  alt: string;
}

interface AnimatedTestimonialGridProps {
  testimonials: Testimonial[];
  badgeText?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

const imagePositions = [
  { top: "2%", left: "8%", className: "hidden lg:block w-28 h-28" },
  { top: "14%", left: "27%", className: "hidden md:block w-24 h-24" },
  { top: "4%", left: "48%", className: "hidden md:block w-20 h-20" },
  { top: "6%", right: "8%", className: "hidden lg:block w-32 h-32" },
  { top: "26%", right: "2%", className: "hidden md:block w-24 h-24" },
  { top: "52%", right: "6%", className: "hidden lg:block w-28 h-28" },
  { top: "56%", left: "2%", className: "hidden md:block w-32 h-32" },
  { bottom: "1%", left: "12%", className: "hidden lg:block w-24 h-24" },
  { bottom: "11%", left: "40%", className: "hidden md:block w-20 h-20" },
  { bottom: "7%", right: "24%", className: "hidden md:block w-28 h-28" },
  { bottom: "-1%", right: "10%", className: "hidden lg:block w-24 h-24" },
  { top: "10%", left: "5%", className: "block md:hidden w-16 h-16" },
  { top: "5%", right: "10%", className: "block md:hidden w-20 h-20" },
  { bottom: "5%", left: "10%", className: "block md:hidden w-20 h-20" },
  { bottom: "10%", right: "5%", className: "block md:hidden w-16 h-16" },
];

const imageVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
      delay: Math.random() * 0.5,
    },
  },
};

const floatingAnimation = () => ({
  y: [0, Math.random() * -15 - 5, 0],
  transition: {
    duration: Math.random() * 4 + 5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  },
});

export const AnimatedTestimonialGrid = ({
  testimonials,
  badgeText = "Testimonials",
  title,
  description,
  ctaText,
  ctaHref,
  className,
}: AnimatedTestimonialGridProps) => {
  return (
    <section className={cn("relative w-full max-w-[92rem] mx-auto py-40 sm:py-52 px-4", className)}>
      {testimonials.slice(0, imagePositions.length).map((testimonial, index) => (
        <motion.div
          key={index}
          className={cn("absolute rounded-lg shadow-xl", imagePositions[index].className)}
          style={{
            top: imagePositions[index].top,
            left: imagePositions[index].left,
            right: imagePositions[index].right,
            bottom: imagePositions[index].bottom,
          }}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1, zIndex: 20 }}
          custom={index}
        >
          <motion.img
            src={testimonial.imgSrc}
            alt={testimonial.alt}
            className="w-full h-full object-cover rounded-lg"
            animate={floatingAnimation()}
          />
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center text-center">
        {badgeText && (
          <div className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
            {badgeText}
          </div>
        )}
        {title && (
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-5 max-w-4xl">
            {title}
          </h1>
        )}
        {description && <p className="max-w-2xl text-xl text-muted-foreground mb-10">{description}</p>}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        )}
      </div>
    </section>
  );
};
