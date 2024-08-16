import { client } from "@/sanity/client";
import { ACTUAL_ARTICLES_QUERY, NEWEST_ARTICLES_QUERY } from "@/sanity/queries";
import {
  ACTUAL_ARTICLES_QUERYResult,
  NEWEST_ARTICLES_QUERYResult,
} from "@/sanity/types";

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
    <div className="mx-auto my-6 min-h-96 max-w-screen-2xl px-2 sm:my-8 sm:px-5 lg:my-16 lg:px-12">
      <section className="min-h-40 border">
        <pre>{JSON.stringify(actualArticles, null, 4)}</pre>
      </section>
      <section className="min-h-40 border">
        <pre>{JSON.stringify(newestArticles, null, 4)}</pre>
      </section>
    </div>
  );
};

export default Home;
