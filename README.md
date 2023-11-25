# AngularReddit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## How to use

1. On home page, type subreddit name to search for threads (show alert if subreddit does not exist);
2. On thread listing page you can see recent threads with score and click to see its comments;
3. On thread comments page you can see all first level comments with author and score info.

## Used libraries

- [Angular Bootstrap](https://ng-bootstrap.github.io/#/home): for a faster development in basic styles

## Features

- Search subreddit;
- List subreddit threads with title, score and total comments number;
- Show thread detail with thread thumbnail, author name, link to original thread, thread title and description;
  - List first level comments with author name, score, and comment.

## Future improvements

- Integration with [Reddit API](https://www.reddit.com/dev/api/) instead of using .json API;
- Improve UI;
- Create components for:
  - page headers;
  - threads;
  - comments.
- Create [Route guard](https://angular.io/api/router/CanActivateFn) for authenticated users to protect inner pages (when using reddit official API)
- Unit tests;
