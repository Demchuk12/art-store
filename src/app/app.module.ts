import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppComponent} from './app.component';
import {PaintingComponent} from './components/painting/painting.component';
import {BestsellersComponent} from './components/bestsellers/bestsellers.component';
import {TopRankingComponent} from './components/top-ranking/top-ranking.component';
import {MostPopularComponent} from './components/most-popular/most-popular.component';
import {HeaderComponent} from './components/header/header.component';
import {TooltipDirective} from './directives/tooltip.directive';
import {PhoneFormatPipe} from './pipes/phone-format.pipe';
import {CategoriesComponent} from './components/categories/categories.component';
import {MainComponent} from './components/main/main.component';
import {AsideBlockComponent} from './components/aside-block/aside-block.component';
import {ArticleComponent} from './components/article/article.component';
import {CustomersComponent} from './components/customers/customers.component';
import {ReviewsBlockComponent} from './components/reviews-block/reviews-block.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {AsideBlockCategoryComponent} from './components/aside-block-category/aside-block-category.component';
import {FiltresCategoryComponent} from './components/filtres-category/filtres-category.component';
import {PaintingCategoryComponent} from './components/painting-category/painting-category.component';
import {GoodPageComponent} from './components/good-page/good-page.component';
import {CategoryPageComponent} from './components/category-page/category-page.component';
import {CategoryState} from './state/category.state';
import {PaintingsState} from './state/paintings.state';
import {ReviewState} from './state/review.state';
import {ShoppingCartState} from './state/shopping-cart.state';
import {FooterComponent} from './components/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PaintingCategoryListComponent} from './components/painting-category-list/painting-category-list.component';
import {BlogPageComponent} from './components/blog-page/blog-page.component';
import {BlogArticleComponent} from './components/blog-article/blog-article.component';
import {ArticleState} from './state/article.state';
import {ArticlePageComponent} from './components/article-page/article-page.component';
import {CommentComponent} from './components/comment/comment.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PaintingComponent,
    BestsellersComponent,
    TopRankingComponent,
    MostPopularComponent,
    HeaderComponent,
    TooltipDirective,
    PhoneFormatPipe,
    CategoriesComponent,
    MainComponent,
    AsideBlockComponent,
    ArticleComponent,
    CustomersComponent,
    ReviewsBlockComponent,
    HomeComponent,
    AsideBlockCategoryComponent,
    FiltresCategoryComponent,
    PaintingCategoryComponent,
    GoodPageComponent,
    CategoryPageComponent,
    FooterComponent,
    PaintingCategoryListComponent,
    BlogPageComponent,
    BlogArticleComponent,
    ArticlePageComponent,
    CommentComponent,
    BlogSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot([CategoryState, PaintingsState, ReviewState, ShoppingCartState, ArticleState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    CarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
