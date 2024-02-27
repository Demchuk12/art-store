import {Article, Comment} from '../models/article.model';
import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {BlogService} from '../services/blog.service';
import {
  AddArticleComment,
  AddArticleCommentFailed,
  AddArticleCommentSuccess,
  GetArticleById,
  GetArticleByIdFailed,
  GetArticleByIdSuccess,
  GetArticleComments,
  GetArticleCommentsFailed,
  GetArticleCommentsSuccess,
  GetArticles,
  GetArticlesByCategory,
  GetArticlesByCategoryFailed,
  GetArticlesByCategorySuccess,
  GetArticlesFailed,
  GetArticlesSuccess
} from '../actions/article.actions';

export class ArticleStateModel {
  articles!: Article[];
  byId!: {};
  loading!: boolean;
  loaded!: boolean;
  comments!: Comment[];
  loadingComments!: boolean;
  loadedComments!: boolean;
  sendingComment!: boolean;
  sendedComment!: boolean;
}

@State<ArticleStateModel>({
  name: 'articles',
  defaults: {
    articles: [],
    byId: {},
    loading: false,
    loaded: false,
    comments: [],
    loadingComments: false,
    loadedComments: false,
    sendingComment: false,
    sendedComment: false
  }
})

@Injectable()
export class ArticleState implements NgxsOnInit {
  @Selector()
  static loading(state: ArticleStateModel) {
    return state.loading;
  }

  @Selector()
  static loaded(state: ArticleStateModel) {
    return state.loaded;
  }

  @Selector()
  static loadingComments(state: ArticleStateModel) {
    return state.loadingComments;
  }

  @Selector()
  static loadedComments(state: ArticleStateModel) {
    return state.loadedComments;
  }

  @Selector()
  static sendingComment(state: ArticleStateModel) {
    return state.sendingComment;
  }

  @Selector()
  static sendedComment(state: ArticleStateModel) {
    return state.sendedComment;
  }

  @Selector()
  static selectArticlesState(state: ArticleStateModel) {
    return state.articles;
  }

  @Selector()
  static selectArticleById(state: ArticleStateModel) {
    return state.byId;
  }

  @Selector()
  static selectArticleCommentsState(state: ArticleStateModel) {
    return state.comments;
  }

  @Selector()
  static selectArticleCommentsParentState(state: ArticleStateModel) {
    return state.comments.filter(comment => comment.parentId === undefined);
  }

  @Selector()
  static selectArticleCommentsChildrenState(state: ArticleStateModel) {
    return (parentId: number) => {
      return state.comments.filter(s => s.parentId === parentId);
    };
  }

  constructor(private blogService: BlogService) {
  }

  ngxsOnInit(ctx: StateContext<ArticleStateModel>) {
  }

  @Action(GetArticles)
  getArticlesFromState(ctx: StateContext<ArticleStateModel>) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    this.blogService.getArticles().subscribe(
      response => ctx.dispatch(new GetArticlesSuccess(response)),
      error => ctx.dispatch(new GetArticlesFailed(error))
    );
  }

  @Action(GetArticlesSuccess)
  getArticlesFromStateSuccess(ctx: StateContext<ArticleStateModel>, action: GetArticlesSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      articles: action.data,
    });
  }

  @Action(GetArticlesFailed)
  getArticlesFromStateFailed(ctx: StateContext<ArticleStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetArticlesByCategory)
  getArticlesByCategoryFromState(ctx: StateContext<ArticleStateModel>, {category}: GetArticlesByCategory) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    return this.blogService.getArticlesByCategory(category).subscribe(
      response => ctx.dispatch(new GetArticlesByCategorySuccess(response)),
      error => ctx.dispatch(new GetArticlesByCategoryFailed(error))
    );
  }

  @Action(GetArticlesByCategorySuccess)
  getArticlesByCategoryFromStateSuccess(ctx: StateContext<ArticleStateModel>, action: GetArticlesByCategorySuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      articles: action.data,
    });
  }

  @Action(GetArticlesByCategoryFailed)
  getArticlesByCategoryFromStateFailed(ctx: StateContext<ArticleStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetArticleById)
  getArticleByIdFromState(ctx: StateContext<ArticleStateModel>, {articleId}: GetArticleById) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    return this.blogService.getArticleById(articleId).subscribe(
      response => ctx.dispatch(new GetArticleByIdSuccess(response)),
      error => ctx.dispatch(new GetArticleByIdFailed(error))
    );
  }

  @Action(GetArticleByIdSuccess)
  getArticleByIdFromStateSuccess(ctx: StateContext<ArticleStateModel>, action: GetArticleByIdSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      byId: action.data,
    });
  }

  @Action(GetArticleByIdFailed)
  getArticleByIdFromStateFailed(ctx: StateContext<ArticleStateModel>) {
    ctx.patchState({
      loading: false,
      loaded: false,
    });
  }

  @Action(GetArticleComments)
  getArticleCommentsFromState(ctx: StateContext<ArticleStateModel>, {articleId}: GetArticleComments) {
    ctx.patchState({
      loadingComments: true,
      loadedComments: false,
    });
    this.blogService.getArticleComments(articleId).subscribe(
      response => ctx.dispatch(new GetArticleCommentsSuccess(response)),
      error => ctx.dispatch(new GetArticleCommentsFailed(error))
    );
  }

  @Action(GetArticleCommentsSuccess)
  getArticleCommentsFromStateSuccess(ctx: StateContext<ArticleStateModel>, action: GetArticleCommentsSuccess) {
    ctx.patchState({
      loadingComments: false,
      loadedComments: true,
      comments: action.data,
    });
  }

  @Action(GetArticleCommentsFailed)
  getArticleCommentsFromStateFailed(ctx: StateContext<ArticleStateModel>) {
    ctx.patchState({
      loadingComments: false,
      loadedComments: false,
    });
  }

  @Action(AddArticleComment)
  addArticleComment(ctx: StateContext<ArticleStateModel>, {data}: AddArticleComment) {
    ctx.patchState({
      sendingComment: true,
      sendedComment: false,
    });
    this.blogService.setComment(data).subscribe(
      response => ctx.dispatch(new AddArticleCommentSuccess(response)),
      error => ctx.dispatch(new AddArticleCommentFailed(error))
    );
  }

  @Action(AddArticleCommentSuccess)
  addArticleCommentSuccess(ctx: StateContext<ArticleStateModel>, action: AddArticleCommentSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      sendingComment: false,
      sendedComment: true,
      comments: [...state.comments, action.data],
    });
  }

  @Action(AddArticleCommentFailed)
  addArticleCommentFailed(ctx: StateContext<ArticleStateModel>) {
    ctx.patchState({
      sendingComment: false,
      sendedComment: false,
    });
  }
}
