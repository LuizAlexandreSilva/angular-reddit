import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  baseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://www.reddit.com/r';
  }

  getSubreddit(name: string) {
    return this.http.get<any>(`${this.baseUrl}/${name}.json`);
  }

  getSubredditComments(subreddit: string, postId: string) {
    return this.http.get<any>(
      `${this.baseUrl}/${subreddit}/comments/${postId}.json`
    );
  }
}
