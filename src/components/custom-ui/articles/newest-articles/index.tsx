import { NEWEST_ARTICLES_QUERYResult } from "@/sanity/types";

type NewestArticlesProps = {
  articles: NEWEST_ARTICLES_QUERYResult;
};

const NewestArticles = ({ articles }: NewestArticlesProps) => {
  return <pre>{JSON.stringify(articles, null, 4)}</pre>;
};

export default NewestArticles;
