"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";
import { useActiveLink } from "@/lib/hooks/use-active-link";
import { CATEGORY_QUERYResult } from "@/sanity/types";

type NavigationBarProps = {
  className?: string;
  allCategories: CATEGORY_QUERYResult;
};

const NavigationBar = ({ className, allCategories }: NavigationBarProps) => {
  const isActiveLink = useActiveLink();

  return (
    <div className={cn("bg-gray-200 py-3 text-gray-700", className)}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="mx-auto flex max-w-fit gap-6">
          {allCategories.map(({ title, slug }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className={cn(
                "scale-y-110 font-medium uppercase",
                isActiveLink(slug)
                  ? "bg-gradient-to-br from-green-600 to-violet-600 bg-clip-text text-transparent"
                  : "hover:text-gray-900",
              )}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
