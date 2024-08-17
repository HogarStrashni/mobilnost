import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";
import { NEWEST_ARTICLES_QUERYResult } from "@/sanity/types";

import ArticleCard from "@/components/custom-ui/articles/article-card";
import { FolderOpenDot } from "lucide-react";

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
    <div className={cn("mt-20", className)}>
      <Link
        href={`/${slug}` ?? "/"}
        className="mb-6 flex max-w-fit items-center gap-2 font-bold uppercase"
      >
        <FolderOpenDot className="text-green-primary" />
        <span className="font-oswald text-2xl text-purple-primary">
          {category}
        </span>
      </Link>

      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {articlesTrasformed.map((article) => (
          <Link key={article.slug} href={`/${slug}/${article.slug}`}>
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
