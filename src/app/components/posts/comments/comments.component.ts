import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditService } from '../../../services/reddit.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  postId;
  subreddit;
  post: any = {};
  comments: any = [];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private redditService: RedditService
  ) {
    const { params } = this.route.snapshot;
    this.postId = params?.['post_id'];
    this.subreddit = params?.['subreddit'];
  }

  ngOnInit(): void {
    this.loading = true;
    this.redditService
      .getSubredditComments(this.subreddit, this.postId)
      .subscribe((response) => {
        this.post = response[0].data.children[0].data;
        this.comments = response[1].data.children;
        console.log(this.post);
        this.loading = false;
      });
  }
}
