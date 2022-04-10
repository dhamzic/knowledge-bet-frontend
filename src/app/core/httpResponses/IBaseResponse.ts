export type BaseResponse = {
    status: ResponseStatus;
    messageTranslationCode?: TranslationCode;
    logMessage?: string;
}

export enum ResponseStatus {
    Success,
    InvalidRequest,
    Error,
    UnhandledException
}

export enum TranslationCode {
    UnknownError,
    DataLoadError,
    StartTaskSuccess,
    StartTaskError,
    AcceptOrderError,
    FinalizeOrderError
}