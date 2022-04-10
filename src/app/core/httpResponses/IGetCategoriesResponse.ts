import { ICategory } from "src/app/question-creator/models/ICategory";
import { BaseResponse } from "./IBaseResponse";

export interface IGetCategoriesResponse extends BaseResponse {
    data: ICategory[];
    error?: any;
}