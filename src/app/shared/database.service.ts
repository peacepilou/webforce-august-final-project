import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Comment } from '../models/comment';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

  getAllComments(): AngularFirestoreCollection<Comment> {
    return this.firestore.collection('comments');
  }

  createComment(comment: Comment): void {
    console.log( this.firestore.collection('comments'));
    this.firestore.collection('comments').add(comment);
  }


}
