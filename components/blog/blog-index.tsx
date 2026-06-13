"use client";

import { motion } from "motion/react";
import { BlogCard } from "@/components/blog/blog-card";
import type { Article } from "@/types/article";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.18,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.15, ease },
  },
};

export function BlogIndex({ articles }: { articles: Article[] }) {
  const featured = articles.slice(0, 2);
  const recent = articles.slice(2);

  return (
    <motion.div
      className="relative mx-auto max-w-7xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p variants={reveal} className="mb-4 text-sm uppercase tracking-[0.32em] text-[#d5b439]">
        Secrix Journal
      </motion.p>
      <motion.h1 variants={reveal} className="max-w-4xl text-5xl font-neue-montreal-medium tracking-tight md:text-7xl">
        Intelligence, security and operational risk insights.
      </motion.h1>
      <motion.p variants={reveal} className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
        Articles and field notes for organizations operating in complex environments.
      </motion.p>

      <motion.div variants={reveal} className="mt-16 grid gap-x-8 gap-y-28 md:grid-cols-2">
        {featured.map((article) => (
          <BlogCard key={article.id} article={article} large />
        ))}
      </motion.div>

      {recent.length > 0 && (
        <motion.div variants={reveal}>
          <h2 className="mb-8 mt-32 text-3xl font-neue-montreal-medium text-white">Recent</h2>
          <div className="grid gap-x-8 gap-y-28 md:grid-cols-3">
            {recent.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
