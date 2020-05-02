import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article.service";
import { TOP_ARTICLES } from "../../mock-data";
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.scss']
})
export class TopArticlesComponent implements OnInit {

  topArticles: Article[];

  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    //this.articleService.getArticles();
    this.topArticles = TOP_ARTICLES;
  }
}
