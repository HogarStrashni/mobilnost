"use client";

import { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";
import ArticleCard from "../article-card";
import { useState } from "react";

type CarouselProps = {
  articles: ACTUAL_ARTICLES_QUERYResult;
  className?: string;
};

const Carousel = ({ articles, className }: CarouselProps) => {
  const carouselArticles = articles.slice(0, articles.length - 3);
  const restArticles = articles.slice(-3);

  const [articleIndex, setArticleIndex] = useState(1);

  const carouselArticle = carouselArticles[articleIndex];

  return (
    <section className="grid min-h-40 grid-cols-[1.6fr,1fr] gap-8">
      <div className="flex h-full w-full">
        <ArticleCard article={carouselArticle} />
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {restArticles.map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
