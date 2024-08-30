import Link from "next/link";
import { FolderOpenDot } from "lucide-react";

type CategorySectionTitleProps = {
  category: string;
  href?: string;
};

const CategorySectionTitle = ({
  href,
  category,
}: CategorySectionTitleProps) => {
  return href ? (
    <Link
      href={href}
      className="mx-2 mb-4 flex max-w-fit items-center gap-2 font-bold uppercase sm:mx-0 sm:mb-6"
    >
      <FolderOpenDot className="size-4 text-green-primary sm:size-6" />
      <span className="font-oswald text-lg text-purple-primary sm:text-2xl">
        {category}
      </span>
    </Link>
  ) : (
    <div className="mx-2 mb-4 flex max-w-fit items-center gap-2 font-bold uppercase sm:mx-0 sm:mb-6">
      <FolderOpenDot className="size-4 text-green-primary sm:size-6" />
      <span className="font-oswald text-lg text-purple-primary sm:text-2xl">
        {category}
      </span>
    </div>
  );
};

export default CategorySectionTitle;
