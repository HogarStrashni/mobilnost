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
    await client.fetch<ACTUAL_ARTICLES_QUERYResult>(
      ACTUAL_ARTICLES_QUERY,
      {},
      { next: { revalidate: 60 } },
    );

  const getNewestArticles = async () =>
    await client.fetch<NEWEST_ARTICLES_QUERYResult>(
      NEWEST_ARTICLES_QUERY,
      {},
      { next: { revalidate: 60 } },
    );

  const [actualArticles, newestArticles] = await Promise.all([
    getActualArticles(),
    getNewestArticles(),
  ]);

  return (
    <>
      <ActualArticles articles={actualArticles} />
      <NewestArticles articles={newestArticles} />
    </>
  );
};

export default Home;
