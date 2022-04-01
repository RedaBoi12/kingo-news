import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { getDatabase, onValue, ref } from 'firebase/database';
import { Auth } from 'firebase/auth';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.scss']
})
export class ManageaccountComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }
  deleteme(){
    if(confirm("Are you sure to delete ?")) {
      this.auth.deleteUser();
    }
  }

}
