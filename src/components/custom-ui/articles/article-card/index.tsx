import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/tailwind";
import { urlFor } from "@/sanity/image";
import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import ArticleCategory from "@/components/custom-ui/articles/article-category";
import ArticleDate from "@/components/custom-ui/articles/article-date";
import ArticleAuthor from "@/components/custom-ui/articles/article-author";
import ArticleCardFooter from "@/components/custom-ui/articles/article-card/article-card-footer";

type ArticleCardProps = {
  article: ACTUAL_ARTICLES_QUERYResult[0];
  largeSize?: boolean;
  showCategory?: boolean;
  showCoverImage?: boolean;
  showExcerpt?: boolean;
};

const ArticleCard = ({
  article,
  largeSize,
  showCategory = false,
  showCoverImage = true,
  showExcerpt = false,
}: ArticleCardProps) => {
  const { title, coverImage, author, excerpt, published, category, slug } =
    article;

  return (
    <Link
      href={`/${category?.slug}/${slug}`}
      className={cn(
        "group flex flex-col justify-between gap-4 rounded bg-white p-4",
        !largeSize && "shadow-sm",
      )}
    >
      <div className="flex flex-col gap-1">
        {coverImage && showCoverImage && (
          <Image
            src={urlFor(coverImage).url()}
            alt={coverImage.alt ?? ""}
            width={largeSize ? 1024 : 640}
            height={largeSize ? 640 : 400}
            className="mb-2 aspect-[1.6] w-full rounded object-cover"
            priority
          />
        )}

        <div className="flex h-3.5 items-center">
          {showCategory ? (
            <ArticleCategory title={category?.title ?? ""} />
          ) : (
            <ArticleAuthor author={author ?? ""} />
          )}
          <span className="mx-2.5 h-full border border-gray-400"></span>
          <ArticleDate date={published} />
        </div>

        <div className="mt-4">
          <h2
            className={cn(
              "font-lora text-lg font-bold leading-6 text-gray-700 sm:text-xl",
              largeSize ? "mb-4 sm:text-3xl md:text-4xl" : "mb-2",
            )}
          >
            {title}
          </h2>

          {showExcerpt && (
            <p
              className={cn(
                "line-clamp-3 text-sm text-gray-600",
                largeSize ? "md:text-base" : "text-sm",
              )}
            >
              {excerpt}
            </p>
          )}
        </div>
      </div>

      <ArticleCardFooter />
    </Link>
  );
};

export default ArticleCard;
