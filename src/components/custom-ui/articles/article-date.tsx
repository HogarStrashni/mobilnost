import { formatDate } from "@/lib/utils/date-formatter";
import { CalendarDays } from "lucide-react";

type ArticleDateProps = {
  date: string;
};

const ArticleDate = ({ date }: ArticleDateProps) => {
  return (
    <div className="flex shrink-0 items-center gap-1 text-gray-500">
      <CalendarDays className="size-3" />
      <span className="mb-px font-oswald text-xs">{formatDate(date)}</span>
    </div>
  );
};

export default ArticleDate;
