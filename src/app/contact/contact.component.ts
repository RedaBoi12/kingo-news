import { Router } from '@angular/router';
import { SnackbarService } from './../services/snackbar.service';
import { AuthGuard } from './../services/auth.guard';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public auth: AuthService, public guard: AuthGuard, public snack: SnackbarService, public router: Router) { }

  ngOnInit(): void {
  }
}
