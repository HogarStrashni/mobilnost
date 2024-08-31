import { useState } from "react";
import { Check, Link } from "lucide-react";
import SocialIcon from "@/components/custom-ui/articles/article-share-dialog/social-icon";

type CopyLinkButtonProps = {
  articleLink: string;
};

const CopyLinkButton = ({ articleLink }: CopyLinkButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(articleLink);
    setIsCopied(true);
  };

  return (
    <button
      className="mx-auto max-w-fit disabled:pointer-events-none"
      onClick={handleCopyLink}
      disabled={isCopied}
    >
      <SocialIcon title={isCopied ? "Link kopiran" : "Kopiraj link"}>
        {isCopied ? (
          <Check className="size-4 sm:size-5" />
        ) : (
          <Link className="size-4 sm:size-5" />
        )}
      </SocialIcon>
    </button>
  );
};

export default CopyLinkButton;
