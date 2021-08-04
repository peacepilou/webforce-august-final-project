import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Comment } from '../models/comment';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  coms: Comment[] = []

  constructor(private firestore: AngularFirestore) {
    this.getAllComments().valueChanges().subscribe(dataFormDB => {
      this.coms = dataFormDB;
      console.log(this.coms);  
    })
   }

  getAllComments(): AngularFirestoreCollection<Comment> {
    return this.firestore.collection('comments');
  }

  createComment(comment: Comment): void {
    console.log(comment);
    this.firestore.collection('comments').add({...comment});
  }

  getCommentById(id: number): Comment {
    return this.coms.find(comment => comment.id === id);
  }

}
