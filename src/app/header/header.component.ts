import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';
import { Observable } from 'rxjs';
import { getDatabase, onValue, ref } from 'firebase/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService, public guard: AuthGuard, public router: Router) { }
  ngOnInit(): void {
  }
  database = getDatabase();
  refr =  ref(this.database, 'users/' + this.auth.auth.currentUser?.uid + '/rank');

  SubmitSearch(value:any): void{
      let link = `http://localhost:4200/search/${value}`;
      window.open(link, '_self');
  }

  submitevent(e:any, value:string){
    if (e.key === "Enter") {
      this.SubmitSearch(value);
    }
  }


}
