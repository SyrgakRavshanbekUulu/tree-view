export interface ICategory {
  id: string;
  title: string;
  subcategories?: ICategory[];
  parentId?: string;
}
