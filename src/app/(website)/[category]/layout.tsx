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

  const articles = actualArticles.filter(
    (article) => article.category?.slug !== category,
  );

  return (
    <div className="mx-auto my-6 flex max-w-screen-2xl gap-6 sm:my-8 sm:px-5 lg:my-16 lg:px-12">
      <section className="flex-[3]">
        <div className="lg:border-r lg:pr-6">{children}</div>
      </section>

      <section className="flex-[2]">
        <CategorySectionTitle category="aktuelno" />

        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryLayout;
