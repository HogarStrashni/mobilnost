import Logo from "@/components/custom-ui/logo";
import SocialMediaLinks from "@/components/custom-ui/social-media-links";

const Header = () => {
  return (
    <header className="border-b py-8">
      <div className="flex items-center justify-between gap-4">
        <Logo />
        <SocialMediaLinks className="hidden lg:flex" />
      </div>
    </header>
  );
};

export default Header;
