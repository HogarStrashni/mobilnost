import Projects from "@/components/custom-ui/projects";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = ({ params: { category } }: CategoryPageProps) => {
  const title = category.replace("-", " ");
  return (
    <div className="h-full lg:border-r">
      <Projects
        num={10}
        title={title}
        className="grid-cols-1 pl-0 md:grid-cols-2 lg:pr-4"
        params={category}
      />
    </div>
  );
};

export default CategoryPage;
