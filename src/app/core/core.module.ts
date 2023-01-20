import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import {  AuthenticationGuard, AuthenticationService } from './authentication';
import { NotAuthenticationGuard } from './authentication/notAuthentication.guard';
import { ApiPrefixInterceptor } from './http';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { HttpService } from './http/http.service';
import { LocalStorageService } from './local-storage.service';
import { RouteReusableStrategy } from './route-reusable-strategy';
import { ErrorMessageService } from './service';
import { UtilService } from './service/util.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [],
  providers: [
    AuthenticationGuard,
    LocalStorageService,
    ErrorHandlerInterceptor,
    ApiPrefixInterceptor,
    UtilService,
    ErrorMessageService,
    AuthenticationService,
    NotAuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})
export class CoreModule { }
