import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommentsComponent } from './components/posts/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id/comments', component: CommentsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
