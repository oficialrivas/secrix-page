"use client";

import { useEffect, useMemo } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

type AnimatedTextGenerateProps = {
  text: string;
  className?: string;
  textClassName?: string;
  blurEffect?: boolean;
  speed?: number;
  highlightWords?: string[];
  highlightClassName?: string;
  linkWords?: string[];
  linkHrefs?: string[];
  linkClassNames?: string[];
};

export function AnimatedTextGenerate({
  text,
  className,
  textClassName,
  blurEffect = true,
  speed = 1,
  highlightWords = [],
  highlightClassName,
  linkWords = [],
  linkHrefs = [],
  linkClassNames = [],
}: AnimatedTextGenerateProps) {
  const [scope, animate] = useAnimate();
  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  const normalizedHighlights = useMemo(
    () => new Set(highlightWords.map((word) => word.toLowerCase())),
    [highlightWords]
  );

  const linkMap = useMemo(() => {
    const map = new Map<string, { href: string; className?: string }>();
    linkWords.forEach((word, index) => {
      const href = linkHrefs[index] || "/";
      map.set(word.toLowerCase(), { href, className: linkClassNames[index] });
    });
    return map;
  }, [linkWords, linkHrefs, linkClassNames]);

  useEffect(() => {
    animate(
      "[data-word]",
      {
        opacity: 1,
        filter: blurEffect ? "blur(0px)" : "none",
      },
      {
        duration: Math.max(0.2, 0.45 / Math.max(speed, 0.2)),
        delay: stagger(Math.max(0.03, 0.09 / Math.max(speed, 0.2))),
      }
    );
  }, [animate, blurEffect, speed]);

  return (
    <div className={className}>
      <motion.p ref={scope} className={cn("leading-relaxed", textClassName)}>
        {words.map((word, index) => {
          const cleanWord = word.replace(/[^\w-]/g, "");
          const key = `${word}-${index}`;
          const lower = cleanWord.toLowerCase();
          const isHighlighted = normalizedHighlights.has(lower);
          const link = linkMap.get(lower);

          const textNode = (
            <span
              data-word
              key={key}
              className={cn(
                "opacity-0",
                blurEffect && "[filter:blur(8px)]",
                isHighlighted && highlightClassName
              )}
            >
              {word}{" "}
            </span>
          );

          if (!link) return textNode;

          return (
            <a key={key} href={link.href} className={link.className}>
              {textNode}
            </a>
          );
        })}
      </motion.p>
    </div>
  );
}
