import { Component, OnInit } from '@angular/core';
import { Comment }         from '../../models/Comment';
import { Article }         from '../../models/Article';
import { ARTICLES, COMMENTS } from 'src/app/mock-data';

@Component({
  selector: 'app-latest-comments',
  templateUrl: './latest-comments.component.html',
  styleUrls: ['./latest-comments.component.scss']
})
export class LatestCommentsComponent implements OnInit {

  comments: Comment[];
  articles: Article[];

  constructor() { }

  ngOnInit(): void {
    this.comments = COMMENTS;
    this.articles = ARTICLES;
  }

}
