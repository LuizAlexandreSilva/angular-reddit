import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  data;
  subreddit;

  constructor(private router: Router, private route: ActivatedRoute) {
    const currentNavigation = this.router.getCurrentNavigation()?.extras;

    this.data = currentNavigation?.state?.['data'];
    this.subreddit = this.route.snapshot.params?.['subreddit'];
  }

  onSeeComments(postId: string) {
    this.router.navigate([`posts/${this.subreddit}/${postId}/comments`]);
  }
}
