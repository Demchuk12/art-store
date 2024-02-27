import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {filter, Observable, Subscription, take} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Painting} from '../../models/painting.model';
import {Select, Store} from '@ngxs/store';
import {ShoppingCartState} from '../../state/shopping-cart.state';
import {
  ChangePaintingCountInCart,
  DeletePaintingFromCart,
  GetPaintingsInCart,
  SendBillingInfo
} from '../../actions/shopping-cart.actions';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  paintingsInCart: Painting[] = [];
  cart!: Subscription;
  form!: FormGroup;

  @Select(ShoppingCartState.selectPaintingsInCartState) paintingsInCart$!: Observable<Painting[]>;
  @Select(ShoppingCartState.loading) loading!: Observable<boolean>;
  @Select(ShoppingCartState.loaded) loaded!: Observable<boolean>;
  @Select(ShoppingCartState.sending) sending!: Observable<boolean>;
  @Select(ShoppingCartState.sended) sended!: Observable<boolean>;

  constructor(private shoppingCartService: ShoppingCartService, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPaintingsInCart());

    this.cart = this.paintingsInCart$
      .subscribe((paintings) => {
        this.paintingsInCart = paintings;
      });

    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      zip: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      billingMethod: new FormControl('', Validators.required),
      paymentMethod: new FormControl(''),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      cardHolder: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      date: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      cvc: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
      notes: new FormControl('', [
        Validators.maxLength(1000)
      ])
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

  sendBillingInfo() {
    if (this.form.valid) {
      const formData = {...this.form.value};
      this.store.dispatch(new SendBillingInfo(formData));

      this.sended.pipe(filter(sended => sended), take(1))
        .subscribe(() => this.form.reset());
    }
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
