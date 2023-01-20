import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '..';


/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
    private excludedUrlsRegex: RegExp[];
    private excludedUrls = [".svg"];
    constructor(private authenticationService: AuthenticationService) {
        this.excludedUrlsRegex =
            this.excludedUrls.map(urlPattern => new RegExp(urlPattern, 'i')) || [];
    }


    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const passThrough: boolean =
            !!this.excludedUrlsRegex.find(regex => regex.test(request.url));
        if (passThrough) {
            return next.handle(request);
        }

        if (this.authenticationService.isAuthenticated() && this.authenticationService.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.authenticationService.accessToken,
                    Product: 'app'
                }
            });
        }

        return next.handle(request);
    }
}
