import Link from "next/link";

import { cn } from "@/lib/utils/tailwind";
import { useActiveLink } from "@/lib/hooks/use-active-link";

type NavigationLinkProps = {
  title: string;
  slug: string;
};

const NavigationLink = ({ title, slug }: NavigationLinkProps) => {
  const isActiveLink = useActiveLink();
  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "font-medium uppercase lg:text-xl",
        isActiveLink(slug)
          ? "bg-gradient-to-br from-green-primary to-purple-primary bg-clip-text text-transparent"
          : "hover:text-gray-900",
      )}
    >
      {title}
    </Link>
  );
};

export default NavigationLink;