import Link from "next/link";

import { client } from "@/sanity/client";
import { CATEGORY_QUERY } from "@/sanity/queries";
import { CATEGORY_QUERYResult } from "@/sanity/types";

import Logo from "@/components/custom-ui/header/logo";
import Separator from "@/components/custom-ui/separator";
import SocialMediaLinks from "@/components/custom-ui/social-media-links";
import NavigationBar from "@/components/custom-ui/header/navigation-bar";
import SideBar from "@/components/custom-ui/header/side-bar";
import SearchPageLink from "@/components/custom-ui/header/search-page-link";

const Header = async () => {
  const allCategories = await client.fetch<CATEGORY_QUERYResult>(
    CATEGORY_QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  return (
    <header className="font-oswald">
      <section className="mx-auto flex min-w-64 max-w-screen-2xl items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-6 lg:px-12">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-3 border-gray-700 text-gray-700 lg:gap-6">
          <SearchPageLink />
          <span className="h-5 w-px bg-gray-300"></span>
          <SocialMediaLinks className="hidden border-gray-700 text-gray-700 lg:flex" />
          <SideBar allCategories={allCategories} />
        </div>
      </section>
      <Separator className="mx-auto h-0 max-w-[1256px] border-t" />
      <section className="mt-5 hidden flex-col gap-5 text-gray-700 lg:flex">
        <NavigationBar allCategories={allCategories} />
      </section>
    </header>
  );
};

export default Header;
