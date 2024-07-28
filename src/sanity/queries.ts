import { groq } from "next-sanity";

export const CATEGORY_QUERY = groq`*[_type == "category"] | order(_createdAt asc) {title,"slug":slug.current}`;
