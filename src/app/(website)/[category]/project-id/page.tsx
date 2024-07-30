import { components } from "@/components/custom-ui/article-component/image-component";
import { client } from "@/sanity/client";
import { ARTICLE_QUERY } from "@/sanity/queries";
import { Article } from "@/sanity/types";
import { PortableText } from "@portabletext/react";

const IndividualProject = async () => {
  const singleArticle = await client.fetch<Article>(ARTICLE_QUERY);

  const { title, slug, author, category, createdAt, tags, content } =
    singleArticle;

  return (
    <div className="space-y-6 pb-12 lg:border-r lg:pr-4">
      <h1 className="text-lg uppercase">{title}</h1>

      <p> author: {author}</p>

      <p> category: {category.title}</p>
      <p> tags: {tags.map((tag) => tag.title).join(", ")}</p>
      <p> date: {createdAt}</p>
      <p> slug: {slug}</p>

      <PortableText value={content} components={components} />
    </div>
  );
};

export default IndividualProject;
