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
        <Link
          href={sourceUrl}
          target="_blank"
          className="ml-2 text-base text-gray-700 underline underline-offset-4"
        >
          {source}
        </Link>
      ) : (
        <span className="text-base text-gray-700">{source}</span>
      )}
    </div>
  );
};

export default ArticleSource;
