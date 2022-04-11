import { ICategory } from "./ICategory";
import { ISubcategory } from "./ISubcategory";

export interface IQuestion{
    id: number;
    text: string;
    category: ICategory;
    subcategory: ISubcategory;
}
