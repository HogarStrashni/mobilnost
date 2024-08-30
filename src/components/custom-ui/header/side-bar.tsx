"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";
import { useActiveLink } from "@/lib/hooks/use-active-link";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CATEGORY_QUERYResult } from "@/sanity/types";

type SideBarProps = {
  allCategories: CATEGORY_QUERYResult;
};

const SideBar = ({ allCategories }: SideBarProps) => {
  const isActiveLink = useActiveLink();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <div className="flex size-9 items-center justify-center rounded-full border border-gray-500">
          <Menu className="size-5" />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-green-primary font-oswald lg:hidden">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Navigate to certain category</SheetDescription>
        </SheetHeader>
        <h2 className="my-12 text-xl uppercase">ALL CATEGORIES</h2>
        <nav className="flex flex-col gap-7">
          <SheetClose asChild>
            <Link
              href={`/`}
              className={cn(
                "text-xl font-medium uppercase",
                isActiveLink("") && "text-purple-primary",
              )}
            >
              Home
            </Link>
          </SheetClose>
          {allCategories.map(({ title, slug }) => (
            <SheetClose asChild key={slug}>
              <Link
                href={`/${slug}`}
                className={cn(
                  "text-xl font-medium uppercase",
                  isActiveLink(slug) && "text-purple-primary",
                )}
              >
                {title}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
