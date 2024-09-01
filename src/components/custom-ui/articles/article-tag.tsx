import Link from "next/link";

type ArticleTagProps = {
  title: string | null;
  slug: string | null;
};

const ArticleTag = ({ title = "", slug = "" }: ArticleTagProps) => {
  return (
    <Link
      href={`/tagovi/${slug}`}
      className="rounded bg-gradient-to-br from-green-primary/70 to-purple-primary/70 px-2 py-0.5 font-oswald text-sm uppercase text-white duration-300 ease-in-out hover:from-green-primary/90 hover:to-purple-primary/90"
    >
      {title}
    </Link>
  );
};

export default ArticleTag;
