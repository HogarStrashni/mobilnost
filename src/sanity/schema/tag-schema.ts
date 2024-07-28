import { Rule } from "sanity";

const tag = {
  name: "tag",
  title: "Oznaka/tag",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv oznake",
      type: "string",
      description: "Naziv oznake pisati malim slovima",
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

export default tag;
