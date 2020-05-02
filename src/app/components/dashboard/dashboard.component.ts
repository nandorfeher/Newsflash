import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from "../../services/article.service";
import { NEWEST_ARTICLE } from "../../mock-data";
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    public articleService: ArticleService) { }
  
  newestArticle: Article[];

  ngOnInit(): void {
    //this.articleService.getArticles();
    this.newestArticle = NEWEST_ARTICLE;
    console.log(this.newestArticle);
    /*this.articleService.firestore.collection("articles").get().toPromise().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
    });*/

    //console.log(this.articleService);
    //this.topArticle = Math.max.apply(Math, this.articleService.articles.map(function(o) { return o.views; }))

    /*let maxViews = 0;
    ARTICLES.forEach(article => {
      if(article.views > maxViews) {
        this.topArticle = article;
        maxViews = article.views;
      }
    });
    console.log(this.topArticle);*/

  }
}
