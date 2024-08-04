import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";
import { ARCTICLES_HOME_PAGE_QUERYResult } from "@/sanity/types";
import Separator from "./separator";
import ArticlePreview from "./article-preview";

type CategorySectionProps = {
  category: ARCTICLES_HOME_PAGE_QUERYResult[0]["category"];
  slug: ARCTICLES_HOME_PAGE_QUERYResult[0]["slug"];
  newestArticles: ARCTICLES_HOME_PAGE_QUERYResult[0]["newestArticles"];
  className?: string;
};

const CategorySection = ({
  category,
  slug,
  newestArticles,
  className,
}: CategorySectionProps) => {
  return (
    <div className={cn("mt-12 first-of-type:mt-0", className)}>
      <Link href={`/${slug}` ?? "/"} className="text-lg font-bold uppercase">
        {category}
      </Link>
      <Separator className="mb-4" />
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2">
        {newestArticles.map((article) => (
          <Link key={article.slug} href={`/${slug}/${article.slug}`}>
            <ArticlePreview article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
