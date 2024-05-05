import React, { useState } from "react";
import { ICategory } from "shared/types";
import styles from "./CategoryItem.module.scss";
import { checkChildren, getAccordionIcon } from "shared/utils";

type CategoryItemProps = {
  category: ICategory;
  index: number;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.category}>
      <div className={styles.category__title}>
        {index + 1}. {category.title}
        {checkChildren(category) && (
          <span onClick={handleItemClick}>
            {getAccordionIcon(category, isOpen)}
          </span>
        )}
      </div>
      {isOpen &&
        category.subcategories &&
        category.subcategories.map((categoryChild, i) => (
          <CategoryItem index={i} category={categoryChild} />
        ))}
    </div>
  );
};
export default CategoryItem;
