import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {GetCategories} from '../../actions/category.actions';
import {CategoryState} from '../../state/category.state';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {

  @Select(CategoryState.selectCategoriesState) categories$!: Observable<Category[]>;
  @Select(CategoryState.loading) loading!: Observable<boolean>;
  @Select(CategoryState.loaded) loaded!: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetCategories());
  }
}
