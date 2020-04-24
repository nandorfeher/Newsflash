import { Component, OnInit } from '@angular/core';
import { ARTICLES } from 'src/app/mock-data';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.scss']
})
export class TopArticlesComponent implements OnInit {

  constructor() { }

  articles: Article[];

  ngOnInit(): void {
    this.articles = ARTICLES;
  }
}
