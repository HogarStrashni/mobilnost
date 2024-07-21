import React from "react";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const CategoryPage = ({ params: { category } }: CategoryPageProps) => {
  return <h1 className="uppercase">{category}</h1>;
};

export default CategoryPage;
