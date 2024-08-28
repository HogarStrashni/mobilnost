"use client";

import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import { cn } from "@/lib/utils/tailwind";

import CarouselArticles from "@/components/custom-ui/articles/actual-articles/carousel-articles";
import NonCarouselArticles from "@/components/custom-ui/articles/actual-articles//non-carousel-articles";
import CategorySectionTitle from "@/components/custom-ui/articles/category-section/category-section-title";

type ActualArticlesProps = {
  articles: ACTUAL_ARTICLES_QUERYResult;
  className?: string;
};

const ActualArticles = ({ articles, className }: ActualArticlesProps) => {
  const carouselArticles = articles.slice(0, articles.length - 2);
  const restArticles = articles.slice(-2);

  return (
    <section>
      <CategorySectionTitle category="aktuelno" />

      <div
        className={cn(
          "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
          className,
        )}
      >
        <CarouselArticles
          data={carouselArticles}
          className="rounded bg-white shadow-sm sm:col-span-2"
        />
        <NonCarouselArticles
          data={restArticles}
          className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1"
        />
      </div>
    </section>
  );
};

export default ActualArticles;
