import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {PaintingsState} from '../../state/paintings.state';
import {Painting} from '../../models/painting.model';
import {GetPaintingsBestsellers} from '../../actions/painting.actions';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestsellersComponent implements OnInit {

  @Select(PaintingsState.selectPaintingsBestsellersState) paintings$!: Observable<Painting[]>;
  @Select(PaintingsState.loading) loading!: Observable<boolean>;
  @Select(PaintingsState.loaded) loaded!: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPaintingsBestsellers);
  }
}
