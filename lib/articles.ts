import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { Article, ArticleInput } from "@/types/article";

const now = new Date().toISOString();

export const fallbackArticles: Article[] = [
  {
    id: "fallback-1",
    slug: "operational-risk-intelligence",
    title: "Operational Risk Intelligence for Complex Environments",
    description:
      "How intelligence-led security helps organizations anticipate disruption and make faster decisions.",
    category: "Intelligence",
    author: "Secrix Team",
    image: "/images/captura-hombre.png",
    content:
      "Operational risk is no longer a static discipline. Organizations operating across complex environments need live context, structured intelligence, and decision frameworks that turn uncertainty into action.\n\nSecrix approaches risk through a practical intelligence cycle: collection, validation, analysis, planning, and continuous monitoring. The goal is not only to detect threats, but to understand how they affect operations, people, and strategic priorities.\n\nA mature security posture starts with leadership visibility. When executives understand where risk is emerging and how it connects to operational exposure, teams can move from reactive response to proactive advantage.",
    published: true,
    published_at: now,
    created_at: now,
    updated_at: now,
  },
  {
    id: "fallback-2",
    slug: "executive-protection-modern-enterprise",
    title: "Executive Protection in the Modern Enterprise",
    description:
      "A concise look at protective intelligence, travel risk, and secure movement planning.",
    category: "Protection",
    author: "Secrix Team",
    image: "/images/hombre-2.jpg",
    content:
      "Executive protection is most effective when it is intelligence-led. Secure movement, venue assessment, travel planning, and response protocols should be informed by current threat data and local context.\n\nThe best programs are discreet, scalable, and integrated with the organization's daily operations. This allows leaders to remain focused while protective teams manage exposure with precision.",
    published: true,
    published_at: now,
    created_at: now,
    updated_at: now,
  },
  {
    id: "fallback-3",
    slug: "security-audits-that-drive-action",
    title: "Security Audits That Drive Action",
    description:
      "Why the best assessments prioritize measurable recommendations over generic checklists.",
    category: "Advisory",
    author: "Secrix Team",
    image: "/images/imagen-difuminada.png",
    content:
      "A security audit should clarify decisions. It should identify what matters, why it matters, and what action must come next.\n\nAt Secrix, assessments focus on exposure, impact, feasibility, and operational continuity. This produces recommendations that teams can implement, measure, and improve over time.",
    published: true,
    published_at: now,
    created_at: now,
    updated_at: now,
  },
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function getArticles(options: { limit?: number; includeDrafts?: boolean } = {}) {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return fallbackArticles.slice(0, options.limit ?? fallbackArticles.length);
  }

  let query = supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false });

  if (!options.includeDrafts) {
    query = query.eq("published", true);
  }

  if (options.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase articles query failed", error);
    return fallbackArticles.slice(0, options.limit ?? fallbackArticles.length);
  }

  return (data ?? []) as Article[];
}

export async function getArticleBySlug(slug: string) {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return fallbackArticles.find((article) => article.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Supabase article query failed", error);
    return fallbackArticles.find((article) => article.slug === slug) ?? null;
  }

  return data as Article;
}

export async function createArticle(input: ArticleInput) {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    throw new Error("Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  const title = input.title.trim();
  const slug = input.slug?.trim() || slugify(title);

  const payload = {
    slug,
    title,
    description: input.description?.trim() || null,
    category: input.category.trim(),
    author: input.author?.trim() || "Secrix Team",
    image: input.image.trim(),
    content: input.content.trim(),
    published: input.published ?? true,
    published_at: input.published_at ?? new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("articles")
    .insert(payload)
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Article;
}
