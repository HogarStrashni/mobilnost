import ArticleCard from "@/components/custom-ui/articles/article-card";
import CategorySectionTitle from "@/components/custom-ui/articles/category-section/category-section-title";
import { client } from "@/sanity/client";
import { ARTICLES_BY_TAG_QUERY, TAGS_QUERY } from "@/sanity/queries";
import { ARTICLES_BY_TAG_QUERYResult, TAGS_QUERYResult } from "@/sanity/types";
import { Frown } from "lucide-react";

type TagPageProps = {
  params: {
    tag: string;
  };
};

const TagPage = async ({ params }: TagPageProps) => {
  const currentTag = params.tag;

  const allTags = await client.fetch<TAGS_QUERYResult>(TAGS_QUERY);
  const tagSlugs = allTags.map((tag) => tag.slug);

  // minimize database queries with early return
  if (!tagSlugs.includes(currentTag)) {
    return (
      <div className="flex items-center justify-center gap-2 rounded bg-white py-4 font-oswald shadow-sm sm:text-lg lg:text-xl">
        Stranica nije pronađena!
        <Frown className="size-5 lg:size-6" />
      </div>
    );
  }

  const articlesByTag = await client.fetch<ARTICLES_BY_TAG_QUERYResult>(
    ARTICLES_BY_TAG_QUERY,
    { currentTag },
  );

  return (
    <div>
      <CategorySectionTitle category={currentTag} hashTag />

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
