import {Category} from '../models/category.model';

export class GetCategories {
  static readonly type = '[CATEGORY] Get Categories';
}

export class GetCategoriesSuccess {
  static readonly type = '[CATEGORY] Get Categories Success';

  constructor(public data: Category[]) {
  }
}

export class GetCategoriesFailed {
  static readonly type = '[CATEGORY] Get Categories Failed';

  constructor(public error: any) {
  }
}

export class GetCategoriesSideBar {
  static readonly type = '[CATEGORY] Get Categories Side Bar';
}

export class GetCategoriesSideBarSuccess {
  static readonly type = '[CATEGORY] Get Categories Side Bar Success';

  constructor(public data: Category[]) {
  }
}

export class GetCategoriesSideBarFailed {
  static readonly type = '[CATEGORY] Get Categories Side Bar Failed';

  constructor(public error: any) {
  }
}
