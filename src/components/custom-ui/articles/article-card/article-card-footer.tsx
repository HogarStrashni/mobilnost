import { ArrowRight } from "lucide-react";

const ArticleCardFooter = () => {
  return (
    <div className="relative font-oswald text-gray-500">
      <button className="ml-auto flex items-center gap-1 rounded border border-gray-100 px-2 py-0.5 text-sm duration-300 ease-out group-hover:bg-gray-50">
        <span className="pb-px">Opširnije</span>
        <ArrowRight className="size-3" />
      </button>
    </div>
  );
};

export default ArticleCardFooter;
