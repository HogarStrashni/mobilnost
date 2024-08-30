import Link from "next/link";
import { footerLinks } from "./links-list";
import SocialMediaLinks from "../social-media-links";

const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <footer className="bg-gray-800 font-oswald text-gray-200">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-6 px-2 py-6 sm:px-4 md:px-8 lg:px-12">
        <section className="flex w-full flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between">
          <SocialMediaLinks className="border-gray-400 text-gray-400" />
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            {footerLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-sm font-bold uppercase"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>
        <span className="h-px w-full bg-gray-600"></span>
        <section className="flex flex-col items-center">
          <span className="text-center text-lg italic">mobilnost.ba</span>
          <span className="text-center text-xs">
            Copyright &#169; {currentYear} All right reserved!
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
