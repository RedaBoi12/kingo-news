import { AuthService } from '../services/auth.service';
import { SnackbarService } from './../services/snackbar.service';
import { Auth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public snack: SnackbarService) { }

  ngOnInit(): void {
  }

}
