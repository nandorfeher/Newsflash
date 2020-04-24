import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
  
    console.log(id);
  }

}
