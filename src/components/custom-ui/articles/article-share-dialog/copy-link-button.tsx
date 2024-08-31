import { Link } from "lucide-react";
import SocialIcon from "@/components/custom-ui/articles/article-share-dialog/social-icon";

type CopyLinkButtonProps = {
  articleLink: string;
};

const CopyLinkButton = ({ articleLink }: CopyLinkButtonProps) => {
  return (
    <button className="mx-auto max-w-fit">
      <SocialIcon title="Kopiraj link">
        <Link className="size-4 sm:size-5" />
      </SocialIcon>
    </button>
  );
};

export default CopyLinkButton;
