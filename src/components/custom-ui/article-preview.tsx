import { urlFor } from "@/sanity/image";
import { ARCTICLES_HOME_PAGE_QUERYResult } from "@/sanity/types";
import { ClockArrowUp, UserRoundPen } from "lucide-react";
import Image from "next/image";

type ArticlePreviewProps = {
  article: ARCTICLES_HOME_PAGE_QUERYResult[0]["newestArticles"][0];
};

const ArticlePreview = ({ article }: ArticlePreviewProps) => {
  const { title, coverImage, author, excerpt, published } = article;
  return (
    <div className="flex flex-col gap-2">
      {coverImage && (
        <Image
          src={urlFor(coverImage).url()}
          alt={coverImage.alt ?? ""}
          width={640}
          height={400}
          className="aspect-[1.6] w-full rounded object-cover"
          priority
        />
      )}

      <div className="space-y-2">
        <h2 className="font-bold">{title}</h2>
        <p className="line-clamp-3 text-sm">{excerpt}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <UserRoundPen className="size-4" />
          <p className="text-sm">{author}</p>
        </div>
        <div className="flex items-center gap-2">
          <ClockArrowUp className="size-3" />
          <p className="text-xs">{new Date(published).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
