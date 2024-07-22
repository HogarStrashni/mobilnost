"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";
import { allCategories } from "@/lib/categories";
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

const SideBar = () => {
  const isActiveLink = useActiveLink();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="lg:hidden">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Navigate to certain category</SheetDescription>
        </SheetHeader>
        <h2 className="my-8 scale-y-110">ALL CATEGORIES</h2>
        <nav className="flex flex-col gap-4">
          {allCategories.map(({ name }) => (
            <SheetClose asChild key={name}>
              <Link
                href={`/${name}`}
                key={name}
                className={cn(
                  "scale-y-110 font-medium uppercase",
                  isActiveLink(name) &&
                    "bg-gradient-to-br from-green-600 to-violet-600 bg-clip-text text-transparent",
                )}
              >
                {name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
