import React, { useState } from "react";
import { ICategory } from "shared/types";
import styles from "./CategoryItem.module.scss";
import { checkChildren } from "shared/utils";

type CategoryItemProps = {
  category: ICategory;
  onItemClick: (id: string) => void;
  index: number;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  onItemClick,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
    onItemClick(category.id);
  };

  return (
    <div className={styles.category}>
      <div className={styles.category__title}>
        {index + 1}. {category.title}
        {checkChildren(category) && <span onClick={handleItemClick}>+</span>}
      </div>
      {isOpen &&
        category.subcategories &&
        category.subcategories.map((categoryChild, i) => (
          <CategoryItem
            index={i}
            category={categoryChild}
            onItemClick={onItemClick}
          />
        ))}
    </div>
  );
};
export default CategoryItem;
