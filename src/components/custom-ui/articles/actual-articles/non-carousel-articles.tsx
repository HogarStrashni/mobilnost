import { cn } from "@/lib/utils/tailwind";
import type { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";

import ArticleCard from "@/components/custom-ui/articles/article-card";

type NonCarouselArticlesProps = {
  data: ACTUAL_ARTICLES_QUERYResult;
  className?: string;
};

const NonCarouselArticles = ({ data, className }: NonCarouselArticlesProps) => {
  return (
    <div className={cn("grid grid-cols-2 gap-x-4 gap-y-8", className)}>
      {data.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </div>
  );
};

export default NonCarouselArticles;
