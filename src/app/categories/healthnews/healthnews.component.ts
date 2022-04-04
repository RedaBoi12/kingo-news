import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, set } from 'firebase/database';
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

  addArticle(title:string){
    const db = getDatabase();
    set(ref(db, 'articles/' + title), {
      title: title,
      likeCount: 0
    });
  }

}