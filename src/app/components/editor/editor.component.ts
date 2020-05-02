import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let article = new Article(null, this.articleService.form.get('title').value, this.articleService.form.get('category').value, this.articleService.form.get('imageUrl').value, this.articleService.form.get('body').value, Date.now(), 0);
    console.log(article);
    this.articleService.addArticle(article)
       .then(res => {
           
       });
}

}
