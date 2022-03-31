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

  constructor(public router: Router, public guard: AuthGuard, public sb: SnackbarService) { }
  admincode='';
  ngOnInit(): void {
    
  }
  readCode():string{
    const db = getDatabase();
    const starCountRef = ref(db, 'admin-code');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.admincode = data;
    });
    return this.admincode;

  }
  checkCode(value:string){
    this.readCode();
    if(value = this.admincode){
      this.sb.openSnackBar('Admin Code Secured','Horray!');
      this.router.navigate(['adminpanel']);
    }
    else this.sb.openSnackBar('Wrong Security Code','Oops!');
  }

  
}
