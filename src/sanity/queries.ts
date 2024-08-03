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
