import {Category} from '../models/category.model';
import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {
  GetCategories,
  GetCategoriesFailed,
  GetCategoriesSideBar,
  GetCategoriesSideBarFailed,
  GetCategoriesSideBarSuccess,
  GetCategoriesSuccess
} from '../actions/category.actions';

export class CategoryStateModel {
  categories!: Category[];
  categoriesSideBar!: Category[];
  loading!: boolean;
  loaded!: boolean;
}

@State<CategoryStateModel>({
  name: 'categories',
  defaults: {
    categories: [],
    categoriesSideBar: [],
    loading: false,
    loaded: false
  }
})

@Injectable()
export class CategoryState implements NgxsOnInit {

  @Selector()
  static loading(state: CategoryStateModel) {
    return state.loading;
  }

  @Selector()
  static loaded(state: CategoryStateModel) {
    return state.loaded;
  }

  @Selector()
  static selectCategoriesState(state: CategoryStateModel) {
    return state.categories;
  }

  @Selector()
  static selectCategoriesSideBarState(state: CategoryStateModel) {
    return state.categoriesSideBar;
  }

  constructor(private categoriesService: CategoriesService) {
  }

  ngxsOnInit(ctx: StateContext<CategoryStateModel>) {
  }

  @Action(GetCategories)
  getCategoriesFromState(ctx: StateContext<CategoryStateModel>) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    this.categoriesService.getCategories().subscribe(
      response => ctx.dispatch(new GetCategoriesSuccess(response)),
      error => ctx.dispatch(new GetCategoriesFailed(error))
    );
  }

  @Action(GetCategoriesSuccess)
  getCategoriesFromStateSuccess(ctx: StateContext<CategoryStateModel>, action: GetCategoriesSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      categories: action.data,
    });
  }

  @Action(GetCategoriesFailed)
  getCategoriesFromStateFailed(ctx: StateContext<CategoryStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetCategoriesSideBar)
  getCategoriesSideBarFromState(ctx: StateContext<CategoryStateModel>) {
    return this.categoriesService.getCategoriesSideBar().subscribe(
      response => ctx.dispatch(new GetCategoriesSideBarSuccess(response)),
      error => ctx.dispatch(new GetCategoriesSideBarFailed(error))
    );
  }

  @Action(GetCategoriesSideBarSuccess)
  getCategoriesSideBarFromStateSuccess(ctx: StateContext<CategoryStateModel>, action: GetCategoriesSideBarSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      categoriesSideBar: action.data,
    });
  }

  @Action(GetCategoriesSideBarFailed)
  getCategoriesSideBarFromStateFailed(ctx: StateContext<CategoryStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }
}
