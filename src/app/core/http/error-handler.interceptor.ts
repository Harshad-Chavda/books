import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TrackJS } from 'trackjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage.service';
import { ErrorMessageService, UtilService } from '../service';
import { CONSTANT, REMOVE_KEYS_FROM_PAYLOAD } from './../constants';

const credentialsKey = 'iv_patient_portal_credentials';
const credentialsWorkflowKey = 'iv_patient_workflow_credentials';
import * as _ from "lodash";

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private utilService: UtilService,
    private errorMessageService: ErrorMessageService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.utilService.clearMissedError();
    return next
      .handle(request)
      .pipe(catchError(error => this.errorHandler(error, request)));
  }

  // Customize the default error handler here if needed
  private errorHandler(
    response: HttpResponse<any>,
    request: HttpRequest<any>
  ): Observable<HttpEvent<any>> {

    console.log('response: ', response);
    if (response.status === 401) {
      console.log('CONSTANT.credentialsKey: ', CONSTANT.credentialsKey);
      const savedCredentials = this.localStorageService.getItem(CONSTANT.credentialsKey);
      console.log('savedCredentials: ', savedCredentials);
      if (savedCredentials) {
        const local: any = _.cloneDeep(CONSTANT);
        console.log('local: ', local);
        for (const key in local) {
          if (local.hasOwnProperty(key)) {
            const element = local[key];
            this.localStorageService.clearItem(element);
          }
        }
        window.location.reload();
      }
    }
    if (response.status === 400 || response.status === 404 || response.status === 500 || response.status === 504) {
      const errorResponse: any = response;
      console.log('errorResponse: ', errorResponse);
      if (environment.env !== 'LOCAL') {
        TrackJS.console.error({
          message: errorResponse.error.message || '',
          method: request.method,
          url: errorResponse.url,
          status: errorResponse.status,
          statusText: errorResponse.statusText,
          request: request.body,
          response: errorResponse.error
        });
      }
    }

    if (response.status === 400 || response.status === 404 || response.status === 401) {
      const errorResponse: any = response;
      if (errorResponse.error) {
        if (errorResponse.error.validation && errorResponse.error.validation.errors) {
          this.errorMessageService.clear();
          Object.keys(errorResponse.error.validation.errors).forEach((key: string) => {
            this.errorMessageService.set(
              errorResponse.error.validation.errors[key],
              key,
              response.url!
            );
          });
        } else {
          this.utilService.clearMissedError();
          this.utilService.setMissedError(errorResponse.error.message);
        }
      }
    } else if (response.status === 500) {
      const errorResponse: any = response;
      this.utilService.clearMissedError();
      this.utilService.setMissedError(errorResponse.error.message);
    }

    throw response;
  }
}
