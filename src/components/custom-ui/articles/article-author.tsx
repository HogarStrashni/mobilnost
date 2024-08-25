import { UserRoundPen } from "lucide-react";

type ArticleAuthorProps = {
  author: string;
};

const ArticleAuthor = ({ author }: ArticleAuthorProps) => {
  return (
    <div className="flex shrink-0 items-center gap-1 text-gray-500">
      <UserRoundPen className="size-3" />
      <span className="pb-px font-oswald text-sm">{author}</span>
    </div>
  );
};

export default ArticleAuthor;
