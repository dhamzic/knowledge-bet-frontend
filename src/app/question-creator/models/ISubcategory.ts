export interface ISubcategory{
    id: number;
    name: string;
}

export interface ISubcategoryResolved{
    subcategory?: ISubcategory;
    error?: any;
}