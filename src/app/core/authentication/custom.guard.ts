import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class CustomGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }
  canActivate(routeSnapshot: ActivatedRouteSnapshot): boolean {
    const urlData = routeSnapshot.data;
    if (urlData && urlData.URLAllow) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
