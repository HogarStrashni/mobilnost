import { cn } from "@/lib/utils/tailwind";

import FacebookIcon from "@/assets/icons/facebook";
import LinkedinIcon from "@/assets/icons/linkedin";
import XIcon from "@/assets/icons/x";

const allLinks = [
  {
    name: "facebook",
    icon: <FacebookIcon className="size-4" />,
    href: "https://www.facebook.com",
  },
  {
    name: "x",
    icon: <XIcon className="size-4" />,
    href: "https://www.x.com",
  },
  {
    name: "linkedin",
    icon: <LinkedinIcon className="size-4" />,
    href: "https://www.linkedin.com",
  },
];

type SocialMediaLinksProps = {
  className?: string;
};

const SocialMediaLinks = ({ className }: SocialMediaLinksProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {allLinks.map(({ name, icon, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          className="flex size-9 items-center justify-center rounded-full border border-inherit opacity-70 duration-300 ease-in-out hover:opacity-100"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
