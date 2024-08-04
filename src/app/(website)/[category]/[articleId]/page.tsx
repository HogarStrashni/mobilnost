import { components } from "@/components/custom-ui/article-component/image-component";
import { client } from "@/sanity/client";
import { ARTICLE_QUERY } from "@/sanity/queries";
import { ARTICLE_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";

type ArticlePageProps = {
  params: {
    articleId: string;
  };
};

const ArticlePage = async ({ params: { articleId } }: ArticlePageProps) => {
  const data = await client.fetch<ARTICLE_QUERYResult>(ARTICLE_QUERY, {
    articleSlug: articleId,
  });

  const { title, slug, author, category, published, tags, content } =
    data ?? {};

  return (
    <div className="space-y-6 pb-12 lg:border-r lg:pr-4">
      <h1 className="text-lg uppercase">{title}</h1>

      <p> author: {author}</p>

      <p> category: {category?.title}</p>
      <p> tags: {tags?.map((tag) => tag.title).join(", ")}</p>
      <p> date: {published}</p>
      <p> slug: {slug}</p>

      {content && <PortableText value={content} components={components} />}
    </div>
  );
};

export default ArticlePage;
