import {Painting} from '../models/painting.model';

export class GetPaintingsBestsellers {
  static readonly type = '[PAINTING] Get Paintings Bestsellers';
}

export class GetPaintingsBestsellersSuccess {
  static readonly type = '[PAINTING] Get Paintings Bestsellers Success';

  constructor(public data: Painting[]) {
  }
}

export class GetPaintingsBestsellersFailed {
  static readonly type = '[PAINTING] Get Paintings Bestsellers Failed';

  constructor(public error: any) {
  }
}

export class GetPaintingsMostPopular {
  static readonly type = '[PAINTING] Get Paintings Most Popular';
}

export class GetPaintingsMostPopularSuccess {
  static readonly type = '[PAINTING] Get Paintings Most Popular Success';

  constructor(public data: Painting[]) {
  }
}

export class GetPaintingsMostPopularFailed {
  static readonly type = '[PAINTING] Get Paintings Most Popular Failed';

  constructor(public error: any) {
  }
}

export class GetPaintingsTopRanking {
  static readonly type = '[PAINTING] Get Top Ranking';
}

export class GetPaintingsTopRankingSuccess {
  static readonly type = '[PAINTING] Get Paintings Top Ranking Success';

  constructor(public data: Painting[]) {
  }
}

export class GetPaintingsTopRankingFailed {
  static readonly type = '[PAINTING] Get Paintings Top Ranking Failed';

  constructor(public error: any) {
  }
}

export class GetPaintingsByCategory {
  static readonly type = '[PAINTING] Get Paintings By Category';

  constructor(public category: string) {
  }
}

export class GetPaintingsByCategorySuccess {
  static readonly type = '[PAINTING] Get Paintings By Category Success';

  constructor(public data: Painting[]) {
  }
}

export class GetPaintingsByCategoryFailed {
  static readonly type = '[PAINTING] Get Paintings By Category Failed';

  constructor(public error: any) {
  }
}

export class GetPaintingsById {
  static readonly type = '[PAINTING] Get Paintings By Id';

  constructor(public id: string) {
  }
}

export class GetPaintingsByIdSuccess {
  static readonly type = '[PAINTING] Get Paintings By Id Success';

  constructor(public data: Painting[]) {
  }
}

export class GetPaintingsByIdFailed {
  static readonly type = '[PAINTING] Get Paintings By Id Failed';

  constructor(public error: any) {
  }
}
