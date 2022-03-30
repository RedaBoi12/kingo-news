import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, public guard: AuthGuard) { }

  ngOnInit(): void {
  }


}
