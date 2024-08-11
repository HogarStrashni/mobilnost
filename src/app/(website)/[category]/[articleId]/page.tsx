import Link from "next/link";
import { components } from "@/components/custom-ui/article-component/image-component";
import { client } from "@/sanity/client";
import { ARTICLE_QUERY } from "@/sanity/queries";
import { ARTICLE_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import { ClockArrowUp, FileDown, Rss, UserRoundPen } from "lucide-react";

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
    <div className="pb-12 lg:border-r lg:pr-4">
      <div className="prose w-full max-w-none">
        <div className="mb-6 flex gap-4">
          {tags?.map(({ title }) => (
            <span key={title} className="rounded border bg-orange-500/50 px-3">
              {title}
            </span>
          ))}
        </div>
        <h1>{title}</h1>

        <div className="-mt-8 flex gap-16">
          <div className="flex items-center gap-2">
            <UserRoundPen className="size-4" />
            <p className="text-sm">{author}</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockArrowUp className="size-3" />
            <p className="text-xs">
              {published && new Date(published).toLocaleDateString()}
            </p>
          </div>
        </div>

        {attachmentName && attacmentUrl && (
          <Link
            href={attacmentUrl}
            className="mt-8 flex max-w-fit items-center gap-2 rounded border px-4 py-2"
          >
            <FileDown className="size-4" />
            <span>{attachmentName}</span>
          </Link>
        )}

        {content && <PortableText value={content} components={components} />}

        {source && (
          <div className="mt-12 flex items-center justify-end">
            <Rss className="size-4" />
            {sourceUrl ? (
              <Link href={sourceUrl} target="_blank" className="ml-2">
                {source}
              </Link>
            ) : (
              <span>{source}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
