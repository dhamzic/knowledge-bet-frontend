import { IQuestion } from "src/app/question-creator/models/IQuestion";
import { BaseResponse } from "./IBaseResponse";

export interface IGetQuestionsFromSpecificSubcategoryResponse extends BaseResponse{
    data: IQuestion[];
    error?: any;
}