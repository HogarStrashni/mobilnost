import ArticleAttachment from "./article-attachment";
import ArticleSource from "./article-source";

type ArticleSingleFooterProps = {
  attachmentName: string;
  attacmentUrl: string;
  source: string;
  sourceUrl: string;
};

const ArticleSingleFooter = ({
  attachmentName,
  attacmentUrl,
  source,
  sourceUrl,
}: ArticleSingleFooterProps) => {
  return (
    <div className="text-gray-500">
      {(attachmentName || source) && <div className="mt-12 w-20 border"></div>}

      <div className="mt-6 flex flex-col gap-4">
        {attachmentName && attacmentUrl && (
          <ArticleAttachment
            attachmentName={attachmentName}
            attacmentUrl={attacmentUrl}
          />
        )}

        {source && (
          <ArticleSource source={source} sourceUrl={sourceUrl ?? ""} />
        )}
      </div>
    </div>
  );
};

export default ArticleSingleFooter;
