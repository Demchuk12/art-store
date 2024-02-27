import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {ShoppingCartState} from '../../state/shopping-cart.state';
import {Painting} from '../../models/painting.model';
import {transition, trigger, useAnimation} from '@angular/animations';
import {pulse, slideInUp, slideOutUp} from 'ng-animate';
import {
  ChangePaintingCountInCart,
  DeletePaintingFromCart,
  GetPaintingsInCart
} from '../../actions/shopping-cart.actions';
import {CategoryState} from '../../state/category.state';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  animations: [
    trigger(
      'pulse',
      [
        transition('* => *', useAnimation(pulse)),
      ]),
    trigger(
      'slideInUp',
      [
        transition(':enter', useAnimation(slideInUp, {
          params: {
            timing: 0.5
          }
        })),
        transition(':leave', useAnimation(slideOutUp, {
          params: {
            timing: 0.5
          }
        }))
      ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Select(CategoryState.selectCategoriesState) categories$!: Observable<Category[]>;
  @Select(ShoppingCartState.selectPaintingsInCartState) paintingsInCart$!: Observable<Painting[]>;
  @Select(ShoppingCartState.loading) loading!: Observable<boolean>;
  @Select(ShoppingCartState.loaded) loaded!: Observable<boolean>;
  paintingsInCart: Painting[] = [];
  cart!: Subscription;
  modal = false;
  menu = false;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPaintingsInCart());

    this.cart = this.paintingsInCart$
      .subscribe((paintings) => {
        this.paintingsInCart = paintings;
      });
  }

  ngOnDestroy() {
    this.cart.unsubscribe();
  }

  decrementPainting(painting: Painting) {
    if (painting.quantity === 1) {
      this.removePainting(painting);
    } else {
      painting.quantity -= 1;
      this.store.dispatch(new ChangePaintingCountInCart(painting));
    }
  }

  incrementPainting(painting: Painting) {
    painting.quantity += 1;
    this.store.dispatch(new ChangePaintingCountInCart(painting));
  }

  removePainting(painting: Painting) {
    this.store.dispatch(new DeletePaintingFromCart(painting.id));
  }

  trackPaintings(index: number, item: Painting) {
    return item.id;
  }

  get totalPrice() {
    if (this.paintingsInCart?.length > 0) {
      return this.paintingsInCart.reduce((result, painting) =>
          ({price: result.price + painting.quantity * painting.price}),
        {price: 0}).price;
    }
    return 0;
  }
}
