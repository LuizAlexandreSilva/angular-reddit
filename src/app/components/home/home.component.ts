import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedditService } from '../../services/reddit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searchString = '';
  loading = false;

  constructor(private redditService: RedditService) {}

  onSearch() {
    this.loading = true;
    this.redditService.getSubreddit(this.searchString).subscribe((response) => {
      this.loading = false;
      console.log(response);
    });
  }
}