"use client";

import { ArrowRight, Share2 } from "lucide-react";

const ArticleFooter = () => {
  return (
    <div className="relative font-oswald text-gray-500">
      <button
        className="absolute z-10 flex items-center gap-1 rounded border border-gray-100 px-2 py-0.5 text-sm duration-300 ease-out hover:bg-gray-50"
        onClick={(e) => e.preventDefault()}
      >
        <Share2 className="size-3" />
        <span className="pb-px">Share</span>
      </button>
      <button className="ml-auto flex items-center gap-1 rounded border border-gray-100 px-2 py-0.5 text-sm duration-300 ease-out hover:bg-gray-50">
        <span className="pb-px">Read more</span>
        <ArrowRight className="size-3" />
      </button>
    </div>
  );
};

export default ArticleFooter;
