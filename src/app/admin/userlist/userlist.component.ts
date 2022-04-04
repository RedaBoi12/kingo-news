import { AdminGuard } from './../../services/admin.guard';
import { AuthGuard } from './../../services/auth.guard';
import { Router } from '@angular/router';
import { SnackbarService } from './../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { getDatabase, onValue, ref, remove } from 'firebase/database';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(public sbservice: SnackbarService, public router: Router, public aguard: AdminGuard) { }
  userslist:any = [];

  ngOnInit(): void {
    this.aguard.Admin = true;
    const db = getDatabase();
    const Ref = ref(db, 'users/');
    onValue(Ref, (snapshot) => {
    const data = snapshot.val();
    this.userslist = Object.entries(data);
  });
  }
  deleteUser(uid:string){
    if(confirm("Are you sure to delete ?")) {
      const db = getDatabase();
      remove(ref(db, 'users/' + uid));
      this.sbservice.openSnackBar('User Deleted','Horray!');
    }
  }

}
