import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { HomeComponent } from './home/home.component';
import { OneCommentComponent } from './one-comment/one-comment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'comments', component: CommentPageComponent},
  {path: 'comments/comment/:id', component: OneCommentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
