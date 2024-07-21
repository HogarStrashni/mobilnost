import Projects from "@/components/custom-ui/projects";
import React from "react";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = ({ params: { category } }: CategoryPageProps) => {
  return (
    <div className="h-full lg:border-r">
      <Projects
        num={10}
        title={category}
        className="grid-cols-1 pl-0 md:grid-cols-2 lg:pr-4"
        params={category}
      />
    </div>
  );
};

export default CategoryPage;
