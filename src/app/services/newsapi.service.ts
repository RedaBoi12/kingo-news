import { Article } from './../article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }


  topHeadlines():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?language=ar&apiKey=39475f49ed284e34950771680db422c2');
  }

  techNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?category=technology&country=ma&apiKey=39475f49ed284e34950771680db422c2');
  }
  scienceNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?category=science&country=ma&apiKey=39475f49ed284e34950771680db422c2');
  }
  businessNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?category=business&country=ma&apiKey=39475f49ed284e34950771680db422c2');
  }
  entertainmentNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?category=entertainment&country=ma&apiKey=39475f49ed284e34950771680db422c2');
  }
  healthNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?category=health&country=ma&apiKey=39475f49ed284e34950771680db422c2');
  }
  sportsNews():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?category=sports&country=ma&apiKey=39475f49ed284e34950771680db422c2');
  }



}
