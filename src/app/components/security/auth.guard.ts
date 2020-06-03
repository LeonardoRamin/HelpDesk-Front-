import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

    public shared: SharedService;

    constructor(private router: Router){
        this.shared = SharedService.getInstance();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(this.shared.isLoggedIn()){
            return true;
        }else{
            this.router.navigate(["/login"]);
            return false;
        }
    }
}