"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArticleContent } from "@/components/blog/article-content";
import { BlogCard } from "@/components/blog/blog-card";
import type { Article } from "@/types/article";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 32, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease },
  },
};

export function ArticlePageContent({
  article,
  related,
  date,
}: {
  article: Article;
  related: Article[];
  date: string;
}) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <article className="relative mx-auto max-w-4xl">
        <header className="mb-10">
          <motion.div variants={reveal} className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-white/45">
            <span className="text-[#d5b439]">{article.category}</span>
            <span>|</span>
            <time dateTime={article.published_at}>{date}</time>
          </motion.div>
          <motion.h1 variants={reveal} className="text-4xl font-neue-montreal-medium tracking-tight md:text-6xl">
            {article.title}
          </motion.h1>
          {article.description && (
            <motion.p variants={reveal} className="mt-6 text-xl leading-9 text-white/62">
              {article.description}
            </motion.p>
          )}
          <motion.div variants={reveal} className="mt-8 flex items-center gap-4 text-sm text-white/55">
            <div className="relative size-12 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image src="/miguel fotocuadrada.png" alt={article.author} fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <p className="font-neue-montreal-medium text-white">{article.author}</p>
              <p>Security intelligence publication</p>
            </div>
          </motion.div>
        </header>

        <motion.div variants={reveal} className="relative mb-14 h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image src={article.image} alt={article.title} fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a16]/72 via-transparent to-transparent" />
        </motion.div>

        <motion.div variants={reveal}>
          <ArticleContent article={article} />
        </motion.div>
      </article>

      {related.length > 0 && (
        <motion.aside variants={reveal} className="relative mx-auto mt-28 max-w-7xl">
          <h2 className="mb-10 text-3xl font-neue-montreal-medium text-white">Related articles</h2>
          <div className="grid gap-x-8 gap-y-28 md:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.id} article={item} />
            ))}
          </div>
        </motion.aside>
      )}
    </motion.div>
  );
}
