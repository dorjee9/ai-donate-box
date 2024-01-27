import { Injectable, inject} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';


@Injectable({ providedIn: 'root' })
 class AuthGuard {
    constructor(
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = false;
        if (user) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}

export const IsAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
    return inject(AuthGuard).canActivate(route, state);
}