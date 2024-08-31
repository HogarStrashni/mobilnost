"use client";

import { cn } from "@/lib/utils/tailwind";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Share2 } from "lucide-react";
import { useEffect, useState } from "react";

type ArticleShareDialogProps = {
  className?: string;
};

const ArticleShareDialog = ({ className }: ArticleShareDialogProps) => {
  const [articleLink, setArticleLink] = useState("");

  useEffect(() => {
    setArticleLink(window.location.href);
  }, []);

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "flex items-center gap-1 rounded-md border border-gray-100 px-2 py-0.5 font-oswald text-sm text-gray-500 duration-300 ease-out hover:bg-gray-50",
          className,
        )}
      >
        <Share2 className="size-3" />
        <span className="pb-px">Podijeli</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle>Podijeli članak</DialogTitle>
          <DialogDescription>
            Podijeli članak na društvenim mrežama
          </DialogDescription>
        </DialogHeader>
        Place content for the Dialog here. {articleLink}
      </DialogContent>
    </Dialog>
  );
};

export default ArticleShareDialog;
