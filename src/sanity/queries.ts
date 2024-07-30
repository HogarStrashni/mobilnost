import { groq } from "next-sanity";

export const CATEGORY_QUERY = groq`
  *[_type == "category"] | order(_createdAt asc) {
    title,
    "slug":slug.current
    }`;

export const ARTICLE_QUERY = groq`
  *[_type == "article"][0]{
    title,
    author,
    "slug": slug.current,
    "createdAt": _createdAt,
    "category": articleCategory -> {title, "slug":slug.current},
    "tags": tags[] -> {title, "slug": slug.current},
    content
  }`;
