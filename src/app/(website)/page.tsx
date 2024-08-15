import CategorySection from "@/components/custom-ui/category-section";
import { client } from "@/sanity/client";
import { ARCTICLES_HOME_PAGE_QUERY } from "@/sanity/queries";
import { ARCTICLES_HOME_PAGE_QUERYResult } from "@/sanity/types";

const Home = async () => {
  const data = await client.fetch<ARCTICLES_HOME_PAGE_QUERYResult>(
    ARCTICLES_HOME_PAGE_QUERY,
  );

  // make two queries actual and newest
  const actualArticles = data.map(({ newestArticles, ...rest }) => rest);
  const newestArticles = data.map(({ actualArticles, ...rest }) => rest);

  const actualArticlesTransformed = actualArticles
    .map(({ actualArticles, slug, category }) =>
      actualArticles.map((article) => ({
        categorySlug: slug,
        category,
        ...article,
      })),
    )
    .flat();
  const newestArticlesTransformed = newestArticles
    .map(({ newestArticles, slug, category }) =>
      newestArticles.map((article) => ({
        categorySlug: slug,
        category,
        ...article,
      })),
    )
    .flat();

  return (
    <div className="mx-auto my-6 min-h-96 max-w-screen-2xl px-2 sm:my-8 sm:px-5 lg:my-16 lg:px-12">
      <section className="min-h-40 border">
        <pre>{JSON.stringify(actualArticlesTransformed, null, 4)}</pre>
      </section>
      <section className="min-h-40 border">
        <pre>{JSON.stringify(newestArticlesTransformed, null, 4)}</pre>
      </section>
      {/* {newestArticles.map(({ category, slug, newestArticles }) => (
        <CategorySection
          key={slug}
          category={category}
          slug={slug}
          newestArticles={newestArticles}
        />
      ))} */}
    </div>
  );
};

export default Home;
