import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {ArticleState} from '../../state/article.state';
import {Article} from '../../models/article.model';
import {GetArticles, GetArticlesByCategory} from '../../actions/article.actions';
import {CategoryState} from '../../state/category.state';
import {Category} from '../../models/category.model';
import {ActivatedRoute, Params} from '@angular/router';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.sass'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {
      params: {
        timing: 2
      }
    }))])
  ],
})
export class BlogPageComponent implements OnInit, OnDestroy {
  @Select(CategoryState.selectCategoriesState) categories$!: Observable<Category[]>;
  @Select(ArticleState.selectArticlesState) articles$!: Observable<Article[]>;
  @Select(ArticleState.loading) loading!: Observable<Article[]>;
  @Select(ArticleState.loaded) loaded!: Observable<Article[]>;
  @Select(CategoryState.loading) loadingCategory!: Observable<Article[]>;
  @Select(CategoryState.loaded) loadedCategory!: Observable<Article[]>;

  private subscription!: Subscription;
  articles: Article[] = [];
  articlesSubscription!: Subscription;
  hasParams!: boolean;
  config = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor(private store: Store, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      if (params['blogCategory']) {
        this.hasParams = true;
        this.store.dispatch(new GetArticlesByCategory(params['blogCategory']));
      } else {
        this.hasParams = false;
        this.store.dispatch(new GetArticles());
      }
    });
    this.articlesSubscription = this.articles$.subscribe(articles => this.articles = articles);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.articlesSubscription.unsubscribe();
  }

  onPageChange(event: number) {
    this.config.currentPage = event;
    window.scrollTo(0, 600);
  }
}
