export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Author = {
  name: string;
  role: string;
  bio?: string;
};

export type ArticleBlock =
  | { type: "heading"; text: string; id: string; level: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string }
  | { type: "takeaway"; title: string; text: string }
  | { type: "info"; title?: string; text: string }
  | { type: "warning"; title?: string; text: string }
  | { type: "code"; lang?: string; text: string }
  | { type: "comparison"; caption: string; headers: string[]; rows: string[][] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryHref: string;
  author: string;
  authorRole?: string;
  published: string;
  updated: string;
  readingTime: string;
  featured?: boolean;
  popular?: boolean;
  badge?: string;
  topics?: string[];
  related?: string[];
  blocks: ArticleBlock[];
};

export type GlossaryTerm = {
  term: string;
  slug: string;
  letter: string;
  definition: string;
  detail: string;
  related: string[];
};
