import { ReactNode } from "react";

import { client } from "@/sanity/client";
import { ACTUAL_ARTICLES_QUERY } from "@/sanity/queries";
import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import ArticleCard from "@/components/custom-ui/articles/article-card";

import { FolderOpenDot } from "lucide-react";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const CategoryLayout = async ({ children }: RootLayoutProps) => {
  const actualArticles = await client.fetch<ACTUAL_ARTICLES_QUERYResult>(
    ACTUAL_ARTICLES_QUERY,
  );

  return (
    <div className="mx-auto my-6 flex max-w-screen-2xl gap-6 sm:my-8 sm:px-5 lg:my-16 lg:px-12">
      <section className="flex-[3]">
        <div className="lg:border-r lg:pr-6">{children}</div>
      </section>

      <section className="flex-[2]">
        <div className="mb-6 flex max-w-fit items-center gap-2 font-bold uppercase">
          <FolderOpenDot className="text-green-primary" />
          <span className="font-oswald text-2xl text-purple-primary">
            aktuelno
          </span>
        </div>
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8">
          {actualArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryLayout;
