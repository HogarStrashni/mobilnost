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
  );

  return (
    <div className="mx-auto my-8 grid min-w-64 max-w-screen-2xl gap-4 px-2 sm:px-4 md:px-8 lg:my-16 lg:grid-cols-3 lg:px-12">
      <section className="col-span-2">
        <div>{children}</div>
      </section>

      <section className="hidden pl-4 lg:block">
        <CategorySectionTitle category="aktuelno" />

        <div className="grid items-start gap-4">
          {actualArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              actualArticle
              showCoverImage={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryLayout;
