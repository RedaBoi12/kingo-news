import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.scss']
})
export class HealthnewsComponent implements OnInit {

  constructor(private healthnews: NewsapiService) { }
  healthNewsResult:any = [];
  ngOnInit(): void {
    this.healthnews.healthNews().subscribe((result)=>{
      console.log(result);
      this.healthNewsResult = result.articles;
    })
  }

}