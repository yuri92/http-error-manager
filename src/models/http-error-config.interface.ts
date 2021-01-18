export interface IHttpErrorConfig {
    apiErrorList?: (ApiErrorListEntity)[] | null;
    genericError: IHttpErrorModal;
    ignoreList?: string[];
}
export interface ApiErrorListEntity {
    apiRegex: string;
    list?: (IHttpErrorModal)[] | null;
}
export interface IHttpErrorModal {
    errorCodeRegex: string;
    title: string;
    message: string;
    buttonLabel: string;
    isBlocking: boolean;
}
