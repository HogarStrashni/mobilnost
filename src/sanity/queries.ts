import { groq } from "next-sanity";

export const CATEGORY_QUERY = groq`
  *[_type == "category"] | order(_createdAt asc) {
    title,
    "slug":slug.current
    }`;

export const ACTUAL_ARTICLES_QUERY = groq`
  *[_type == "article" && actual == true ] | order(_createdAt desc){
    title,
    "category": articleCategory -> {title, "slug": slug.current},
    excerpt,
    "slug": slug.current,
    author,
    "published": _createdAt,
    coverImage,
    "tags": tags[]->{title, "slug": slug.current}
  }`;

export const NEWEST_ARTICLES_QUERY = groq`
  *[_type == "category"] | order(_createdAt asc){
  "category": title,
  "slug": slug.current,
  "articles": *[_type == "article" && references(^._id)] | order(_createdAt desc){
    title,
    excerpt,
    "slug": slug.current,
    author,
    "published": _createdAt,
    coverImage,
    "tags": tags[]->{title, "slug": slug.current}
    }[0..3]
  }`;

export const ARTICLES_BY_CATEGORY_QUERY = groq`
  *[_type == "article" && articleCategory->slug.current == $category] | order(_createdAt desc){
    title,
    author,
    "slug": slug.current,
    "published": _createdAt,
    "category": articleCategory -> {title, "slug": slug.current},
    coverImage,
    excerpt,
    "tags": tags[]->{title, "slug": slug.current}
  }`;

export const ARTICLE_QUERY = groq`
  *[_type == "article" && slug.current == $articleSlug][0]{
    title,
    author,
    "slug": slug.current,
    "published": _createdAt,
    "category": articleCategory -> {title, "slug": slug.current},
    "tags": tags[] -> {title, "slug": slug.current},
    source,
    sourceUrl,
    content,
    "attachmentName": attachment.attachmentName,
    "attacmentUrl": attachment.asset->url
  }`;

export const TAGS_QUERY = groq`
  *[_type == "tag"] {
    title,
    "slug":slug.current
    }`;

export const ARTICLES_BY_TAG_QUERY = groq`
  *[_type == "article" && references(*[_type == "tag" && slug.current == $currentTag]._id)] | order(_createdAt desc){
    title,
    author,
    "slug": slug.current,
    "published": _createdAt,
    "category": articleCategory -> {title, "slug": slug.current},
    coverImage,
    excerpt,
    "tags": tags[]->{title, "slug": slug.current}
  }`;

export const ARTICLES_BY_SEARCH_QUERY = groq`
  *[_type == "article" && title match $searchQuery] | order(_createdAt desc){
    title,
    author,
    "slug": slug.current,
    "published": _createdAt,
    "category": articleCategory -> {title, "slug": slug.current},
    coverImage,
    excerpt,
    "tags": tags[]->{title, "slug": slug.current}
  }`;
