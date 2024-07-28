import { Rule } from "sanity";

const category = {
  name: "category",
  title: "Kategorija",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv kategorije",
      type: "string",
      description: "Naziv kategorije pisati malim slovima",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Link",
      type: "slug",
      description: "Generisati link klikom na dugme",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
  ],
};

export default category;
