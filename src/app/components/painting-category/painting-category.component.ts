import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Painting} from '../../models/painting.model';
import {AddPaintingToCart} from '../../actions/shopping-cart.actions';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-painting-category',
  templateUrl: './painting-category.component.html',
  styleUrls: ['./painting-category.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaintingCategoryComponent implements OnInit {

  @Input() painting!: Painting;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  addToCart(painting: Painting) {
    painting.quantity = 1;
    painting.inCart = true;

    this.store.dispatch(new AddPaintingToCart(painting));
  }
}
