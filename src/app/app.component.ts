import { Component } from '@angular/core';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Newsflash';

  constructor(public articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles();
  }

}
