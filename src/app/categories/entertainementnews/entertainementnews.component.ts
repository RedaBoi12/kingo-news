import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-entertainementnews',
  templateUrl: './entertainementnews.component.html',
  styleUrls: ['./entertainementnews.component.scss']
})
export class EntertainementnewsComponent implements OnInit {

  constructor(private entertainementnews: NewsapiService) { }
  entertainementNewsResult:any = [];
  ngOnInit(): void {
    this.entertainementnews.entertainmentNews().subscribe((result)=>{
      console.log(result);
      this.entertainementNewsResult = result.articles;
    })
  }

}
