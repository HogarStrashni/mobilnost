import ArticleAttachment from "@/components/custom-ui/articles/article-content/article-attachment";
import ArticleSource from "@/components/custom-ui/articles/article-content/article-source";

type ArticleFooterProps = {
  attachmentName: string;
  attacmentUrl: string;
  source: string;
  sourceUrl: string;
};

const ArticleFooter = ({
  attachmentName,
  attacmentUrl,
  source,
  sourceUrl,
}: ArticleFooterProps) => {
  return (
    <div className="mt-16 flex flex-col gap-4 text-gray-500">
      {attachmentName && attacmentUrl && (
        <ArticleAttachment
          attachmentName={attachmentName}
          attacmentUrl={attacmentUrl}
        />
      )}

      {source && <ArticleSource source={source} sourceUrl={sourceUrl ?? ""} />}
    </div>
  );
};

export default ArticleFooter;
