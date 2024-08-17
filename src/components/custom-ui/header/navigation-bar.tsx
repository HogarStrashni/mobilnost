"use client";

import { CATEGORY_QUERYResult } from "@/sanity/types";
import NavigationLink from "@/components/custom-ui/header/navigation-link";
import Separator from "@/components/custom-ui/separator";

type NavigationBarProps = {
  allCategories: CATEGORY_QUERYResult;
};

const NavigationBar = ({ allCategories }: NavigationBarProps) => {
  return (
    <>
      <Separator className="h-0 border-t" />
      <div className="mx-auto flex w-full max-w-screen-2xl justify-center gap-6 px-2 sm:px-5 lg:px-12">
        <NavigationLink title="Home" slug="" />
        {allCategories.map(({ title, slug }) => (
          <NavigationLink key={slug} title={title ?? ""} slug={slug ?? ""} />
        ))}
      </div>
      <Separator />
    </>
  );
};

export default NavigationBar;
