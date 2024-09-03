import { client } from "@/sanity/client";
import { ARTICLE_QUERY } from "@/sanity/queries";
import { ARTICLE_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import { components } from "@/components/custom-ui/articles/article-content";
import ArticleAuthor from "@/components/custom-ui/articles/article-author";
import ArticleDate from "@/components/custom-ui/articles/article-date";
import ArticleCategory from "@/components/custom-ui/articles/article-category";
import ArticleTag from "@/components/custom-ui/articles/article-tag";
import ArticleShareDialog from "@/components/custom-ui/articles/article-share-dialog";
import ArticleFooter from "@/components/custom-ui/articles/article-content/article-footer";
import PageNotFound from "@/components/custom-ui/articles/page-not-found";

type ArticlePageProps = {
  params: {
    articleId: string;
  };
};

const ArticlePage = async ({ params: { articleId } }: ArticlePageProps) => {
  const data = await client.fetch<ARTICLE_QUERYResult>(
    ARTICLE_QUERY,
    { articleSlug: articleId },
    { next: { revalidate: 60 } },
  );

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

  if (!data) {
    return <PageNotFound>Članak nije pronađen!</PageNotFound>;
  }

  return (
    <div className="w-full max-w-none rounded bg-white p-4 sm:p-6">
      <ArticleShareDialog className="mb-6 ml-auto" />

      <div className="flex gap-2">
        {tags?.map(({ title, slug }) => (
          <ArticleTag key={title} title={title} slug={slug} />
        ))}
      </div>

      <h1 className="mt-8 font-lora text-2xl font-bold text-gray-700 sm:text-3xl md:text-4xl">
        {title}
      </h1>

      <div className="mt-4">
        <ArticleCategory title={category?.title ?? ""} />
        <div className="mt-2 flex h-3.5 items-center">
          <ArticleAuthor author={author ?? ""} />
          <span className="mx-2.5 h-full border border-gray-400"></span>
          <ArticleDate date={published ?? ""} />
        </div>
      </div>

      <div className="prose mt-10 max-w-full flex-col prose-a:underline-offset-4 prose-ul:-mt-4 prose-li:-mt-2">
        {content && <PortableText value={content} components={components} />}
      </div>

      <ArticleFooter
        attachmentName={attachmentName ?? ""}
        attacmentUrl={attacmentUrl ?? ""}
        source={source ?? ""}
        sourceUrl={sourceUrl ?? ""}
      />

      <ArticleShareDialog className="ml-auto mt-12" />
    </div>
  );
};

export default ArticlePage;
