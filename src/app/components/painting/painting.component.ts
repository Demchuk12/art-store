import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Painting} from '../../models/painting.model';
import {Store} from '@ngxs/store';
import {AddPaintingToCart} from '../../actions/shopping-cart.actions';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaintingComponent implements OnInit {

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
