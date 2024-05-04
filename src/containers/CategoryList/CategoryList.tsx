import CategoryItem from "components/CategoryItem/CategoryItem";
import React from "react";
import { getCetegories } from "shared/utils";

const CategoryList: React.FC = () => {
  return (
    <div>
      <h1>Categories</h1>
      <div>
        {getCetegories().map((category, i) => (
          <CategoryItem
            index={i}
            key={category.id}
            onItemClick={() => console.log(category.title)}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
