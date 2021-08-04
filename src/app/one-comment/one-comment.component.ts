import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../models/comment';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-one-comment',
  templateUrl: './one-comment.component.html',
  styleUrls: ['./one-comment.component.scss']
})
export class OneCommentComponent implements OnInit {

  date: Date = new Date();
  comment: Comment = new Comment('', 0, '', '', 0)

  constructor(private route: ActivatedRoute, private db: DatabaseService) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.comment = this.db.getCommentById(id);
  }

}
