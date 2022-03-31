import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService, public guard: AuthGuard, public router: Router) { }
  ngOnInit(): void {
  }

  SubmitSearch(value:any): void{
      let link = `http://localhost:4200/search/${value}`;
      window.open(link, '_self');
  }

  submitevent(e:any, value:string){
    console.log(value);
    if (e.key === "Enter") {
      this.SubmitSearch(value);
    }
  }
}
