import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private aroute: ActivatedRoute, private http: HttpClient) { }
  searchResult:any = [];
  searchNews(value:string):Observable<any>{
    return this.http.get(`https://newsapi.org/v2/everything?q=${value}&sortBy=popularity&apiKey=39475f49ed284e34950771680db422c2`);
  }
  ngOnInit(): void {
    const value = this.aroute.snapshot.params['search'];
    this.searchNews(value).subscribe((result)=>{
      console.log(result);
      this.searchResult = result.articles;
    })
  }

}