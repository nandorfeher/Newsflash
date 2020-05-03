import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";
import { CATEGORIES, COMMENTS, LATEST_COMMENTS } from '../mock-data';
import { Category } from '../models/Category';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(public firestore: AngularFirestore) { }

  form = new FormGroup({        
    sender: new FormControl(''),
    body: new FormControl('')
  })

  categories: Category[];

  ngOnInit() {
    console.log("Fetching comments...");
    //this.getArticles();
  }

  addComment(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("comments")
            .add({...data})
            .then(res => {}, err => reject(err));
    });
  }

  getComments() { 
    // Összes komment lekérése
    this.firestore.collection("comments").get().toPromise().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots

        var c: Comment = new Comment(
          doc.id,
          doc.data().sender,
          +doc.data().date,
          doc.data().body,
          doc.data().article);

        COMMENTS.unshift(c);


        // Top 3 legolvasottabb cikk
        LATEST_COMMENTS.length = 0;
        LATEST_COMMENTS.length = 3;
        var latestComments = COMMENTS.sort(function(a, b) {
          var keyA = a.date,
            keyB = b.date;
          // Compare the 2 dates
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        }).slice(0, 3);
        LATEST_COMMENTS.unshift(latestComments[0]);
        LATEST_COMMENTS.unshift(latestComments[1]);
        LATEST_COMMENTS.unshift(latestComments[2]);

      });
    });
  }
}
