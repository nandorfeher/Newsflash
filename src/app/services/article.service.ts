import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";
import { CATEGORIES } from '../mock-data';
import { Category } from '../models/Category';
import { Article } from '../models/Article';
import { ARTICLES } from "../mock-data";
import { NEWEST_ARTICLE } from "../mock-data";
import { TOP_ARTICLES } from "../mock-data";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(public firestore: AngularFirestore) { }

  form = new FormGroup({        
    category: new FormControl(''),
    title: new FormControl(''),
    imageUrl: new FormControl(''), 
    body: new FormControl('')
  })

  categories: Category[];

  ngOnInit() {
    console.log("Fetching articles...");
    //this.getArticles();
  }

  addArticle(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("articles")
            .add({...data})
            .then(res => {}, err => reject(err));
    });
  }


  addViewToArticle(id: string, newViews) {
    this.firestore.collection("articles").doc(id).update({
      views: newViews
    });
  }

  getArticles() { 

    // Kategóriák
    this.categories = CATEGORIES;

    // Összes cikk lekérése
    let maxDate = 0;
    this.firestore.collection("articles").get().toPromise().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots

        var a: Article = new Article(
          doc.id,
          doc.data().name,
          doc.data().categoryId,
          doc.data().leadImageUrl,
          doc.data().body,
          +doc.data().date,
          +doc.data().views);
        
        ARTICLES.unshift(a);

        // Legújabb (legnagyobb) cikk
        if(a.date > maxDate) {
          NEWEST_ARTICLE.length = 0;
          NEWEST_ARTICLE.length = 1;
          NEWEST_ARTICLE.unshift(a);
          maxDate = a.date;
        }

        // Top 3 legolvasottabb cikk
        TOP_ARTICLES.length = 0;
        TOP_ARTICLES.length = 3;
        var topViews = ARTICLES.sort(function(a, b) {
          var keyA = a.views,
            keyB = b.views;
          // Compare the 2 dates
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        }).slice(0, 3);
        TOP_ARTICLES.unshift(topViews[0]);
        TOP_ARTICLES.unshift(topViews[1]);
        TOP_ARTICLES.unshift(topViews[2]);
      });
    });
  }
}
