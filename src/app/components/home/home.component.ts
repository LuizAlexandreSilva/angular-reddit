import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject, debounceTime, tap } from 'rxjs';
import { RedditService } from '../../services/reddit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbAlertModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searchString = '';
  loading = false;
  showAlertError = false;
  private _message$ = new Subject<string>();

  @ViewChild('selfClosingAlert', { static: false }) selfClosingAlert:
    | NgbAlert
    | undefined;

  constructor(private redditService: RedditService, private router: Router) {
    this._message$
      .pipe(
        takeUntilDestroyed(),
        tap(() => (this.showAlertError = true)),
        debounceTime(5000)
      )
      .subscribe(() => this.selfClosingAlert?.close());
  }

  onSearch() {
    this.loading = true;
    this.redditService.getSubreddit(this.searchString).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.data) {
          this.router.navigate(
            [`posts/${this.searchString.toLocaleLowerCase()}`],
            { state: { data: response.data } }
          );
        }
      },
      error: () => {
        this._message$.next('');
        this.loading = false;
        this.searchString = '';
      },
    });
  }
}
