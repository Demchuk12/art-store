import {NgModule} from '@angular/core';
import {ShoppingCartComponent} from './shopping-cart.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: ShoppingCartComponent
      }
    ])
  ]
})
export class ShoppingCartModule {

}
