import { CATEGORIES } from "./constants";
import { ICategory } from "./types";

export const getCetegories = () => {
  return CATEGORIES;
};

export const checkChildren = (category: ICategory) => {
  return category.subcategories && category.subcategories.length > 0;
};

export const getAccordionIcon = (category: ICategory, isOpen: boolean) => {
  if (category.subcategories && category.subcategories?.length > 0 && !isOpen) {
    return "+";
  }

  return "-";
};
