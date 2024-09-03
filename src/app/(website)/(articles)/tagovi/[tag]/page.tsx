import { client } from "@/sanity/client";
import { ARTICLES_BY_TAG_QUERY, TAGS_QUERY } from "@/sanity/queries";
import { ARTICLES_BY_TAG_QUERYResult, TAGS_QUERYResult } from "@/sanity/types";
import ArticleCard from "@/components/custom-ui/articles/article-card";
import CategorySectionTitle from "@/components/custom-ui/articles/category-section/category-section-title";
import PageNotFound from "@/components/custom-ui/articles/page-not-found";

type TagPageProps = {
  params: {
    tag: string;
  };
};

const TagPage = async ({ params: { tag } }: TagPageProps) => {
  const allTags = await client.fetch<TAGS_QUERYResult>(
    TAGS_QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  // minimize database queries with early return
  if (!allTags.some((t) => t.slug === tag)) {
    return <PageNotFound>Stranica nije pronađena!</PageNotFound>;
  }

  const articlesByTag = await client.fetch<ARTICLES_BY_TAG_QUERYResult>(
    ARTICLES_BY_TAG_QUERY,
    { currentTag: tag },
    { next: { revalidate: 60 } },
  );

  return (
    <div>
      <CategorySectionTitle category={tag} hashTag />

      <div className="grid gap-4 sm:grid-cols-2">
        {articlesByTag.map((article) => {
          return (
            <ArticleCard
              key={article.slug}
              article={article}
              showCategory
              showExcerpt
            />
          );
        })}
      </div>
    </div>
  );
};

export default TagPage;
