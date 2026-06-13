export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  category: string;
  author: string;
  image: string;
  content: string;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface ArticleInput {
  slug?: string;
  title: string;
  description?: string;
  category: string;
  author?: string;
  image: string;
  content: string;
  published?: boolean;
  published_at?: string;
}
