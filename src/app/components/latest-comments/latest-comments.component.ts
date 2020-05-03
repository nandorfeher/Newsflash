import { Component, OnInit } from '@angular/core';
import { Comment }         from '../../models/Comment';
import { Article }         from '../../models/Article';
import { ARTICLES, COMMENTS, CATEGORIES, LATEST_COMMENTS, NEWEST_ARTICLE } from 'src/app/mock-data';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-latest-comments',
  templateUrl: './latest-comments.component.html',
  styleUrls: ['./latest-comments.component.scss']
})
export class LatestCommentsComponent implements OnInit {

  comments: Comment[];
  articles: Article[];
  categories: Category[];

  constructor() { }

  ngOnInit(): void {
    this.categories = CATEGORIES;
    this.articles = ARTICLES;
    this.comments = LATEST_COMMENTS;
  }

  getArticleById(id: string) {
    var tempArticle: Article;
    ARTICLES.forEach(article => {
      if(article.id == id) {
        tempArticle = article;
      }
    });
    return tempArticle;
  }

}
