import { cn } from "@/lib/utils/tailwind";
import { NEWEST_ARTICLES_QUERYResult } from "@/sanity/types";

import ArticleCard from "@/components/custom-ui/articles/article-card";
import CategorySectionTitle from "@/components/custom-ui/articles/category-section/category-section-title";

type CategorySectionProps = {
  category: NEWEST_ARTICLES_QUERYResult[0]["category"];
  slug: NEWEST_ARTICLES_QUERYResult[0]["slug"];
  articles: NEWEST_ARTICLES_QUERYResult[0]["articles"];
  className?: string;
};

const CategorySection = ({
  category,
  slug,
  articles,
  className,
}: CategorySectionProps) => {
  const articlesTrasformed = articles.map((article) => ({
    ...article,
    category: {
      title: category,
      slug,
    },
  }));

  return (
    <div className={cn("mt-12 sm:mt-16 lg:mt-20", className)}>
      <CategorySectionTitle
        category={category ?? ""}
        href={`/${slug}` ?? "/"}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {articlesTrasformed.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
