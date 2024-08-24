import type { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";

import ArticleCard from "@/components/custom-ui/articles/article-card";

type NonCarouselArticlesProps = {
  data: ACTUAL_ARTICLES_QUERYResult;
  className?: string;
};

const NonCarouselArticles = ({ data, className }: NonCarouselArticlesProps) => {
  return (
    <div className={className}>
      {data.map((article) => (
        <ArticleCard article={article} key={article.slug} hideExcerpt />
      ))}
    </div>
  );
};

export default NonCarouselArticles;
