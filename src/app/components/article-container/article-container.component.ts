import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/mock-data';
import { Category } from 'src/app/models/Category';
import { ARTICLES } from "../../mock-data";
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit {

  constructor() { }

  categories: Category[];
  articles: Article[];

  ngOnInit(): void {
    this.categories = CATEGORIES;
    this.articles = ARTICLES;

  }
}
