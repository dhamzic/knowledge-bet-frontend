import { ITile } from "src/app/home/models/ITile";
import { BaseResponse } from "./IBaseResponse";

export interface IGetHomeComponentTilesResponse extends BaseResponse {
    data: ITile[];
}