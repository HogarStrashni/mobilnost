import { ReactNode } from "react";

import { client } from "@/sanity/client";
import { ACTUAL_ARTICLES_QUERY } from "@/sanity/queries";
import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import ArticleCard from "@/components/custom-ui/articles/article-card";
import CategorySectionTitle from "@/components/custom-ui/articles/category-section/category-section-title";

type RootLayoutProps = Readonly<{
  children: ReactNode;
  params: {
    category: string;
  };
}>;

const CategoryLayout = async ({
  children,
  params: { category },
}: RootLayoutProps) => {
  const actualArticles = await client.fetch<ACTUAL_ARTICLES_QUERYResult>(
    ACTUAL_ARTICLES_QUERY,
  );

  return (
    <div className="mx-auto my-6 grid max-w-screen-2xl grid-cols-3 gap-4 sm:my-8 sm:px-5 lg:my-16 lg:px-12">
      <section className="col-span-2">
        <div>{children}</div>
      </section>

      <section className="pl-4">
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
