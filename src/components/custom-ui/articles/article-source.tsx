import Link from "next/link";

type ArticleSourceProps = {
  source: string;
  sourceUrl?: string;
};

const ArticleSource = ({ source, sourceUrl }: ArticleSourceProps) => {
  return (
    <div className="flex items-center font-oswald text-sm">
      <span>izvor:</span>

      {sourceUrl ? (
        <Link href={sourceUrl} target="_blank" className="ml-2">
          {source}
        </Link>
      ) : (
        <span>{source}</span>
      )}
    </div>
  );
};

export default ArticleSource;
