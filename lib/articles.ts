import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { Article, ArticleInput } from "@/types/article";

const now = new Date().toISOString();

export const fallbackArticles: Article[] = [
  {
    id: "fallback-latam-risk-briefing-2026-06-16",
    slug: "latin-america-security-risk-briefing-june-16-2026",
    title: "Latin America Security Risk Briefing: June 16, 2026",
    description:
      "Key developments across Haiti, Mexico, Colombia, Ecuador, Brazil, and Venezuela involving organized crime, political violence, biometric security, and law enforcement operations.",
    category: "Risk Intelligence",
    author: "Secrisk Team",
    image: "/7.jpg",
    content:
      "This regional security briefing summarizes selected open-source reporting from Latin America and the Caribbean. Inclusion of these developments does not imply endorsement of any viewpoint presented in the original coverage.\n\nCaribbean\n\nHaiti: Senior police official kidnapped in Port-au-Prince\nA major security incident occurred in Haiti when James Boyard, a senior Haitian National Police official and Chief of Staff to the Defense Minister, was kidnapped with his wife and six-year-old daughter in the Bourdon-Lalue corridor of Port-au-Prince. Authorities suspect involvement by the Ti Bwa gang and confirmed a ransom demand. The incident reflects the growing sophistication and boldness of Haitian gangs, including their willingness to target high-ranking officials and families with foreign citizenship ties.\n\nNorth America\n\nMexico: Oaxaca mayor killed\nAuthorities in Oaxaca opened a homicide investigation after Jose Angel Bravo Martinez, mayor of San Miguel Amatitlan, was shot and killed in the Mixteca region. Prosecutors classified the case as high-impact and deployed investigative and security resources. The killing, the second mayoral assassination in Oaxaca in roughly one month, reinforces concerns over violence against municipal officials in Mexico.\n\nSouth America\n\nColombia: ELN announces election ceasefire\nAhead of Colombia's presidential runoff, the National Liberation Army announced a unilateral ceasefire, stating it would not threaten candidates or interfere with voting. While the measure may reduce short-term election violence, authorities continue to view the ELN as a major security threat due to its alleged financing through illegal gold mining and drug trafficking.\n\nColombia: U.S. seeks Clearview AI licenses for police\nThe U.S. Embassy in Bogota, through the State Department's INL bureau, is seeking Clearview AI facial recognition licenses for Colombian National Police units responsible for protection services. The program highlights expanding international use of biometric tools in security cooperation while raising privacy, surveillance, and wrongful identification concerns.\n\nEcuador: Prosecutor killed in Manta\nCriminal prosecutor Alexandra Bravo and her sister were killed in Manta, intensifying concern over attacks against Ecuador's justice officials. Bravo worked on organized crime, kidnapping, and contract killing cases. Authorities are assessing possible links to criminal groups such as Los Choneros and Los Lobos, with Manta remaining a strategic trafficking hub.\n\nBrazil: Anti-crime program targets organized crime finances\nBrazil reported major results in the first 30 days of its Brazil Against Organized Crime Program, including BRL 1.6 billion in estimated losses to criminal groups, nearly 8,000 arrests, 82.5 tons of drugs seized, and BRL 523 million in frozen assets. The initiative emphasizes dismantling criminal finances, disrupting trafficking networks, and restoring state control in affected areas.\n\nVenezuela: Reported death of Tren de Aragua leader\nU.S. and Venezuelan officials reported that a joint operation killed Hector Rusthenford Guerrero Flores, alleged leader of Tren de Aragua, in Bolivar state. His death would represent a major blow to the group's leadership, though its long-term operational impact remains uncertain due to the organization's transnational footprint.\n\nBrazil: Fuel fraud investigation linked to organized crime\nBrazilian authorities are investigating an alleged fuel fraud scheme involving more than 100 million liters of naphtha diverted into the retail fuel market through shell companies and fraudulent transactions. Prosecutors have linked the operation to Primeiro Comando da Capital, reflecting the group's expansion into fuel-sector fraud as a revenue and money-laundering channel.\n\nAssessment\n\nThe developments point to several regional risk trends: expanding gang capabilities, increased targeting of public officials and justice-sector personnel, the growing role of biometric technology in law enforcement cooperation, and intensified efforts to disrupt organized crime finances. For organizations operating in the region, these trends reinforce the importance of intelligence-led monitoring, executive protection planning, travel risk management, and exposure assessments in politically and criminally complex environments.",
    published: true,
    published_at: now,
    created_at: now,
    updated_at: now,
  },
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
