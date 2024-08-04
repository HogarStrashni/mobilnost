import ArticlePreview from "@/components/custom-ui/article-preview";
import Separator from "@/components/custom-ui/separator";
import { client } from "@/sanity/client";
import { ARTICLES_BY_CATEGORY_QUERY } from "@/sanity/queries";
import { ARTICLES_BY_CATEGORY_QUERYResult } from "@/sanity/types";
import Link from "next/link";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = async ({ params: { category } }: CategoryPageProps) => {
  const data = await client.fetch<ARTICLES_BY_CATEGORY_QUERYResult>(
    ARTICLES_BY_CATEGORY_QUERY,
    { category },
  );

  const articles = data.map((article) => ({
    categorySlug: category,
    ...article,
  }));

  const title = category.replace("-", " ");

  return (
    <div className="h-full lg:border-r lg:pr-4">
      <h2 className="text-lg font-bold uppercase">{title}</h2>
      <Separator className="mb-4" />
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {articles.map((article) => {
          const { categorySlug, slug: articleSlug } = article;
          return (
            <Link key={articleSlug} href={`/${categorySlug}/${articleSlug}`}>
              <ArticlePreview article={article} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
