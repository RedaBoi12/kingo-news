import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from './../../../global';
import { Article } from './../../article';
import { NewsapiService } from 'src/app/services/newsapi.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-articledetails',
  templateUrl: './articledetails.component.html',
  styleUrls: ['./articledetails.component.scss']
})
export class ArticledetailsComponent implements OnInit {
  article:Article={
    title: '',
    urlToImage: '',
    content: '',
    description: '',
    publishedAt: '',
    url: ''
  };
  constructor(public news: NewsapiService, private aroute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.article.title = this.aroute.snapshot.params['title'];
    this.article.urlToImage = this.aroute.snapshot.params['urlToImage'];
    this.article.content = this.aroute.snapshot.params['content'];
    this.article.description = this.aroute.snapshot.params['description'];
    this.article.publishedAt = this.aroute.snapshot.params['publishedAt'];
    this.article.url = this.aroute.snapshot.params['url'];
  }

}
