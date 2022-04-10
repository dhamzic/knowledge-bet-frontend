export interface ISubcategory{
    name: string;
}

export interface ISubcategoryResolved{
    subcategory?: ISubcategory;
    error?: any;
}