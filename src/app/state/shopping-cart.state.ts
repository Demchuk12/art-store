import {Action, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Painting} from '../models/painting.model';
import {
  AddPaintingToCart,
  AddPaintingToCartFailed,
  AddPaintingToCartSuccess,
  ChangePaintingCountInCart,
  ChangePaintingCountInCartFailed,
  ChangePaintingCountInCartSuccess,
  DeletePaintingFromCart,
  DeletePaintingFromCartFailed,
  DeletePaintingFromCartSuccess,
  GetPaintingsInCart,
  GetPaintingsInCartFailed,
  GetPaintingsInCartSuccess,
  SendBillingInfo,
  SendBillingInfoFailed,
  SendBillingInfoSuccess
} from '../actions/shopping-cart.actions';

export class ShoppingCartStateModel {
  loading!: boolean;
  loaded!: boolean;
  sending!: boolean;
  sended!: boolean;
  paintingInCart!: Painting[];
}

@State<ShoppingCartStateModel>({
  name: 'shoppingCart',
  defaults: {
    loading: false,
    loaded: false,
    sending: false,
    sended: false,
    paintingInCart: []
  }
})

@Injectable()
export class ShoppingCartState implements NgxsOnInit {

  @Selector()
  static loading(state: ShoppingCartStateModel) {
    return state.loading;
  }

  @Selector()
  static loaded(state: ShoppingCartStateModel) {
    return state.loaded;
  }

  @Selector()
  static sending(state: ShoppingCartStateModel) {
    return state.sending;
  }

  @Selector()
  static sended(state: ShoppingCartStateModel) {
    return state.sended;
  }

  @Selector()
  static selectPaintingsInCartState(state: ShoppingCartStateModel) {
    return state.paintingInCart;
  }

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngxsOnInit(ctx: StateContext<ShoppingCartStateModel>) {
  }

  @Action(GetPaintingsInCart)
  getPaintingsInCartFromState(ctx: StateContext<ShoppingCartStateModel>) {
    ctx.patchState({
      loading: true,
      loaded: false,
    });
    this.shoppingCartService.getPaintings().subscribe(
      response => ctx.dispatch(new GetPaintingsInCartSuccess(response)),
      error => ctx.dispatch(new GetPaintingsInCartFailed(error))
    );
  }

  @Action(GetPaintingsInCartSuccess)
  getPaintingsInCartFromStateSuccess(ctx: StateContext<ShoppingCartStateModel>, action: GetPaintingsInCartSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      paintingInCart: action.data,
    });
  }

  @Action(GetPaintingsInCartFailed)
  getPaintingsInCartFromStateFailed(ctx: StateContext<ShoppingCartStateModel>, action: GetPaintingsInCartFailed) {
    ctx.patchState({
      loading: false,
      loaded: false,
      paintingInCart: action.error,
    });
  }

  @Action(AddPaintingToCart)
  addPaintingToCart(ctx: StateContext<ShoppingCartStateModel>, {data}: AddPaintingToCart) {
    ctx.patchState({
      loading: true,
    });
    this.shoppingCartService.addPaintingToCart(data).subscribe(
      response => ctx.dispatch(new AddPaintingToCartSuccess(response)),
      error => ctx.dispatch(new AddPaintingToCartFailed(error))
    );
  }

  @Action(AddPaintingToCartSuccess)
  addPaintingToCartSuccess(ctx: StateContext<ShoppingCartStateModel>, action: AddPaintingToCartSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      loading: false,
      paintingInCart: [...state.paintingInCart, action.data],
    });
  }

  @Action(AddPaintingToCartFailed)
  addPaintingToCartFailed(ctx: StateContext<ShoppingCartStateModel>, action: AddPaintingToCartFailed) {
    ctx.patchState({
      loading: false,
      paintingInCart: action.error,
    });
  }

  @Action(ChangePaintingCountInCart)
  changePaintingCountInCart(ctx: StateContext<ShoppingCartStateModel>, {data}: ChangePaintingCountInCart) {
    ctx.patchState({
      loading: true,
    });
    this.shoppingCartService.changePaintingsCount(data).subscribe(
      response => ctx.dispatch(new ChangePaintingCountInCartSuccess(response)),
      error => ctx.dispatch(new ChangePaintingCountInCartFailed(error))
    );
  }

  @Action(ChangePaintingCountInCartSuccess)
  changePaintingCountInCartSuccess(ctx: StateContext<ShoppingCartStateModel>) {
    ctx.patchState({
      loading: false,
    });
  }

  @Action(ChangePaintingCountInCartFailed)
  changePaintingCountInCartFailed(ctx: StateContext<ShoppingCartStateModel>) {
    ctx.patchState({
      loading: false,
    });
  }

  @Action(DeletePaintingFromCart)
  deletePaintingFromCart(ctx: StateContext<ShoppingCartStateModel>, {id}: DeletePaintingFromCart) {
    ctx.patchState({
      loading: true,
    });
    this.shoppingCartService.deletePaintingFromCart(id).subscribe(
      response => ctx.dispatch(new DeletePaintingFromCartSuccess(id)),
      error => ctx.dispatch(new DeletePaintingFromCartFailed(error))
    );
  }

  @Action(DeletePaintingFromCartSuccess)
  deletePaintingFromCartSuccess(ctx: StateContext<ShoppingCartStateModel>, action: DeletePaintingFromCartSuccess) {
    const state = ctx.getState();
    ctx.patchState({
      loading: false,
      paintingInCart: state.paintingInCart.filter((painting) => painting.id !== action.id),
    });
  }

  @Action(DeletePaintingFromCartFailed)
  deletePaintingFromCartFailed(ctx: StateContext<ShoppingCartStateModel>, action: DeletePaintingFromCartFailed) {
    ctx.patchState({
      loading: false,
      paintingInCart: action.error,
    });
  }

  @Action(SendBillingInfo)
  sendBillingInfo(ctx: StateContext<ShoppingCartStateModel>, {data}: SendBillingInfo) {
    ctx.patchState({
      sending: true,
      sended: false,
    });
    this.shoppingCartService.addBillingInfo(data).subscribe(
      response => ctx.dispatch(new SendBillingInfoSuccess(response)),
      error => ctx.dispatch(new SendBillingInfoFailed(error))
    );
  }

  @Action(SendBillingInfoSuccess)
  sendBillingInfoSuccess(ctx: StateContext<ShoppingCartStateModel>) {
    ctx.patchState({
      sending: false,
      sended: true,
    });
  }

  @Action(SendBillingInfoFailed)
  sendBillingInfoFailed(ctx: StateContext<ShoppingCartStateModel>) {
    ctx.patchState({
      sending: false,
      sended: false,
    });
  }
}
