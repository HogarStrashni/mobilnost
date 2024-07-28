import { type SchemaTypeDefinition } from "sanity";
import categorySchema from "./category-schema";
import tagSchema from "./tag-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categorySchema, tagSchema],
};
