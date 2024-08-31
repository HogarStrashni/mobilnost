import { FolderOpenDot } from "lucide-react";

type ArticleCategoryProps = {
  title: string;
};

const ArticleCategory = ({ title }: ArticleCategoryProps) => {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <FolderOpenDot className="size-3 text-green-primary" />
      <span className="font-oswald text-sm uppercase text-purple-primary">
        {title}
      </span>
    </div>
  );
};

export default ArticleCategory;
