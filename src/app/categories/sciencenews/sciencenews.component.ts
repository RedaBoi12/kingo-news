import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.scss']
})
export class SciencenewsComponent implements OnInit {

  constructor(private sciencenews: NewsapiService) { }
  scienceNewsResult:any = [];
  ngOnInit(): void {
    this.sciencenews.scienceNews().subscribe((result)=>{
      console.log(result);
      this.scienceNewsResult = result.articles;
    })
  }

}