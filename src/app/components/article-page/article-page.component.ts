import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Article }         from '../../models/Article';
import { Comment }         from '../../models/Comment';
import { ArticleService } from 'src/app/services/article.service';
import { ARTICLES, COMMENTS } from 'src/app/mock-data';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: Article;
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.openArticle();
    window.scroll(0,0);
  }

  openArticle(): void {
    this.article = ARTICLES[this.route.snapshot.params.id];
    this.comments = [];
    COMMENTS.forEach(comment => {
      if(comment.article == this.article.id) {
        this.comments.push(comment);
      }
    });

  }

}
