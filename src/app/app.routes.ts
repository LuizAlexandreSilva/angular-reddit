import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: CommentsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
