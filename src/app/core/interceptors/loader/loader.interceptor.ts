import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError, tap } from 'rxjs/operators';
import { LoaderService } from './services/loader.service';
import { MessageService } from 'primeng/api';
import { BaseResponse } from '../../httpResponses/IBaseResponse';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    private totalRequests = 0;

    constructor(
        private loaderService: LoaderService,
        private messageService: MessageService,
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('HTTP Request started');
        this.totalRequests++;

        if (!request.url?.toLowerCase().includes("identityserver") && !request.url?.toLowerCase().includes("i18n")) {
            this.loaderService.isLoading.next(true);
        }

        let retVal = next.handle(request)
            .pipe(
                finalize(() => {
                    this.totalRequests--;
                    if (this.totalRequests === 0) {
                        this.loaderService.isLoading.next(false);
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = this.setError(error);
                    let err: BaseResponse = error.error;
                    if (err.logMessage) console.error(err.logMessage);

                    if (err.logMessage) {

                        this.messageService.add(
                            {
                                severity: 'error',
                                summary: 'Error',
                                detail: err.logMessage,
                            });
                    }

                    return throwError(errorMessage);
                }),
                tap(
                    event => {
                        if (event instanceof HttpResponse) {

                            let url = event.url;
                            let response: BaseResponse = event.body;

                            if (event.status == 204 && !url?.toLowerCase().includes("i18n")) {
                                this.messageService.add(
                                    {
                                        severity: 'success',
                                        summary: 'Success',
                                    });
                            }
                        }
                    }
                )
            );

        return retVal;
    }

    setError(error: HttpErrorResponse): string {
        let errorMessage = 'Unknown error occured';
        if (error.error instanceof ErrorEvent) {
            // Client side error
            errorMessage = error.error.message;
        } else {
            // server side error
            if (error.status !== 0) {
                errorMessage = error.error.logMessage;
            }
            // if (error.status == 401) this.oAuthService.logOut();
        }
        return errorMessage;
    }
}
