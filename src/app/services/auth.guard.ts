import { SnackbarService } from './snackbar.service';

import { Auth } from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: Auth, public sbService: SnackbarService, public router: Router){
    
  }
  isLoggedin: boolean = false;

  isLogged():boolean{
    if(this.afAuth.currentUser?.email == null) return false;
    else return true
  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuthentificated = user ? true : false;
    if (!isAuthentificated){
      this.router.navigate(['']);
      this.isLoggedin = false;
      this.sbService.openSnackBar(`Please Login/Register to view this Page`, '');
    }
    else this.isLoggedin = true;
    return isAuthentificated;

  }
  
}
