import {Customer, Review} from '../models/review.model';

export class GetReviews {
  static readonly type = '[REVIEW] Get Reviews';
}

export class GetReviewsSuccess {
  static readonly type = '[REVIEW] Get Reviews Success';

  constructor(public data: Customer[]) {
  }
}

export class GetReviewsFailed {
  static readonly type = '[REVIEW] Get Reviews Failed';

  constructor(public error: any) {
  }
}

export class GetGoodReviews {
  static readonly type = '[REVIEW] Get Good Reviews';

  constructor(public paintingId: number) {
  }
}

export class GetGoodReviewsSuccess {
  static readonly type = '[REVIEW] Get Good Reviews Success';

  constructor(public data: Review[]) {
  }
}

export class GetGoodReviewsFailed {
  static readonly type = '[REVIEW] Get Good Reviews Failed';

  constructor(public error: any) {
  }
}

export class AddGoodReview {
  static readonly type = '[REVIEW] Add Good Review';

  constructor(public data: Review) {
  }
}

export class AddGoodReviewSuccess {
  static readonly type = '[REVIEW] Add Good Reviews Success';

  constructor(public data: Review) {
  }
}

export class AddGoodReviewFailed {
  static readonly type = '[REVIEW] Add Good Reviews Failed';

  constructor(public error: any) {
  }
}
