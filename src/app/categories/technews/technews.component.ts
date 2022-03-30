import { NewsapiService } from './../../services/newsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {

  constructor(private technews: NewsapiService) { }
  techNewsResult:any = [];
  ngOnInit(): void {
    this.technews.techNews().subscribe((result)=>{
      console.log(result);
      this.techNewsResult = result.articles;
    })
  }

}
