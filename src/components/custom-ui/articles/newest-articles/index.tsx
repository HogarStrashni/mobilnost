import { NEWEST_ARTICLES_QUERYResult } from "@/sanity/types";
import CategorySection from "../category-section";

type NewestArticlesProps = {
  articles: NEWEST_ARTICLES_QUERYResult;
};

const NewestArticles = ({ articles }: NewestArticlesProps) => {
  return articles.map(({ category, slug, articles }) => (
    <CategorySection
      key={slug}
      category={category}
      slug={slug}
      articles={articles}
    />
  ));
};

export default NewestArticles;
