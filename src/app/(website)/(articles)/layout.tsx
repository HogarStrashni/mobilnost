import { ReactNode } from "react";

import { client } from "@/sanity/client";
import { ACTUAL_ARTICLES_QUERY } from "@/sanity/queries";
import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import ArticleCard from "@/components/custom-ui/articles/article-card";
import CategorySectionTitle from "@/components/custom-ui/articles/category-section/category-section-title";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const CategoryLayout = async ({ children }: RootLayoutProps) => {
  const actualArticles = await client.fetch<ACTUAL_ARTICLES_QUERYResult>(
    ACTUAL_ARTICLES_QUERY,
    {},
    { next: { revalidate: 300 } },
  );

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <section className="col-span-2">{children}</section>

      <section className="hidden pl-4 lg:block">
        <CategorySectionTitle category="aktuelno" />

        <div className="grid items-start gap-4">
          {actualArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              showCategory
              showCoverImage={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryLayout;
