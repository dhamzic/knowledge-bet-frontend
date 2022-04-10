import { ITile } from "src/app/home/models/ITile";
import { BaseResponse } from "./IBaseResponse";

export interface IGetHomeComponentTiles extends BaseResponse {
    data: ITile[];
}