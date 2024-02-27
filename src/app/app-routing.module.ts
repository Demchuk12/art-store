import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {GoodPageComponent} from './components/good-page/good-page.component';
import {CategoryPageComponent} from './components/category-page/category-page.component';
import {BlogPageComponent} from './components/blog-page/blog-page.component';
import {ArticlePageComponent} from './components/article-page/article-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Art Store'},
  {
    path: 'about-us',
    loadChildren: () => import('./components/about-us/about-us.module').then(m => m.AboutUsModule),
    title: 'About Us'
  },
  {
    path: 'careers',
    loadChildren: () => import('./components/careers/careers.module').then(m => m.CareersModule),
    title: 'Careers'
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./components/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
    title: 'Shopping Cart'
  },
  {path: 'blog-page', component: BlogPageComponent, title: 'Blog'},
  {path: 'blog-page/:blogCategory', component: BlogPageComponent},
  {path: 'blog-page/:blogCategory/:id', component: ArticlePageComponent},
  {path: ':category', component: CategoryPageComponent},
  {path: ':category/:id', component: GoodPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
