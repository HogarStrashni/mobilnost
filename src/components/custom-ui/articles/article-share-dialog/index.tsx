"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/tailwind";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import CopyLinkButton from "@/components/custom-ui/articles/article-share-dialog/copy-link-button";
import SocialIcon from "@/components/custom-ui/articles/article-share-dialog/social-icon";
import FacebookIcon from "@/assets/icons/facebook";
import XIcon from "@/assets/icons/x";
import LinkedinIcon from "@/assets/icons/linkedin";
import { Mail, Share2 } from "lucide-react";

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
        <DialogHeader>
          <DialogTitle>Podijeli članak</DialogTitle>
          <DialogDescription>na društvenim mrežama</DialogDescription>
        </DialogHeader>
        <div className="flex w-full items-center justify-center rounded-md border px-4 py-2 text-center">
          <span className="line-clamp-2">{articleLink}</span>
        </div>
        <CopyLinkButton articleLink={articleLink} />
        <span className="mt-4 block w-full border-t pt-8 text-center text-sm uppercase sm:text-base">
          Podijeli
        </span>
        <div className="mx-auto flex max-w-fit gap-2 min-[300px]:gap-4 min-[420px]:gap-8">
          <FacebookShareButton url={articleLink}>
            <SocialIcon title="Facebook">
              <FacebookIcon className="size-4 sm:size-5" />
            </SocialIcon>
          </FacebookShareButton>

          <TwitterShareButton url={articleLink}>
            <SocialIcon title="X">
              <XIcon className="size-4 sm:size-5" />
            </SocialIcon>
          </TwitterShareButton>

          <LinkedinShareButton url={articleLink}>
            <SocialIcon title="Linkedin">
              <LinkedinIcon className="size-4 sm:size-5" />
            </SocialIcon>
          </LinkedinShareButton>

          <EmailShareButton url={articleLink}>
            <SocialIcon title="Mail">
              <Mail className="size-4 sm:size-5" />
            </SocialIcon>
          </EmailShareButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleShareDialog;
