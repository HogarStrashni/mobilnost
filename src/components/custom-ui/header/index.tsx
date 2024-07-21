import Link from "next/link";
import Logo from "@/components/custom-ui/logo";
import SocialMediaLinks from "@/components/custom-ui/social-media-links";
import NavigationBar from "./navigation-bar";
import SideBar from "./side-bar";

const Header = () => {
  return (
    <header className="bg-gray-100">
      <div className="mx-auto flex min-h-16 max-w-screen-xl items-center justify-between gap-4 px-5 py-4 sm:py-6 md:px-8 lg:py-8">
        <Link href="/">
          <Logo />
        </Link>
        <SocialMediaLinks className="hidden lg:flex" />
        <SideBar />
      </div>
      <NavigationBar className="hidden lg:flex" />
    </header>
  );
};

export default Header;
