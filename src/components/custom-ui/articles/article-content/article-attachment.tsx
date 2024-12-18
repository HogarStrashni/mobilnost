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
      <span>prilog:</span>
      <Link
        href={attacmentUrl}
        className="flex max-w-fit items-center gap-1.5 rounded border px-2 py-0.5 text-base text-gray-700"
      >
        <FileDown className="size-3.5" />
        <span className="line-clamp-1">{attachmentName}</span>
      </Link>
    </div>
  );
};

export default ArticleAttachment;
