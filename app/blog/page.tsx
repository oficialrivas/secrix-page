import { BlogIndex } from "@/components/blog/blog-index";
import { ServicesPageNavbar } from "@/components/sections/services-page-navbar";
import { getArticles } from "@/lib/articles";

export const metadata = {
  title: "Blog",
  description: "Security intelligence, operational risk, and leadership insights from Secrix.",
};

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-[#060a16] text-white">
      <ServicesPageNavbar />
      <main className="relative overflow-hidden px-6 pb-28 pt-40 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_42%)]" />
        <BlogIndex articles={articles} />
      </main>
    </div>
  );
}
