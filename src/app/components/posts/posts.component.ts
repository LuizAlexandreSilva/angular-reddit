import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  data;

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];
    console.log(this.data);
  }
}
