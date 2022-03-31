import { SnackbarService } from './snackbar.service';
import { Auth } from '@angular/fire/auth';
import { getDatabase, onValue, ref } from 'firebase/database';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public auth: Auth, public router: Router, public sbService: SnackbarService){}
  Admin:boolean = false;
  database = getDatabase();

  
  refr =  ref(this.database, 'users/' + this.auth.currentUser?.uid + '/rank');
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      onValue(this.refr, (snapshot) => {
        const data = snapshot.val();
        if(data == 'admin') this.Admin = true;
        else this.Admin = false;
      });
    const isAdmin = this.Admin;
    if (!isAdmin){
      this.router.navigate(['']);
      this.Admin = false;
      this.sbService.openSnackBar(`Only Admins can access this page`, 'Oops!');
    }
    return isAdmin;

  }
  
}
