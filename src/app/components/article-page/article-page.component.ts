import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Article }         from '../../models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { ARTICLES } from "../../mock-data";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    public articleService: ArticleService,
  ) {}

  ngOnInit(): void {
    this.openArticle();
    window.scroll(0,0);
  }

  openArticle(): void {
    ARTICLES.forEach(article_temp => {
      if(article_temp.id == this.route.snapshot.params.id) {
        this.article = article_temp;
        return;
      }
    });
    if(this.article == null) {
      console.log("Nincs ilyen cikk.");
    }

    
    
    /*this.articleService.articles.forEach(article => {
      if(article.id == this.route.snapshot.params.id) {
        this.article = article;
        return;
      }
    });
    
    
    
    

    this.comments = [];
    COMMENTS.forEach(comment => {
      if(comment.article == this.article.id) {
        this.comments.push(comment);
      }
    });c
    this.comments = COMMENTS.filter(comment => comment.article === 0);*/

  }

}
