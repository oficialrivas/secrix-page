import Link from "next/link";
import { BlogCard } from "@/components/blog/blog-card";
import { getArticles } from "@/lib/articles";

export async function BlogPreviewSection() {
  const articles = await getArticles({ limit: 3 });

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pb-20 sm:pb-28 md:pb-40 pt-6 sm:pt-10 md:pt-12 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 sm:mb-2 text-[10px] sm:text-xs uppercase tracking-[0.32em] text-[#d5b439]">Insights</p>
            <h2 className="max-w-3xl text-xl sm:text-2xl md:text-5xl font-neue-montreal-medium tracking-tight text-white">
              Articles for risk-aware leaders.
            </h2>
          </div>
          <Link href="/blog" className="w-fit rounded-full border border-[#f3de6c]/35 bg-white/5 px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-neue-montreal-medium text-[#f9f1c9] transition hover:border-[#f3de6c]/65 hover:bg-white/10 min-h-[40px] sm:min-h-[44px]">
            View all articles
          </Link>
        </div>

        <div className="grid gap-x-5 gap-y-12 sm:gap-x-6 sm:gap-y-16 md:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
