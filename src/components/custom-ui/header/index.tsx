import Link from "next/link";

import { client } from "@/sanity/client";
import { CATEGORY_QUERY } from "@/sanity/queries";
import { CATEGORY_QUERYResult } from "@/sanity/types";

import Logo from "@/components/custom-ui/logo";
import SocialMediaLinks from "@/components/custom-ui/social-media-links";
import NavigationBar from "@/components/custom-ui/header/navigation-bar";
import SideBar from "@/components/custom-ui/header/side-bar";

const Header = async () => {
  const allCategories =
    await client.fetch<CATEGORY_QUERYResult>(CATEGORY_QUERY);
  return (
    <header className="bg-gray-100">
      <div className="mx-auto flex min-h-16 max-w-screen-xl items-center justify-between gap-4 px-5 py-4 sm:py-6 md:px-8 lg:py-8">
        <Link href="/">
          <Logo />
        </Link>
        <SocialMediaLinks className="hidden lg:flex" />
        <SideBar allCategories={allCategories} />
      </div>
      <NavigationBar allCategories={allCategories} className="hidden lg:flex" />
    </header>
  );
};

export default Header;
