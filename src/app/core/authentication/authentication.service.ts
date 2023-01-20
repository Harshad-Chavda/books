import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage.service';

const credentialsKey = 'credentials';

@Injectable({
    providedIn: 'root'
})
export  class AuthenticationService {
    public _credentials: any;
    public credentials$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public permissions$: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    constructor(
        private httpClient: HttpClient,
        private localStorageService: LocalStorageService,
        private router: Router,
    ) {
        // const savedCredentials = this.localStorageService.getItem(credentialsKey);
        // if (savedCredentials) {
        //     this._credentials = JSON.parse(savedCredentials);
        // }
        // if (this.isAuthenticated()) {
        // }
    }


    

    login(payload: any): Observable<any> {
        return this.httpClient.post('/auth/login', payload).pipe(
            map((body: any) => {
                this.setCredentials(body);
                return body;
            })
        );
    }


    logout() {
        this.setCredentials();
        this.router.navigate(['/login'], { replaceUrl: true });
    }
    isAuthenticated(): boolean {
        return !!this.credentials;
    }


    get credentials(): any {
        const savedCredentials = this.localStorageService.getItem(credentialsKey);
        return JSON.parse(savedCredentials);
    }

    get accessToken(): string | null {
        return this.credentials && this.credentials.accessToken ? this.credentials.accessToken : null;
    }

    public setCredentials(credentials?: any) {
        this._credentials = credentials || null;
        if (credentials) {
            this.localStorageService.setItem(credentialsKey, JSON.stringify(credentials));
            this.credentials$.next(this._credentials);
        } else {
            this.permissions$.next(null);
            this.localStorageService.clearItem(credentialsKey);
        }
    }

    apiCall(method: string, url: string, payload?: null, params?: any): Observable<any> {
        console.log('method: ', method);
        let apiData;
        if (method === 'put' || method === 'post') {
            apiData = this.httpClient[method](url, payload, params);
        } else if (method === 'get') {
            apiData = this.httpClient[method](url, { params });
        } else if (method === 'delete') {
            apiData = this.httpClient[method](url, params);
            
        }
        if (apiData) {
            return apiData.pipe(
                map((body: any) => {
                    return body;
                })
            );
        }else{
            throw new Error("Something went wrong"); 
        }
    }
}
