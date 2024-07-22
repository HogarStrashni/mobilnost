"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";
import { allCategories } from "@/lib/categories";
import { useActiveLink } from "@/lib/hooks/use-active-link";

type NavigationBarProps = {
  className?: string;
};

const NavigationBar = ({ className }: NavigationBarProps) => {
  const isActiveLink = useActiveLink();

  return (
    <div className={cn("bg-gray-200 py-3 text-gray-700", className)}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="mx-auto flex max-w-fit gap-3">
          {allCategories.map(({ name }) => (
            <Link
              key={name}
              href={`/${name}`}
              className={cn(
                "scale-y-110 font-medium uppercase",
                isActiveLink(name)
                  ? "bg-gradient-to-br from-green-600 to-violet-600 bg-clip-text text-transparent"
                  : "hover:text-gray-900",
              )}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
