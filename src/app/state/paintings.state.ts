import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {PaintingsService} from '../services/paintings.service';
import {
  GetPaintingsBestsellers,
  GetPaintingsBestsellersFailed,
  GetPaintingsBestsellersSuccess,
  GetPaintingsByCategory,
  GetPaintingsByCategoryFailed,
  GetPaintingsByCategorySuccess,
  GetPaintingsById,
  GetPaintingsByIdFailed,
  GetPaintingsByIdSuccess,
  GetPaintingsMostPopular,
  GetPaintingsMostPopularFailed,
  GetPaintingsMostPopularSuccess,
  GetPaintingsTopRanking,
  GetPaintingsTopRankingFailed,
  GetPaintingsTopRankingSuccess
} from '../actions/painting.actions';
import {Painting} from '../models/painting.model';

export class PaintingsStateModel {
  bestsellers!: Painting[];
  mostPopular!: Painting[];
  topRanking!: Painting[];
  byCategory!: Painting[];
  byId!: Painting[];
  loading!: boolean;
  loaded!: boolean;
}

@State<PaintingsStateModel>({
  name: 'paintings',
  defaults: {
    bestsellers: [],
    mostPopular: [],
    topRanking: [],
    byCategory: [],
    byId: [],
    loading: false,
    loaded: false
  }
})

@Injectable()
export class PaintingsState implements NgxsOnInit {

  @Selector()
  static loading(state: PaintingsStateModel) {
    return state.loading;
  }

  @Selector()
  static loaded(state: PaintingsStateModel) {
    return state.loaded;
  }

  @Selector()
  static selectPaintingsBestsellersState(state: PaintingsStateModel) {
    return state.bestsellers;
  }

  @Selector()
  static selectPaintingsMostPopularState(state: PaintingsStateModel) {
    return state.mostPopular;
  }

  @Selector()
  static selectPaintingsTopRankingState(state: PaintingsStateModel) {
    return state.topRanking;
  }

  @Selector()
  static selectPaintingsByCategoryState(state: PaintingsStateModel) {
    return state.byCategory;
  }

  @Selector()
  static selectPaintingsByIdState(state: PaintingsStateModel) {
    return state.byId;
  }

  constructor(private paintingService: PaintingsService) {
  }

  ngxsOnInit(ctx: StateContext<PaintingsStateModel>) {
  }

  @Action(GetPaintingsBestsellers)
  getPaintingsBestsellersFromState(ctx: StateContext<PaintingsStateModel>) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    return this.paintingService.getPaintingsBestsellers().subscribe(
      response => ctx.dispatch(new GetPaintingsBestsellersSuccess(response)),
      error => ctx.dispatch(new GetPaintingsBestsellersFailed(error))
    );
  }

  @Action(GetPaintingsBestsellersSuccess)
  getPaintingsBestsellersFromStateSuccess(ctx: StateContext<PaintingsStateModel>, action: GetPaintingsBestsellersSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      bestsellers: action.data,
    });
  }

  @Action(GetPaintingsBestsellersFailed)
  getPaintingsBestsellersFromStateFailed(ctx: StateContext<PaintingsStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetPaintingsMostPopular)
  getPaintingsMostPopularFromState(ctx: StateContext<PaintingsStateModel>) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    return this.paintingService.getPaintingsMostPopular().subscribe(
      response => ctx.dispatch(new GetPaintingsMostPopularSuccess(response)),
      error => ctx.dispatch(new GetPaintingsMostPopularFailed(error))
    );
  }

  @Action(GetPaintingsMostPopularSuccess)
  getPaintingsMostPopularFromStateSuccess(ctx: StateContext<PaintingsStateModel>, action: GetPaintingsMostPopularSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      mostPopular: action.data,
    });
  }

  @Action(GetPaintingsMostPopularFailed)
  getPaintingsMostPopularFromStateFailed(ctx: StateContext<PaintingsStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetPaintingsTopRanking)
  getPaintingsTopRankingFromState(ctx: StateContext<PaintingsStateModel>) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    return this.paintingService.getPaintingsTopRanking().subscribe(
      response => ctx.dispatch(new GetPaintingsTopRankingSuccess(response)),
      error => ctx.dispatch(new GetPaintingsTopRankingFailed(error))
    );
  }

  @Action(GetPaintingsTopRankingSuccess)
  getPaintingsTopRankingFromStateSuccess(ctx: StateContext<PaintingsStateModel>, action: GetPaintingsTopRankingSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      topRanking: action.data,
    });
  }

  @Action(GetPaintingsTopRankingFailed)
  getPaintingsTopRankingFromStateFailed(ctx: StateContext<PaintingsStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetPaintingsByCategory)
  getPaintingsByCategoryFromState(ctx: StateContext<PaintingsStateModel>, {category}: GetPaintingsByCategory) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    return this.paintingService.getPaintingsByCategory(category).subscribe(
      response => ctx.dispatch(new GetPaintingsByCategorySuccess(response)),
      error => ctx.dispatch(new GetPaintingsByCategoryFailed(error))
    );
  }

  @Action(GetPaintingsByCategorySuccess)
  getPaintingsByCategoryFromStateSuccess(ctx: StateContext<PaintingsStateModel>, action: GetPaintingsByCategorySuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      byCategory: action.data,
    });
  }

  @Action(GetPaintingsByCategoryFailed)
  getPaintingsByCategoryFromStateFailed(ctx: StateContext<PaintingsStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetPaintingsById)
  getPaintingsByIdFromState(ctx: StateContext<PaintingsStateModel>, {id}: GetPaintingsById) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    return this.paintingService.getPaintingsById(id).subscribe(
      response => ctx.dispatch(new GetPaintingsByIdSuccess(response)),
      error => ctx.dispatch(new GetPaintingsByIdFailed(error))
    );
  }

  @Action(GetPaintingsByIdSuccess)
  getPaintingsByIdFromStateSuccess(ctx: StateContext<PaintingsStateModel>, action: GetPaintingsByIdSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      byId: action.data,
    });
  }

  @Action(GetPaintingsByIdFailed)
  getPaintingsByIdFromStateFailed(ctx: StateContext<PaintingsStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }
}
