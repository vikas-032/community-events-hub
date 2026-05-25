export type HeritageBlog = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  area: string;
  readTime: string;
  image: {
    src: string;
    alt: string;
  };
  publishedAt: string;
  body: string[];
  highlights: string[];
  localTip?: string;
};
