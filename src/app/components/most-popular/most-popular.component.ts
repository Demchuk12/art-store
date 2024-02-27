import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {PaintingsState} from '../../state/paintings.state';
import {GetPaintingsMostPopular} from '../../actions/painting.actions';
import {Painting} from '../../models/painting.model';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MostPopularComponent implements OnInit {

  @Select(PaintingsState.selectPaintingsMostPopularState) paintings$!: Observable<Painting[]>;
  @Select(PaintingsState.loading) loading!: Observable<boolean>;
  @Select(PaintingsState.loaded) loaded!: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPaintingsMostPopular());
  }
}
