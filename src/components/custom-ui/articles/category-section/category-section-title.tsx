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
      className="mb-6 flex max-w-fit items-center gap-2 font-bold uppercase"
    >
      <FolderOpenDot className="text-green-primary" />
      <span className="font-oswald text-2xl text-purple-primary">
        {category}
      </span>
    </Link>
  ) : (
    <div className="mb-6 flex max-w-fit items-center gap-2 font-bold uppercase">
      <FolderOpenDot className="text-green-primary" />
      <span className="font-oswald text-2xl text-purple-primary">
        {category}
      </span>
    </div>
  );
};

export default CategorySectionTitle;
