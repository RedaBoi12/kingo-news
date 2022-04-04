import { SnackbarService } from './../services/snackbar.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-newsteller',
  templateUrl: './newsteller.component.html',
  styleUrls: ['./newsteller.component.scss']
})
export class NewstellerComponent implements OnInit {
  submitted = false;
  constructor(public router: Router, public sb: SnackbarService) { }

  ngOnInit(): void {
  }

}
