import Logo from "@/components/custom-ui/logo";
import SocialMediaLinks from "@/components/custom-ui/social-media-links";
import Separator from "@/components/custom-ui/separator";
import NavigationBar from "./navigation-bar";

const Header = () => {
  return (
    <header>
      <div className="flex min-h-16 items-center justify-between gap-4 py-4 sm:py-6 lg:py-8">
        <Logo />
        <SocialMediaLinks className="hidden lg:flex" />
      </div>
      <Separator />
      <NavigationBar className="hidden lg:flex" />
    </header>
  );
};

export default Header;
