import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'comments', component: CommentPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
