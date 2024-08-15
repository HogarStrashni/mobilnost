import Link from "next/link";

import { client } from "@/sanity/client";
import { CATEGORY_QUERY } from "@/sanity/queries";
import { CATEGORY_QUERYResult } from "@/sanity/types";

import Logo from "@/components/custom-ui/header/logo";
import SocialMediaLinks from "@/components/custom-ui/social-media-links";
import NavigationBar from "@/components/custom-ui/header/navigation-bar";
import SideBar from "@/components/custom-ui/header/side-bar";

const Header = async () => {
  const allCategories =
    await client.fetch<CATEGORY_QUERYResult>(CATEGORY_QUERY);

  return (
    <header className="font-oswald">
      <section className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-2 py-4 sm:px-5 sm:py-6 lg:px-12">
        <Link href="/">
          <Logo />
        </Link>
        <SocialMediaLinks className="hidden lg:flex" />
        <SideBar allCategories={allCategories} />
      </section>

      <section className="hidden flex-col gap-5 text-gray-700 lg:flex">
        <NavigationBar allCategories={allCategories} />
      </section>
    </header>
  );
};

export default Header;
