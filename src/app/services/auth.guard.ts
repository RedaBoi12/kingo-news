import { SnackbarService } from './snackbar.service';

import { Auth } from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogged: boolean = false;
  newUser: boolean = false;
  constructor(private afAuth: Auth, public sbService: SnackbarService){
    
  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuthentificated = user ? true : false;
    if (!isAuthentificated){
      this.isLogged = false;
      this.sbService.openSnackBar(`Please Login/Register to view this Page`, '');
    }
    return isAuthentificated;

  }
  
}
