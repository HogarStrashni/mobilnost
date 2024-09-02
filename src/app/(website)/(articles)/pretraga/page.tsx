import { client } from "@/sanity/client";
import { ARTICLES_BY_SEARCH_QUERY } from "@/sanity/queries";
import { ARTICLES_BY_SEARCH_QUERYResult } from "@/sanity/types";
import SearchFormSection from "@/components/custom-ui/search-form-section";
import ArticleCard from "@/components/custom-ui/articles/article-card";

type SearchPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const searchParamQ = searchParams.q;

  if (!searchParamQ || typeof searchParamQ !== "string")
    return (
      <SearchFormSection
        searchValue=""
        message="Termin mora imati minimalno 3 karaktera."
      />
    );

  if (searchParamQ.length < 3)
    return (
      <SearchFormSection
        searchValue={searchParamQ}
        message="Termin mora imati minimalno 3 karaktera."
      />
    );

  const searchedArticles = await client.fetch<ARTICLES_BY_SEARCH_QUERYResult>(
    ARTICLES_BY_SEARCH_QUERY,
    { searchQuery: `*${searchParamQ}*` },
    { next: { revalidate: 600 } },
  );

  const articlesCount = searchedArticles.length;
  const result = articlesCount === 1 ? "rezultat" : "rezultata";

  return (
    <>
      <SearchFormSection
        searchValue={searchParamQ}
        message={`Ukupno ${articlesCount} ${result} pretrage: "${searchParamQ}"`}
      />

      <section className="mt-4 grid gap-4 sm:grid-cols-2">
        {searchedArticles.map((article) => {
          return (
            <ArticleCard
              key={article.slug}
              article={article}
              showCategory
              showExcerpt
            />
          );
        })}
      </section>
    </>
  );
};

export default SearchPage;
