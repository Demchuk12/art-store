import {Painting} from '../models/painting.model';
import {BillingInfo} from '../models/billing-info.model';

export class GetPaintingsInCart {
  static readonly type = '[PAINTING] Get Paintings In Cart';
}

export class GetPaintingsInCartSuccess {
  static readonly type = '[PAINTING] Get Paintings In Cart Success';

  constructor(public data: Painting[]) {
  }
}

export class GetPaintingsInCartFailed {
  static readonly type = '[PAINTING] Get Paintings In Cart Failed';

  constructor(public error: any) {
  }
}

export class AddPaintingToCart {
  static readonly type = '[PAINTING] Add Painting To Cart';

  constructor(public data: Painting) {
  }
}

export class AddPaintingToCartSuccess {
  static readonly type = '[PAINTING] Add Painting To Cart Success';

  constructor(public data: Painting) {
  }
}

export class AddPaintingToCartFailed {
  static readonly type = '[PAINTING] Add Painting To Cart Failed';

  constructor(public error: any) {
  }
}

export class ChangePaintingCountInCart {
  static readonly type = '[PAINTING] Change Painting Count In Cart';

  constructor(public data: Painting) {
  }
}

export class ChangePaintingCountInCartSuccess {
  static readonly type = '[PAINTING] Change Painting Count In Cart Success';

  constructor(public data: Painting) {
  }
}

export class ChangePaintingCountInCartFailed {
  static readonly type = '[PAINTING] Change Painting Count In Cart Failed';

  constructor(public error: any) {
  }
}

export class DeletePaintingFromCart {
  static readonly type = '[PAINTING] Delete Painting From Cart';

  constructor(public id: number) {
  }
}

export class DeletePaintingFromCartSuccess {
  static readonly type = '[PAINTING] Delete Painting From Cart Success';

  constructor(public id: number) {
  }
}

export class DeletePaintingFromCartFailed {
  static readonly type = '[PAINTING] Delete Painting From Cart Failed';

  constructor(public error: any) {
  }
}

export class SendBillingInfo {
  static readonly type = '[BILLING-INFO] Send Billing Information';

  constructor(public data: BillingInfo) {
  }
}

export class SendBillingInfoSuccess {
  static readonly type = '[BILLING-INFO] Send Billing Information Success';

  constructor(public data: BillingInfo) {
  }
}

export class SendBillingInfoFailed {
  static readonly type = '[BILLING-INFO] Send Billing Information Failed';

  constructor(public error: any) {
  }
}
