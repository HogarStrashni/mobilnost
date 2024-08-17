import { client } from "@/sanity/client";
import { ARTICLES_BY_CATEGORY_QUERY } from "@/sanity/queries";
import { ARTICLES_BY_CATEGORY_QUERYResult } from "@/sanity/types";
import { FolderOpenDot } from "lucide-react";

import ArticleCard from "@/components/custom-ui/articles/article-card";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = async ({ params: { category } }: CategoryPageProps) => {
  const articles = await client.fetch<ARTICLES_BY_CATEGORY_QUERYResult>(
    ARTICLES_BY_CATEGORY_QUERY,
    { category },
  );

  const title = articles[0]?.category?.title || category.replace("-", " ");

  return (
    <div>
      <div className="mb-6 flex max-w-fit items-center gap-2 font-bold uppercase">
        <FolderOpenDot className="text-green-primary" />
        <span className="font-oswald text-2xl text-purple-primary">
          {title}
        </span>
      </div>

      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2">
        {articles.map((article) => {
          return <ArticleCard key={article.slug} article={article} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
