"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ACTUAL_ARTICLES_QUERYResult } from "@/sanity/types";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import ArticleCard from "@/components/custom-ui/articles/article-card";
import CarouselNavigation from "@/components/custom-ui/articles/actual-articles/carousel-navigation";

type CarouselArticlesProps = {
  data: ACTUAL_ARTICLES_QUERYResult;
  className?: string;
};

const CarouselArticles = ({ data, className }: CarouselArticlesProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 5000 }));

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("slidesInView", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const onNavigationClick = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api],
  );

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className={className}
      onMouseEnter={plugin.current.stop}
      // @ts-ignore
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {data.map((article, index) => (
          <CarouselItem key={index}>
            <ArticleCard article={article} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-8 flex items-center justify-center">
        <CarouselNavigation
          current={current}
          total={data.length}
          onNavigationClick={onNavigationClick}
        />
      </div>
    </Carousel>
  );
};

export default CarouselArticles;
