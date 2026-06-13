import Link from "next/link";
import { BlogCard } from "@/components/blog/blog-card";
import { getArticles } from "@/lib/articles";

export async function BlogPreviewSection() {
  const articles = await getArticles({ limit: 3 });

  return (
    <section className="relative overflow-hidden px-6 pb-44 pt-14 md:px-10 md:pb-56 md:pt-16 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d5b439]">Insights</p>
            <h2 className="max-w-3xl text-4xl font-neue-montreal-medium tracking-tight text-white md:text-6xl">
              Articles for risk-aware leaders.
            </h2>
          </div>
          <Link href="/blog" className="w-fit rounded-full border border-[#f3de6c]/35 bg-white/5 px-6 py-3 text-sm font-neue-montreal-medium text-[#f9f1c9] transition hover:border-[#f3de6c]/65 hover:bg-white/10">
            View all articles
          </Link>
        </div>

        <div className="grid gap-x-8 gap-y-28 md:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
