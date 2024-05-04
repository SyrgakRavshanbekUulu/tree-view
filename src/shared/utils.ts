import { CATEGORIES } from "./constants";
import { ICategory } from "./types";

export const getCetegories = () => {
  return CATEGORIES;
};

export const checkChildren = (category: ICategory) => {
  return category.subcategories && category.subcategories.length > 0;
};
