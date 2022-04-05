import { NewsapiService } from './../../services/newsapi.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private busienssnews: NewsapiService) { }
  businessNewsResult:any = [];
  ngOnInit(): void {
    this.busienssnews.businessNews().subscribe((result)=>{
      this.businessNewsResult = result.articles;
    })
  }

}