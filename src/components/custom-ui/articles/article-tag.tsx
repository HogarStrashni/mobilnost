type ArticleTagProps = {
  title: string;
};

const ArticleTag = ({ title }: ArticleTagProps) => {
  return (
    <span
      key={title}
      className="rounded bg-gradient-to-br from-green-primary/80 to-purple-primary/80 px-2 py-0.5 font-oswald text-sm uppercase text-white"
    >
      {title}
    </span>
  );
};

export default ArticleTag;
