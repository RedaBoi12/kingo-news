import { Router } from '@angular/router';
import { NewsapiService } from './../../services/newsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  constructor(public news: NewsapiService, public router: Router) { }
  topHeadlinesResult:any = [];
  ngOnInit(): void {
    this.news.topHeadlines().subscribe((result)=>{
      this.topHeadlinesResult = result.articles;
    })
  }



}
