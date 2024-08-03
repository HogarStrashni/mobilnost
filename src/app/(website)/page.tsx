import { client } from "@/sanity/client";
import { ARCTICLES_HOME_PAGE_QUERY } from "@/sanity/queries";
import { ARCTICLES_HOME_PAGE_QUERYResult } from "@/sanity/types";
import Link from "next/link";

const Home = async () => {
  const timeStart = Date.now();
  const data = await client.fetch<ARCTICLES_HOME_PAGE_QUERYResult>(
    ARCTICLES_HOME_PAGE_QUERY,
  );
  const timeEnd = Date.now();
  const time = timeEnd - timeStart;
  console.log({ time });

  const actualArticles = data
    .map(({ category, slug: categorySlug, actualArticles }) =>
      actualArticles.map((item) => ({ category, categorySlug, ...item })),
    )
    .flat();

  const newestArticles = data.map(({ actualArticles, ...rest }) => rest);

  return (
    <div className="h-full lg:border-r">
      {actualArticles.map((item) => (
        <div key={item.slug} className="mt-12">
          <Link href={`/${item.categorySlug}/${item.slug}` ?? "/"}>
            {item.title}
          </Link>
        </div>
      ))}
      {newestArticles.map(
        ({ category, slug: categorySlug, newestArticles }) => (
          <div key={categorySlug} className="mt-12">
            <Link href={`/${categorySlug}`}>{category}</Link>
            <div>
              {newestArticles.map((item) => (
                <div key={item.slug} className="mt-4">
                  <Link href={`/${categorySlug}/${item.slug}` ?? "/"}>
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Home;
