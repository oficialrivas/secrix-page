import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";

export function BlogCard({ article, large = false }: { article: Article; large?: boolean }) {
  const date = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(article.published_at));

  return (
    <article className="group relative overflow-visible rounded-3xl">
      <Link href={`/blog/${article.slug}`} className="block">
        <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 ${large ? "h-[360px]" : "h-[260px]"}`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes={large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a16]/80 via-transparent to-transparent" />
        </div>
      </Link>

      <div className={`absolute left-5 right-5 rounded-2xl border border-white/10 bg-[#071025]/88 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl ${large ? "-bottom-20" : "-bottom-16"}`}>
        <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45">
          <span className="text-[#d5b439]">{article.category}</span>
          <span>|</span>
          <span>{date}</span>
        </div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className={`font-neue-montreal-medium leading-tight text-white transition-colors group-hover:text-[#f3de6c] ${large ? "text-xl" : "text-lg"}`}>
            {article.title}
          </h3>
        </Link>
        {article.description && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/55">
            {article.description}
          </p>
        )}
      </div>
    </article>
  );
}
