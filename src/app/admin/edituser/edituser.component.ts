import { FormGroup, FormControl } from '@angular/forms';
import { SnackbarService } from './../../services/snackbar.service';
import { AuthService } from './../../services/auth.service';
import { User } from '../../user';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { getDatabase, onValue, ref, remove, set } from 'firebase/database';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  constructor(public aroute: ActivatedRoute, public auth: AuthService, public router: Router, public snack: SnackbarService) { }
  currentUser:any = [];
  editGroup = new FormGroup({
    fullname: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    country: new FormControl(),
    city: new FormControl(),
  });


  ngOnInit(): void {
    const db = getDatabase();
    const uid = this.aroute.snapshot.params['uid'];
    const Ref = ref(db, 'users/' + uid);
    onValue(Ref, (snapshot) => {
      this.currentUser = snapshot.val();
    });
  }

  deleteme(){
    if(confirm("Are you sure to delete ?")) {
      const uid:string = this.aroute.snapshot.params['uid'];
      const db = getDatabase();
      remove(ref(db, 'users/' + uid));
      this.router.navigate(['adminpanel']);
  
    }
  }

  modifyUser(value:any){
    const database = getDatabase();
    const uid:string = this.aroute.snapshot.params['uid'];
    set(ref(database, 'users/' + uid), {
      fullname: value.fullname,
      email: this.currentUser.email,
      photo: this.currentUser.photo,
      rank: this.currentUser.rank,
      country: value.country,
      city: value.city,
      phone: value.phone,
      SignedIn: this.currentUser.SignedIn
    })
    this.snack.openSnackBar('Information Saved','Horray!');
    this.router.navigate(['adminpanel']);
  }



}
