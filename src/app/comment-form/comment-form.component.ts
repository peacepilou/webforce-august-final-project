import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  categories: string[] = ['cours', 'ressenti', 'travail maison', 'évaluation'];
  com: Comment = new Comment('', 0, '', '');
  commentList: Comment[] = [];

  constructor(private service: DatabaseService) { }

  ngOnInit(): void {
    this.service.getAllComments().valueChanges().subscribe(dataFromDB=> {
      this.commentList = dataFromDB;
    })
  }

  onSubmit(): void{
    console.log(this.com);
    this.service.createComment(this.com);
    console.log(this.commentList);

  }

}
