import {IHttpErrorConfig, IHttpErrorModal} from "./http-error-config.interface";

export class HttpErrorProcessor {
    private config: IHttpErrorConfig;

    constructor(config: IHttpErrorConfig) {
        this.config = config;
    }

    getModal(inputUrl: string, inputErrorCode: string): IHttpErrorModal {

        try {
            // trovo l'api con l'errore
            // @ts-ignore
            const apiError = this.config.apiErrorList.find(err => {
                const apiRegex = new RegExp(err.apiRegex);
                return apiRegex.test(inputUrl);
            })

            // trovo l'errore passato in input tra l'api appena trovata
            // @ts-ignore
            const modal: IHttpErrorModal = apiError.list.find(err => {
                const errorRegex = new RegExp(err.errorCodeRegex);
                return errorRegex.test(inputErrorCode);
            })

            return modal;
        } catch (e) {
            return this.genericError;
        }

    }

    get genericError(): IHttpErrorModal {
        return this.config.genericError;
    }
}
