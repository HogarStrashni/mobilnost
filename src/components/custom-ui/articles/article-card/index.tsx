import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/tailwind";
import { urlFor } from "@/sanity/image";
import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import ArticleCategory from "./article-category";
import ArticleDate from "./article-date";
import ArticleAuthor from "./article-author";
import ArticleFooter from "./article-footer";

type ArticleCardProps = {
  article: ACTUAL_ARTICLES_QUERYResult[0];
  largeSize?: boolean;
  actualArticle?: boolean;
};

const ArticleCard = ({
  article,
  largeSize,
  actualArticle = false,
}: ArticleCardProps) => {
  const { title, coverImage, author, excerpt, published, category, slug } =
    article;

  return (
    <Link
      href={`${category?.slug}/${slug}`}
      className={cn(
        "flex flex-col justify-between gap-4 rounded bg-white p-4",
        !largeSize && "shadow-sm",
      )}
    >
      <div className="flex flex-col gap-1">
        {coverImage && (
          <Image
            src={urlFor(coverImage).url()}
            alt={coverImage.alt ?? ""}
            width={largeSize ? 1024 : 640}
            height={largeSize ? 640 : 400}
            className="aspect-[1.6] w-full rounded object-cover"
            priority
          />
        )}

        <div className="my-1 flex h-3.5 items-center">
          {actualArticle || largeSize ? (
            <ArticleCategory title={category?.title ?? ""} />
          ) : (
            <ArticleAuthor author={author ?? ""} />
          )}
          <span className="mx-2.5 h-full border border-gray-400"></span>
          <ArticleDate date={published} />
        </div>

        <div className="space-y-2">
          <h2 className="font-bold">{title}</h2>

          {!actualArticle && <p className="line-clamp-3 text-sm">{excerpt}</p>}
        </div>
      </div>

      <ArticleFooter />
    </Link>
  );
};

export default ArticleCard;
