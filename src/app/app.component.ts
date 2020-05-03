import { Component } from '@angular/core';
import { ArticleService } from './services/article.service';
import { CommentService } from './services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Newsflash';

  constructor(public articleService: ArticleService,
    public commentService: CommentService) { }

  ngOnInit() {
    this.articleService.getArticles();
    this.commentService.getComments();
  }

}
