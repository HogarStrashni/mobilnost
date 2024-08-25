import Link from "next/link";
import { FileDown } from "lucide-react";

type ArticleAttachmentProps = {
  attachmentName: string;
  attacmentUrl: string;
};

const ArticleAttachment = ({
  attachmentName,
  attacmentUrl,
}: ArticleAttachmentProps) => {
  return (
    <div className="flex items-center gap-3 font-oswald text-sm">
      <span>datoteka:</span>
      <Link
        href={attacmentUrl}
        className="flex max-w-fit items-center gap-1 rounded border px-2 py-0.5 no-underline"
      >
        <FileDown className="size-3" />
        <span>{attachmentName}</span>
      </Link>
    </div>
  );
};

export default ArticleAttachment;
