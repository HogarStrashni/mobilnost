import { ArrowRight } from "lucide-react";
import ArticleShareButton from "@/components/custom-ui/articles/article-share-button";

const ArticleCardFooter = () => {
  return (
    <div className="relative font-oswald text-gray-500">
      <ArticleShareButton />
      <button className="ml-auto flex items-center gap-1 rounded border border-gray-100 px-2 py-0.5 text-sm duration-300 ease-out hover:bg-gray-50">
        <span className="pb-px">Opširnije</span>
        <ArrowRight className="size-3" />
      </button>
    </div>
  );
};

export default ArticleCardFooter;
