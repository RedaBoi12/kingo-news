import { DynamificationService } from './../services/dynamification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexpage',
  templateUrl: './indexpage.component.html',
  styleUrls: ['./indexpage.component.scss']
})
export class IndexpageComponent implements OnInit {

  constructor(public dyn: DynamificationService) { }

  ngOnInit(): void {
    this.dyn.readAboutList();
    this.dyn.readTestimonialsList();
    this.dyn.readHistoryList();
    this.dyn.readTeamList();
    this.dyn.readClientList();
  }

}
