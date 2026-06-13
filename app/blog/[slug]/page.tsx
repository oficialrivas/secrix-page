import { notFound } from "next/navigation";
import { ArticlePageContent } from "@/components/blog/article-page-content";
import { ServicesPageNavbar } from "@/components/sections/services-page-navbar";
import { getArticleBySlug, getArticles } from "@/lib/articles";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = (await getArticles({ limit: 4 })).filter((item) => item.slug !== article.slug).slice(0, 3);
  const date = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(article.published_at));

  return (
    <div className="min-h-screen bg-[#060a16] text-white">
      <ServicesPageNavbar />
      <main className="relative overflow-hidden px-6 pb-28 pt-40 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_40%)]" />
        <ArticlePageContent article={article} related={related} date={date} />
      </main>
    </div>
  );
}
