export type BaseResponse = {
    status: ResponseStatus;
    message?: string;
    logMessage?: string;
}

export enum ResponseStatus {
    Success,
    InvalidRequest,
    Error,
    UnhandledException
}