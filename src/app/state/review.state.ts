import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Customer, Review} from '../models/review.model';
import {
  AddGoodReview,
  AddGoodReviewFailed,
  AddGoodReviewSuccess,
  GetGoodReviews,
  GetGoodReviewsFailed,
  GetGoodReviewsSuccess,
  GetReviews,
  GetReviewsFailed,
  GetReviewsSuccess
} from '../actions/review.actions';
import {Injectable} from '@angular/core';
import {CustomersService} from '../services/customers.service';

export class ReviewStateModel {
  reviews!: Customer[];
  goodReviews!: Review[];
  loading!: boolean;
  loaded!: boolean;
  sendingReview!: boolean;
  sendedReview!: boolean;
}

@State<ReviewStateModel>({
  name: 'reviews',
  defaults: {
    reviews: [],
    goodReviews: [],
    loading: false,
    loaded: false,
    sendingReview: false,
    sendedReview: false
  }
})

@Injectable()
export class ReviewState implements NgxsOnInit {

  @Selector()
  static loading(state: ReviewStateModel) {
    return state.loading;
  }

  @Selector()
  static loaded(state: ReviewStateModel) {
    return state.loaded;
  }

  @Selector()
  static sendingReview(state: ReviewStateModel) {
    return state.sendingReview;
  }

  @Selector()
  static sendedReview(state: ReviewStateModel) {
    return state.sendedReview;
  }

  @Selector()
  static selectReviewsState(state: ReviewStateModel) {
    return state.reviews;
  }

  @Selector()
  static selectGoodReviewsState(state: ReviewStateModel) {
    return state.goodReviews;
  }

  constructor(private customerService: CustomersService) {
  }

  ngxsOnInit(ctx: StateContext<ReviewStateModel>) {
  }

  @Action(GetReviews)
  getReviewsFromState(ctx: StateContext<ReviewStateModel>) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    this.customerService.getReviews().subscribe(
      response => ctx.dispatch(new GetReviewsSuccess(response)),
      error => ctx.dispatch(new GetReviewsFailed(error))
    );
  }

  @Action(GetReviewsSuccess)
  getReviewsFromStateSuccess(ctx: StateContext<ReviewStateModel>, action: GetReviewsSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      reviews: action.data,
    });
  }

  @Action(GetReviewsFailed)
  getReviewsFromStateFailed(ctx: StateContext<ReviewStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetGoodReviews)
  getGoodReviewsFromState(ctx: StateContext<ReviewStateModel>, {paintingId}: GetGoodReviews) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    this.customerService.getGoodReviews(paintingId).subscribe(
      response => ctx.dispatch(new GetGoodReviewsSuccess(response)),
      error => ctx.dispatch(new GetGoodReviewsFailed(error))
    );
  }

  @Action(GetGoodReviewsSuccess)
  getGoodReviewsFromStateSuccess(ctx: StateContext<ReviewStateModel>, action: GetGoodReviewsSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      goodReviews: action.data,
    });
  }

  @Action(GetGoodReviewsFailed)
  getGoodReviewsFromStateFailed(ctx: StateContext<ReviewStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(AddGoodReview)
  addGoodReview(ctx: StateContext<ReviewStateModel>, {data}: AddGoodReview) {
    ctx.patchState({
      sendingReview: true,
      sendedReview: false,
    });
    this.customerService.setReview(data).subscribe(
      response => ctx.dispatch(new AddGoodReviewSuccess(response)),
      error => ctx.dispatch(new AddGoodReviewFailed(error))
    );
  }

  @Action(AddGoodReviewSuccess)
  addGoodReviewSuccess(ctx: StateContext<ReviewStateModel>, action: AddGoodReviewSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      sendingReview: false,
      sendedReview: true,
      goodReviews: [...state.goodReviews, action.data],
    });
  }

  @Action(AddGoodReviewFailed)
  addGoodReviewFailed(ctx: StateContext<ReviewStateModel>) {
    ctx.patchState({
      sendingReview: false,
      sendedReview: false,
    });
  }
}
