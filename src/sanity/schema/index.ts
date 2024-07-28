import { type SchemaTypeDefinition } from "sanity";
import categorySchema from "./category-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categorySchema],
};
