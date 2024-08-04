import { groq } from "next-sanity";

export const CATEGORY_QUERY = groq`
  *[_type == "category"] | order(_createdAt asc) {
    title,
    "slug":slug.current
    }`;

export const ARCTICLES_HOME_PAGE_QUERY = groq`
    *[_type == "category"] | order(_createdAt asc){
    "category": title,
    "slug": slug.current,
    "actualArticles": *[_type == "article" 
    && actual == true
    && references(^._id)
    ] | order(_createdAt desc)
    {
      title,
      excerpt,
      "slug": slug.current,
      author,
      "published": _createdAt,
      coverImage,
      "tags": tags[]->{title, "slug": slug.current}
      },
      "newestArticles": *[_type == "article"
      && actual == false
      && references(^._id)
      ] | order(_createdAt desc) 
      {
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
      excerpt,
      "slug": slug.current,
      author,
      "published": _createdAt,
      coverImage,
      "tags": tags[]->{title, "slug": slug.current}
      }`;

export const ARTICLE_QUERY = groq`
    *[_type == "article" && slug.current == $articleSlug][0]{
      title,
      author,
      "slug": slug.current,
      "published": _createdAt,
      "category": articleCategory -> {title, "slug":slug.current},
      "tags": tags[] -> {title, "slug": slug.current},
      source,
      sourceUrl,
      content
    }`;
