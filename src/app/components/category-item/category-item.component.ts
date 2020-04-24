import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/mock-data';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  constructor() { }

  categories: Category[];

  ngOnInit(): void {
    this.categories = CATEGORIES;
  }

  scrollToView(div: any) {
    document.getElementById(div).scrollIntoView();
  }

}
