import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  categories: string[] = ['cours', 'ressenti', 'travail maison', 'évaluation'];
  comment: Comment = new Comment('', 0, '', '');
  commentList: Comment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.comment);
    this.commentList.push(this.comment);
    console.log(this.commentList);

  }

}
