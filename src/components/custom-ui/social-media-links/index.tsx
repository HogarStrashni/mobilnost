import { cn } from "@/lib/utils/tailwind";

import FacebookIcon from "@/components/custom-ui/social-media-links/icons/facebook";
import InstagramIcon from "@/components/custom-ui/social-media-links/icons/instagram";
import LinkedinIcon from "@/components/custom-ui/social-media-links/icons/linkedin";
import TwitterIcon from "@/components/custom-ui/social-media-links/icons/twitter";
import SendEmailIcon from "@/components/custom-ui/social-media-links/icons/send-email";

const allLinks = [
  {
    name: "facebook",
    icon: <FacebookIcon className="size-6" />,
    href: "https://www.facebook.com",
  },
  {
    name: "instagram",
    icon: <InstagramIcon className="size-6" />,
    href: "https://www.instagram.com",
  },
  {
    name: "linkedin",
    icon: <LinkedinIcon className="size-6" />,
    href: "https://www.linkedin.com",
  },
  {
    name: "twitter",
    icon: <TwitterIcon className="size-6" />,
    href: "https://www.x.com",
  },
  {
    name: "email",
    icon: <SendEmailIcon className="size-6" />,
    href: "mailto:milenko.dzever@gmail.com",
  },
];

type SocialMediaLinksProps = {
  className?: string;
};

const SocialMediaLinks = ({ className }: SocialMediaLinksProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {allLinks.map(({ name, icon, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          className={cn(
            "duration-200 ease-in-out",
            name !== "twitter"
              ? "lg:grayscale lg:hover:grayscale-0"
              : "lg:invert lg:hover:invert-0",
          )}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
