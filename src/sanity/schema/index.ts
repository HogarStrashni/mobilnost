import { type SchemaTypeDefinition } from "sanity";
import categorySchema from "./category-schema";
import tagSchema from "./tag-schema";
import articleSchema from "./article-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categorySchema, tagSchema, articleSchema],
};
