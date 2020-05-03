import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";
import { CATEGORIES, COMMENTS } from '../mock-data';
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
      });
    });
  }
}
