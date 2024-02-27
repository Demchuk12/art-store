import {Article, Comment} from '../models/article.model';

export class GetArticles {
  static readonly type = '[ARTICLE] Get Articles';
}

export class GetArticlesSuccess {
  static readonly type = '[ARTICLE] Get Articles Success';

  constructor(public data: Article[]) {
  }
}

export class GetArticlesFailed {
  static readonly type = '[ARTICLE] Get Articles Failed';

  constructor(public error: any) {
  }
}

export class GetArticlesByCategory {
  static readonly type = '[ARTICLE] Get Articles By Category';

  constructor(public category: string) {
  }
}

export class GetArticlesByCategorySuccess {
  static readonly type = '[ARTICLE] Get Articles By Category Success';

  constructor(public data: Article[]) {
  }
}

export class GetArticlesByCategoryFailed {
  static readonly type = '[ARTICLE] Get Articles By Category Failed';

  constructor(public error: any) {
  }
}

export class GetArticleById {
  static readonly type = '[ARTICLE] Get Article By Id';

  constructor(public articleId: string) {
  }
}

export class GetArticleByIdSuccess {
  static readonly type = '[ARTICLE] Get Article By Id Success';

  constructor(public data: Article) {
  }
}

export class GetArticleByIdFailed {
  static readonly type = '[ARTICLE] Get Article By Id Failed';

  constructor(public error: any) {
  }
}

export class GetArticleComments {
  static readonly type = '[COMMENT] Get Article Comments';

  constructor(public articleId: number) {
  }
}

export class GetArticleCommentsSuccess {
  static readonly type = '[COMMENT] Get Article Comments Success';

  constructor(public data: Comment[]) {
  }
}

export class GetArticleCommentsFailed {
  static readonly type = '[COMMENT] Get Article Comments Failed';

  constructor(public error: any) {
  }
}

export class AddArticleComment {
  static readonly type = '[COMMENT] Add Article Comment';

  constructor(public data: Comment) {
  }
}

export class AddArticleCommentSuccess {
  static readonly type = '[COMMENT] Add Article Comment Success';

  constructor(public data: Comment) {
  }
}

export class AddArticleCommentFailed {
  static readonly type = '[COMMENT] Add Article Comment Failed';

  constructor(public error: any) {
  }
}
