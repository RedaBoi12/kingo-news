import { AuthGuard } from './services/auth.guard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moroccan-news';
  constructor(public guard: AuthGuard){}

  ngOnInit(): void {
    if(this.guard.isLogged()){
      this.guard.isLoggedin = true;
    }
    else this.guard.isLoggedin = false;
  }
}
