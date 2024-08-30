"use client";

import { cn } from "@/lib/utils/tailwind";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share2 } from "lucide-react";
import { useState } from "react";

type ArticleShareButtonProps = {
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
};

const ArticleShareButton = ({
  className,
  side = "bottom",
}: ArticleShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen}>
      <PopoverTrigger
        className={cn(
          "absolute z-10 flex items-center gap-1 rounded-md border border-gray-100 px-2 py-0.5 font-oswald text-sm text-gray-500 duration-300 ease-out hover:bg-gray-50",
          className,
        )}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <Share2 className="size-3" />
        <span className="pb-px">Podijeli</span>
      </PopoverTrigger>
      <PopoverContent
        side={side}
        onInteractOutside={() => setIsOpen(false)}
        onEscapeKeyDown={() => setIsOpen(false)}
      >
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};

export default ArticleShareButton;
