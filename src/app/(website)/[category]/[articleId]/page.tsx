import { client } from "@/sanity/client";
import { ARTICLE_QUERY } from "@/sanity/queries";
import { ARTICLE_QUERYResult } from "@/sanity/types";
import { components } from "@/components/custom-ui/image-component";
import { PortableText } from "@portabletext/react";
import ArticleAuthor from "@/components/custom-ui/articles/article-author";
import ArticleDate from "@/components/custom-ui/articles/article-date";
import ArticleCategory from "@/components/custom-ui/articles/article-category";
import ArticleTag from "@/components/custom-ui/articles/article-tag";
import ArticleShareButton from "@/components/custom-ui/articles/article-share-button";

import ArticleSingleFooter from "@/components/custom-ui/articles/article-single-footer";

type ArticlePageProps = {
  params: {
    articleId: string;
  };
};

const ArticlePage = async ({ params: { articleId } }: ArticlePageProps) => {
  const data = await client.fetch<ARTICLE_QUERYResult>(ARTICLE_QUERY, {
    articleSlug: articleId,
  });

  const {
    title,
    category,
    author,
    published,
    tags,
    content,
    source,
    sourceUrl,
    attachmentName,
    attacmentUrl,
  } = data ?? {};

  return (
    <div className="prose prose-gray w-full max-w-none rounded bg-white p-4 font-roboto prose-headings:font-lora prose-a:underline-offset-4 sm:p-6">
      <ArticleShareButton className="static mb-6 ml-auto" />

      <div className="flex gap-2">
        {tags?.map(({ title }) => (
          <ArticleTag key={title} title={title ?? ""} />
        ))}
      </div>

      <h1 className="mt-8">{title}</h1>

      <div className="-mt-4">
        <ArticleCategory title={category?.title ?? ""} />
        <div className="mt-2 flex h-3.5 items-center">
          <ArticleAuthor author={author ?? ""} />
          <span className="mx-2.5 h-full border border-gray-400"></span>
          <ArticleDate date={published ?? ""} />
        </div>
      </div>

      <div className="pt-6">
        {content && <PortableText value={content} components={components} />}
      </div>

      <ArticleSingleFooter
        attachmentName={attachmentName ?? ""}
        attacmentUrl={attacmentUrl ?? ""}
        source={source ?? ""}
        sourceUrl={sourceUrl ?? ""}
      />

      <ArticleShareButton className="static ml-auto mt-12" />
    </div>
  );
};

export default ArticlePage;
