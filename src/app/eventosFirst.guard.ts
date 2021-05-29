import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';

@Injectable()
export class EventosFirstGuard {
    private carteleraFirst = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.carteleraFirst) {
            this.carteleraFirst = false;
            if (route.component !== CarteleraComponent) {
                this.router.navigateByUrl('/');
                return false;
            }
        }
        return true;
    }
}
