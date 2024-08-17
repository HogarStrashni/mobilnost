import { useRef } from "react";
import type { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import ArticleCard from "@/components/custom-ui/articles/article-card";

type CarouselArticlesProps = {
  data: ACTUAL_ARTICLES_QUERYResult;
  className?: string;
};

const CarouselArticles = ({ data, className }: CarouselArticlesProps) => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className={className}
    >
      <CarouselContent>
        {data.map((article, index) => (
          <CarouselItem key={index}>
            <ArticleCard article={article} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default CarouselArticles;
