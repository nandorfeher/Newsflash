import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Article }         from '../../models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { CommentService } from 'src/app/services/comment.service';
import { ARTICLES, COMMENTS } from "../../mock-data";
import { Comment } from 'src/app/models/Comment';

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
    public articleService: ArticleService,
    public commentService: CommentService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.openArticle();
    window.scroll(0,0);
  }

  openArticle(): void {
    ARTICLES.forEach(article_temp => {
      if(article_temp.id == this.route.snapshot.params.id) {
        this.article = article_temp;
        this.articleService.addViewToArticle(this.route.snapshot.params.id, this.article.views += 1);

        this.comments = COMMENTS.filter(comment => comment.article == this.route.snapshot.params.id).sort(function(a, b) {
          var keyA = a.date,
            keyB = b.date;
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });


        return;
      }
    });
    if(this.article == null) {
      this.router.navigate(['/dashboard']);
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

  onSubmit() {
    let comment = new Comment(
      null,
      this.commentService.form.get('sender').value,
      Date.now(),
      this.commentService.form.get('body').value,
      this.article.id);
      this.comments.push(comment);
      this.commentService.form.reset();
      this.commentService.addComment(comment)
       .then(res => {
           
       });
  }

}
