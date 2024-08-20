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
  const carouselArticles = articles.slice(0, articles.length - 4);
  const restArticles = articles.slice(-4);

  return (
    <section>
      <CategorySectionTitle category="aktuelno" />

      <div className={cn("grid grid-cols-5 gap-6", className)}>
        <CarouselArticles
          data={carouselArticles}
          className="col-span-3 border-r pr-6"
        />
        <NonCarouselArticles data={restArticles} className="col-span-2" />
      </div>
    </section>
  );
};

export default ActualArticles;
