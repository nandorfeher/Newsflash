import { Component, OnInit, Input } from '@angular/core';
import { CATEGORIES } from 'src/app/mock-data';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input('displayContent') displayContent: string;

  constructor() { }

  categories: Category[];

  ngOnInit(): void {
    this.categories = CATEGORIES;
  }

  scrollToView(div: any) {
    document.getElementById(div).scrollIntoView();
  }

}
