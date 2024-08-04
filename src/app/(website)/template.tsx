import { ReactNode } from "react";
import Header from "@/components/custom-ui/header";
import { ARCTICLES_HOME_PAGE_QUERYResult } from "@/sanity/types";
import { ARCTICLES_HOME_PAGE_QUERY } from "@/sanity/queries";
import { client } from "@/sanity/client";
import ArticlePreview from "@/components/custom-ui/article-preview";
import Separator from "@/components/custom-ui/separator";
import Link from "next/link";

type RootTemplateProps = {
  children: ReactNode;
};

const RootTemplate = async ({ children }: RootTemplateProps) => {
  const data = await client.fetch<ARCTICLES_HOME_PAGE_QUERYResult>(
    ARCTICLES_HOME_PAGE_QUERY,
  );

  const actualArticles = data.map(({ newestArticles, ...rest }) => rest);

  const articles = actualArticles
    .map(({ category, slug, actualArticles }) =>
      actualArticles.map((item) => ({
        ...item,
        category,
        categorySlug: slug,
      })),
    )
    .flat();

  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-screen-xl flex-1 px-5 py-8 md:px-8">
        <div className="flex-[3]">{children}</div>
        <aside className="hidden flex-[2] lg:block lg:pl-4">
          <h2 className="text-lg font-bold uppercase">aktuelno</h2>
          <Separator className="mb-4" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {articles.map((article) => {
              const { categorySlug, slug: articleSlug } = article;
              return (
                <Link
                  key={articleSlug}
                  href={`/${categorySlug}/${articleSlug}`}
                >
                  <ArticlePreview article={article} />
                </Link>
              );
            })}
          </div>
        </aside>
      </main>
    </>
  );
};

export default RootTemplate;
