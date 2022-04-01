import { AdminGuard } from './../../services/admin.guard';
import { SnackbarService } from './../../services/snackbar.service';
import { AuthGuard } from './../../services/auth.guard';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { getDatabase, onValue, ref } from 'firebase/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router, public guard: AuthGuard, public sb: SnackbarService, public aguard: AdminGuard) { }

  admincode:string='';

  ngOnInit(): void {
    const db = getDatabase();
    const starCountRef = ref(db, 'admin-code');
    onValue(starCountRef, (snapshot) => {
      this.admincode = snapshot.val();
    });
  }
  
  checkCode(value:string){
    if(value == this.admincode){
      this.sb.openSnackBar('Admin Code Secured','Horray!');
      this.router.navigate(['adminpanel']);
    }
    else this.sb.openSnackBar('Wrong Security Code','Oops!');
  }

  
}
