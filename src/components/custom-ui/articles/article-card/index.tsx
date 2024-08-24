import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import { ClockArrowUp, UserRoundPen } from "lucide-react";

type ArticleCardProps = {
  article: ACTUAL_ARTICLES_QUERYResult[0];
  largeSize?: boolean;
  hideExcerpt?: boolean;
};

const ArticleCard = ({
  article,
  largeSize,
  hideExcerpt = false,
}: ArticleCardProps) => {
  const { title, coverImage, author, excerpt, published, category, slug } =
    article;

  return (
    <Link
      href={`${category?.slug}/${slug}`}
      className="flex flex-col gap-2 rounded bg-white p-4"
    >
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

      <div className="flex h-4 items-center">
        <p className="text-xs">{category?.title ?? ""}</p>
        <span className="mx-2 h-full border"></span>
        <div className="flex items-center gap-1">
          <ClockArrowUp className="size-3" />
          <p className="text-xs">{new Date(published).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-bold">{title}</h2>

        {!hideExcerpt && <p className="line-clamp-3 text-sm">{excerpt}</p>}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <UserRoundPen className="size-4" />
          <p className="text-sm">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
