import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/mock-data';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit {

  constructor() { }

  categories: Category[];

  ngOnInit(): void {
    this.categories = CATEGORIES;
  }

}
