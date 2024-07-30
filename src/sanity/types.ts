import { PortableTextBlock } from "next-sanity";

export type Category = {
  title: string;
  slug: string;
};

type Tags = {
  title: string;
  slug: string;
};

export type Article = {
  title: string;
  author: string;
  slug: string;
  createdAt: string;
  category: Category;
  tags: Array<Tags>;
  content: PortableTextBlock[];
};
