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
import SocialMediaLinks from "../social-media-links";

type SideBarProps = {
  allCategories: CATEGORY_QUERYResult;
};

const SideBar = ({ allCategories }: SideBarProps) => {
  const isActiveLink = useActiveLink();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <div className="flex size-9 items-center justify-center rounded-full border border-gray-700">
          <Menu className="size-5" />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-gray-300 pt-24 font-oswald text-lg text-gray-700 sm:pt-28 sm:text-xl lg:hidden">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Navigate to certain category</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-7">
          <SheetClose asChild>
            <Link
              href={`/`}
              className={cn(
                "font-medium uppercase",
                isActiveLink("") &&
                  "bg-gradient-to-br from-green-primary to-purple-primary bg-clip-text text-transparent",
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
                  "font-medium uppercase",
                  isActiveLink(slug) &&
                    "bg-gradient-to-br from-green-primary to-purple-primary bg-clip-text text-transparent",
                )}
              >
                {title}
              </Link>
            </SheetClose>
          ))}

          <SocialMediaLinks className="mt-8 flex justify-center border-gray-800 text-gray-800" />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
