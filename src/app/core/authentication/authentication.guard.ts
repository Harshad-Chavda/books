import { AuthenticationService } from 'src/app/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  isLoggedin : boolean = false;
  constructor(private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true
  }
}
