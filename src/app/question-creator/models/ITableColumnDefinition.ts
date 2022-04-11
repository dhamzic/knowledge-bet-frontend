import { IQuestion } from "./IQuestion";

export interface ITableColumnDefinition{
    field: string;
    header: string;
    type: string;
    value: (order: IQuestion) => Date | string;
}