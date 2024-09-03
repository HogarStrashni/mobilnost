import { client } from "@/sanity/client";
import { ARTICLES_BY_CATEGORY_QUERY, CATEGORY_QUERY } from "@/sanity/queries";
import {
  ARTICLES_BY_CATEGORY_QUERYResult,
  CATEGORY_QUERYResult,
} from "@/sanity/types";

import ArticleCard from "@/components/custom-ui/articles/article-card";
import CategorySectionTitle from "@/components/custom-ui/articles/category-section/category-section-title";
import PageNotFound from "@/components/custom-ui/articles/page-not-found";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = async ({ params: { category } }: CategoryPageProps) => {
  const allCategories = await client.fetch<CATEGORY_QUERYResult>(
    CATEGORY_QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  if (!allCategories.some((cat) => cat.slug === category)) {
    return <PageNotFound>Stranica nije pronađena!</PageNotFound>;
  }

  const articles = await client.fetch<ARTICLES_BY_CATEGORY_QUERYResult>(
    ARTICLES_BY_CATEGORY_QUERY,
    { category },
    { next: { revalidate: 60 } },
  );

  const title = articles[0]?.category?.title || category.replace("-", " ");

  return (
    <div>
      <CategorySectionTitle category={title} />

      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((article) => {
          return (
            <ArticleCard key={article.slug} article={article} showExcerpt />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
