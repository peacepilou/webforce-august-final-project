import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

  getAllComments(): AngularFirestoreCollection<any[]> {
    return this.firestore.collection('comments');
  }

  createComment(comment: any): void {
    this.firestore.collection('comments').add(comment);
  }


}
