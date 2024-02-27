import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {CategoryState} from '../../state/category.state';
import {GetCategoriesSideBar} from '../../actions/category.actions';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-aside-block',
  templateUrl: './aside-block.component.html',
  styleUrls: ['./aside-block.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideBlockComponent implements OnInit {


  @Select(CategoryState.selectCategoriesState) categories$!: Observable<Category[]>;
  @Select(CategoryState.selectCategoriesSideBarState) categoriesSideBar$!: Observable<Category[]>;
  @Select(CategoryState.loading) loading!: Observable<boolean>;
  @Select(CategoryState.loaded) loaded!: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetCategoriesSideBar());
  }

  lessCategories = true;

  toggleCategories() {
    this.lessCategories = !this.lessCategories;
  }
}
