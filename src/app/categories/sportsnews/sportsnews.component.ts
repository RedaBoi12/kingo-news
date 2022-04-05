import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.scss']
})
export class SportsnewsComponent implements OnInit {

  constructor(private sportsnews: NewsapiService) { }
  sportsNewsResult:any = [];
  ngOnInit(): void {
    this.sportsnews.sportsNews().subscribe((result)=>{
      this.sportsNewsResult = result.articles;
    })
  }

}