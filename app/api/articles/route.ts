import { NextRequest, NextResponse } from "next/server";
import { createArticle, getArticles } from "@/lib/articles";
import type { ArticleInput } from "@/types/article";

export async function GET() {
  const articles = await getArticles({ includeDrafts: false });
  return NextResponse.json({ articles });
}

export async function POST(request: NextRequest) {
  const configuredToken = process.env.ARTICLE_ADMIN_TOKEN;
  const requestToken = request.headers.get("x-article-admin-token") ?? "";

  if (!configuredToken || requestToken !== configuredToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as ArticleInput;

  if (!body.title || !body.category || !body.image || !body.content) {
    return NextResponse.json(
      { error: "title, category, image and content are required" },
      { status: 400 }
    );
  }

  try {
    const article = await createArticle(body);
    return NextResponse.json({ article }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create article" },
      { status: 500 }
    );
  }
}
