import type { Article } from "@/types/article";

export function ArticleContent({ article }: { article: Article }) {
  const paragraphs = article.content.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="space-y-7 text-lg leading-8 text-white/72">
      {paragraphs.map((paragraph) => {
        if (paragraph.startsWith("## ")) {
          return (
            <h2 key={paragraph} className="pt-6 text-3xl font-neue-montreal-medium leading-tight text-white">
              {paragraph.replace(/^## /, "")}
            </h2>
          );
        }

        if (paragraph.startsWith("> ")) {
          return (
            <blockquote key={paragraph} className="border-l-2 border-[#d5b439] pl-6 text-xl text-white/86">
              {paragraph.replace(/^> /, "")}
            </blockquote>
          );
        }

        return <p key={paragraph}>{paragraph}</p>;
      })}
    </div>
  );
}
