import { ISubcategory } from "./ISubcategory";

export interface ICategory{
    name: string;
    subcategories: ISubcategory[];
}

export interface ICategoryResolved{
    categories?: ICategory[];
    error?: any;
}