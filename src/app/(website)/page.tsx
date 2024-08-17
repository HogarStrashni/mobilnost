import { client } from "@/sanity/client";
import { ACTUAL_ARTICLES_QUERY, NEWEST_ARTICLES_QUERY } from "@/sanity/queries";
import {
  ACTUAL_ARTICLES_QUERYResult,
  NEWEST_ARTICLES_QUERYResult,
} from "@/sanity/types";

import ActualArticles from "@/components/custom-ui/articles/actual-articles";
import NewestArticles from "@/components/custom-ui/articles/newest-articles";

const Home = async () => {
  const getActualArticles = async () =>
    await client.fetch<ACTUAL_ARTICLES_QUERYResult>(ACTUAL_ARTICLES_QUERY);

  const getNewestArticles = async () =>
    await client.fetch<NEWEST_ARTICLES_QUERYResult>(NEWEST_ARTICLES_QUERY);

  const [actualArticles, newestArticles] = await Promise.all([
    getActualArticles(),
    getNewestArticles(),
  ]);

  return (
    <div className="mx-auto my-6 max-w-screen-2xl px-2 sm:my-8 sm:px-5 lg:my-16 lg:px-12">
      <ActualArticles articles={actualArticles} />
      <NewestArticles articles={newestArticles} />
    </div>
  );
};

export default Home;
