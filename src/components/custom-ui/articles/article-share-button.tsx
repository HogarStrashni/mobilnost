"use client";

import { cn } from "@/lib/utils/tailwind";
import { Share2 } from "lucide-react";

type ArticleShareButtonProps = {
  className?: string;
};

const ArticleShareButton = ({ className }: ArticleShareButtonProps) => {
  return (
    <button
      className={cn(
        "absolute z-10 flex items-center gap-1 rounded border border-gray-100 px-2 py-0.5 font-oswald text-sm text-gray-500 duration-300 ease-out hover:bg-gray-50",
        className,
      )}
      onClick={(e) => e.preventDefault()}
    >
      <Share2 className="size-3" />
      <span className="pb-px">Podijeli</span>
    </button>
  );
};

export default ArticleShareButton;
