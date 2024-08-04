import CategorySection from "@/components/custom-ui/category-section";
import { client } from "@/sanity/client";
import { ARCTICLES_HOME_PAGE_QUERY } from "@/sanity/queries";
import { ARCTICLES_HOME_PAGE_QUERYResult } from "@/sanity/types";

const Home = async () => {
  const data = await client.fetch<ARCTICLES_HOME_PAGE_QUERYResult>(
    ARCTICLES_HOME_PAGE_QUERY,
  );

  const newestArticles = data.map(({ actualArticles, ...rest }) => rest);

  return (
    <div className="lg:border-r lg:pr-4">
      {newestArticles.map(({ category, slug, newestArticles }) => (
        <CategorySection
          key={slug}
          category={category}
          slug={slug}
          newestArticles={newestArticles}
        />
      ))}
    </div>
  );
};

export default Home;
