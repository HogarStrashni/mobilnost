"use client";

import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import { cn } from "@/lib/utils/tailwind";

import CarouselArticles from "@/components/custom-ui/articles/actual-articles/carousel-articles";
import NonCarouselArticles from "@/components/custom-ui/articles/actual-articles//non-carousel-articles";

type ActualArticlesProps = {
  articles: ACTUAL_ARTICLES_QUERYResult;
  className?: string;
};

const ActualArticles = ({ articles, className }: ActualArticlesProps) => {
  const carouselArticles = articles.slice(0, articles.length - 4);
  const restArticles = articles.slice(-4);

  return (
    <section className={cn("grid min-h-40 grid-cols-2 gap-4", className)}>
      <CarouselArticles data={carouselArticles} />
      <NonCarouselArticles data={restArticles} />
    </section>
  );
};

export default ActualArticles;
